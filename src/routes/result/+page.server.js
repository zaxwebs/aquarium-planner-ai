export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		let result = Object.fromEntries(data);

		console.log(result);
		return { result };
	}
};