import type { JSXElement } from 'solid-js';

export interface NavBarProps {
	children: JSXElement;
}

export function NavBar(props: NavBarProps) {
	return (
		<nav class="grow">
			<ul class="flex flex-row flex-nowrap justify-start items-center gap-1 sm:gap-2">
				{props.children}
			</ul>
		</nav>
	);
}
