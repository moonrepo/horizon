import type { JSXElement } from 'solid-js';

export interface CardGridProps {
	children: JSXElement;
}

export function CardGrid(props: CardGridProps) {
	return (
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
			{props.children}
		</div>
	);
}
