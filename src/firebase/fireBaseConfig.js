// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
<<<<<<< HEAD
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/firestore"
=======
import { getStorage } from "firebase/storage";
 import { getFirestore } from "firebase/firestore";
>>>>>>> 3d9f7e514f63bba465bc0602cfb619216d428b11

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
const db = getFirestore(app);
<<<<<<< HEAD
const storage = getStorage(app);
=======
const storage = getStorage();

>>>>>>> 3d9f7e514f63bba465bc0602cfb619216d428b11

// const googleProvider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(goggleProvider);

<<<<<<< HEAD
export {auth,db,storage};
=======
export {auth, db, storage};
>>>>>>> 3d9f7e514f63bba465bc0602cfb619216d428b11
