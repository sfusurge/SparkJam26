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

        <div class="overflow-hidden rounded-xl border-1 border-boba-black bg-boba-black">
            <div
                    class="relative flex min-h-[420px] items-center justify-center rounded-xl bg-cover bg-center bg-no-repeat sm:min-h-[560px] lg:min-h-[850px]"
                    style="background-image: url('/dark_bg.png')"
            >
                <div class="dot-bg bg-sparky-yellow"></div>

                <div
                        class="pointer-events-none absolute inset-0 z-8 flex items-center justify-center overflow-visible"
                        aria-hidden="true"
                >
                    <div
                            class="polygon-shapes relative shrink-0 origin-center scale-[0.56] sm:scale-100"
                    >
                        <img
                                src="/shapes/2D-Star.svg"
                                alt=""
                                class="shape-img absolute -left-[48%] -top-6 w-[114px] -rotate-[24.08deg]"
                        />
                        <img
                                src="/shapes/2D - Triangle.svg"
                                alt=""
                                class="shape-img absolute -right-[54%] -bottom-8 w-[143px] rotate-[22.52deg]"
                        />
                        <img
                                src="/workshop/Yellow_Circle.svg"
                                alt=""
                                class="shape-img absolute -left-[10%] -bottom-[10%] w-[60px] max-sm:translate-y-36 sm:translate-y-0"
                        />
                        <img
                                src="/shapes/2D - Circle.svg"
                                alt=""
                                class="shape-img absolute -right-[10%] -top-[10%] w-[60px] max-sm:-translate-y-36 sm:translate-y-0"
                        />
                        <img
                                src="/workshop/Pink_North_Star.svg"
                                alt=""
                                class="shape-img absolute -right-[20%] -top-[7%] w-[141px] rotate-15 max-sm:-translate-y-36 sm:translate-y-0"
                        />
                        <img
                                src="/workshop/Orange_North_Star.svg"
                                alt=""
                                class="shape-img absolute -left-[20%] -bottom-[6%] w-[141px] -rotate-[77.28deg] max-sm:translate-y-36 sm:translate-y-0"
                        />
                    </div>
                </div>

                <img
                        src="/workshop/outline.png"
                        alt=""
                        class="pointer-events-none absolute left-1/2 top-1/2 z-1 w-full max-w-[min(100%,840px)] -translate-x-1/2 -translate-y-1/2 object-contain"
                        style="aspect-ratio: 840.258 / 591.974;"
                />

                <div class="workshop-mask-frame">
                    <div
                            class="workshop-mask-clip flex h-full min-h-0 flex-col items-center justify-center gap-2 px-[4%] py-4 text-center text-boba-black sm:gap-4 sm:px-[6%] sm:py-10 md:gap-6"
                            aria-labelledby="temp-workshops-heading"
                    >
                        <div class="flex w-full flex-col items-center gap-2 sm:gap-3 md:gap-4">
                            <p
                                    class="w-full max-w-[min(100%,260px)] rotate-[1.65deg] font-sans text-[16px] font-light leading-[1.11] tracking-[-0.02em] sm:max-w-[303px] sm:text-[28px] md:text-[32px]"
                            >
                                Wait, something is missing...
                            </p>
                            <h2
                                    id="temp-workshops-heading"
                                    class="w-full max-w-[min(100%,90vw,420px)] rotate-[-5.55deg] font-sans text-[18px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:max-w-[521px] sm:text-4xl sm:leading-[1.05] md:text-[48px]"
                            >
                                Speaker Session Details Coming Soon!
                            </h2>
                        </div>

                        <div
                                class="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-1.5 sm:gap-6"
                        >
                            <div
                                    class="relative inline-flex max-w-full rotate-[8.954deg] items-center justify-center px-1 py-0 sm:px-3 sm:py-1 md:px-5 md:py-2.5"
                            >
                                <img
                                        src="/workshop/thick_talkstar.png"
                                        alt=""
                                        class="absolute inset-0 h-full w-full object-fill"
                                />
                                <span
                                        class="relative z-10 px-1.5 py-1 font-sans text-[9px] font-semibold leading-tight whitespace-nowrap sm:px-4 sm:py-2 sm:text-base sm:leading-normal md:px-8 md:py-4 md:text-2xl"
                                >
                                    Keynote Talks
                                </span>
                            </div>

                            <div
                                    class="flex h-6 w-[min(100%,82px)] max-w-[82px] shrink-0 rotate-[-15.921deg] items-center justify-center gap-0 rounded-full border border-solid border-boba-black bg-strawberry-moon px-1.5 py-0 sm:h-11 sm:w-[168px] sm:max-w-[168px] sm:gap-1.5 sm:rounded-[52px] sm:px-3.5 sm:py-1 md:h-[91px] md:w-[211px] md:max-w-none md:gap-2.5 md:rounded-[77px] md:px-5 md:py-2.5"
                            >
                                <span
                                        class="whitespace-nowrap font-sans text-[9px] font-semibold leading-none tracking-[-0.03em] sm:text-base md:text-2xl"
                                >
                                    Workshops
                                </span>
                            </div>
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

    /* Same box as .dot-bg; text is masked to the blob and clipped to the frame */
    .workshop-mask-frame {
        position: absolute;
        inset: 0;
        margin: auto;
        width: min(100%, 840.258px);
        height: auto;
        aspect-ratio: 840.258 / 591.974;
        z-index: 20;
        overflow: hidden;
    }

    /* Same mask as dots so copy and pills stay inside the visible blob */
    .workshop-mask-clip {
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