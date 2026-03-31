<script lang="ts">
	import { calendarEvents } from '$lib/data/calendar-events.js';
	import { fade } from 'svelte/transition';
	import IconSquareButton from '$lib/components/ui/IconSquareButton.svelte';
	import SectionBadge from './SectionBadge.svelte';
	import WorkshopEventCard from './WorkshopEventCard.svelte';

	let showWorkshops = $state(true);
	let showSpeakerSessions = $state(true);

	let filteredEvents = $derived(
			calendarEvents.filter((event) => {
				if (event.category === 'workshop') return showWorkshops;
				if (event.category === 'speaker-session') return showSpeakerSessions;
				return true;
			})
	);
</script>

<section class="workshops-section relative mx-auto mt-24 w-full max-w-[1334px] px-[3%]">
	<SectionBadge label="04" class="rotate-15" />

	<div class="relative mt-14">

		<div class="pointer-events-none absolute -z-10 top-0 left-0" aria-hidden="true">
			<div class="size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-boba-black"></div>
		</div>
		<div class="pointer-events-none absolute -z-10 top-0 right-0" aria-hidden="true">
			<div class="size-3 translate-x-1/2 -translate-y-1/2 rotate-45 bg-boba-black"></div>
		</div>
		<div class="pointer-events-none absolute -z-10 bottom-0 left-0" aria-hidden="true">
			<div class="size-3 -translate-x-1/2 translate-y-1/2 rotate-45 bg-boba-black"></div>
		</div>
		<div class="pointer-events-none absolute -z-10 bottom-0 right-0" aria-hidden="true">
			<div class="size-3 translate-x-1/2 translate-y-1/2 rotate-45 bg-boba-black"></div>
		</div>

		<div class="absolute -top-24 -bottom-30 left-0 w-[1px] bg-boba-black"></div>
		<div class="absolute -top-24 -bottom-30 right-0 w-[1px] bg-boba-black"></div>
		<div class="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>
		<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>

		<div
				class="overflow-hidden rounded-xl border-2 border-boba-black bg-boba-black"
				aria-labelledby="s04-title"
		>
			<div class="sticky top-0 border-b border-boba-black bg-citrouille">
				<div
						class="flex min-h-[118px] flex-col gap-6 px-8 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:px-[61px] md:py-0"
				>
					<h2
							id="s04-title"
							class="max-w-[min(100%,1285px)] font-sans text-[clamp(2rem,5vw,3rem)] font-extrabold leading-none tracking-[-0.03em] text-boba-black"
					>
						Spark Your Learnin', then Start Your Jammin'
					</h2>

					<div class="flex shrink-0 items-center gap-1 sm:gap-2">
						<div
								class="flex h-[58px] w-5 shrink-0 items-center justify-center sm:w-[19px]"
								aria-hidden="true"
						>
							<span
									class="-rotate-90 whitespace-nowrap font-sans text-xl leading-[0.95] text-boba-black"
							>
								Filters
							</span>
						</div>
						<div
								class="flex h-[72px] w-[151px] items-center justify-center gap-3 rounded-[60px] border border-solid border-boba-black bg-canvas-grey px-2"
						>
							<IconSquareButton
									onclick={() => (showWorkshops = !showWorkshops)}
									aria-label={showWorkshops ? 'Hide workshops' : 'Show workshops'}
									class="group"
							>
								<img src="/workshop/pink.svg" alt="" class="size-full group-hover:opacity-0" />
								<img
										src="/workshop/pink_grey.svg"
										alt=""
										class="absolute inset-0 size-full opacity-0 group-hover:opacity-100"
								/>
								{#if showWorkshops}
									<img
											src="/workshop/pinkfill.svg"
											alt=""
											class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
									/>
								{/if}
							</IconSquareButton>

							<IconSquareButton
									onclick={() => (showSpeakerSessions = !showSpeakerSessions)}
									aria-label={showSpeakerSessions ? 'Hide speaker sessions' : 'Show speaker sessions'}
									class="group"
							>
								<img src="/workshop/green.svg" alt="" class="size-full group-hover:opacity-0" />
								<img
										src="/workshop/green_grey.svg"
										alt=""
										class="absolute inset-0 size-full opacity-0 group-hover:opacity-100"
								/>
								{#if showSpeakerSessions}
									<img
											src="/workshop/greenfill.svg"
											alt=""
											class="absolute w-[28px] h-[28px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
									/>
								{/if}
							</IconSquareButton>
						</div>
					</div>
				</div>
			</div>

			<div class="bg-boba-black">
				{#each filteredEvents as event, i (event.title + '-' + i)}
					<WorkshopEventCard
							month={event.month}
							day={event.day}
							title={event.title}
							bodyHtml={event.bodyHtml}
							badges={event.badges}
							registerUrl={event.registerUrl}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	/* rams-orange hover for underlined copy in workshop cards only */
	.workshops-section :global(.underline:hover),
	.workshops-section :global(u:hover) {
		color: #ff4500;
	}
</style>