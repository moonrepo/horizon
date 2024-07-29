import { splitProps } from 'solid-js';
import { cx } from 'class-variance-authority';
import {
	Heading as BaseHeading,
	type HeadingElement,
	type HeadingProps as BaseHeadingProps,
} from '../internal/typography/Heading';
import { classes } from './styles';
import type { TypographyProps } from './types';

export interface HeadingProps<T extends HeadingElement>
	extends BaseHeadingProps<T>,
		Omit<TypographyProps, 'weight'> {}

export function Heading<T extends HeadingElement>(props: HeadingProps<T>) {
	const [styles, local, rest] = splitProps(
		props,
		['align', 'level', 'overflow', 'transform', 'variant'],
		['class'],
	);
	const className = () =>
		cx(
			classes({
				align: styles.align,
				level: styles.level,
				overflow: styles.overflow,
				transform: styles.transform,
				variant: styles.variant,
			}),
			local.class,
		);

	return (
		<BaseHeading {...rest} class={className()} level={styles.level}>
			{props.children}
		</BaseHeading>
	);
}
