import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDRVhxobdflG8Vjuxn-noNJ4Ix6QDNNHT4',
  authDomain: 'react-redux-example-b1433.firebaseapp.com',
  databaseURL: 'https://react-redux-example-b1433.firebaseio.com',
  projectId: 'react-redux-example-b1433',
  storageBucket: 'react-redux-example-b1433.appspot.com',
  messagingSenderId: '571087311375',
};

firebase.initializeApp(config);

const database = firebase.database();

export default {
  fetchUsers() {
    return database.ref('/users').once('value');
  },
  uploadUsers(users) {
    database.ref('/users').set(users);
  },
};
