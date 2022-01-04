import React, { createContext, useState, useEffect } from 'react';
import { token } from 'api';

const AuthContext = createContext({
  loggedIn: false,
  logout: () => {},
});

export const AuthContextProvider = (props: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('spotify_token_timestamp');
    localStorage.removeItem('spotify_access_token');
    localStorage.removeItem('spotify_refresh_token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn: isLoggedIn,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
