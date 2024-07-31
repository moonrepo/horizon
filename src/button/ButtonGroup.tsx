import type { JSXElement } from 'solid-js';
import { type Gap, Group } from '../layout/Group';

export interface ButtonGroupProps {
	children: JSXElement;
	gap?: Gap;
}

export function ButtonGroup(props: ButtonGroupProps) {
	return (
		<Group inline gap={props.gap ?? 'sm'} role="group">
			{props.children}
		</Group>
	);
}
