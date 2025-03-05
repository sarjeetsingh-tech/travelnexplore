import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutContent = () => {
  const [storyRef, storyInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [missionRef, missionInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="our-story" className="py-24 bg-[#F8F8F8]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Our Story */}
        <motion.div 
          ref={storyRef}
          initial={{ opacity: 0 }}
          animate={storyInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={storyInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-[#FF894C]/10 text-[#FF894C] text-sm font-bold tracking-wider uppercase py-1 px-3 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#363636]">
              Over a Decade of <span className="text-[#DC2F2F]">Excellence</span> in Travel
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Travel N Explore - By JETS Duniya Travel Pvt. Ltd. is a fully automated, technology-driven travel 
              management company in the market since 2010. We are serving in the travel & tourism industry for 
              the last 13 years with more than 10,000 satisfied customers.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We can customize excursion tours as per your requirement for any number of persons/passengers 
              anywhere in India (Group Tours, Leisure Holidays, and Honeymoon Special). We have been providing 
              our services to the leading educational institutions / Corporates / Travelers of India.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of core professionals makes utmost endeavors to provide exotic experiences to our clients.
            </p>
            
            <motion.a
              href="#gallery"
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: "#DC2F2F", 
                color: "white" 
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center py-3 px-6 rounded-full border-2 border-[#DC2F2F] text-[#DC2F2F] font-medium transition-all duration-300 hover:shadow-lg"
            >
              Explore Our Gallery
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={storyInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about-company.jpg" 
                alt="Travel N Explore Team" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 -right-10 w-40 h-40 bg-[#FF894C]/10 rounded-full z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#DC2F2F]/10 rounded-full z-0"></div>
            
            {/* Experience badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -10 }}
              animate={storyInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              className="absolute -bottom-10 right-10 bg-[#DC2F2F] text-white py-3 px-6 rounded-lg shadow-lg"
            >
              <div className="text-sm">Established</div>
              <div className="text-2xl font-bold">2010</div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Our Mission & Values */}
        <motion.div 
          ref={missionRef}
          initial={{ opacity: 0 }}
          animate={missionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={missionInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img 
                  src="/images/mission-1.jpg" 
                  alt="Travel Experience" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="rounded-xl overflow-hidden shadow-lg mt-10"
              >
                <img 
                  src="/images/mission-2.jpg" 
                  alt="Customer Satisfaction" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img 
                  src="/images/mission-3.jpg" 
                  alt="Technology Driven" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="rounded-xl overflow-hidden shadow-lg mt-10"
              >
                <img 
                  src="/images/mission-4.jpg" 
                  alt="Global Reach" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FF894C]/10 rounded-full -z-10"></div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={missionInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block bg-[#DC2F2F]/10 text-[#DC2F2F] text-sm font-bold tracking-wider uppercase py-1 px-3 rounded-full mb-4">
              Mission & Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#363636]">
              Creating <span className="text-[#FF894C]">Memorable</span> Travel Experiences
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Customer-Centric Approach",
                  description: "We put our customers first, ensuring every journey exceeds expectations.",
                  icon: "❤️"
                },
                {
                  title: "Technological Innovation",
                  description: "Leveraging cutting-edge technology to provide seamless travel experiences.",
                  icon: "💻"
                },
                {
                  title: "Customization",
                  description: "Tailoring each travel package to meet the unique needs of our clients.",
                  icon: "✨"
                },
                {
                  title: "Quality & Reliability",
                  description: "Maintaining the highest standards of service quality and dependability.",
                  icon: "🌟"
                }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-start p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-[#FF894C]/10 rounded-full flex items-center justify-center text-2xl">
                      {value.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#363636] mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;