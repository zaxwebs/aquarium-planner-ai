import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private';

import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

import { z } from 'zod';

// This varies from demo data as quantity is skipped.

const schema = z.object({
	name: z.string().describe('Common name of the fish.'),
	scientificName: z.string(),
	family: z.string(),
	recommendationReason: z.string().describe('A very short reason for recommending this.'),
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

	const { scientificName } = await request.json();

	const result = await generateObject({
		model: openai('gpt-4o-mini'),
		schema,
		prompt: `Return aquarium fish details for: ${scientificName}`,
	});

	console.log(result.object)

	return json(result.object);
}