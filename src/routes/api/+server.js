import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private';

import { streamText, StreamData } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

import { z } from 'zod';


const openai = createOpenAI({
	apiKey: env.OPENAI_API_KEY ?? '',
});

export const POST = async ({ request }) => {
	console.log("Hello from the API")

	const { prompt } = await request.json();

	const data = new StreamData();

	const result = await streamText({
		model: openai('gpt-4o-mini'),
		schema: z.object({
			list: z.object({
				name: z.string(),
				items: z.array(z.string()),
			}),
		}),
		prompt: `Generate a list of 5 ${prompt}. Only give me JSON. Do not format it. Return STRICTLY in the schema I sent.`,
		onFinish() {
			data.close();
		},
	});

	return result.toDataStreamResponse({ data });
}