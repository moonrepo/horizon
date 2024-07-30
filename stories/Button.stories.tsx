import type { Meta, StoryObj } from 'storybook-solidjs';
import { Button } from '../src/button/Button';
import { Group } from '../src/layout/Group';

const meta = {
	component: Button,
	title: 'button/Button',
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
	render() {
		return (
			<Group>
				<Button size="sm">Small</Button>
				<Button size="md">Medium (default)</Button>
				<Button size="lg">Large</Button>
			</Group>
		);
	},
};

export const Variants: Story = {
	render() {
		return (
			<Group>
				<Button variant="primary">Primary (default)</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="tertiary">Tertiary</Button>
				<Button variant="danger">Danger</Button>
			</Group>
		);
	},
};

export default meta;
