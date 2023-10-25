// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD4aOo0R_QmbrzP_p-A0DUxrHgpwV0onk",
  authDomain: "bronco-s-outdoors.firebaseapp.com",
  projectId: "bronco-s-outdoors",
  storageBucket: "bronco-s-outdoors.appspot.com",
  messagingSenderId: "4405930517",
  appId: "1:4405930517:web:d94b1481065474adb67c1c",
  measurementId: "G-CV9DRX9R68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
