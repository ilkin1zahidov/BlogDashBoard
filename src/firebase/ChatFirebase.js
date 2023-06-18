import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBrUcIAwKcMvKYDkJsT91re47k-nQSDLgU",
  authDomain: "chat-46fb4.firebaseapp.com",
  projectId: "chat-46fb4",
  storageBucket: "chat-46fb4.appspot.com",
  messagingSenderId: "431978351481",
  appId: "1:431978351481:web:88080c82264a398857fda8"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();