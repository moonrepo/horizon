import type { JSXElement } from 'solid-js';

export interface CodeProps {
	children: JSXElement;
}

export function Code(props: CodeProps) {
	return (
		<code class="inline-block px-1 py-0.5 text-sm rounded bg-black/50">
			{props.children}
		</code>
	);
}
