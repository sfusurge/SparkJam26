<script lang="ts">
	import SectionBadge from './SectionBadge.svelte';
	import ScheduleAccordionItem from './ScheduleAccordionItem.svelte';
</script>

<section class="relative mt-24 w-full max-sm:w-screen" aria-labelledby="s03-title">
	<div class="mx-auto w-full max-w-[1334px] px-[3%] max-sm:px-0">
		
		<SectionBadge label="03" class="-rotate-[15deg] max-sm:scale-70 max-sm:-top-8" />
		
		<div class="max-lg:grid-cols-1 relative mt-14 grid gap-0  bg-boba-black grid-cols-[minmax(0,522px)_1fr]">

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

			<div class="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>
			<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>
			
			<div class="border rounded-xl max-sm:rounded-none border-boba-black bg-citrouille p-15">
				<h2
					id="s03-title"
					class="font-sans text-[48px] max-sm:text-[32px] font-extrabold leading-none tracking-[-0.03em]"
				>
					Two Weeks: One for Learning, the Other for Building.
				</h2>
			</div>
			<div class="space-y-8 border rounded-xl max-sm:rounded-none border-boba-black bg-canvas-grey border-t border-l-0 p-10 max-sm:text-[22px]">
				<ScheduleAccordionItem title="Spark Week | May 11 - 15th" panelClass="bg-strawberry-moon">
					{#snippet children()}
						<p>Workshops, talks, and skill-building across both coasts.</p>
					{/snippet}
				</ScheduleAccordionItem>
				<ScheduleAccordionItem title="Jam Week | May 16 - 23rd" panelClass="bg-touched-grass">
					{#snippet children()}
						<p>Teams ship a prototype against a real brief—with mentors in the loop.</p>
					{/snippet}
				</ScheduleAccordionItem>
				<ScheduleAccordionItem title="Opening Ceremony | May 16" panelClass="bg-sparky-yellow">
					{#snippet children()}
						<p>Kickoff, teams, and jam expectations.</p>
					{/snippet}
				</ScheduleAccordionItem>
				<ScheduleAccordionItem title="Closing Ceremony | May 23" panelClass="bg-citrouille">
					{#snippet children()}
						<p>Final presentations and celebration.</p>
					{/snippet}
				</ScheduleAccordionItem>
			</div>
		</div>
	</div>
</section>
