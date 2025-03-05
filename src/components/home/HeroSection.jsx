import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);
  
  const slides = [
    {
      title: "Discover the",
      highlight: "Domestic",
      suffix: "Wonders",
      description: "Explore the hidden gems of your own country with our carefully curated domestic travel packages. From serene beaches to mystical mountains, we've got it all covered.",
      btnText: "Explore Packages",
      imgSrc: "/images/domestic-taj.jpg",
      bgSrc: "/images/domestic-bg.jpg"
    },
    {
      title: "Experience",
      highlight: "International",
      suffix: "Adventures",
      description: "Broaden your horizons with our international travel packages. Immerse yourself in diverse cultures, cuisines, and traditions across the globe.",
      btnText: "View Destinations",
      imgSrc: "/images/international-plane.jpg",
      bgSrc: "/images/international-bg.jpg"
    },
    {
      title: "Conquer",
      highlight: "Trekking",
      suffix: "Trails",
      description: "Challenge yourself with our thrilling trekking expeditions. From beginner-friendly trails to challenging summits, find your perfect adventure with us.",
      btnText: "Find Your Trek",
      imgSrc: "/images/trekking-mount.jpg",
      bgSrc: "/images/trekking-bg.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    // Start the slideshow
    slideInterval.current = setInterval(nextSlide, 6000);
    return () => {
      clearInterval(slideInterval.current);
    };
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(nextSlide, 6000);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={`slide-${index}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(54, 54, 54, 0.8), rgba(54, 54, 54, 0.4)), url(${slide.bgSrc || '/api/placeholder/1920/1080'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mt-20">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#F8F8F8]"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {slide.title} <span className="text-[#FF894C]">{slide.highlight}</span> {slide.suffix}
                </h2>
                <p className="text-lg mb-8 max-w-xl">
                  {slide.description}
                </p>
                <a
                  href="#packages"
                  className="inline-block py-3 px-8 bg-[#DC2F2F] text-white font-medium rounded-full transition-all duration-300 
                    hover:bg-[#FF894C] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#DC2F2F]/30"
                >
                  {slide.btnText}
                </a>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: index === currentSlide ? 1 : 0, x: index === currentSlide ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:flex justify-center"
              >
                <img
                  src={slide.imgSrc || '/api/placeholder/600/400'}
                  alt={`${slide.highlight} Travel`}
                  className="w-4/5 rounded-2xl shadow-2xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Navigation */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${index === currentSlide ? 'bg-[#FF894C] transform scale-125' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;