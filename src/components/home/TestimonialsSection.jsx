import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "/images/testimonial-1.jpg",
      text: "The Bali Paradise Escape was truly amazing! Every detail was perfectly arranged, from the luxurious accommodations to the guided tours. Will definitely book with TravelNExplore again!",
      rating: 5,
    },
    {
      name: "Rajat Sharma",
      location: "Delhi, India",
      image: "/images/testimonial-2.jpg",
      text: "Our family trip to Kerala was beautifully organized. The houseboat experience in the backwaters was unforgettable. Thank you for these wonderful memories!",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      location: "London, UK",
      image: "/images/testimonial-3.jpg",
      text: "The Swiss Alps Experience exceeded all my expectations. The views were breathtaking, and the itinerary was perfectly balanced between activities and relaxation time.",
      rating: 4,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#F8F8F8] to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#363636] mb-4">
            What Our <span className="text-[#DC2F2F]">Travelers</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover firsthand experiences from travelers who have explored the world with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={`testimonial-${i}`}
              ref={ref}
              custom={i}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)", 
                transition: { duration: 0.3 } 
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Larger Image on Top */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={testimonial.image || '/api/placeholder/400/300'}
                  alt={testimonial.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Overlay Rating */}
                <div className="absolute bottom-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="text-yellow-400 text-lg mx-0.5">
                      {index < testimonial.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#FF894C]/10 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-[#FF894C]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#363636]">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Verified Traveler</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[#FF894C] font-medium flex items-center"
                  >
                    Read full story
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="py-3 px-8 bg-white text-[#363636] font-medium rounded-full border border-gray-200 transition-all duration-300 hover:border-[#FF894C] hover:text-[#FF894C]"
          >
            View More Testimonials
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;