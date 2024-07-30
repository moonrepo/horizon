import { cx } from 'class-variance-authority';
import { type JSXElement, type ValidComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import type { AriaProps } from '../types';

export interface GroupProps extends AriaProps {
	as?: ValidComponent;
	children: JSXElement;
	class?: string;
	compact?: boolean;
	inline?: boolean;
}

export function Group(props: GroupProps) {
	const [ui, rest] = splitProps(props, ['class', 'compact', 'inline']);

	return (
		<Dynamic
			{...rest}
			component={rest.as ?? 'div'}
			class={cx(
				ui.inline ? 'inline-flex' : 'flex',
				'flex-row items-center',
				ui.class,
				ui.compact ? 'gap-1' : 'gap-2',
			)}
		>
			{rest.children}
		</Dynamic>
	);
}
