import React, { createContext, useState, useContext, useEffect } from 'react';
import Loading from '../components/Loading';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingTimeout, setLoadingTimeout] = useState(null);

  // Clear any lingering loading states when component unmounts
  useEffect(() => {
    return () => {
      if (loadingTimeout) clearTimeout(loadingTimeout);
    };
  }, [loadingTimeout]);

  // Set a maximum loading time to prevent infinite loading
  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 8000); // Maximum 8 seconds loading time
      
      setLoadingTimeout(timeout);
      
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  const showLoading = () => setIsLoading(true);
  
  const hideLoading = () => setIsLoading(false);
  
  // Auto-hide loading after a maximum time to prevent infinite loading states
  const showLoadingWithTimeout = (timeout = 3000) => {
    showLoading();
    
    // Clear any existing timeout
    if (loadingTimeout) clearTimeout(loadingTimeout);
    
    // Set new timeout to automatically hide loading after specified time
    const timeoutId = setTimeout(() => {
      hideLoading();
    }, timeout);
    
    setLoadingTimeout(timeoutId);
  };

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      showLoading, 
      hideLoading,
      showLoadingWithTimeout
    }}>
      {children}
      <Loading isLoading={isLoading} />
    </LoadingContext.Provider>
  );
};

export default LoadingProvider; 