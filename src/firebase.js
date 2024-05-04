import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth,GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAj0tkEOlq0CsLbNzgWotIZIFYGE3RTfOE",
  authDomain: "web-crud-6e5b0.firebaseapp.com",
  databaseURL: "https://web-crud-6e5b0-default-rtdb.firebaseio.com",
  projectId: "web-crud-6e5b0",
  storageBucket: "web-crud-6e5b0.appspot.com",
  messagingSenderId: "287493347333",
  appId: "1:287493347333:web:e50118b9e6793407b3e46c",
  measurementId: "G-BXHBDHLM8Z"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const fs = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
export const providerFb = new FacebookAuthProvider();
