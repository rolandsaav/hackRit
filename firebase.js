// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9h73rMjSRKbLQBSVz5Ey2-Hx7V4APg5E",
  authDomain: "hackrit-4397d.firebaseapp.com",
  projectId: "hackrit-4397d",
  storageBucket: "hackrit-4397d.appspot.com",
  messagingSenderId: "348461490252",
  appId: "1:348461490252:web:49085659a4a4fc8e3314e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
