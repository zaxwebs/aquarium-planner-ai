<script>
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
</script>
