import { cva } from 'class-variance-authority';

export const input = cva(
	[
		'm-0 inline-flex transition-colors',
		// Text
		'font-sans dark:text-space-200 dark:hover:text-rock-50',
		// Bg
		'dark:bg-space-800',
		// Border
		'border border-solid',
		'dark:border-space-300 dark:hover:border-moon-500 dark:group-hover:border-moon-500',
		// Invalid
		'dark:ui-invalid:border-meteor-500 dark:hover:ui-invalid:border-meteor-400 dark:group-hover:ui-invalid:border-meteor-400',
		'dark:ui-invalid:text-meteor-500 dark:hover:ui-invalid:text-meteor-400 dark:group-hover:ui-invalid:text-meteor-400',
		// Disabled
		'dark:ui-disabled:bg-space-600 dark:ui-disabled:border-space-600 dark:ui-disabled:group-hover:border-space-600 dark:ui-disabled:text-space-300',
	],
	{
		variants: {
			disabled: {
				false: [
					'dark:ui-expanded:text-rock-50 dark:ui-expanded:border-moon-500',
				],
			},
			size: {
				sm: 'text-sm p-1 rounded',
				df: 'text-base px-2 py-1.5 rounded',
				lg: 'text-lg px-3 py-2 rounded-lg',
			},
			type: {
				checkbox:
					'text-lg p-0 w-4 h-4 inline-flex justify-center items-center grow-0 rounded',
				radio:
					'text-lg p-0 w-4 h-4 inline-flex justify-center items-center grow-0 rounded-full',
				input: 'w-full',
				select: 'w-full justify-between',
				switch:
					'text-lg w-8 h-4 py-0 px-0.5 inline-flex items-center grow-0 rounded-full group cursor-pointer',
				textarea: 'w-full resize-y',
			},
		},
	},
);

export const toggle = cva([
	'rounded-full w-3 h-3 transition-transform ui-checked:translate-x-[125%] ui-not-checked:translate-x-0 dark:bg-space-700 dark:group-hover:bg-space-200',
	// Check
	'dark:ui-checked:bg-space-200',
	// Invalid
	'dark:ui-invalid:bg-meteor-500 dark:ui-invalid:ui-checked:bg-meteor-500 dark:group-hover:ui-invalid:bg-meteor-400',
	// Disabled
	'dark:group-hover:ui-disabled:bg-space-700',
]);
