/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  //signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase/fireBaseConfig';

const AuthContext = createContext();

 const AuthContextProvider = ({ children }) => {
  const [User, setUser] = useState({});
  const [userName, setUserName] = useState("");
  const [photoURL, setPhotoUrl] = useState("");
  const [uid, setUid] = useState("");

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((data) => {
      const uid = data.user.uid

      setUid(uid)
      console.log(uid)

      setUser(data.user.email);
      setUserName(data.user.displayName);
      setPhotoUrl(data.user.photoURL)

  const usersRef = collection(db, "messages");
  const userDocRef = doc(usersRef, data.user.uid);
      setDoc(
          userDocRef,
          {
              uid: data.user.uid,
              displayName: data.user.displayName,
              photoURL: data.user.photoURL,
          },
          { merge: true }
  );
  });
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (User) => {
      setUser(User);
      console.log('User', User)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    setUser(localStorage.getItem("Email"));
    setUserName(localStorage.getItem("Name"));
}, []);

  return (
    <AuthContext.Provider value={{ User, googleSignIn, userName, photoURL, uid  }}>
      {children}
    </AuthContext.Provider>
  );
 };
 export {AuthContext,AuthContextProvider};
