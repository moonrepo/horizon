import type { JSXElement } from 'solid-js';
import { cva } from 'class-variance-authority';
import type { StatusType } from '../types';
import { Text } from './Text';

export interface StatusLabelProps {
	children: JSXElement;
	type?: StatusType;
}

const classes = cva('px-1 py-0.5 inline-block rounded leading-none', {
	variants: {
		type: {
			danger: 'bg-sun-600',
			default: 'bg-comet-600',
			failure: 'bg-meteor-600',
			muted: 'bg-rock-600',
			success: 'bg-planet-600',
			warning: 'bg-star-600',
		},
	},
});

export function StatusLabel(props: StatusLabelProps) {
	const className = () => classes({ type: props.type ?? 'default' });

	return (
		<span class={className()}>
			<Text size="xs" transform="uppercase">
				{props.children}
			</Text>
		</span>
	);
}
