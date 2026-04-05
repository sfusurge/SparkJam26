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

    const isPause = () => {
        return gameState == GamePhase.PRE || gameState == GamePhase.PAUSED;
    }

    const isOver = () => {
        return gameState == GamePhase.ENDED;
    }

    const playGame = () => {
        renderer?.pauseToggle();
    }

    const restartGame = () => {
        renderer?.playAgain();
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

<section id="ski-section">
    <canvas bind:this={canvas} height="800" width="1300px"></canvas>
    <div id="gameUI">
        <div id="stats">
            <div class="mileage">{mileageDisplay} KM travelled</div>
            <div id="highScore">High Score: {highScore} KM</div>
        </div>
        <div onclick={() => {renderer?.pauseToggle()}}>
            <img id="pauseBtn" src="/game/pause.svg"/>
        </div>
    </div>
    {#if !isRunning()}
        <div id="blur">
            {#if isPause()}
                <div id="menuUI">
                    <div class="orangeText text-7xl font-extrabold">From VANCOUVER to OTTERLOO</div>
                    <div class="orangeText text-5xl font-extrabold">a skiing adventure</div>
                    <img id="playBtn" src="/game/play.svg" onclick={playGame}/>
                    <div>CLICK TO PLAY</div>
                </div>
            {/if}
            {#if isOver()}
                <div id="gameOverUI">
                    <div class="orangeText text-7xl font-extrabold">GAMEOVER</div>
                    <div class="mileage">{mileageDisplay} KM travelled</div>
                    <img id="restartBtn" src="/game/restart.svg" onclick={restartGame}/>
                    <div>CLICK TO PLAY AGAIN</div>
                </div>
            {/if}
        </div>
    {/if}
</section>

<style>
    #ski-section{
        overflow: hidden;
    }

    canvas{
        background: #45A2FF;
    }

    #gameUI{
        position: absolute;
        top: -0px;
        right: 0px;
        margin-top: 1%;
        margin-right: 5%;
        display: flex;
    }

    #blur{
        position: absolute;
        top: 0px;
        left: 0px;

        height: 800px;
        width: 94%;
        margin-left: 3%;
        margin-right: 3%;
        background-color: #00000033;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    #pauseBtn{
        padding-top: 2.5px;
        padding-left: 10px;
    }

    #highScore{
        width: 100%;
        padding-right: 5px;

        font-weight: 600;
        text-align: right;
        color: white;
    }

    .orangeText{
        color: #FF8E24;
        -webkit-text-stroke: 1px black;
    }

    #gameOverUI, #menuUI{
        position: absolute;
        left: auto;
        top: auto;

        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
        gap: 10px;

        background-color: #FFD737;
        border: 1px black solid;
        border-radius: 20px;
        padding: 20px;
    }

    .mileage{
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