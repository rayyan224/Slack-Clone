import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDCxnmFDwK4Mmi7N3X5N0n5kl9oNawnVc4",
  authDomain: "slack-clone-fb8fe.firebaseapp.com",
  databaseURL: "https://slack-clone-fb8fe.firebaseio.com",
  projectId: "slack-clone-fb8fe",
  storageBucket: "slack-clone-fb8fe.appspot.com",
  messagingSenderId: "620378593989",
  appId: "1:620378593989:web:f7547e4dc9e4e42beeaeac",
  measurementId: "G-QFW8BTWHEH",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;
