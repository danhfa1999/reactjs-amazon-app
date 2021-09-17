// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0PMLEztVkgljJJBdeUBxVM4h0YqkycZQ",
  authDomain: "challenge-24d2c.firebaseapp.com",
  projectId: "challenge-24d2c",
  storageBucket: "challenge-24d2c.appspot.com",
  messagingSenderId: "696940024180",
  appId: "1:696940024180:web:7836f8489b1b6a8ec01c21",
  measurementId: "G-9GRF9J2FXH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
