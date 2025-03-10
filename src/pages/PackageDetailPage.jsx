import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import PageLayout from '../components/layout/PageLayout';
import { getPackageByUid } from '../data';

const PackageDetailPage = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState(null);
  const [activeTab, setActiveTab] = useState('itinerary');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (packageId) {
      const data = getPackageByUid(packageId);
      if (data) {
        setPackageData(data);
      } else {
        // Package not found, redirect to home
        navigate('/');
      }
    }
  }, [packageId, navigate]);

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#FF894C]"></div>
      </div>
    );
  }

  // Format price to INR
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(packageData.price);

  return (
    <PageLayout
      title={packageData.packageName}
      subtitle={packageData.shortDescription}
      heroImage={packageData.heroImage}
    >
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-[#FF894C]">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/${packageData.category}`} className="hover:text-[#FF894C]">
              {packageData.category.charAt(0).toUpperCase() + packageData.category.slice(1)} Tours
            </Link>
            <span className="mx-2">/</span>
            <Link 
              to={`/${packageData.category}/locations/${encodeURIComponent(packageData.location.toLowerCase())}`} 
              className="hover:text-[#FF894C]"
            >
              {packageData.location}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#FF894C]">{packageData.packageName}</span>
          </div>
        </div>
      </div>

      {/* Package Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Package Details */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-3xl font-bold text-[#363636] mb-4">
                    Package Overview
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-[#FF894C]/10 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-[#FF894C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Duration</p>
                        <p className="font-semibold">{packageData.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-[#FF894C]/10 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-[#FF894C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Destination</p>
                        <p className="font-semibold">{packageData.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-[#FF894C]/10 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-[#FF894C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Start Date</p>
                        <p className="font-semibold">{packageData.travelStartDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-[#FF894C]/10 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-[#FF894C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Reference Number</p>
                        <p className="font-semibold">{packageData.referenceNumber}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#363636] mb-4">
                      Destinations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {packageData.destinations.map((dest, index) => (
                        <div 
                          key={`${dest.place}-${index}`}
                          className="bg-gray-100 rounded-full py-2 px-4 flex items-center"
                        >
                          <span className="font-medium text-[#363636]">{dest.place}</span>
                          {dest.nights && (
                            <span className="ml-2 bg-[#FF894C] text-white text-xs rounded-full py-1 px-2">
                              {dest.nights} {dest.nights === 1 ? 'Night' : 'Nights'}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-[#363636] mb-4">
                      Package Description
                    </h3>
                    <p className="text-gray-600">
                      {packageData.shortDescription}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Tabs Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-md overflow-hidden mt-8"
              >
                <div className="border-b">
                  <div className="flex overflow-x-auto">
                    <button
                      onClick={() => setActiveTab('itinerary')}
                      className={`px-6 py-4 font-medium text-sm focus:outline-none whitespace-nowrap ${
                        activeTab === 'itinerary'
                          ? 'text-[#FF894C] border-b-2 border-[#FF894C]'
                          : 'text-gray-500 hover:text-[#FF894C]'
                      }`}
                    >
                      Itinerary
                    </button>
                    <button
                      onClick={() => setActiveTab('inclusions')}
                      className={`px-6 py-4 font-medium text-sm focus:outline-none whitespace-nowrap ${
                        activeTab === 'inclusions'
                          ? 'text-[#FF894C] border-b-2 border-[#FF894C]'
                          : 'text-gray-500 hover:text-[#FF894C]'
                      }`}
                    >
                      Inclusions
                    </button>
                    <button
                      onClick={() => setActiveTab('exclusions')}
                      className={`px-6 py-4 font-medium text-sm focus:outline-none whitespace-nowrap ${
                        activeTab === 'exclusions'
                          ? 'text-[#FF894C] border-b-2 border-[#FF894C]'
                          : 'text-gray-500 hover:text-[#FF894C]'
                      }`}
                    >
                      Exclusions
                    </button>
                    <button
                      onClick={() => setActiveTab('policy')}
                      className={`px-6 py-4 font-medium text-sm focus:outline-none whitespace-nowrap ${
                        activeTab === 'policy'
                          ? 'text-[#FF894C] border-b-2 border-[#FF894C]'
                          : 'text-gray-500 hover:text-[#FF894C]'
                      }`}
                    >
                      Policies
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {activeTab === 'itinerary' && (
                      <motion.div
                        key="itinerary"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-semibold text-[#363636] mb-6">
                          Detailed Itinerary
                        </h3>
                        <div className="space-y-8">
                          {packageData.itinerary.map((day, index) => (
                            <div key={`day-${index}`} className="relative pl-8 pb-8 border-l-2 border-gray-200 last:border-0 last:pb-0">
                              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#FF894C]"></div>
                              <div className="mb-2">
                                <span className="inline-block bg-[#FF894C]/10 text-[#FF894C] text-sm font-medium py-1 px-3 rounded-full mb-2">
                                  Day {day.day}
                                </span>
                                <h4 className="text-lg font-semibold text-[#363636]">{day.title}</h4>
                              </div>
                              <p className="text-gray-600 mb-4">{day.description}</p>
                              
                              <div className="flex flex-wrap gap-2 mb-2">
                                {day.meals && day.meals.map((meal, i) => (
                                  <span key={`meal-${i}`} className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded-full flex items-center">
                                    <svg className="w-3 h-3 mr-1 text-[#FF894C]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    {meal}
                                  </span>
                                ))}
                              </div>
                              
                              {day.overnight && (
                                <div className="flex items-center text-gray-600 text-sm">
                                  <svg className="w-4 h-4 mr-1 text-[#FF894C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                                  </svg>
                                  Overnight: {day.overnight}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    
                    {activeTab === 'inclusions' && (
                      <motion.div
                        key="inclusions"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-semibold text-[#363636] mb-6">
                          What's Included
                        </h3>
                        <ul className="space-y-3">
                          {packageData.inclusions.map((item, index) => (
                            <li key={`inclusion-${index}`} className="flex items-start">
                              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                    
                    {activeTab === 'exclusions' && (
                      <motion.div
                        key="exclusions"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-semibold text-[#363636] mb-6">
                          What's Not Included
                        </h3>
                        <ul className="space-y-3">
                          {packageData.exclusions.map((item, index) => (
                            <li key={`exclusion-${index}`} className="flex items-start">
                              <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                              </svg>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                    
                    {activeTab === 'policy' && (
                      <motion.div
                        key="policy"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-[#363636] mb-4">
                            Payment Policy
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-600">
                              <span className="font-medium">Advance Payment:</span> {packageData.paymentPolicy.advancePayment}
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-[#363636] mb-4">
                            Refund Policy
                          </h3>
                          <ul className="space-y-3">
                            {packageData.refundPolicy.map((item, index) => (
                              <li key={`refund-${index}`} className="flex items-start">
                                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Booking Card */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#363636] mb-4">
                    {formattedPrice}
                    <span className="text-sm font-normal text-gray-500 ml-1">per person</span>
                  </h3>
                  
                  <div className="border-t border-b py-4 my-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Package Cost</span>
                      <span className="font-medium">{packageData.packageCost.price}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Persons</span>
                      <span className="font-medium">{packageData.packageCost.persons}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Rooms</span>
                      <span className="font-medium">{packageData.packageCost.rooms}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Transport</span>
                      <span className="font-medium">{packageData.packageCost.transportType}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 px-6 bg-[#FF894C] text-white font-medium rounded-full transition-all duration-300 hover:bg-[#DC2F2F] hover:shadow-md mb-4">
                    Book Now
                  </button>
                  
                  <button className="w-full py-3 px-6 border border-[#FF894C] text-[#FF894C] font-medium rounded-full transition-all duration-300 hover:bg-[#FF894C]/10">
                    Enquire Now
                  </button>
                  
                  <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm">Need help booking?</p>
                    <a href="tel:+919876543210" className="text-[#FF894C] font-medium flex items-center justify-center mt-2">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      +91 9876543210
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PackageDetailPage; 