// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtwzFgZbqCQIUgkPecqOOfDrQC0iiXPIM",
  authDomain: "netflix-clone-87751.firebaseapp.com",
  projectId: "netflix-clone-87751",
  storageBucket: "netflix-clone-87751.appspot.com",
  messagingSenderId: "190890085736",
  appId: "1:190890085736:web:25840dc3d1c550c5061add"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);