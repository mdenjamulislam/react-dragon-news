// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvFZ34Q6xAEeWygwLQCtlMuMbBCa0BvrE",
  authDomain: "react-dragon-news-f995a.firebaseapp.com",
  projectId: "react-dragon-news-f995a",
  storageBucket: "react-dragon-news-f995a.appspot.com",
  messagingSenderId: "997627340811",
  appId: "1:997627340811:web:a45f9a61b889ec59bdbf0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;