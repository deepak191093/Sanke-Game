import validator from "validator";
import firebase, { actionCodeSettings } from "./../firebase/firebase";
import { resolve } from "url";

export default function(email) {
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url: "http://localhost:8080/game",
    // This must be true.
    handleCodeInApp: true
  };
  let bool = false;
  let val = validator.isEmail(email);
  if (val) {
    return firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings);
  } else {
    alert("enter a valid Email");
    bool = false;
  }
}
