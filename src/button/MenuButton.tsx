import { type JSXElement, splitProps } from 'solid-js';
import { As, DropdownMenu as DM } from '@kobalte/core';
import { Icon } from '../icons';
import { faChevronDown } from '../icons/solid';
import { menu } from '../menu/styles';
import { Button, type ButtonProps } from './Button';

export interface MenuButtonProps
	extends DM.DropdownMenuRootOptions,
		Pick<ButtonProps, 'size' | 'variant'> {
	children: JSXElement;
	label: JSXElement;
}

export function MenuButton(props: MenuButtonProps) {
	const [button, local, rest] = splitProps(props, ['size', 'variant'], ['children', 'label']);

	return (
		<DM.Root {...rest}>
			<DM.Trigger {...button} asChild>
				<As
					component={Button}
					after={
						<DM.Icon
							class="ui-expanded:rotate-90 transition-transform"
							style={{ '--tw-rotate': '-90deg' }}
						>
							<Icon icon={faChevronDown} />
						</DM.Icon>
					}
				>
					{local.label}
				</As>
			</DM.Trigger>

			<DM.Portal>
				<DM.Content class={menu({ class: 'mt-1 min-w-[250px]' })}>{local.children}</DM.Content>
			</DM.Portal>
		</DM.Root>
	);
}
