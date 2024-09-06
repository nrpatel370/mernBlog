// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernblog-9e8d3.firebaseapp.com",
  projectId: "mernblog-9e8d3",
  storageBucket: "mernblog-9e8d3.appspot.com",
  messagingSenderId: "626352752780",
  appId: "1:626352752780:web:26f7e31118206e23ed13a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
