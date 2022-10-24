import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const LoginWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const LogOut = () => {
    return signOut(auth);
  };
  const Register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      console.log("After state changed", CurrentUser);
      setUser(CurrentUser);
    });
    return () => {
      Unsubscribe();
    };
  }, []);

  const AuthInfo = { LoginWithGoogle, user, LogOut, signIn, Register };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
