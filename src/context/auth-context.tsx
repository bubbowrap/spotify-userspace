import React, { createContext, useState, useEffect } from 'react';
import { token } from 'api';

const AuthContext = createContext({
  loggedIn: false,
  loading: true,
  logout: () => {},
});

export const AuthContextProvider = (props: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('spotify_token_timestamp');
    localStorage.removeItem('spotify_access_token');
    localStorage.removeItem('spotify_refresh_token');
    setIsLoggedIn(false);
    console.log('Logging Out...');
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn: isLoggedIn,
        loading: isLoading,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
