import React, { useState } from "react";
import TabsNavigation from "../components/TabsNavigation";
import FieldMonitoring from "./FieldMonitoring";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-gray-200 flex">
      <TabsNavigation onSelect={setSelectedTab} />

      {/* Add margin-left to offset sidebar width */}
      <div className="flex-1 ml-16 md:ml-64 p-6 md:p-10">
        {selectedTab === "Dashboard" && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-bold mb-2">Wellness Resources</h2>
              <p className="mb-4">Maintain a healthy lifestyle with our tips and guidance.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="bg-blue-800 px-6 py-3 text-white rounded-full text-lg font-medium hover:bg-blue-900 transition">
                  Exercise Plans
                </button>
                <button className="bg-blue-800 px-6 py-3 text-white rounded-full text-lg font-medium hover:bg-blue-900 transition">
                  Nutrition Tips
                </button>
              </div>
            </div>
          </div>
        )}

        {/* The rest of the tabs stay unchanged, but ensure consistent margin-top and padding */}

        {selectedTab === "Field Monitoring" && <FieldMonitoring/>}

        {selectedTab === "Weed Management" && (
          <div className="mt-6">
            <h1 className="text-2xl font-bold mb-6">Weed Management</h1>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-bold mb-2">Weed Control Options</h2>
              <p>Access effective strategies for managing weeds in your fields.</p>
              <button className="bg-blue-800 px-8 py-3 mt-4 text-white rounded-full text-lg font-medium hover:bg-blue-900 transition">
                View Solutions
              </button>
            </div>
          </div>
        )}

        {selectedTab === "Marketplace" && (
          <div className="mt-6">
            <h1 className="text-2xl font-bold mb-6">Marketplace</h1>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-bold mb-2">Agricultural Products</h2>
              <p>Browse and purchase quality agricultural supplies and equipment.</p>
              <div className="mt-4 flex gap-4 flex-col sm:flex-row">
                <button className="bg-blue-800 px-6 py-2 text-white rounded-full text-lg font-medium hover:bg-blue-900 transition">
                  Browse Products
                </button>
                <button className="bg-gray-200 px-6 py-2 text-gray-800 rounded-full text-lg font-medium hover:bg-gray-300 transition">
                  Sell Items
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "Settings" && (
          <div className="mt-6">
            <h1 className="text-2xl font-bold mb-6">Settings</h1>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-bold mb-2">Account Preferences</h2>
              <p>Manage your account settings and notification preferences.</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-blue-800 px-6 py-3 text-white rounded-full text-lg font-medium hover:bg-blue-900 transition">
                  Profile Settings
                </button>
                <button className="bg-blue-800 px-6 py-3 text-white rounded-full text-lg font-medium hover:bg-blue-900 transition">
                  Notification Preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
