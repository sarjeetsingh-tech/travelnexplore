import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhotoGallery = () => {
  // Gallery filter categories
  const categories = ['All', 'Domestic', 'International', 'Honeymoon', 'Group Tours'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images with categories
  const galleryImages = [
    {
      id: 1,
      src: `/images/testimonial-${Math.floor(Math.random() * 3) + 1}.jpg`,
      alt: 'Taj Mahal, Agra',
      category: 'Domestic',
      location: 'Agra, India'
    },
    {
      id: 2,
      src: `/images/testimonial-${Math.floor(Math.random() * 3) + 1}.jpg`,
      alt: 'Eiffel Tower, Paris',
      category: 'International',
      location: 'Paris, France'
    },
    {
      id: 3,
      src: `/images/testimonial-${Math.floor(Math.random() * 3) + 1}.jpg`,
      alt: 'Maldives Beach Resort',
      category: 'Honeymoon',
      location: 'Maldives'
    },
    {
      id: 4,
      src: `/images/testimonial-${Math.floor(Math.random() * 3) + 1}.jpg`,
      alt: 'Corporate Group Tour',
      category: 'Group Tours',
      location: 'Manali, India'
    },
    {
      id: 5,
      src: `/images/testimonial-${Math.floor(Math.random() * 3) + 1}.jpg`,
      alt: 'Jaipur Palace',
      category: 'Domestic',
      location: 'Jaipur, India'
    },
    {
      id: 6,
      src: `/images/testimonial-${Math.floor(Math.random() * 3) + 1}.jpg`,
      alt: 'Santorini Island',
      category: 'International',
      location: 'Santorini, Greece'
    },
    {
      id: 7,
      src: `/images/testimonial-${Math.floor(Math.random() * 3) + 1}.jpg`,
      alt: 'Bali Beachfront Villa',
      category: 'Honeymoon',
      location: 'Bali, Indonesia'
    },
    {
      id: 8,
      src: `/images/testimonial-${Math.floor(Math.random() * 3) + 1}.jpg`,
      alt: 'School Trip',
      category: 'Group Tours',
      location: 'Shimla, India'
    },
    {
      id: 9,
      src: `/images/testimonial-${Math.floor(Math.random() * 3) + 1}.jpg`,
      alt: 'Kerala Backwaters',
      category: 'Domestic',
      location: 'Kerala, India'
    },
    {
      id: 10,
      src: `/images/testimonial-${Math.floor(Math.random() * 3) + 1}.jpg`,
      alt: 'Swiss Alps',
      category: 'International',
      location: 'Switzerland'
    },
    {
      id: 11,
      src: `/images/testimonial-${Math.floor(Math.random() * 3) + 1}.jpg`,
      alt: 'Venice Canal',
      category: 'Honeymoon',
      location: 'Venice, Italy'
    },
    {
      id: 12,
      src: `/images/testimonial-${Math.floor(Math.random() * 3) + 1}.jpg`,
      alt: 'Corporate Retreat',
      category: 'Group Tours',
      location: 'Goa, India'
    }
  ];
  

  
  // Filter images based on active category
  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  // Image modal
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-[#363636]/10 text-[#363636] text-sm font-bold tracking-wider uppercase py-1 px-3 rounded-full mb-4"
          >
            Our Gallery
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-[#363636]"
          >
            Moments Captured During Our <span className="text-[#DC2F2F]">Journeys</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Browse through our collection of beautiful travel moments. Each photograph tells a story of adventure, 
            discovery, and the joy of exploring new destinations.
          </motion.p>

          {/* Gallery Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: category === activeCategory ? "#DC2F2F" : "white",
                  boxShadow: "0 10px 15px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`py-2 px-6 rounded-full text-sm md:text-base font-medium transition-all duration-300
                  ${category === activeCategory 
                    ? 'bg-[#DC2F2F] text-white shadow-md' 
                    : 'bg-white text-[#363636] border border-gray-200'}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.id}
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 } 
                }}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-bold">{image.alt}</h3>
                  <p className="text-white/90 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    {image.location}
                  </p>
                </div>
                
                <div className="absolute top-3 right-3 bg-[#FF894C] text-white text-xs py-1 px-2 rounded-full">
                  {image.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Load More Button */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#363636",
              color: "white",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="py-3 px-8 bg-white text-[#363636] border-2 border-[#363636] font-medium rounded-full transition-all duration-300"
          >
            Load More Photos
          </motion.button>
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-10"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative max-w-5xl max-h-full rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full h-auto max-h-[80vh] object-contain bg-black"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{selectedImage.alt}</h3>
                  <p className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    {selectedImage.location}
                  </p>
                </div>
                <button 
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 transition-colors duration-300 rounded-full p-2 text-white"
                  onClick={closeModal}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGallery;