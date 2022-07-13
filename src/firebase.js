// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: " AIzaSyCvmVcBEMEN0KZy7dE79EqaA076b3LYHhg",

  authDomain: "cryptodc-ed668.firebaseapp.com",

  projectId: "cryptodc-ed668",

  storageBucket: "cryptodc-ed668.appspot.com",

  messagingSenderId: "61987501699",

  appId: "1:61987501699:web:68260858a5b8daacd68db6",

  measurementId: "G-BSR9GLSTL4",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
