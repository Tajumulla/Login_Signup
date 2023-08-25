// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpk1vdHSmMHNwx0h9_-sDCaT36vh3rCcI",
    authDomain: "login-signup-page-603a2.firebaseapp.com",
    projectId: "login-signup-page-603a2",
    storageBucket: "login-signup-page-603a2.appspot.com",
    messagingSenderId: "272169760995",
    appId: "1:272169760995:web:3d39253e75f54f10c9add6",
    measurementId: "G-T3NYPKZ7DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
