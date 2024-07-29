import { As, Button as BaseButton } from '@kobalte/core';
import { cva } from 'class-variance-authority';
import {
	type JSXElement,
	Show,
	type ValidComponent,
	splitProps,
} from 'solid-js';
import { hasElement } from '../helpers';
import { Affix } from '../internal/Affix';
import type { CommonProps } from '../types';

export type ButtonSize = 'df' | 'lg' | 'sm';

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

const classes = cva(
	'm-0 font-sans font-medium leading-none inline-flex border border-solid transition-colors ui-disabled:opacity-60',
	{
		variants: {
			size: {
				sm: 'text-sm p-1.5 rounded',
				df: 'text-base p-2 rounded',
				lg: 'text-lg p-3 rounded-lg',
			},
			variant: {
				primary:
					'dark:bg-moon-600 dark:hover:ui-not-disabled:bg-moon-500 dark:border-moon-600 dark:hover:ui-not-disabled:border-moon-500 dark:text-fg-dark dark:hover:ui-not-disabled:text-white',
				secondary:
					'dark:bg-space-600 dark:hover:ui-not-disabled:bg-space-500 dark:border-space-600 dark:hover:ui-not-disabled:border-space-500 dark:text-fg-dark dark:hover:ui-not-disabled:text-white',
				tertiary:
					'dark:bg-space-100/25 dark:hover:bg-space-100/40 dark:border-space-100/25 dark:hover:border-space-100/40',
				danger:
					'dark:bg-meteor-600 dark:hover:ui-not-disabled:bg-meteor-500 dark:border-meteor-600 dark:hover:ui-not-disabled:border-meteor-500 dark:text-fg-dark dark:hover:ui-not-disabled:text-white',
			},
		},
		defaultVariants: {
			size: 'df',
			variant: 'primary',
		},
	},
);

export function Button(props: ButtonProps) {
	const [styles, local, rest] = splitProps(
		props,
		['class', 'size', 'variant'],
		['after', 'before', 'openInNewWindow'],
	);
	const className = () =>
		classes({
			class: styles.class,
			size: styles.size,
			variant: styles.variant,
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
				<Show when={hasElement(local, 'before')}>
					<Affix type="prefix">{local.before}</Affix>
				</Show>

				<span>{rest.children}</span>

				<Show when={hasElement(local, 'after')}>
					<Affix type="suffix">{local.after}</Affix>
				</Show>
			</As>
		</BaseButton.Root>
	);
}
