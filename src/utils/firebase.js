// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCOEtloZJ7WkqOc-UluLQ3tN5XN_307Ohw",
  authDomain: "netflix-gpt-c1e2c.firebaseapp.com",
  projectId: "netflix-gpt-c1e2c",
  storageBucket: "netflix-gpt-c1e2c.appspot.com",
  messagingSenderId: "159505945875",
  appId: "1:159505945875:web:0476c9b1ed8d5b01af76e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()