import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CategorySection = () => {
  const categories = [
    {
      title: "Domestic Escapes",
      description: "Discover the beauty of your own country with our premium domestic packages.",
      imgSrc: "/images/domestic-taj.jpg",
      link: "/domestic",
      icon: "✈️"
    },
    {
      title: "International Journeys",
      description: "Experience exotic destinations and make memories that last a lifetime.",
      imgSrc: "/images/international-plane.jpg",
      link: "/international",
      icon: "🌏"
    },
    {
      title: "Trekking Adventures",
      description: "Challenge yourself with our thrilling trekking expeditions worldwide.",
      imgSrc: "/images/trekking-mount.jpg",
      link: "/trekking",
      icon: "🏔️"
    },
    {
      title: "Pilgrimage Tours",
      description: "Embark on a spiritual journey to sacred destinations and holy sites.",
      imgSrc: "/images/pilgrimage-temple.jpg",
      link: "/pilgrimage",
      icon: "🕍"
    }
  ];

  return (
    <section className="relative z-30 py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#363636] mb-4">
            Explore <span className="text-[#FF894C]">Our</span> Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our specialized travel categories, each designed to offer you a unique and unforgettable experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={`category-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(255, 137, 76, 0.15)"
              }}
              className="bg-white rounded-2xl overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-[#FF894C] mix-blend-multiply opacity-0 hover:opacity-20 transition-opacity duration-500 z-10"
                  whileHover={{ opacity: 0.2 }}
                />
                <motion.img
                  src={category.imgSrc || '/api/placeholder/600/400'}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div 
                  className="absolute top-4 right-4 bg-white p-3 rounded-full text-2xl shadow-lg z-20"
                  initial={{ opacity: 0, rotate: -20 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  whileHover={{ 
                    rotate: 15, 
                    scale: 1.2,
                    boxShadow: "0 10px 25px rgba(255, 137, 76, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {category.icon}
                </motion.div>
                
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-20 z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                />
              </div>
              
              <div className="p-8 flex-grow flex flex-col relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-[#363636] mb-3">
                    <span className="relative inline-block">
                      {category.title}
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-1 bg-[#FF894C]"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                      />
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {category.description}
                  </p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto"
                >
                  <Link
                    to={category.link}
                    className="group flex items-center justify-between py-3 px-8 bg-[#FF894C] text-white font-medium rounded-full transition-all duration-300 
                      hover:bg-[#FF894C]/90 hover:shadow-lg hover:shadow-[#FF894C]/20"
                  >
                    <span>Explore</span>
                    <motion.span 
                      className="transform transition-transform duration-300"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#FF894C]/10 z-0"
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#FF894C]/5 z-0"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
    </section>
  );
};

export default CategorySection;