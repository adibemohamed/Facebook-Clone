import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCoJ7u54x-sF951PrEcnmiW9JOARbYUj6M",
    authDomain: "facebook-clone-16007.firebaseapp.com",
    databaseURL: "https://facebook-clone-16007.firebaseio.com",
    projectId: "facebook-clone-16007",
    storageBucket: "facebook-clone-16007.appspot.com",
    messagingSenderId: "148797229644",
    appId: "1:148797229644:web:55862a460b9c46ac5482e9",
    measurementId: "G-88JHMHX0QS"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)

  //   access database
const db = firebaseApp.firestore();

//   access authentication
const auth = firebase.auth();

//   access storage (no s3)
const storage = firebase.storage();

export {db, auth, storage };
