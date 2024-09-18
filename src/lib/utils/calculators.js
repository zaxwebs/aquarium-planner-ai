/**
 * Calculates the recommended filtration flow rate for an aquarium
 * @param {number} tankVolume - The volume of the aquarium in liters
 * @param {number} turnoverRate - The desired water turnover rate per hour (default: 4)
 * @returns {number} The recommended filtration flow rate in liters per hour
 */
function calculateFiltrationFlowRate(tankVolume, turnoverRate = 4) {
	return tankVolume * turnoverRate;
}

// Export the function
export { calculateFiltrationFlowRate };
