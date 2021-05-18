import firebase from "firebase"
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyBQUFfnQ1LQGLOGWsZeh0FNNl916w8cehY",
    authDomain: "book-santa-d7ea1.firebaseapp.com",
    projectId: "book-santa-d7ea1",
    storageBucket: "book-santa-d7ea1.appspot.com",
    messagingSenderId: "845037155881",
    appId: "1:845037155881:web:64b546c1023e310ff84e38"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()