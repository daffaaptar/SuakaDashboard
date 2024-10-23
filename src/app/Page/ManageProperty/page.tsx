'use client'; // Ensure this is a client component

import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import BreadCrumb from "../../components/BreadCrumb";
import { useState } from "react";
import { useRouter } from 'next/navigation'; // Import useRouter

const ManageProperty = () => {
  const router = useRouter(); // Initialize router
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Managa Property", path: "/Page/ManageProperty" },
  ];

  const [selectedOption, setSelectedOption] = useState("Management");

  // Handle toggle button change
  const handleToggleChange = (option: string) => {
    setSelectedOption(option);
    console.log(`Switched to ${option}`);
  };

  // Handle Add Property click
  const handleAddPropertyClick = () => {
    router.push("/Page/AddProperty"); // Navigate to Add Property page
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        {/* Main Content Area */}
        <div className="p-6 bg-background min-h-screen">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl text-black font-semibold mb-1">Manage Property</h1>
              <BreadCrumb items={breadcrumbItems} />
            </div>
            {/* Search, Filter, and Add Section */}
            <div className="flex gap-4 items-center">
              {/* Toggle Button */}
              <div className="flex items-center bg-gray-200 p-1 rounded-full">
                <button
                  className={`px-4 py-2 rounded-full font-bold text-sm ${selectedOption === "Management" ? "bg-button text-white" : "text-gray-600"}`}
                  onClick={() => handleToggleChange("Management")}
                >
                  Management
                </button>
                <button
                  className={`px-4 py-2 rounded-full font-bold text-sm ${selectedOption === "Rent" ? "bg-button text-white" : "text-gray-600"}`}
                  onClick={() => handleToggleChange("Rent")}
                >
                  Rent
                </button>
              </div>
              {/* Add Property Button */}
              <button
                className="rounded-lg p-2 text-center font-bold text-white bg-button"
                onClick={handleAddPropertyClick} 
              >
                + Add Property
              </button>
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search properties..."
                className="outline text-gray-400 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-4 gap-6">
            {Array(8).fill(null).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <div className="relative">
                  <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/273396074.jpg?k=2f542e60cab302736b391fc013236fa9ea76360fa7cf2818e0e52b7079c56e0d&o="
                    alt="Villa Uma: A Modern Luxury Villa"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-3">
                  <div className="flex items-center mb-2">
                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mr-2">Villa</span>
                    <i className="fas fa-external-link-alt text-gray-500 cursor-pointer"></i>
                  </div>
                  <h2 className="text-md font-semibold text-gray-700 mb-2 cursor-pointer">
                    Villa Uma: A Modern Lux...
                  </h2>
                  <div className="text-gray-500 text-sm mb-2">Umalas, Indonesia</div>
                  <div className="flex items-center text-gray-800 text-sm mb-2">
                    <i className="fas fa-bed mr-2"></i> 4
                    <i className="fas fa-bath ml-4 mr-2"></i> 4
                    <i className="fas fa-wifi ml-4 mr-2"></i>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="line-through text-gray-400 mr-2">$487</span>
                    <span className="text-green-700 font-bold">$405</span>
                  </div>
                  <div className="flex justify-between">
                    <button className="bg-gray-700 mr-1 w-full rounded">
                      <i className="fas fa-bookmark"></i>
                    </button>
                    <button className="bg-gray-700 mx-1 w-full rounded">
                      <i className="fas fa-check-square"></i>
                    </button>
                    <button className="bg-gray-700 ml-1 w-full rounded">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProperty;
