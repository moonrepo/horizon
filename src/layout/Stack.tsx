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
	const [ui, rest] = splitProps(props, ['class', 'gap']);

	return (
		<Dynamic
			{...rest}
			component={rest.as ?? 'div'}
			class={cx('flex flex-col', GAP_CLASS[ui.gap ?? 'md'], ui.class)}
		>
			{rest.children}
		</Dynamic>
	);
}
