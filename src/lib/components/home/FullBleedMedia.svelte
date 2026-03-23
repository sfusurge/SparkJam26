<script lang="ts">
	import type { Snippet } from 'svelte';
	const {
		alt = '',
		src,
		class: className = '',
		children
	}: {
		src: string;
		alt?: string;
		class?: string;
		children?: Snippet;
	} = $props();
</script>

<div
	class="relative mx-0 w-full {className}"
>
	<img {src} {alt} class="block w-full" aria-hidden={alt === '' ? true : undefined} />
	{#if children}
		{@render children()}
	{/if}
</div>
