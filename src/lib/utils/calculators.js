import convert from "convert";
import defaultUnits from '$lib/data/defaultUnits';

/**
 * Calculates the recommended filtration rate for an aquarium
 * @param {number} tankVolume - The volume of the aquarium
 * @param {number} turnoverRate - The desired water turnover rate per hour (default: 4)
 * @returns {number} The recommended filtration rate in units per hour
 */
function calculateFiltrationRate(tankVolume, turnoverRate = 4) {
	return tankVolume * turnoverRate;
}

/**
 * Calculates the recommended heater wattage for an aquarium.
 * @param {number} tankSize - The size of the aquarium in gallons.
 * @param {number} wattsPerGallon - The number of watts needed per gallon. Default is 4 watts per gallon.
 * @returns {number} - The recommended heater wattage.
 */
function calculateHeaterWattage(tankVolume, wattsPerGallon = 4) {
	return tankSize * wattsPerGallon;
}

/**
 * Calculates the volume of an aquarium
 * @param {number} length - The length of the aquarium
 * @param {number} width - The width of the aquarium
 * @param {number} height - The height of the aquarium
 * @param {string} lengthUnit - The unit of the dimensions (e.g., 'cm', 'in')
 * @param {string} volumeUnit - The desired unit for the volume (e.g., 'l', 'gal')
 * @returns {number} The volume of the aquarium in the specified unit
 */
function calculateVolume(length, width, height, lengthUnit = defaultUnits.length, volumeUnit = defaultUnits.volume) {
	// Calculate volume in the input unit
	const volume = length * width * height;

	// Convert to the desired volume unit
	return convert(volume, `${lengthUnit}3`).to(volumeUnit).toFixed(2);
}

// Export the functions
export { calculateFiltrationRate, calculateHeaterWattage, calculateVolume };
