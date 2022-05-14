// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
// import { Firestore } from "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {

    apiKey: "AIzaSyB2INSlJWVdKlA3eKahUgPZpD20vYwLwqQ",

    authDomain: "disneyplus-clone-a0cb2.firebaseapp.com",

    projectId: "disneyplus-clone-a0cb2",

    storageBucket: "disneyplus-clone-a0cb2.appspot.com",

    messagingSenderId: "930708261648",

    appId: "1:930708261648:web:e20a125b6258e5a58ef395",

    measurementId: "G-WNZZ0636HC"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;