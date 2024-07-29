import { splitProps, type ValidComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cx } from 'class-variance-authority';
import { Button, Link } from '@kobalte/core';
import { Icon, type IconProps } from './Icon';

export interface IconButtonProps extends IconProps, Button.ButtonRootOptions {
	as?: ValidComponent;
	href?: string;
	download?: string;
	onClick?: () => void;
	size?: 'df' | 'sm';
}

export function IconButton(props: IconButtonProps) {
	const [icon, rest] = splitProps(props, ['icon', 'mask', 'maskId']);
	const isLink = () => !!props.href;

	return (
		<Dynamic
			component={props.as ?? (isLink() ? Link.Root : Button.Root)}
			{...rest}
			class={cx(
				'rounded dark:hover:bg-space-800/50 dark:text-space-100 dark:hover:text-space-50',
				props.size === 'sm' ? 'px-0.5 py-0.5 w-3 text-sm' : 'px-1 py-0.5 w-4',
			)}
		>
			<Icon {...icon} />
		</Dynamic>
	);
}
