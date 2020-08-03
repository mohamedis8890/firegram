import * as firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDoG9wz_eLhMe9eROb2dUIxYT1CodTYPFw",
  authDomain: "firegram-57c78.firebaseapp.com",
  databaseURL: "https://firegram-57c78.firebaseio.com",
  projectId: "firegram-57c78",
  storageBucket: "firegram-57c78.appspot.com",
  messagingSenderId: "777912221493",
  appId: "1:777912221493:web:dbceb6aae3ed141892567c",
  measurementId: "G-X37E873ZL4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
