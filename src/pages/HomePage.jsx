import React, { useEffect, useState, useRef } from 'react';
import { useLoading } from '../context/LoadingContext';
import { Link } from 'react-router-dom';

// Import Components
import ResponsiveNavbar from '../components/ResponsiveNavbar';
import Footer from '../components/Footer';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import PackagesSection from '../components/home/PackagesSection';
import SocialLinks from '../components/home/SocialLinks';
import QuickConnect from '../components/QuickConnect';

// import NewsletterSection from '../components/NewsletterSection';
// import PartnersSection from '../components/PartnersSection';
import CustomizePackageSection from '../components/home/CustomizePackageSection';
import TestimonialSection from '../components/aboutus/TestimonialSection';

const HomePage = () => {
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
    <div className="min-h-screen bg-[#F8F8F8]">
      <ResponsiveNavbar />
      <SocialLinks />
      <QuickConnect />
      <HeroSection />
      
   
      
      <CategorySection />
      <PackagesSection />
      <TestimonialSection />
      <CustomizePackageSection />
      {/* <NewsletterSection />
      <PartnersSection /> */}
      <Footer />
    </div>
  );
};

export default HomePage;