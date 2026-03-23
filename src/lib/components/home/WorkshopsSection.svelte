<script lang="ts">
	import SectionBadge from './SectionBadge.svelte';
	import WorkshopEventCard from './WorkshopEventCard.svelte';
</script>

<section class="relative mt-24">
	<SectionBadge label="04" class="rotate-[15deg]" />
	<div class="mt-14 overflow-hidden border border-boba-black bg-boba-black">
		<div class="border-b border-boba-black bg-citrouille px-8 py-8">
			<h2
				id="s04-title"
				class="max-w-[90%] font-sans text-[48px] font-extrabold leading-none tracking-[-0.03em]"
			>
				Spark Your Learnin’, then Start Your Jammin’
			</h2>
		</div>
		<div class="relative flex flex-col">
			<WorkshopEventCard month="MAY" day="11" title="Building Prototypes in Framer">
				{#snippet body()}
					<p>
						Learn all about the powerful no-code tool, with Framer Campus Leader and Nokia designer
						<span class="underline">Zariyan Mansoor</span>.
					</p>
				{/snippet}
				{#snippet badges()}
					<span
						class="rounded-full border border-boba-black bg-strawberry-moon px-5 py-2 font-sans text-2xl font-semibold"
						>WORKSHOP</span
					>
					<span
						class="rounded-full border border-boba-black bg-sparky-yellow px-5 py-2 font-sans text-2xl font-semibold"
						>11:00am PST</span
					>
					<span
						class="rounded-full border border-boba-black bg-sparky-yellow px-5 py-2 font-sans text-2xl font-semibold"
						>2:00pm EST</span
					>
				{/snippet}
			</WorkshopEventCard>
			<WorkshopEventCard month="MAY" day="11" title="A Look Into Designing for Riot Games">
				{#snippet body()}
					<p>
						Ever wonder how the UI in TFT is put together? Join
						<span class="underline">Dave Felton</span>
						and
						<span class="underline">Another Name</span>
						for this inside look.
					</p>
				{/snippet}
				{#snippet badges()}
					<div class="inline-flex items-stretch overflow-hidden rounded-full border border-boba-black">
						<img
							src={'/shapes/talkStarL.svg'}
							alt=""
							class="h-[42px] w-[22px] object-contain"
						/>
						<span
							class="flex items-center border-x border-boba-black bg-touched-grass px-3 py-2 font-sans text-2xl font-semibold"
							>Speaker Session</span
						>
						<img
							src={'/shapes/talkStarR.svg'}
							alt=""
							class="h-[42px] w-[22px] scale-y-[-1] rotate-180 object-contain"
						/>
					</div>
					<span
						class="rounded-full border border-boba-black bg-sparky-yellow px-5 py-2 font-sans text-2xl font-semibold"
						>6:00pm PST</span
					>
					<span
						class="rounded-full border border-boba-black bg-sparky-yellow px-5 py-2 font-sans text-2xl font-semibold"
						>9:00pm EST</span
					>
				{/snippet}
			</WorkshopEventCard>
		</div>
	</div>
</section>
