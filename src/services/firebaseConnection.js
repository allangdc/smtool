/* eslint-disable import/no-duplicates */
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIrbFTNiGa4bmDsXGrLOY7XourCEnpgbY",
  authDomain: "desafiovent-52c16.firebaseapp.com",
  projectId: "desafiovent-52c16",
  storageBucket: "desafiovent-52c16.appspot.com",
  messagingSenderId: "307700004156",
  appId: "1:307700004156:web:2976e432d21b1b881cda39"
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const firebaseAuth = firebase.auth();

export default firebase;
