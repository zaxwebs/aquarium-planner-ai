<script>
	export let fish
</script>

<div class="border border-gray-200 p-6 rounded-lg">
	<div class="flex items-center mb-4">
		<span class="text-teal-600 text-xl mr-3">🐟</span>
		<h2 class="text-lg font-medium text-gray-800 mr-3">
			{fish.name}
		</h2>
		<div>x{fish.recommendation.quantity}</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">Size</span>
			<span class="text-gray-600">{fish.size}</span>
		</div>
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">Temperament</span>
			<span class="text-gray-600">{fish.temperament}</span>
		</div>
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">Care Level</span>
			<span class="text-gray-600">{fish.careLevel}</span>
		</div>
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">Lifespan</span>
			<span class="text-gray-600">{fish.lifespan}</span>
		</div>
		<div class="flex flex-col">
			<span class="font-semibold text-gray-700 text-sm">Coloration</span>
			<span class="text-gray-600">{fish.coloration}</span>
		</div>
	</div>

	<div class="mt-4">
		<span class="font-semibold text-gray-700 text-sm">Environment</span>
		<ul class="text-gray-600 mt-1 list-disc list-inside">
			<li>Temperature: {fish.environment.temperature}</li>
			<li>pH: {fish.environment.pH}</li>
			<li>Hardness: {fish.environment.hardness}</li>
		</ul>
	</div>

	<div class="mt-4">
		<span class="font-semibold text-gray-700 text-sm">Tank Requirements</span>
		<ul class="text-gray-600 mt-1 list-disc list-inside">
			<li>Minimum Size: {fish.tankRequirements.minSize}</li>
			<li>Region: {fish.tankRequirements.region}</li>
		</ul>
	</div>

	<div class="mt-4">
		<span class="font-semibold text-gray-700 text-sm">Recommendation Reason</span>
		<p class="text-gray-600 mt-1">
			{fish.recommendation.reason}
		</p>
	</div>
</div>
