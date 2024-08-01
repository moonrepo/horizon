import { splitProps } from 'solid-js';
import {
	Heading as BaseHeading,
	type HeadingProps as BaseHeadingProps,
	type HeadingElement,
} from '../internal/typography/Heading';
import { makeClass } from './styles';
import type { TypographyProps } from './types';

export interface HeadingProps<T extends HeadingElement>
	extends BaseHeadingProps<T>,
		Omit<TypographyProps, 'weight'> {}

export function Heading<T extends HeadingElement>(props: HeadingProps<T>) {
	const [ui, rest] = splitProps(props, [
		'class',
		'align',
		'level',
		'overflow',
		'transform',
		'variant',
	]);
	const className = () =>
		makeClass({
			class: ui.class,
			align: ui.align,
			level: ui.level,
			overflow: ui.overflow,
			transform: ui.transform,
			variant: ui.variant,
		});

	return (
		<BaseHeading {...rest} class={className()} level={ui.level}>
			{rest.children}
		</BaseHeading>
	);
}
