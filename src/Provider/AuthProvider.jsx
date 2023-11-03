import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      // if user exists then issue a token
      if (currentUser) {
        axios
          .post(
            "https://car-doctor-server-20pjap43z-naimuddin94.vercel.app/jwt",
            loggedUser
          )
          .then((res) => {
            console.log(res.data);
          });
      } else {
        axios
          .post(
            "https://car-doctor-server-20pjap43z-naimuddin94.vercel.app/logout",
            loggedUser
          )
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [user?.email]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = { user, createUser, loading, loginUser, logoutUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
