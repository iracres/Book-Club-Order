import * as firebase from 'firebase';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCLL7nAQ_MO0KzUp4glsDk7lBQIn4x2lKA",
    authDomain: "book-club-order-app.firebaseapp.com",
    databaseURL: "https://book-club-order-app.firebaseio.com",
    projectId: "book-club-order-app",
    storageBucket: "",
    messagingSenderId: "424827484955",
    appId: "1:424827484955:web:29eca1dd239312e45071be",
    measurementId: "G-GCFYK65EYN"
  };

  firebase.initializeApp(firebaseConfig);

  //firebase.auth().createUserWithEmailAndPassword('fdebies@gmail.com', '1234567');
  export default firebase;