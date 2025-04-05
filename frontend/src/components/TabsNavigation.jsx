import React, { useEffect, useState, useRef } from 'react'

const TabsNavigation = ({ onSelect }) => {
    const [activeTab, setActiveTab] = useState("Dashboard");
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const tabs = [
        {name: "Dashboard", icon: <img src="/assets/dashboard.png" alt="Dashboard" className="w-6 h-6" />},
        {name: "Field Monitoring", icon: <img src="/assets/Field.png" alt="Field Monitoring" className="w-6 h-6" />},
        {name: "Weed Management", icon: <img src="/assets/weed.png" alt="Weed Management" className="w-6 h-6" />},
        {name: "Marketplace", icon: <img src="/assets/marketplace.png" alt="Marketplace" className="w-6 h-6" />},
        {name: "Settings", icon: <img src="/assets/settings.png" alt="Settings" className="w-6 h-6" />},
    ];

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setProfileMenuOpen(false);
            }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        onSelect(tabName);
    };

    return (
        <div className="h-full">
            <div className="w-16 md:w-64 bg-[#E1F1E7] shadow-lg flex flex-col fixed left-0 top-0 bottom-0 z-10">
                <div className="p-4 flex justify-center">
                    <img
                        src="/assets/logo.jpg"
                        alt="AgriTech Logo"
                        className="w-12 md:w-20 h-auto"
                    />
                </div>

                <div className="flex flex-col items-start space-y-2 mt-6 px-2 md:px-4">
                    {tabs.map((tab) => (
                        <button 
                            key={tab.name}
                            onClick={() => handleTabClick(tab.name)}
                            className={`relative flex items-center p-2 md:p-3 rounded-lg w-full transition-colors duration-200 ${
                                activeTab === tab.name
                                ? "bg-gray-100 text-green-500"
                                : "hover:bg-gray-50"
                            }`}
                        >
                            <div className="mr-2 md:mr-3 flex-shrink-0">
                                {tab.icon}
                            </div>
                            <span className="text-sm font-medium hidden md:block">{tab.name}</span>
                            {activeTab === tab.name && (
                                <div className="absolute left-0 top-0 h-full w-full opacity-30 bg-green-500 rounded"></div>
                            )}
                        </button>
                    ))}
                </div>
                
                <div className="mt-auto mb-6 px-2 md:px-4 relative" ref={menuRef}>
                    <button 
                        onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                        className="flex items-center p-2 md:p-3 rounded-lg hover:bg-gray-100 w-full transition-colors duration-200"
                    >
                        <img src="/assets/profile.png" alt="Profile" className="w-8 h-8 rounded-full mr-2 md:mr-3" />
                        <span className="text-sm font-medium hidden md:block">Profile</span>
                    </button>
                    {profileMenuOpen && (
                        <div className="absolute bottom-16 left-0 md:left-4 bg-white rounded-lg shadow-lg py-2 w-48 md:w-56 z-20">
                            <div className="px-4 py-3 border-b border-gray-100">
                                <p className="text-sm font-medium text-gray-900">Ayush Tiwari</p>
                                <p className="text-xs text-gray-500">ayush@gmail.com</p>
                            </div>
                            <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Profile</a>
                            <a href="#settings" 
                               onClick={(e) => {
                                 e.preventDefault();
                                 handleTabClick("Settings");
                                 setProfileMenuOpen(false);
                               }}
                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                               Settings
                            </a>
                            <a href="#logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TabsNavigation