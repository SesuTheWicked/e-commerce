// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB8MyoAm2ILOkknoWoiz0zFjh3E1ChLEQ",
  authDomain: "e-commerce-8e816.firebaseapp.com",
  projectId: "e-commerce-8e816",
  storageBucket: "e-commerce-8e816.appspot.com",
  messagingSenderId: "1030763321415",
  appId: "1:1030763321415:web:6e66321306d601a2983962",
  measurementId: "G-G0D2GTWBET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);