<script lang="ts">
  import { onDestroy } from "svelte";
  import { GameRenderer } from "./SkiGame.svelte.ts";

    let canvas: HTMLCanvasElement | undefined;

    let mileageDisplay = $state(0);

    const renderer = $derived.by(() => {
        if(!canvas){
            return undefined;
        }
        const renderManager = new GameRenderer(canvas, window.innerWidth <= 800);
        window.addEventListener("keydown", (e) => {
            renderManager.inputCallback(e.key.toLowerCase());
        }, { capture: true });
        return renderManager;
    })

    $effect(() => {
        renderer;
    })

    onDestroy(() => {
        renderer?.destroy();
    })

    $effect(() => {
        if(renderer?.currentDistanceInKM !== undefined){
            mileageDisplay = renderer.currentDistanceInKM;
        }
    })

</script>

<section>
    <canvas bind:this={canvas} height="800" width="1400"></canvas>
    <div id="mileage">{mileageDisplay} KM travelled</div>
</section>

<style>
    canvas{
        background: #45A2FF;
    }

    #mileage{
        width: fit-content;
        padding: 2px 15px;
        padding-top: 4px;

        background-color: white;
        border: 1px black solid;
        border-radius: 25px;

        font-weight: 600;
        font-size: xx-large;
    }
</style>