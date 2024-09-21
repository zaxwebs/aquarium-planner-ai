import { fail, redirect } from "@sveltejs/kit";
import camelcaseKeys from 'camelcase-keys';
import { handleFormData } from "$lib/utils/handlers.js";
import { findOption } from '$lib/utils/helpers.js';
import { waterTypes } from '$lib/data/general.js';
import units from '$lib/data/units.js';
import { z } from 'zod';

// TODO: Handle dimensions validation
// TODO: Handle volume vs dimensions validation

const schema = z.object({
	'volume-mode': z.enum(['volume', 'dimensions']),
	'length': z.coerce.number().min(1).optional(),
	'width': z.coerce.number().min(1).optional(),
	'height': z.coerce.number().min(1).optional(),
	// 'volume': z.literal('').optional().or(z.coerce.number().min(1)),
	'volume': z.coerce.number().min(1).optional(),
	'volume-unit': z.string(),
	'length-unit': z.string().optional(),

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

export const load = async ({ request, cookies }) => {

	// Check if user has submitted form
	if (!cookies.get('submitted')) {
		redirect(301, "/");
	}

	cookies.delete('submitted', { path: '/' });
}



export const actions = {
	default: async ({ request, cookies }) => {

		// Set a cookie that will be used to prevent direct access to the result page
		cookies.set('submitted', true, { path: '/' });

		const data = await request.formData();
		const result = handleFormData(data);

		console.log('Result...', result);

		// Validate the data using Zod
		const parsed = schema.safeParse(result);


		if (!parsed.success) {
			console.error('Validation failed...', parsed.error.errors);
			return fail(400, { errors: parsed.error.errors });
		} else {
			const cased = camelcaseKeys(result);

			// Send units as full objects to support conversion in future
			const base = {
				volume: cased.volume,
				volumeUnit: findOption(cased.volumeUnit, units.volume),
				filtrationRate: cased.filtrationRate,
				filtrationRateUnit: findOption(cased.filtrationRateUnit, units['water_flow']),
				waterType: findOption(cased.waterType, waterTypes).label,
			};

			return { base };
		}


	}
};