import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAOspXjIjXpe0L2m1a9n9bs3az0ZU466kk",
  authDomain: "test-16aa0.firebaseapp.com",
  databaseURL: "https://test-16aa0.firebaseio.com",
  projectId: "test-16aa0",
  storageBucket: "test-16aa0.appspot.com",
  messagingSenderId: "39015960916",
});

const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };
