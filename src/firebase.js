import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB8QQBTDUQxWR9qutRt3vwFNv116wPE9Is",
    authDomain: "slack-clone-47a3d.firebaseapp.com",
    projectId: "slack-clone-47a3d",
    storageBucket: "slack-clone-47a3d.appspot.com",
    messagingSenderId: "392627689615",
    appId: "1:392627689615:web:345ad6dadf128d6dc438fa",
    measurementId: "G-XVK6P0H2HY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };