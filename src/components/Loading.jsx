import React from 'react';

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100]">
      <div className="relative">
        {/* Larger SVG with no background */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-60 h-60">
          {/* Flowing dots in a wave pattern */}
          <circle cx="20" cy="100" r="10" fill="#f05a28">
            <animate 
              attributeName="cx" 
              values="20;180;20" 
              dur="2.5s" 
              repeatCount="indefinite"/>
            <animate 
              attributeName="cy" 
              values="100;100;100" 
              dur="2.5s" 
              repeatCount="indefinite"/>
            <animate 
              attributeName="opacity" 
              values="0;1;0" 
              dur="2.5s" 
              repeatCount="indefinite"/>
          </circle>
          
          <circle cx="20" cy="100" r="12" fill="#f05a28">
            <animate 
              attributeName="cx" 
              values="20;180;20" 
              dur="2.5s" 
              begin="0.4s"
              repeatCount="indefinite"/>
            <animate 
              attributeName="cy" 
              values="120;80;120" 
              dur="2.5s" 
              begin="0.4s"
              repeatCount="indefinite"/>
            <animate 
              attributeName="opacity" 
              values="0;1;0" 
              dur="2.5s" 
              begin="0.4s"
              repeatCount="indefinite"/>
          </circle>
          
          <circle cx="20" cy="100" r="8" fill="#f05a28">
            <animate 
              attributeName="cx" 
              values="20;180;20" 
              dur="2.5s" 
              begin="0.8s"
              repeatCount="indefinite"/>
            <animate 
              attributeName="cy" 
              values="80;120;80" 
              dur="2.5s" 
              begin="0.8s"
              repeatCount="indefinite"/>
            <animate 
              attributeName="opacity" 
              values="0;1;0" 
              dur="2.5s" 
              begin="0.8s"
              repeatCount="indefinite"/>
          </circle>
          
          <circle cx="20" cy="100" r="11" fill="#f05a28">
            <animate 
              attributeName="cx" 
              values="20;180;20" 
              dur="2.5s" 
              begin="1.2s"
              repeatCount="indefinite"/>
            <animate 
              attributeName="cy" 
              values="90;110;90" 
              dur="2.5s" 
              begin="1.2s"
              repeatCount="indefinite"/>
            <animate 
              attributeName="opacity" 
              values="0;1;0" 
              dur="2.5s" 
              begin="1.2s"
              repeatCount="indefinite"/>
          </circle>
          
          <circle cx="20" cy="100" r="9" fill="#f05a28">
            <animate 
              attributeName="cx" 
              values="20;180;20" 
              dur="2.5s" 
              begin="1.6s"
              repeatCount="indefinite"/>
            <animate 
              attributeName="cy" 
              values="110;90;110" 
              dur="2.5s" 
              begin="1.6s"
              repeatCount="indefinite"/>
            <animate 
              attributeName="opacity" 
              values="0;1;0" 
              dur="2.5s" 
              begin="1.6s"
              repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default Loading; 