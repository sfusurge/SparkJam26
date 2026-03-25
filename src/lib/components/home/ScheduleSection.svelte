<script lang="ts">
	import SectionBadge from './SectionBadge.svelte';
	import ScheduleAccordionItem from './ScheduleAccordionItem.svelte';
</script>

<section class="relative mt-24 mx-auto w-full max-w-[1334px] px-[3%]" aria-labelledby="s03-title">
	<SectionBadge label="03" class="-rotate-[15deg]" />
	<div class="mt-14 grid gap-0  bg-boba-black grid-cols-[minmax(0,522px)_1fr]">
		<div class="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>
		<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>

		<div class="border rounded-xl border-boba-black bg-citrouille px-8 py-14">
			<h2
				id="s03-title"
				class="font-sans text-[48px] font-extrabold leading-none tracking-[-0.03em]"
			>
				Two Weeks: One for Learning, the Other for Building.
			</h2>
		</div>
		<div class="space-y-8 border rounded-xl border-boba-black bg-canvas-grey border-t border-l-0 p-10">
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
</section>
