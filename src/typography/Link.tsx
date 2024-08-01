import { As, Link as BaseLink } from '@kobalte/core';
import { cva } from 'class-variance-authority';
import {
	type JSXElement,
	Show,
	type ValidComponent,
	splitProps,
} from 'solid-js';
import { Affix } from '../internal/Affix';
import type { CommonProps } from '../types';
import type { TypographyVariant } from './types';

export interface LinkProps
	extends BaseLink.LinkRootOptions,
		CommonProps<HTMLAnchorElement> {
	after?: JSXElement;
	as?: ValidComponent;
	before?: JSXElement;
	children: JSXElement;
	href?: string;
	variant?: TypographyVariant;
	openInNewWindow?: boolean;
}

export const makeClass = cva('m-0 p-0 inline-flex', {
	variants: {
		variant: {
			default: 'dark:text-moon-300 dark:hover:text-moon-200',
			muted:
				'text-fg-light/60 hover:text-fg-light/50 dark:text-fg-dark/60 dark:hover:text-fg-dark/70',
		},
	},
});

export function Link(props: LinkProps) {
	const [ui, local, rest] = splitProps(
		props,
		['variant'],
		['as', 'after', 'before', 'openInNewWindow'],
	);
	const className = () => makeClass({ variant: ui.variant ?? 'default' });
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
				<Show when={local.before}>
					<Affix type="prefix">{local.before}</Affix>
				</Show>

				<span>{props.children}</span>

				<Show when={local.after}>
					<Affix type="suffix">{local.after}</Affix>
				</Show>
			</As>
		</BaseLink.Root>
	);
}
