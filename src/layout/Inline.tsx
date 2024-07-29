import type { JSXElement, ValidComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cx } from 'class-variance-authority';

export interface InlineProps {
	as?: ValidComponent;
	children: JSXElement;
	class?: string;
	spacious?: boolean;
}

export function Inline(props: InlineProps) {
	return (
		<Dynamic
			component={props.as ?? 'div'}
			class={cx('flex flex-row items-center', props.class, props.spacious ? 'gap-2' : 'gap-1')}
		>
			{props.children}
		</Dynamic>
	);
}
