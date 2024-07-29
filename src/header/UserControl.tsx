import { type JSXElement, Show, type ValidComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';
// import { Icon } from '../icons';
// import {
// 	faCatSpace,
// 	faRobotAstromech,
// 	faUserAlien,
// 	faUserAstronaut,
// 	faUserBountyHunter,
// 	faUserRobot,
// 	faUserVisor,
// } from '../icons/duotone';

export interface UserControlProps {
	as?: ValidComponent;
	children?: JSXElement;
	class?: string;
	href: string;
	name?: string;
}

export function UserControl(props: UserControlProps) {
	return (
		<li class={props.class}>
			<Dynamic
				component={props.as ?? 'a'}
				class="inline-flex items-center m-0 font-sans h-full font-bold text-base px-1 rounded dark:hover:bg-space-800 dark:text-space-100 dark:hover:text-space-50"
				href={props.href}
			>
				<Show when={props.name} fallback={props.children} keyed>
					{(name) => (
						<span class="text-l6" title={name}>
							{/* <Icon /> */}
						</span>
					)}
				</Show>
			</Dynamic>
		</li>
	);
}
