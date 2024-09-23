import { redirect } from "@sveltejs/kit";
import { processData } from "$lib/utils/handlers.js";
import schema from '$lib/form-schema.js';
import camelcaseKeys from 'camelcase-keys';

export const load = async ({ cookies }) => {

	// Handle submitted cookie

	// Retrieve cookie data
	const data = JSON.parse(cookies.get('data'));

	// Clear cookie
	// cookies.delete('data', { path: '/' });

	// Revalidate data with Zod schema
	const safeParseResult = schema.safeParse(data);

	if (!safeParseResult.success) {
		throw redirect(303, '/');
	}

	// Process data
	const casedData = camelcaseKeys(data);
	const processedData = processData(casedData);


	// Return data

	return { request: casedData, base: processedData };
}