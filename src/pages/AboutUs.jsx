import React, { useEffect, useState, useRef } from 'react';
import { useLoading } from '../context/LoadingContext';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/home/SocialLinks';
import AboutHero from '../components/aboutus/AboutHero';
import AboutContent from '../components/aboutus/AboutContent';
import PhotoGallery from '../components/aboutus/PhotoGallery';
import Footer from '../components/Footer';
import ContactMapSection from '../components/aboutus/ContactMapSection';
import TeamSection from '../components/aboutus/TeamSection';
import TestimonialSection from '../components/aboutus/TestimonialSection';

// Import Components


const AboutUs = () => {
  const { showLoading, hideLoading } = useLoading();
  const [contentReady, setContentReady] = useState(false);
  const initialRenderRef = useRef(true);

  // Show loading on initial render only
  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      showLoading();
      
      // Hide loading as soon as DOM is ready
      window.requestAnimationFrame(() => {
        // Add a small delay to allow for initial rendering
        setTimeout(() => {
          setContentReady(true);
          hideLoading();
        }, 800);
      });
    }
    
    return () => {
      hideLoading();
    };
  }, [showLoading, hideLoading]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SocialLinks />
      <AboutHero />
      <AboutContent />
     
      <TestimonialSection />
      <PhotoGallery />
      <ContactMapSection />
      <Footer />
    </div>
  );
};

export default AboutUs;