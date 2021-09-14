// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-rTc_JwrO_Y-IIbCLL29a9StINyyojPU",
  authDomain: "library-management-syste-652b2.firebaseapp.com",
  projectId: "library-management-syste-652b2",
  storageBucket: "library-management-syste-652b2.appspot.com",
  messagingSenderId: "310008885559",
  appId: "1:310008885559:web:58e9eed619d1513b2f6ab2",
  measurementId: "G-1GMFFRZ52C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore();

