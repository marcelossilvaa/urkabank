import { createContext } from 'react'
import PropTypes from 'prop-types';
import React from 'react';

interface IAppContext {
  user: string,
  isLoggedIn: boolean,
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }) => {
  const user = 'marce';
  const isLoggedIn = false
  
  return (
    <AppContext.Provider value={{ user, isLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}