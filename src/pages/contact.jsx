import React, { useState, useEffect } from 'react';
import { useLoading } from '../context/LoadingContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const { showLoading, hideLoading } = useLoading();
  const [contentLoaded, setContentLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    budget: '',
    interests: [],
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show loading when component mounts
    showLoading();
    
    // Simulate content loading
    const loadContent = async () => {
      try {
        // In a real app, you would load actual data here
        await new Promise(resolve => setTimeout(resolve, 1500));
        setContentLoaded(true);
        hideLoading();
      } catch (error) {
        console.error("Error loading content:", error);
        hideLoading();
      }
    };
    
    loadContent();
    
    return () => {
      // Ensure loading is hidden when component unmounts
      hideLoading();
    };
  }, [showLoading, hideLoading]);

  const travelInterests = [
    "Adventure",
    "Beach",
    "Cultural",
    "Culinary",
    "Family-friendly",
    "Luxury",
    "Wildlife",
    "Historical",
    "Eco-tourism",
    "Photography",
    "Spiritual",
    "Wellness & Spa",
    "Cruises",
    "City Tours",
    "Trekking",
    "Road Trips",
    "Festivals",
    "Romantic Getaways"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleInterestChange = (interest) => {
    const newInterests = [...formData.interests];
    
    if (newInterests.includes(interest)) {
      // Remove if already selected
      const index = newInterests.indexOf(interest);
      newInterests.splice(index, 1);
    } else {
      // Add if not selected
      newInterests.push(interest);
    }
    
    setFormData({
      ...formData,
      interests: newInterests
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (optional but validated if provided)
    if (formData.phone) {
      const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }
    
    // Budget validation (optional but validated if provided)
    if (formData.budget) {
      const budgetValue = parseFloat(formData.budget);
      if (isNaN(budgetValue) || budgetValue <= 0) {
        newErrors.budget = 'Please enter a valid budget amount';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Show loading when form is submitted
    showLoading();
    
    try {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      hideLoading();
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: '',
          travelDate: '',
          budget: '',
          interests: [],
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      hideLoading();
    }
  };

  // Don't render content until loaded
  if (!contentLoaded) {
    return null; // The loading indicator is shown by the LoadingContext
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col ">
      {/* Navbar */}
      <Navbar className="mb-12" />
      
      {/* Enhanced Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/api/placeholder/1920/1080')"}}></div>
        
        {/* Dark Overlay with Brand Colors Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#363636]/80 via-[#DC2F2F]/60 to-[#FF894C]/70"></div>
        
        {/* Animated Wave Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full">
            <path fill="#FF894C" fillOpacity="0.5" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,202.7C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full">
            <path fill="#DC2F2F" fillOpacity="0.4" d="M0,32L48,58.7C96,85,192,139,288,154.7C384,171,480,149,576,154.7C672,160,768,192,864,181.3C960,171,1056,117,1152,90.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center px-4 z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg">
              <span className="text-[#F8F8F8]">Let Us Plan Your </span>
              <span className="text-[#FF894C]">Dream Vacation</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white mb-8">
              Serving in the travel industry since 2010 with over 10,000 satisfied customers. 
              Where would you like to go next?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-[#FF894C] text-white font-semibold rounded-lg shadow-lg hover:bg-[#DC2F2F] transition-all duration-300 transform hover:scale-105">
                Explore Destinations
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#363636] transition-all duration-300 transform hover:scale-105">
                View Packages
              </button>
            </div>
          </div>
        </div>
        
        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path fill="#F8F8F8" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:translate-y-[-5px] transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8 text-[#363636] border-b pb-4 border-[#FF894C]">Contact Us</h2>
            
           
            
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#FF894C] text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#363636]">Phone</h3>
                  <p>+91 9828038888 (Whatsapp)</p>
                  <p>+91 9991005254</p>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#FF894C] text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#363636]">Email</h3>
                  <p>contact@travelnexplore.in</p>
                  <p className="text-sm text-gray-500">www.travelnexplore.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#FF894C] text-white flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#363636]">Our Offices</h3>
                  <p className="mb-2"><strong>Corporate Office:</strong><br />5th Floor, JMD Megapolis, Sector-48, Sohna Road, Gurugram -122001</p>
                  <p><strong>Branch Office:</strong><br />B-Block, Friends Colony, Vaishali Nagar, Ajmer - 305001</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#363636]">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/contacttravelnexplore?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#363636] text-white flex items-center justify-center hover:bg-[#FF894C] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/travelnexplore.in?igsh=Nnd0aDlwdnM0Z21p" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#363636] text-white flex items-center justify-center hover:bg-[#FF894C] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://bit.ly/3GEy2EG" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#363636] text-white flex items-center justify-center hover:bg-[#FF894C] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z"/>
                  </svg>
                </a>
                <a href="https://wa.me/919828038888" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#363636] text-white flex items-center justify-center hover:bg-[#FF894C] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Interactive Map */}
           
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:translate-y-[-5px] transition-all duration-300">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-[#DC2F2F] text-white rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#363636]">Thank You!</h2>
                <p className="text-lg mb-6 text-gray-600">We've received your travel interest details and will contact you shortly.</p>
                <div className="text-[#FF894C] text-lg font-semibold">Get ready for your amazing adventure!</div>
                <img src="/api/placeholder/400/200" alt="Travel illustration" className="mx-auto mt-8 rounded-lg" />
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-8 text-[#363636] border-b pb-4 border-[#FF894C]">Share Your Travel Dreams</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Your Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.name ? 'border-[#DC2F2F]' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF894C] transition-all`}
                        placeholder="Name "
                      />
                      {errors.name && <p className="text-[#DC2F2F] text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.email ? 'border-[#DC2F2F]' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF894C] transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-[#DC2F2F] text-sm mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.phone ? 'border-[#DC2F2F]' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF894C] transition-all`}
                        placeholder="+91 99999 99999"
                      />
                      {errors.phone && <p className="text-[#DC2F2F] text-sm mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="destination" className="block text-gray-700 mb-2 font-medium">Preferred Destination</label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF894C] transition-all"
                        placeholder="Paris, Bali, Rajasthan, etc."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="travelDate" className="block text-gray-700 mb-2 font-medium">Estimated Travel Date</label>
                      <input
                        type="date"
                        id="travelDate"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF894C] transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-gray-700 mb-2 font-medium">Budget (₹)</label>
                      <input
                        type="number"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.budget ? 'border-[#DC2F2F]' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF894C] transition-all`}
                        placeholder="Enter your budget amount"
                        min="1000"
                      />
                      {errors.budget && <p className="text-[#DC2F2F] text-sm mt-1">{errors.budget}</p>}
                      <p className="text-gray-500 text-xs mt-1">Enter approximate budget per person in INR</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-3 font-medium">Travel Interests</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {travelInterests.map((interest) => (
                        <div key={interest} className="flex items-center">
                          <input
                            type="checkbox"
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                            className="w-4 h-4 text-[#FF894C] rounded focus:ring-[#FF894C]"
                          />
                          <label htmlFor={interest} className="ml-2 text-gray-700 hover:text-[#FF894C] cursor-pointer">
                            {interest}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF894C] transition-all"
                      placeholder="Tell us more about your travel preferences, special requests, or questions..."
                    ></textarea>
                  </div>
                  
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="px-10 py-4 bg-gradient-to-r from-[#FF894C] to-[#DC2F2F] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Submit Travel Request
                    </button>
                    <p className="text-gray-500 text-sm mt-4">
                      By submitting this form, you agree to be contacted by our travel experts.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
     
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;