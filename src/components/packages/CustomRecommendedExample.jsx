import React, { useState, useEffect } from 'react';
import RecommendedPackages from './RecommendedPackages';
import { allPackages } from '../../data';

// Example component showing how to use RecommendedPackages with custom packages
const CustomRecommendedExample = () => {
  const [customPackages, setCustomPackages] = useState([]);
  
  useEffect(() => {
    // Example 1: Filter packages by specific locations
    const specificLocations = ['Goa', 'Kerala', 'Manali', 'Shimla', 'Ladakh', 'Rajasthan'];
    const locationPackages = allPackages.filter(pkg => 
      specificLocations.some(location => pkg.location.includes(location))
    );
    
    // Example 2: Filter packages by price range (e.g., budget packages)
    // const budgetPackages = allPackages.filter(pkg => pkg.price < 20000);
    
    // Example 3: Filter packages by duration (e.g., weekend getaways)
    // const weekendPackages = allPackages.filter(pkg => 
    //   pkg.duration.includes('2') || pkg.duration.includes('3')
    // );
    
    // Example 4: Filter packages by rating (e.g., top-rated packages)
    // const topRatedPackages = allPackages
    //   .filter(pkg => pkg.rating >= 4.5)
    //   .sort((a, b) => b.rating - a.rating);
    
    // Example 5: Combine filters (e.g., budget weekend getaways)
    // const budgetWeekendPackages = allPackages.filter(pkg => 
    //   pkg.price < 20000 && (pkg.duration.includes('2') || pkg.duration.includes('3'))
    // );
    
    // Set the custom packages
    setCustomPackages(locationPackages);
  }, []);
  
  return (
    <RecommendedPackages 
      customPackages={customPackages}
      title="Popular"
      subtitle="Destinations"
      limit={6}
    />
  );
};

export default CustomRecommendedExample; 