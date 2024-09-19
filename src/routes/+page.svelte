<script>
	import { Input } from '$lib/components/ui/input'
	import * as Select from '$lib/components/ui/select'
	import * as Tabs from '$lib/components/ui/tabs'
	import { Label } from '$lib/components/ui/label'

	import units from '$lib/data/units.js'
	import { findOption } from '$lib/utils/helpers.js'
	import {
		waterTypes,
		fishBehaviors,
		fishSizes,
		careLevels,
		waterSources,
		hardnessLevels,
		filterTypes,
		lightingTypes,
		maintenanceFrequencies,
		waterChangeOptions,
		plantTypes,
		substrateTypes,
		budgets,
	} from '$lib/data/general.js'

	let length = ''
	let width = ''
	let height = ''
	let calculatedVolume = ''

	let selectedCalculatedVolumeUnit = findOption('gal', units.volume)
	$: {
		console.log(selectedCalculatedVolumeUnit)
	}

	let targetPh = '6.8'

	let aquariumHeater = false
	let livePlants = false
	let waterPump = false

	$: {
		if (length && width && height) {
			const l = parseFloat(length)
			const w = parseFloat(width)
			const h = parseFloat(height)
			if (!isNaN(l) && !isNaN(w) && !isNaN(h)) {
				calculatedVolume = (l * w * h).toFixed(2)
			} else {
				calculatedVolume = ''
			}
		} else {
			calculatedVolume = ''
		}
	}
</script>

