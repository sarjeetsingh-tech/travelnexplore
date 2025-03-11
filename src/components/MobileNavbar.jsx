import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();
  
  // Navigation data structure
  const navSections = [
    {
      id: 'explore-bharat',
      title: 'Explore Bharat',
      path: '/domestic',
      subsections: [
        {
          title: 'Recommended Places',
          links: [
            { name: 'Taj Mahal, Agra', path: '/domestic/locations/agra' },
            { name: 'Jaipur Pink City', path: '/domestic/locations/jaipur' },
            { name: 'Varanasi Ghats', path: '/domestic/locations/varanasi' },
            { name: 'Kerala Backwaters', path: '/domestic/locations/kerala' },
            { name: 'Goa Beaches', path: '/domestic/locations/goa' },
            { name: 'Ladakh Landscapes', path: '/domestic/locations/ladakh' },
            { name: 'Andaman Islands', path: '/domestic/locations/andaman' }
          ]
        },
        {
          title: 'Popular Places',
          links: [
            { name: 'Shimla Hill Station', path: '/domestic/locations/shimla' },
            { name: 'Darjeeling Tea Gardens', path: '/domestic/locations/darjeeling' },
            { name: 'Rann of Kutch', path: '/domestic/locations/kutch' },
            { name: 'Hampi Ruins', path: '/domestic/locations/hampi' },
            { name: 'Rishikesh Adventure', path: '/domestic/locations/rishikesh' },
            { name: 'Coorg Coffee Estates', path: '/domestic/locations/coorg' },
            { name: 'Khajuraho Temples', path: '/domestic/locations/khajuraho' }
          ]
        }
      ]
    },
    {
      id: 'explore-international',
      title: 'Explore International',
      path: '/international',
      subsections: [
        {
          title: 'Recommended Places',
          links: [
            { name: 'Bali, Indonesia', path: '/international/locations/bali' },
            { name: 'Paris, France', path: '/international/locations/paris' },
            { name: 'Santorini, Greece', path: '/international/locations/santorini' },
            { name: 'Tokyo, Japan', path: '/international/locations/tokyo' },
            { name: 'New York, USA', path: '/international/locations/new-york' },
            { name: 'Cape Town, South Africa', path: '/international/locations/cape-town' },
            { name: 'Sydney, Australia', path: '/international/locations/sydney' }
          ]
        },
        {
          title: 'Popular Places',
          links: [
            { name: 'Maldives', path: '/international/locations/maldives' },
            { name: 'Singapore', path: '/international/locations/singapore' },
            { name: 'Dubai, UAE', path: '/international/locations/dubai' },
            { name: 'Phuket, Thailand', path: '/international/locations/phuket' },
            { name: 'Venice, Italy', path: '/international/locations/venice' },
            { name: 'Zurich, Switzerland', path: '/international/locations/zurich' }
          ]
        }
      ]
    },
    {
      id: 'trekking-adventures',
      title: 'Trekking Adventures',
      path: '/trekking',
      subsections: [
        {
          title: 'Popular Treks',
          links: [
            { name: 'Everest Base Camp', path: '/trekking/locations/everest-base-camp' },
            { name: 'Annapurna Circuit', path: '/trekking/locations/annapurna' },
            { name: 'Inca Trail', path: '/trekking/locations/inca-trail' },
            { name: 'Kilimanjaro', path: '/trekking/locations/kilimanjaro' },
            { name: 'Chadar Trek', path: '/trekking/locations/chadar' }
          ]
        }
      ]
    },
    {
      id: 'pilgrimage-tours',
      title: 'Pilgrimage Tours',
      path: '/pilgrimage',
      subsections: [
        {
          title: 'Sacred Destinations',
          links: [
            { name: 'Char Dham Yatra', path: '/pilgrimage/locations/char-dham' },
            { name: 'Varanasi', path: '/pilgrimage/locations/varanasi' },
            { name: 'Amarnath', path: '/pilgrimage/locations/amarnath' }
          ]
        }
      ]
    },
    {
      id: 'about-us',
      title: 'About Us',
      path: '/about-us',
      subsections: []
    },
    {
      id: 'contact',
      title: 'Contact',
      path: '/contact',
      subsections: []
    }
  ];

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when changing routes
  useEffect(() => {
    setIsOpen(false);
    setExpandedSection(null);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Toggle section expansion
  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="lg:hidden" ref={navRef}>
      {/* Mobile Navbar */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-10">
            <div className="flex items-center">
              <img 
                src="logo.png" 
                alt="Travel N Explore" 
                className="h-12 w-auto"
              />
             
            </div>
          </Link>

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`z-10 p-2 focus:outline-none transition-colors duration-300 ${
              isSticky ? 'text-[#363636]' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end justify-center">
              <span 
                className={`block h-0.5 rounded-full transition-all duration-300 ${isOpen ? 'w-6 transform rotate-45 translate-y-1.5 bg-[#FF894C]' : 'w-6 bg-current'}`}
              ></span>
              <span 
                className={`block h-0.5 rounded-full my-1 transition-all duration-300 ${isOpen ? 'w-0 opacity-0 bg-[#FF894C]' : 'w-4 bg-current'}`}
              ></span>
              <span 
                className={`block h-0.5 rounded-full transition-all duration-300 ${isOpen ? 'w-6 transform -rotate-45 -translate-y-1.5 bg-[#FF894C]' : 'w-5 bg-current'}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white"
            style={{ paddingTop: '80px' }}
          >
            <div className="h-full overflow-y-auto pb-20">
              {/* Navigation Links */}
              <div className="container mx-auto px-4 py-4">
                {navSections.map((section) => (
                  <div key={section.id} className="border-b border-gray-100">
                    <div className="py-3">
                      {section.subsections.length > 0 ? (
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="flex justify-between items-center w-full text-center"
                        >
                          <span className="text-lg font-medium text-[#FF894C] mx-auto">{section.title}</span>
                          <svg
                            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                              expandedSection === section.id ? 'transform rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>
                      ) : (
                        <Link
                          to={section.path}
                          className="block text-lg font-medium text-[#FF894C] text-center"
                        >
                          {section.title}
                        </Link>
                      )}
                    </div>

                    {/* Dropdown Content */}
                    <AnimatePresence>
                      {expandedSection === section.id && section.subsections.length > 0 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col items-center pb-4">
                            <Link
                              to={section.path}
                              className="inline-block mb-4 px-4 py-2 bg-[#FF894C] text-[#363636] font-large"
                            >
                              View All 
                            </Link>

                            {section.subsections.map((subsection, idx) => (
                              <div key={idx} className="mb-4 w-full text-center">
                                <h3 className="text-sm font-bold text-[#FF894C] uppercase tracking-wider mb-2">
                                  {subsection.title}
                                </h3>
                                <ul className="space-y-2">
                                  {subsection.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                      <Link
                                        to={link.path}
                                        className="text-gray-600 hover:text-[#FF894C] transition-colors duration-200 block text-base"
                                      >
                                        {link.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar; 