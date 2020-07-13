import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-sI84yBjUceEhaHAWo8EYBH-vPuAMQEE",
  authDomain: "products-7e39a.firebaseapp.com",
  databaseURL: "https://products-7e39a.firebaseio.com",
  projectId: "products-7e39a",
  storageBucket: "products-7e39a.appspot.com",
  messagingSenderId: "622905202737",
  appId: "1:622905202737:web:65586bc8c02075f932dd10",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
