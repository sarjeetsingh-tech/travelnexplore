import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const LocationCard = ({ 
  location, 
  category,
  imgSrc,
  packageCount,
  index = 0
}) => {
  const [imageError, setImageError] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Generate image path or use provided one
  const imagePath = imgSrc || `/images/locations/${location.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  
  // Fallback image if the location image doesn't exist
  const fallbackImage = '/images/locations/placeholder.jpg';

  const handleImageError = () => {
    console.log(`Image not found for location: ${location}`);
    setImageError(true);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="relative h-80 rounded-xl overflow-hidden shadow-xl group"
    >
      <img
        src={imageError ? fallbackImage : imagePath}
        alt={location}
        onError={handleImageError}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{location}</h3>
        
        <div className="flex items-center mb-4">
          <svg className="w-5 h-5 text-[#FF894C] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          <p className="text-white text-sm">
            {packageCount} {packageCount === 1 ? 'Package' : 'Packages'} Available
          </p>
        </div>
        
        <Link
          to={`/${category}/locations/${encodeURIComponent(location.toLowerCase())}`}
          className="inline-block py-2 px-6 bg-[#FF894C] text-white font-medium rounded-full transition-all duration-300 
            hover:bg-[#DC2F2F] hover:shadow-md w-full text-center"
        >
          Explore Packages
        </Link>
      </div>
      
      {/* Animated Overlay on Hover */}
      <motion.div 
        className="absolute inset-0 bg-[#FF894C]/20 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default LocationCard; 