import firebase from 'firebase'
 // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAi_xIJMA_JPWgZ7Medl9yN1b_fDk6qZ8M",
      authDomain: "projectmobilesaya.firebaseapp.com",
      databaseURL: "https://projectmobilesaya.firebaseio.com",
      projectId: "projectmobilesaya",
      storageBucket: "projectmobilesaya.appspot.com",
      messagingSenderId: "553503129392",
      appId: "1:553503129392:web:4179fd8e5c831e19"
    
  }
  // Initialize Firebase
  export const Fire = firebase.initializeApp(firebaseConfig);