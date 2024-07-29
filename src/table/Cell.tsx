import type { JSXElement } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { Text } from '../typography';
import type { TypographyAlign } from '../typography/types';

export interface CellProps {
	children?: JSXElement;
	align?: TypographyAlign;
	head?: boolean;
}

export function Cell(props: CellProps) {
	return (
		<Dynamic component={props.head ? 'th' : 'td'} class="p-2">
			<Text
				as="div"
				align={props.align}
				weight={props.head ? 'bold' : undefined}
			>
				{props.children}
			</Text>
		</Dynamic>
	);
}
