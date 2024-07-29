import { type JSXElement, Show } from 'solid-js';
import { hasElement } from '../helpers';
import { Row } from './Row';

export interface TableProps {
	children: JSXElement;
	columns: JSXElement;
	foot?: JSXElement;
}

export function Table(props: TableProps) {
	return (
		<div class="border border-solid dark:border-space-800 rounded-md max-w-full overflow-x-auto">
			<table class="w-full">
				<thead>
					<Row head>{props.columns}</Row>
				</thead>

				<tbody>{props.children}</tbody>

				<Show when={hasElement(props, 'foot')}>
					<tfoot>
						<Row>{props.foot}</Row>
					</tfoot>
				</Show>
			</table>
		</div>
	);
}
