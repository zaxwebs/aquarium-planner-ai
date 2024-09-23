<script>
	import SkeletonText from '$lib/components/SkeletonText.svelte'
	import PHScale from '$lib/components/PHScale.svelte'
	export let fish
</script>

<div class="border border-gray-200 p-6 rounded-lg">
	<div class="flex items-center mb-8 gap-4">
		<span
			class="text-teal-600 text-xl size-14 bg-sky-50 rounded-full flex items-center justify-center"
			>🐟</span
		>
		<div>
			<div class="flex items-center gap-2">
				<h2 class="text-lg font-medium text-gray-800">
					{fish.name}
				</h2>
				<div class="text-teal-600">x{fish.quantity}</div>
			</div>
			<div class="text-sm text-gray-600">
				{fish.scientificName}
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">Size</span>
			{#if !fish.size}
				<SkeletonText />
			{:else}
				<span class="text-gray-600">{fish.size}</span>
			{/if}
		</div>
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">Temperament</span>
			{#if !fish.temperament}
				<SkeletonText />
			{:else}
				<span class="text-gray-600">{fish.temperament}</span>
			{/if}
		</div>
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">Care Level</span>
			{#if !fish.careLevel}
				<SkeletonText />
			{:else}
				<span class="text-gray-600">{fish.careLevel}</span>
			{/if}
		</div>
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">Lifespan</span>
			{#if !fish.lifespan}
				<SkeletonText />
			{:else}
				<span class="text-gray-600">{fish.lifespan}</span>
			{/if}
		</div>
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">Coloration</span>
			{#if !fish.coloration}
				<SkeletonText />
			{:else}
				<span class="text-gray-600">{fish.coloration}</span>
			{/if}
		</div>
	</div>

	<div class="mt-4">
		<span class="font-semibold text-gray-700 text-sm">Environment</span>
		<ul class="text-gray-600 mt-1 list-disc list-inside">
			{#if fish.environment?.temperature}
				<li>
					Temperature: {fish.environment.temperature.min}°F - {fish.environment
						.temperature.max}°F
				</li>
			{/if}
			{#if fish.environment?.pH}
				<li>
					<div>
						pH: {fish.environment.pH.min.toFixed(1)} - {fish.environment.pH.max.toFixed(
							1
						)}
					</div>
					<PHScale pH={fish.environment.pH} />
				</li>
			{/if}
			<li>Hardness: {fish.environment?.hardness}</li>
			<li>Minimum Tank Size: {fish.minGallons} gallons</li>
			<li>Tank Region: {fish.tankRegion}</li>
		</ul>
	</div>

	<div class="mt-4">
		<span class="font-semibold text-gray-700 text-sm">Recommendation Reason</span>
		<p class="text-gray-600 mt-1">
			{fish.recommendationReason}
		</p>
	</div>
</div>
