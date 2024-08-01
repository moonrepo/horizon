import { cx } from 'class-variance-authority';
import { type JSXElement, type ValidComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import type { AriaProps } from '../types';
import { GAP_CLASS, type Gap } from './styles';

export type { Gap };

export interface StackProps extends AriaProps {
	as?: ValidComponent;
	children: JSXElement;
	class?: string;
	gap?: Gap;
}

export function Stack(props: StackProps) {
	const [api, rest] = splitProps(props, ['as', 'children', 'class', 'gap']);

	return (
		<Dynamic
			{...rest}
			component={api.as ?? 'div'}
			class={cx('flex flex-col', GAP_CLASS[api.gap ?? 'md'], api.class)}
		>
			{api.children}
		</Dynamic>
	);
}
