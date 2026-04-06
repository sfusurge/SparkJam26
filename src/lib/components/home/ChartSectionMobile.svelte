<script lang="ts">
	import SectionBadge from './SectionBadge.svelte';

	const bars = [
		{
			src: '/chart/bar1.svg',
			select: '/chart/bar1_select.webp',
			label: '10+ schools',
			pillClass: 'bg-citrouille',
			height: 'h-[94px]',
			viewBoxWidth: 224.8,
			bodyCenterX: 93.9
		},
		{
			src: '/chart/bar2.svg',
			select: '/chart/bar2_select.webp',
			label: '30 Teams',
			pillClass: 'bg-touch-grass',
			height: 'h-[184px]',
			viewBoxWidth: 224.8,
			bodyCenterX: 94.9
		},
		{
			src: '/chart/bar3.svg',
			select: '/chart/bar3_select.webp',
			label: '40+ Mentors',
			pillClass: 'bg-touched-grass',
			height: 'h-[254px]',
			viewBoxWidth: 225.9,
			bodyCenterX: 91
		},
		{
			src: '/chart/bar4.svg',
			select: '/chart/bar4_select.webp',
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

	function assignBarRef(index: number) {
		return (node: HTMLButtonElement) => {
			barRefs[index] = node;
		};
	}

	let barRefs: HTMLButtonElement[] = [];

	function scrollToBar(index: number) {
		if (!barRefs[index]) return;
		barRefs[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
	}

	function scrollNext() {
		if (selected === null || selected >= bars.length - 1) return;
		selected += 1;
		scrollToBar(selected);
	}

	function scrollPrev() {
		if (selected === null || selected <= 0) return;
		selected -= 1;
		scrollToBar(selected);
	}

	let hovered = $state<number | null>(null);
	let selected = $state<number | null>(0);

	let visibleIndex = $derived(hovered !== null ? hovered : selected);
</script>

<section
		class="relative mt-24 w-full max-sm:w-screen justify-center"
		aria-labelledby="chart-section-heading"
>
	<div class="mx-auto w-full max-w-[1334px] px-[3%] max-sm:px-0">
		<SectionBadge label="05" class="-rotate-[12deg] max-sm:scale-70 max-sm:-top-8" />

		<div class="relative mt-14">

			<div class="overflow-hidden border-2 border-boba-black bg-boba-black">
				<!-- Header -->
				<div class="border-b border-boba-black bg-citrouille px-8 py-9">
					<h2
							id="chart-section-heading"
							class="font-sans text-[48px] max-sm:text-[32px] font-extrabold leading-none tracking-[-0.03em] text-boba-black"
					>
						Last year we changed the game.
					</h2>
				</div>

				<!-- Chart -->
				<div
						class="relative min-h-[600px] bg-cover bg-center bg-no-repeat"
						style="background-image: url('/chart/chart_b.webp')"
				>
					<div class="absolute top-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
						<button onclick={scrollPrev} aria-label="Scroll Left" disabled={selected === 0}>
							<img src={'/shapes/leftArrow.svg'} class="size-[62px] rounded-xl" />
						</button>
						<button onclick={scrollNext} aria-label="Scroll Right" disabled={selected === bars.length - 1}>
							<img src={'/shapes/rightArrow.svg'} class="size-[62px] rounded-xl" />
						</button>
					</div>

					<div class="relative flex h-full min-h-[600px] items-end overflow-x-hidden gap-2 pb-10 pt-10 scroll-smooth snap-x snap-mandatory">
						<div class="min-w-[242px]"></div>
						{#each bars as bar, i}
							{@const isActive = visibleIndex === i}

							<button
								use:assignBarRef(i)
								type="button"
								class="origin-bottom scale-75 snap-center group relative flex w-[192px] shrink-0 cursor-pointer flex-col items-center justify-end focus:outline-none"
								onmouseenter={() => (hovered = i)}
								onmouseleave={() => (hovered = null)}
								onclick={() => {
									scrollToBar(i);
									selected = selected === i ? null : i;
								}}
								aria-pressed={selected === i}
								aria-label={bar.label}
							>
								<div
										class="relative flex w-[192px] items-center justify-center {bar.height}"
										style="--bar-shift: {barBodyShiftX(bar.viewBoxWidth, bar.bodyCenterX)}"
								>
									<div class="absolute block size-[98%] left-4">
										<!-- Pill -->
										<span
												class="absolute bottom-full left-1/2 z-10 mb-3 translate-x-[calc(-50%_+_var(--bar-shift))] inline-flex items-center justify-center gap-[10px] rounded-[5px] border-2 border-[#E8E6DE] p-[10px] text-[32px] font-semibold leading-none tracking-[-0.64px] text-black whitespace-nowrap transition-all duration-200 {bar.pillClass} {selected === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}"
										>
											{bar.label}
										</span>

										<!-- Bar -->
										<img
												src={bar.src}
												alt={bar.label}
												class="block h-full w-full select-none object-fill transition-[filter] duration-200"
												style={isActive ? 'filter: brightness(1.3)' : ''}
												draggable="false"
										/>

										<!-- Outline -->
										<img
												src={bar.select}
												alt=""
												aria-hidden="true"
												class="pointer-events-none absolute -top-[5px] left-1/2 h-full w-[192px] translate-x-[calc(-50%_+_var(--bar-shift))] select-none object-fill transition-opacity duration-200 {selected === i ? 'opacity-100' : 'opacity-0'}"
												draggable="false"
										/>
									</div>

								</div>
							</button>
						{/each}
						<div class="min-w-[242px] p-6"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>