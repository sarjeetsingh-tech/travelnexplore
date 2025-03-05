import React from 'react';
import { motion } from 'framer-motion';

const CategorySection = () => {
  const categories = [
    {
      title: "Domestic Escapes",
      description: "Discover the beauty of your own country with our premium domestic packages.",
      imgSrc: "/images/domestic-taj.jpg",
      link: "#domestic"
    },
    {
      title: "International Journeys",
      description: "Experience exotic destinations and make memories that last a lifetime.",
      imgSrc: "/images/international-plane.jpg",
      link: "#international"
    },
    {
      title: "Trekking Adventures",
      description: "Challenge yourself with our thrilling trekking expeditions worldwide.",
      imgSrc: "/images/trekking-mount.jpg",
      link: "#trekking"
    }
  ];

  return (
    <section className="relative z-30 py-24 bg-gradient-to-b from-[#363636] to-[#F8F8F8]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#F8F8F8] mb-4">
            Explore <span className="text-[#FF894C]">Our</span> Categories
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose from our specialized travel categories, each designed to offer you a unique and unforgettable experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={`category-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.imgSrc || '/api/placeholder/600/400'}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <motion.div 
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </motion.div>
              </div>
              
              <div className="p-6">
                <p className="text-[#363636] mb-4">
                  {category.description}
                </p>
                <a
                  href={category.link}
                  className="inline-block py-2 px-6 bg-[#FF894C] text-white font-medium rounded-full transition-all duration-300 
                    hover:bg-[#DC2F2F] hover:shadow-md"
                >
                  Explore
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;