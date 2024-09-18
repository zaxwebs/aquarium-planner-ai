// I'm using this file to prototype the structure of the data

const fish = {
	common_name: "Neon Tetra",
	scientific_name: "Paracheirodon innesi",
	family: "Characidae",
	origin: "South America",
	size_cm: 4,
	lifespan_years: 5,
	tank_size_liters: 40,
	temperament: "Peaceful",
	water_type: "Freshwater",
	water_temperature_celsius_min: 20,
	water_temperature_celsius_max: 26,
	water_ph_min: 6.0,
	water_ph_max: 7.0,
	colors: "Blue",
	care_level: "Easy",
	tank_level: "Midwater",
	compatibility: ["Other peaceful fish", "Small tetras", "Corydoras"],
	special_requirements: "Prefers dim lighting and planted tanks",
	recommendation_reason: "They also vibrant color to community tanks."
}

const enums = {
	care_level: ["Easy", "Moderate", "Difficult", "Expert"],
	temperament: ["Peaceful", "Semi-aggressive", "Aggressive"],
	water_type: ["Freshwater", "Saltwater", "Brackish"],
	tank_level: ["Top", "Midwater", "Bottom"],
}
