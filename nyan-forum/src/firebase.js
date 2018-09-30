import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAAZOxEZdKGcgh7bOrMmp1cc0xPgHNWtk4",
  authDomain: "nyan-forum1.firebaseapp.com",
  databaseURL: "https://nyan-forum1.firebaseio.com",
  projectId: "nyan-forum1",
  storageBucket: "nyan-forum1.appspot.com",
  messagingSenderId: "244079880144"
};

firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
})

export {
  db
};