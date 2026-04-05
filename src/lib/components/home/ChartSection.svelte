<script lang="ts">
	import SectionBadge from './SectionBadge.svelte';

	const bars = [
		{
			src: '/chart/bar1.svg',
			select: '/chart/bar1_select.png',
			label: '10+ schools',
			pillClass: 'bg-citrouille',
			height: 'h-[94px]',
			viewBoxWidth: 224.8,
			bodyCenterX: 93.9
		},
		{
			src: '/chart/bar2.svg',
			select: '/chart/bar2_select.png',
			label: '30 Teams',
			pillClass: 'bg-touch-grass',
			height: 'h-[184px]',
			viewBoxWidth: 224.8,
			bodyCenterX: 94.9
		},
		{
			src: '/chart/bar3.svg',
			select: '/chart/bar3_select.png',
			label: '40+ Mentors',
			pillClass: 'bg-touched-grass',
			height: 'h-[254px]',
			viewBoxWidth: 225.9,
			bodyCenterX: 91
		},
		{
			src: '/chart/bar4.svg',
			select: '/chart/bar4_select.png',
			label: '100 + Jammers',
			pillClass: 'bg-strawberry-moon',
			height: 'h-[464px]',
			viewBoxWidth: 228.9,
			bodyCenterX: 91
		}
	] as const;

	function barBodyShiftX(viewBoxWidth: number, bodyCenterX: number) {
		return `calc(-182px * 0.98 * (${viewBoxWidth / 2} - ${bodyCenterX}) / ${viewBoxWidth})`;
	}

	let hovered = $state<number | null>(null);
	let selected = $state<number | null>(0);

	let visibleIndex = $derived(hovered !== null ? hovered : selected);
</script>

<section
		class="relative mx-auto mt-24 w-full max-w-[1334px] px-[3%]"
		aria-labelledby="chart-section-heading"
>
	<SectionBadge label="05" class="-rotate-[12deg]" />

	<div class="relative mt-14">
		<!-- Corners -->
		<div class="pointer-events-none absolute -z-10 top-0 left-0">
			<div class="size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-boba-black"></div>
		</div>
		<div class="pointer-events-none absolute -z-10 top-0 right-0">
			<div class="size-3 translate-x-1/2 -translate-y-1/2 rotate-45 bg-boba-black"></div>
		</div>
		<div class="pointer-events-none absolute -z-10 bottom-0 left-0">
			<div class="size-3 -translate-x-1/2 translate-y-1/2 rotate-45 bg-boba-black"></div>
		</div>
		<div class="pointer-events-none absolute -z-10 bottom-0 right-0">
			<div class="size-3 translate-x-1/2 translate-y-1/2 rotate-45 bg-boba-black"></div>
		</div>

		<!-- Borders -->
		<div class="absolute -top-24 -bottom-30 left-0 w-[1px] bg-boba-black"></div>
		<div class="absolute -top-24 -bottom-30 right-0 w-[1px] bg-boba-black"></div>
		<div class="absolute top-0 left-1/2 h-[1px] w-screen -translate-x-1/2 bg-boba-black"></div>
		<div class="absolute bottom-0 left-1/2 h-[1px] w-screen -translate-x-1/2 bg-boba-black"></div>

		<div class="overflow-hidden rounded-xl border-1 border-boba-black bg-boba-black">
			<!-- Header -->
			<div class="border-b border-boba-black bg-citrouille px-8 py-9">
				<h2
						id="chart-section-heading"
						class="font-sans text-[48px] font-extrabold leading-none tracking-[-0.03em] text-boba-black"
				>
					Last year we changed the game.
				</h2>
			</div>

			<!-- Chart -->
			<div
					class="relative min-h-[600px] bg-cover bg-center bg-no-repeat"
					style="background-image: url('/chart/chart_bg.png')"
			>
				<div class="flex h-full min-h-[600px] items-end justify-center px-8 pb-10 pt-10">
					{#each bars as bar, i}
						{@const isActive = visibleIndex === i}

						<button
								type="button"
								class="group relative flex w-[192px] shrink-0 cursor-pointer flex-col items-center justify-end focus:outline-none"
								onmouseenter={() => (hovered = i)}
								onmouseleave={() => (hovered = null)}
								onclick={() => (selected = selected === i ? null : i)}
								aria-pressed={selected === i}
								aria-label={bar.label}
						>
							<div
									class="relative flex w-[192px] items-center justify-center {bar.height}"
									style="--bar-shift: {barBodyShiftX(bar.viewBoxWidth, bar.bodyCenterX)}"
							>
								<!-- Pill -->
								<span
										class="absolute bottom-full left-1/2 z-10 mb-3 translate-x-[calc(-50%_+_var(--bar-shift))] inline-flex items-center justify-center gap-[10px] rounded-[5px] border-2 border-[#E8E6DE] p-[10px] text-[32px] font-semibold leading-none tracking-[-0.64px] text-black whitespace-nowrap transition-all duration-200 {bar.pillClass} {selected === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}"
								>
									{bar.label}
								</span>

								<div class="relative block size-[98%]">
									<img
											src={bar.src}
											alt={bar.label}
											class="block h-full w-full select-none object-fill transition-[filter] duration-200"
											style={isActive ? 'filter: brightness(1.3)' : ''}
											draggable="false"
									/>
								</div>

								<!-- Outline -->
								<img
										src={bar.select}
										alt=""
										aria-hidden="true"
										class="pointer-events-none absolute -top-[5px] left-1/2 h-full w-[192px] translate-x-[calc(-50%_+_var(--bar-shift))] select-none object-fill transition-opacity duration-200 {selected === i ? 'opacity-100' : 'opacity-0'}"
										draggable="false"
								/>
							</div>
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>