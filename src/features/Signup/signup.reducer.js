import { prop, compose, concat, not } from 'sanctuary';
export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
export function userSignupRequest(values) {
	return {
		type: USER_SIGNUP_REQUEST,
		payload: values
	};
}

export default function(state = {}, action) {
	switch (action.type) {
		case USER_SIGNUP_REQUEST: {
			return {
				...state
			};
		}
		default: {
			return state;
		}
	}
}
