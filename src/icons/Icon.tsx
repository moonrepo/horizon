import { createMemo, For, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import type { IconLookup } from '@fortawesome/fontawesome-svg-core';
import * as svgCore from '@fortawesome/fontawesome-svg-core';

export type { IconLookup };

function Svg(props: svgCore.AbstractElement) {
	return (
		<Dynamic component={props.tag} {...props.attributes}>
			<For each={props.children}>{(child) => <Svg {...child} />}</For>
		</Dynamic>
	);
}

export interface IconProps {
	icon: IconLookup;
	mask?: IconLookup;
	maskId?: string;
}

export function Icon(props: IconProps) {
	const icon = createMemo(() =>
		svgCore.icon(props.icon, { mask: props.mask, maskId: props.maskId }),
	);

	return (
		<Show when={icon()} keyed>
			{(data) => (
				<span class="inline-block" aria-hidden="true">
					<For each={data.abstract}>{(row) => <Svg {...row} />}</For>
				</span>
			)}
		</Show>
	);
}
