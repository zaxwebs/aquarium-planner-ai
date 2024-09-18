<script>
	import * as Dialog from '$lib/components/ui/dialog'

	const phData = [
		{
			range: '4.0 - 5.5',
			effect: 'Very acidic, can be stressful for most fish',
			suitableFor: 'Specialized setups',
			species: 'Amazonian fish (e.g., certain tetras)',
			color: 'bg-red-50',
		},
		{
			range: '5.5 - 6.5',
			effect: 'Acidic, can be acceptable for some species',
			suitableFor: 'Soft water fish and plants',
			species: 'Neon tetras, discus, some species of cichlids',
			color: 'bg-orange-50',
		},
		{
			range: '6.5 - 7.5',
			effect: 'Slightly acidic to neutral, suitable for a wide range',
			suitableFor: 'General community tanks',
			species: 'Most freshwater fish, many plants',
			color: 'bg-green-50',
		},
		{
			range: '7.5 - 8.5',
			effect: 'Slightly alkaline to alkaline, can affect certain species',
			suitableFor: 'Hard water fish and plants',
			species: 'African cichlids, livebearers (e.g., guppies)',
			color: 'bg-blue-50',
		},
		{
			range: '8.5 - 9.5',
			effect: 'Alkaline, can be stressful for many species',
			suitableFor: 'Specialized setups',
			species: 'Some African cichlids, certain marine species',
			color: 'bg-purple-50',
		},
		{
			range: '9.5 - 10.0',
			effect: 'Very alkaline, usually requires careful management',
			suitableFor: 'Specialized setups',
			species: 'Marine aquariums, certain desert-adapted species',
			color: 'bg-pink-50',
		},
	]
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="text-gray-400 size-4"
			><path
				d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
			/><line x1="12" x2="12" y1="16" y2="12" /><line x1="12" x2="12.01" y1="8" y2="8" /></svg
		>
	</Dialog.Trigger>
	<Dialog.Content class="max-w-4xl max-h-[80vh] overflow-y-auto">
		<Dialog.Header>
			<Dialog.Title>pH Levels and Their Effects on Aquariums</Dialog.Title>
			<Dialog.Description>
				<p class="mb-4 text-sm text-gray-600">
					pH measures water acidity or alkalinity. Freshwater fish usually need a pH
					between 6.5 and 7.5, while saltwater fish prefer 8.1 to 8.4. Regular testing and
					gradual adjustments are key to maintaining a healthy environment.
				</p>
			</Dialog.Description>
		</Dialog.Header>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			{#each phData as { range, effect, suitableFor, species, color }}
				<div class={`${color} rounded-lg p-4`}>
					<h3 class="text-lg font-bold mb-2">pH {range}</h3>
					<p class="mb-2"><span class="font-semibold">Effect — </span> {effect}</p>
					<p class="mb-2">
						<span class="font-semibold">Suitable For — </span>
						{suitableFor}
					</p>
					<p><span class="font-semibold">Common Species — </span> {species}</p>
				</div>
			{/each}
		</div>
	</Dialog.Content>
</Dialog.Root>
