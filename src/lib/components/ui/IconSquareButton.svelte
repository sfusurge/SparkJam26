<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		class: className = '',
		children,
		...rest
	}: {
		class?: string;
		children: Snippet;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
	} = $props();
</script>

<button
	type="button"
	class="relative size-[52px] shrink-0 transition-transform duration-300 hover:bg-canvas-grey {className}"
	{...rest}
>
	{@render children()}
</button>
