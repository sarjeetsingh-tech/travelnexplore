import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PackageCard from './PackageCard';
import { getFeaturedPackages } from '../../data';

const RecommendedPackages = ({ 
  excludePackageId = null, 
  limit = 6, 
  customPackages = null,
  title = "Recommended",
  subtitle = "Packages"
}) => {
  const [packages, setPackages] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    // If custom packages are provided, use them
    if (customPackages && customPackages.length > 0) {
      setPackages(customPackages.slice(0, limit));
    } else {
      // Otherwise get featured packages and exclude the current package if needed
      const recommendedPackages = getFeaturedPackages(limit + (excludePackageId ? 1 : 0))
        .filter(pkg => pkg.uid !== excludePackageId)
        .slice(0, limit);
      
      setPackages(recommendedPackages);
    }
  }, [excludePackageId, limit, customPackages]);

  // Mouse event handlers for manual scrolling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch event handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Scroll left and right button handlers
  const scrollLeftHandler = () => {
    if (containerRef.current) {
      // Scroll by the width of one package card (approximately 1/3 of the container)
      const scrollAmount = containerRef.current.offsetWidth / 3;
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      // Scroll by the width of one package card (approximately 1/3 of the container)
      const scrollAmount = containerRef.current.offsetWidth / 3;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Auto scroll effect
  useEffect(() => {
    let interval;
    
    if (inView && packages.length > 0) {
      interval = setInterval(() => {
        if (containerRef.current) {
          const isAtEnd = 
            containerRef.current.scrollLeft + containerRef.current.offsetWidth >= 
            containerRef.current.scrollWidth - 20;
            
          if (isAtEnd) {
            // Reset to beginning when reached the end
            containerRef.current.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          } else {
            // Continue scrolling right
            scrollRight();
          }
        }
      }, 5000); // Auto scroll every 5 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [inView, packages]);

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#363636] mb-4">
            {title} <span className="text-[#FF894C]">{subtitle}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of popular packages that travelers love. 
            These packages offer exceptional experiences and great value.
          </p>
        </motion.div>

        <div className="relative">
          {/* Left shadow gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-light-gray to-transparent z-10 pointer-events-none"></div>
          
          {/* Right shadow gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-light-gray to-transparent z-10 pointer-events-none"></div>
          
          {/* Scroll indicators */}
          <div 
            onClick={scrollLeftHandler}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-md p-2 cursor-pointer hover:bg-gray-100 transition-all hover:scale-110"
          >
            <svg className="w-6 h-6 text-[#FF894C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </div>
          
          <div 
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-md p-2 cursor-pointer hover:bg-gray-100 transition-all hover:scale-110"
          >
            <svg className="w-6 h-6 text-[#FF894C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
          
          {/* Scrollable container */}
          <div 
            ref={containerRef}
            className="overflow-x-auto hide-scrollbar py-8 px-4"
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div 
              className="flex space-x-6"
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {packages.map((pkg, index) => (
                <div 
                  key={pkg.uid} 
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex-shrink-0 px-2"
                  style={{ minWidth: 'calc(33.333% - 1rem)', maxWidth: 'calc(33.333% - 1rem)' }}
                >
                  <PackageCard
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
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedPackages; 