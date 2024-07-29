import { cx } from 'class-variance-authority';
import type { JSXElement } from 'solid-js';

export interface AffixProps {
	children: JSXElement;
	type: 'prefix' | 'suffix';
}

export function Affix(props: AffixProps) {
	return (
		<span class={cx('grow-0', props.type === 'prefix' ? 'mr-1' : 'ml-1')}>
			{props.children}
		</span>
	);
}
