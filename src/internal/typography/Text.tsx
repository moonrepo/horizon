import { type JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { TypographyContext } from './context';

export type InferTextProps<T extends TextElement> =
	T extends keyof JSX.IntrinsicElements
		? JSX.IntrinsicElements[T]
		: JSX.IntrinsicElements['span'];

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

export interface TextProps<T extends TextElement> {
	as?: T;
	children: JSX.Element;
}

export function Text<T extends TextElement>(
	props: InferTextProps<T> & TextProps<T>,
) {
	const [local, other] = splitProps(props, ['as', 'children']);
	const elementType = () => local.as ?? ('span' as T);

	return (
		<Dynamic<TextElement>
			component={elementType()}
			{...(other as unknown as TextProps<T>)}
		>
			<TypographyContext.Provider value>
				{local.children}
			</TypographyContext.Provider>
		</Dynamic>
	);
}
