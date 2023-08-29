// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDGpsS4cMVggHXFpZt5XrwRhUI5VsJraRo",
  authDomain: "netflixgpt-5e08d.firebaseapp.com",
  projectId: "netflixgpt-5e08d",
  storageBucket: "netflixgpt-5e08d.appspot.com",
  messagingSenderId: "997415975856",
  appId: "1:997415975856:web:8051c8c9b316894572b475",
  measurementId: "G-FK7BTPTHQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()