import firebase from 'firebase';

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBRiT8LIhjemQWHkJs7o-3NoAYe82I4ahw",
  authDomain: "friendmap-67f8f.firebaseapp.com",
  databaseURL: "https://friendmap-67f8f.firebaseio.com",
  projectId: "friendmap-67f8f",
  storageBucket: "friendmap-67f8f.appspot.com",
  messagingSenderId: "1051446063341"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  firebase,
  auth
};