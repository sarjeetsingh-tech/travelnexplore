import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Navigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import PageLayout from '../components/layout/PageLayout';
import LocationCard from '../components/packages/LocationCard';
import RecommendedPackages from '../components/packages/RecommendedPackages';
import { getPackagesByCategory, getLocationsByCategory } from '../data';

// Valid categories
const VALID_CATEGORIES = ['domestic', 'international', 'trekking', 'pilgrimage'];

const categoryInfo = {
  domestic: {
    title: "Domestic Tours",
    subtitle: "Explore the diverse beauty and rich cultural heritage of India",
    heroImage: "/images/categories/domestic-hero.jpg",
    description: "From the snow-capped Himalayas to the tropical beaches of Kerala, India offers a kaleidoscope of experiences. Our domestic tour packages are designed to help you discover the incredible diversity of this beautiful country."
  },
  international: {
    title: "International Tours",
    subtitle: "Discover exotic destinations around the world",
    heroImage: "/images/categories/international-hero.jpg",
    description: "Embark on a journey to explore the world's most fascinating destinations. Our international tour packages offer carefully curated experiences that combine popular attractions with hidden gems, ensuring an unforgettable travel experience."
  },
  trekking: {
    title: "Trekking Adventures",
    subtitle: "Challenge yourself with thrilling trekking expeditions",
    heroImage: "/images/categories/trekking-hero.jpg",
    description: "For the adventure enthusiasts, our trekking packages offer exciting opportunities to explore some of the most breathtaking trails around the world. From beginner-friendly routes to challenging expeditions, we have something for every level of trekker."
  },
  pilgrimage: {
    title: "Pilgrimage Tours",
    subtitle: "Embark on a spiritual journey to sacred destinations",
    heroImage: "/images/categories/pilgrimage-hero.jpg",
    description: "Our pilgrimage tours are designed to provide a meaningful spiritual experience while ensuring comfort and convenience. Visit sacred sites, participate in religious ceremonies, and connect with your spiritual side on these carefully planned journeys."
  }
};

const CategoryPage = () => {
  const { category } = useParams();
  const [locations, setLocations] = useState([]);
  const [packages, setPackages] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Redirect to home if category is invalid
  if (category && !VALID_CATEGORIES.includes(category)) {
    console.log(`Invalid category: ${category}. Redirecting to home.`);
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    console.log("Category from URL params:", category);
    
    if (category && VALID_CATEGORIES.includes(category)) {
      const categoryPackages = getPackagesByCategory(category);
      console.log("Packages for category:", categoryPackages);
      setPackages(categoryPackages);
      
      const categoryLocations = getLocationsByCategory(category);
      console.log("Locations for category:", categoryLocations);
      setLocations(categoryLocations);
    }
  }, [category]);

  // Count packages per location
  const getPackageCountByLocation = (location) => {
    return packages.filter(pkg => pkg.location === location).length;
  };

  // Get info for the current category
  const info = categoryInfo[category] || {
    title: "Explore Tours",
    subtitle: "Discover amazing destinations",
    heroImage: "/images/default-hero.jpg",
    description: "Browse our selection of carefully curated tour packages."
  };

  return (
    <PageLayout
      title={info.title}
      subtitle={info.subtitle}
      heroImage={info.heroImage}
    >
      {/* Description Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-[#363636] mb-6">
              Discover <span className="text-[#FF894C]">Amazing</span> Destinations
            </h2>
            <p className="text-gray-600 mb-12">
              {info.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          {locations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <LocationCard
                  key={location}
                  location={location}
                  category={category}
                  packageCount={getPackageCountByLocation(location)}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">No locations found</h3>
              <p className="text-gray-600 mb-8">
                We couldn't find any locations for this category. This might be because:
              </p>
              <ul className="list-disc list-inside text-left max-w-md mx-auto mb-8 text-gray-600">
                <li>The data files might not be properly loaded</li>
                <li>There might be an issue with the category parameter: "{category}"</li>
                <li>The locations might not be properly extracted from the packages</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Recommended Packages Section */}
      {locations.length > 0 && (
        <RecommendedPackages 
          limit={6}
          title="Top Rated"
          subtitle={`${category.charAt(0).toUpperCase() + category.slice(1)} Packages`}
          customPackages={packages.sort((a, b) => b.rating - a.rating).slice(0, 6)}
        />
      )}
    </PageLayout>
  );
};

export default CategoryPage; 