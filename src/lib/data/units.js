// TODO: Switch from convert-units to convert

// Fairly synced with convert-units.js
// Feet can be 'ft-us' and 'ft', review this later.
// Light intensity is yet to be reviewed.

export default {
	"volume": [
		{ "label": "Liters", "value": "l" },
		{ "label": "Gallons", "value": "gal" },
	],
	"length": [
		{ "label": "Centimeters", "value": "cm" },
		{ "label": "Meters", "value": "m" },
		{ "label": "Inches", "value": "in" },
		{ "label": "Feet", "value": "ft" }
	],
	"mass": [
		{ "label": "Kilograms", "value": "kg" },
		{ "label": "Grams", "value": "g" },
		{ "label": "Pounds", "value": "lb" }
	],
	"temperature": [
		{ "label": "Celsius", "value": "C" },
		{ "label": "Fahrenheit", "value": "F" }
	],
	"water_flow": [
		{ "label": "Liters per hour", "value": "l/h" },
		{ "label": "Gallons per hour", "value": "gal/h" }
	],
	"light_intensity": [
		{ "label": "Lumens", "value": "lm" },
		{ "label": "PAR", "value": "PAR" }
	]
}
