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

                <img
                        src="/workshop/outline.png"
                        alt=""
                        class="absolute z-10 pointer-events-none"
                        style="width: 840.258px; height: 591.974px;"
                />

            </div>
        </div>
    </div>
</section>

<style>
    .dot-bg {
        position: absolute;
        inset: 0;
        margin: auto;
        width: 840.258px;
        height: 591.974px;

        z-index: 1;


        background-image: radial-gradient(circle, rgba(255, 204, 53) 4.5px, transparent 1px);
        background-size: 12px 12px;

        /* Clip the dots to the non-transparent pixels of mask.png */
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