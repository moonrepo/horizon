import type { JSXElement } from 'solid-js';
import { Container } from '../layout';

export interface HeaderProps {
	children: JSXElement;
	controls?: JSXElement;
	logo?: JSXElement;
}

export function Header(props: HeaderProps) {
	return (
		<header class="relative p-2 border-b border-solid dark:border-space-800" id="header">
			<Container class="flex justify-start">
				{props.logo}
				{props.children}
				{props.controls}
			</Container>
		</header>
	);
}
