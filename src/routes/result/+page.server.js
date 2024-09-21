
import camelcaseKeys from 'camelcase-keys';
import { handleFormData } from "$lib/utils/handlers.js";
import { findOption } from '$lib/utils/helpers.js'
import { waterTypes } from '$lib/data/general.js'
import units from '$lib/data/units.js'

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const result = handleFormData(data);

		const cased = camelcaseKeys(result);

		// Send units as full objects to support conversion in future

		// TODO: Add filtration rate unit to the object
		const base = {
			volume: cased.volume,
			volumeUnit: findOption(cased.volumeUnit, units.volume),
			filtrationRate: cased.filtrationRate,
			filtrationRateUnit: findOption(cased.filtrationRateUnit, units['water_flow']),
			waterType: findOption(cased.waterType, waterTypes).label,
		}




		return { base };
	}
};