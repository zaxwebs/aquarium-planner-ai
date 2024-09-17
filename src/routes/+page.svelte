<script>
	import { Input } from '$lib/components/ui/input'
	import * as Select from '$lib/components/ui/select'
	import { Label } from '$lib/components/ui/label'

	import units from '$lib/data/units.js'

	let length = ''
	let width = ''
	let height = ''
	let shape = ''
	let waterType = ''
	let fishBehavior = ''
	let fishSize = ''
	let experienceLevel = ''
	let bioloadLevel = ''
	let waterSource = ''
	let targetPh = '6.8'
	let waterHardness = ''
	let filterType = ''
	let lightingType = ''
	let aquariumHeater = false
	let waterPump = false
	let maintenanceFrequency = ''
	let waterChange = ''
	let livePlants = false
	let plantType = ''
	let substrateType = ''
	let country = ''
	let region = ''
	let budget = ''

	const shapes = [
		{ value: 'rectangle', label: 'Rectangle' },
		{ value: 'cube', label: 'Cube' },
		{ value: 'cylinder', label: 'Cylinder' },
	]

	const waterTypes = [
		{ value: 'freshwater', label: 'Freshwater' },
		{ value: 'saltwater', label: 'Saltwater' },
		{ value: 'any', label: 'Any' },
	]

	const fishBehaviors = [
		{ value: 'peaceful', label: 'Peaceful' },
		{ value: 'semiAggressive', label: 'Semi-Aggressive' },
		{ value: 'aggressive', label: 'Aggressive' },
		{ value: 'any', label: 'Any' },
	]

	const fishSizes = [
		{ value: 'small', label: 'Small' },
		{ value: 'medium', label: 'Medium' },
		{ value: 'large', label: 'Large' },
		{ value: 'any', label: 'Any' },
	]

	const experienceLevels = [
		{ value: 'beginner', label: 'Beginner' },
		{ value: 'intermediate', label: 'Intermediate' },
		{ value: 'expert', label: 'Expert' },
		{ value: 'any', label: 'Any' },
	]

	const waterSources = [
		{ value: 'tap', label: 'Tap' },
		{ value: 'ro', label: 'RO' },
		{ value: 'distilled', label: 'Distilled' },
		{ value: 'wellWater', label: 'Well Water' },
	]

	const hardnessLevels = [
		{ value: 'soft', label: 'Soft' },
		{ value: 'medium', label: 'Medium' },
		{ value: 'hard', label: 'Hard' },
	]

	const filterTypes = [
		{ value: 'canister', label: 'Canister' },
		{ value: 'hangOnBack', label: 'Hang-on-Back' },
		{ value: 'sponge', label: 'Sponge' },
		{ value: 'internal', label: 'Internal' },
	]

	const lightingTypes = [
		{ value: 'led', label: 'LED' },
		{ value: 'fluorescent', label: 'Fluorescent' },
		{ value: 't5', label: 'T5' },
	]

	const maintenanceFrequencies = [
		{ value: 'low', label: 'Low' },
		{ value: 'medium', label: 'Medium' },
		{ value: 'high', label: 'High' },
	]

	const waterChangeOptions = [
		{ value: 'manual', label: 'Manual' },
		{ value: 'automatic', label: 'Automatic' },
	]

	const plantTypes = [
		{ value: 'lowLight', label: 'Low-light' },
		{ value: 'mediumLight', label: 'Medium-light' },
		{ value: 'highLight', label: 'High-light' },
	]

	const substrateTypes = [
		{ value: 'gravel', label: 'Gravel' },
		{ value: 'sand', label: 'Sand' },
		{ value: 'aquasoil', label: 'Aquasoil' },
	]

	const budgets = [
		{ value: 'low', label: 'Low' },
		{ value: 'medium', label: 'Medium' },
		{ value: 'high', label: 'High' },
	]
</script>

