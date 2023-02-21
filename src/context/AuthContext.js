import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/configure";

const AuthContext = () => {
  const [displayName, setDisPlayName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, do something with the uid
        console.log("user", user);
        const uid = user.uid;
        setDisPlayName(user.displayName);
      } else {
        // User is signed out
        console.log("user signed out");
      }
    });
  });

  return <></>;
};

export default AuthContext;
