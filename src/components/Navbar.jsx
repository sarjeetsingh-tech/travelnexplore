import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname === '/' ? '/home' : location.pathname;

  // Mouse position for interactive animations
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update custom cursor position
      if (cursorRef.current && activeDropdown) {
        const x = e.clientX;
        const y = e.clientY;
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeDropdown]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    
    setIsMobileMenuOpen(false);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) && 
        navbarRef.current && 
        !navbarRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Keep dropdown open when hovering between nav item and dropdown content
  useEffect(() => {
    if (!isHoveringNav && !isHoveringDropdown) {
      const timer = setTimeout(() => {
        setActiveDropdown(null);
      }, 300); // Small delay to allow mouse movement between elements
      return () => clearTimeout(timer);
    }
  }, [isHoveringNav, isHoveringDropdown]);

  // Dropdown content data
  const dropdownContent = {
    'explore-bharat': {
      image: '/images/domestic-bg.jpg',
      recommended: [
        'Taj Mahal, Agra', 
        'Jaipur Pink City', 
        'Varanasi Ghats', 
        'Kerala Backwaters', 
        'Goa Beaches',
        'Ladakh Landscapes',
        'Andaman Islands'
      ],
      popular: [
        'Shimla Hill Station', 
        'Darjeeling Tea Gardens', 
        'Rann of Kutch', 
        'Hampi Ruins',
        'Rishikesh Adventure',
        'Coorg Coffee Estates',
        'Khajuraho Temples'
      ]
    },
    'explore-international': {
      image: '/images/international-bg.jpg',
      recommended: [
        'Bali, Indonesia', 
        'Paris, France', 
        'Santorini, Greece', 
        'Tokyo, Japan', 
        'New York, USA',
        'Cape Town, South Africa',
        'Sydney, Australia'
      ],
      popular: [
        'Maldives', 
        'Singapore', 
        'Dubai, UAE', 
        'Phuket, Thailand',
        'Venice, Italy',
        'Zurich, Switzerland',
        'Barcelona, Spain'
      ]
    },
    'pilgrims': {
      image: '/images/himalaya.jpg',
      recommended: [
        'Char Dham Yatra', 
        'Vaishno Devi', 
        'Tirupati Balaji', 
        'Golden Temple', 
        'Kashi Vishwanath',
        'Badrinath Temple',
        'Jagannath Puri'
      ],
      popular: [
        'Rameshwaram', 
        'Haridwar', 
        'Mathura-Vrindavan', 
        'Shirdi',
        'Amarnath Cave',
        'Somnath Temple',
        'Dwarka'
      ]
    },
    'trekking': {
      image: '/images/trekking-bg.jpg',
      recommended: [
        'Roopkund Trek', 
        'Valley of Flowers', 
        'Chadar Trek', 
        'Kedarkantha', 
        'Hampta Pass',
        'Everest Base Camp',
        'Annapurna Circuit'
      ],
      popular: [
        'Brahmatal Trek', 
        'Sandakphu', 
        'Goechala', 
        'Pin Parvati Pass',
        'Markha Valley',
        'Stok Kangri',
        'Rupin Pass'
      ]
    }
  };

  const handleDropdownHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const navItems = [
    { name: 'Home', path: '/home', dropdown: null },
    { name: 'Explore Bharat', path: '/domestic', dropdown: 'explore-bharat' },
    { name: 'Explore International', path: '/international', dropdown: 'explore-international' },
    { name: 'Pilgrims', path: '/pilgrimage', dropdown: 'pilgrims' },
    { name: 'Trekking', path: '/trekking', dropdown: 'trekking' },
    { name: 'About Us', path: '/about-us', dropdown: null },
    { name: 'Contact', path: '/contact', dropdown: null }
  ];

  return (
    <>
      {/* Custom cursor */}
      {activeDropdown && (
        <motion.div
          ref={cursorRef}
          className="fixed top-0 left-0 pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="w-8 h-8 rounded-full border-2 border-[#FF894C] mix-blend-difference"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{ 
              scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" }
            }}
          />
        </motion.div>
      )}

      <header 
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
          ${isSticky || isHoveringNav || activeDropdown ? 'py-3 bg-white/95 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'}`}
        onMouseEnter={() => setIsHoveringNav(true)}
        onMouseLeave={() => setIsHoveringNav(false)}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.img 
                src="/logo.png" 
                alt="Travel n Explore Logo" 
                className={`h-10 transition-all duration-300 transform
                  ${isSticky || isHoveringNav || activeDropdown ? 'brightness-100' : 'brightness-0 invert'}`}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            {/* Mobile Menu Toggle */}
            <motion.div
              className={`text-2xl cursor-pointer lg:hidden transition-colors duration-300
                ${isSticky || isHoveringNav || activeDropdown ? 'text-[#363636]' : 'text-white'}`}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              role="button"
              tabIndex={0}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </motion.div>
            
            {/* Navigation Links */}
            <AnimatePresence>
              <nav className={`lg:flex-1 lg:flex lg:justify-center ${isMobileMenuOpen ? 'block absolute top-full left-0 w-full' : 'hidden lg:block'}`}>
                <motion.ul 
                  className={`flex lg:flex-row flex-col items-center justify-center gap-1 lg:gap-3
                    ${isMobileMenuOpen 
                      ? 'max-h-screen py-2 bg-white/95 backdrop-blur-md shadow-lg' 
                      : 'max-h-0'}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {navItems.map((item, index) => {
                    const isActive = currentPath === item.path;
                    return (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                        viewport={{ once: true }}
                        className={`${isMobileMenuOpen ? 'border-b border-gray-100 w-full' : ''} relative`}
                        onMouseEnter={() => item.dropdown && handleDropdownHover(item.dropdown)}
                      >
                        <a 
                          href={item.path}
                          className={`relative font-medium text-[15px] tracking-wide transition-all duration-300 py-1.5 px-2 block lg:inline-block
                            ${isSticky || isHoveringNav || activeDropdown ? 'text-[#363636]' : 'text-white'}
                            hover:text-[#FF894C] ${isActive ? 'text-[#FF894C]' : ''}`}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {item.name}
                          <motion.span 
                            className={`absolute -bottom-1 left-0 h-[2px] bg-[#FF894C] transition-all duration-300 opacity-90`}
                            initial={{ width: isActive ? "100%" : "0%" }}
                            whileHover={{ width: "100%" }}
                            animate={{ width: isActive ? "100%" : "0%" }}
                          />
                          {item.dropdown && (
                            <motion.span 
                              className="ml-1 inline-block transition-transform duration-300"
                              animate={{ rotate: activeDropdown === item.dropdown ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              ▾
                            </motion.span>
                          )}
                        </a>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </nav>
            </AnimatePresence>
            
            {/* CTA Button */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.a
                href="#book-now"
                className={`inline-block py-3 px-6 font-medium text-[15px] rounded-full transition-all duration-300
                  ${isSticky || isHoveringNav || activeDropdown
                    ? 'bg-[#FF894C] text-white hover:bg-[#DC2F2F]' 
                    : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#FF894C]'
                  } hover:-translate-y-1 hover:shadow-lg`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(255, 137, 76, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Simplified Dropdown */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div 
            ref={dropdownRef}
            className="fixed top-[72px] left-0 w-full bg-white shadow-xl z-40 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onMouseEnter={() => setIsHoveringDropdown(true)}
            onMouseLeave={() => setIsHoveringDropdown(false)}
          >
            <div className="container mx-auto px-4">
              <div className="py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                  {/* Single Image - Takes 3 columns */}
                  <div className="md:col-span-3">
                    <motion.div 
                      className="relative h-full w-full overflow-hidden rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div 
                        className="aspect-[3/4] w-full h-full relative overflow-hidden rounded-lg"
                        animate={{ 
                          boxShadow: [
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                          ]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <motion.img 
                          src={dropdownContent[activeDropdown].image} 
                          alt="" 
                          className="w-full h-full object-cover object-center"
                          initial={{ scale: 1 }}
                          animate={{ 
                            scale: [1, 1.05, 1],
                            filter: [
                              "brightness(1) contrast(1)",
                              "brightness(1.1) contrast(1.05)",
                              "brightness(1) contrast(1)"
                            ]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                          style={{
                            transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 100}px, ${(mousePosition.y - window.innerHeight / 2) / 100}px)`
                          }}
                        />
                        
                        {/* Animated overlay */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                        />
                        
                        {/* Animated light effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-[#FF894C]/10 via-transparent to-transparent"
                          animate={{
                            opacity: [0, 0.3, 0],
                            rotate: [0, 15],
                            x: ['-10%', '10%'],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Links Section - Takes 9 columns */}
                  <div className="md:col-span-9">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {/* Recommended Places */}
                      <div>
                        <motion.h3 
                          className="text-[#363636] font-bold text-xl mb-6 relative inline-block"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1, duration: 0.4 }}
                        >
                          Recommended Places
                          <motion.div 
                            className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-[#FF894C] to-transparent"
                            initial={{ scaleX: 0, originX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                          />
                        </motion.h3>
                        
                        <motion.div 
                          className="flex flex-col space-y-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {dropdownContent[activeDropdown].recommended.map((place, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + (i * 0.07), duration: 0.4 }}
                              className="relative overflow-hidden"
                            >
                              <motion.div
                                className="absolute left-0 top-1/2 w-0 h-[1px] bg-[#FF894C] -translate-y-1/2"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                              />
                              <a 
                                href="#" 
                                className="text-gray-600 hover:text-[#FF894C] transition-all duration-300 block text-base font-medium pl-0 hover:pl-4"
                                onMouseEnter={(e) => {
                                  if (e.currentTarget.previousSibling) {
                                    e.currentTarget.previousSibling.style.width = '100%';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (e.currentTarget.previousSibling) {
                                    e.currentTarget.previousSibling.style.width = '0';
                                  }
                                }}
                              >
                                {place}
                              </a>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>

                      {/* Popular Places */}
                      <div>
                        <motion.h3 
                          className="text-[#363636] font-bold text-xl mb-6 relative inline-block"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1, duration: 0.4 }}
                        >
                          Popular Places
                          <motion.div 
                            className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-[#FF894C] to-transparent"
                            initial={{ scaleX: 0, originX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                          />
                        </motion.h3>
                        
                        <motion.div 
                          className="flex flex-col space-y-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {dropdownContent[activeDropdown].popular.map((place, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + (i * 0.07), duration: 0.4 }}
                              className="relative overflow-hidden"
                            >
                              <motion.div
                                className="absolute left-0 top-1/2 w-0 h-[1px] bg-[#FF894C] -translate-y-1/2"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                              />
                              <a 
                                href="#" 
                                className="text-gray-600 hover:text-[#FF894C] transition-all duration-300 block text-base font-medium pl-0 hover:pl-4"
                                onMouseEnter={(e) => {
                                  if (e.currentTarget.previousSibling) {
                                    e.currentTarget.previousSibling.style.width = '100%';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (e.currentTarget.previousSibling) {
                                    e.currentTarget.previousSibling.style.width = '0';
                                  }
                                }}
                              >
                                {place}
                              </a>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;