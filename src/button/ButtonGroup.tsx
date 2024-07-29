import { cx } from 'class-variance-authority';
import type { JSXElement } from 'solid-js';

export interface ButtonGroupProps {
	children: JSXElement;
	compact?: boolean;
}

export function ButtonGroup(props: ButtonGroupProps) {
	return (
		<div
			class={cx('inline-flex', props.compact ? 'gap-1' : 'gap-2')}
			role="group"
		>
			{props.children}
		</div>
	);
}
