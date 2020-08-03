import firebase from "firebase/app";

import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBg5hwOqCYs4rv-Kc83W5cTYO-jnsPZmUc",
    authDomain: "mario-plan-58a6e.firebaseapp.com",
    databaseURL: "https://mario-plan-58a6e.firebaseio.com",
    projectId: "mario-plan-58a6e",
    storageBucket: "mario-plan-58a6e.appspot.com",
    messagingSenderId: "141704855607",
    appId: "1:141704855607:web:1338b87694aec44144bfb2",
    measurementId: "G-KZW1PB7LZS"
  };


firebase.initializeApp(firebaseConfig)
firebase.firestore()
// firebase.firestore().settings({timestampsInSnapshots : true})

export default  firebase