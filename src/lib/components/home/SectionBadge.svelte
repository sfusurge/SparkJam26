<script lang="ts">
	const { label, class: className = '' }: { label: string; class?: string } = $props();
</script>

<div
	class="absolute left-0 top-0 z-10 rounded border border-boba-black bg-canvas-grey px-3 py-2 font-sans text-[32px] font-extrabold {className}"
>
	{label}
</div>
