import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbQ_zcv2MvtLgF9Op_cK2eTSeD2KQYBWg",
  authDomain: "linkedin-clone-23c7d.firebaseapp.com",
  projectId: "linkedin-clone-23c7d",
  storageBucket: "linkedin-clone-23c7d.appspot.com",
  messagingSenderId: "746068821934",
  appId: "1:746068821934:web:f3b664220b7ac528f0ea3f",
  measurementId: "G-09VHH0BQFP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
