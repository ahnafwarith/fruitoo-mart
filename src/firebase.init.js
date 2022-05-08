// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYIepACs-sZyGTT1U8CD11N_dLUqugfv8",
    authDomain: "simple-shopping-app-bd927.firebaseapp.com",
    projectId: "simple-shopping-app-bd927",
    storageBucket: "simple-shopping-app-bd927.appspot.com",
    messagingSenderId: "926895431680",
    appId: "1:926895431680:web:679716b8a00a290321f8e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;