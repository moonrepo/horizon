import { createSignal, type JSXElement, Show } from 'solid-js';
import { Popover } from '@kobalte/core';
import { Text } from '../typography';

export interface TooltipProps extends Popover.PopoverRootOptions {
	children: JSXElement;
	class?: string;
	content: JSXElement;
	title?: string;
}

export function Tooltip(props: TooltipProps) {
	const [isOpen, setOpen] = createSignal(false);
	const [trigger, setTrigger] = createSignal<HTMLSpanElement>();

	return (
		<Popover.Root open={isOpen()} anchorRef={trigger}>
			<span
				ref={setTrigger}
				class={props.class}
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
			>
				{props.children}
			</span>

			<Popover.Portal>
				<Popover.Content class="z-40 p-1.5 max-w-[300px] bg-black/90 text-fg-dark rounded shadow outline-none">
					<Popover.Arrow />

					<Show when={!!props.title}>
						<Popover.Title>{props.title}</Popover.Title>
					</Show>

					<Popover.Description>
						<Text size="sm">{props.content}</Text>
					</Popover.Description>
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
}
