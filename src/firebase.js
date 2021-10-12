import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBTdU4_DYfVkgYK6sv1N7BIL682SmnirvI",
  authDomain: "library-management-syste-f12a5.firebaseapp.com",
  projectId: "library-management-syste-f12a5",
  storageBucket: "library-management-syste-f12a5.appspot.com",
  messagingSenderId: "836258672520",
  appId: "1:836258672520:web:2b69821d7c8faeb1d9943d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };