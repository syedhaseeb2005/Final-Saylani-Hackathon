// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getStorage,
  getDownloadURL,
  uploadBytesResumable,
  ref,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBoT5CzQFmXquG10DsiHdBqkYVKIhjfjcE",
  authDomain: "for-final-hackathon.firebaseapp.com",
  projectId: "for-final-hackathon",
  storageBucket: "for-final-hackathon.appspot.com",
  messagingSenderId: "577499333412",
  appId: "1:577499333412:web:37c667d68fca6112f9a9b1",
  measurementId: "G-5FPR8VKTS0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage, getDownloadURL, uploadBytesResumable, ref };
