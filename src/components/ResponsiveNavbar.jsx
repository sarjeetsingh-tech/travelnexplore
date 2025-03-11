import React from 'react';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

const ResponsiveNavbar = () => {
  return (
    <>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </>
  );
};

export default ResponsiveNavbar; 