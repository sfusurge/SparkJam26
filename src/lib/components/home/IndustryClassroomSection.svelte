<script lang="ts">
	import SectionBadge from './SectionBadge.svelte';
</script>

<section class="relative mt-24 mx-auto w-full max-w-[1334px] px-[3%]" aria-labelledby="s01-title">
	<SectionBadge label="01" class="-rotate-15" />

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

		<div class="grid gap-0 bg-boba-black grid-cols-[minmax(0,467px)_1fr]">
			<div class="flex items-end justify-center overflow-hidden rounded-xl border border-boba-black bg-strawberry-moon min-h-94.5">
				<img
					src={'/Otter Elements.svg'}
					alt="SparkJam characters"
					class="mx-auto block h-auto w-full max-w-98.75 object-contain"
				/>
			</div>
			<div class="flex min-h-0 flex-col">
				<div class="border rounded-xl border-boba-black border-b-0 bg-citrouille px-8 py-9">
					<h2
						id="s01-title"
						class="font-sans text-[48px] font-extrabold leading-none tracking-[-0.03em]"
					>
						Bridging the Industry &amp; Classroom.
					</h2>
				</div>
				<div class="flex-1 rounded-xl border border-boba-black bg-sparky-yellow px-8 py-10">
					<p class="font-sans text-[32px] leading-[1.11] tracking-[-0.02em]">
						SparkJam is a 2 week long design jam where students spend the first week developing their skills,
						and the second applying them on a design challenge brief.
					</p>
				</div>
			</div>
		</div>


	</div>
</section>