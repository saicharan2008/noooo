import firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyCjtd3R2RsR85bjOnGtytN4tq_rHNZpNjc",
    authDomain: "first-key-e89f0.firebaseapp.com",
    projectId: "first-key-e89f0",
    storageBucket: "first-key-e89f0.appspot.com",
    messagingSenderId: "1047699377674",
    appId: "1:1047699377674:web:fc64aaa503c995145e99f3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.database;