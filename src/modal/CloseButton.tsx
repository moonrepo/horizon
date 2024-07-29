import { As, type Button as BB, Dialog } from '@kobalte/core';
import type { JSXElement } from 'solid-js';
import { Button } from '../button';

export interface ModalCloseButtonProps extends BB.ButtonRootOptions {
	children?: JSXElement;
	onClick?: () => void;
}

export function ModalCloseButton(props: ModalCloseButtonProps) {
	return (
		<Dialog.CloseButton {...props} asChild>
			<As component={Button} variant="secondary">
				{props.children ?? 'Cancel'}
			</As>
		</Dialog.CloseButton>
	);
}
