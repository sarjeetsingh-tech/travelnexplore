import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingProvider from './context/LoadingContext';

// Pages
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/contact';
import CategoryPage from './pages/CategoryPage';
import LocationPage from './pages/LocationPage';
import PackageDetailPage from './pages/PackageDetailPage';

// CSS imports
import './index.css';

function App() {
  return (
    <LoadingProvider>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Category Routes - Use a single route with a parameter */}
            <Route path="/:category" element={<CategoryPage />} />
            
            {/* Location Routes */}
            <Route path="/:category/locations/:location" element={<LocationPage />} />
            
            {/* Package Detail Route */}
            <Route path="/packages/:packageId" element={<PackageDetailPage />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </LoadingProvider>
  );
}

// Placeholder components for other pages
// These would be fully developed in separate files
const DomesticPage = () => <div>Domestic Tours Page</div>;
const InternationalPage = () => <div>International Tours Page</div>;
const TrekkingPage = () => <div>Trekking Adventures Page</div>;
const AboutPage = () => <div>About Us Page</div>;
const ContactPage = () => <div>Contact Us Page</div>;

export default App;