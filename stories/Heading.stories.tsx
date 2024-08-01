import type { Meta, StoryObj } from 'storybook-solidjs';
import { Stack } from '../src/layout/Stack';
import { Heading } from '../src/typography/Heading';

const meta = {
	component: Heading,
	title: 'typography/Heading',
	tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render() {
		return (
			<Stack>
				<Heading level={1}>Lorem ipsum dolor sit amet</Heading>
			</Stack>
		);
	},
};

export const Alignment: Story = {
	render() {
		return (
			<Stack>
				<Heading level={3} align="start">
					Lorem ipsum dolor sit amet
				</Heading>
				<Heading level={3} align="center">
					Lorem ipsum dolor sit amet
				</Heading>
				<Heading level={3} align="justify">
					Lorem ipsum dolor sit amet
				</Heading>
				<Heading level={3} align="end">
					Lorem ipsum dolor sit amet
				</Heading>
			</Stack>
		);
	},
};

export const Levels: Story = {
	render() {
		return (
			<Stack>
				<Heading level={1}>Lorem ipsum dolor sit amet</Heading>
				<Heading level={2}>Lorem ipsum dolor sit amet</Heading>
				<Heading level={3}>Lorem ipsum dolor sit amet</Heading>
				<Heading level={4}>Lorem ipsum dolor sit amet</Heading>
				<Heading level={5}>Lorem ipsum dolor sit amet</Heading>
				<Heading level={6}>Lorem ipsum dolor sit amet</Heading>
			</Stack>
		);
	},
};

export const Transforms: Story = {
	render() {
		return (
			<Stack>
				<Heading level={3} transform="capitalize">
					Lorem ipsum dolor sit amet
				</Heading>
				<Heading level={3} transform="lowercase">
					Lorem ipsum dolor sit amet
				</Heading>
				<Heading level={3} transform="uppercase">
					Lorem ipsum dolor sit amet
				</Heading>
			</Stack>
		);
	},
};

export default meta;
