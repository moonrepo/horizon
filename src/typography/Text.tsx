import { splitProps } from 'solid-js';
import {
	Text as BaseText,
	type TextProps as BaseTextProps,
	type InferTextProps,
	type TextElement,
} from '../internal/typography/Text';
import { classes } from './styles';
import type { TypographyProps } from './types';

export type TextSize = 'df' | 'lg' | 'sm' | 'xl' | 'xs';

export interface TextProps<T extends TextElement>
	extends BaseTextProps<T>,
		TypographyProps {
	/**
	 * Size of body text.
	 * @default df
	 */
	size?: TextSize;
}

export function Text<T extends TextElement>(
	props: InferTextProps<T> & TextProps<T>,
) {
	const [styles, rest] = splitProps(props, [
		'align',
		'overflow',
		'size',
		'transform',
		'weight',
		'variant',
	]);
	const className = () =>
		classes({
			class: props.class,
			align: styles.align,
			overflow: styles.overflow,
			size: styles.size ?? 'df',
			transform: styles.transform,
			weight: styles.weight,
			variant: styles.variant,
		});

	return (
		// @ts-expect-error Polymorphism
		<BaseText {...rest} class={className()}>
			{props.children}
		</BaseText>
	);
}
