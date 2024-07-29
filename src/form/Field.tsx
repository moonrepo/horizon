import type { JSXElement } from 'solid-js';
import { cx } from 'class-variance-authority';
import { Text } from '../typography/Text';

export interface FieldState<T = unknown> {
	active: boolean;
	dirty: boolean;
	error: string | undefined;
	name?: string;
	value?: T;
	touched: boolean;
	props?: Record<string, unknown>;
}

export interface FieldPartProps {
	children: JSXElement;
	class?: string;
}

export interface FieldLabelProps extends FieldPartProps {
	hasDescription?: boolean;
}

export function FieldLabel(props: FieldLabelProps) {
	return (
		<div class={cx(props.hasDescription ? 'mb-0' : 'mb-1.5', props.class)}>
			<Text weight="medium">{props.children}</Text>
		</div>
	);
}

export function FieldDescription(props: FieldPartProps) {
	return (
		<div class={props.class ?? 'mb-1.5'}>
			<Text size="sm" variant="muted">
				{props.children}
			</Text>
		</div>
	);
}

export function FieldError(props: FieldPartProps) {
	return <div class={cx('mt-1.5 dark:text-meteor-400', props.class)}>{props.children}</div>;
}
