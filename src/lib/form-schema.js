import { z } from 'zod';

const volumeSchema = z.object({
	'volume-mode': z.literal('volume'),
	'volume': z.coerce.number().positive('Volume must be greater than 0'),
	'volume-unit': z.string(),
});

const dimensionsSchema = z.object({
	'volume-mode': z.literal('dimensions'),
	'length': z.coerce.number().positive('Length must be greater than 0'),
	'width': z.coerce.number().positive('Width must be greater than 0'),
	'height': z.coerce.number().positive('Height must be greater than 0'),
	'length-unit': z.string(),
});

const commonSchema = z.object({
	'calculated-volume-unit': z.string().optional(),
	'fish-behavior': z.string(),
	'fish-size': z.string(),
	'care-level': z.string(),
	'water-type': z.string(),
	'water-source': z.string(),
	'target-ph': z.string(),
	'water-hardness': z.string(),
	'filter-type': z.string(),
	'aquarium-heater': z.string().optional(),
	'co2-system': z.string().optional(),
	'maintenance-frequency': z.string(),
	'live-plants': z.string().optional(),
	'plant-care-level': z.string(),
	'substrate-type': z.string(),
	'country': z.string(),
	'region': z.string(),
	'budget': z.string(),
});

const schema = z.discriminatedUnion('volume-mode', [
	volumeSchema,
	dimensionsSchema
])
	.and(commonSchema);

export default schema;