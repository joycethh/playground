import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/configure";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // console.log("user", user);
  //       setCurrentUser(user);
  //     } else {
  //       // User is signed out
  //       setCurrentUser(null);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsuscribe;
  }, []);

  const login = async (email, password) => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    setCurrentUser(credential.user);
  };

  const register = async (email, password, username) => {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setCurrentUser(credential.user);
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
  };

  const logout = async () => {
    await signOut();
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
