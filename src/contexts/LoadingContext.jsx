// LoadingContext.jsx
import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const defaultLoadingContext = {
  isLoading: false,
  setLoading: () => {}
};

const LoadingContext = createContext(defaultLoadingContext);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useLoading = () => useContext(LoadingContext);
