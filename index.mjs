import { initializeApp } from "firebase/app";
import {
  getAuth
} from "firebase/auth";

initializeApp({
  // path where you saved your firebase credentials
  // you can do the same inline: https://firebase.google.com/docs/server/setup
  serviceAccount: "./credentials.json",
  // reference your application
  databaseURL: "https://< your application >.firebaseio.com",
});

export const handler = async (event, context, callback) => {
  var uid = context.awsRequestId;
  var customToken = getAuth().createCustomToken(uid);
  callback(null, customToken);
};
