import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAgDJTbX78r35qSamMYjla9VemaOKmF_I",
  authDomain: "virtual-shelf-79e49.firebaseapp.com",
  projectId: "virtual-shelf-79e49",
  storageBucket: "virtual-shelf-79e49.appspot.com",
  messagingSenderId: "153185679116",
  appId: "1:153185679116:web:ccfb72b16dcca010373b29",
  measurementId: "G-3RPGDYE6ME",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

console.log(app);
