import { As, Button as BaseButton } from '@kobalte/core';
import { cva } from 'class-variance-authority';
import {
	type JSXElement,
	Show,
	type ValidComponent,
	splitProps,
} from 'solid-js';
import { Affix } from '../internal/Affix';
import type { CommonProps } from '../types';

export type ButtonSize = 'md' | 'lg' | 'sm';

export type ButtonVariant = 'danger' | 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps
	extends BaseButton.ButtonRootOptions,
		CommonProps<HTMLButtonElement> {
	after?: JSXElement;
	as?: ValidComponent;
	before?: JSXElement;
	children: JSXElement;
	class?: string;
	href?: string;
	openInNewWindow?: boolean;
	size?: ButtonSize;
	type?: 'button' | 'reset' | 'submit';
	variant?: ButtonVariant;
}

const makeClass = cva('btn', {
	variants: {
		size: {
			sm: 'btn-sm',
			md: 'btn-md',
			lg: 'btn-lg',
		},
		variant: {
			primary: 'btn-primary',
			secondary: 'btn-secondary',
			tertiary: '',
			danger: 'btn-error',
		},
	},
	defaultVariants: {
		size: 'md',
		variant: 'primary',
	},
});

export function Button(props: ButtonProps) {
	const [api, rest] = splitProps(props, [
		'after',
		'as',
		'before',
		'children',
		'class',
		'href',
		'openInNewWindow',
		'size',
		'type',
		'variant',
	]);
	const className = () =>
		makeClass({
			class: api.class,
			size: api.size,
			variant: api.variant,
		});
	const isLink = () => !!api.href;

	return (
		<BaseButton.Root
			{...(isLink() &&
				api.openInNewWindow && {
					rel: 'noopener noreferrer',
					target: '_blank',
				})}
			{...rest}
			asChild
			class={className()}
		>
			<As component={api.as ?? (isLink() ? 'a' : 'button')}>
				<Show when={api.before}>
					<Affix type="prefix">{api.before}</Affix>
				</Show>

				<span>{api.children}</span>

				<Show when={api.after}>
					<Affix type="suffix">{api.after}</Affix>
				</Show>
			</As>
		</BaseButton.Root>
	);
}
