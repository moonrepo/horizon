export interface LogoProps {
	src: string;
	title: string;
}

export function Logo(props: LogoProps) {
	return (
		<div class="pr-3 grow-0">
			<img
				src={props.src}
				alt={props.title}
				title={props.title}
				class="block w-5 h-5"
			/>
		</div>
	);
}
