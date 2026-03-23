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
	<Header />
	<main class="relative z-10 mx-auto w-full max-w-[1512px] pb-16 px-15">
		{@render children()}
	</main>
	<Footer>
		<Credits />
	</Footer>
</div>
