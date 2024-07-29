export type TypographyAlign = 'center' | 'end' | 'justify' | 'start';

export type TypographyOverflow = 'clip' | 'ellipsis' | 'truncate' | 'wrap';

export type TypographyTransform = 'capitalize' | 'lowercase' | 'uppercase';

export type TypographyWeight = 'black' | 'bold' | 'light' | 'medium' | 'normal' | 'thin';

export type TypographyVariant = 'muted';

export interface TypographyProps {
	/**
	 * Align the text on the horizontal axis.
	 * @default start
	 */
	align?: TypographyAlign;
	/**
	 * Customize how the text will overflow its current container.
	 * @default wrap
	 */
	overflow?: TypographyOverflow;
	/**
	 * Apply a transformation to the entire string of text.
	 */
	transform?: TypographyTransform;
	/**
	 * Apply a light or bold weight to the entire string of text.
	 * @default normal
	 */
	weight?: TypographyWeight;
	/**
	 * Apply a style variant to the text.
	 */
	variant?: TypographyVariant;
}
