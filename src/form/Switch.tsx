import { Switch as SW } from '@kobalte/core';
import { type JSXElement, Show, splitProps } from 'solid-js';
import { hasElement } from '../helpers';
import { FieldDescription, FieldError } from './Field';
import { getError, getValidationState } from './helpers';
import { input, toggle } from './styles';
import type { CommonFieldProps, CommonInputProps } from './types';

export interface SwitchProps
	extends Omit<SW.SwitchRootOptions, 'children' | 'onChange'>,
		Omit<CommonFieldProps<boolean>, 'label'>,
		CommonInputProps<HTMLInputElement> {
	label: JSXElement;
	onCheckedChange?: (state: boolean) => void;
}

export function Switch(props: SwitchProps) {
	const [field, native, root] = splitProps(
		props,
		['description', 'state', 'label'],
		['onBlur', 'onChange', 'onInput', 'onFocus'],
	);
	const className = () => input({ type: 'switch' });
	const thumbClassName = () => toggle();

	return (
		<div>
			<SW.Root
				{...root}
				class="flex items-center group"
				onChange={props.onCheckedChange}
				validationState={getValidationState(field.state)}
			>
				<SW.Input {...native} />

				<SW.Control class={className()}>
					<SW.Thumb class={thumbClassName()} />
				</SW.Control>

				<SW.Label class="ml-2">{field.label}</SW.Label>
			</SW.Root>

			<Show when={hasElement(field, 'description')}>
				<FieldDescription class="ml-10">{field.description}</FieldDescription>
			</Show>

			<Show when={getError(field.state)} keyed>
				{(error: string) => <FieldError>{error}</FieldError>}
			</Show>
		</div>
	);
}
