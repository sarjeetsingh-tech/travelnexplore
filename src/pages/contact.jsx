import React, { useState } from 'react';

const Contact = () => {
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

  const [submitted, setSubmitted] = useState(false);

  const travelInterests = [
    "Adventure",
    "Beach",
    "Cultural",
    "Culinary",
    "Family-friendly",
    "Luxury",
    "Wildlife",
    "Historical",
    "Eco-tourism"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
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
  };

  return (
    <div className="bg-light-gray min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-radial from-orange to-red text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Tell us about your dream vacation and let our experts craft the perfect travel experience for you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-custom p-8 transform hover:scale-102 transition-all hover:shadow-hover">
            <h2 className="text-3xl font-bold mb-6 text-dark-gray">Get in Touch</h2>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange text-white flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange text-white flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p>info@travelexplore.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-orange text-white flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office</h3>
                  <p>123 Adventure St, Travel City, TC 98765</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-dark-gray">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-dark-gray text-white flex items-center justify-center hover:bg-orange transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-gray text-white flex items-center justify-center hover:bg-orange transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-gray text-white flex items-center justify-center hover:bg-orange transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-gray text-white flex items-center justify-center hover:bg-orange transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="animate-float">
              <img src="/api/placeholder/500/300" alt="Map location" className="rounded-lg w-full h-auto" />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-custom p-8 transform hover:scale-102 transition-all hover:shadow-hover">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-orange text-white rounded-full mx-auto flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-dark-gray">Thank You!</h2>
                <p className="text-lg mb-4">We've received your travel interest details and will contact you shortly.</p>
                <p className="text-orange">Get ready for your amazing adventure!</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-6 text-dark-gray">Share Your Travel Interests</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-dark-gray mb-2">Your Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-dark-gray mb-2">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-dark-gray mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="destination" className="block text-dark-gray mb-2">Preferred Destination</label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                        placeholder="Paris, Bali, etc."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="travelDate" className="block text-dark-gray mb-2">Estimated Travel Date</label>
                      <input
                        type="date"
                        id="travelDate"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-dark-gray mb-2">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                      >
                        <option value="">Select your budget</option>
                        <option value="economy">Economy ($1,000 - $3,000)</option>
                        <option value="standard">Standard ($3,000 - $5,000)</option>
                        <option value="luxury">Luxury ($5,000 - $10,000)</option>
                        <option value="ultra-luxury">Ultra Luxury ($10,000+)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-dark-gray mb-2">Travel Interests</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {travelInterests.map((interest) => (
                        <div key={interest} className="flex items-center">
                          <input
                            type="checkbox"
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                            className="w-4 h-4 text-orange"
                          />
                          <label htmlFor={interest} className="ml-2 text-dark-gray">
                            {interest}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-dark-gray mb-2">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                      placeholder="Tell us more about your travel preferences, special requests, or questions..."
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-orange text-white font-semibold rounded-lg hover:bg-red transition-colors transform hover:scale-102 transition-all"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-dark-gray">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-custom">
            <h3 className="text-xl font-bold mb-2 text-dark-gray">How soon will I hear back after submitting?</h3>
            <p>We typically respond to all inquiries within 24-48 hours during business days. For urgent requests, please call our direct line.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-custom">
            <h3 className="text-xl font-bold mb-2 text-dark-gray">Do I need to pay a deposit?</h3>
            <p>After we've designed your itinerary and you've approved it, we require a 20% deposit to secure all bookings. The remainder is due 30 days before departure.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-custom">
            <h3 className="text-xl font-bold mb-2 text-dark-gray">Can you accommodate special requirements?</h3>
            <p>Absolutely! We specialize in customized travel. Please include any special requirements or needs in the form, and our experts will work to accommodate them.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-custom">
            <h3 className="text-xl font-bold mb-2 text-dark-gray">How detailed should my request be?</h3>
            <p>The more details you provide, the better we can tailor our suggestions. However, even if you're just starting to plan, we can help guide you through the process.</p>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}

    </div>
  );
};

export default Contact;