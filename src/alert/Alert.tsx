import { Alert as Al } from '@kobalte/core';
import { type JSXElement, Show } from 'solid-js';
import { hasElement } from '../helpers';
import { Stack } from '../layout';
import type { StatusType } from '../types';
import { Heading } from '../typography';
import { alert } from './styles';

export interface AlertProps {
	actions?: JSXElement;
	children: JSXElement;
	class?: string;
	title?: JSXElement;
	type?: StatusType;
}

export function Alert(props: AlertProps) {
	const className = () =>
		alert({ class: props.class, type: props.type ?? 'default' });

	return (
		<Al.Root class={className()}>
			<Stack>
				<Show when={hasElement(props, 'title')}>
					<header>
						<Heading level={6}>{props.title}</Heading>
					</header>
				</Show>

				<div>{props.children}</div>

				<Show when={hasElement(props, 'actions')}>
					<footer>{props.actions}</footer>
				</Show>
			</Stack>
		</Al.Root>
	);
}
