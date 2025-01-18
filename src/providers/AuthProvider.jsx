import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth)
  }

  const authInfo = {
    user,
    logIn,
    signUp,
    logOut,
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current_user) => {
      setUser(current_user)
      console.log("observing user: ", current_user);
    })

    return () => {
      unSubscribe();
    }

  },[])

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );

};


export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
}