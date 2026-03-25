<script lang="ts">
	import { calendarEvents } from '$lib/data/calendar-events.js';
	import SectionBadge from './SectionBadge.svelte';
	import WorkshopEventCard from './WorkshopEventCard.svelte';
</script>

<section class="relative mt-24 mx-auto w-full max-w-[1334px] px-[3%]">
	<SectionBadge label="04" class="rotate-[15deg]" />
	<div class="mt-14 overflow-hidden border border-boba-black bg-boba-black">
		<div class="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>
		<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>
		<div class="border-b border-boba-black bg-citrouille px-8 py-8">
			<h2
				id="s04-title"
				class="max-w-[90%] font-sans text-[48px] font-extrabold leading-none tracking-[-0.03em]"
			>
				Spark Your Learnin’, then Start Your Jammin’
			</h2>
		</div>
		<div class="relative flex flex-col">
			{#each calendarEvents as event, i (event.title + '-' + i)}
				<WorkshopEventCard
					month={event.month}
					day={event.day}
					title={event.title}
					bodyHtml={event.bodyHtml}
					badges={event.badges}
				/>
			{/each}
		</div>
	</div>
</section>
