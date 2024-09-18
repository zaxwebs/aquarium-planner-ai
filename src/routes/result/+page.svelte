<script>
	import { Button } from '$lib/components/ui/button'

	// Mock data (in a real scenario, this would come from the API)
	const insights = {
		tankSize: '50 gallons',
		filtrationRate: '250 GPH',
		bioload: 'Medium',
		recommendedFishes: [
			'5 Neon Tetras',
			'3 Corydoras Catfish',
			'1 Angelfish',
			'2 German Blue Rams',
		],
		waterParameters: {
			pH: '6.8 - 7.2',
			temperature: '75°F - 80°F',
			hardness: 'Soft to Medium (4-12 dGH)',
		},
		plantRecommendations: ['Amazon Sword', 'Java Fern', 'Anubias'],
		maintenanceSchedule: 'Weekly 25% water changes',
		equipmentSuggestions: [
			'Canister filter (rated for 50-100 gallons)',
			'200W heater',
			'LED lighting system (6500K, 30-40 watts)',
		],
	}
</script>

<svelte:head>
	<title>AquaPlanner Results</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-3xl mx-auto">
		<h1 class="text-5xl text-center text-teal-800 mb-8 font-serif italic">
			Your Aquarium Plan
		</h1>

		<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
			<h2 class="text-xl font-medium text-teal-700 mb-4">Tank Overview</h2>
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<div class="bg-teal-50 p-3 rounded border border-teal-100">
					<p class="font-semibold text-teal-700 mb-3">Tank Size</p>
					<p>{insights.tankSize}</p>
				</div>
				<div class="bg-teal-50 p-3 rounded border border-teal-100">
					<p class="font-semibold text-teal-700 mb-3">Filtration Rate</p>
					<p>{insights.filtrationRate}</p>
				</div>
				<div class="bg-teal-50 p-3 rounded border border-teal-100">
					<p class="font-semibold text-teal-700 mb-3">Estimated Bioload</p>
					<p>{insights.bioload}</p>
				</div>
			</div>
		</div>

		<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
			<h2 class="text-xl font-medium text-teal-700 mb-4">Recommended Fish</h2>
			<ul class="list-disc pl-5">
				{#each insights.recommendedFishes as fish}
					<li>{fish}</li>
				{/each}
			</ul>
		</div>

		<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
			<h2 class="text-xl font-medium text-teal-700 mb-4">Water Parameters</h2>
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<div class="bg-teal-50 p-3 rounded border border-teal-100">
					<p class="font-semibold text-teal-700 mb-3">pH</p>
					<p>{insights.waterParameters.pH}</p>
				</div>
				<div class="bg-teal-50 p-3 rounded border border-teal-100">
					<p class="font-semibold text-teal-700 mb-3">Temperature</p>
					<p>{insights.waterParameters.temperature}</p>
				</div>
				<div class="bg-teal-50 p-3 rounded border border-teal-100">
					<p class="font-semibold text-teal-700 mb-3">Hardness</p>
					<p>{insights.waterParameters.hardness}</p>
				</div>
			</div>
		</div>

		<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
			<h2 class="text-xl font-medium text-teal-700 mb-4">Plant Recommendations</h2>
			<ul class="list-disc pl-5">
				{#each insights.plantRecommendations as plant}
					<li>{plant}</li>
				{/each}
			</ul>
		</div>

		<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
			<h2 class="text-xl font-medium text-teal-700 mb-4">Maintenance</h2>
			<p>{insights.maintenanceSchedule}</p>
		</div>

		<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
			<h2 class="text-xl font-medium text-teal-700 mb-4">Equipment Suggestions</h2>
			<ul class="list-disc pl-5">
				{#each insights.equipmentSuggestions as equipment}
					<li>{equipment}</li>
				{/each}
			</ul>
		</div>

		<div class="flex justify-center mt-8">
			<Button href="/" variant="outline" class="mr-4">Start Over</Button>
			<button
				type="button"
				class="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				on:click={() => window.print()}
			>
				Print Plan
			</button>
		</div>
	</div>
</div>
