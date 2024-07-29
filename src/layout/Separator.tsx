import { cx } from 'class-variance-authority';
import { Separator as Sep } from '@kobalte/core';

export interface SeparatorProps extends Sep.SeparatorRootOptions {}

export function Separator(props: SeparatorProps) {
	return (
		<Sep.Root
			{...props}
			class={cx(
				'dark:bg-space-700 border-none h-[1px]',
				props.orientation === 'vertical' ? 'mx-3' : 'my-3',
			)}
		/>
	);
}
