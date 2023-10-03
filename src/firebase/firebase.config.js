// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNoz2Z0jUFfqi1mW8vcUuM923ZBMc-Qnc",
  authDomain: "news-react-auth.firebaseapp.com",
  projectId: "news-react-auth",
  storageBucket: "news-react-auth.appspot.com",
  messagingSenderId: "264533004417",
  appId: "1:264533004417:web:313530bf5d398fb532fd80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
