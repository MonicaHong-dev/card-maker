import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnZ5G6b3Ow-4JqvR6ZaUqxTcFdJaKhY90",
  authDomain: "business-card-maker-cf94c.firebaseapp.com",
  databaseURL:
    "https://business-card-maker-cf94c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "business-card-maker-cf94c",
  storageBucket: "business-card-maker-cf94c.appspot.com",
  messagingSenderId: "935968362963",
  appId: "1:935968362963:web:a15ce7202cb0fb3f031f26",
  measurementId: "G-D4BYQ0S9JE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

const provider = new GoogleAuthProvider();

const auth = getAuth();
console.log(auth);

const googleLogIn = async () => {
  const result = await signInWithPopup(auth, provider);

  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  debugger;
  // console.log(user);
  // ...
  return user;
  // .catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });
};
ReactDOM.render(
  <React.StrictMode>
    <App googleLogIn={googleLogIn} />
  </React.StrictMode>,
  document.getElementById("root")
);
