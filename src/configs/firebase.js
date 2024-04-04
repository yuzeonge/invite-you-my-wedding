// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh26CVCgVypc7S-9sqgloXwwlIEy4u2xM",
  authDomain: "invite-you-my-wedding.firebaseapp.com",
  projectId: "invite-you-my-wedding",
  storageBucket: "invite-you-my-wedding.appspot.com",
  messagingSenderId: "566306910350",
  appId: "1:566306910350:web:624c1655e21533d37199df",
  measurementId: "G-HDTP459LXK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
