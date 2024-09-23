<!-- <script>
	import { onMount } from 'svelte'

	let recommendations

	onMount(async () => {
		const response = await fetch('/api/recommendations', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				preferences: {
					difficulty: 'easy',
					waterType: 'freshwater',
					tankVolume: 40,
				},
			}),
		})

		recommendations = await response.json()
	})

	$: console.log(recommendations)
</script> -->

<!-- <script>
	import { onMount } from 'svelte'

	let output

	onMount(async () => {
		const response = await fetch('/api/details/fish', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				scientificName: 'Paracheirodon innesi',
			}),
		})

		output = await response.json()
	})

	$: console.log(output)
</script> -->

<!-- <script>
	import { onMount } from 'svelte'

	let output

	onMount(async () => {
		const response = await fetch('/api/details/plant', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				scientificName: 'Microsorum pteropus',
			}),
		})

		output = await response.json()
	})

	$: console.log(output)
</script> -->

<script>
	import { onMount } from 'svelte'
	import { getPlantDetails } from '$lib/utils/api'

	let output

	onMount(async () => {
		try {
			output = await getPlantDetails('Microsorum pteropus')
		} catch (error) {
			console.error('Error fetching details:', error)
		}
	})

	$: console.log(output)
</script>
