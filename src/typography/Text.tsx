import { splitProps } from 'solid-js';
import {
	Text as BaseText,
	type TextProps as BaseTextProps,
	type TextElement,
} from '../internal/typography/Text';
import { makeClass } from './styles';
import type { TypographyProps } from './types';

export type TextSize = 'md' | 'lg' | 'sm' | 'xl' | 'xs';

export interface TextProps<T extends TextElement>
	extends BaseTextProps<T>,
		TypographyProps {
	size?: TextSize;
}

export function Text<T extends TextElement>(props: TextProps<T>) {
	const [ui, rest] = splitProps(props, [
		'class',
		'align',
		'overflow',
		'size',
		'transform',
		'weight',
		'variant',
	]);
	const className = () =>
		makeClass({
			class: ui.class,
			align: ui.align,
			overflow: ui.overflow,
			size: ui.size ?? 'md',
			transform: ui.transform,
			weight: ui.weight,
			variant: ui.variant,
		});

	return (
		<BaseText {...rest} class={className()}>
			{rest.children}
		</BaseText>
	);
}
