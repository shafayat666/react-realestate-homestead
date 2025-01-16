import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

  const logIn = () => {
    console.log("login button got clicked");
  }

  const signUp = () => {
    console.log("sign up button got clicked");
  }

  const authInfo = {
    user,
    logIn,
    signUp,
  }

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