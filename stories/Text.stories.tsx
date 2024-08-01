import type { Meta, StoryObj } from 'storybook-solidjs';
import { Stack } from '../src/layout/Stack';
import { Text } from '../src/typography/Text';

const meta = {
	component: Text,
	title: 'typography/Text',
	tags: ['autodocs'],
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render() {
		return (
			<Stack>
				<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
			</Stack>
		);
	},
};

export const Alignment: Story = {
	render() {
		return (
			<Stack>
				<Text align="start">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text align="center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text align="justify">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text align="end">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
			</Stack>
		);
	},
};

export const Sizes: Story = {
	render() {
		return (
			<Stack>
				<Text size="xs">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text size="sm">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text size="md">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text size="lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text size="xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
			</Stack>
		);
	},
};

export const Transforms: Story = {
	render() {
		return (
			<Stack>
				<Text transform="capitalize">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text transform="lowercase">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text transform="uppercase">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
			</Stack>
		);
	},
};

export const Weights: Story = {
	render() {
		return (
			<Stack>
				<Text weight="thin">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text weight="light">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text weight="normal">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text weight="medium">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text weight="bold">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text weight="black">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
			</Stack>
		);
	},
};

export default meta;
