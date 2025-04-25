// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmm3SviqjuqthhRaoex6WAeg0REYWC6sY",
  authDomain: "gratuation-24c37.firebaseapp.com",
  projectId: "gratuation-24c37",
  storageBucket: "gratuation-24c37.firebasestorage.app",
  messagingSenderId: "914780136738",
  appId: "1:914780136738:web:9654934b9ecb4703ff717b",
  measurementId: "G-FWLSR913RZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)