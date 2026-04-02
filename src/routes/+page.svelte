<script lang="ts">
	import RegistrationButtons from '$lib/components/home/RegistrationButtons.svelte';
	import HomeHero from '$lib/components/home/HomeHero.svelte';
	import HomePage from '$lib/components/home/HomePage.svelte';
	import IndustryClassroomSection from '$lib/components/home/IndustryClassroomSection.svelte';
	import ScheduleSection from '$lib/components/home/ScheduleSection.svelte';
	import SponsorsSection from '$lib/components/home/SponsorsSection.svelte';
	import ChartSection from '$lib/components/home/ChartSection.svelte';
	import TipToTipSection from '$lib/components/home/TipToTipSection.svelte';
	import WorkshopsSection from '$lib/components/home/WorkshopsSection.svelte';
</script>

<HomePage>
	<HomeHero />
	<IndustryClassroomSection />
	<TipToTipSection />
	<ScheduleSection />
	<WorkshopsSection />
	<ChartSection />
	<RegistrationButtons />
	<SponsorsSection />
</HomePage>
