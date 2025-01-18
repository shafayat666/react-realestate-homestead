import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signUp = (email, password) => {
    setLoading(true)

    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const authInfo = {
    user,
    loading,
    logIn,
    signUp,
    logOut,
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current_user) => {
      console.log("observing user: ", current_user);
      setUser(current_user)
      setLoading(false)
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