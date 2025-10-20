// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHGD00Jt3hfJynzZNz087gE9_8ZWLSQHU",
  authDomain: "the-bangladesh-times-b9861.firebaseapp.com",
  projectId: "the-bangladesh-times-b9861",
  storageBucket: "the-bangladesh-times-b9861.firebasestorage.app",
  messagingSenderId: "522252300879",
  appId: "1:522252300879:web:feb409249000afddbeb03a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
