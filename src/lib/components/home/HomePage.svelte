<script lang="ts">
	import type { Snippet } from 'svelte';
	import Header from './Header.svelte';
	import Footer from "$lib/components/home/Footer.svelte";
	import Credits from "$lib/components/home/Credits.svelte";

	const { children }: { children: Snippet } = $props();
</script>

<div
	class="relative min-h-screen w-full bg-sparky-yellow text-boba-black"
>
	<div class="dot-bg"></div>

	<Header />


	<main class="relative z-10 mx-auto w-full max-w-[1512px] pb-0 px-15">

		{@render children()}
	</main>

	<Footer>
		<Credits />
	</Footer>
</div>

<style>
	.dot-bg {
		position: absolute;
		inset: 0;
		z-index: 0;
		background-image: radial-gradient(circle, rgba(255, 204, 53) 4.5px, transparent 1px);
		background-size: 12px 12px;
	}
</style>