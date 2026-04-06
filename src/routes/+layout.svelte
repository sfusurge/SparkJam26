<script lang="ts">
	import './layout.css';
	import CustomCursor from '$lib/components/CustomCursor.svelte';

	const { children } = $props();
</script>

<CustomCursor />
{@render children()}
