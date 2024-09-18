<script>
	import { Button } from '$lib/components/ui/button'
	import * as Dialog from '$lib/components/ui/dialog'
	import FishCard from '$lib/components/FishCard.svelte'
	import PlantCard from '$lib/components/PlantCard.svelte'
	import PHDialog from '$lib/components/PHDialog.svelte'

	// Mock data (in a real scenario, this would come from the API)
	import demoData from '$lib/data/mock'
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
				<div class="border p-3 rounded">
					<p class="font-semibold text-teal-700 mb-3">Tank Size</p>
					<p>{demoData.tankSize}</p>
				</div>
				<div class="border p-3 rounded">
					<p class="font-semibold text-teal-700 mb-3">Filtration Rate</p>
					<p>{demoData.filtrationRate}</p>
				</div>
				<div class="border p-3 rounded">
					<p class="font-semibold text-teal-700 mb-3">Estimated Bioload</p>
					<p>{demoData.bioload}</p>
				</div>
			</div>
		</div>

		<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
			<h2 class="text-xl font-medium text-teal-700 mb-4">Water Parameters</h2>
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<div class="border p-3 rounded">
					<div class="flex justify-between items-center mb-3">
						<p class="font-semibold text-teal-700 flex-1">pH</p>
						<PHDialog />
					</div>
					<p>{demoData.waterParameters.pH}</p>
				</div>
				<div class="border p-3 rounded">
					<p class="font-semibold text-teal-700 mb-3">Temperature</p>
					<p>{demoData.waterParameters.temperature}</p>
				</div>
				<div class="border p-3 rounded">
					<p class="font-semibold text-teal-700 mb-3">Hardness</p>
					<p>{demoData.waterParameters.hardness}</p>
				</div>
			</div>
		</div>

		<div class="border rounded-lg overflow-hidden mb-6">
			<div class="flex items-center justify-between p-6 bg-teal-50 border-b">
				<div>
					<h2 class="text-xl font-medium text-teal-700 mb-2">Recommended Fish</h2>
					<p class="text-sm text-teal-900">These fish are recommended for your tank.</p>
				</div>
				<img
					class="max-w-24 md:max-w-32 max-h-24 md:max-h-32 object-cover"
					src="/images/green-fish.png"
					alt="Fish"
				/>
			</div>
			<div class="p-6 bg-white">
				<div class="grid grid-cols-1 gap-4">
					{#each demoData.recommendedFishes as fish}
						<FishCard {fish} />
					{/each}
				</div>
			</div>
		</div>

		<div class="border rounded-lg overflow-hidden mb-6">
			<div class="flex items-center justify-between p-6 bg-teal-50 border-b">
				<div>
					<h2 class="text-xl font-medium text-teal-700 mb-2">Plant Recommendations</h2>
					<p class="text-sm text-teal-900">These plants are recommended for your tank.</p>
				</div>
				<img
					class="max-w-24 md:max-w-32 max-h-24 md:max-h-32 object-cover"
					src="/images/plant.png"
					alt="Plant"
				/>
			</div>
			<div class="p-6 bg-white">
				<div class="grid grid-cols-1 gap-4">
					{#each demoData.plantRecommendations as plant}
						<PlantCard {plant} />
					{/each}
				</div>
			</div>
		</div>

		<div class="border rounded-lg overflow-hidden mb-6">
			<div class="flex items-center justify-between p-6 bg-teal-50 border-b">
				<div>
					<h2 class="text-xl font-medium text-teal-700 mb-2">Equipment Suggestions</h2>
					<p class="text-sm text-teal-900">
						These items are recommended for your tank setup.
					</p>
				</div>
				<img
					class="max-w-24 md:max-w-32 max-h-24 md:max-h-32 object-cover"
					src="/images/gas-tank.png"
					alt="Equipment"
				/>
			</div>
			<div class="p-6 bg-white">
				<div class="grid grid-cols-1 gap-2">
					{#each demoData.equipmentSuggestions as equipment}
						<div class="border p-3 rounded flex items-center">
							<span class="text-gray-600 mr-2">🔧</span>
							<span>{equipment}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
			<h2 class="text-xl font-medium text-teal-700 mb-4">Maintenance</h2>
			<p>{demoData.maintenanceSchedule}</p>
		</div>

		<div class="mb-6 p-6 bg-white rounded-lg border">
			<div class="flex items-center justify-between gap-8">
				<img
					class="max-w-24 md:max-w-32 max-h-24 md:max-h-32 object-cover"
					src="/images/albert.png"
					alt="Scientist"
				/>
				<div>
					Every aquarium is one-of-a-kind, so think of this plan as a helpful starting
					point. You might need to tweak and experiment a bit to find what works perfectly
					for your setup.
				</div>
			</div>
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
