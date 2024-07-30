import type { StorybookConfig } from 'storybook-solidjs-vite';

const config: StorybookConfig = {
	stories: [
		'../stories/**/*.mdx',
		'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: ['@storybook/addon-essentials'],
	framework: {
		name: 'storybook-solidjs-vite',
		options: {},
	},
};
export default config;
