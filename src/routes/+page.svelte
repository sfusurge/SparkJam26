<script lang="ts">
	import RegistrationButtons from '$lib/components/home/RegistrationButtons.svelte';
	import HomeHero from '$lib/components/home/HomeHero.svelte';
	import HomePage from '$lib/components/home/HomePage.svelte';
	import IndustryClassroomSection from '$lib/components/home/IndustryClassroomSection.svelte';
	import ScheduleSection from '$lib/components/home/ScheduleSection.svelte';
	import SponsorsSection from '$lib/components/home/SponsorsSection.svelte';
	import ChartSection from '$lib/components/home/ChartSection.svelte';
	import ChartSectionMobile from '$lib/components/home/ChartSectionMobile.svelte';
	import TipToTipSection from '$lib/components/home/TipToTipSection.svelte';
	import WorkshopsSection from '$lib/components/home/WorkshopsSection.svelte';
	import SkiGame from '$lib/components/home/SkiGame.svelte';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import TempWorkshopsSection from "$lib/components/home/TempWorkshopsSection.svelte";

	const isMobile = writable(false);

	onMount(() => {
		const check = () => isMobile.set(window.innerWidth < 750);
		check();
		window.addEventListener('resize', check);
		return () => window.removeEventListener('resize', check);
	});
</script>

<HomePage>
	<HomeHero {isMobile} />
	<IndustryClassroomSection {isMobile} />
	<SkiGame />
	<TipToTipSection {isMobile} />
	<ScheduleSection />
	<TempWorkshopsSection/>
<!--	<WorkshopsSection />-->
	{#if $isMobile}
		<ChartSectionMobile />
	{:else}	
		<ChartSection />
	{/if}
	
	<RegistrationButtons {isMobile} />
	<SponsorsSection {isMobile} />
</HomePage>
