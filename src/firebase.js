// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABka1cmCcYBguqAn6V-QFdBRtXCFm9rPk",
  authDomain: "job-management-161b6.firebaseapp.com",
  projectId: "job-management-161b6",
  storageBucket: "job-management-161b6.firebasestorage.app",
  messagingSenderId: "939235619046",
  appId: "1:939235619046:web:987ff5aac74436b6708b27",
  measurementId: "G-J545XRP2Q8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);