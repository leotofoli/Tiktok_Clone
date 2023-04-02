import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAmIC2YB-j07G61NBijjlo4OqUArrhEfJs",
  authDomain: "tiktok-ebac-97e9a.firebaseapp.com",
  projectId: "tiktok-ebac-97e9a",
  storageBucket: "tiktok-ebac-97e9a.appspot.com",
  messagingSenderId: "201229466286",
  appId: "1:201229466286:web:1de6d0e334733b90644b3f",
  measurementId: "G-3NJ12RL2PD",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
