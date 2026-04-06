<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Countdown from '$lib/components/ui/Countdown.svelte';

	import type { Writable } from 'svelte/store';
	const { isMobile } = $props() as { isMobile: Writable<boolean> };

	const TARGET = new Date('2026-04-10T02:00:00Z');
	let applicationsOpen = $state(Date.now() >= TARGET.getTime());
</script>

<section class="relative mt-28" aria-label="Links and logo">
	<div class="relative w-full max-w-[1334px] mx-auto px-[3%]">
		{#if !$isMobile}
			<div class="absolute inset-y-0 left-[3%] w-[1px] bg-boba-black"></div>
			<div class="absolute inset-y-0 right-[3%] w-[1px] bg-boba-black"></div>

			<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>
		{/if}
		<div class="pointer-events-none absolute -z-10 bottom-0 left-[3%] max-sm:hidden" aria-hidden="true">
			<div class="size-3 -translate-x-1/2 translate-y-1/2 rotate-45 bg-boba-black"></div>
		</div>
		<div class="pointer-events-none absolute -z-10 bottom-0 right-[3%] max-sm:hidden" aria-hidden="true">
			<div class="size-3 translate-x-1/2 translate-y-1/2 rotate-45 bg-boba-black"></div>
		</div>

		<div class="flex flex-col items-center gap-6 pb-20">
			<div class="relative w-[766px] max-md:max-w-[575px] max-sm:max-w-[322px] max-md:pt-20 max-sm:pt-10">
				<img src="/logosection/sj_logo.svg" alt="SparkJam" class="mx-auto h-auto w-full" />
			</div>
			{#if !$isMobile}
				<div
					class="pointer-events-auto absolute left-[90.5%] top-[-20%] z-[1] w-[12.68%] min-w-[100px] max-w-[190px] rotate-85 origin-center transition-transform duration-300 hover:rotate-60"
					aria-hidden="true"
				>
					<div class="relative aspect-square w-full">
						<img
							src="/shapes/2D%20-%20Triangle (1).svg"
							alt=""
							class="absolute inset-x-[9.76%] bottom-[25%] top-[4.2%] block size-full max-w-none object-contain"
						/>
					</div>
				</div>

				<div
					class="pointer-events-auto absolute left-[73%] top-[75%] z-[1] w-[25%] min-w-[100px] max-w-[500px] origin-center transition-transform duration-300 hover:-rotate-25"
					aria-hidden="true"
				>
					<div class="relative aspect-square w-full">
						<img
							src="/shapes/2D-North-Star (1).svg"
							alt=""
							class="absolute inset-x-[9.76%] bottom-[25%] top-[4.2%] block size-full max-w-none object-contain"
						/>
					</div>
				</div>

				<div
					class="pointer-events-auto absolute left-[1.5%] top-[80%] z-[1] w-[13.68%] min-w-[50px] max-w-[50px] origin-center"
					aria-hidden="true"
				>
					<div class="relative aspect-square w-full">
						<img
							src="/shapes/2D - Circle.svg"
							alt=""
							class="absolute inset-x-[9.76%] bottom-[25%] top-[4.2%] block size-full max-w-none object-contain"
						/>
					</div>
				</div>

				<div
					class="pointer-events-auto absolute left-[-13%] top-[81%] z-[1] w-[21.68%] min-w-[100px] max-w-[400px] origin-center transition-transform duration-300 hover:-rotate-12"
					aria-hidden="true"
				>
					<div class="relative aspect-square w-full">
						<img
							src="/shapes/2D-Star.svg"
							alt=""
							class="absolute inset-x-[9.76%] bottom-[25%] top-[4.2%] block size-full max-w-none object-contain"
						/>
					</div>
				</div>
			{/if}
			<div class="flex flex-col items-center gap-6 max-md:py-20 max-sm:py-8">
				{#if applicationsOpen}
					<Button class="max-lg:text-[22px]" variant="section-primary" href="https://portal.sfusurge.com/application">Get Jammin'</Button>
				{:else}
					<Countdown vertical large onExpired={() => applicationsOpen = true} />
				{/if}
				<Button class="max-lg:text-[22px]" variant="section-secondary" as="span">FAQ &amp; More Info</Button>
				<Button class="max-lg:text-[22px]" variant="section-secondary" as="span">Mentor Registration</Button>
				<Button class="max-lg:text-[22px]" variant="section-secondary" as="span">Judge Registration</Button>
			</div>
		</div>
	</div>
</section>


