import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ResponsiveNavbar from '../ResponsiveNavbar';
import Footer from '../Footer';
import SocialLinks from '../home/SocialLinks';
import QuickConnect from '../QuickConnect';
import { useLocation } from 'react-router-dom';

const PageLayout = ({ 
  children, 
  heroImage, 
  title, 
  subtitle,
  overlay = 'bg-gradient-to-b from-black/70 via-black/50 to-transparent'
}) => {
  const location = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <ResponsiveNavbar />
      <SocialLinks />
      <QuickConnect />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImage || '/images/default-hero.jpg'} 
            alt={title} 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay */}
          <div className={`absolute inset-0 ${overlay}`}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl max-w-2xl drop-shadow-md"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        
        {/* Animated Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <motion.path 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,
                delay: 0.5,
                ease: "easeOut"
              }}
              fill="#F8F8F8" 
              fillOpacity="1" 
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,186.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></motion.path>
          </svg>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="relative z-20">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout; 