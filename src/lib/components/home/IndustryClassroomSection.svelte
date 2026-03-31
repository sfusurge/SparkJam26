<script lang="ts">
	import SectionBadge from './SectionBadge.svelte';
</script>

<section class="relative mt-24 mx-auto w-full max-w-[1334px] px-[3%] max-sm:-ml-19 max-sm:w-[155%]" aria-labelledby="s01-title">
	<SectionBadge label="01" class="-rotate-15 max-sm:scale-70 max-sm:-top-8 max-sm:ml-5" />

	<div class="relative mt-14">

		<div class="absolute -bottom-24 left-0 w-[1px] bg-boba-black"></div>
		<div class="absolute -bottom-24 right-0 w-[1px] bg-boba-black"></div>

		<div class="absolute top-0 left-0 w-full h-[1px] bg-boba-black"></div>
		<div class="absolute bottom-0 left-0 w-full h-[1px] bg-boba-black"></div>

		<div class="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>
		<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>

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

	<div class="grid gap-0 bg-boba-black grid-cols-[minmax(0,467px)_1fr] max-sm:grid-cols-1">
		<div class=" max-sm:row-start-2 flex items-end justify-center overflow-hidden rounded-xl border border-boba-black bg-strawberry-moon min-h-94.5">
			<img
				src={'/Otter Elements.svg'}
				alt="SparkJam characters"
				class="mx-auto block h-auto w-full max-w-98.75 object-contain"
			/>
		</div>
		<div class="flex min-h-0 flex-col max-sm:row-start-1">
			<div class="border rounded-xl border-boba-black border-b-0 bg-citrouille px-8 py-9">
				<h2
					id="s01-title"
					class="font-sans text-[48px] max-sm:text-[32px] font-extrabold leading-none tracking-[-0.03em]"
				>
					Bridging the Industry &amp; Classroom.
				</h2>
			</div>
			<div class="flex-1 rounded-xl border border-boba-black bg-sparky-yellow px-8 py-10">
				<p class="font-sans text-[32px] leading-[1.11] tracking-[-0.02em] max-sm:text-[22px] max-sm:p-3">
					SparkJam is a 2 week long design jam where students spend the first week developing their skills,
					and the second applying them on a design challenge brief.
				</p>
			</div>
		</div>
	</div>


	</div>
</section>