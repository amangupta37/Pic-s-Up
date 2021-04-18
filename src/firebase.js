
import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDsYQFlUw0X9lTT9xrVOoNLI_YTmxVVU0A",
    authDomain: "picsup-8bef5.firebaseapp.com",
    projectId: "picsup-8bef5",
    storageBucket: "picsup-8bef5.appspot.com",
    messagingSenderId: "152894747763",
    appId: "1:152894747763:web:1eed4ecd409a52e9156606"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  export {projectStorage , projectFirestore};
  