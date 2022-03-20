// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'


// import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVujiuW1JiU7OQA8tkn4pLTjrw6dNLszE",
  authDomain: "fb-crud-react-2ecf4.firebaseapp.com",
  projectId: "fb-crud-react-2ecf4",
  storageBucket: "fb-crud-react-2ecf4.appspot.com",
  messagingSenderId: "145343448877",
  appId: "1:145343448877:web:76593d23577536a86575a4"
};

// Initialize Firebase

initializeApp(firebaseConfig);

export const db = getFirestore();