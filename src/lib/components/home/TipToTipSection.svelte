<script lang="ts">
	import SectionBadge from './SectionBadge.svelte';
    import SkiGame from './SkiGame.svelte';
</script>

<section class="relative mt-24 mx-auto w-full max-w-[1334px] px-[3%]" aria-labelledby="s02-title">
	<SkiGame/>

	<div class="relative">
		<SectionBadge label="02" class="rotate-[-20deg] translate-x-[-40px]" />

		<div class="absolute -top-24 -bottom-30 left-0 w-[1px] bg-boba-black"></div>
		<div class="absolute -top-24 -bottom-30 right-0 w-[1px] bg-boba-black"></div>
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

		<div class="grid gap-0 bg-boba-black grid-cols-[1fr_minmax(0,467px)]">
			<div class="flex min-h-0 flex-col">
				<div class="border rounded-xl border-boba-black border-b-0 bg-citrouille px-8 py-9">
					<h2
						id="s02-title"
						class="font-sans text-[48px] font-extrabold leading-none tracking-[-0.03em]"
					>
						It's True, We're Going Tip to Tip.
					</h2>
				</div>
				<div class="flex-1 rounded-xl border border-boba-black bg-sparky-yellow p-15">
					<p class="font-sans text-[32px] leading-[1.11] tracking-[-0.02em]">
						This year, SparkJam is going across Canada. Students based in British Columbia can attend the event
						at Simon Fraser University; and students in Toronto can attend at the University of Waterloo!
					</p>
				</div>
			</div>
			<div class="flex items-end justify-center overflow-hidden rounded-xl border border-boba-black bg-touch-grass min-h-94.5">
				<img
					src={'/canada.svg'}
					alt="Map of Canada with event locations"
					class="mx-auto block h-full w-full max-w-[344.5px] object-contain"
				/>
			</div>
		</div>

	</div>
</section>