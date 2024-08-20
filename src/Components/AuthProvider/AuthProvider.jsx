import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "./../../Firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [notLoading, setNotLoading] = useState(true);
  const [profileLoad, setProfileLoad] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const logged = currentUser?.email || user?.email;
      if (currentUser) {
        axios
          .post(
            "http://localhost:3000/jwt",
            { logged },
            { withCredentials: true }
          )
          .then((res) => {});
      } else {
        axios
          .post(
            "http://localhost:3000/logout",
            { logged },
            { withCredentials: true }
          )
          .then((res) => {});
      }
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

  const UserLogOut = () => {
    return signOut(auth);
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
    UserLogOut,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
