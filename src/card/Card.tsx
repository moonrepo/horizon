import type { JSXElement, ValidComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cx } from 'class-variance-authority';

export interface CardProps {
	as?: ValidComponent;
	children: JSXElement;
	compact?: boolean;
	href?: string;
	onClick?: () => void;
}

export function Card(props: CardProps) {
	const isLink = () => !!props.href;
	const isButton = () => !!props.onClick;

	// eslint-disable-next-line no-nested-ternary
	const component = () => (isLink() ? 'a' : isButton() ? 'button' : 'div');

	return (
		<Dynamic
			component={props.as ?? component()}
			class={cx(
				'rounded-lg dark:bg-space-800',
				isLink() || isButton() ? 'dark:hover:bg-space-700' : '',
				props.compact ? 'p-1 md:p-3' : 'p-2 md:p-4',
			)}
			href={props.href}
			onClick={props.onClick}
		>
			{props.children}
		</Dynamic>
	);
}
