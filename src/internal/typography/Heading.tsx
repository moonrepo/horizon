import { type JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import type { CommonProps } from '../../types';
import { TypographyContext } from './context';

// eslint-disable-next-line no-magic-numbers
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type InferHeadingHtmlElement<T extends HeadingElement> = T extends 'p'
	? HTMLParagraphElement
	: HTMLHeadingElement;

export interface HeadingProps<T extends HeadingElement>
	extends CommonProps<InferHeadingHtmlElement<T>> {
	as?: T;
	children: JSX.Element;
	class?: string;
	level: HeadingLevel;
}

export function Heading<T extends HeadingElement>(props: HeadingProps<T>) {
	const [api, rest] = splitProps(props, ['as', 'children', 'level']);
	const elementType = () => api.as ?? (`h${api.level}` as T);

	return (
		<Dynamic<HeadingElement> component={elementType()} {...rest}>
			<TypographyContext.Provider value>
				{api.children}
			</TypographyContext.Provider>
		</Dynamic>
	);
}
