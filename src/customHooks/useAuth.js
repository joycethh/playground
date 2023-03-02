import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/configure";
// import { useDispatch } from "react-redux";
// import { AUTH, SIGN_OUT } from "../redux/feature/authSlice";

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user);
        setCurrentUser(user);
      } else {
        // User is signed out
        console.log("user signed out");
        setCurrentUser(null);
      }
    });
  });

  return {
    currentUser,
  };
};
