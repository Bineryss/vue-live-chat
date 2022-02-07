import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAgBrGBYQNgBuVNJsIf_J53xEMYakJQbPg",
    authDomain: "dojo-blog-firebase-b8ed3.firebaseapp.com",
    projectId: "dojo-blog-firebase-b8ed3",
    storageBucket: "dojo-blog-firebase-b8ed3.appspot.com",
    messagingSenderId: "944065419103",
    appId: "1:944065419103:web:15687f58bd98bee5fdc8ea"
};

firebase.initializeApp(firebaseConfig)

const projectFireStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFireStore, timestamp}