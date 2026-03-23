<script lang="ts">
	import type { CalendarBadge, CalendarPillVariant } from '$lib/data/calendar-events.js';

	const pillVariantClass: Record<CalendarPillVariant, string> = {
		'strawberry-moon': 'bg-strawberry-moon',
		'sparky-yellow': 'bg-sparky-yellow',
		'touched-grass': 'bg-touched-grass'
	};

	const {
		month,
		day,
		title,
		bodyHtml,
		badges
	}: {
		month: string;
		day: string;
		title: string;
		bodyHtml: string;
		badges: CalendarBadge[];
	} = $props();
</script>

<article class="relative grid border-b border-boba-black bg-canvas-grey grid-cols-[1fr_129px] pr-0">
	<div class="flex flex-row items-center gap-14 p-12">
		<div
			class="relative flex size-[246px] shrink-0 flex-col overflow-hidden rounded-2xl border-2 border-boba-black bg-canvas-grey"
		>
			<div
				class="border-b-2 border-boba-black bg-sparky-yellow py-2 text-center font-sans text-2xl font-semibold tracking-[-0.03em]"
			>
				{month}
			</div>
			<div
				class="flex flex-1 items-center justify-center font-sans text-[96px] font-extrabold"
			>
				{day}
			</div>
		</div>
		<div class="min-w-0 flex-1 space-y-6">
			<div>
				<h3
					class="font-sans text-[40px] font-extrabold tracking-[-0.02em]"
				>
					{title}
				</h3>
				<div class="mt-4 font-sans text-[32px] leading-[1.11] tracking-[-0.02em]">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -- static site copy from repo JSON -->
					{@html bodyHtml}
				</div>
			</div>
			<div class="flex flex-wrap items-center gap-8">
				{#each badges as badge, i (badge.kind + '-' + badge.text + '-' + i)}
					{#if badge.kind === 'pill'}
						<span
							class="rounded-full border border-boba-black px-5 py-2 font-sans text-2xl font-semibold {pillVariantClass[badge.variant]}"
							>{badge.text}</span
						>
					{:else}
						<div
							class="inline-flex items-stretch overflow-hidden rounded-full border border-boba-black"
						>
							<img
								src="/shapes/talkStarL.svg"
								alt=""
								class="h-[42px] w-[22px] object-contain"
							/>
							<span
								class="flex items-center border-x border-boba-black bg-touched-grass px-3 py-2 font-sans text-2xl font-semibold"
								>{badge.text}</span
							>
							<img
								src="/shapes/talkStarR.svg"
								alt=""
								class="h-[42px] w-[22px] scale-y-[-1] rotate-180 object-contain"
							/>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</article>
