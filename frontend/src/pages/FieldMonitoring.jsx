import React, { useState, useEffect } from 'react';

const FieldMonitoring = () => {
  // State for storing fetched data
  const [weatherData, setWeatherData] = useState({ temperature: '24°C', location: 'Rampur' });
  const [roverData, setRoverData] = useState({
    id: 'BuT7x900WEbiqfsT',
    battery: '98%',
    status: 'Scanning',
    coverage: '50%'
  });
  const [environmentalData, setEnvironmentalData] = useState({
    soil: { moisture: 'N/A', temperature: 'N/A', ph: 'N/A' },
    air: { humidity: 'N/A', temperature: 'N/A', windSpeed: 'N/A' },
    irrigation: { moisture: 'N/A', temperature: 'N/A', ph: 'N/A' }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch data - to be implemented in the future
  const fetchFieldData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Example of how data would be fetched
      // const weatherResponse = await fetch('/api/weather');
      // const weatherResult = await weatherResponse.json();
      // setWeatherData(weatherResult);
      
      // const roverResponse = await fetch('/api/rover-status');
      // const roverResult = await roverResponse.json();
      // setRoverData(roverResult);
      
      // const environmentalResponse = await fetch('/api/environmental-data');
      // const environmentalResult = await environmentalResponse.json();
      // setEnvironmentalData(environmentalResult);
      
      // For now using placeholder data
      
    } catch (err) {
      setError('Failed to load field data. Please try again.');
      console.error('Error fetching field data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Effect to fetch data on component mount
  useEffect(() => {
    // Uncomment this when API endpoints are ready
    // fetchFieldData();
    
    // Optional: Set up periodic data refresh
    // const intervalId = setInterval(fetchFieldData, 60000); // refresh every minute
    // return () => clearInterval(intervalId);
  }, []);

  // Function to handle manual refresh
  const handleRefresh = () => {
    fetchFieldData();
  };

  return (
    <div className="flex-1">
      {/* Top bar with refresh button */}
      <div className="flex justify-between items-center bg-yellow-300 p-4 rounded-lg mb-6">
        <div className="text-sm bg-green-600 text-white px-3 py-1 rounded-full">
          {weatherData.temperature} in {weatherData.location}
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleRefresh}
            disabled={isLoading}
            className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-900 transition-colors"
          >
            {isLoading ? 'Refreshing...' : 'Refresh Data'}
          </button>
          <div className="flex items-center space-x-2">
            <span>User: </span>
            <span className="font-bold">Mr. Aditya</span>
          </div>
        </div>
      </div>
      
      {/* Error message if fetch fails */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}
      
      {/* Field Map and Rover Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Field Map Overview */}
        <div className="col-span-1 md:col-span-2 bg-teal-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Field Map Overview</h2>
          <div className="bg-white h-48 rounded-lg flex items-center justify-center">
            {isLoading ? (
              <span className="text-gray-400">Loading map data...</span>
            ) : (
              <span className="text-gray-400">Map goes here</span>
            )}
          </div>
        </div>
        
        {/* Rover Details */}
        <div className="bg-teal-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Rover</h2>
          {isLoading ? (
            <div className="flex justify-center">
              <span className="text-gray-500">Loading rover data...</span>
            </div>
          ) : (
            <div className="space-y-2">
              <p><strong>Rover ID:</strong> {roverData.id}</p>
              <p><strong>Battery:</strong> {roverData.battery}</p>
              <p><strong>Status:</strong> {roverData.status}</p>
              <p><strong>Area Coverage:</strong> {roverData.coverage}</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Environmental Panel */}
      <div className="bg-teal-100 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-6">Environmental Panel</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Soil Condition */}
          <div className="bg-white p-4 rounded-lg">
            <h3 className="bg-yellow-400 text-center py-1 rounded mb-4 font-semibold">SOIL CONDITION</h3>
            {isLoading ? (
              <div className="flex justify-center py-4">
                <span className="text-gray-500">Loading soil data...</span>
              </div>
            ) : (
              <>
                <p><strong>Moisture:</strong> {environmentalData.soil.moisture}</p>
                <p><strong>Temperature:</strong> {environmentalData.soil.temperature}</p>
                <p><strong>pH:</strong> {environmentalData.soil.ph}</p>
              </>
            )}
          </div>
          
          {/* Air Condition */}
          <div className="bg-white p-4 rounded-lg">
            <h3 className="bg-yellow-400 text-center py-1 rounded mb-4 font-semibold">AIR CONDITION</h3>
            {isLoading ? (
              <div className="flex justify-center py-4">
                <span className="text-gray-500">Loading air data...</span>
              </div>
            ) : (
              <>
                <p><strong>Humidity:</strong> {environmentalData.air.humidity}</p>
                <p><strong>Temperature:</strong> {environmentalData.air.temperature}</p>
                <p><strong>Wind Speed:</strong> {environmentalData.air.windSpeed}</p>
              </>
            )}
          </div>
          
          {/* Irrigation Data */}
          <div className="bg-white p-4 rounded-lg">
            <h3 className="bg-yellow-400 text-center py-1 rounded mb-4 font-semibold">IRRIGATION DATA</h3>
            {isLoading ? (
              <div className="flex justify-center py-4">
                <span className="text-gray-500">Loading irrigation data...</span>
              </div>
            ) : (
              <>
                <p><strong>Moisture:</strong> {environmentalData.irrigation.moisture}</p>
                <p><strong>Temperature:</strong> {environmentalData.irrigation.temperature}</p>
                <p><strong>pH:</strong> {environmentalData.irrigation.ph}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldMonitoring;