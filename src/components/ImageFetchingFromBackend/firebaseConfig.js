import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  // your firebase config object here
  apiKey: "AIzaSyDGerOI7q0sWVnbAhXUM-s30nFg6B4KivM",
  authDomain: "image-gallery-489c0.firebaseapp.com",
  projectId: "image-gallery-489c0",
  storageBucket: "image-gallery-489c0.appspot.com",
  messagingSenderId: "556960202018",
  appId: "1:556960202018:web:408580276c6d2fa5f0f97b",
  measurementId: "G-MJ2EJ4RCVR"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
export default firebase;
