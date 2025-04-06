import React from 'react';

export default function DashboardData({
  temperature = "24°C",
  location = "Rampur"
}) {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Top navbar */}
      <div className="flex justify-between items-center bg-green-600 p-4 rounded-lg mb-6">
        <div className="text-sm bg-white text-green-700 px-3 py-1 rounded-full font-medium">
          {temperature} in {location}
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white text-green-700 px-4 py-1 rounded-full text-sm font-medium hover:bg-green-50">
            Notifications
          </button>
          <button className="bg-white text-green-700 px-4 py-1 rounded-full text-sm font-medium hover:bg-green-50">
            Help
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="p-6 space-y-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">WELCOME TO ROBOCROP</h1>
          <p className="max-w-4xl mx-auto text-gray-600">
            "Where AI Meets Agriculture: Your Fields, Smarter. RoboCrop brings intelligent
            automation to your farm, combining artificial intelligence with autonomous rovers
            to monitor, analyze, and optimize your crops. Make data-driven decisions that
            improve yields and reduce waste through our comprehensive digital platform."
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4 bg-green-100 p-3 rounded-full">🕑</div>
            <h2 className="text-xl font-bold mb-3 text-green-700">Field Monitoring</h2>
            <p className="text-gray-600 text-sm text-center">
              The Field Map Overview feature provides a visual representation of your agricultural
              land with real-time rover tracking capabilities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4 bg-green-100 p-3 rounded-full">🌱</div>
            <h2 className="text-xl font-bold mb-3 text-green-700">Weed Management</h2>
            <p className="text-gray-600 text-sm text-center">
              The Weed Management feature provides detailed information about weed detection
              and control across your agricultural land.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300 relative">
            <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              New
            </div>
            <div className="text-4xl mb-4 bg-blue-100 p-3 rounded-full">🛒</div>
            <h2 className="text-xl font-bold mb-3 text-green-500">Marketplace</h2>
            <p className="text-gray-600 text-sm text-center">
              This integrated marketplace connects you with verified suppliers and service
              providers specialized in precision agriculture.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-800">Farm Activity Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 mb-1">Fields Monitored</p>
              <p className="text-3xl font-bold text-green-700">12</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 mb-1">Acres Covered</p>
              <p className="text-3xl font-bold text-green-700">156</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 mb-1">Weeds Identified</p>
              <p className="text-3xl font-bold text-green-700">289</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 mb-1">Savings</p>
              <p className="text-3xl font-bold text-green-700">₹45K</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
