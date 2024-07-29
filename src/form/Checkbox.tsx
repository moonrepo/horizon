import { Checkbox as CB } from '@kobalte/core';
import { type JSXElement, Show, splitProps } from 'solid-js';
import { hasElement } from '../helpers';
import { Icon } from '../icons/Icon';
import { faCheck } from '../icons/solid';
import { FieldDescription, FieldError } from './Field';
import { getError, getValidationState } from './helpers';
import { input } from './styles';
import type { CommonFieldProps, CommonInputProps } from './types';

export interface CheckboxProps
	extends Omit<CB.CheckboxRootOptions, 'children' | 'onChange'>,
		Omit<CommonFieldProps<boolean>, 'label'>,
		CommonInputProps<HTMLInputElement> {
	label: JSXElement;
	onCheckedChange?: (state: boolean) => void;
}

export function Checkbox(props: CheckboxProps) {
	const [field, native, root] = splitProps(
		props,
		['description', 'state', 'label'],
		['onBlur', 'onChange', 'onInput', 'onFocus'],
	);
	const className = () => input({ type: 'checkbox' });

	return (
		<div>
			<CB.Root
				{...root}
				class="flex items-center group"
				onChange={root.onCheckedChange}
				validationState={getValidationState(field.state)}
			>
				<CB.Input {...native} />

				<CB.Control class={className()}>
					<CB.Indicator>
						<Icon icon={faCheck} />
					</CB.Indicator>
				</CB.Control>

				<CB.Label class="ml-2">{field.label}</CB.Label>
			</CB.Root>

			<Show when={hasElement(field, 'description')}>
				<FieldDescription class="ml-6">{field.description}</FieldDescription>
			</Show>

			<Show when={getError(field.state)} keyed>
				{(error: string) => <FieldError class="ml-6">{error}</FieldError>}
			</Show>
		</div>
	);
}
