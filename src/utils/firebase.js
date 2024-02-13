// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxAJHkJBhX_giMudKvY2puyooqSBsfTvs",
  authDomain: "learnstream-56ab0.firebaseapp.com",
  projectId: "learnstream-56ab0",
  storageBucket: "learnstream-56ab0.appspot.com",
  messagingSenderId: "783172439779",
  appId: "1:783172439779:web:012a8051b44a97ffbbffd6",
  measurementId: "G-3WSL32QSGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();