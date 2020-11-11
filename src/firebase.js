import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCxuNVi3ZikC22ezLAxYq8gfR7d2DTHmds",
    authDomain: "clone-24767.firebaseapp.com",
    databaseURL: "https://clone-24767.firebaseio.com",
    projectId: "clone-24767",
    storageBucket: "clone-24767.appspot.com",
    messagingSenderId: "114005164883",
    appId: "1:114005164883:web:919b9117c9f8b89d4b17a6",
    measurementId: "G-QMCCH0J4LN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};