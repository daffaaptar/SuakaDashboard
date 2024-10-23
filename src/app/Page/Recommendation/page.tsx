'use client'; // Ensure this is a client component

import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import BreadCrumb from "../../components/BreadCrumb";
import { useState } from "react";
import { useRouter } from 'next/navigation'; // Import useRouter

const Recommendation = () => {
  const router = useRouter(); // Initialize router
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Recommendation", path: "/Page/Recommendation" },
  ];

  const [selectedOption, setSelectedOption] = useState("Management");

  // Sample data for recommendations
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      name: "Villa Uma",
      location: "Umalas, Indonesia",
      imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/273396074.jpg?k=2f542e60cab302736b391fc013236fa9ea76360fa7cf2818e0e52b7079c56e0d&o=",
      price: 405,
      originalPrice: 487,
      bedrooms: 4,
      bathrooms: 4,
      term: "Short Term" // Can be 'Short Term', 'Mid Term', or 'Long Term'
    },
    {
      id: 2,
      name: "Villa Uma",
      location: "Umalas, Indonesia",
      imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/273396074.jpg?k=2f542e60cab302736b391fc013236fa9ea76360fa7cf2818e0e52b7079c56e0d&o=",
      price: 405,
      originalPrice: 487,
      bedrooms: 4,
      bathrooms: 4,
      term: "Mid Term" // Can be 'Short Term', 'Mid Term', or 'Long Term'
    },
    {
      id: 3,
      name: "Villa Uma",
      location: "Umalas, Indonesia",
      imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/273396074.jpg?k=2f542e60cab302736b391fc013236fa9ea76360fa7cf2818e0e52b7079c56e0d&o=",
      price: 405,
      originalPrice: 487,
      bedrooms: 4,
      bathrooms: 4,
      term: "Long Term" // Can be 'Short Term', 'Mid Term', or 'Long Term'
    },
  ]);

  // Handle toggle button change
  const handleToggleChange = (option: string) => {
    setSelectedOption(option);
    console.log(`Switched to ${option}`);
  };

  // Handle remove recommendation
  const handleRemoveRecommendation = (id: number) => {
    setRecommendations(recommendations.filter(rec => rec.id !== id));
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
              <h1 className="text-2xl text-black font-semibold mb-1">Recommendation Property</h1>
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
            {recommendations.map(property => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg p-4">
                <div className="relative">
                  <img
                    src={property.imageUrl}
                    alt={property.name}
                    className="rounded-t-lg"
                  />
                  {/* Term Flag */}
                  <span className="absolute top-2 left-2 bg-white shadow-lg outline-black text-black font-bold text-xs px-2 py-1 rounded">
                    {property.term}
                  </span>
                </div>
                <div className="p-3">
                  <div className="flex items-center mb-2">
                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mr-2">Villa</span>
                    <i className="fas fa-external-link-alt text-gray-500 cursor-pointer"></i>
                  </div>
                  <h2 className="text-md font-semibold text-gray-700 mb-2 cursor-pointer">
                    {property.name}
                  </h2>
                  <div className="text-gray-500 text-sm mb-2">{property.location}</div>
                  <div className="flex items-center text-gray-800 text-sm mb-2">
                    <i className="fas fa-bed mr-2"></i> {property.bedrooms}
                    <i className="fas fa-bath ml-4 mr-2"></i> {property.bathrooms}
                    <i className="fas fa-wifi ml-4 mr-2"></i>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="line-through text-gray-400 mr-2">${property.originalPrice}</span>
                    <span className="text-green-700 font-bold">${property.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <button 
                      className="bg-red-700 w-full rounded"
                      onClick={() => handleRemoveRecommendation(property.id)} // Remove property on click
                    >
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

export default Recommendation;
