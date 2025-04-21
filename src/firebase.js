// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPlo8R8mkk97s3iyV15m_oXzh5xJK58Ws",
  authDomain: "carfinder-2492.firebaseapp.com",
  databaseURL:
    "https://carfinder-2492-default-rtdb.europe-west1.firebasedatabase.app", // Realtime Database URL
  projectId: "carfinder-2492",
  storageBucket: "carfinder-2492.firebasestorage.app",
  messagingSenderId: "24441743727",
  appId: "1:24441743727:web:6b9372286dae51c186e09a",
  measurementId: "G-3QEY3JESCG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Initialize Realtime Database

// Export db for use in other files
export default db;
