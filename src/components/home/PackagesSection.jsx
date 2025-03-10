import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import PackageCard from '../packages/PackageCard';
import { getFeaturedPackages, getPackagesByCategory } from '../../data';

const PackagesSection = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const [packages, setPackages] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    // Load packages based on active tab
    let packagesToShow;
    
    switch (activeTab) {
      case 'domestic':
        packagesToShow = getPackagesByCategory('domestic').slice(0, 6);
        break;
      case 'international':
        packagesToShow = getPackagesByCategory('international').slice(0, 6);
        break;
      case 'trekking':
        packagesToShow = getPackagesByCategory('trekking').slice(0, 6);
        break;
      case 'pilgrimage':
        packagesToShow = getPackagesByCategory('pilgrimage').slice(0, 6);
        break;
      case 'featured':
      default:
        packagesToShow = getFeaturedPackages(6);
        break;
    }
    
    setPackages(packagesToShow);
  }, [activeTab]);

  return (
    <section className="py-24 bg-[#F8F8F8]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#363636] mb-4">
            Popular <span className="text-[#FF894C]">Tour</span> Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most sought-after travel experiences, carefully curated to provide unforgettable adventures.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <button
            onClick={() => setActiveTab('featured')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-all duration-300 ${
              activeTab === 'featured'
                ? 'bg-[#FF894C] text-white'
                : 'bg-white text-[#363636] hover:bg-gray-100'
            }`}
          >
            Featured
          </button>
          <button
            onClick={() => setActiveTab('domestic')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-all duration-300 ${
              activeTab === 'domestic'
                ? 'bg-[#FF894C] text-white'
                : 'bg-white text-[#363636] hover:bg-gray-100'
            }`}
          >
            Domestic
          </button>
          <button
            onClick={() => setActiveTab('international')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-all duration-300 ${
              activeTab === 'international'
                ? 'bg-[#FF894C] text-white'
                : 'bg-white text-[#363636] hover:bg-gray-100'
            }`}
          >
            International
          </button>
          <button
            onClick={() => setActiveTab('trekking')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-all duration-300 ${
              activeTab === 'trekking'
                ? 'bg-[#FF894C] text-white'
                : 'bg-white text-[#363636] hover:bg-gray-100'
            }`}
          >
            Trekking
          </button>
          <button
            onClick={() => setActiveTab('pilgrimage')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-all duration-300 ${
              activeTab === 'pilgrimage'
                ? 'bg-[#FF894C] text-white'
                : 'bg-white text-[#363636] hover:bg-gray-100'
            }`}
          >
            Pilgrimage
          </button>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

        {/* View All Button */}
        <div className="text-center">
          <Link
            to={activeTab === 'featured' ? '/' : `/${activeTab}`}
            className="inline-block py-3 px-8 bg-[#FF894C] text-white font-medium rounded-full transition-all duration-300 
              hover:bg-[#DC2F2F] hover:shadow-md"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;