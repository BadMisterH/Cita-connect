import firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD_E-seHsahkCQR-WSVdyDLdOUGxH-X9dI",
  authDomain: "cita-connect.firebaseapp.com",
  projectId: "cita-connect",
  storageBucket: "cita-connect.appspot.com",
  messagingSenderId: "144459815099",
  appId: "1:144459815099:web:760e5a5cac12520c13319e",
  measurementId: "G-YHCRXQ4NXV"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig); 

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

// const auth = firebase.auth();

export {firebase , db};

 //4:27 video config firebase