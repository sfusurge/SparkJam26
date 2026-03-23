<script lang="ts">
	import SectionBadge from './SectionBadge.svelte';
</script>

<section class="relative mt-24" aria-labelledby="s01-title">
	<SectionBadge label="01" class="-rotate-15" />
	<div class="mt-14 grid gap-0 grid-cols-[minmax(0,467px)_1fr]">
		<div class="overflow-hidden border border-boba-black bg-strawberry-moon min-h-94.5">
			<img
				src={'/Otter Elements.svg'}
				alt="SparkJam characters"
				class="mx-auto block h-auto w-full max-w-98.75 object-contain py-8"
			/>
		</div>
		<div class="flex min-h-0 flex-col">
			<div class="border border-boba-black border-b-0 bg-citrouille px-8 py-9">
				<h2
					id="s01-title"
					class="font-['PPMori',sans-serif] text-[48px] font-extrabold leading-none tracking-[-0.03em]"
				>
					Bridging the Industry &amp; Classroom.
				</h2>
			</div>
			<div class="flex-1 border border-boba-black bg-sparky-yellow px-8 py-10">
				<p class="font-['PPMori',sans-serif] text-[32px] leading-[1.11] tracking-[-0.02em]">
					SparkJam is a 2 week long design jam where students spend the first week developing their skills,
					and the second applying them on a design challenge brief.
				</p>
			</div>
		</div>
	</div>
</section>
