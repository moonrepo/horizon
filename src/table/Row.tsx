import type { JSXElement } from 'solid-js';
import { cx } from 'class-variance-authority';

export interface RowProps {
	children: JSXElement;
	head?: boolean;
}

export function Row(props: RowProps) {
	return (
		<tr
			class={cx(
				'border-b border-solid dark:border-space-800',
				props.head ? 'text-left' : 'dark:hover:bg-space-800 last:border-b-0',
			)}
		>
			{props.children}
		</tr>
	);
}
