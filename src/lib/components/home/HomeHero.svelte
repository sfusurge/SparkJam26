<script lang="ts">
	import Button from "$lib/components/ui/Button.svelte";
	import CatMascot from "$lib/components/home/CatMascot.svelte";
	import type { Writable } from "svelte/store";

	const { isMobile } = $props() as { isMobile: Writable<boolean> };

	const TARGET = new Date("2026-04-10T02:00:00Z");
	let applicationsOpen = $state(Date.now() >= TARGET.getTime());
</script>

<section
	class="relative overflow-visible max-sm:-mt-[60px] md:mt-8 pb-16 md:pb-24"
	aria-labelledby="hero-heading"
>
	<!-- Star lives on the section so it isn't clipped by the overflow-hidden inner wrapper -->
	<div
		class="pointer-events-auto absolute left-0 max-sm:-left-[115px] top-[55%] max-sm:top-[75%] z-2 w-[min(26.85%,373px)] max-sm:w-[52%] origin-center transition-transform duration-300 hover:-rotate-2 max-[480px]:w-[min(42%,280px)]"
		aria-hidden="true"
	>
		<div class="relative aspect-square w-full">
			<img
				src="/shapes/2D-North-Star.svg"
				alt=""
				class="absolute inset-[11.02%] block size-full max-w-none object-contain"
			/>
		</div>
	</div>
	<div
		class="relative mx-auto aspect-[1411/819] w-full max-w-[1392px] max-sm:aspect-auto max-sm:min-h-[811px] max-sm:overflow-hidden"
	>
		<CatMascot />
		<img
			src="/background/background.svg"
			alt=""
			class="heroMask pointer-events-none"
			aria-hidden="true"
		/>
		<img src="/background/hero_outline.svg" alt="" class="heroOutline" aria-hidden="true" />

		{#if !$isMobile}
			<div
				class="pointer-events-auto absolute left-[6.23%] top-[63%] z-[1] w-[5.1%] min-w-[48px] max-w-[71px] origin-center transition-transform duration-300 hover:rotate-6"
				aria-hidden="true"
			>
				<div class="relative aspect-square w-full">
					<img
						src="/shapes/2D%20-%20Circle.svg"
						alt=""
						class="block size-full object-contain"
					/>
				</div>
			</div>
		{/if}

		<div
			class="pointer-events-auto absolute left-[84%] top-[31.2%] max-sm:top-[47%] z-[1] w-[13.68%] min-w-[100px] max-w-[190px] origin-center transition-transform duration-300 hover:-rotate-2 max-[640px]:left-[86%]"
			aria-hidden="true"
		>
			<div class="relative aspect-square w-full">
				<img
					src="/shapes/2D%20-%20Triangle.svg"
					alt=""
					class="absolute inset-x-[9.76%] bottom-[25%] top-[4.2%] block size-full max-w-none object-contain"
				/>
			</div>
		</div>

		<div
			class="pointer-events-auto absolute left-[33%] top-[68%] max-sm:left-[3%] max-sm:top-[70%] z-[1] w-[11%] min-w-[100px] max-w-[150px]"
			aria-hidden="true"
		>
			<div class="relative aspect-square w-full">
				<img src="/shapes/FeltCircle.webp" alt="" class="block size-full object-contain" />
			</div>
		</div>

		<div
			class="pointer-events-auto absolute right-[22%] top-[40%] max-sm:-right-[7%] max-sm:top-[45%] z-[1] w-[15%] min-w-[100px] max-w-[170px] rotate-[20deg]"
			aria-hidden="true"
		>
			<div class="relative aspect-square w-full">
				<img
					src="/footer/newshapes/orange_triangle.webp"
					alt=""
					class="block size-full object-contain"
				/>
			</div>
		</div>

		<div
			class="pointer-events-auto absolute right-[30%] top-[53%] max-sm:right-[1%] max-sm:top-[55%] z-[11] w-[15%] min-w-[200px] max-w-[250px] rotate-[20deg]"
			aria-hidden="true"
		>
			<div class="relative aspect-square w-full">
				<img
					src="/footer/newshapes/funStar.webp"
					alt=""
					class="block size-full object-contain"
				/>
			</div>
		</div>

		<div
			class="pointer-events-auto absolute left-[27%] top-[57%] max-sm:-left-[10%] max-sm:top-[60%] z-[11] w-[15%] min-w-[125px] max-w-[150px] rotate-[20deg]"
			aria-hidden="true"
		>
			<div class="relative aspect-square w-full">
				<img
					src="/footer/newshapes/ball.webp"
					alt=""
					class="block size-full object-contain"
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
			{#if applicationsOpen}
				<Button
					variant="hero-cta"
					href="https://portal.sfusurge.com/application"
					class="mt-[min(18vw,9rem)] max-sm:translate-y-85 self-end max-sm:self-center rotate-[7.78deg]"
				>
					Get Jammin'
				</Button>
			{:else}
				<Button
					variant="hero-cta"
					href="/SparkJam Applications Open.ics"
					class="mt-[min(18vw,9rem)] max-sm:translate-y-85 self-end max-sm:self-center rotate-[7.78deg]"
				>
					Remind Me
				</Button>
			{/if}
		</div>
	</div>
</section>

<style>
	.heroMask {
		position: absolute;
		left: 50%;
		top: 50%;

		transform: translate(-50%, -50%) scale(1);

		
		mask-image: url("/background/hero_mask.svg");
		mask-size: contain;
		mask-repeat: no-repeat;
		mask-position: center;
	}

	.heroOutline {
		position: absolute;
		left: 50%;
		top: 50%;

		transform: translate(-50%, -50%) scale(1);
	}
</style>
