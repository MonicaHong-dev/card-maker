import { initializeApp } from "firebase/app";

const firebaseConfig = {
  //   apiKey: "AIzaSyCnZ5G6b3Ow-4JqvR6ZaUqxTcFdJaKhY90",
  //   authDomain: "business-card-maker-cf94c.firebaseapp.com",
  //   databaseURL:
  //     "https://business-card-maker-cf94c-default-rtdb.asia-southeast1.firebasedatabase.app",
  //   projectId: "business-card-maker-cf94c",
  //   storageBucket: "business-card-maker-cf94c.appspot.com",
  //   messagingSenderId: "935968362963",
  //   appId: "1:935968362963:web:a15ce7202cb0fb3f031f26",
  //   measurementId: "G-D4BYQ0S9JE",

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

console.log(process.env.REACT_APP_FIREBASE_API_KEY);

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
