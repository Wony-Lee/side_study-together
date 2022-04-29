import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEL5MbwU3ynCa06zWlysP0xSbRvsaT5GU",
  authDomain: "study-81043.firebaseapp.com",
  projectId: "study-81043",
  storageBucket: "study-81043.appspot.com",
  messagingSenderId: "1098467922402",
  appId: "1:1098467922402:web:eeb13462b0b879b21c69bb",
  measurementId: "G-KGKBZDSNLT",
};

// 왜 안돼지? API_KEY가 이상하다고 나오는데
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

export default firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();
export const storageService = firebase.storage();
