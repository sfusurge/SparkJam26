<script lang="ts">
	import SectionBadge from './SectionBadge.svelte';
</script>

<section class="relative mt-24 mx-auto w-full max-w-[1334px] px-[3%] max-sm:-ml-19 max-sm:w-[155%]" aria-labelledby="s02-title">
	<SectionBadge label="02" class="-rotate-15 max-sm:scale-70 max-sm:-top-8 max-sm:ml-5" />
	<div class="relative mt-14 bg-boba-black">

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
	
		<div class="absolute -top-24 -bottom-24 left-0 w-[1px] bg-boba-black"></div>
		<div class="absolute -top-24 -bottom-24 right-0 w-[1px] bg-boba-black"></div>
		
		<div class="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>
		<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>

		<div class="border rounded-xl border-boba-black border-b-0 bg-citrouille px-8 py-8 max-sm:row-start-1">
			<h2
				id="s02-title"
				class="font-sans text-[48px] max-sm:text-[30px] font-extrabold leading-none tracking-[-0.03em]"
			>
				It’s True, We’re Going Tip to Tip.
			</h2>
		</div>
		<div class="grid gap-0 bg-boba-black grid-cols-[1fr_minmax(0,467px)] max-sm:grid-cols-1">
			<div class="border rounded-xl border-boba-black bg-sparky-yellow px-8 py-10">
				<p class="font-sans text-[32px] leading-[1.11] tracking-[-0.02em] max-sm:text-[22px] max-sm:p-3">
					This year, SparkJam is going across Canada. Students based in British Columbia can attend the event
					at Simon Fraser University; and students in Toronto can attend at the University of Waterloo!
				</p>
			</div>
			<div class="border rounded-xl border-boba-black bg-touch-grass p-6 border-l-0">
				<img
					src={'/canada.svg'}
					alt="Map of Canada with event locations"
					class="mx-auto w-full max-w-[467px]"
				/>
			</div>
		</div>
	</div>
</section>
