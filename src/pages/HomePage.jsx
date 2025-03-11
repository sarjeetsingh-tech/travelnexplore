import React, { useEffect } from 'react';
import { useLoading } from '../context/LoadingContext';
import { Link } from 'react-router-dom';
import usePageTransition from '../hooks/usePageTransition';

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
  // Use our custom hook for page transitions with loading
  usePageTransition();

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