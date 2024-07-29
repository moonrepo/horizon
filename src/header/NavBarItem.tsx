import { cx } from 'class-variance-authority';
import type { JSXElement, ValidComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

export interface NavBarItemProps {
	as?: ValidComponent;
	children: JSXElement;
	class?: string;
	href?: string;
	isActive?: boolean;
	onClick?: () => void;
}

export function NavBarItem(props: NavBarItemProps) {
	const isLink = () => !!props.href;

	return (
		<li class={props.class}>
			<Dynamic
				component={props.as ?? (isLink() ? 'a' : 'button')}
				href={props.href}
				class={cx(
					'inline-block m-0 font-sans font-medium text-base py-1.5 px-1.5 sm:px-2 rounded',
					props.isActive
						? 'dark:bg-space-800 dark:hover:bg-space-700'
						: 'dark:hover:bg-space-800',
				)}
				onClick={props.onClick}
				data-active={props.isActive}
			>
				{props.children}
			</Dynamic>
		</li>
	);
}
