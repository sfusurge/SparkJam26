<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import type { Writable } from 'svelte/store';
	const { isMobile } = $props() as { isMobile: Writable<boolean> };
</script>

<section class="relative overflow-hidden mt-8 pb-16 min-h-[811px] md:min-h-[511px]" aria-labelledby="hero-heading">	
	<img
		src="/logosection/SJ_Background.png"
		alt=""
		class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[811px] w-auto min-w-[100vw] object-cover z-0 select-none md:static md:inset-auto md:left-auto md:-translate-x-0 md:h-auto md:w-full md:min-w-0 md:object-contain"
		aria-hidden="true"
	/>
	<div
		class="pointer-events-auto absolute left-0 top-[55%] z-2 w-[min(26.85%,373px)] origin-center transition-transform duration-300 hover:-rotate-2 max-[480px]:w-[min(42%,280px)]"
		aria-hidden="true"
	>
		<div class="relative aspect-square w-full">
			<img
				src="/shapes/2D-North-Star.svg"
				alt=""
				class="absolute inset-[11.02%] block size-full max-w-none object-contain max-sm:top-60 max-sm:size-40 max-sm:-left-18"
			/>
		</div>
	</div>
	{#if !$isMobile}
		<div
			class="pointer-events-auto absolute left-[6.23%] top-[63%] z-[1] w-[5.1%] min-w-[48px] max-w-[71px] origin-center transition-transform duration-300 hover:rotate-6"
			aria-hidden="true"
		>
			<div class="relative aspect-square w-full">
				<img src="/shapes/2D%20-%20Circle.svg" alt="" class="block size-full object-contain" />
			</div>
		</div>
	{/if}

	<div
		class="pointer-events-auto absolute left-[84%] top-[31.2%] z-[1] w-[13.68%] min-w-[100px] max-w-[190px] origin-center transition-transform duration-300 hover:-rotate-2 max-[640px]:left-[78%]"
		aria-hidden="true"
	>
		<div class="relative aspect-square w-full">
			<img
				src="/shapes/2D%20-%20Triangle.svg"
				alt=""
				class="absolute inset-x-[9.76%] bottom-[25%] top-[4.2%] block size-full max-w-none object-contain max-sm:left-10"
			/>
		</div>
	</div>

	<div
	class="absolute left-[8.29%] top-[3%] max-sm:top-[18%] z-[2] flex w-[82%] flex-col items-start max-[480px]:left-[3%] max-[480px]:w-[94%]"
	>
		<h1 id="hero-heading" class="sr-only">SparkJam 2026</h1>
		<div class="relative w-full -rotate-[4.87deg]">
			<img
				src="/logosection/sj_logo.svg"
				alt="SparkJam"
				class="h-auto w-full max-w-full"
			/>
			<img
				src="/logosection/star.svg"
				alt=""
				class="absolute right-[-3%] top-[5%] w-[12%] min-w-[72px] max-w-[148px] animate-spin [animation-duration:2s]"
				aria-hidden="true"
			/>
		</div>
		<p
			class="ml-[20%] -rotate-[4.98deg] font-sans text-[clamp(28px,5vw,40px)] font-extrabold leading-none tracking-[-1.2px] text-boba-black"
		>
			May 11 - 23
		</p>
		<Button
			variant="hero-cta"
			href="/apply"
			class="mt-[min(18vw,9rem)] max-sm:translate-y-85 inline-flex self-end rotate-[7.78deg] items-center justify-center rounded-xl border-2 border-boba-black bg-canvas-grey px-5 py-1 font-sans text-[clamp(24px,4.5vw,40px)] font-extrabold tracking-[-0.03em] text-boba-black no-underline shadow-[4px_4px_0_var(--color-boba-black)] transition hover:-translate-y-0.5"
		>
			Get Jammin’
		</Button>
	</div>
</section>
