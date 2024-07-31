import { Icon as BaseIcon, type IconifyIconProps } from '@iconify-icon/solid';

declare global {
	interface HorizonIcons {
		name?: string;
	}
}

export interface IconProps extends IconifyIconProps, HorizonIcons {}

// https://iconify.design/docs/iconify-icon/
export function Icon(props: IconProps) {
	return (
		<BaseIcon
			width="1.25em"
			height="1.25em"
			{...props}
			icon={props.name ?? props.icon}
		/>
	);
}
