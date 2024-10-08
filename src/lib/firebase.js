import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatt-app-3173e.firebaseapp.com",
  projectId: "chatt-app-3173e",
  storageBucket: "chatt-app-3173e.appspot.com",
  messagingSenderId: "564166506723",
  appId: "1:564166506723:web:2d40f207380f8b3cd1edd6",
  // measurementId: "G-7MFB2XBEE8"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
