import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/configure";

const AuthContext = (user, register, signin) => {
  const something = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, do something with the uid
        console.log("user", user);
      } else {
        // User is signed out
        console.log("user signed out");
      }
    });
  };

  return <></>;
};

export default AuthContext;