import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private';

import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

import { z } from 'zod';

const schema = z.object({
	name: z.string().describe('Common name of the plant.'),
	scientificName: z.string(),
	size: z.enum(['Small', 'Medium', 'Large']),
	care: z.enum(['Easy', 'Moderate', 'Difficult']),
	placement: z.enum(['Foreground', 'Midground', 'Background']),
	reason: z.string(),
	lightRequirement: z.enum(['Low', 'Medium', 'High']),
	co2Requirement: z.enum(['Low', 'Medium', 'High']),
});


const openai = createOpenAI({
	apiKey: env.OPENAI_API_KEY ?? '',
});

export const POST = async ({ request }) => {

	const { scientificName } = await request.json();

	const result = await generateObject({
		model: openai('gpt-4o-mini'),
		schema,
		prompt: `Return aquarium plant details for: ${scientificName}`,
	});

	console.log(result.object)

	return json(result.object);
}