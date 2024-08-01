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
	const [api, rest] = splitProps(props, [
		'as',
		'children',
		'class',
		'gap',
		'inline',
	]);

	return (
		<Dynamic
			{...rest}
			component={api.as ?? 'div'}
			class={cx(
				api.inline ? 'inline-flex' : 'flex',
				'flex-row items-center',
				GAP_CLASS[api.gap ?? 'md'],
				api.class,
			)}
		>
			{api.children}
		</Dynamic>
	);
}
