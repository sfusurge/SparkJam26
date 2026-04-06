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

<div id="ski-section" class="relative">
    <canvas bind:this={canvas} height="700" width="1300"></canvas>
    <div id="gameUI">
        <div id="stats">
            <div class="mileage">{mileageDisplay} KM travelled</div>
            <div id="highScore">High Score: {highScore} KM</div>
        </div>
        <button onclick={() => {renderer?.pauseToggle()}}>
            <img id="pauseBtn" src="/game/pause.svg"/>
        </button>
    </div>
    {#if !isRunning()}
        <div id="blur">
            {#if isPause()}
                <div id="menuUI">
                    <div class="orangeText text-7xl font-extrabold text-center">From VANCOUVER to OTTERLOO</div>
                    <div class="orangeText text-5xl font-extrabold">a skiing adventure</div>
                    <button><img id="playBtn" src="/game/play.svg" onclick={playGame}/></button>
                    <div>CLICK TO PLAY</div>
                </div>
            {/if}
            {#if isOver()}
                <div id="gameOverUI">
                    <div class="orangeText text-7xl font-extrabold">GAMEOVER</div>
                    <div class="mileage">{mileageDisplay} KM travelled</div>
                    <button><img id="restartBtn" src="/game/restart.svg" onclick={restartGame}/></button>
                    <div>CLICK TO PLAY AGAIN</div>
                </div>
            {/if}
        </div>
    {/if}
    {#if isRunning()}
        <div id="mobileControls">
            <button id="leftBtn" onclick={() => renderer?.inputCallback('a')}>
                <img src="/game/left.webp" alt="Move left" />
            </button>
            <button id="rightBtn" onclick={() => renderer?.inputCallback('d')}>
                <img src="/game/right.webp" alt="Move right" />
            </button>
        </div>
    {/if}
</div>

<style>
    #ski-section{
        overflow: hidden;
        border-radius: 0.75rem 0.75rem 0 0;
    }

    canvas{
        background: #45A2FF;
    }

    #gameUI{
        position: absolute;
        top: -0px;
        right: 0px;
        margin-top: 1%;
        margin-right: 2%;
        display: flex;
        align-items: flex-start;
    }

    #blur{
        position: absolute;
        top: 0px;
        left: 0px;

        height: 800px;
        width: 100%;
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

    #mobileControls {
        display: none;
    }

    @media (max-width: 640px) {
        #ski-section {
            border-radius: 0;
        }

        #blur {
            height: 100%;
        }

        #gameUI {
            margin-top: 3%;
            margin-right: 3%;
            gap: 6px;
        }

        #pauseBtn {
            width: 36px;
            height: 36px;
            padding-top: 1px;
            padding-left: 6px;
        }

        #stats {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        .mileage {
            font-size: medium;
            padding: 2px 10px;
        }

        #highScore {
            font-size: small;
            padding-right: 2px;
        }

        #menuUI, #gameOverUI {
            width: 85%;
            padding: 16px;
            gap: 8px;
            border-radius: 12px;
        }

        .orangeText {
            font-size: 1.5rem;
            -webkit-text-stroke: 0.5px black;
        }

        #menuUI .text-5xl,
        #gameOverUI .text-5xl {
            font-size: 1.1rem;
        }

        #playBtn, #restartBtn {
            width: 56px;
            height: 56px;
        }

        #mobileControls {
            display: flex;
            position: absolute;
            top: 20%;
            left: 0;
            right: 0;
            justify-content: space-between;
            padding: 0 12px;
            pointer-events: none;
        }

        #leftBtn {
            transform: rotate(-15.978deg);
        }

        #rightBtn {
            transform: rotate(15.978deg);
        }

        #leftBtn, #rightBtn {
            pointer-events: all;
            background: none;
            border: none;
            padding: 0;
        }

        #leftBtn:active, #rightBtn:active {
            opacity: 1;
        }

        #leftBtn img, #rightBtn img {
            width: 64px;
            height: 64px;
            object-fit: contain;
        }
    }
</style>