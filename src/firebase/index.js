import firebase from 'firebase'

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDkb3uTH7mLG9JuI-L6iWDBnuhRrpi6dOE",
  authDomain: "projectexam-22443.firebaseapp.com",
  databaseURL: "https://projectexam-22443.firebaseio.com",
  projectId: "projectexam-22443",
  storageBucket: "projectexam-22443.appspot.com",
  messagingSenderId: "415999063869",
  appId: "1:415999063869:web:72dbc8d2c6203e72"
};
  // Initialize Firebase
  export const Fire = firebase.initializeApp(firebaseConfig);