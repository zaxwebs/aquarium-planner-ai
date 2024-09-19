/**
 * Calculates the recommended filtration flow rate for an aquarium
 * @param {number} tankVolume - The volume of the aquarium in liters
 * @param {number} turnoverRate - The desired water turnover rate per hour (default: 4)
 * @returns {number} The recommended filtration flow rate in liters per hour
 */
function calculateFiltrationFlowRate(tankVolume, turnoverRate = 4) {
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

// Export the function
export { calculateFiltrationFlowRate };
