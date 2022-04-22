import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCt9dgh08nxJzz1EYGu6_5nHmvq1fCy90s",
    authDomain: "tinder-firebase-nightclass.firebaseapp.com",
    projectId: "tinder-firebase-nightclass",
    storageBucket: "tinder-firebase-nightclass.appspot.com",
    messagingSenderId: "1071555973440",
    appId: "1:1071555973440:web:41bd64a3ffd4dbbd256aa5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;