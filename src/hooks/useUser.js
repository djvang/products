import { useState, useEffect } from "react";
import firebase from "../firebase";

const useUser = () => {
  const [user, setUser] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser({
          email: user.email,
          photoURL: user.photoURL,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }

      setLoaded(true);
    });
  }, []);

  return { user, loaded, isAuthenticated: !!user };
};

export default useUser;
