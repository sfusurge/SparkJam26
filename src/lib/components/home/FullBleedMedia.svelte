<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		alt = '',

		class: className = '',
		mediaWidth = $bindable(0),
		mediaHeight = $bindable(0),
		overlay,
		children
	}: {

		alt?: string;
		class?: string;
		mediaWidth?: number;
		mediaHeight?: number;
		overlay?: Snippet;
		children?: Snippet;
	} = $props();
</script>

<div class="relative mx-0 w-full {className}">
	<div class="relative w-full overflow-hidden" bind:clientWidth={mediaWidth} bind:clientHeight={mediaHeight}>
		<img src="/background/background.svg" {alt} class="block w-full h-[1041px] object-cover md:h-auto" aria-hidden={alt === '' ? true : undefined} />
		{#if overlay}
			<div class="absolute inset-0 z-10">
				{@render overlay()}
			</div>
		{/if}
	</div>
	{#if children}
		<div class="relative z-50">
			{@render children()}
		</div>
	{/if}
</div>


<style>
	img {
		mask-image: url("/background/ballpit_mask.svg");
		mask-size: 100% 100%;
		mask-repeat: no-repeat;
		mask-position: center;
	}
</style>