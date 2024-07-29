import type { JSXElement } from 'solid-js';
import { Icon, type IconProps } from './Icon';

export interface LabeledIconProps extends IconProps {
	children: JSXElement;
	reversed?: boolean;
}

export function LabeledIcon(props: LabeledIconProps) {
	return (
		<span class="inline-flex items-center">
			{!props.reversed && (
				<span class="w-3 text-center mr-1">
					<Icon {...props} />
				</span>
			)}

			<span>{props.children}</span>

			{props.reversed && (
				<span class="w-3 text-center ml-1">
					<Icon {...props} />
				</span>
			)}
		</span>
	);
}
