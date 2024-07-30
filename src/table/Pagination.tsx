/* eslint-disable solid/reactivity */
/* eslint-disable no-magic-numbers */

import { cx } from 'class-variance-authority';
import { For, type JSXElement, Match, Show, Switch } from 'solid-js';
import { Icon } from '../icons';
import { faChevronLeft, faChevronRight } from '../icons/solid';
import { Text } from '../typography';

export interface PaginationProps {
	currentPage: number;
	hasNext?: boolean;
	hasPrevious?: boolean;
	onPage: (page: number) => void;
	totalResults?: number;
	totalPages: number;
}

export function Pagination(props: PaginationProps) {
	const renderButton = (page: number, child?: JSXElement) => (
		<li>
			<button
				class={cx(
					'inline-block py-1 px-2 rounded',
					props.currentPage === page
						? 'dark:bg-space-800 dark:hover:bg-space-700'
						: 'dark:hover:bg-space-800',
				)}
				type="button"
				onClick={() => void props.onPage(page)}
			>
				{child ?? page}
			</button>
		</li>
	);

	const tailEnd = () => props.totalPages - 5;
	const isInHead = () => props.currentPage <= 5;
	const isInTail = () => props.currentPage >= tailEnd();

	return (
		<div class="flex justify-center mt-4">
			<ol class="flex items-stretch gap-2">
				<Show when={props.hasPrevious}>
					{renderButton(props.currentPage - 1, <Icon icon={faChevronLeft} />)}
				</Show>

				<Show when={isInTail() && props.totalPages > 6}>
					{renderButton(1)}

					<li>
						<span class="inline-block py-1 px-2">
							<Text variant="muted">...</Text>
						</span>
					</li>
				</Show>

				<Switch>
					{/* HEAD */}
					<Match when={isInHead()}>
						<For each={Array.from({ length: Math.min(5, props.totalPages) })}>
							{(_, i) => renderButton(i() + 1)}
						</For>
					</Match>

					{/* TAIL */}
					<Match when={isInTail()}>
						<For each={Array.from({ length: Math.min(5, props.totalPages) })}>
							{(_, i) => renderButton(i() + tailEnd() + 1)}
						</For>
					</Match>
				</Switch>

				<Show when={isInHead() && props.totalPages > 6}>
					<li>
						<span class="inline-block py-1 px-2">
							<Text variant="muted">...</Text>
						</span>
					</li>

					{renderButton(props.totalPages)}
				</Show>

				<Show when={props.hasNext}>
					{renderButton(props.currentPage + 1, <Icon icon={faChevronRight} />)}
				</Show>
			</ol>
		</div>
	);
}
