// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqHxCDSfsGWj-PUUv46cHDt2xa3WkQ6ao",
  authDomain: "furniture-28c33.firebaseapp.com",
  projectId: "furniture-28c33",
  storageBucket: "furniture-28c33.appspot.com",
  messagingSenderId: "612559122789",
  appId: "1:612559122789:web:9d93ebc8558baff2de318c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
