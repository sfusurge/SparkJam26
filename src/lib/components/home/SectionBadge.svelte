<script lang="ts">
	const { label, class: className = '' }: { label: string; class?: string } = $props();

	const isRotatedLeft = $derived(className.includes('-rotate'));
</script>

<div
	class="absolute left-3 -top-9 z-10 rounded border border-boba-black bg-canvas-grey px-3 py-2 font-sans text-[32px] font-extrabold transition-transform duration-300 {isRotatedLeft
		? 'hover:rotate-[25deg]'
		: 'hover:-rotate-[25deg]'} {className}"
>
	{label}
</div>
