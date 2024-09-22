import { fail, redirect } from "@sveltejs/kit";
import { handleFormData } from "$lib/utils/handlers.js";
import { findOption } from '$lib/utils/helpers.js';
import { waterTypes } from '$lib/data/general.js';
import units from '$lib/data/units.js';
import schema from '$lib/form-schema.js';

export const actions = {
	default: async ({ request, cookies }) => {

		// Set a cookie that will be used to prevent direct access to the result page
		cookies.set('submitted', true, { path: '/' });

		const formData = await request.formData();
		const result = Object.fromEntries(formData.entries())

		// Validate the data using Zod
		const safeParseResult = schema.safeParse(result);

		if (!safeParseResult.success) {
			console.error('Validation failed...', safeParseResult.error.errors);
			return fail(400, { success: false, errors: safeParseResult.error.errors });
		} else {
			// save data as a cookie and redirect to result page
			cookies.set('data', JSON.stringify(result), { path: '/' });
			throw redirect(303, '/result');
		}

	}
};