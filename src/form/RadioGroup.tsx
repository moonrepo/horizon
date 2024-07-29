import { RadioGroup as RG } from '@kobalte/core';
import { type JSXElement, Show, splitProps } from 'solid-js';
import { hasElement } from '../helpers';
import { Icon } from '../icons/Icon';
import { faCircleSmall } from '../icons/solid';
import { FieldDescription, FieldError, FieldLabel } from './Field';
import { getError, getValidationState } from './helpers';
import { input } from './styles';
import type { CommonFieldProps } from './types';

interface RadioProps extends RG.RadioGroupItemOptions {
	label?: JSXElement;
}

function Radio(props: RadioProps) {
	const className = () => input({ type: 'radio' });

	return (
		<RG.Item {...props} class="flex items-center group">
			<RG.ItemInput />

			<RG.ItemControl class={className()}>
				<RG.ItemIndicator>
					<Icon icon={faCircleSmall} />
				</RG.ItemIndicator>
			</RG.ItemControl>

			<RG.ItemLabel class="ml-2">{props.label ?? props.value}</RG.ItemLabel>
		</RG.Item>
	);
}

export interface RadioGroupProps
	extends Omit<RG.RadioGroupRootOptions, 'onChange'>,
		CommonFieldProps<string> {
	children: (item: typeof Radio) => JSXElement;
	onValueChange?: (value: string) => void;
}

export function RadioGroup(props: RadioGroupProps) {
	const [field, rest] = splitProps(props, [
		'children',
		'description',
		'state',
		'label',
	]);

	return (
		<RG.Root
			{...rest}
			onChange={rest.onValueChange}
			validationState={getValidationState(field.state)}
		>
			<Show when={hasElement(field, 'label')}>
				<FieldLabel hasDescription={hasElement(field, 'description')}>
					<RG.Label>{field.label}</RG.Label>
				</FieldLabel>
			</Show>

			<Show when={hasElement(field, 'description')}>
				<FieldDescription>
					<RG.Description>{field.description}</RG.Description>
				</FieldDescription>
			</Show>

			{field.children(Radio)}

			<Show when={getError(field.state)} keyed>
				{(error: string) => (
					<FieldError>
						<RG.ErrorMessage>{error}</RG.ErrorMessage>
					</FieldError>
				)}
			</Show>
		</RG.Root>
	);
}
