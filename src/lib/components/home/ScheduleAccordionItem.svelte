<script lang="ts">
	import type { Snippet } from 'svelte';
	const {
		title,
		panelClass,
		children
	}: {
		title: string;
		panelClass: string;
		children: Snippet;
	} = $props();

	let open = $state(false);

	function toggle() {
		open = !open;
	}
</script>

<div
		class="group rounded-2xl max-sm:text-[22px] border border-boba-black overflow-hidden {panelClass}"
		class:open
>
	<button
			onclick={toggle}
			class="max-sm:text-[22px] flex w-full cursor-pointer items-center justify-between gap-4 font-sans text-[40px] font-extrabold tracking-[-0.02em] px-6 py-4"
			aria-expanded={open}
	>
		{title}
		<img
				src={'/shapes/accordionChevron.svg'}
				alt=""
				class="size-[62px] shrink-0 transition-transform duration-300 hover:invert {open ? 'rotate-180' : ''}"
		/>
	</button>

	<div
		class="grid transition-all duration-300 ease-in-out {open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}"
	>
		<div class="overflow-hidden">
			<div class="bg-white px-6 pb-6 pt-4 max-sm:text-[22px] font-sans text-2xl leading-snug border-t border-boba-black">
				{@render children()}
			</div>
		</div>
	</div>
</div>