<script lang="ts">
    import {
        Engine,
        Render,
        Runner,
        Common,
        Composite,
        Svg,
        Bodies,
        type Vector,
        Mouse,
        MouseConstraint,
        Body,
        type World,
    } from "matter-js";
    import { onMount, onDestroy } from "svelte";
    import "./pathseg.js";
    // @ts-ignore
    import PolyDecomp from "poly-decomp";
    import { cubicOut } from "svelte/easing";

    interface Props {
        width: number;
        height: number;
        topOffset?: number;
    }

    const { width, height, topOffset = 0 }: Props = $props();

    let container = $state<HTMLDivElement>();
    const svgs: Record<
        "ball" | "box" | "cat" | "fun_star" | "green_triangle" | "orange_triangle" | "squiggle" | "star",
        { shape: string; img: string; scaleMultiplier?: number; bodyRotation?: number; verticies?: Vector[][] | undefined; naturalWidth?: number; naturalHeight?: number }
    > = {
        ball: {
            img: "/footer/newshapes/ball.png",
            shape: "/footer/newshapes/ballShape.svg",
        },
        box: {
            img: "/footer/newshapes/box.png",
            shape: "/footer/newshapes/boxShape.svg",
            scaleMultiplier: 1,
            bodyRotation: Math.PI / 2,
        },
        cat: {
            img: "/footer/newshapes/cat.png",
            shape: "/footer/newshapes/catShape.svg",
            scaleMultiplier: 0.6,
        },
        fun_star: {
            img: "/footer/newshapes/funStar.png",
            shape: "/footer/newshapes/starShape.svg",
        },
        green_triangle: {
            img: "/footer/newshapes/green_triangle.png",
            shape: "/footer/newshapes/triangleShape.svg",
            scaleMultiplier: 0.6,
        },
        orange_triangle: {
            img: "/footer/newshapes/orange_triangle.png",
            shape: "/footer/newshapes/triangleShape.svg",
            scaleMultiplier: 0.6,
        },
        squiggle: {
            img: "/footer/newshapes/squiggle.png",
            shape: "/footer/newshapes/squiggleShape.svg",
            scaleMultiplier: 0.45,
        },
        star: {
            img: "/footer/newshapes/star.png",
            shape: "/footer/newshapes/starShape.svg",
        },
    };

    let world: World | undefined = undefined;
    let render: Render | undefined = undefined;
    let mouseCons: MouseConstraint | undefined = undefined;
    let engine: Engine | undefined = undefined;
    let initialized = $state(false);
    let mouseCollider: HTMLDivElement | undefined = $state();
    let rightBoundRect: Body | undefined = undefined;
    let botBoundRect: Body | undefined = undefined;
    let runner: ReturnType<typeof Runner.create> | undefined = undefined;
    let footerVisibleObserver: IntersectionObserver | undefined = undefined;

    function addShape(
        x: number,
        y: number,
        verts: Vector[][],
        texturePath: string,
        velX?: number,
        velY?: number,
        scaleMultiplier = 1,
        naturalWidth?: number,
        naturalHeight?: number,
        bodyRotation = 0,
    ) {
        if (!world) return;

        const b = Bodies.fromVertices(
            x,
            y,
            verts,
            {
                render: {
                    sprite: {
                        texture: texturePath,
                        xScale: 1,
                        yScale: 1,
                    },
                },
                density: 1.2,
                restitution: 0,
                frictionAir: 0.02,
            },
            true,
        );

        if (scaleMultiplier !== 1) {
            Body.scale(b, scaleMultiplier, scaleMultiplier);
        }
        if (bodyRotation !== 0) {
            Body.setAngle(b, bodyRotation);
        }

        // Derive sprite scale from the body's actual post-decomposition bounds so
        // the texture always aligns with the collision shape.
        if (naturalWidth && naturalHeight) {
            const bodyW = b.bounds.max.x - b.bounds.min.x;
            const bodyH = b.bounds.max.y - b.bounds.min.y;
            const s = Math.min(bodyW / naturalWidth, bodyH / naturalHeight);
            b.render.sprite!.xScale = s;
            b.render.sprite!.yScale = s;
        }

        Body.set(b, "position", { x, y });
        if (velX && velY) {
            Body.set(b, "velocity", { x: velX, y: velY });
        }
        Composite.add(world, b);
    }

    onMount(async () => {
        Common.setDecomp(PolyDecomp);
        // return;
        engine = Engine.create({
            gravity: { scale: 0.0018, x: 0, y: 1 },
            positionIterations: 8,
            velocityIterations: 6,
        });
        world = engine.world;

        runner = Runner.create();

        // fetch svgs in js
        async function loadSvgs(url: string) {
            const text = await (await fetch(url)).text();
            return new DOMParser().parseFromString(text, "image/svg+xml");
        }

        function Svg2Vertices(d: Document) {
            const paths = d.querySelectorAll("path");

            const res: Vector[][] = [];
            for (const p of paths) {
                res.push(Svg.pathToVertices(p, 30));
            }
            return res;
        }

        function loadImageDimensions(url: string): Promise<{ w: number; h: number }> {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
                img.onerror = () => resolve({ w: 0, h: 0 });
                img.src = url;
            });
        }

        // load vertex shapes and image dimensions of each shape
        await Promise.all(
            Object.values(svgs).map((item) =>
                Promise.all([
                    loadSvgs(item.shape).then((d) => {
                        item.verticies = Svg2Vertices(d);
                    }),
                    loadImageDimensions(item.img).then(({ w, h }) => {
                        item.naturalWidth = w;
                        item.naturalHeight = h;
                    }),
                ]),
            ),
        );

        // Pre-defined pile: spawn above the viewport so when the runner starts (scroll
        // activation), items fall from the top of the page into the canvas.
        const rng = Math.random;
        const viewportTopOffset =
            typeof window !== "undefined" ? window.innerHeight : Math.max(height, 800);
        const fallBand = 420;
        const getXPos = () => rng() * Math.max(width - 80, 40) + 40;
        const getFallY = () => -viewportTopOffset - rng() * fallBand;
        const spawnShape = (s: typeof svgs[keyof typeof svgs], xPos: number) =>
            addShape(xPos, getFallY(), s.verticies!, s.img, undefined, undefined, s.scaleMultiplier ?? 1, s.naturalWidth, s.naturalHeight, s.bodyRotation ?? 0);

        spawnShape(svgs.ball, width / 2 + (rng() - 0.5) * 120);
        // spawnShape(svgs.ball, getXPos());
        spawnShape(svgs.orange_triangle, width / 2 + (rng() - 0.5) * 120);
        // spawnShape(svgs.orange_triangle, getXPos());
        spawnShape(svgs.box, width / 2 + (rng() - 0.5) * 120);
        // spawnShape(svgs.box, width / 2 + (rng() - 0.5) * 120);
        spawnShape(svgs.cat, width / 2 + (rng() - 0.5) * 120);
        // spawnShape(svgs.cat, getXPos());
        spawnShape(svgs.star, getXPos());
        // spawnShape(svgs.star, getXPos());
        spawnShape(svgs.fun_star, getXPos());
        // spawnShape(svgs.fun_star, getXPos());
        spawnShape(svgs.green_triangle, width / 2 + (rng() - 0.5) * 120);
        // spawnShape(svgs.green_triangle, width / 2 + (rng() - 0.5) * 120);
        spawnShape(svgs.squiggle, getXPos());
        // spawnShape(svgs.squiggle, getXPos());



        // world boundry

        rightBoundRect = Bodies.rectangle(width + 500, 10000, 1000, 20000, {
            isStatic: true,
            render: { visible: false },
        });
        botBoundRect = Bodies.rectangle(width / 2, height - 10, 10000, 10, {
            isStatic: true,
            render: { visible: false },
        });

        Composite.add(world, [
            Bodies.rectangle(0, 10000, 10, 20000, {
                isStatic: true,
                render: { visible: false },
            }),
            rightBoundRect,
            botBoundRect,
        ]);

        const pixelRatio = "devicePixelRatio" in window ? window.devicePixelRatio : 1;

        render = Render.create({
            element: container,
            engine,
            options: {
                width,
                height,
                background: "transparent",
                wireframes: false,
                pixelRatio,
            },
        });

        Render.run(render);

        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: width, y: height },
        });

        initialized = true;

        footerVisibleObserver = new IntersectionObserver(
            (entries) => {
                if (!entries.some((e) => e.isIntersecting) || !runner || !engine) return;
                Runner.run(runner, engine);
                footerVisibleObserver?.disconnect();
                footerVisibleObserver = undefined;
            },
            { root: null, rootMargin: "0px", threshold: 0.12 },
        );
        if (container) {
            footerVisibleObserver.observe(container);
        }
    });

    onDestroy(() => {
        footerVisibleObserver?.disconnect();
        footerVisibleObserver = undefined;
        if (runner) {
            Runner.stop(runner);
            runner = undefined;
        }
    });

    $effect(() => {
        if (initialized && render && world && engine) {
            const pixelRatio = "devicePixelRatio" in window ? window.devicePixelRatio : 1;
            render.bounds.max.x = width * pixelRatio;
            render.bounds.max.y = height * pixelRatio;

            render.options.width = width ;
            render.options.height = height ;

            render.canvas.width = width  ;
            render.canvas.height = height ;

            const mouse = Mouse.create(mouseCollider!);
            mouse.pixelRatio = pixelRatio;
            // @ts-ignore
            mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
            // @ts-ignore
            mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
            // @ts-ignore
            mouse.element.removeEventListener("wheel", mouse.mousewheel);

            mouseCons = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    damping: 0.5,
                    render: {
                        visible: false,
                    },
                },
            });

            Composite.add(world, mouseCons);

            render.mouse = mouse;
        }

        return () => {
            if (mouseCons && world) {
                Composite.remove(world, mouseCons);
            }
        };
    });

    $effect(() => {
        if (width > 200 && rightBoundRect) {
            Body.set(rightBoundRect, "position", { x: width + 500, y: 10000 });
        }
    });

    $effect(() => {
        if (height > 200 && botBoundRect) {
            Body.set(botBoundRect, "position", { x: width / 2, y: height - 10 });
        }
    });

    const maxObjs = 15;
    let spawnedObjsCount = $state(0);

    let puffX = $state(0);
    let puffY = $state(0);

    function onmouseup({ offsetX, offsetY }: { offsetX: number; offsetY: number }) {
        if (mouseCons !== undefined && mouseCons.body !== null) {
            return;
        }
        if (spawnedObjsCount < maxObjs) {
            const randShape = Object.values(svgs).at(
                Math.floor(Math.random() * Object.keys(svgs).length),
            );
            if (!randShape) return;
            addShape(
                offsetX,
                offsetY,
                randShape.verticies!,
                randShape.img,
                Math.random() * 20 - 10,
                -Math.random() * 20,
                randShape.scaleMultiplier ?? 1,
                randShape.naturalWidth,
                randShape.naturalHeight,
                randShape.bodyRotation ?? 0,
            );
            spawnedObjsCount++;
        } else {
            puffX = offsetX;
            puffY = offsetY;
        }
    }

    function puff(node: HTMLElement, { duration }: { duration: number }) {
        return {
            duration,
            css: (t: number, u: number) => {
                const eased = cubicOut(t);

                return `
                transform: translate(-50%, -50%) scale(${1 + t * 0.5}) ;
                opacity: ${u * 0.4};
                `;
            },
        };
    }
