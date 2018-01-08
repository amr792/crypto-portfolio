import { fork, all } from 'redux-saga/effects';
import { watchRetrieveCoins } from './features/Home/home.saga';
import { watchSignupRequest } from './features/Signup/signup.saga';

export default function*() {
	yield all([fork(watchRetrieveCoins), fork(watchSignupRequest)]);
}