<svelte:head>
	<title>AquaPlanner</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-2xl mx-auto">
		<h1 class="text-3xl font-bold text-center text-teal-800 mb-8">Aquarium Planner AI</h1>
		<p class="mb-12">
			Whether you're just getting started or already a fish-keeping pro, AquaPlanner makes it
			easy to create the perfect tank for your aquatic buddies.
		</p>
		<form method="post" action="/result">
			<!-- Tank Dimensions Fieldset -->
			<fieldset class="border border-gray-300 p-4 rounded-md mb-6 bg-white">
				<legend class="text-lg font-semibold text-teal-700 px-2">Tank Dimensions</legend>
				<div class="mb-4">
					<label for="shape" class="block text-sm font-medium text-gray-700 mb-2"
						>Shape</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Shape" />
						</Select.Trigger>
						<Select.Content>
							{#each shapes as shape}
								<Select.Item value={shape.value}>{shape.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="mb-4">
					<label for="shape" class="block text-sm font-medium text-gray-700 mb-2"
						>Unit</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Unit" />
						</Select.Trigger>
						<Select.Content>
							{#each units.length as unit}
								<Select.Item value={unit.symbol}>{unit.name}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="mb-4">
					<label for="length" class="block text-sm font-medium text-gray-700 mb-2"
						>Length</label
					>
					<Input
						type="number"
						id="length"
						bind:value={length}
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
					/>
				</div>
				<div class="mb-4">
					<label for="width" class="block text-sm font-medium text-gray-700 mb-2"
						>Width</label
					>
					<Input
						type="number"
						id="width"
						bind:value={width}
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
					/>
				</div>
				<div class="mb-4">
					<label for="height" class="block text-sm font-medium text-gray-700 mb-2"
						>Height</label
					>
					<Input
						type="number"
						id="height"
						bind:value={height}
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
					/>
				</div>
			</fieldset>

			<!-- Livestock Preferences Fieldset -->
			<fieldset class="border border-gray-300 p-4 rounded-md mb-6 bg-white">
				<legend class="text-lg font-semibold text-teal-700 px-2"
					>Livestock Preferences</legend
				>
				<div class="mb-4">
					<label for="fish-behavior" class="block text-sm font-medium text-gray-700 mb-2"
						>Fish Behavior</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Fish Behavior" />
						</Select.Trigger>
						<Select.Content>
							{#each fishBehaviors as fishBehavior}
								<Select.Item value={fishBehavior.value}
									>{fishBehavior.label}</Select.Item
								>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="mb-4">
					<label for="fish-size" class="block text-sm font-medium text-gray-700 mb-2"
						>Fish Size</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Fish Size" />
						</Select.Trigger>
						<Select.Content>
							{#each fishSizes as fishSize}
								<Select.Item value={fishSize.value}>{fishSize.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="mb-4">
					<label
						for="experience-level"
						class="block text-sm font-medium text-gray-700 mb-2">Experience Level</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Experience Level" />
						</Select.Trigger>
						<Select.Content>
							{#each experienceLevels as level}
								<Select.Item value={level.value}>{level.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
			</fieldset>

			<!-- Water Chemistry Fieldset -->
			<fieldset class="border border-gray-300 p-4 rounded-md mb-6 bg-white">
				<legend class="text-lg font-semibold text-teal-700 px-2">Water Chemistry</legend>
				<div class="mb-4">
					<label for="water-type" class="block text-sm font-medium text-gray-700 mb-2"
						>Water Type</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Water Type" />
						</Select.Trigger>
						<Select.Content>
							{#each waterTypes as waterType}
								<Select.Item value={waterType.value}>{waterType.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="mb-4">
					<label for="water-source" class="block text-sm font-medium text-gray-700 mb-2"
						>Water Source</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Water Source" />
						</Select.Trigger>
						<Select.Content>
							{#each waterSources as source}
								<Select.Item value={source.value}>{source.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="mb-4">
					<label for="target-ph" class="block text-sm font-medium text-gray-700 mb-2"
						>Target pH</label
					>
					<Input
						type="number"
						step="0.01"
						id="target-ph"
						bind:value={targetPh}
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
					/>
				</div>
				<div class="mb-4">
					<label for="water-hardness" class="block text-sm font-medium text-gray-700 mb-2"
						>Hardness</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Hardness Level" />
						</Select.Trigger>
						<Select.Content>
							{#each hardnessLevels as level}
								<Select.Item value={level.value}>{level.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
			</fieldset>

			<!-- Equipment Preferences Fieldset -->
			<fieldset class="border border-gray-300 p-4 rounded-md mb-6 bg-white">
				<legend class="text-lg font-semibold text-teal-700 px-2"
					>Equipment Preferences</legend
				>
				<div class="mb-4">
					<label for="filter-type" class="block text-sm font-medium text-gray-700 mb-2"
						>Filter Type</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Filter Type" />
						</Select.Trigger>
						<Select.Content>
							{#each filterTypes as type}
								<Select.Item value={type.value}>{type.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="mb-4">
					<label for="lighting-type" class="block text-sm font-medium text-gray-700 mb-2"
						>Lighting Type</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Lighting Type" />
						</Select.Trigger>
						<Select.Content>
							{#each lightingTypes as type}
								<Select.Item value={type.value}>{type.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="flex items-center mb-4">
					<div class="flex items-center space-x-2">
						<Input
							type="checkbox"
							id="aquarium-heater"
							bind:checked={aquariumHeater}
							class="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
						/>
						<Label
							id="aquarium-heater-label"
							for="aquarium-heater"
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Aquarium Heater
						</Label>
					</div>
				</div>
				<div class="flex items-center mb-4">
					<div class="flex items-center space-x-2">
						<Input
							type="checkbox"
							id="water-pump"
							bind:checked={waterPump}
							class="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
						/>
						<Label
							id="water-pump-label"
							for="water-pump"
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Water Pump
						</Label>
					</div>
				</div>
			</fieldset>

			<!-- Maintenance Preferences Fieldset -->
			<fieldset class="border border-gray-300 p-4 rounded-md mb-6 bg-white">
				<legend class="text-lg font-semibold text-teal-700 px-2"
					>Maintenance Preferences</legend
				>
				<div class="mb-4">
					<label
						for="maintenance-frequency"
						class="block text-sm font-medium text-gray-700 mb-2"
						>Maintenance Frequency</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Maintenance Frequency" />
						</Select.Trigger>
						<Select.Content>
							{#each maintenanceFrequencies as frequency}
								<Select.Item value={frequency.value}>{frequency.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="mb-4">
					<label for="water-change" class="block text-sm font-medium text-gray-700 mb-2"
						>Water Change Preferences</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Water Change Option" />
						</Select.Trigger>
						<Select.Content>
							{#each waterChangeOptions as option}
								<Select.Item value={option.value}>{option.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
			</fieldset>

			<!-- Aquascaping Preferences Fieldset -->
			<fieldset class="border border-gray-300 p-4 rounded-md mb-6 bg-white">
				<legend class="text-lg font-semibold text-teal-700 px-2"
					>Aquascaping Preferences</legend
				>
				<div class="flex items-center mb-4">
					<div class="flex items-center space-x-2">
						<Input
							type="checkbox"
							id="live-plants"
							bind:checked={livePlants}
							class="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
						/>
						<Label
							id="live-plants-label"
							for="live-plants"
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Live Plants
						</Label>
					</div>
				</div>
				<div class="mb-4">
					<label for="plant-type" class="block text-sm font-medium text-gray-700 mb-2"
						>Plant Type</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Plant Type" />
						</Select.Trigger>
						<Select.Content>
							{#each plantTypes as type}
								<Select.Item value={type.value}>{type.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="mb-4">
					<label for="substrate-type" class="block text-sm font-medium text-gray-700 mb-2"
						>Substrate Type</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Substrate Type" />
						</Select.Trigger>
						<Select.Content>
							{#each substrateTypes as type}
								<Select.Item value={type.value}>{type.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
			</fieldset>

			<!-- Location & Budget Fieldset -->
			<fieldset class="border border-gray-300 p-4 rounded-md mb-6 bg-white">
				<legend class="text-lg font-semibold text-teal-700 px-2">Location & Budget</legend>
				<div class="mb-4">
					<label for="country" class="block text-sm font-medium text-gray-700 mb-2"
						>Country</label
					>
					<Input
						type="text"
						id="country"
						bind:value={country}
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
					/>
				</div>
				<div class="mb-4">
					<label for="region" class="block text-sm font-medium text-gray-700 mb-2"
						>Region/State</label
					>
					<Input
						type="text"
						id="region"
						bind:value={region}
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
					/>
				</div>
				<div class="mb-4">
					<label for="budget" class="block text-sm font-medium text-gray-700 mb-2"
						>Budget</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Budget" />
						</Select.Trigger>
						<Select.Content>
							{#each budgets as budget}
								<Select.Item value={budget.value}>{budget.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
			</fieldset>

			<div class="flex items-center justify-center">
				<button
					type="submit"
					class="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Plan My Aquarium
				</button>
			</div>
		</form>
	</div>
</div>
