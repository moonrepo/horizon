import { As, DropdownMenu as DM } from '@kobalte/core';
import { type JSXElement, Show } from 'solid-js';
import { hasElement } from '../helpers';
import { Icon, type IconLookup } from '../icons';
import { Text } from '../typography';
import { menuItem } from './styles';

export interface MenuItemProps extends DM.DropdownMenuItemOptions {
	children: JSXElement;
	description?: string;
	icon?: IconLookup;
}

export function MenuItem(props: MenuItemProps) {
	return (
		<DM.Item {...props} asChild class={menuItem({ type: 'flex' })}>
			<As component={props.disabled ? 'div' : 'button'}>
				<Show when={hasElement(props, 'icon')}>
					<DM.ItemIndicator class="text-base mr-1 w-3 text-center" forceMount>
						<Icon icon={props.icon!} />
					</DM.ItemIndicator>
				</Show>

				<DM.ItemLabel class="grow">{props.children}</DM.ItemLabel>

				<Show when={hasElement(props, 'description')}>
					<DM.ItemDescription class="grow-0 ml-1">
						<Text size="sm" variant="muted">
							{props.description}
						</Text>
					</DM.ItemDescription>
				</Show>
			</As>
		</DM.Item>
	);
}
