import { cva } from 'class-variance-authority';

export const classes = cva('m-0 p-0 font-sans', {
	variants: {
		align: {
			center: 'text-center',
			end: 'text-right',
			justify: 'text-justify',
			start: 'text-left',
		},
		level: {
			1: 'text-l1 font-bold',
			2: 'text-l2 font-bold',
			3: 'text-l3 font-bold',
			4: 'text-l4 font-semibold',
			5: 'text-l5 font-semibold',
			6: 'text-l6 font-semibold',
		},
		overflow: {
			clip: 'text-clip overflow-hidden',
			ellipsis: 'text-ellipsis overflow-hidden',
			truncate: 'truncate',
			wrap: '',
		},
		size: {
			xs: 'text-xs',
			sm: 'text-sm',
			df: '',
			lg: 'text-lg',
			xl: 'text-xl',
		},
		transform: {
			capitalize: 'capitalize',
			lowercase: 'lowercase',
			uppercase: 'uppercase',
		},
		weight: {
			black: 'font-black',
			bold: 'font-bold',
			light: 'font-light',
			medium: 'font-semibold',
			normal: 'font-medium',
			thin: 'font-thin',
		},
		variant: {
			muted: 'text-fg-light/60 dark:text-fg-dark/60',
		},
	},
});
