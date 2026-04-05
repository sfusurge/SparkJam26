<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	const { isMobile } = $props() as { isMobile: Writable<boolean> };
</script>

<section class="relative mt-12 mx-auto w-full max-sm:w-screen" aria-label="Sponsors">
	<div class="mx-auto w-full max-w-[1334px] px-[3%] max-sm:px-[3px]">
		{#if !$isMobile}	
			<div class="absolute -inset-y-23 left-[3%] w-[1px] bg-boba-black"></div>
			<div class="absolute -inset-y-21.5 right-[3%] w-[1px] bg-boba-black"></div>
		{/if}
		<div class="relative">
			
			<div class="mx-auto max-w-[750px] text-center">
				{#if !$isMobile}
					<div
						class="pointer-events-auto absolute left-[20%] top-[100%] z-[100] w-[30.68%] min-w-[100px] max-w-[300px] origin-center transition-transform duration-300 hover:-rotate-12"
						aria-hidden="true"
					>
						<div class="relative aspect-square w-full">
							<img
								src="/shapes/2D-North-Star.svg"
								alt=""
								class="absolute inset-x-[9.76%] bottom-[25%] top-[4.2%] block size-full max-w-none object-contain"
							/>
						</div>
					</div>

					<div
						class="pointer-events-auto absolute left-[65%] top-[130%] z-[100] w-[13.68%] min-w-[50px] max-w-[50px] origin-center"
						aria-hidden="true"
					>
						<div class="relative aspect-square w-full">
							<img
								src="/shapes/2D - Circle (1).svg"
								alt=""
								class="absolute inset-x-[9.76%] bottom-[25%] top-[4.2%] block size-full max-w-none object-contain"
							/>
						</div>
					</div>
				{/if}
				<p class="font-sans text-[32px] max-lg:text-[22px] leading-[1.11] tracking-[-0.02em]">
					<span class="font-extrabold italic">SparkJam</span>
					would not have been possible without the support from our amazing sponsors and community.
				</p>
				<div class="mt-16 flex flex-col items-center gap-16 max-sm:gap-8 ">
					<div class="flex flex-col items-center gap-10 ">
						<a href="https://www.transoftsolutions.com/" target="_blank" rel="noopener noreferrer" class="transition-opacity hover:opacity-80">
							<img src="/sponsors/transoft.png" alt="Transoft Solutions" class="max-sm:max-w-[200px] max-h-[190px] w-auto max-w-full object-contain" />
						</a>
						<a href="https://venturelabs.ca/" target="_blank" rel="noopener noreferrer" class="transition-opacity hover:opacity-80">
							<img src="/sponsors/venturelabs.png" alt="SFU VentureLabs" class="max-sm:max-w-[240px] max-h-[76px] w-full max-w-md object-contain" />
						</a>
					</div>
					<div class="flex w-full flex-col gap-8">
						<div class="flex flex-wrap items-center justify-center gap-12 max-md:gap-4 ">
							<a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" class="max-sm:max-w-[100px] transition-opacity hover:opacity-80">
								<img src="/sponsors/vercel.png" alt="Vercel" class="h-10 object-contain" />
							</a>
							<a href="https://www.framer.com/" target="_blank" rel="noopener noreferrer" class="max-sm:max-w-[100px] transition-opacity hover:opacity-80w-[80px] ">
								<img src="/sponsors/framer.png" alt="Framer" class="h-12 object-contain" />
							</a>
							<a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="max-sm:max-w-[100px] transition-opacity hover:opacity-80 ">
								<img src="/sponsors/github.png" alt="GitHub" class="h-14 object-contain" />
							</a>
						</div>
						<div class="flex flex-wrap items-center justify-center gap-8 max-md:gap-6">
							<a href="https://www.instagram.com/hanoidrip/" target="_blank" rel="noopener noreferrer" class="max-sm:max-w-[60px] transition-opacity hover:opacity-80">
								<img src="/sponsors/hanoidrip.png" alt="Hanoi Drip" class="h-[79px] rounded-xl object-contain" />
							</a>
							<a href="https://www.hiveclimbing.com/" target="_blank" rel="noopener noreferrer" class="max-sm:max-w-[60px] transition-opacity hover:opacity-80">
								<img src="/sponsors/hive.png" alt="Hive Cafe" class="h-[68px] object-contain" />
							</a>
							<a href="https://www.indomie.com/" target="_blank" rel="noopener noreferrer" class="max-sm:max-w-[60px] transition-opacity hover:opacity-80">
								<img src="/sponsors/indomie.png" alt="Indomie" class="h-[79px] object-contain" />
							</a>
							<a href="https://www.tacofino.com/" target="_blank" rel="noopener noreferrer" class="max-sm:max-w-[60px] transition-opacity hover:opacity-80">
								<img src="/sponsors/tacofino.png" alt="Tacofino" class="h-[41px] object-contain" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>