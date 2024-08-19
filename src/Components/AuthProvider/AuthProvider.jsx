import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "./../../Firebase/firebase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [notLoading, setNotLoading] = useState(true);
  const [profileLoad, setProfileLoad] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setNotLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    setNotLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    user,
    notLoading,
    profileLoad,
    setUser,
    setNotLoading,
    setProfileLoad,
    createUser,
    updateUser,
    loginUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
