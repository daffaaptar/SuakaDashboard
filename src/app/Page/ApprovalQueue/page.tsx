"use client";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import BreadCrumb from "../../components/BreadCrumb";
import { useRouter } from 'next/navigation';

const ApprovalQueue = () => {
  const router = useRouter();
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Approval Queue", path: "/Page/ApprovalQueue" },
  ];

  const properties = [
    {
      id: 1,
      name: "Villa Uma",
      type: "Villa",
      price: "$450",
      status: "Approved",
      location: "Bali, Denpasar",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/273396074.jpg?k=2f542e60cab302736b391fc013236fa9ea76360fa7cf2818e0e52b7079c56e0d&o=",
    },
    {
      id: 2,
      name: "Villa Uma",
      type: "Villa",
      price: "$450",
      status: "Pending",
      location: "Bali, Denpasar",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/273396074.jpg?k=2f542e60cab302736b391fc013236fa9ea76360fa7cf2818e0e52b7079c56e0d&o=",
    },
    {
      id: 3,
      name: "Villa Uma",
      type: "Villa",
      price: "$450",
      status: "Rejected",
      location: "Bali, Denpasar",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/273396074.jpg?k=2f542e60cab302736b391fc013236fa9ea76360fa7cf2818e0e52b7079c56e0d&o=",
    },
  ];

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Handle filter changes here
    console.log(event.target.value);
  };

  
  // Handle Review Property click
  const handleReviewPropertyClick = () => {
    router.push("/Page/ReviewProperty"); // Navigate to Add Property page
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
              <h1 className="text-2xl text-black font-semibold mb-1">Approval Queue</h1>
              <BreadCrumb items={breadcrumbItems} />
            </div>
            {/* Search and Filter Section */}
            <div className="flex gap-4">
              <select className="rounded-lg p-2 text-center font-bold text-white bg-button" onChange={handleFilterChange}>
                <option>Status</option>
                <option value="all">All</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
              <select className="rounded-lg p-2 text-center font-bold text-white bg-button" onChange={handleFilterChange}>
                <option>Type</option>
                <option value="all">All</option>
                <option value="villa">Villa</option>
                <option value="flats">Flats</option>
                <option value="rooms">Rooms</option>
              </select>
              <input
                type="text"
                placeholder="Search properties..."
                className="outline text-gray-400 rounded-lg px-4 py-2"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            {/* Properties Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Property Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Type</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Price</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((property) => (
                    <tr key={property.id} className="border-b text-gray-600">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3 ">
                          <img
                            src={property.image}
                            alt="Property"
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium">{property.name}</p>
                            <p className="text-sm text-gray-500">{property.location}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 ">{property.type}</td>
                      <td className="px-6 py-4 ">{property.price}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${property.status === "Approved" ? "bg-green-100 text-green-800" : property.status === "Pending" ? "bg-orange-100 text-orange-800" : "bg-red-100 text-red-800"}`}>
                          {property.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="bg-blue-800 px-5 py-2 rounded-lg font-bold text-white" onClick={handleReviewPropertyClick}>
                            Review
                          </button>
                         
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalQueue;
