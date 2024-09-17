export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const result = Object.fromEntries(data);
		console.log(result);
		return { result };
	}
};