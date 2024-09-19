/**
	 * Finds and returns an option object from an array based on its value.
	 * @param value - The value to search for.
	 * @param array - The array of option objects to search in.
	 * @returns The matching option object, or undefined if not found.
	 */
const findOption = (value, array) => {
	return array.find((item) => item.value === value)
}

export { findOption }

