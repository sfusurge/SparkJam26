<script lang="ts">
  import { onDestroy } from "svelte";
  import { GamePhase, GameRenderer, type GamePhaseType } from "../ski_game/SkiGame.svelte.ts";

    let canvas: HTMLCanvasElement | undefined;

    let mileageDisplay = $state(0);
    let highScore = $state(0);
    let gameState : GamePhaseType = $state(GamePhase.PRE)

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

    const isRunning = () => {
        return gameState == GamePhase.RUNNING;
    }

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
        if(renderer?.gameState !== undefined){
            gameState = renderer.gameState;
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
        <div onclick={() => {renderer?.pauseToggle()}}>
            <img id="pauseBtn" src="/game/pause.svg"/>
        </div>
    </div>
    <!-- {#if isRunning()}
        <div id="blur">
            <div id="menuUI">

            </div>
            <div id="gameOverUI">

            </div>
        </div>
    {/if} -->
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

    #blur{
        position: relative;
        top: -875px;
        left: 0px;

        height: 800px;
        width: 1400px;
        background-color: #00000033;
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