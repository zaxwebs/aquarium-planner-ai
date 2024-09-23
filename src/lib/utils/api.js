const getDetails = async (scientificName, endpoint) => {
	const response = await fetch(`/api/details/${endpoint}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ scientificName }),
	});

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	return await response.json();
}

const getFishDetails = async (scientificName) => {
	return await getDetails(scientificName, 'fish');
}

const getPlantDetails = async (scientificName) => {
	return await getDetails(scientificName, 'plant');
}

const getRecommendations = async (preferences) => {
	const response = await fetch('/api/recommendations', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ preferences }),
	});

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	return await response.json();
}

export { getDetails, getRecommendations, getFishDetails, getPlantDetails }