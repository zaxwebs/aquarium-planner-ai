
import { handleFormData } from "$lib/utils/handlers.js";

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const result = handleFormData(data);

		console.log(result);
		return { result };
	}
};