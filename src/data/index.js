import domesticPackages from './domesticPackages';
import internationalPackages from './internationalPackages';
import trekkingPackages from './trekkingPackages';
import pilgrimagePackages from './pilgrimagePackages';

// Combine all packages
export const allPackages = [
  ...domesticPackages,
  ...internationalPackages,
  ...trekkingPackages,
  ...pilgrimagePackages
];

// Get packages by category
export const getPackagesByCategory = (category) => {
  switch (category) {
    case 'domestic':
      return domesticPackages;
    case 'international':
      return internationalPackages;
    case 'trekking':
      return trekkingPackages;
    case 'pilgrimage':
      return pilgrimagePackages;
    default:
      return allPackages;
  }
};

// Get package by UID
export const getPackageByUid = (uid) => {
  return allPackages.find(pkg => pkg.uid === uid);
};

// Get packages by location
export const getPackagesByLocation = (location) => {
  return allPackages.filter(pkg => pkg.location === location);
};

// Get all unique locations
export const getAllLocations = () => {
  const locations = allPackages.map(pkg => pkg.location);
  return [...new Set(locations)];
};

// Get locations by category
export const getLocationsByCategory = (category) => {
  const packages = getPackagesByCategory(category);
  const locations = packages.map(pkg => pkg.location);
  return [...new Set(locations)];
};

// Get featured packages (top rated or tagged as featured)
export const getFeaturedPackages = (limit = 6) => {
  return allPackages
    .filter(pkg => pkg.tag === 'Best Seller' || pkg.tag === 'Featured' || pkg.rating >= 4.8)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

// Export individual package arrays
export { domesticPackages, internationalPackages, trekkingPackages, pilgrimagePackages }; 