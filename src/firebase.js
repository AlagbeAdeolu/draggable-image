// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_1,
  authDomain: "stage-3-hng.firebaseapp.com",
  projectId: "stage-3-hng",
  storageBucket: "stage-3-hng.appspot.com",
  messagingSenderId: "960972626363",
  appId: "1:960972626363:web:fd9860ee2959a6dfca8c9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)