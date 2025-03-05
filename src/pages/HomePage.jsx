import React from 'react';

// Import Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import PackagesSection from '../components/home/PackagesSection';
import SocialLinks from '../components/home/SocialLinks';

// import NewsletterSection from '../components/NewsletterSection';
// import PartnersSection from '../components/PartnersSection';
import CustomizePackageSection from '../components/home/CustomizePackageSection';
import TestimonialSection from '../components/aboutus/TestimonialSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navbar />
      <SocialLinks />
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