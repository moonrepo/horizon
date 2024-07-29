import { cva } from 'class-variance-authority';

export const toast = cva('p-1.5 rounded border border-solid w-full shadow-lg', {
	variants: {
		type: {
			danger: 'bg-sun-900 border-sun-700',
			default: 'bg-comet-900 border-comet-700',
			failure: 'bg-meteor-900 border-meteor-700',
			muted: 'bg-rock-900 border-rock-700',
			success: 'bg-planet-900 border-planet-700',
			warning: 'bg-star-900 border-star-700',
		},
	},
});
