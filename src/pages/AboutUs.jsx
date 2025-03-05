import React from 'react';
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
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SocialLinks />
      <AboutHero />
      <AboutContent />
      <TeamSection />
      <TestimonialSection />
      <PhotoGallery />
      <ContactMapSection />
      <Footer />
    </div>
  );
};

export default AboutUs;