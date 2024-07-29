import { Show, splitProps } from 'solid-js';
import { As, type AsChildProp, Select as Sel } from '@kobalte/core';
import { hasElement } from '../helpers';
import { Icon } from '../icons/Icon';
import { faCaretDown } from '../icons/solid';
import { menu, menuItem } from '../menu/styles';
import { Text } from '../typography/Text';
import { FieldDescription, FieldError, FieldLabel } from './Field';
import { getError, getValidationState } from './helpers';
import { input } from './styles';
import type { CommonFieldProps, CommonInputProps, InputSize } from './types';

export interface OptionGroup<T = string> {
	label: string;
	options: Option<T>[];
}

export interface Option<T = string> {
	description?: string;
	disabled?: boolean;
	label?: string;
	value: T;
}

// kobalte types are broken
type TempSelectProps<O> = AsChildProp & {
	value?: O;
	defaultValue?: O;
	onValueChange?: (value: O) => void;
	multiple?: boolean;
	disabled?: boolean;
	required?: boolean;
	modal?: boolean;
};

export interface SelectProps
	extends TempSelectProps<Option>,
		CommonFieldProps<string>,
		CommonInputProps<HTMLSelectElement> {
	options: (Option | OptionGroup)[];
	placeholder?: string;
	size?: InputSize;
}

export function Select(props: SelectProps) {
	const [field, styles, native, root] = splitProps(
		props,
		['description', 'state', 'label', 'options'],
		['size'],
		['onBlur', 'onChange', 'onInput', 'onFocus', 'placeholder'],
	);
	const className = () => input({ size: styles.size ?? 'df', type: 'select' });

	return (
		// @ts-expect-error Kobalte types are broken
		<Sel.Root<Option, OptionGroup>
			{...root}
			class="group"
			options={props.options}
			optionValue="value"
			optionTextValue="label"
			optionDisabled="disabled"
			optionGroupChildren="options"
			placeholder={native.placeholder ?? 'Select a value'}
			onChange={root.onValueChange}
			itemComponent={(data) => {
				const option = data.item.rawValue;

				return (
					<Sel.Item
						asChild
						item={data.item}
						class={menuItem({ type: 'block' })}
						value={option.value}
					>
						<As component="button" disabled={option.disabled}>
							<Sel.ItemLabel>{option.label}</Sel.ItemLabel>

							<Show when={hasElement(option, 'description')}>
								<Text size="sm" variant="muted">
									<Sel.ItemDescription>{option.description}</Sel.ItemDescription>
								</Text>
							</Show>
						</As>
					</Sel.Item>
				);
			}}
			sectionComponent={(data) => (
				<div class="mt-1 first:mt-0 p-1">
					<Text size="sm" variant="muted" transform="uppercase" weight="bold">
						{data.section.rawValue.label}
					</Text>
				</div>
			)}
			validationState={getValidationState(field.state)}
		>
			<Show when={hasElement(field, 'label')}>
				<FieldLabel hasDescription={hasElement(field, 'description')}>
					<Sel.Label>{field.label}</Sel.Label>
				</FieldLabel>
			</Show>

			<Show when={hasElement(field, 'description')}>
				<FieldDescription>
					<Sel.Description>{field.description}</Sel.Description>
				</FieldDescription>
			</Show>

			<Sel.Trigger class={className()} disabled={root.disabled}>
				<Sel.Value<Option>>{(data) => <span>{data.selectedOption()?.label}</span>}</Sel.Value>

				<Sel.Icon class="ml-1 grow-0">
					<Icon icon={faCaretDown} />
				</Sel.Icon>
			</Sel.Trigger>

			<Sel.HiddenSelect {...native} />

			<Show when={getError(field.state)} keyed>
				{(error: string) => (
					<FieldError>
						<Sel.ErrorMessage>{error}</Sel.ErrorMessage>
					</FieldError>
				)}
			</Show>

			<Sel.Portal>
				<Sel.Content class={menu()}>
					<Sel.Listbox />
				</Sel.Content>
			</Sel.Portal>
		</Sel.Root>
	);
}
