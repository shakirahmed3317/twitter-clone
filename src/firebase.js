import firebase from 'firebase/compat/app';
import 'firebase/firestore'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTTgTIyP33SjDmnrQ6Y4qTkOMIBkxAdpQ",
    authDomain: "twitter-clone-53f36.firebaseapp.com",
    projectId: "twitter-clone-53f36",
    storageBucket: "twitter-clone-53f36.appspot.com",
    messagingSenderId: "757140328975",
    appId: "1:757140328975:web:ea8d3e9275562eec7a897a",
    measurementId: "G-N4PXWQENB0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db; // Export the db object
