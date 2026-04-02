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

        <div class="rounded-xl border-2 border-boba-black bg-boba-black">
            <div
                    class="relative min-h-[850px] bg-cover bg-center bg-no-repeat rounded-xl flex items-center justify-center"
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
                                class="shape-img absolute -right-[4%] bottom-[10%] w-[143px] rotate-[22.52deg]"
                        />
                        <img
                                src="/shapes/2D - Circle.svg"
                                alt=""
                                class="shape-img absolute -left-[10%] -bottom-[10%] w-[60px]"
                        />
                        <img
                                src="/shapes/2D - Circle.svg"
                                alt=""
                                class="shape-img absolute -right-[9%] -top-[10%] w-[60px]"
                        />
                        <img
                                src="/shapes/2D-North-Star.svg"
                                alt=""
                                class="shape-img absolute -right-[20%] -top-[7%] w-[141px] rotate-15"
                        />
                        <img
                                src="/shapes/2D-North-Star (1).svg"
                                alt=""
                                class="shape-img absolute -left-[20%] bottom-[12%] w-[141px] -rotate-[77.28deg]"
                        />
                    </div>
                </div>

                <img
                        src="/workshop/outline.png"
                        alt=""
                        class="absolute z-1 pointer-events-none"
                        style="width: 840.258px; height: 591.974px;"
                />

                <div
                        class="relative z-20 flex flex-col items-center gap-9 px-6 text-center text-boba-black"
                        aria-labelledby="temp-workshops-heading"
                >
                    <p class="rotate-[1.65deg] font-sans text-[32px] w-[303px] font-light leading-[1.11] tracking-[-0.02em]">
                        Wait, something is missing...
                    </p>
                    <h2 id="temp-workshops-heading"
                            class="rotate-[-5.55deg] font-sans text-[48px] w-[521px] font-extrabold leading-none tracking-[-0.03em]"
                    >
                        Speaker Session Details Coming Soon!
                    </h2>

                    <div class="flex flex-row items-center gap-6">
                        <div class="mt-2 rotate-[8.954deg] relative inline-flex items-center justify-center px-5 py-2.5">
                            <img
                                    src="/workshop/thick_talkstar.png"
                                    alt=""
                                    class="absolute inset-0 w-full h-full object-fill"
                            />
                            <span class="relative z-10 font-sans text-2xl font-semibold whitespace-nowrap px-8 py-4">
                                Keynote Talks
                            </span>
                        </div>

                        <div class="flex w-[211px] h-[91px] rotate-[-15.921deg] px-5 py-2.5 justify-center items-center gap-2.5 rounded-[77px] border border-solid border-boba-black bg-strawberry-moon">
                            <span class="font-sans text-2xl font-semibold leading-none tracking-[-0.03em]">
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
        width: 840.258px;
        height: 591.974px;

        z-index: 1;

        background-image: radial-gradient(circle, rgba(255, 204, 53) 4.5px, transparent 1px);
        background-size: 12px 12px;

        mask-image: url('/workshop/mask.png');
        mask-size: 100% 100%;
        mask-repeat: no-repeat;
        mask-position: center;

        -webkit-mask-image: url('/workshop/mask.png');
        -webkit-mask-size: 100% 100%;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: center;
    }
</style>