import { call, takeEvery } from 'redux-saga/effects';
import { USER_SIGNUP_REQUEST } from './signup.reducer';
import userSignupRequest from './api';

export function* callSignupRequest(action) {
	yield call(userSignupRequest, action.payload);
}
export function* watchSignupRequest() {
	yield takeEvery(USER_SIGNUP_REQUEST);
	yield call(callSignupRequest);
}
