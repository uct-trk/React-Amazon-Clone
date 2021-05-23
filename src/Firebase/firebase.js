import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCM43bvTTPw234Wht-AEdg6IgtMhR-5JGI",
    authDomain: "fir-6f18d.firebaseapp.com",
    projectId: "fir-6f18d",
    storageBucket: "fir-6f18d.appspot.com",
    messagingSenderId: "1081976887309",
    appId: "1:1081976887309:web:b47a10e7a1dd05be655d44",
    measurementId: "G-6JQBHFKLJ2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth};