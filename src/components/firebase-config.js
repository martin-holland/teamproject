import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBAgDJTbX78r35qSamMYjla9VemaOKmF_I",
//   authDomain: "virtual-shelf-79e49.firebaseapp.com",
//   projectId: "virtual-shelf-79e49",
//   storageBucket: "virtual-shelf-79e49.appspot.com",
//   messagingSenderId: "153185679116",
//   appId: "1:153185679116:web:ccfb72b16dcca010373b29",
//   measurementId: "G-3RPGDYE6ME",
// };

// Elena:
const firebaseConfig = {
  apiKey: "AIzaSyD-hkfSGUZPg4pEmALllgFWwdu9LMLbBAk",
  authDomain: "virtual-shelf-f6304.firebaseapp.com",
  projectId: "virtual-shelf-f6304",
  storageBucket: "virtual-shelf-f6304.appspot.com",
  messagingSenderId: "159052102338",
  appId: "1:159052102338:web:3c560078fcd412a006d95b",
  measurementId: "G-1JY3RV9CK0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const authentication = getAuth(app);

console.log(app);
