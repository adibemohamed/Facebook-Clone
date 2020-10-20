import firebase from "firebase";

const firebaseConfig = {
  //put your settings here
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

//   access database
const db = firebaseApp.firestore();

//   access authentication
const auth = firebase.auth();

//   access storage (no s3)
const storage = firebase.storage();

export { db, auth, storage };
