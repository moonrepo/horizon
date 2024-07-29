import { cva } from 'class-variance-authority';

export const menu = cva(
	'dark:bg-space-800 border border-solid dark:border-space-900 drop-shadow-lg rounded-lg p-1 z-40',
);

export const menuItem = cva(
	[
		'p-1 w-full text-left rounded outline-none ui-disabled:opacity-50',
		// Hover, focus
		'dark:hover:ui-not-disabled:bg-space-700 dark:focus:bg-space-700',
		// Selected
		'dark:ui-selected:bg-moon-600 dark:hover:ui-selected:bg-moon-500 dark:focus:ui-selected:bg-moon-500',
	],
	{
		variants: {
			type: {
				block: 'block',
				flex: 'flex items-center justify-start',
			},
		},
	},
);
