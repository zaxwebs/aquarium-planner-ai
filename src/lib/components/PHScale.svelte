<script lang="ts">
	import { cn } from '$lib/utils.js'

	let className
	export { className as class }

	export let pH: { min: number; max: number }

	$: minPosition = Math.max(0, Math.min(100, ((pH.min - 0) / (14 - 0)) * 100))
	$: maxPosition = Math.max(0, Math.min(100, ((pH.max - 0) / (14 - 0)) * 100))
</script>

<div class={cn('my-5', className)}>
	<div class="relative w-full h-3 rounded-full bg-ph">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as value}
			<div
				class="absolute top-[20%] w-px h-[60%] bg-white opacity-50 -translate-x-1/2"
				style="left: {(value / 14) * 100}%;"
			></div>
		{/each}
		<div
			class="absolute -translate-x-1/2 top-0 w-1 h-full bg-white"
			style="left: {minPosition}%;"
		></div>
		<div
			class="absolute -translate-x-1/2 top-0 w-1 h-full bg-white"
			style="left: {maxPosition}%;"
		></div>
	</div>

	<div class="flex justify-between mt-1 text-xs text-gray-700">
		<div>0</div>
		<div>14</div>
	</div>
</div>

<style>
	.bg-ph {
		background: linear-gradient(
			to right,
			#ef4444,
			#f97316,
			#eab308,
			#84cc16,
			#22c55e,
			#3b82f6,
			#8b5cf6
		);
	}
</style>
