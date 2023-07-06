/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  // signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase/fireBaseConfig';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // const [user, setUser] = useState({});
 const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
// >>>>>>> 5327f8dc1ed0d9ffea15f311e1e81ce755dc5379

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider)
  };

  // const logOut = () => {
  //     signOut(auth)
  // }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     console.log('User', currentUser)
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
 export {AuthContext,AuthContextProvider};
