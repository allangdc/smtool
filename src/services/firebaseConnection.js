// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2ZPv3Lwu8xRVeH5d3qxfXzsHOxdFidFI",
  authDomain: "challengevent-4839e.firebaseapp.com",
  projectId: "challengevent-4839e",
  storageBucket: "challengevent-4839e.appspot.com",
  messagingSenderId: "838211359416",
  appId: "1:838211359416:web:716b862042932a4a901a4d",
  measurementId: "G-5ENWX1YW1Q"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const firebaseDB = getFirestore(app);
