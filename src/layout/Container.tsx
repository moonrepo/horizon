import type { JSXElement } from 'solid-js';
import { cx } from 'class-variance-authority';

export interface ContainerProps {
	children: JSXElement;
	class?: string;
}

export function Container(props: ContainerProps) {
	return (
		<div class={cx('container mx-auto px-2 md:px-1 lg:px-0', props.class)}>{props.children}</div>
	);
}
