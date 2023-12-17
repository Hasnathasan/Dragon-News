// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA19lVYRHGInt77Ic3gwe3GTbAeN5j1poE",
  authDomain: "fir-simple-cfc20.firebaseapp.com",
  projectId: "fir-simple-cfc20",
  storageBucket: "fir-simple-cfc20.appspot.com",
  messagingSenderId: "140226166254",
  appId: "1:140226166254:web:8d0b16eeda1ec894d9e2ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;