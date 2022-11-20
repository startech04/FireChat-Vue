import firebase from "firebase/app";
import "firebase/database";

const config = {
  	apiKey: "AIzaSyAxA1dU5r_tkiYE3ncknr7irIuJI-NE5S8",
  	authDomain: "eas-chat-6c31b.firebaseapp.com",
  	projectId: "eas-chat-6c31b",
  	storageBucket: "eas-chat-6c31b.appspot.com",
 	messagingSenderId: "33945564766",
 	appId: "1:33945564766:web:30acdbb262eb87f95866cf"
}

const db = firebase.initializeApp(config);
export default db;
