import type { Meta, StoryObj } from 'storybook-solidjs';
import { Button } from '../src/button/Button';
import { Icon } from '../src/icons';
import { Group } from '../src/layout/Group';

const meta = {
	component: Button,
	title: 'button/Button',
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Icons: Story = {
	render() {
		return (
			<Group>
				<Button before={<Icon icon="ph:plus-circle-duotone" />}>Before</Button>
				<Button after={<Icon icon="ph:minus-circle-duotone" />} size="md">
					After
				</Button>
				<Button
					after={<Icon icon="ph:minus-circle-duotone" />}
					before={<Icon icon="ph:plus-circle-duotone" />}
				>
					Both
				</Button>
			</Group>
		);
	},
};

export const Sizes: Story = {
	render() {
		return (
			<Group>
				<Button size="sm">Small</Button>
				<Button size="md">Medium</Button>
				<Button size="lg">Large</Button>
			</Group>
		);
	},
};

export const Types: Story = {
	render() {
		return (
			<Group>
				<Button>Button</Button>
				<Button href="#">Link</Button>
			</Group>
		);
	},
};

export const Variants: Story = {
	render() {
		return (
			<Group>
				<Button variant="primary">Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="tertiary">Tertiary</Button>
				<Button variant="danger">Danger</Button>
			</Group>
		);
	},
};

export default meta;
