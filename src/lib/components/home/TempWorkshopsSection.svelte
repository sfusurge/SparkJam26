<script lang="ts">
    import SectionBadge from "$lib/components/home/SectionBadge.svelte";
</script>

<section class="workshops-section relative mx-auto mt-24 w-full max-w-[1334px] px-[3%]">
    <SectionBadge label="04" class="rotate-15" />

    <div class="relative mt-14">
        <!-- Corners -->
        <div class="pointer-events-none absolute -z-10 top-0 left-0">
            <div class="size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-boba-black"></div>
        </div>
        <div class="pointer-events-none absolute -z-10 top-0 right-0">
            <div class="size-3 translate-x-1/2 -translate-y-1/2 rotate-45 bg-boba-black"></div>
        </div>
        <div class="pointer-events-none absolute -z-10 bottom-0 left-0">
            <div class="size-3 -translate-x-1/2 translate-y-1/2 rotate-45 bg-boba-black"></div>
        </div>
        <div class="pointer-events-none absolute -z-10 bottom-0 right-0">
            <div class="size-3 translate-x-1/2 translate-y-1/2 rotate-45 bg-boba-black"></div>
        </div>

        <!-- Borders -->
        <div class="absolute -top-24 -bottom-30 left-0 w-[1px] bg-boba-black"></div>
        <div class="absolute -top-24 -bottom-30 right-0 w-[1px] bg-boba-black"></div>
        <div class="absolute top-0 left-1/2 h-[1px] w-screen -translate-x-1/2 bg-boba-black"></div>
        <div class="absolute bottom-0 left-1/2 h-[1px] w-screen -translate-x-1/2 bg-boba-black"></div>

        <div class="overflow-hidden rounded-xl border-2 border-boba-black bg-boba-black">
            <div
                    class="relative flex min-h-[420px] items-center justify-center rounded-xl bg-cover bg-center bg-no-repeat sm:min-h-[560px] lg:min-h-[850px]"
                    style="background-image: url('/dark_bg.png')"
            >
                <div class="dot-bg bg-sparky-yellow"></div>

                <div
                        class="pointer-events-none absolute inset-0 z-8 flex items-center justify-center overflow-visible"
                        aria-hidden="true"
                >
                    <div class="polygon-shapes relative shrink-0">
                        <img
                                src="/shapes/2D-Star.svg"
                                alt=""
                                class="shape-img absolute -left-[2%] top-[18%] w-[114px] -rotate-[24.08deg]"
                        />
                        <img
                                src="/shapes/2D - Triangle.svg"
                                alt=""
                                class="shape-img absolute -right-[10%] bottom-[10%] w-[143px] rotate-[22.52deg]"
                        />
                        <img
                                src="/workshop/Yellow_Circle.svg"
                                alt=""
                                class="shape-img absolute -left-[10%] -bottom-[10%] w-[60px]"
                        />
                        <img
                                src="/shapes/2D - Circle.svg"
                                alt=""
                                class="shape-img absolute -right-[10%] -top-[10%] w-[60px]"
                        />
                        <img
                                src="/workshop/Pink_North_Star.svg"
                                alt=""
                                class="shape-img absolute -right-[20%] -top-[7%] w-[141px] rotate-15"
                        />
                        <img
                                src="/workshop/Orange_North_Star.svg"
                                alt=""
                                class="shape-img absolute -left-[20%] -bottom-[6%] w-[141px] -rotate-[77.28deg]"
                        />
                    </div>
                </div>

                <img
                        src="/workshop/outline.png"
                        alt=""
                        class="pointer-events-none absolute left-1/2 top-1/2 z-1 w-full max-w-[min(100%,840px)] -translate-x-1/2 -translate-y-1/2 object-contain"
                        style="aspect-ratio: 840.258 / 591.974;"
                />

                <div
                        class="relative z-20 flex w-full max-w-[min(100%,640px)] flex-col items-center gap-6 px-4 py-8 text-center text-boba-black sm:gap-9 sm:px-6 sm:py-10"
                        aria-labelledby="temp-workshops-heading"
                >
                    <p
                            class="w-full max-w-[303px] rotate-[1.65deg] font-sans text-2xl font-light leading-[1.11] tracking-[-0.02em] sm:text-[28px] md:text-[32px]"
                    >
                        Wait, something is missing...
                    </p>
                    <h2
                            id="temp-workshops-heading"
                            class="w-full max-w-[521px] rotate-[-5.55deg] font-sans text-[1.65rem] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-[48px]"
                    >
                        Speaker Session Details Coming Soon!
                    </h2>

                    <div class="mt-1 flex w-full flex-col items-center justify-center gap-5 sm:mt-0 sm:flex-row sm:gap-6">
                        <div
                                class="relative inline-flex max-w-full rotate-[8.954deg] items-center justify-center px-3 py-2 sm:mt-2 sm:px-5 sm:py-2.5"
                        >
                            <img
                                    src="/workshop/thick_talkstar.png"
                                    alt=""
                                    class="absolute inset-0 h-full w-full object-fill"
                            />
                            <span
                                    class="relative z-10 px-5 py-3 font-sans text-lg font-semibold whitespace-nowrap sm:px-8 sm:py-4 sm:text-2xl"
                            >
                                Keynote Talks
                            </span>
                        </div>

                        <div
                                class="flex h-[76px] w-[min(100%,211px)] shrink-0 rotate-[-15.921deg] items-center justify-center gap-2.5 rounded-[77px] border border-solid border-boba-black bg-strawberry-moon px-4 py-2.5 sm:h-[91px] sm:w-[211px] sm:px-5"
                        >
                            <span class="font-sans text-xl font-semibold leading-none tracking-[-0.03em] sm:text-2xl">
                                Workshops
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<style>
    .polygon-shapes {
        width: min(100%, 840.258px);
        aspect-ratio: 840.258 / 591.974;
        height: auto;
    }

    .shape-img {
        max-width: min(40%, 143px);
        height: auto;
    }

    .dot-bg {
        position: absolute;
        inset: 0;
        margin: auto;
        width: min(100%, 840.258px);
        height: auto;
        aspect-ratio: 840.258 / 591.974;

        z-index: 1;

        background-image: radial-gradient(circle, rgba(255, 204, 53) 4.5px, transparent 1px);
        background-size: 12px 12px;

        mask-image: url('/workshop/mask.png');
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: center;

        -webkit-mask-image: url('/workshop/mask.png');
        -webkit-mask-size: contain;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: center;
    }
</style>