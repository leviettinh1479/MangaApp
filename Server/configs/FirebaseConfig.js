// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8D3hiyUAfOxKCs-Tmqy3jRUkxo4ER8sA",
  authDomain: "mangaapp-df9a1.firebaseapp.com",
  projectId: "mangaapp-df9a1",
  storageBucket: "mangaapp-df9a1.appspot.com",
  messagingSenderId: "89983299505",
  appId: "1:89983299505:web:21f7964308538455c4d790",
  measurementId: "G-RF8JNJBBHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.exports = app;