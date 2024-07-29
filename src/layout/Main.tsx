import type { JSXElement } from 'solid-js';
import { Container } from './Container';

export interface MainProps {
	children: JSXElement;
}

export function Main(props: MainProps) {
	return (
		<main class="relative">
			<Container class="pt-4 pb-8">{props.children}</Container>
		</main>
	);
}
