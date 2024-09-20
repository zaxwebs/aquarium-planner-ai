export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		let result = Object.fromEntries(data);

		// Fill in case of unchecked checkboxes
		result['aquarium-heater'] = Boolean(result['aquarium-heater']);
		result['co2-system'] = Boolean(result['co2-system']);
		result['live-plants'] = Boolean(result['live-plants']);

		console.log(result);
		return { result };
	}
};