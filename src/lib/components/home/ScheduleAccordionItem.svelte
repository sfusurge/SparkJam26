<script lang="ts">
	import type { Snippet } from 'svelte';
	const {
		title,
		panelClass,
		children
	}: {
		title: string;
		panelClass: string;
		children: Snippet;
	} = $props();
</script>

<details
	class="group rounded-2xl border border-boba-black px-6 py-4 open:pb-6 [&_summary::-webkit-details-marker]:hidden {panelClass}"
>
	<summary
		class="flex cursor-pointer list-none items-center justify-between gap-4 font-['PPMori',sans-serif] text-[40px] font-extrabold tracking-[-0.02em]"
	>
		{title}
		<img
			src={'/shapes/accordionChevron.svg'}
			alt=""
			class="size-[62px] shrink-0 transition group-open:rotate-180"
		/>
	</summary>
	<div class="mt-4 font-['PPMori',sans-serif] text-2xl leading-snug">
		{@render children()}
	</div>
</details>
