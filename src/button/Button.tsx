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
	as?: ValidComponent;
	after?: JSXElement;
	before?: JSXElement;
	children: JSXElement;
	class?: string;
	href?: string;
	size?: ButtonSize;
	type?: 'button' | 'reset' | 'submit';
	variant?: ButtonVariant;
	openInNewWindow?: boolean;
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
	const [ui, local, rest] = splitProps(
		props,
		['class', 'size', 'variant'],
		['after', 'before', 'openInNewWindow'],
	);
	const className = () =>
		makeClass({
			class: ui.class,
			size: ui.size,
			variant: ui.variant,
		});
	const isLink = () => !!rest.href;

	return (
		<BaseButton.Root
			{...(isLink() &&
				local.openInNewWindow && {
					rel: 'noopener noreferrer',
					target: '_blank',
				})}
			{...rest}
			asChild
			class={className()}
		>
			<As component={rest.as ?? (isLink() ? 'a' : 'button')}>
				<Show when={local.before}>
					<Affix type="prefix">{local.before}</Affix>
				</Show>

				<span>{rest.children}</span>

				<Show when={local.after}>
					<Affix type="suffix">{local.after}</Affix>
				</Show>
			</As>
		</BaseButton.Root>
	);
}
