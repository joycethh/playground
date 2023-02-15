import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDuRfKM7orwtRL8OOeTwkU4GAwxAk70YMY",
  authDomain: "seashell-53beb.firebaseapp.com",
  projectId: "seashell-53beb",
  storageBucket: "seashell-53beb.appspot.com",
  messagingSenderId: "758671265377",
  appId: "1:758671265377:web:b47e3a1fb8db6069126420",
  measurementId: "G-6REF42JG6K",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
