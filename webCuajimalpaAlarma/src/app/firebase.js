// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArQPer8O4_pN5_CHGGVBo6lSz1sTYdLBo",
  authDomain: "alarmapoliciacuajimalpa.firebaseapp.com",
  projectId: "alarmapoliciacuajimalpa",
  storageBucket: "alarmapoliciacuajimalpa.appspot.com",
  messagingSenderId: "625900899048",
  appId: "1:625900899048:web:c46849c9bad40dac19175d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);