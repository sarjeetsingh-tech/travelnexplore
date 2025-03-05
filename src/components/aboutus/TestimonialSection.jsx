import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Rahul and Priya Singh",
      type: "Honeymoon Couple",
      location: "Bali, Indonesia",
      image: "/images/testimonials/couple-bali.jpg",
      quote: "Our honeymoon in Bali was absolutely perfect! Travel N Explore took care of every detail, from luxurious accommodations to private tours. We didn't have to worry about anything and could focus on enjoying this special time together.",
      rating: 5
    },
    {
      name: "The Sharma Family",
      type: "Family Vacation",
      location: "Kerala, India",
      image: "/images/testimonials/family-kerala.jpg",
      quote: "Taking our three children on vacation can be stressful, but Travel N Explore made it so easy. The itinerary was perfectly balanced with activities for both adults and kids. The houseboat stay was a highlight none of us will ever forget!",
      rating: 5
    },
    {
      name: "St. Xavier's College",
      type: "Educational Tour",
      location: "Rajasthan Heritage Tour",
      image: "/images/testimonials/school-rajasthan.jpg",
      quote: "Organizing a trip for 60 students seemed overwhelming until we partnered with Travel N Explore. Their expertise in educational tours and attention to safety made this a valuable learning experience while keeping everything fun and engaging.",
      rating: 5
    },
    {
      name: "GlobalTech Solutions",
      type: "Corporate Retreat",
      location: "Goa, India",
      image: "/images/testimonials/corporate-goa.jpg",
      quote: "Our team building retreat exceeded all expectations. The perfect mix of business facilities for our workshops and relaxation opportunities. Every team member came back rejuvenated and more connected. Will definitely book again next year!",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    nextTestimonial();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevTestimonial();
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8F8F8] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#DC2F2F]/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-[#FF894C]/5 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-[#363636]"
          >
            What Our <span className="text-[#FF894C]">Clients</span> Say About Us
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear from travelers who have experienced 
            the Travel N Explore difference.
          </motion.p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Testimonial Carousel */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-7 gap-8 items-center">
                  {/* Testimonial Image - 3 columns on md+ */}
                  <div className="md:col-span-3">
                    <div className="relative">
                      <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden">
                        <img 
                          src={testimonials[activeIndex].image || ''} 
                          alt={testimonials[activeIndex].name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg py-2 px-4 shadow-md">
                        <p className="text-[#363636] font-medium text-sm">
                          {testimonials[activeIndex].type}
                        </p>
                      </div>
                      <div className="absolute -bottom-5 -right-5 bg-[#FF894C] text-white py-3 px-6 rounded-lg shadow-lg transform rotate-3">
                        <p className="text-sm font-medium">{testimonials[activeIndex].location}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial Content - 4 columns on md+ */}
                  <div className="md:col-span-4">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="text-[#DC2F2F] mb-4">
                          <svg className="w-10 h-10 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
                          {testimonials[activeIndex].quote}
                        </p>
                      </div>
                      
                      <div>
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold text-[#363636]">{testimonials[activeIndex].name}</h3>
                        <p className="text-[#FF894C] font-medium">Verified Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center text-[#363636] hover:text-[#DC2F2F] transition-colors duration-300 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center text-[#363636] hover:text-[#DC2F2F] transition-colors duration-300 focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#DC2F2F] w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Additional stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "96%", label: "Client Satisfaction" },
            { number: "10,000+", label: "Happy Travelers" },
            { number: "1,200+", label: "Tours Completed" },
            { number: "50+", label: "Awards Won" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#DC2F2F] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;