import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Chief Executive Officer",
      bio: "With over 20 years in the travel industry, Rajesh brings a wealth of experience and vision to lead Travel N Explore to new heights.",
      image: "/images/team.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rajesh@travelnexplore.in"
      }
    },
    {
      name: "Priya Sharma",
      position: "Operations Manager",
      bio: "Priya ensures smooth execution of all travel plans, managing the logistics and operations that make every journey perfect.",
      image: "/images/team.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "priya@travelnexplore.in"
      }
    },
    {
      name: "Amit Verma",
      position: "Travel Consultant",
      bio: "Amit specializes in creating personalized travel experiences, with expert knowledge of global destinations.",
      image: "/images/team.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "amit@travelnexplore.in"
      }
    },
    {
      name: "Neha Patel",
      position: "Customer Relations",
      bio: "Neha is dedicated to ensuring every client has an exceptional experience, both before and after their journey.",
      image: "/images/team.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "neha@travelnexplore.in"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-20 w-64 h-64 rounded-full bg-[#FF894C]/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-20 w-64 h-64 rounded-full bg-[#DC2F2F]/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-[#FF894C]/10 text-[#FF894C] text-sm font-bold tracking-wider uppercase py-1 px-3 rounded-full mb-4"
          >
            Our Team
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-[#363636]"
          >
            The <span className="text-[#DC2F2F]">Experts</span> Behind Your Perfect Trip
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Meet our team of dedicated travel professionals who work tirelessly to create 
            unforgettable experiences for our clients.
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  src={member.image || '/images/team.jpg'} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social icons */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {Object.entries(member.social).map(([platform, url], idx) => (
                    <a 
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#363636] hover:text-[#DC2F2F] transition-colors duration-300"
                    >
                      {platform === 'linkedin' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      )}
                      {platform === 'twitter' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      )}
                      {platform === 'email' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#363636] mb-1 group-hover:text-[#DC2F2F] transition-colors duration-300">{member.name}</h3>
                <p className="text-[#FF894C] font-medium text-sm mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Join Our Team Section */}
       
      </div>
    </section>
  );
};

export default TeamSection;