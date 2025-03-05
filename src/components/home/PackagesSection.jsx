import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../../utils/animationUtils';

const PackagesSection = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const { ref, controls } = useScrollAnimation();
  
  const packages = {
    featured: [
      {
        title: "Bali Paradise Escape",
        location: "Bali, Indonesia",
        duration: "7 Days",
        price: 1299,
        rating: 4.8,
        reviews: 124,
        imgSrc: "/images/bali.jpg",
        tag: "Best Seller",
        link: "/packages/bali-paradise-escape"
      },
      {
        title: "Himalayan Trek ",
        location: "Nepal",
        duration: "10 Days",
        price: 1899,
        rating: 4.9,
        reviews: 87,
        imgSrc: "/images/himalaya.jpg",
        tag: "Adventure",
        link: "/packages/himalayan-trek-expedition"
      },
      {
        title: "Paris Romance Tour",
        location: "Paris, France",
        duration: "5 Days",
        price: 1599,
        rating: 4.7,
        reviews: 156,
        imgSrc: "/images/paris.jpg",
        tag: "Couple Special",
        link: "/packages/paris-romance-tour"
      },
      {
        title: "Rajasthan Heritage Tour",
        location: "Rajasthan, India",
        duration: "8 Days",
        price: 999,
        rating: 4.6,
        reviews: 112,
        imgSrc: "/images/rajasthan.jpg",
        tag: "Cultural",
        link: "/packages/rajasthan-heritage-tour"
      }
    ],
    domestic: [
      {
        title: "Goa Beach Getaway",
        location: "Goa, India",
        duration: "4 Days",
        price: 499,
        rating: 4.5,
        reviews: 178,
        imgSrc: "/images/goa.jpg",
        tag: "Beach",
        link: "/packages/goa-beach-getaway"
      },
      {
        title: "Kashmir Valley Escape",
        location: "Kashmir, India",
        duration: "6 Days",
        price: 799,
        rating: 4.8,
        reviews: 92,
        imgSrc: "/images/kashmir.jpg",
        tag: "Scenic",
        link: "/packages/kashmir-valley-escape"
      },
      {
        title: "Kerala Backwaters",
        location: "Kerala, India",
        duration: "5 Days",
        price: 699,
        rating: 4.7,
        reviews: 143,
        imgSrc: "/images/kerala.jpg",
        tag: "Relaxation",
        link: "/packages/kerala-backwaters"
      },
      {
        title: "Manali Adventure",
        location: "Manali, India",
        duration: "7 Days",
        price: 599,
        rating: 4.6,
        reviews: 107,
        imgSrc: "/images/manali.jpg",
        tag: "Adventure",
        link: "/packages/manali-adventure"
      }
    ],
    international: [
      {
        title: "Japan  Tour",
        location: "Tokyo, Japan",
        duration: "9 Days",
        price: 2299,
        rating: 4.9,
        reviews: 76,
        imgSrc: "/images/japan.jpg",
        tag: "Seasonal",
        link: "/packages/japan-cherry-blossom-tour"
      },
      {
        title: "Greek Island Hopping",
        location: "Greece",
        duration: "12 Days",
        price: 1899,
        rating: 4.8,
        reviews: 134,
        imgSrc: "/images/greece.jpg",
        tag: "Island",
        link: "/packages/greek-island-hopping"
      },
      {
        title: "Swiss Alps Experience",
        location: "Switzerland",
        duration: "8 Days",
        price: 2099,
        rating: 4.7,
        reviews: 91,
        imgSrc: "/images/switzerland.jpg",
        tag: "Scenic",
        link: "/packages/swiss-alps-experience"
      },
      {
        title: "Egyptian Pyramids Tour",
        location: "Egypt",
        duration: "10 Days",
        price: 1699,
        rating: 4.6,
        reviews: 108,
        imgSrc: "/images/egypt.jpg",
        tag: "Historical",
        link: "/packages/egyptian-pyramids-tour"
      }
    ]
  };

  const tabs = [
    { id: 'featured', label: 'Featured Packages' },
    { id: 'domestic', label: 'Domestic Tours' },
    { id: 'international', label: 'International Tours' }
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={`star-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      } else if (i === fullStars && halfStar) {
        stars.push(
          <svg key={`star-half-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path fill="url(#half-fill)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      } else {
        stars.push(
          <svg key={`star-empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <section id="packages" className="py-24 bg-[#F8F8F8]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#363636] mb-4">
            Popular <span className="text-[#DC2F2F]">Tour</span> Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of tour packages designed to cater to different preferences and budgets.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-6 md:px-8 rounded-full text-sm md:text-base font-medium m-2 transition-all duration-300
                ${activeTab === tab.id 
                  ? 'bg-[#FF894C] text-white shadow-lg' 
                  : 'bg-white text-[#363636] border border-gray-200 hover:bg-gray-100'}`}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Packages Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {packages[activeTab].map((pkg, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group"
              >
                <Link to={pkg.link} className="block">
                  <div className="relative">
                    <img
                      src={pkg.imgSrc || '/api/placeholder/600/400'}
                      alt={pkg.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-[#DC2F2F] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {pkg.tag}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-[#363636] mb-1 group-hover:text-[#FF894C] transition-colors duration-300">
                      {pkg.title}
                    </h3>
                    
                    <div className="flex items-center mb-3">
                      <svg className="w-4 h-4 text-[#FF894C] mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-600 text-sm">{pkg.location}</span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {renderStars(pkg.rating)}
                      </div>
                      <span className="text-gray-600 text-sm ml-2">
                        ({pkg.reviews} reviews)
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <div>
                        <span className="text-gray-500 text-sm">{pkg.duration}</span>
                      </div>
                      <div>
                        <span className="text-[#DC2F2F] font-bold">${pkg.price}</span>
                        <span className="text-gray-500 text-sm"> / person</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="w-full py-2 bg-transparent text-[#FF894C] font-medium border border-[#FF894C] rounded-full hover:bg-[#FF894C] hover:text-white transition-all duration-300 group-hover:bg-[#FF894C] group-hover:text-white">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={fadeInUp}
        >
          <Link to={`/${activeTab}`}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-8 bg-[#363636] text-white font-medium rounded-full transition-all duration-300 hover:bg-[#DC2F2F]"
            >
              View All {activeTab === 'featured' ? 'Packages' : activeTab === 'domestic' ? 'Domestic Tours' : 'International Tours'}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;