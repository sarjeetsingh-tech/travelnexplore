import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Sunset Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/footer.png" 
          alt="Sunset" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/60 to-transparent"></div>
      </div>
      
      {/* Animated Wave SVG */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <motion.path 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            fill="#ffffff" 
            fillOpacity="0.2" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,186.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></motion.path>
        </svg>
      </div>
      
      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and About - Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/4"
          >
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Travel N Explore Logo" className="h-12 w-12" />
              <h3 className="ml-3 text-2xl font-bold font-['Poppins']">
                Travel<span className="text-[#FF894C]">n</span>Explore
              </h3>
            </div>
            <p className="text-gray-200 mb-4 leading-relaxed">
              Your ultimate travel companion for domestic and international adventures.
              Discover, explore, and create unforgettable memories with us.
            </p>
          </motion.div>

          {/* Empty Middle Space */}
          <div className="hidden md:block md:w-1/3"></div>

          {/* Contact Info - Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:w-1/4"
          >
            <h3 className="text-xl font-bold mb-4 font-['Poppins'] relative inline-block">
              Contact Us
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 h-1 bg-[#FF894C] rounded-full"
              ></motion.span>
            </h3>
            <div className="space-y-3">
              <motion.p 
                className="flex items-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="mr-3 bg-white/10 p-1.5 rounded-md flex-shrink-0">📍</span>
                <span className="text-gray-200">JMD Megapolis, Sector-48, Gurugram</span>
              </motion.p>
              <motion.p 
                className="flex items-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="mr-3 bg-white/10 p-1.5 rounded-md flex-shrink-0">📱</span>
                <span className="text-gray-200">+91 9991005254</span>
              </motion.p>
              <motion.p 
                className="flex items-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="mr-3 bg-white/10 p-1.5 rounded-md flex-shrink-0">✉️</span>
                <span className="text-gray-200">contact@travelnexplore.in</span>
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Animated Divider */}
        <div className="relative my-8">
          <motion.div 
            className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        {/* Copyright and Developer Info - Centered */}
        <div className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-300 mb-4"
          >
            © {new Date().getFullYear()} Travel n Explore. All rights reserved.
          </motion.p>
          
          {/* Simple, Elegant Developer Credit */}
          <motion.a
            href="https://binaryfusion.tech"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gray-400 text-sm">Developed by</span>
            <span className="text-white font-semibold relative">
              <span className="text-[#FF894C]">Binary</span>Fusion
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF894C]"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;