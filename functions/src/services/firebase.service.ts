import firebase from "firebase";
import config from "../config";
import { errors } from "../error/error.constants";

let db: firebase.firestore.Firestore;
const initFirebaseClient = (): firebase.firestore.Firestore => {
  firebase.initializeApp({
    apiKey: config.firebaseConfig.apiKey,
    authDomain: "letsgtok.firebaseapp.com",
    projectId: "letsgtok",
    storageBucket: "letsgtok.appspot.com",
    messagingSenderId: config.firebaseConfig.messagingSenderId,
    appId: config.firebaseConfig.appId,
  });
  db = firebase.firestore();
  if (!db) {
    throw errors.FIREBASE_CONNECT_ERROR;
  }
  console.log("Connected to database");
  return db;
};

export async function getFirestoreInstance(): Promise<firebase.firestore.Firestore> {
  if (!db) {
    initFirebaseClient();
  }
  return db;
}
