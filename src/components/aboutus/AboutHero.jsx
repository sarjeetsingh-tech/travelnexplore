import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactHero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[#363636]">
        {/* Pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-[#DC2F2F]/40 to-transparent"></div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-[#FF894C]/30 to-transparent"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full bg-white/10 backdrop-blur-sm`}
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={i}
              d={`M0,${20 + i * 15} Q${25 + i * 10},${15 + i * 12} ${50 + i * 5},${20 + i * 10} T100,${25 + i * 8}`}
              stroke={i % 2 === 0 ? "#DC2F2F" : "#FF894C"}
              strokeWidth="0.2"
              strokeDasharray="5,5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 0.2,
                pathOffset: [0, 1]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
        </svg>
      </div>
      
      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#F8F8F8] transform -skew-y-2 translate-y-12"></div>
      
      {/* Hexagon grid overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iODYiIGhlaWdodD0iMTAwIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0Pgo8cGF0aCBkPSJNNDMgMTdMMCAwdjEybDQzIDE3TTQzIDE3bDQzIDB2MTJsLTQzIDE3IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC41Ij48L3BhdGg+Cjwvc3ZnPg==')] bg-center"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[70vh]">
          {/* Left content */}
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="px-6 py-20 md:py-24 md:pl-10"
          >
            {/* Badge/tag */}
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-block bg-[#FF894C] text-white text-xs font-bold tracking-wider py-1 px-3 rounded-full uppercase">
                Premium Travel Services
              </span>
            </motion.div>
            
            {/* Heading */}
            <motion.h1 
              variants={fadeInUp} 
              className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight"
            >
              Make Your <span className="text-[#FF894C]">Dream Vacation</span> a Reality Today
            </motion.h1>
            
            {/* Subtitle */}
            <motion.div variants={fadeInUp} className="relative mb-6 pb-6">
              <p className="text-white/80 text-lg">
                13+ years of excellence in crafting personalized travel experiences
              </p>
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-[#DC2F2F]"></div>
            </motion.div>
            
            {/* Features list */}
            <motion.ul variants={fadeInUp} className="mb-8 space-y-3">
              {[
                "Personalized itineraries tailored to your preferences",
                "Expert local guides for authentic experiences",
                "Luxury accommodations with exclusive amenities",
                "24/7 dedicated customer support throughout your journey"
              ].map((item, index) => (
                <li key={index} className="flex items-start text-white/90">
                  <span className="text-[#FF894C] mr-2">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </motion.ul>
            
            {/* Action buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a 
                href="#contact-form" 
                className="inline-block bg-[#DC2F2F] hover:bg-[#FF894C] text-white font-medium py-2.5 px-6 rounded-sm transition-colors duration-300 shadow-lg shadow-[#DC2F2F]/20"
              >
                Start Planning
              </a>
              <a 
                href="#packages" 
                className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-2.5 px-6 rounded-sm border border-white/20 transition-colors duration-300"
              >
                View Packages
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side - Interactive elements */}
          <div className="relative h-full hidden md:block">
            {/* 3D-looking geometric elements */}
            <div className="relative h-[500px]">
              {/* Destination features */}
              {[
                { 
                  icon: "🏝️", 
                  title: "Beach Escapes", 
                  description: "Stunning coastal getaways",
                  color: "#FF894C",
                  position: "top-0 right-12",
                  delay: 0.4,
                  rotate: "rotate-3",
                  shadow: "shadow-[#FF894C]/20"
                },
                { 
                  icon: "🏔️", 
                  title: "Mountain Adventures", 
                  description: "Breathtaking hiking trails & views",
                  color: "#DC2F2F",
                  position: "top-32 right-32",
                  delay: 0.6,
                  rotate: "-rotate-3",
                  shadow: "shadow-[#DC2F2F]/20"
                },
                { 
                  icon: "🏯", 
                  title: "Cultural Tours", 
                  description: "Authentic local experiences",
                  color: "#FF894C",
                  position: "top-72 right-16",
                  delay: 0.8,
                  rotate: "rotate-2",
                  shadow: "shadow-[#FF894C]/20"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: item.delay }}
                  className={`absolute ${item.position} w-64 backdrop-blur-md rounded-xl overflow-hidden shadow-xl ${item.rotate} hover:scale-105 transition-all duration-300 cursor-pointer group z-${10-index} bg-white/5 border border-white/10`}
                  style={{ boxShadow: `0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 0 1px ${item.color}25` }}
                >
                  <div className="relative p-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-[#363636] text-2xl">
                        {item.icon}
                      </div>
                      
                      <div>
                        <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-white/70 text-sm">{item.description}</p>
                        <div 
                          className="h-0.5 w-0 group-hover:w-full mt-2 transition-all duration-300"
                          style={{ background: item.color }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Stats card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-5 left-10 w-64 bg-black/20 backdrop-blur-md rounded-xl p-5 border border-white/10 shadow-2xl"
                style={{ boxShadow: "0 20px 50px -10px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white font-semibold tracking-wide">Our Impact</div>
                  <div className="w-2 h-2 rounded-full bg-[#DC2F2F] animate-pulse"></div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Happy Customers", value: "10,000+" },
                    { label: "Destinations", value: "200+" },
                    { label: "Tour Packages", value: "500+" }
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <div className="text-white/70 text-xs">{stat.label}</div>
                        <div className="text-white font-bold">{stat.value}</div>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-[#DC2F2F] to-[#FF894C]"
                          initial={{ width: 0 }}
                          animate={{ width: `${70 + index * 10}%` }}
                          transition={{ duration: 1, delay: 1.2 + index * 0.2 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Animated accent */}
                <div className="absolute -top-2 -right-2 w-6 h-6">
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                    }}
                    className="w-full h-full border-2 border-[#FF894C] rounded-md"
                    style={{ transformOrigin: "center center" }}
                  ></motion.div>
                </div>
              </motion.div>
              
              {/* Geometric accents */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute top-48 left-20 w-10 h-10 border border-[#DC2F2F]/30"
                style={{ transform: "rotate(45deg)" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border border-[#DC2F2F]/20"
                  style={{ transformOrigin: "center center" }}
                ></motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="absolute top-12 left-36 w-6 h-6"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border-2 border-[#FF894C]/40 rounded-full"
                  style={{ transformOrigin: "center center" }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#FF894C]/20 filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-[#DC2F2F]/20 filter blur-3xl"></div>
      
      {/* Mobile decorative elements */}
      <div className="md:hidden">
        <motion.div 
          className="absolute top-10 right-10 h-20 w-20 rounded-full border border-white/10"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-32 left-5 h-12 w-12 rounded-full border border-[#FF894C]/30"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        ></motion.div>
        
        {/* Stats for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-24 right-4 w-32 bg-black/30 backdrop-blur-md rounded-lg p-3 border border-white/10"
        >
          <div className="text-white text-xs font-semibold mb-2">Our Numbers</div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <div className="text-white/70 text-xs">Customers</div>
              <div className="text-white text-xs font-bold">10K+</div>
            </div>
            <div className="flex justify-between">
              <div className="text-white/70 text-xs">Tours</div>
              <div className="text-white text-xs font-bold">500+</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-10 border border-white/20 rounded-full flex justify-center pt-1"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#FF894C]"
          ></motion.div>
        </motion.div>
        <div className="text-white/40 text-xs mt-2">Scroll Down</div>
      </motion.div>
    </section>
  );
};

export default ContactHero;