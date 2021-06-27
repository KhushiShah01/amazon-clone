import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtORVVUJOL0V03lAAMG_gd-D6u14CPIX4",
  authDomain: "clone-2aa41.firebaseapp.com",
  projectId: "clone-2aa41",
  storageBucket: "clone-2aa41.appspot.com",
  messagingSenderId: "908758564993",
  appId: "1:908758564993:web:76dc239c647c6cfe534d80",
  measurementId: "G-RE8WZFLDR6",
};

// initialize the app

const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the database
const db = firebaseApp.firestore();

// initialize auth
const auth = firebase.auth();

export { db, auth };
