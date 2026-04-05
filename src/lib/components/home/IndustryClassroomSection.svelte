<script lang="ts">
	import SectionBadge from './SectionBadge.svelte';
	import type { Writable } from 'svelte/store';
	const { isMobile } = $props() as { isMobile: Writable<boolean> }
</script>

<section class="relative mt-24 w-full max-sm:w-screen" aria-labelledby="s01-title">
	<div class="mx-auto w-full max-w-[1334px] px-[3%] max-sm:px-0">
		<SectionBadge label="01" class="-rotate-15 max-sm:scale-70 max-sm:-top-8" />

		<div class="relative mt-14">
			{#if !$isMobile}
				<div class="absolute -bottom-24 left-0 w-[1px] bg-boba-black"></div>
				<div class="absolute -bottom-24 right-0 w-[1px] bg-boba-black"></div>

				<div class="absolute top-0 left-0 w-full h-[1px] bg-boba-black"></div>
				<div class="absolute bottom-0 left-0 w-full h-[1px] bg-boba-black"></div>

				<div class="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>
				<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-boba-black"></div>
			{/if}
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

			<div class="grid gap-0 bg-boba-black grid-cols-[minmax(0,467px)_1fr] max-lg:grid-cols-1">
				<div class=" max-lg:row-start-2 flex items-end justify-center overflow-hidden rounded-xl max-sm:rounded-none border border-boba-black bg-strawberry-moon min-h-94.5">
					<img
						src={'/Otter Elements.svg'}
						alt="SparkJam characters"
						class="mx-auto block h-auto w-full max-w-98.75 object-contain"
					/>
				</div>
				<div class="flex min-h-0 flex-col">
					<div class="flex min-h-0 flex-col">
						<div class="border rounded-xl max-sm:rounded-none border-boba-black border-b-0 bg-citrouille p-15 max-sm:px-8 max-sm:py-16">
							<h2
								id="s01-title"
								class="font-sans text-[48px] max-sm:text-[32px] font-extrabold leading-none tracking-[-0.03em]"
							>
								Bridging the Industry &amp; Classroom.
							</h2>
						</div>
						<div class="flex-1 rounded-xl max-sm:rounded-none border border-boba-black bg-sparky-yellow p-15">
							<p class="font-sans text-[32px] leading-[1.11] tracking-[-0.02em] max-sm:text-[22px]">
								SparkJam is a 2 week long design jam where students spend the first week developing their skills,
								and the second applying them on a design challenge brief.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>