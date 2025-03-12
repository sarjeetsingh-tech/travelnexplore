import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getAllLocations, getLocationsByCategory } from '../../data';

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Categories for the filter
  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'domestic', name: 'Domestic' },
    { id: 'international', name: 'International' },
    { id: 'trekking', name: 'Trekking' },
    { id: 'pilgrimage', name: 'Pilgrimage' }
  ];

  // Popular destinations


  // Load locations based on selected category
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      let locationsList = [];
      
      if (selectedCategory === 'all') {
        locationsList = getAllLocations();
      } else {
        locationsList = getLocationsByCategory(selectedCategory);
      }
      
      setLocations(locationsList);
      setFilteredLocations(locationsList);
      setIsLoading(false);
    }, 500);
  }, [selectedCategory]);

  // Filter locations based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredLocations(locations);
    } else {
      const filtered = locations.filter(location => 
        location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredLocations(filtered);
    }
  }, [searchQuery, locations]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Load recent searches from localStorage
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      // Save to recent searches
      const updatedSearches = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      
      // Navigate to the first matching location or search results page
      if (filteredLocations.length > 0) {
        const category = selectedCategory === 'all' ? 'domestic' : selectedCategory;
        navigate(`/${category}/locations/${filteredLocations[0]}`);
      }
    }
  };

  // Handle location selection from dropdown
  const handleLocationSelect = (location) => {
    setSearchQuery(location);
    setIsDropdownOpen(false);
    
    // Save to recent searches
    const updatedSearches = [location, ...recentSearches.filter(s => s !== location)].slice(0, 5);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  // Handle popular destination click
 

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: { 
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  return (
    <section className="relative z-20 px-4 md:px-6 lg:px-8 -mt-16 mb-16">
      <motion.div 
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        whileHover={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6 md:p-8 bg-gradient-to-r from-[#363636] to-[#4A4A4A]">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-white mb-2"
            variants={itemVariants}
          >
            Find Your Perfect <span className="text-[#FF894C]">Destination</span>
          </motion.h2>
          <motion.p 
            className="text-[#F8F8F8] mb-6"
            variants={itemVariants}
          >
            Discover amazing travel experiences tailored just for you
          </motion.p>
          
          <motion.form 
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row gap-4"
            variants={itemVariants}
          >
            {/* Category Selector */}
            <div className="w-full md:w-1/3">
              <motion.select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#FF894C] bg-white text-[#363636] focus:outline-none focus:ring-2 focus:ring-[#FF894C] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </motion.select>
            </div>
            
            {/* Search Input with Dropdown */}
            <div className="w-full md:w-2/3 relative" ref={dropdownRef}>
              <div className="relative">
                <motion.input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  onFocus={() => setIsDropdownOpen(true)}
                  placeholder="Search for a destination..."
                  className="w-full px-4 py-3 pr-12 rounded-lg border-2 border-[#FF894C] focus:outline-none focus:ring-2 focus:ring-[#FF894C] transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(255, 137, 76, 0.3)' }}
                />
                <motion.button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-4 text-[#DC2F2F] hover:text-[#FF894C] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </motion.button>
              </div>
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="absolute right-14 top-3">
                  <motion.div 
                    className="w-6 h-6 border-2 border-[#FF894C] border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              )}
              
              {/* Dropdown for locations */}
              <AnimatePresence>
                {isDropdownOpen && filteredLocations.length > 0 && (
                  <motion.div 
                    className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ul>
                      {filteredLocations.map((location, index) => (
                        <motion.li 
                          key={index}
                          className="px-4 py-2 hover:bg-[#F8F8F8] cursor-pointer transition-colors duration-200"
                          onClick={() => handleLocationSelect(location)}
                          whileHover={{ 
                            backgroundColor: "rgba(255, 137, 76, 0.1)", 
                            paddingLeft: "20px" 
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {location}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* No results message */}
              <AnimatePresence>
                {isDropdownOpen && searchQuery && filteredLocations.length === 0 && !isLoading && (
                  <motion.div 
                    className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg p-4 text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-[#363636]">No destinations found for "{searchQuery}"</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
          
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <motion.div 
              className="mt-4 flex flex-wrap gap-2 items-center"
              variants={itemVariants}
            >
              <span className="text-sm text-[#F8F8F8] opacity-80">Recent:</span>
              {recentSearches.map((search, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="text-sm text-[#F8F8F8] hover:text-[#FF894C] transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {search}
                  {index < recentSearches.length - 1 && <span className="mx-1">•</span>}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
        
        {/* Popular Destinations */}
        <motion.div 
          className="p-6 bg-[#F8F8F8] flex flex-wrap gap-3 justify-center"
          variants={itemVariants}
        >
          <p className="text-[#363636] mr-1 font-medium">Popular Destinations:</p>
          {popularDestinations.map((destination, index) => (
            <motion.button
              key={index}
              onClick={() => handlePopularDestinationClick(destination)}
              className="px-4 py-1.5 bg-white rounded-full text-sm text-[#363636] hover:bg-[#FF894C] hover:text-white transition-all duration-300 shadow-sm"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 4px 12px rgba(255, 137, 76, 0.3)' 
              }}
              whileTap={{ scale: 0.95 }}
              animate={index === 0 ? pulseAnimation : {}}
            >
              {destination.name}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SearchSection; 