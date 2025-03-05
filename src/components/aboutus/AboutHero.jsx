import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutHero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const parallaxRef = useRef(null);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  const stats = [
    { number: '13+', label: 'Years Experience' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '500+', label: 'Tour Packages' },
    { number: '100+', label: 'Destinations' }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] z-0">
        <div className="h-full w-full bg-[url('/images/subtle-texture.png')] bg-repeat"></div>
      </div>
      
      {/* Minimalist background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#DC2F2F] opacity-[0.03] blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#FF894C] opacity-[0.03] blur-[120px]"></div>
        
        {/* Thin line elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 w-px h-full bg-white opacity-[0.03]"></div>
          <div className="absolute left-1/2 top-0 w-px h-full bg-white opacity-[0.03]"></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-white opacity-[0.03]"></div>
          <div className="absolute top-1/4 left-0 h-px w-full bg-white opacity-[0.03]"></div>
          <div className="absolute top-3/4 left-0 h-px w-full bg-white opacity-[0.03]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            {/* Left Content Area */}
            <motion.div 
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="lg:col-span-3"
            >
              {/* Minimal label */}
              <motion.div 
                variants={fadeInUp}
                className="mb-4"
              >
                <span className="text-[#FF894C] font-light tracking-widest uppercase text-xs">
                  Est. 2010
                </span>
              </motion.div>
              
              {/* Main headline */}
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight"
              >
                Travel <span className="font-normal text-[#DC2F2F]">N</span> Explore
                <span className="block text-2xl md:text-3xl text-gray-400 mt-2 font-extralight">
                  By JETS Duniya Travel Pvt. Ltd.
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-300 font-extralight mb-12 max-w-xl leading-relaxed"
              >
                A technology-driven travel management company crafting exceptional journeys since 2010.
              </motion.p>
              
              {/* CTA Actions */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-5"
              >
                <a 
                  href="#our-story" 
                  className="group relative px-8 py-3 border border-[#DC2F2F] text-[#DC2F2F] font-light hover:text-white transition-colors duration-300"
                >
                  <span className="relative z-10">Our Story</span>
                  <div className="absolute inset-0 bg-[#DC2F2F] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>
                
                <a 
                  href="#contact" 
                  className="group relative px-8 py-3 border border-white/20 text-white font-light hover:border-white/60 transition-colors duration-300"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Us</span>
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right Image Area */}
            <div className="lg:col-span-2 relative hidden lg:block">
              <div className="relative">
                {/* Minimal frame */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute inset-0 border border-white/10"
                ></motion.div>
                
                {/* Main image with parallax effect */}
                <div className="relative overflow-hidden">
                  <div ref={parallaxRef} className="w-full">
                    <img 
                      src="/images/minimal-travel.jpg" 
                      alt="Travel Experience" 
                      className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                </div>
                
                {/* Accent line */}
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: '80%' }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-10 -right-10 w-px bg-[#DC2F2F]"
                ></motion.div>
              </div>
            </div>
          </div>
          
          {/* Stats row */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.5,
                  duration: 0.8
                }
              }
            }}
            className="mt-24 pt-12 border-t border-white/5"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1,
                      transition: { 
                        delay: 0.7 + (index * 0.1),
                        duration: 0.6
                      }
                    }
                  }}
                  className="group"
                >
                  <div className="text-4xl md:text-5xl font-light text-white mb-2 group-hover:text-[#FF894C] transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-light text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                  <div className="h-px w-0 group-hover:w-full bg-[#FF894C] mt-2 transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop" 
            }}
          >
            <div className="flex flex-col items-center">
              <div className="text-white/30 text-xs uppercase tracking-widest mb-2 font-light">Scroll</div>
              <div className="w-px h-8 bg-white/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;