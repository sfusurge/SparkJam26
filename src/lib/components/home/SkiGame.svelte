<script lang="ts">
  import { onDestroy } from "svelte";
  import { GameRenderer } from "../ski_game/SkiGame.svelte.ts";

    let canvas: HTMLCanvasElement | undefined;

    let mileageDisplay = $state(0);
    let highScore = $state(0);

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
        if(renderer?.KM_highScore !== undefined){
            highScore = renderer.KM_highScore;
        }
    })

</script>

<section>
    <canvas bind:this={canvas} height="800" width="1400"></canvas>
    <div id="stats">
        <div id="mileage">{mileageDisplay} KM travelled</div>
        <p id="highScore">High Score: {highScore} KM</p>
    </div>
</section>

<style>
    canvas{
        background: #45A2FF;
    }

    #stats{
        width: fit-content;
        display: flex;
        flex-direction: column;
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

    #highScore{
        width: 100%;
        padding-right: 20px;

        font-weight: 600;
        color: white;
    }
</style>