import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/storage'; 

require('firebase/firestore')
let firebaseConfig = {
  apiKey: "AIzaSyB6R-JxF10b9QVXLPAVozQWr8YPMWzuu3k",
  authDomain: "projeto-suporte-8b122.firebaseapp.com",
  projectId: "projeto-suporte-8b122",
  storageBucket: "projeto-suporte-8b122.appspot.com",
  messagingSenderId: "273741271562",
  appId: "1:273741271562:web:c28a24521abb9d738885f3",
  measurementId: "G-EB4M994E7D"
  };
 // Initialize Firebase
if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
}

export default firebase;