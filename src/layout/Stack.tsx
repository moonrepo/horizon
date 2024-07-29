import { cx } from 'class-variance-authority';
import type { JSXElement, ValidComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

export interface StackProps {
	as?: ValidComponent;
	children: JSXElement;
	class?: string;
	spacious?: boolean;
}

export function Stack(props: StackProps) {
	return (
		<Dynamic
			component={props.as ?? 'div'}
			class={cx(
				'flex flex-col',
				props.class,
				props.spacious ? 'gap-3' : 'gap-2',
			)}
		>
			{props.children}
		</Dynamic>
	);
}
