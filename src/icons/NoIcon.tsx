export interface NoIconProps {
	children: string;
	size?: string;
}

export function NoIcon(props: NoIconProps) {
	return (
		<span
			class="inline-flex justify-center items-center"
			style={{
				height: props.size ?? '1.25em',
				width: props.size ?? '1.25em',
			}}
		>
			{props.children}
		</span>
	);
}
