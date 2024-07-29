import type { JSX, JSXElement } from 'solid-js';
import type { FieldState } from './Field';

export interface CommonFieldProps<T> {
	description?: JSXElement;
	label?: JSXElement;
	state?: FieldState<T>;
}

export interface CommonInputProps<T>
	extends Pick<
		JSX.CustomEventHandlersCamelCase<T>,
		'onBlur' | 'onChange' | 'onFocus' | 'onInput'
	> {}

export type InputSize = 'df' | 'lg' | 'sm';
