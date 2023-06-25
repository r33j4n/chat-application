// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeLlfc-y20GF4UAFkMI7rH4z1Nj1U47_w",
  authDomain: "ims-chat-9e136.firebaseapp.com",
  projectId: "ims-chat-9e136",
  storageBucket: "ims-chat-9e136.appspot.com",
  messagingSenderId: "119708452183",
  appId: "1:119708452183:web:21b7dacf124665323daa12",
  measurementId: "G-RKCVR75F01"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// 
