import { calculateVolume } from "$lib/utils/calculators.js";

const handleFormData = (data) => {
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

	return result;
}

export { handleFormData }