</script>

<div
        class="physics-layer"
        style="position:absolute; left:0; top:{topOffset}px; width:{width}px; height:{height}px; z-index:10;"
>
    <div
            class="mouseCollider"
            style="width:{width}px; height:{height}px; position:absolute; top:0; left:0; z-index:10;"
            bind:this={mouseCollider}
            onpointerup={(e) => {
            onmouseup(e);
        }}
    >
        {#key [puffX, puffY]}
            <div class="puff" style="--x: {puffX}px; --y:{puffY}px;" in:puff={{ duration: 200 }}></div>
        {/key}
    </div>

    <div
            class="physicsContainer"
            bind:this={container}
            style="width:{width}px; height:{height}px; "
    ></div>
</div>

<style>
    @keyframes fadeout {
        from {
            transform: scale(1);
            opacity: 0.4;
        }

        to {
            transform: scale(1.5);
            opacity: 0;
        }
    }
    .puff {
        position: absolute;
        top: var(--y);
        left: var(--x);
        width: 4rem;
        height: 4rem;
        background-color: var(--black);
        border-radius: 100%;

        opacity: 0;
        pointer-events: none;
    }

    .physics-layer {
        max-width: 100dvw;
    }

    .physicsContainer {
        position: relative;
        z-index: 1;
        max-width: 100dvw;
    }
    :global(.physicsContainer > *) {
        max-width: 100%;
    }

    .mouseCollider {
        max-width: 100dvw;
    }
</style>
