<script lang="ts">
	import type { Snippet } from 'svelte';
	import FullBleedMedia from './FullBleedMedia.svelte';

	const { children }: { children?: Snippet } = $props();
</script>

<FullBleedMedia src="/footer.svg" class="mt-20">
	{#if children}
		{@render children()}
	{/if}
</FullBleedMedia>
