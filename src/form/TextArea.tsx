import { Show, splitProps } from 'solid-js';
import { TextField } from '@kobalte/core';
import { hasElement } from '../helpers';
import { FieldDescription, FieldError, FieldLabel } from './Field';
import { getError, getValidationState } from './helpers';
import { input } from './styles';
import type { CommonFieldProps, CommonInputProps } from './types';

export interface TextAreaProps
	extends Omit<TextField.TextFieldRootOptions, 'onChange'>,
		TextField.TextFieldTextAreaOptions,
		CommonFieldProps<string>,
		CommonInputProps<HTMLTextAreaElement> {
	maxLength?: number | string;
	minLength?: number | string;
	placeholder?: string;
	rows?: number | string;
	onValueChange?: (value: string) => void;
}

export function TextArea(props: TextAreaProps) {
	const [field, native, root] = splitProps(
		props,
		['description', 'state', 'label'],
		['onBlur', 'onChange', 'onInput', 'onFocus', 'maxLength', 'minLength', 'placeholder', 'rows'],
	);
	const className = () => input({ type: 'textarea', size: 'df' });

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

			<TextField.TextArea {...native} class={className()} />

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
