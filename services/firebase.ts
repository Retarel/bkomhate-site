
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZh_PwX7LZfXujZiHGH9T-8uA17hNQGBY",
  authDomain: "bkomhate-site.firebaseapp.com",
  projectId: "bkomhate-site",
  storageBucket: "bkomhate-site.appspot.com",
  messagingSenderId: "37549082348",
  appId: "1:37549082348:web:cf0c6c4f504b40192887c9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
