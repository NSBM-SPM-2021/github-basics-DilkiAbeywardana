import firebase from 'firebase';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTdU4_DYfVkgYK6sv1N7BIL682SmnirvI",
  authDomain: "library-management-syste-f12a5.firebaseapp.com",
  projectId: "library-management-syste-f12a5",
  storageBucket: "library-management-syste-f12a5.appspot.com",
  messagingSenderId: "836258672520",
  appId: "1:836258672520:web:2b69821d7c8faeb1d9943d"
};

const app = initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };