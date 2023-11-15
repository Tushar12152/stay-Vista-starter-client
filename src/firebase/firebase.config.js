// import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// }

// export const app = initializeApp(firebaseConfig)



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa2Km6uAN9xlXKa-4h8TEDVi_1Au-bo2M",
  authDomain: "dimple-firebase-b630e.firebaseapp.com",
  projectId: "dimple-firebase-b630e",
  storageBucket: "dimple-firebase-b630e.appspot.com",
  messagingSenderId: "234579230232",
  appId: "1:234579230232:web:20b3fdb4835a16b755cd6d"
};

// Initialize Firebase
 export  const app = initializeApp(firebaseConfig);