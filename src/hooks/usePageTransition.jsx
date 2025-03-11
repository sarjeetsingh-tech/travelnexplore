import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../context/LoadingContext';

/**
 * Custom hook to handle page transitions with loading states
 * Ensures loading is visible during slow connections
 */
const usePageTransition = () => {
  const location = useLocation();
  const { showLoading, hideLoading } = useLoading();
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  
  // Show loading on route change
  useEffect(() => {
    // Show loading immediately
    showLoading();
    
    // Track when initial render is complete
    const timer = setTimeout(() => {
      setResourcesLoaded(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname, showLoading]);
  
  // Handle resource loading
  useEffect(() => {
    if (!resourcesLoaded) return;
    
    // Function to check if all resources are loaded
    const checkResourcesLoaded = () => {
      // Get all images and check if they're loaded
      const images = Array.from(document.images);
      const totalImages = images.length;
      
      if (totalImages === 0) {
        // No images to load, hide loading after a minimum display time
        setTimeout(() => hideLoading(), 800);
        return;
      }
      
      let loadedImages = 0;
      
      // Check already loaded images
      for (const img of images) {
        if (img.complete) {
          loadedImages++;
        }
      }
      
      // If all images already loaded
      if (loadedImages === totalImages) {
        // Hide loading after a minimum display time
        setTimeout(() => hideLoading(), 800);
        return;
      }
      
      // Set up listeners for remaining images
      const onImageLoad = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          // All images loaded, hide loading
          hideLoading();
        }
      };
      
      // Add load event listeners to images that aren't loaded yet
      for (const img of images) {
        if (!img.complete) {
          img.addEventListener('load', onImageLoad);
          img.addEventListener('error', onImageLoad); // Count error as loaded
        }
      }
      
      // Fallback: hide loading after maximum wait time (8 seconds)
      const fallbackTimer = setTimeout(() => hideLoading(), 8000);
      
      return () => {
        // Clean up event listeners
        for (const img of images) {
          img.removeEventListener('load', onImageLoad);
          img.removeEventListener('error', onImageLoad);
        }
        clearTimeout(fallbackTimer);
      };
    };
    
    return checkResourcesLoaded();
  }, [resourcesLoaded, hideLoading]);
};

export default usePageTransition; 