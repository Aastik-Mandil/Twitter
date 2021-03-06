import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBzWswiwFgk9x9FPI0KWSyHMwJ-z3Amti8",
    authDomain: "twitter-9df38.firebaseapp.com",
    projectId: "twitter-9df38",
    storageBucket: "twitter-9df38.appspot.com",
    messagingSenderId: "752686211921",
    appId: "1:752686211921:web:ff24a65ed31346b854e970",
    measurementId: "G-SC273F75FJ"
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebaseapp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;