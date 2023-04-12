import { initializeApp } from "firebase/app";
import {  getAuth, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBMO_y5EnIhM-n3QvjruWxQtHNv8qggtz0",
  authDomain: "email-a328e.firebaseapp.com",
  projectId: "email-a328e",
  storageBucket: "email-a328e.appspot.com",
  messagingSenderId: "426374975026",
  appId: "1:426374975026:web:76b1f33235aafd79b2b62b",
};

export const app = initializeApp(firebaseConfig,"my-app-name");


const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
