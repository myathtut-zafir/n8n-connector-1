import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';

export class RandomQuote implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'RandomQuote Node',
		name: 'randomQuote',
		group: [],
		version: 1,
		description: 'Basic Example Node',
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		defaults: {
			name: 'Random Quote Node',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		requestDefaults: {
			baseURL: 'https://dummyjson.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Random Quote',
						value: 'randomQuote',
					},
				],
				default: 'randomQuote',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['randomQuote'],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'Get the quote',
						description: 'Get the random quote of the day',
						routing: {
							request: {
								method: 'GET',
								url: '/quotes/random',
							},
						},
					},
				],
				default: 'get',
			},
		],
	};
}
