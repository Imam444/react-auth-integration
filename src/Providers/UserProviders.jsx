import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const UserContext = createContext(null);

const googleProvider = new GoogleAuthProvider()
const UserProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const[loading, setLoading]=  useState(true)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    });
    return () => {
      unSubscribe();
    }
  }, [])

  const logOut = () => {
    setLoading(true)
     return signOut(auth)
   
  }
  const userInfo = {
    user,
    createUser,
    signInUser,
    logOut,
    loading,
    signInWithGoogle
  };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UserProviders;
UserProviders.propTypes = {
  children: PropTypes.node,
};
