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

const actionCodeSettings = {
  url: 'http://localhost:8080/game',
  handleCodeInApp: true
};

// firebase.database().ref("user1").set({
//   name : "Deepak Sharma",
//   age : 25,
//   isSingle : true,
//   location : {
//     city : "Bangalore",
//     country  : "India"
//   }
// });
// firebase.database().ref("user2").set({
//   name : "Andrew Mead",
//   age : 26,
//   isSingle: false,
//   location : {
//     city : "Philadelphia",
//     country : "United States"
//   }
// });
// firebase.database().ref("user2").set({
//   name : "Andrew Mead aaaa",
//   age : 29,
//   isSingle: true,
//   location : {
//     city : "Philadelphia1234",
//     country : "United States1234"
//   }
// });

firebase.database().ref("user5").once('value').then((snapshot)=>{
console.log("friebase data",snapshot.val());
})
.catch((err)=>{
  console.log("err",err);
})
export {actionCodeSettings, firebase as default};