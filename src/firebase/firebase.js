import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyATr2FSr8Ydw_7kRKZzuqHIuNcxHUpQTa4",
  authDomain: "snakegame-887b2.firebaseapp.com",
  databaseURL: "https://snakegame-887b2.firebaseio.com",
  projectId: "snakegame-887b2",
  storageBucket: "snakegame-887b2.appspot.com",
  messagingSenderId: "728161194573",
  appId: "1:728161194573:web:4458bc1645e8217e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
  name : 'Deepak Sharma'

})