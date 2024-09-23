import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private';

import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

import { z } from 'zod';

const schema = z.object({
	name: z.string(),
	scientificName: z.string(),
	family: z.string(),
	recommendation: z.object({
		quantity: z.number(),
		reason: z.string(),
	}),
	size: z.string(),
	temperament: z.string(),
	environment: z.object({
		temperature: z.object({
			min: z.number(),
			max: z.number(),
		}),
		pH: z.object({
			min: z.number(),
			max: z.number(),
		}),
		hardness: z.string(),
	}),
	lifespan: z.string(),
	minGallons: z.number(),
	tankRegion: z.string(),
	careLevel: z.string(),
	coloration: z.string(),
	activityLevel: z.string(),
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
		schema,
		prompt: `Fill in the aquarium fish details.`,
	});

	console.log(result.object)

	return json(result.object);
}