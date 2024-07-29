import type { JSXElement } from 'solid-js';
import { Heading } from '../typography';

export interface TableSectionProps {
	actions?: JSXElement;
	children: JSXElement;
	title: JSXElement;
}

export function TableSection(props: TableSectionProps) {
	return (
		<section class="mt-8">
			<header class="flex flex-col justify-between items-start gap-2 mb-3 md:flex-row md:items-center">
				<Heading level={4}>{props.title}</Heading>
				{props.actions}
			</header>

			{props.children}
		</section>
	);
}
