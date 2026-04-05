<script lang="ts">
	import type { Snippet } from 'svelte';
	import FullBleedMedia from './FullBleedMedia.svelte';
	import GravityClickSection from '../physics_stuff/GravityClickSection.svelte';

	const { children, class: className = '' }: { children?: Snippet; class?: string } = $props();
	let _width = $state(0);
	let width = $derived(Math.min(_width, 1920));
	let height = $state(0);
	/** Extra canvas height so the Matter floor sits lower in the footer. */
	const physicsFloorExtra = 100;
	let titleHeight = $derived(Math.max(Math.min(height * 0.85, 1280), 600));
	let physicsHeight = $derived(titleHeight + physicsFloorExtra);
	let physicsTopOffset = $derived(Math.round(height * 0.15));
	let physicsPlayHeight = $derived(
		Math.max(120, Math.min(physicsHeight, height - physicsTopOffset)),
	);
</script>

<svelte:window bind:innerWidth={_width} bind:innerHeight={height} />


<div class="relative isolate w-full overflow-hidden {className}">
	<FullBleedMedia src="/footer/footer.png" class="mt-20 h-220" bind:mediaWidth={width} bind:mediaHeight={height}>
		{#snippet overlay()}
			{#if width && height}
				<GravityClickSection {width} height={physicsPlayHeight} topOffset={physicsTopOffset} />
			{/if}
		{/snippet}
		{#if children}
			{@render children()}
		{/if}
	</FullBleedMedia>
</div>
