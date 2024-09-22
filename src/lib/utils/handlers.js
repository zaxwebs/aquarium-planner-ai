import { calculateVolume, calculateFiltrationRate } from "$lib/utils/calculators.js";

const processData = (data) => {

	// TODO: Look into volume unit handling for volume modes at /+page.svelte

	// Handle volume mode
	if (data.volumeMode === 'dimensions') {
		data.volume = calculateVolume(
			data.length,
			data.width,
			data.height,
			data.lengthUnit,
			data.volumeUnit
		);
	}

	// handle filtration rate
	data.filtrationRate = calculateFiltrationRate(data.volume);
	data.filtrationRateUnit = data.volumeUnit + '/h';

	return data;
};


export { processData }
