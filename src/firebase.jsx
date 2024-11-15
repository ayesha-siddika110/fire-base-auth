// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeF-BEyP6ISPG5gHnERbVwHveKDqiFaic",
  authDomain: "fir-auth-6c180.firebaseapp.com",
  projectId: "fir-auth-6c180",
  storageBucket: "fir-auth-6c180.firebasestorage.app",
  messagingSenderId: "970225961221",
  appId: "1:970225961221:web:f4aa19e57e479e7adc4f6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);