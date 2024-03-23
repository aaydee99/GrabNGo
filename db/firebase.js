import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const config = {
    apiKey: "AIzaSyDQZxtRcDeARyPSkamJX7ni-MU_JP9acWk",
    authDomain: "grabngo-e2573.firebaseapp.com",
    projectId: "grabngo-e2573",
    storageBucket: "grabngo-e2573.appspot.com",
    messagingSenderId: "474476077765",
    appId: "1:474476077765:web:7c36fa2d73c5052bc646ac",
    measurementId: "G-METQPJW5L5"
  };

  export const FIREBASE_APP = initializeApp(config);
  export const FIREBASE_DB = getFirestore(FIREBASE_APP);
