import { type JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import type { CommonProps } from '../../types';
import { TypographyContext } from './context';

export type TextElement =
	| 'abbr'
	| 'b'
	| 'bdo'
	| 'cite'
	| 'code'
	| 'data'
	| 'dd'
	| 'dfn'
	| 'div'
	| 'em'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'i'
	| 'kbd'
	| 'p'
	| 'q'
	| 'samp'
	| 'small'
	| 'span'
	| 'strong'
	| 'sub'
	| 'sup'
	| 'time'
	| 'var'
	| 'wbr';

export type InferTextHtmlElement<T extends TextElement> =
	JSX.IntrinsicElements[T];

export interface TextProps<T extends TextElement>
	extends CommonProps<InferTextHtmlElement<T>> {
	as?: T;
	children: JSX.Element;
	class?: string;
}

export function Text<T extends TextElement>(props: TextProps<T>) {
	const [api, rest] = splitProps(props, ['as', 'children']);
	const elementType = () => api.as ?? ('span' as T);

	return (
		// @ts-expect-error Polymorphism
		<Dynamic<TextElement> component={elementType()} {...rest}>
			<TypographyContext.Provider value>
				{api.children}
			</TypographyContext.Provider>
		</Dynamic>
	);
}
