import type { JSXElement } from 'solid-js';
import { Group } from '../layout/Group';

export interface ButtonGroupProps {
	children: JSXElement;
	compact?: boolean;
}

export function ButtonGroup(props: ButtonGroupProps) {
	return (
		<Group inline compact={props.compact} role="group">
			{props.children}
		</Group>
	);
}
