import type { JSXElement } from 'solid-js';
import { cx } from 'class-variance-authority';

export interface ControlBarProps {
	children: JSXElement;
	class?: string;
}

export function ControlBar(props: ControlBarProps) {
	return (
		<nav class={cx('flex grow-0 items-stretch', props.class)}>
			<ul class="flex flex-row flex-nowrap justify-start items-stretch gap-2">{props.children}</ul>
		</nav>
	);
}
