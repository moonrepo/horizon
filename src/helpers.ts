import { untrack } from 'solid-js';

export function hasElement<T extends object, K extends keyof T>(
	object: T,
	key: K,
): boolean {
	return untrack(() => Object.prototype.hasOwnProperty.call(object, key));
}
