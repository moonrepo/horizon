import type { JSX } from 'solid-js';

export type AriaProps = JSX.AriaAttributes;

export interface CommonProps<T>
	extends AriaProps,
		Omit<JSX.DOMAttributes<T>, 'children'> {
	id?: string;
	tabIndex?: number | string;
}

export type StatusType =
	| 'danger'
	| 'default'
	| 'failure'
	| 'muted'
	| 'success'
	| 'warning';
