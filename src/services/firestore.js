import firebase from "firebase/compat";
import "firebase/firestore";
const firebaseConfig = {
   /// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  ///  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
   // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
   /// appId:process.env.REACT_APP_MESSAGING_APP_ID,
   /// storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  ///  messagingSenderId:process.env.REACT_APP_FIREBASE_SENDER_ID,
    apiKey: "AIzaSyDBDLQ_pxUtCzSi_ejiGg_BodM6GPsMLUA",
    authDomain: "shopping-d286e.firebaseapp.com",
    databaseURL:"gs://shopping-d286e.appspot.com/images/team",
    projectId: "shopping-d286e",
    storageBucket: "shopping-d286e.appspot.com",
    messagingSenderId: "871970803826",
    appId: "1:871970803826:web:8094f868ea81eab21af2eb",
   measurementId: "G-ME53LKMN8V"
};

firebase.initializeApp(firebaseConfig);


export default firebase;