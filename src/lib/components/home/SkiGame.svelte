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

    onDestroy(() => {
        renderer?.destroy();
    })

    $effect(() => {
        renderer;
    })

</script>

<section>
    <canvas bind:this={canvas} height="800" width="1400"></canvas>
</section>


<style>
    canvas{
        background: #45A2FF;
    }
</style>