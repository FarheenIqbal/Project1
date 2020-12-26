import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyB2zWNJqP5BHw-DgGM3w8SOKuOf0AruUes',
  authDomain: 'todo-app-32c97.firebaseapp.com',
  projectId: 'todo-app-32c97',
  storageBucket: 'todo-app-32c97.appspot.com',
  messagingSenderId: '933498654925',
  appId: '1:933498654925:web:bff28d2e3d00e8e4dfd984',
  measurementId: 'G-4Y380B7J5Q',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
