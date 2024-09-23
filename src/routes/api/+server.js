import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private';

import { streamObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

import { z } from 'zod';


const openai = createOpenAI({
	apiKey: env.OPENAI_API_KEY ?? '',
});

export const GET = async () => {
	console.log("Hello from the API")

	const { partialObjectStream } = await streamObject({
		model: openai('gpt-4o-mini'),
		schema: z.object({
			recipe: z.object({
				name: z.string(),
				items: z.array(z.string()),
			}),
		}),
		prompt: 'Generate a list of 5 elements.',
	});

	for await (const partialObject of partialObjectStream) {
		console.clear();
		console.log(partialObject);
	}

	return json()
}