import { cx } from 'class-variance-authority';
import { type JSXElement, type ValidComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import type { AriaProps } from '../types';
import { GAP_CLASS, type Gap } from './styles';

export type { Gap };

export interface GroupProps extends AriaProps {
	as?: ValidComponent;
	children: JSXElement;
	class?: string;
	gap?: Gap;
	inline?: boolean;
}

export function Group(props: GroupProps) {
	const [ui, rest] = splitProps(props, ['class', 'gap', 'inline']);

	return (
		<Dynamic
			{...rest}
			component={rest.as ?? 'div'}
			class={cx(
				ui.inline ? 'inline-flex' : 'flex',
				'flex-row items-center',
				GAP_CLASS[ui.gap ?? 'md'],
				ui.class,
			)}
		>
			{rest.children}
		</Dynamic>
	);
}
