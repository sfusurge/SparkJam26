<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	const TARGET = new Date('2026-04-09T15:00:00Z');

	const {
		vertical = false,
		large = false,
		onExpired
	}: { vertical?: boolean; large?: boolean; onExpired?: () => void } = $props();

	let totalHours = $state(0);
	let minutes = $state(0);
	let seconds = $state(0);
	let expired = $state(false);

	function tick() {
		const diff = TARGET.getTime() - Date.now();
		if (diff <= 0) {
			totalHours = minutes = seconds = 0;
			if (!expired) {
				expired = true;
				onExpired?.();
			}
			return;
		}
		totalHours = Math.floor(diff / 3_600_000);
		minutes = Math.floor((diff % 3_600_000) / 60_000);
		seconds = Math.floor((diff % 60_000) / 1_000);
	}

	let interval: ReturnType<typeof setInterval>;
	onMount(() => {
		tick();
		interval = setInterval(tick, 1000);
	});
	onDestroy(() => clearInterval(interval));

	function pad(n: number) {
		return String(n).padStart(2, '0');
	}
</script>

{#if !expired}
	<div
		class={vertical
			? 'inline-flex flex-col items-center gap-[10px]'
			: 'inline-flex shrink-0 items-center gap-[5px] sm:gap-[21px]'}
		aria-label="Countdown to applications opening"
		aria-live="polite"
	>
		<span class={large
			? 'font-sans text-[24px] font-normal leading-none tracking-[-0.72px] text-boba-black'
			: 'font-sans text-[17px] sm:text-[24px] font-normal leading-none tracking-[-0.72px] text-boba-black'}>
			Applications Open In
		</span>
		<span
			class={large
				? 'inline-flex items-center font-sans text-[28px] sm:text-[47.564px] font-extrabold leading-none tracking-[-1.427px] text-boba-black tabular-nums'
				: 'inline-flex items-center font-sans text-[20px] sm:text-[24px] font-extrabold leading-none tracking-[-0.72px] text-boba-black tabular-nums'}
		>
			<span class="inline-block w-[2.2ch] text-center">{pad(totalHours)}</span>
			<span>:</span>
			<span class="inline-block w-[2.2ch] text-center">{pad(minutes)}</span>
			<span>:</span>
			<span class="inline-block w-[2.2ch] text-center">{pad(seconds)}</span>
		</span>
	</div>
{/if}
