<script lang="ts">
	import RegistrationButtons from '$lib/components/home/RegistrationButtons.svelte';
	import HomeHero from '$lib/components/home/HomeHero.svelte';
	import HomePage from '$lib/components/home/HomePage.svelte';
	import IndustryClassroomSection from '$lib/components/home/IndustryClassroomSection.svelte';
	import ScheduleSection from '$lib/components/home/ScheduleSection.svelte';
	import SkiGame from '$lib/components/home/SkiGame.svelte';
	import SponsorsSection from '$lib/components/home/SponsorsSection.svelte';
	import ChartSection from '$lib/components/home/ChartSection.svelte';
	import StatsSection from '$lib/components/home/StatsSection.svelte';
	import TipToTipSection from '$lib/components/home/TipToTipSection.svelte';
	import WorkshopsSection from '$lib/components/home/WorkshopsSection.svelte';
</script>

<HomePage>
	<HomeHero />
	<IndustryClassroomSection />
	<SkiGame />
	<TipToTipSection />
	<ScheduleSection />
	<WorkshopsSection />
	<StatsSection />
	<ChartSection />
	<RegistrationButtons />
	<SponsorsSection />
</HomePage>
