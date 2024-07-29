import { Show, splitProps } from 'solid-js';
import { TextField } from '@kobalte/core';
import { hasElement } from '../helpers';
import { FieldDescription, FieldError, FieldLabel } from './Field';
import { getError, getValidationState } from './helpers';
import { input } from './styles';
import type { CommonFieldProps, CommonInputProps, InputSize } from './types';

export interface InputProps
	extends Omit<TextField.TextFieldRootOptions, 'onChange'>,
		CommonFieldProps<string>,
		CommonInputProps<HTMLInputElement> {
	placeholder?: string;
	size?: InputSize;
	type?: string;
	onValueChange?: (value: string) => void;
}

export function Input(props: InputProps) {
	const [field, styles, native, root] = splitProps(
		props,
		['description', 'state', 'label'],
		['size'],
		['onBlur', 'onChange', 'onInput', 'onFocus', 'placeholder', 'type'],
	);
	const className = () =>
		input({
			size: styles.size ?? 'df',
			type: 'input',
		});

	return (
		<TextField.Root
			{...root}
			class="group"
			onChange={root.onValueChange}
			validationState={getValidationState(field.state)}
		>
			<Show when={hasElement(field, 'label')}>
				<FieldLabel hasDescription={hasElement(field, 'description')}>
					<TextField.Label>{field.label}</TextField.Label>
				</FieldLabel>
			</Show>

			<Show when={hasElement(field, 'description')}>
				<FieldDescription>
					<TextField.Description>{field.description}</TextField.Description>
				</FieldDescription>
			</Show>

			<TextField.Input {...native} class={className()} />

			<Show when={getError(field.state)} keyed>
				{(error: string) => (
					<FieldError>
						<TextField.ErrorMessage>{error}</TextField.ErrorMessage>
					</FieldError>
				)}
			</Show>
		</TextField.Root>
	);
}
