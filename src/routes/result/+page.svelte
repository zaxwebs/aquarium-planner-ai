<script>
	import GradientText from './../../lib/components/GradientText.svelte'
	import SectionHeader from './../../lib/components/SectionHeader.svelte'
	import { Button } from '$lib/components/ui/button'
	import * as Dialog from '$lib/components/ui/dialog'
	import FishCard from '$lib/components/FishCard.svelte'
	import PlantCard from '$lib/components/PlantCard.svelte'
	import PHDialog from '$lib/components/PHDialog.svelte'
	import { findOption } from '$lib/utils/helpers.js'
	import units from '$lib/data/units.js'

	// Mock data (in a real scenario, this would come from the API)
	import demoData from '$lib/data/demo'
	import GridUnderlay from '$lib/components/GridUnderlay.svelte'
	import { base } from '$app/paths'

	export let data

	const baseData = data.base

	$: console.log(baseData)

	let volumeUnit = findOption(baseData.volumeUnit, units.volume).label
	let filtrationRateUnit = findOption(baseData.filtrationRateUnit, units.water_flow).label
</script>

<svelte:head>
	<title>AquaPlanner Results</title>
</svelte:head>

<div class="max-w-2xl mx-auto">
	<div class="text-center flex flex-col items-center mb-12">
		<h1 class="text-5xl text-center text-teal-800 mb-4 font-serif italic">
			<GradientText>Your Aquarium Plan</GradientText>
		</h1>
		<p class="max-w-lg text-slate-600">
			We've crafted a tailored plan for your aquatic ecosystem based on your preferences.
			Explore the details below.
		</p>
	</div>

	<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
		<h2 class="text-xl font-medium text-teal-800 mb-4">Tank Overview</h2>
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
			<div class="border p-4 rounded">
				<p class="font-semibold text-teal-800 mb-3">Tank Size</p>
				<div>{baseData.volume} {volumeUnit}</div>
			</div>
			<div class="border p-4 rounded">
				<p class="font-semibold text-teal-800 mb-3">Filtration Rate</p>
				<p>{baseData.filtrationRate} {filtrationRateUnit}</p>
			</div>
			<div class="border p-4 rounded">
				<p class="font-semibold text-teal-800 mb-3">Type</p>
				<p class="capitalize">{baseData.waterType}</p>
			</div>
		</div>
	</div>

	<div class="border rounded-lg overflow-hidden mb-6">
		<SectionHeader>
			<div>
				<h2 class="text-xl font-medium text-teal-800 mb-2">Recommended Fish</h2>
				<p class="text-sm text-teal-900">These fish are recommended for your tank.</p>
			</div>
			<img
				class="max-w-24 md:max-w-32 max-h-24 md:max-h-32 object-cover"
				src="/images/green-fish.png"
				alt="Fish"
			/>
		</SectionHeader>
		<div class="p-6 bg-white">
			<div class="grid grid-cols-1 gap-4">
				{#each demoData.recommendedFishes as fish}
					<FishCard {fish} />
				{/each}
			</div>
		</div>
	</div>

	<div class="border rounded-lg overflow-hidden mb-6">
		<SectionHeader>
			<div>
				<h2 class="text-xl font-medium text-teal-800 mb-2">Plant Recommendations</h2>
				<p class="text-sm text-teal-900">These plants are recommended for your tank.</p>
			</div>
			<img
				class="max-w-24 md:max-w-32 max-h-24 md:max-h-32 object-cover"
				src="/images/plant.png"
				alt="Plant"
			/>
		</SectionHeader>
		<div class="p-6 bg-white">
			<div class="grid grid-cols-1 gap-4">
				{#each demoData.plantRecommendations as plant}
					<PlantCard {plant} />
				{/each}
			</div>
		</div>
	</div>

	<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
		<h2 class="text-xl font-medium text-teal-800 mb-4">Water Parameters</h2>
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
			<div class="border p-4 rounded">
				<div class="flex justify-between items-center mb-3">
					<p class="font-semibold text-teal-800 flex-1">pH</p>
					<PHDialog />
				</div>
				<p>{demoData.waterParameters.pH}</p>
			</div>
			<div class="border p-4 rounded">
				<p class="font-semibold text-teal-800 mb-3">Temperature</p>
				<p>{demoData.waterParameters.temperature}</p>
			</div>
			<div class="border p-4 rounded">
				<p class="font-semibold text-teal-800 mb-3">Hardness</p>
				<p>{demoData.waterParameters.hardness}</p>
			</div>
		</div>
	</div>

	<div class="border rounded-lg overflow-hidden mb-6">
		<SectionHeader>
			<div>
				<h2 class="text-xl font-medium text-teal-800 mb-2">Equipment Suggestions</h2>
				<p class="text-sm text-teal-900">
					These items are recommended for your tank setup.
				</p>
			</div>
			<img
				class="max-w-24 md:max-w-32 max-h-24 md:max-h-32 object-cover"
				src="/images/gas-tank.png"
				alt="Equipment"
			/>
		</SectionHeader>
		<div class="p-6 bg-white">
			<div class="grid grid-cols-1 xl:grid-cols-2 gap-2">
				{#each demoData.equipmentSuggestions as equipment}
					<div class="border p-4 rounded flex items-center gap-4">
						<span
							class="text-xl size-10 bg-gray-50 rounded-full flex items-center justify-center"
							>📦</span
						>
						<span>{equipment}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="border rounded-lg overflow-hidden mb-6">
		<SectionHeader>
			<div>
				<h2 class="text-xl font-medium text-teal-800 mb-2">Maintenance Schedule</h2>
				<p class="text-sm text-teal-900">
					Recommended maintenance tasks for your aquarium.
				</p>
			</div>
			<img
				class="max-w-24 max-h-24 md:max-h-32 object-cover"
				src="/images/water-container.png"
				alt="Maintenance"
			/>
		</SectionHeader>
		<div class="p-6 bg-white">
			<div class="mt-4">
				<span class="font-semibold text-gray-700 text-sm">Weekly</span>
				<ul class="text-gray-600 mt-1 list-disc list-inside">
					<li>Water Change: Replace 10-15% of the water to maintain water quality.</li>
					<li>
						Filter Check: Inspect the filter for proper operation and clean if
						necessary.
					</li>
					<li>
						Algae Removal: Wipe algae off the tank walls and check plants for algae
						growth.
					</li>
				</ul>
			</div>
			<div class="mt-4">
				<span class="font-semibold text-gray-700 text-sm">Bi-weekly</span>
				<ul class="text-gray-600 mt-1 list-disc list-inside">
					<li>
						Test Water Parameters: Test and adjust pH, ammonia, nitrite, and nitrate
						levels.
					</li>
					<li>
						Clean Substrate: Use a gravel vacuum to remove debris from the substrate.
					</li>
				</ul>
			</div>
			<div class="mt-4">
				<span class="font-semibold text-gray-700 text-sm">Monthly</span>
				<ul class="text-gray-600 mt-1 list-disc list-inside">
					<li>
						Filter Cleaning: Thoroughly clean the filter media and replace if needed.
					</li>
					<li>
						Inspect Equipment: Check all equipment (heater, filter, lighting) for proper
						function.
					</li>
					<li>Trim Plants: Prune and remove dead plant material.</li>
				</ul>
			</div>
			<div class="mt-4">
				<span class="font-semibold text-gray-700 text-sm">Quarterly</span>
				<ul class="text-gray-600 mt-1 list-disc list-inside">
					<li>
						Deep Clean: Empty the tank partially, clean all decorations, and scrub the
						tank thoroughly.
					</li>
					<li>
						Equipment Maintenance: Perform a detailed check and maintenance of the
						heater and filter.
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="mb-6 p-6 bg-white rounded-lg border relative overflow-hidden">
		<GridUnderlay />
		<div class="flex items-center justify-between gap-8 relative z-10">
			<img
				class="max-w-24 md:max-w-32 max-h-24 md:max-h-32 object-cover"
				src="/images/albert.png"
				alt="Scientist"
			/>
			<div>
				Every aquarium is one-of-a-kind, so think of this plan as a helpful starting point.
				You might need to tweak and experiment a bit to find what works perfectly for your
				setup.
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
