<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		month,
		day,
		title,
		body,
		badges
	}: {
		month: string;
		day: string;
		title: string;
		body: Snippet;
		badges: Snippet;
	} = $props();
</script>

<article class="relative grid border-b border-boba-black bg-canvas-grey grid-cols-[1fr_129px] pr-0">
	<div class="flex flex-row items-center gap-14 p-12">
		<div
			class="relative flex size-[246px] shrink-0 flex-col overflow-hidden rounded-2xl border-2 border-boba-black bg-canvas-grey"
		>
			<div
				class="border-b-2 border-boba-black bg-sparky-yellow py-2 text-center font-['PPMori',sans-serif] text-2xl font-semibold tracking-[-0.03em]"
			>
				{month}
			</div>
			<div
				class="flex flex-1 items-center justify-center font-['PPMori',sans-serif] text-[96px] font-extrabold"
			>
				{day}
			</div>
		</div>
		<div class="min-w-0 flex-1 space-y-6">
			<div>
				<h3
					class="font-['PPMori',sans-serif] text-[40px] font-extrabold tracking-[-0.02em]"
				>
					{title}
				</h3>
				<div class="mt-4 font-['PPMori',sans-serif] text-[32px] leading-[1.11] tracking-[-0.02em]">
					{@render body()}
				</div>
			</div>
			<div class="flex flex-wrap items-center gap-8">
				{@render badges()}
			</div>
		</div>
	</div>
</article>
