// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLRtN5GdxybSPSXOun__62wOFVU5K4yKA",
  authDomain: "coffee-store-850d0.firebaseapp.com",
  projectId: "coffee-store-850d0",
  storageBucket: "coffee-store-850d0.appspot.com",
  messagingSenderId: "166164774691",
  appId: "1:166164774691:web:2afc3758c42f688b98d696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app