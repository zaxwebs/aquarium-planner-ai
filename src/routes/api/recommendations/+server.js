import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private';

import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

import { z } from 'zod';

const baseSchema = z.object({
	name: z.string(),
	scientificName: z.string(),

});

const fishSchema = baseSchema.extend({
	quantity: z.number().positive(),
});

// Main schema that uses the modular fish and plant schemas
const fishPlantSchema = z.object({
	fish: z.array(fishSchema),  // Array of fish objects
	plants: z.array(baseSchema),  // Array of plant objects
});


const openai = createOpenAI({
	apiKey: env.OPENAI_API_KEY ?? '',
});

export const POST = async ({ request }) => {

	const { preferences } = await request.json();
	const preferencesString = JSON.stringify(preferences);
	console.log(preferencesString)

	const result = await generateObject({
		model: openai('gpt-4o-mini'),
		schema: fishPlantSchema,
		prompt: `list 2-3 based on: ${preferencesString}`,
	});

	console.log(result.object)

	return json(result.object);
}