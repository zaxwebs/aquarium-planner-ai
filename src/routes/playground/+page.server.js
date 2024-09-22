export const load = async ({ fetch }) => {

	const res = await fetch(`/api`)
	const data = await res.json();

	return { ...data }
}
