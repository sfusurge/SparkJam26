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
		badges,
		registerUrl = '#'
	}: {
		month: string;
		day: string;
		title: string;
		bodyHtml: string;
		badges: CalendarBadge[];
		registerUrl?: string;
	} = $props();

	const isExternal = $derived(registerUrl.startsWith('http'));
</script>

<article
	class="flex flex-col gap-8 border-b border-boba-black bg-canvas-grey px-8 py-10 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:px-16"
>
	<div
		class="relative flex size-[138px] shrink-0 flex-col overflow-hidden rounded-[9px] border-2 border-boba-black bg-canvas-grey"
	>
		<div
			class="flex h-[52px] shrink-0 items-center justify-center border-b-2 border-boba-black bg-sparky-yellow font-sans text-[22px] font-extrabold leading-none tracking-[-0.03em] text-boba-black"
		>
			{month}
		</div>
		<div
			class="flex min-h-0 flex-1 items-center justify-center font-sans text-[55px] font-extrabold leading-none text-boba-black"
		>
			{day}
		</div>
	</div>

	<div class="flex min-h-0 min-w-0 flex-1 flex-col justify-between gap-8 lg:max-w-[1071px]">
		<div class="flex max-w-[1062px] flex-col gap-6 text-boba-black">
			<h3 class="font-sans text-4xl font-extrabold leading-[1.11] tracking-[-0.02em]">
				{title}
			</h3>
			<div
				class="font-sans text-2xl font-normal leading-[1.11] tracking-[-0.02em] [&_p]:m-0"
			>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -- static site copy from repo JSON -->
				{@html bodyHtml}
			</div>
		</div>

		<div
			class="flex w-full flex-col gap-6 xl:flex-row xl:flex-wrap xl:items-center xl:justify-between"
		>
			<div class="flex min-w-0 flex-wrap items-center gap-x-[30px] gap-y-3">
				{#each badges as badge, i (badge.kind + '-' + badge.text + '-' + i)}
					{#if badge.kind === 'speaker-session'}
						<div class="relative flex items-center justify-center">
							<img src="/workshop/talkstar.svg" alt="" class="h-11 w-auto" />
							<span
									class="absolute inset-0 flex items-center justify-center font-sans text-2xl font-semibold"
							>{badge.text}</span
							>
						</div>
					{:else}
						<span
							class="inline-flex min-h-[44px] min-w-0 items-center justify-center rounded-full border border-boba-black px-5 py-2.5 text-center font-sans text-2xl font-semibold leading-none tracking-[-0.03em] {pillVariantClass[badge.variant]}"
						>
							{badge.text}
						</span>
					{/if}
				{/each}
			</div>

			<a
				href={registerUrl}
				class="inline-flex h-[44px] w-full shrink-0 items-center justify-center gap-2.5 rounded-md border border-boba-black bg-boba-black px-5 font-sans text-2xl font-semibold leading-none tracking-[-0.03em] text-canvas-grey transition-opacity hover:opacity-90 sm:w-[231px]"
				{...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
			>
				Register Now
				<svg
					class="size-4 shrink-0 text-canvas-grey"
					viewBox="0 0 17 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						d="M4.5 11.5L12.5 3.5M12.5 3.5H6.5M12.5 3.5V9.5"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		</div>
	</div>
</article>
