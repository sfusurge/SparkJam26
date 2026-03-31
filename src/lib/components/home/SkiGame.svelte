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
    <div id="gameUI">
        <div id="stats">
            <div id="mileage">{mileageDisplay} KM travelled</div>
            <p id="highScore">High Score: {highScore} KM</p>
        </div>
        <div on:click={() => {renderer?.pauseToggle()}}>
            <img id="pauseBtn" src="/game/pause.svg"/>
        </div>
    </div>
</section>

<style>
    canvas{
        background: #45A2FF;
    }

    #gameUI{
        position: relative;
        top: -775px;
        left: 1025px;
        display: flex;
    }

    #pauseBtn{
        padding-top: 2.5px;
        padding-left: 5px;
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
        padding-left: 5px;

        font-weight: 600;
        color: white;
    }
</style>