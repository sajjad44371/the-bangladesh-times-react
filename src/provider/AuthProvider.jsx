import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update user
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // set an observer for login/logout
  useEffect(() => {
    // set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user in the auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    // clear the observer on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    signInUser,
    updateUser,
    logOut,
    loading,
    setLoading,
  };
  return (
    <>
      <div>
        <AuthContext value={authInfo}>{children}</AuthContext>
      </div>
    </>
  );
};

export default AuthProvider;
