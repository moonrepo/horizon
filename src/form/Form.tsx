import { For, type JSXElement } from 'solid-js';
import { Alert } from '../alert';

export interface FormActionsProps {
	children: JSXElement;
}

export function FormActions(props: FormActionsProps) {
	return <footer class="mt-4 flex justify-end">{props.children}</footer>;
}

export interface FormErrorProps {
	errors: string[];
}

export function FormError(props: FormErrorProps) {
	return (
		<Alert class="mt-4" type="failure">
			<ul>
				<For each={props.errors}>{(error) => <li>{error}</li>}</For>
			</ul>
		</Alert>
	);
}
