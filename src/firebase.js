import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDb6M518nBqf4w7ZQTxicn_vjh97CGwhXQ",
    authDomain: "tinder-clone-fb470.firebaseapp.com",
    projectId: "tinder-clone-fb470",
    storageBucket: "tinder-clone-fb470.appspot.com",
    messagingSenderId: "867289426781",
    appId: "1:867289426781:web:7405c274252af3c40256b4",
    measurementId: "G-7JF2XTBYGB"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;

