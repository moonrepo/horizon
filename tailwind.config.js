// TODO
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['coffee'],
	},
};
