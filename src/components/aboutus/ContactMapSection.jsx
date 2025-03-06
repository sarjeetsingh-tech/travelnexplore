import React from 'react';
import { motion } from 'framer-motion';

const ContactMapSection = () => {
  const officeLocations = [
    {
      title: "Corporate Office",
      address: "5th Floor, JMD Megapolis, Sector-48, Gurugram - 122001",
      phone: "+91 9991005254",
      email: "contact@travelnexplore.in",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.013424264186!2d77.03384931508475!3d28.4275248824807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18bd2e402f3d%3A0x4ecea56e0f94a73!2sJMD%20Megapolis%2C%20Sector%2048%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1662913142301!5m2!1sen!2sin",
      icon: "🏢",
      iconBg: "#DC2F2F",
    },
    {
      title: "Branch Office",
      address: "B-Block, Friends Colony, Vaishali Nagar, Ajmer - 305001",
      phone: "+91 9828038888",
      email: "contact@travelnexplore.in",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.016291468073!2d74.6351!3d26.4647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be77b1f109dab%3A0xe60af9599e865f5!2sVaishali%20Nagar%2C%20Ajmer%2C%20Rajasthan%20305001!5e0!3m2!1sen!2sin!4v1662913306778!5m2!1sen!2sin",
      icon: "🏬",
      iconBg: "#FF894C",
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/contacttravelnexplore?mibextid=ZbWKwL",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
      color: "#4267B2"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/travelnexplore.in?igsh=Nnd0aDlwdnM0Z21p",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "#C13584"
    },
    {
      name: "Google Page",
      url: "https://bit.ly/3GEy2EG",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" />
        </svg>
      ),
      color: "#4285F4"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/919828038888",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
      color: "#25D366"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#F8F8F8] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 rounded-full bg-[#FF894C]/5 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 rounded-full bg-[#DC2F2F]/5 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#DC2F2F]/10 text-[#DC2F2F] text-sm font-bold tracking-wider uppercase py-1 px-3 rounded-full mb-4">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#363636]">
            Our <span className="text-[#FF894C]">Office</span> Locations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit us at our corporate or branch office locations. We'd love to meet you in person 
            and discuss how we can make your travel dreams come true.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {officeLocations.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9 w-full h-64 overflow-hidden">
                <iframe 
                  src={office.mapSrc} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map to ${office.title}`}
                  className="w-full h-full"
                ></iframe>
              </div>
              
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${office.iconBg}20`, color: office.iconBg }}
                    >
                      {office.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#363636] mb-1">{office.title}</h3>
                    <p className="text-gray-600 mb-3">{office.address}</p>
                    
                    <div className="flex flex-col md:flex-row gap-4">
                      <a 
                        href={`tel:${office.phone.replace(/\s+/g, '')}`}
                        className="flex items-center text-[#363636] hover:text-[#DC2F2F] transition-colors duration-300"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        {office.phone}
                      </a>
                      
                      <a 
                        href={`mailto:${office.email}`}
                        className="flex items-center text-[#363636] hover:text-[#DC2F2F] transition-colors duration-300"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
                
                <motion.a
                  href={`https://www.google.com/maps/dir//${encodeURIComponent(office.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.03, 
                    backgroundColor: index === 0 ? "#DC2F2F" : "#FF894C",
                    color: "white"
                  }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-4 inline-flex items-center justify-center w-full py-3 px-6 rounded-full border-2 ${
                    index === 0 ? 'border-[#DC2F2F] text-[#DC2F2F]' : 'border-[#FF894C] text-[#FF894C]'
                  } font-medium transition-all duration-300`}
                >
                  Get Directions
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Connect With Us - Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#363636] mb-2">Connect With Us</h3>
            <p className="text-gray-600">Follow us on social media for travel inspiration, deals, and updates</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center"
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-md mb-2"
                  style={{ backgroundColor: social.color }}
                >
                  <span className="text-white">{social.icon}</span>
                </div>
                <span className="text-sm text-gray-600">{social.name}</span>
              </motion.a>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-2">Visit our website</p>
            <a 
              href="https://www.travelnexplore.in" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DC2F2F] font-bold text-lg hover:underline"
            >
              www.travelnexplore.in
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMapSection;