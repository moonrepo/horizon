import { type JSXElement, Show, splitProps, type ValidComponent } from 'solid-js';
import { cva } from 'class-variance-authority';
import { As, Link as BaseLink } from '@kobalte/core';
import { hasElement } from '../helpers';
import { Affix } from '../internal/Affix';
import type { CommonProps } from '../types';
import type { TypographyVariant } from './types';

export interface LinkProps extends BaseLink.LinkRootOptions, CommonProps<HTMLAnchorElement> {
	after?: JSXElement;
	as?: ValidComponent;
	before?: JSXElement;
	children: JSXElement;
	href?: string;
	variant?: TypographyVariant;
	openInNewWindow?: boolean;
}

export const classes = cva('m-0 p-0 inline-flex', {
	variants: {
		variant: {
			default: 'dark:text-moon-300 dark:hover:text-moon-200',
			muted:
				'text-fg-light/60 hover:text-fg-light/50 dark:text-fg-dark/60 dark:hover:text-fg-dark/70',
		},
	},
});

export function Link(props: LinkProps) {
	const [styles, local, rest] = splitProps(
		props,
		['variant'],
		['as', 'after', 'before', 'openInNewWindow'],
	);
	const className = () => classes({ variant: styles.variant ?? 'default' });
	const isButton = () => !rest.href && !!rest.onClick;

	return (
		<BaseLink.Root
			{...(local.openInNewWindow && !isButton()
				? {
						rel: 'noopener noreferrer',
						target: '_blank',
					}
				: {})}
			{...rest}
			asChild
			class={className()}
		>
			<As component={(local.as as 'a') ?? (isButton() ? 'button' : 'a')}>
				<Show when={hasElement(local, 'before')}>
					<Affix type="prefix">{local.before}</Affix>
				</Show>

				<span>{props.children}</span>

				<Show when={hasElement(local, 'after')}>
					<Affix type="suffix">{local.after}</Affix>
				</Show>
			</As>
		</BaseLink.Root>
	);
}
