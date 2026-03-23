<script lang="ts">
	import SectionBadge from './SectionBadge.svelte';
</script>

<section class="relative mt-24" aria-labelledby="s02-title">
	<SectionBadge label="02" class="rotate-[11deg]" />
	<div class="mt-14 flex flex-col gap-0">
		<div class="border border-boba-black border-b-0 bg-citrouille px-8 py-8">
			<h2
				id="s02-title"
				class="font-['PPMori',sans-serif] text-[48px] font-extrabold leading-none tracking-[-0.03em]"
			>
				It’s True, We’re Going Tip to Tip.
			</h2>
		</div>
		<div class="grid gap-0 grid-cols-[1fr_minmax(0,467px)]">
			<div class="border border-boba-black bg-sparky-yellow px-8 py-10">
				<p class="font-['PPMori',sans-serif] text-[32px] leading-[1.11] tracking-[-0.02em]">
					This year, SparkJam is going across Canada. Students based in British Columbia can attend the event
					at Simon Fraser University; and students in Toronto can attend at the University of Waterloo!
				</p>
			</div>
			<div class="border border-boba-black bg-touch-grass p-6 border-l-0">
				<img
					src={'/canada.svg'}
					alt="Map of Canada with event locations"
					class="mx-auto w-full max-w-[467px]"
				/>
			</div>
		</div>
	</div>
</section>
