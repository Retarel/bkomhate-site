// FIX: Update Firebase initialization to use the v8 namespaced API.
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZh_PwX7LZfXujZiHGH9T-8uA17hNQGBY",
  authDomain: "bkomhate-site.firebaseapp.com",
  projectId: "bkomhate-site",
  storageBucket: "bkomhate-site.appspot.com",
  messagingSenderId: "37549082348",
  appId: "1:37549082348:web:cf0c6c4f504b40192887c9"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();