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
	class="group rounded-2xl max-sm:text-[22px] border border-boba-black px-6 py-4 open:pb-6 [&_summary::-webkit-details-marker]:hidden {panelClass}"
>
	<summary
		class="max-sm:text-[22px] flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-[40px] font-extrabold tracking-[-0.02em]"
	>
		{title}
		<img
			src={'/shapes/accordionChevron.svg'}
			alt=""
			class="size-[62px] shrink-0 transition group-open:rotate-180"
		/>
	</summary>
	<div class="mt-4 font-sans text-2xl leading-snug max-sm:text-[22px]">
		{@render children()}
	</div>
</details>
