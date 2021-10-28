import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//this is executed when this file is imported

export const firebaseConfig = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGINSSENDERID,
    appId:process.env.REACT_APP_FIREBASE_APPID,
    measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENTID
});
console.log({firebaseConfig});
// if already initialized, use that one
// if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
//
// export const firestoreDatabase = firebaseConfig.projectId && firebase.firestore();
//  if (firestoreDatabase)
//      console.log(`connection to database is ok`);
//  else
//      console.log(`ERROR: no connection to database`)
export default firebaseConfig;