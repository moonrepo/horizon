import { For, Show, type ValidComponent } from 'solid-js';
import { As, Breadcrumbs as BC } from '@kobalte/core';
import { Icon } from '../icons';
import { faChevronRight } from '../icons/solid';
import { Text } from '../typography';
import { classes as linkClasses } from '../typography/Link';

export interface Breadcrumb {
	label: string;
	href?: string;
}

export interface BreadcrumbsProps {
	as?: ValidComponent;
	items: Breadcrumb[];
}

export function Breadcrumbs(props: BreadcrumbsProps) {
	return (
		<BC.Root separator={<Icon icon={faChevronRight} />}>
			<ol class="flex flex-row gap-1">
				<For each={props.items}>
					{(item, i) => (
						<li class="flex items-center gap-1">
							<BC.Link asChild href={item.href} class={linkClasses({ variant: 'default' })}>
								<As component={props.as}>{item.label}</As>
							</BC.Link>

							<Show when={i() !== props.items.length - 1}>
								<Text size="sm" variant="muted">
									<BC.Separator />
								</Text>
							</Show>
						</li>
					)}
				</For>
			</ol>
		</BC.Root>
	);
}