<svelte:head>
	<title>AquaPlanner</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-2xl mx-auto">
		<div class="flex flex-col md:flex-row items-center justify-center mb-8 gap-4 md:gap-6">
			<img
				class="max-w-24 md:max-w-32 max-h-24 md:max-h-32 object-cover"
				src="/images/green-fish.png"
				alt="Fish"
			/>
			<h1 class="text-5xl text-center text-teal-800 font-serif italic">
				Aquarium Planner AI
			</h1>
		</div>

		<p class="mb-12">
			Whether you're just getting started or already a fish-keeping pro, AquaPlanner makes it
			easy to plan a great tank setup and the right aquatic buddies.
		</p>
		<form method="post" action="/result">
			<!-- Tank Dimensions Fieldset -->
			<fieldset class="border border-gray-200 p-4 rounded-md mb-6 bg-white md:p-6">
				<legend class="text-lg font-semibold text-teal-700 px-2">Tank Details</legend>
				<Tabs.Root class="mb-4" value="volume">
					<Tabs.List class="grid w-full grid-cols-2">
						<Tabs.Trigger value="volume">Volume</Tabs.Trigger>
						<Tabs.Trigger value="dimensions">Dimensions</Tabs.Trigger>
					</Tabs.List>
					<Tabs.Content value="dimensions">
						<div class="mb-4">
							<label
								for="dimension-unit"
								class="block text-sm font-medium text-gray-700 mb-2">Unit</label
							>
							<Select.Root>
								<Select.Trigger>
									<Select.Value placeholder="Unit" />
								</Select.Trigger>
								<Select.Content>
									{#each units.length as unit}
										<Select.Item value={unit.value}>{unit.label}</Select.Item>
									{/each}
								</Select.Content>
								<Select.Input name="dimension-unit" id="dimension-unit" />
							</Select.Root>
						</div>
						<div class="mb-4">
							<label for="length" class="block text-sm font-medium text-gray-700 mb-2"
								>Length</label
							>
							<Input
								type="number"
								id="length"
								name="length"
								step="any"
								bind:value={length}
								class="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
							/>
						</div>
						<div class="mb-4">
							<label for="width" class="block text-sm font-medium text-gray-700 mb-2"
								>Width</label
							>
							<Input
								type="number"
								id="width"
								name="width"
								step="any"
								bind:value={width}
								class="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
							/>
						</div>
						<div class="mb-4">
							<label for="height" class="block text-sm font-medium text-gray-700 mb-2"
								>Height</label
							>
							<Input
								type="number"
								id="height"
								name="height"
								step="any"
								bind:value={height}
								class="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
							/>
						</div>
						{#if true}
							<div
								class="mb-4 border p-6 rounded grid grid-cols-2 gap-4 items-center"
							>
								<div class="flex gap-4">
									<div class="font-semibold text-teal-700">Calculated Volume</div>
									<div>{calculatedVolume}</div>
								</div>

								<div>
									<Select.Root
										selected={selectedCalculatedVolumeUnit}
										onSelectedChange={(v) => (selectedCalculatedVolumeUnit = v)}
									>
										<Select.Trigger>
											<Select.Value placeholder="Unit" />
										</Select.Trigger>
										<Select.Content>
											{#each units.volume as unit}
												<Select.Item value={unit.value}
													>{unit.label}</Select.Item
												>
											{/each}
										</Select.Content>
										<Select.Input
											name="calculated-volume-unit"
											id="calculated-volume-unit"
										/>
									</Select.Root>
								</div>
							</div>
						{/if}
					</Tabs.Content>
					<Tabs.Content value="volume">
						<div class="mb-4">
							<label
								for="volume-unit"
								class="block text-sm font-medium text-gray-700 mb-2">Unit</label
							>
							<Select.Root>
								<Select.Trigger>
									<Select.Value placeholder="Unit" />
								</Select.Trigger>
								<Select.Content>
									{#each units.volume as unit}
										<Select.Item value={unit.value}>{unit.label}</Select.Item>
									{/each}
								</Select.Content>
								<Select.Input name="volume-unit" id="volume-unit" />
							</Select.Root>
						</div>
						<div class="mb-4">
							<label for="volume" class="block text-sm font-medium text-gray-700 mb-2"
								>Volume</label
							>
							<Input
								type="number"
								id="volume"
								name="volume"
								step="any"
								class="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
							/>
						</div>
					</Tabs.Content>
				</Tabs.Root>
			</fieldset>

			<!-- Livestock Preferences Fieldset -->
			<fieldset class="border border-gray-200 p-4 rounded-md mb-6 bg-white md:p-6">
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
						<Select.Input name="fish-behavior" id="fish-behavior" />
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
						<Select.Input name="fish-size" id="fish-size" />
					</Select.Root>
				</div>
				<div class="mb-4">
					<label for="care-level" class="block text-sm font-medium text-gray-700 mb-2"
						>Care Level</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Care Level" />
						</Select.Trigger>
						<Select.Content>
							{#each careLevels as level}
								<Select.Item value={level.value}>{level.label}</Select.Item>
							{/each}
						</Select.Content>
						<Select.Input name="care-level" id="care-level" />
					</Select.Root>
				</div>
			</fieldset>

			<!-- Water Chemistry Fieldset -->
			<fieldset class="border border-gray-200 p-4 rounded-md mb-6 bg-white md:p-6">
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
						<Select.Input name="water-type" id="water-type" />
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
						<Select.Input name="water-source" id="water-source" />
					</Select.Root>
				</div>
				<div class="mb-4">
					<label for="target-ph" class="block text-sm font-medium text-gray-700 mb-2"
						>Target pH</label
					>
					<Input
						type="number"
						id="target-ph"
						name="target-ph"
						step="any"
						bind:value={targetPh}
						class="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
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
						<Select.Input name="water-hardness" id="water-hardness" />
					</Select.Root>
				</div>
			</fieldset>

			<!-- Equipment Preferences Fieldset -->
			<fieldset class="border border-gray-200 p-4 rounded-md mb-6 bg-white md:p-6">
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
						<Select.Input name="filter-type" id="filter-type" />
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
						<Select.Input name="lighting-type" id="lighting-type" />
					</Select.Root>
				</div>
				<div class="flex items-center mb-4">
					<div class="flex items-center space-x-2">
						<Input
							type="checkbox"
							id="aquarium-heater"
							name="aquarium-heater"
							bind:checked={aquariumHeater}
							value="true"
							class="h-4 w-4 rounded border-gray-200 text-teal-600 focus:ring-teal-500"
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
							name="water-pump"
							bind:checked={waterPump}
							value="true"
							class="h-4 w-4 rounded border-gray-200 text-teal-600 focus:ring-teal-500"
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

				<div class="flex items-center mb-4">
					<div class="flex items-center space-x-2">
						<Input
							type="checkbox"
							id="co2-system"
							name="co2-system"
							value="true"
							class="h-4 w-4 rounded border-gray-200 text-teal-600 focus:ring-teal-500"
						/>
						<Label
							for="co2-system"
							class="text-sm font-medium leading-none 
							peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							CO2 System
						</Label>
					</div>
				</div>
			</fieldset>

			<!-- Maintenance Preferences Fieldset -->
			<fieldset class="border border-gray-200 p-4 rounded-md mb-6 bg-white md:p-6">
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
						<Select.Input name="maintenance-frequency" id="maintenance-frequency" />
					</Select.Root>
				</div>
			</fieldset>

			<!-- Aquascaping Preferences Fieldset -->
			<fieldset class="border border-gray-200 p-4 rounded-md mb-6 bg-white md:p-6">
				<legend class="text-lg font-semibold text-teal-700 px-2"
					>Aquascaping Preferences</legend
				>
				<div class="flex items-center mb-4">
					<div class="flex items-center space-x-2">
						<Input
							type="checkbox"
							id="live-plants"
							name="live-plants"
							bind:checked={livePlants}
							value="true"
							class="h-4 w-4 rounded border-gray-200 text-teal-600 focus:ring-teal-500"
						/>
						<Label
							id="live-plants-label"
							for="live-plants"
							class="text-sm font-medium leading-none 
							peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
						<Select.Input name="plant-type" id="plant-type" />
					</Select.Root>
				</div>
				<div class="mb-4">
					<label
						for="plant-care-level"
						class="block text-sm font-medium text-gray-700 mb-2">Care Level</label
					>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Care Level" />
						</Select.Trigger>
						<Select.Content>
							{#each careLevels as level}
								<Select.Item value={level.value}>{level.label}</Select.Item>
							{/each}
						</Select.Content>
						<Select.Input name="plant-care-level" id="plant-care-level" />
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
						<Select.Input name="substrate-type" id="substrate-type" />
					</Select.Root>
				</div>
			</fieldset>

			<!-- Location & Budget Fieldset -->
			<fieldset class="border border-gray-200 p-4 rounded-md mb-6 bg-white md:p-6">
				<legend class="text-lg font-semibold text-teal-700 px-2">Location & Budget</legend>
				<div class="mb-4">
					<label for="country" class="block text-sm font-medium text-gray-700 mb-2"
						>Country</label
					>
					<Input
						type="text"
						id="country"
						name="country"
						autocomplete="on"
						class="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
					/>
				</div>
				<div class="mb-4">
					<label for="region" class="block text-sm font-medium text-gray-700 mb-2"
						>Region/State</label
					>
					<Input
						type="text"
						id="region"
						name="region"
						autocomplete="on"
						class="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
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
						<Select.Input name="budget" id="budget" />
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
