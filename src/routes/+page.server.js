import { fail, redirect } from "@sveltejs/kit";
import camelcaseKeys from 'camelcase-keys';
import { handleFormData } from "$lib/utils/handlers.js";
import { findOption } from '$lib/utils/helpers.js';
import { waterTypes } from '$lib/data/general.js';
import units from '$lib/data/units.js';
import schema from '$lib/form-schema.js';

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