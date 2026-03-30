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
	class="group rounded-2xl border border-boba-black overflow-hidden open:pb-0 [&_summary::-webkit-details-marker]:hidden {panelClass}"
>
	<summary
		class="flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-[40px] font-extrabold tracking-[-0.02em] px-6 py-4"
	>
		{title}
		<img
			src={'/shapes/accordionChevron.svg'}
			alt=""
			class="size-[62px] shrink-0 transition group-open:rotate-180"
		/>
	</summary>
	<div class="bg-white px-6 pb-6 pt-4 font-sans text-2xl leading-snug border-t border-boba-black">
		{@render children()}
	</div>
</details>