import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom'; // Import useLocation to detect current route

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current route
  const currentPath = location.pathname === '/' ? '/home' : location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]); // Re-run when location changes

  // Navigation items with their paths
  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Domestic', path: '/domestic' },
    { name: 'International', path: '/international' },
    { name: 'Trekking', path: '/trekking' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Add spacer to prevent content from hiding under navbar */}
      <div className="h-24"></div>
      
      <header className={`fixed top-0 left-0 w-full py-6 px-[5%] flex justify-between items-center z-50 transition-all duration-500 ${
        isSticky ? 'py-4 shadow-lg bg-[#F8F8F8]/95 backdrop-blur-md' : 'bg-transparent'
      }`}>
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/logo.png" alt="Travel n Explore Logo" className="h-12 mr-3" />
          <h1 className="text-[#363636] text-2xl font-bold">
            {/* Travel<span className="text-[#DC2F2F]">n</span>Explore */}
          </h1>
        </motion.div>
        
        {/* Mobile Menu Toggle */}
        <div
          className="text-2xl cursor-pointer lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          role="button"
          tabIndex={0}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </div>
        
        {/* Navigation Links */}
        <nav className={`lg:block ${isMobileMenuOpen ? 'block absolute top-full left-0 w-full bg-[#F8F8F8] shadow-md' : 'hidden'}`}>
          <ul className={`flex lg:flex-row flex-col lg:items-center lg:gap-8 ${
            isMobileMenuOpen ? 'max-h-screen py-2' : 'max-h-0'
          }`}>
            {navItems.map((item, index) => {
              const isActive = currentPath === item.path;
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className={isMobileMenuOpen ? 'border-b border-gray-200' : ''}
                >
                  <a
                    href={item.path}
                    className={`relative text-[#363636] font-medium text-lg transition-colors duration-300 py-2 px-4 block lg:inline-block
                      hover:text-[#FF894C] ${isActive ? 'text-[#FF894C]' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                    <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-[#FF894C] transition-all duration-300
                      ${isActive ? 'w-full' : ''} hover:w-full`}>
                    </span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </nav>
        
        {/* CTA Button */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#book-now"
            className="inline-block py-3 px-6 bg-[#DC2F2F] text-white font-medium rounded-full transition-all duration-300
              hover:bg-[#FF894C] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#DC2F2F]/30"
          >
            Book Now
          </a>
        </motion.div>
      </header>
    </>
  );
};

export default Navbar;