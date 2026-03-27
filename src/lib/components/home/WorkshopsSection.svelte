<script lang="ts">
	import { calendarEvents } from '$lib/data/calendar-events.js';
	import { fade } from 'svelte/transition';
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

<section class="relative mx-auto mt-24 w-full max-w-[1392px] px-[3%]">
	<SectionBadge label="04" class="rotate-15" />

	<div class="relative mt-14">
		<div
			class="overflow-hidden border-2 border-boba-black bg-boba-black"
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
							class="flex h-[72px] w-[151px] items-center justify-center gap-3 rounded-lg border border-boba-black bg-canvas-grey px-2"
						>
							<button
								type="button"
								class="relative size-[52px] shrink-0 transition-transform duration-300"
								onclick={() => (showWorkshops = !showWorkshops)}
								aria-label={showWorkshops ? 'Hide workshops' : 'Show workshops'}
							>
								<img src="/workshop/pink.svg" alt="" class="size-full" />
								{#if showWorkshops}
									<img
										src="/workshop/pinkfill.svg"
										alt=""
										transition:fade={{ duration: 200 }}
										class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+2px)]"
									/>
								{/if}
							</button>
							<button
								type="button"
								class="relative size-[52px] shrink-0 transition-transform duration-300"
								onclick={() => (showSpeakerSessions = !showSpeakerSessions)}
								aria-label={showSpeakerSessions ? 'Hide speaker sessions' : 'Show speaker sessions'}
							>
								<img src="/workshop/green.svg" alt="" class="size-full" />
								{#if showSpeakerSessions}
									<img
										src="/workshop/greenfill.svg"
										alt=""
										transition:fade={{ duration: 200 }}
										class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
									/>
								{/if}
							</button>
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