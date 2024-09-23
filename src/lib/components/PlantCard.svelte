<script>
	import SkeletonText from '$lib/components/SkeletonText.svelte'
	export let plant
</script>

<div class="border border-gray-200 p-6 rounded-lg">
	<div class="flex items-center mb-8 gap-4">
		<span class="text-xl size-14 bg-teal-50 rounded-full flex items-center justify-center"
			>🌿</span
		>
		<div>
			<div class="flex items-center gap-2">
				<h2 class="text-lg font-medium text-gray-800">
					{plant.name}
				</h2>
			</div>
			<div class="text-sm text-gray-600">
				{plant.scientificName}
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">Size</span>
			{#if !plant.size}
				<SkeletonText />
			{:else}
				<span class="text-gray-600">{plant.size}</span>
			{/if}
		</div>
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">Care</span>
			{#if !plant.care}
				<SkeletonText />
			{:else}
				<span class="text-gray-600">{plant.care}</span>
			{/if}
		</div>
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">Light</span>
			{#if !plant.lightRequirement}
				<SkeletonText />
			{:else}
				<span class="text-gray-600">{plant.lightRequirement}</span>
			{/if}
		</div>
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">CO2</span>
			{#if !plant.co2Requirement}
				<SkeletonText />
			{:else}
				<span class="text-gray-600">{plant.co2Requirement}</span>
			{/if}
		</div>
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">Placement</span>
			{#if !plant.placement}
				<SkeletonText />
			{:else}
				<span class="text-gray-600">{plant.placement}</span>
			{/if}
		</div>
	</div>

	<div class="mt-4">
		<span class="font-semibold text-gray-700 text-sm">Recommendation Reason</span>
		{#if !plant.recommendationReason}
			<SkeletonText />
		{:else}
			<div class="text-gray-600">{plant.recommendationReason}</div>
		{/if}
	</div>
</div>
