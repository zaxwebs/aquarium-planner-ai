import { calculateVolume } from "$lib/utils/calculators.js";

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		let result = Object.fromEntries(data);

		// Handle volume mode
		if (result['volume-mode'] === 'volume') {
			delete result['length'];
			delete result['width'];
			delete result['height'];
			delete result['length-unit'];
		} else {
			result.volume = calculateVolume(
				result['length'],
				result['width'],
				result['height'],
				result['length-unit'],
				result['volume-unit']
			);
		}

		console.log(result);
		return { result };
	}
};