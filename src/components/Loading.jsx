import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[99999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          style={{ pointerEvents: 'all' }}
        >
          <div className="relative">
            {/* Original SVG with improved visibility */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-60 h-60">
              {/* Flowing dots in a wave pattern */}
              <circle cx="20" cy="100" r="10" fill="#f05a28">
                <animate 
                  attributeName="cx" 
                  values="20;180;20" 
                  dur="1.8s" 
                  repeatCount="indefinite"/>
                <animate 
                  attributeName="cy" 
                  values="100;100;100" 
                  dur="1.8s" 
                  repeatCount="indefinite"/>
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.8s" 
                  repeatCount="indefinite"/>
              </circle>
              
              <circle cx="20" cy="100" r="12" fill="#f05a28">
                <animate 
                  attributeName="cx" 
                  values="20;180;20" 
                  dur="1.8s" 
                  begin="0.3s"
                  repeatCount="indefinite"/>
                <animate 
                  attributeName="cy" 
                  values="120;80;120" 
                  dur="1.8s" 
                  begin="0.3s"
                  repeatCount="indefinite"/>
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.8s" 
                  begin="0.3s"
                  repeatCount="indefinite"/>
              </circle>
              
              <circle cx="20" cy="100" r="8" fill="#f05a28">
                <animate 
                  attributeName="cx" 
                  values="20;180;20" 
                  dur="1.8s" 
                  begin="0.6s"
                  repeatCount="indefinite"/>
                <animate 
                  attributeName="cy" 
                  values="80;120;80" 
                  dur="1.8s" 
                  begin="0.6s"
                  repeatCount="indefinite"/>
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.8s" 
                  begin="0.6s"
                  repeatCount="indefinite"/>
              </circle>
              
              <circle cx="20" cy="100" r="11" fill="#f05a28">
                <animate 
                  attributeName="cx" 
                  values="20;180;20" 
                  dur="1.8s" 
                  begin="0.9s"
                  repeatCount="indefinite"/>
                <animate 
                  attributeName="cy" 
                  values="90;110;90" 
                  dur="1.8s" 
                  begin="0.9s"
                  repeatCount="indefinite"/>
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.8s" 
                  begin="0.9s"
                  repeatCount="indefinite"/>
              </circle>
              
              <circle cx="20" cy="100" r="9" fill="#f05a28">
                <animate 
                  attributeName="cx" 
                  values="20;180;20" 
                  dur="1.8s" 
                  begin="1.2s"
                  repeatCount="indefinite"/>
                <animate 
                  attributeName="cy" 
                  values="110;90;110" 
                  dur="1.8s" 
                  begin="1.2s"
                  repeatCount="indefinite"/>
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.8s" 
                  begin="1.2s"
                  repeatCount="indefinite"/>
              </circle>
            </svg>
            
            {/* Loading text */}
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading; 