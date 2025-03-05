import React from 'react';
import { motion } from 'framer-motion';

const CustomizePackageSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Package customization options
  const customizationOptions = [
    {
      icon: "✈️",
      title: "Choose Destinations",
      description: "Select multiple destinations for your perfect itinerary"
    },
    {
      icon: "🏨",
      title: "Accommodations",
      description: "From budget to luxury, choose what fits your style"
    },
    {
      icon: "🚗",
      title: "Transportation",
      description: "Pick your preferred mode of transport between locations"
    },
    {
      icon: "🍽️",
      title: "Dining Options",
      description: "Customize meal plans according to your preferences"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#363636] via-[#444] to-[#555] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF894C]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#DC2F2F]/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Section Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#FF894C] text-sm font-bold tracking-wider uppercase mb-2">Design Your Dream Trip</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Customize Your <span className="text-[#FF894C]">Perfect</span> Package
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Create a personalized travel experience tailored exactly to your preferences, 
              timeline, and budget. Our travel experts will bring your dream vacation to life.
            </p>
          </motion.div>

          {/* Customization Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {customizationOptions.map((option, index) => (
              <motion.div
                key={`option-${index}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  backgroundColor: "rgba(255, 137, 76, 0.15)",
                  transition: { duration: 0.3 } 
                }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-white/70">{option.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10"
          >
            <div className="text-center md:text-left md:flex-1">
              <h3 className="text-2xl font-bold mb-2">Ready to Create Your Custom Package?</h3>
              <p className="text-white/80">
                Our travel specialists are ready to help you design the perfect trip
              </p>
            </div>
            
            <div className="flex gap-4">
              <motion.a
                href="/customize-package"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(220, 47, 47, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="py-3 px-8 bg-[#DC2F2F] text-white font-medium rounded-full transition-all duration-300 flex items-center"
              >
                <span>Start Customizing</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#FF894C",
                  color: "#FF894C"
                }}
                whileTap={{ scale: 0.95 }}
                className="py-3 px-8 bg-transparent text-white border border-white/30 font-medium rounded-full transition-all duration-300"
              >
                Contact Expert
              </motion.a>
            </div>
          </motion.div>
          
          {/* Features List */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center mt-12 gap-x-8 gap-y-4 text-center text-white/80"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#FF894C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#FF894C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>24/7 Travel Support</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#FF894C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>Flexible Payment Options</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#FF894C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>Free Cancellation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomizePackageSection;