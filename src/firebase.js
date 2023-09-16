// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, doc, setDoc } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuH-uIGqeoWtBjw4qIPMON6mVhUt4Pzvk",
  authDomain: "financely-app.firebaseapp.com",
  projectId: "financely-app",
  storageBucket: "financely-app.appspot.com",
  messagingSenderId: "1084981119629",
  appId: "1:1084981119629:web:894974431c8fe9046070c4",
  measurementId: "G-ZRNG6E1KRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {db, auth, provider, doc, setDoc}