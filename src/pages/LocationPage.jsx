import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import PageLayout from '../components/layout/PageLayout';
import PackageCard from '../components/packages/PackageCard';
import { getPackagesByCategory } from '../data';

const LocationPage = () => {
  const { category, location } = useParams();
  const [packages, setPackages] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (category && location) {
      const decodedLocation = decodeURIComponent(location);
      const categoryPackages = getPackagesByCategory(category);
      const locationPackages = categoryPackages.filter(
        pkg => pkg.location.toLowerCase() === decodedLocation
      );
      setPackages(locationPackages);
    }
  }, [category, location]);

  // Format location name for display
  const formatLocationName = (loc) => {
    if (!loc) return '';
    return decodeURIComponent(loc)
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const formattedLocation = formatLocationName(location);
  const heroImage = packages[0]?.heroImage || `/images/locations/${location}.jpg`;

  return (
    <PageLayout
      title={`${formattedLocation} Tours`}
      subtitle={`Explore our ${formattedLocation} travel packages`}
      heroImage={heroImage}
    >
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-[#FF894C]">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/${category}`} className="hover:text-[#FF894C]">
              {category.charAt(0).toUpperCase() + category.slice(1)} Tours
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#FF894C]">{formattedLocation}</span>
          </div>
        </div>
      </div>

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
              Discover <span className="text-[#FF894C]">{formattedLocation}</span>
            </h2>
            <p className="text-gray-600 mb-12">
              Explore our handpicked selection of {formattedLocation} tour packages, designed to provide you with an unforgettable travel experience. Whether you're looking for adventure, relaxation, or cultural immersion, we have the perfect package for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          {packages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <PackageCard
                  key={pkg.uid}
                  uid={pkg.uid}
                  packageName={pkg.packageName}
                  location={pkg.location}
                  duration={pkg.duration}
                  price={pkg.price}
                  rating={pkg.rating}
                  reviews={pkg.reviews}
                  imgSrc={pkg.imgSrc}
                  tag={pkg.tag}
                  shortDescription={pkg.shortDescription}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">No packages found</h3>
              <p className="text-gray-600 mb-8">We couldn't find any packages for this location. Please try another location or contact us for a custom package.</p>
              <Link
                to={`/${category}`}
                className="inline-block py-3 px-8 bg-[#FF894C] text-white font-medium rounded-full transition-all duration-300 hover:bg-[#DC2F2F] hover:shadow-md"
              >
                Back to {category.charAt(0).toUpperCase() + category.slice(1)} Tours
              </Link>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default LocationPage; 