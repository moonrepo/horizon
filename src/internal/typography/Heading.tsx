import { type JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { TypographyContext } from './context';

export type InferHeadingHtmlElement<T extends HeadingElement> = T extends 'p'
	? HTMLParagraphElement
	: HTMLHeadingElement;

// eslint-disable-next-line no-magic-numbers
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface HeadingProps<T extends HeadingElement>
	extends JSX.HTMLAttributes<InferHeadingHtmlElement<T>> {
	as?: T;
	children: JSX.Element;
	level: HeadingLevel;
}

export function Heading<T extends HeadingElement>(props: HeadingProps<T>) {
	const [local, other] = splitProps(props, ['as', 'children', 'level']);
	const elementType = () => local.as ?? (`h${local.level}` as T);

	return (
		<Dynamic<HeadingElement> component={elementType()} {...other}>
			<TypographyContext.Provider value>
				{local.children}
			</TypographyContext.Provider>
		</Dynamic>
	);
}
