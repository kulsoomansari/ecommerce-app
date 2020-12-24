import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBHKMGjI6QGtFGll6Cr1EUyH91NM9n0uO8",
    authDomain: "ecom-app-67adb.firebaseapp.com",
    projectId: "ecom-app-67adb",
    storageBucket: "ecom-app-67adb.appspot.com",
    messagingSenderId: "38808275253",
    appId: "1:38808275253:web:c1efbec5c8bd2b3c95a47c"
  };
  firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()
  export{auth, db, storage}