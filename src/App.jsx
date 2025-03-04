import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to TravelNExplore</h1>
        <p className="text-gray-600 mb-6">Your next adventure begins here. Discover amazing destinations and create unforgettable memories.</p>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Explore Destinations
          </button>
          <button className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-md transition-colors">
            Plan Trip
          </button>
        </div>
      </div>
      <h1 className=''></h1>
    </div>
  );
}

export default App;