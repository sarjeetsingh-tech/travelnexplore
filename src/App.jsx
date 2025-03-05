import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage';

// CSS imports
import './index.css';
import AboutUs from './pages/AboutUs';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
          {/* <Route path="/domestic" element={<DomesticPage />} />
          <Route path="/international" element={<InternationalPage />} />
          <Route path="/trekking" element={<TrekkingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/packages/:id" element={<PackageDetailPage />} /> */}
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

// Placeholder components for other pages
// These would be fully developed in separate files
const DomesticPage = () => <div>Domestic Tours Page</div>;
const InternationalPage = () => <div>International Tours Page</div>;
const TrekkingPage = () => <div>Trekking Adventures Page</div>;
const AboutPage = () => <div>About Us Page</div>;
const ContactPage = () => <div>Contact Us Page</div>;
const PackageDetailPage = () => <div>Package Detail Page</div>;

export default App;