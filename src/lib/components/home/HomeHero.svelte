<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="relative overflow-visible mt-8 pb-16 md:pb-24" aria-labelledby="hero-heading">
	<div
		class="relative mx-auto aspect-[1411/819] w-full max-w-[1392px]"
	>
	
		<img
			src="/logosection/SJ_Background.png"
			alt=""
			class="pointer-events-none mx-auto block size-[94%] z-1 object-cover select-none"
			aria-hidden="true"
		/>

		

		<div
			class="pointer-events-auto absolute left-0 top-[55%] z-2 w-[min(26.85%,373px)] origin-center transition-transform duration-300 hover:-rotate-15 max-[480px]:w-[min(42%,280px)]"
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
			class="pointer-events-auto absolute left-[6.23%] top-[63%] z-[1] w-[5.1%] min-w-[48px] max-w-[71px] origin-center transition-transform duration-300 hover:rotate-6"
			aria-hidden="true"
		>
			<div class="relative aspect-square w-full">
				<img src="/shapes/2D%20-%20Circle.svg" alt="" class="block size-full object-contain" />
			</div>
		</div>

		<div
			class="pointer-events-auto absolute left-[84%] top-[31.2%] z-[1] w-[13.68%] min-w-[100px] max-w-[190px] origin-center transition-transform duration-300 hover:-rotate-15 max-[640px]:left-[78%]"
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
 		class="absolute left-[8.29%] top-[3%] z-[2] flex w-[82%] flex-col items-start max-[480px]:left-[3%] max-[480px]:w-[94%]"
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
				class="mt-[min(18vw,9rem)] self-end rotate-[7.78deg]"
			>
				Get Jammin’
			</Button>
		</div>
	</div>
</section>
