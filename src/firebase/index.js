import firebase from 'firebase';
import firebaseKeys from './firebase';

function configureFirebase() {
	try {
		firebase.initializeApp(firebaseKeys.firebase);
		console.log('initialized');
	} catch (err) {
		if (!/already exists/.test(err.message)) {
			console.log(`Firebase initialization error => ${err}`);
		}
	}
}

export default configureFirebase;
