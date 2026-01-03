import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACTOaUvJbHRMXIlaCCvgIaRyjplm-m8ws",
  authDomain: "kapra-chicken-market.firebaseapp.com",
  projectId: "kapra-chicken-market",
  storageBucket: "kapra-chicken-market.appspot.com",
  messagingSenderId: "298257797478",
  appId: "1:298257797478:web:930a6a5592f1a1753ef8a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ EXPORT FIRESTORE (THIS FIXES EVERYTHING)
export const db = getFirestore(app);
