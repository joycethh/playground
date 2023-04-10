import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/configure";
// import { useDispatch } from "react-redux";
// import { AUTH, SIGN_OUT } from "../redux/feature/authSlice";

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("user", user);
        setCurrentUser(user);
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });
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

  return {
    currentUser,
    login,
    register,
    logout,
  };
};
