<script>
	import { Button } from '$lib/components/ui/button'
	import FishCard from '$lib/components/FishCard.svelte'
	import PlantCard from '$lib/components/PlantCard.svelte'

	// Mock data (in a real scenario, this would come from the API)
	const insights = {
		tankSize: '50 gallons',
		filtrationRate: '250 GPH',
		bioload: 'Medium',
		recommendedFishes: [
			{
				name: 'Neon Tetra',
				recommendation: {
					quantity: 5,
					reason: 'Colorful schooling fish that adds movement to the mid-level of the tank.',
				},
				size: '1-1.5 inches',
				temperament: 'Peaceful',
				environment: {
					temperature: '70-81°F',
					pH: '6.0-7.0',
					hardness: 'soft to moderately hard',
				},
				lifespan: '5 years',
				tankRequirements: {
					minSize: '10 gallons',
					region: 'Middle',
				},
				careLevel: 'Easy',
				coloration: 'Blue and red iridescent',
				activityLevel: 'Active swimmer',
			},
			{
				name: 'Corydoras Catfish',
				recommendation: {
					quantity: 3,
					reason: 'Bottom-dwelling scavengers that help keep the substrate clean.',
				},
				size: '2-2.5 inches',
				temperament: 'Peaceful',
				environment: {
					temperature: '72-78°F',
					pH: '6.0-7.5',
					hardness: 'soft to moderately hard',
				},
				lifespan: '5-10 years',
				tankRequirements: {
					minSize: '20 gallons',
					region: 'Bottom',
				},
				careLevel: 'Easy',
				coloration: 'Varies by species, often mottled patterns',
				activityLevel: 'Moderate',
			},
			{
				name: 'Angelfish',
				recommendation: {
					quantity: 1,
					reason: 'Centerpiece fish that adds vertical interest to the aquarium.',
				},
				size: '6 inches',
				temperament: 'Semi-aggressive',
				environment: {
					temperature: '76-82°F',
					pH: '6.5-7.5',
					hardness: 'soft to medium',
				},
				lifespan: '10-15 years',
				tankRequirements: {
					minSize: '30 gallons',
					region: 'All levels',
				},
				careLevel: 'Moderate',
				coloration: 'Various patterns and colors available',
				activityLevel: 'Moderate',
			},
			{
				name: 'German Blue Ram',
				recommendation: {
					quantity: 2,
					reason: 'Colorful dwarf cichlids that add personality to the lower levels of the tank.',
				},
				size: '2-3 inches',
				temperament: 'Peaceful',
				environment: {
					temperature: '78-85°F',
					pH: '6.0-7.5',
					hardness: 'soft to medium',
				},
				lifespan: '2-4 years',
				tankRequirements: {
					minSize: '20 gallons',
					region: 'Bottom to middle',
				},
				careLevel: 'Moderate',
				coloration: 'Blue body with red fins',
				activityLevel: 'Active',
			},
		],
		waterParameters: {
			pH: '6.8 - 7.2',
			temperature: '75°F - 80°F',
			hardness: 'Soft to Medium (4-12 dGH)',
		},
		plantRecommendations: [
			{
				name: 'Amazon Sword',
				size: 'Large',
				care: 'Easy',
				placement: 'Background',
				reason: 'Provides lush, broad leaves for a natural backdrop.',
				lightRequirement: 'Medium',
				co2Requirement: 'Low',
			},
			{
				name: 'Java Fern',
				size: 'Medium',
				care: 'Easy',
				placement: 'Mid-ground',
				reason: 'Hardy plant that can be attached to decorations or left floating.',
				lightRequirement: 'Low',
				co2Requirement: 'Low',
			},
			{
				name: 'Anubias',
				size: 'Small to Medium',
				care: 'Easy',
				placement: 'Foreground to Mid-ground',
				reason: 'Slow-growing, low-light plant perfect for attaching to driftwood or rocks.',
				lightRequirement: 'Low',
				co2Requirement: 'Low',
			},
		],
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
				<div class="border p-3 rounded">
					<p class="font-semibold text-teal-700 mb-3">Tank Size</p>
					<p>{insights.tankSize}</p>
				</div>
				<div class="border p-3 rounded">
					<p class="font-semibold text-teal-700 mb-3">Filtration Rate</p>
					<p>{insights.filtrationRate}</p>
				</div>
				<div class="border p-3 rounded">
					<p class="font-semibold text-teal-700 mb-3">Estimated Bioload</p>
					<p>{insights.bioload}</p>
				</div>
			</div>
		</div>

		<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
			<h2 class="text-xl font-medium text-teal-700 mb-4">Recommended Fish</h2>
			<div class="grid grid-cols-1 gap-4">
				{#each insights.recommendedFishes as fish}
					<FishCard {fish} />
				{/each}
			</div>
		</div>

		<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
			<h2 class="text-xl font-medium text-teal-700 mb-4">Water Parameters</h2>
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<div class="border p-3 rounded">
					<p class="font-semibold text-teal-700 mb-3">pH</p>
					<p>{insights.waterParameters.pH}</p>
				</div>
				<div class="border p-3 rounded">
					<p class="font-semibold text-teal-700 mb-3">Temperature</p>
					<p>{insights.waterParameters.temperature}</p>
				</div>
				<div class="border p-3 rounded">
					<p class="font-semibold text-teal-700 mb-3">Hardness</p>
					<p>{insights.waterParameters.hardness}</p>
				</div>
			</div>
		</div>

		<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
			<h2 class="text-xl font-medium text-teal-700 mb-4">Plant Recommendations</h2>
			<div class="grid grid-cols-1 gap-4">
				{#each insights.plantRecommendations as plant}
					<PlantCard {plant} />
				{/each}
			</div>
		</div>

		<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
			<h2 class="text-xl font-medium text-teal-700 mb-4">Maintenance</h2>
			<p>{insights.maintenanceSchedule}</p>
		</div>

		<div class="mb-6 p-6 bg-white rounded-lg border border-gray-200">
			<h2 class="text-xl font-medium text-teal-700 mb-4">Equipment Suggestions</h2>
			<div class="grid grid-cols-1 gap-2">
				{#each insights.equipmentSuggestions as equipment}
					<div class="border p-3 rounded flex items-center">
						<span class="text-gray-600 mr-2">🔧</span>
						<span>{equipment}</span>
					</div>
				{/each}
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
