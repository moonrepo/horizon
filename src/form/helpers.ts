import type { FieldState } from './Field';

export function getError(state: FieldState | undefined) {
	return state?.error;
}

export function getValidationState(state: FieldState | undefined) {
	return state?.error ? 'invalid' : 'valid';
}
