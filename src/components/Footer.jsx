import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#363636] text-[#F8F8F8] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Travel N Explore Logo" className="h-10 mr-2 bg-white rounded-full p-1" />
              <h3 className="text-xl font-bold">
                Travel<span className="text-[#DC2F2F]">n</span>Explore
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your ultimate travel companion for domestic and international adventures.
              Discover, explore, and create unforgettable memories with us.
            </p>
            
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-[#FF894C]"></span>
            </h3>
            <ul className="space-y-2">
              {['Home', 'Domestic', 'International', 'Trekking', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-[#FF894C] transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Popular Destinations
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-[#FF894C]"></span>
            </h3>
            <ul className="space-y-2">
              {['Bali, Indonesia', 'Paris, France', 'Santorini, Greece', 'Tokyo, Japan', 'New York, USA', 'Manali, India'].map((destination) => (
                <li key={destination}>
                  <a 
                    href="#destinations"
                    className="text-gray-300 hover:text-[#FF894C] transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> {destination}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-[#FF894C]"></span>
            </h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <span>123 Travel Street, Adventure City, 10001</span>
              </p>
              <p className="flex items-start">
                <span className="mr-3 mt-1">📱</span>
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-start">
                <span className="mr-3 mt-1">✉️</span>
                <span>info@travelnexplore.com</span>
              </p>
              
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#555] mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Travel n Explore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;