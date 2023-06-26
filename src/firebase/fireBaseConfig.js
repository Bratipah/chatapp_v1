// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYdkKkmuit2VN0vKKsM3MtGqLbFhqYLWI",
  authDomain: "chatapp-2936a.firebaseapp.com",
  projectId: "chatapp-2936a",
  storageBucket: "chatapp-2936a.appspot.com",
  messagingSenderId: "974997675647",
  appId: "1:974997675647:web:c4938b6bbb2884dcf4a94a",
  measurementId: "G-0FKQL33VES"
};

const app = firebase.initializeApp(firebaseConfig)
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export {auth, provider};