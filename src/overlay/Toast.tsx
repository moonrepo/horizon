import { type JSXElement, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
import { cx } from 'class-variance-authority';
import { As, Toast as Bread, toaster } from '@kobalte/core';
import { IconButton } from '../icons';
import { faClose } from '../icons/solid';
import type { StatusType } from '../types';
import { toast } from './styles';

export { toaster };

export interface ToastProps extends Bread.ToastRootOptions {
	description?: JSXElement;
	title?: JSXElement;
	type?: StatusType;
}

export function Toast(props: ToastProps) {
	const className = () => toast({ type: props.type ?? 'default' });
	const hasTitleAndDesc = () => !!props.title && !!props.description;

	return (
		<Bread.Root class={className()} toastId={props.toastId}>
			<div class="flex flex-row justify-between items-center text-sm">
				<div>
					<Show when={props.title}>
						<Bread.Title class="font-semibold">{props.title}</Bread.Title>
					</Show>

					<Show when={props.description}>
						<Bread.Description>{props.description}</Bread.Description>
					</Show>
				</div>

				<div class={cx('grow-0 ml-2', hasTitleAndDesc() ? 'self-start' : '')}>
					<Bread.CloseButton asChild>
						<As component={IconButton} icon={faClose} size="sm" />
					</Bread.CloseButton>
				</div>
			</div>

			<Bread.ProgressTrack class="h-[4px] w-full mt-1.5 rounded">
				<Bread.ProgressFill
					class="bg-white/50 h-full rounded"
					style={{ width: 'var(--kb-toast-progress-fill-width)', transition: 'width 250ms linear' }}
				/>
			</Bread.ProgressTrack>
		</Bread.Root>
	);
}

export function Toaster() {
	return (
		<Portal>
			<Bread.Region>
				<Bread.List class="fixed bottom-0 right-0 p-2 flex flex-col gap-2 w-[400px] list-none z-50 outline-none" />
			</Bread.Region>
		</Portal>
	);
}
