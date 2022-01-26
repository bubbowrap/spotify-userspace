import React, { createContext, useState, useEffect } from 'react';
import { token } from 'api';

const StateContext = createContext({
  loggedIn: false,
  loading: true,
  sidebarActive: false,
  logout: () => {},
  toggleSidebar: () => {},
  closeSidebar: () => {},
});

export const StateContextProvider = (props: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

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
    window.location.href = '/';
  };

  const toggleSidebarHandler = () => {
    setIsSidebarActive((prevValue) => !prevValue);
  };

  const closeSidebarHandler = () => {
    setIsSidebarActive((prevValue) => prevValue && !prevValue);
  };

  return (
    <StateContext.Provider
      value={{
        loggedIn: isLoggedIn,
        sidebarActive: isSidebarActive,
        loading: isLoading,
        logout: logoutHandler,
        toggleSidebar: toggleSidebarHandler,
        closeSidebar: closeSidebarHandler,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;
