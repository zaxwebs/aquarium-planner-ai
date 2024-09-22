<script>
	import GridUnderlay from '$lib/components/GridUnderlay.svelte'
</script>

<div
	class="flex items-center justify-between p-6 border-b relative bg-gradient-to-r from-blue-50 to-cyan-50"
>
	<GridUnderlay />
	<slot />
</div>
