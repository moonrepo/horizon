import { As, Dialog } from '@kobalte/core';
import { cx } from 'class-variance-authority';
import { type JSXElement, Show, splitProps } from 'solid-js';
import { hasElement } from '../helpers';
import { IconButton } from '../icons';
import { faClose } from '../icons/solid';
import { Heading } from '../typography';

export type CommonModalProps = Dialog.DialogRootOptions;

export interface ModalProps extends Dialog.DialogRootOptions {
	children: JSXElement;
	description?: JSXElement;
	title: JSXElement;
}

export function Modal(props: ModalProps) {
	const [local, rest] = splitProps(props, ['description', 'title']);
	const hasDescription = () => hasElement(local, 'description');

	const handleOpenChange = (state: boolean) => {
		rest.onOpenChange?.(state);

		// BUG: When `isModal` is set, it doesn't remove the html styles!
		if (rest.modal && !state) {
			document.documentElement.style.removeProperty('overflow');
		}
	};

	return (
		<Dialog.Root modal={false} {...rest} onOpenChange={handleOpenChange}>
			<Dialog.Portal>
				<Dialog.Overlay class="fixed inset-0 z-20 bg-black/70" />

				<div class="fixed inset-0 z-30 flex justify-center items-center p-2 overflow-auto">
					<Dialog.Content class="dark:bg-space-800 rounded-lg p-2 w-full max-w-xl md:p-4">
						<header
							class={cx(
								'flex justify-between items-start',
								hasDescription() ? 'mb-2' : 'mb-4',
							)}
						>
							<Heading level={6}>
								<Dialog.Title>{local.title}</Dialog.Title>
							</Heading>

							<Dialog.CloseButton asChild>
								<As component={IconButton} icon={faClose} />
							</Dialog.CloseButton>
						</header>

						<Show when={hasDescription()}>
							<Dialog.Description class="mb-4">
								{local.description}
							</Dialog.Description>
						</Show>

						<div>{rest.children}</div>
					</Dialog.Content>
				</div>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
