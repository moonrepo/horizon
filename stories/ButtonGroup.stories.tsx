import type { Meta, StoryObj } from 'storybook-solidjs';
import { Button } from '../src/button/Button';
import { ButtonGroup } from '../src/button/ButtonGroup';

const meta = {
	component: ButtonGroup,
	title: 'button/ButtonGroup',
	tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render() {
		return (
			<ButtonGroup>
				<Button>Small</Button>
				<Button>Medium</Button>
				<Button>Large</Button>
			</ButtonGroup>
		);
	},
};

export default meta;
