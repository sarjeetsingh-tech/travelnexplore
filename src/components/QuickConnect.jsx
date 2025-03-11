import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickConnect = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Contact options
  const contactOptions = [
    {
      name: 'WhatsApp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      ),
      url: 'https://wa.me/+919828038888',
      color: '#25D366',
      text: 'WhatsApp'
    },
    {
      name: 'Call',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.074 15.074 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
        </svg>
      ),
      url: 'tel:+919991005254',
      color: '#4CAF50',
      text: 'Call'
    },
    {
      name: 'Email',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      url: 'mailto:contact@travelnexplore.in',
      color: '#FF5722',
      text: 'Email'
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-20 right-0 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden mb-4 border border-gray-100"
            style={{ width: '280px' }}
          >
            <div className="p-5 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-1">How can we help you?</h3>
              <p className="text-sm text-gray-500">Connect with our travel experts</p>
            </div>
            
            <div className="p-4">
              <div className="grid grid-cols-3 gap-3 mb-4">
                {contactOptions.map((option, index) => (
                  <motion.a
                    key={option.name}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-2 text-white"
                      style={{ backgroundColor: option.color }}
                    >
                      {option.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-700">{option.text}</span>
                  </motion.a>
                ))}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-sm text-gray-600 mb-2">Available 24/7 for your travel needs</p>
                <p className="text-xs text-gray-500">Our team typically responds within 30 minutes</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5
        }}
        className="relative"
      >
        {/* Main button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center space-x-2 bg-white text-gray-800 rounded-full shadow-lg border border-gray-200 z-10 md:px-5 md:py-3 px-3 py-2 md:bottom-0 bottom-20"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative flex items-center justify-center md:w-10 md:h-10 w-8 h-8 bg-gradient-to-br from-[#FF894C] to-[#DC2F2F] rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="md:h-5 md:w-5 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 md:w-3 md:h-3 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          
          <div className="text-left">
            <p className="font-bold md:text-sm text-xs leading-tight">Let's Connect</p>
            <p className="md:text-xs text-[10px] text-gray-500">Travel experts online</p>
          </div>
        </motion.button>
        
        {/* Animated rings */}
        <div className="absolute top-1/2 left-5 -translate-y-1/2 -z-10">
          <motion.div 
            className="absolute inset-0 w-10 h-10 rounded-full bg-[#FF894C]/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute inset-0 w-10 h-10 rounded-full bg-[#FF894C]/10"
            animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              delay: 0.3,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default QuickConnect; 