// TODO
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['coffee'],
	},
	theme: {
		// // https://www.modularscale.com/?1&em&1.2
		fontSize: {
			xs: ['0.694em', '1rem'],
			sm: ['0.833rem', '1.25rem'],
			base: ['1rem', '1.5rem'],
			lg: ['1.2rem', '1.75rem'],
			xl: ['1.44rem', '1.75rem'],

			l6: ['1.2em', '1.75rem'],
			l5: ['1.44em', '1.75rem'],
			l4: ['1.728em', '1.55rem'],
			l3: ['2.074em', '1.40rem'],
			l2: ['2.488em', '1.25rem'],
			l1: ['2.986em', '1'],
		},
	},
};
