'use client';

import { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Image from 'next/image';
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import BreadCrumb from "../../components/BreadCrumb";
import ApprovalModal from "../../components/ApprovalModal";
import RejectModal from "../../components/RejectModal"; // Import RejectModal
import UmaImg from "/public/Uma.jpg"

const ReviewProperty = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "ManageProperty / Review Property", path: "/Page/ManageProperty" },
  ];

  const [description, setDescription] = useState<string>('<p>Villa Uma derives its name from another word in Bahasa, sawah and signifies the goddess who guards the rice field. The villa stands today on an ancient, blessed land that has gifted many a fine harvest to the villagers for years and you can see several rice fields in the distance. The blessings continue as the sanctimonious villa yields bounties of joy to all those who inhabit it. The sea view and sunrise  here is spectacular and the sunset behind the volcanoes of Java from the gazebo on the top defies all expectations. Located close to the restaurant and spa, this 2 bedroom villa with a private pool and outdoor showers is a dream come true. Bedroom 1: one double bed and a bunk bed Bedroom 2: one double bed</p>');

  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState<boolean>(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState<boolean>(false); // State for RejectModal

  const openApprovalModal = () => {
    setIsApprovalModalOpen(true);
  };

  const closeApprovalModal = () => {
    setIsApprovalModalOpen(false);
  };

  const openRejectModal = () => {
    setIsRejectModalOpen(true); // Open the RejectModal
  };

  const closeRejectModal = () => {
    setIsRejectModalOpen(false); // Close the RejectModal
  };

  const handleApproval = () => {
    console.log("Property Approved");
    closeApprovalModal();
    // Perform any approval logic here
  };

  const handleReject = (reason: string) => {
    console.log("Property Rejected for reason:", reason);
    closeRejectModal();
    // Perform any rejection logic here
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <div className="p-6 bg-background min-h-screen">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl text-black font-semibold mb-1">Review Property</h1>
              <BreadCrumb items={breadcrumbItems} />
            </div>
          </div>

          <form className="space-y-6 bg-white p-5 rounded-lg shadow-lg">
            {/* Image */}
            <div className="w-full h-80 mb-6">
              <Image 
                src={UmaImg} 
                alt="Property Image" 
                className="object-cover w-full h-full rounded-md" 
                width={1024} 
                height={768} 
              />
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-black font-semibold">Renter Name</label>
                <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" value="John Doe" disabled readOnly />
              </div>
              <div>
                <label className="block text-black font-semibold">Renter Phone</label>
                <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" value="(555) 123-4567" disabled readOnly />
              </div>
              <div>
                <label className="block text-black font-semibold">Property Name</label>
                <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" value="Sunset Villa" disabled readOnly />
              </div>
              <div>
                <label className="block text-black font-semibold">Price</label>
                <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" value="$450" disabled readOnly />
              </div>
              <div className="col-span-2">
                <label className="block text-black font-semibold">Address</label>
                <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" value="1234 Beach St, Bali, Indonesia" disabled readOnly />
              </div>
            </div>

            {/* Property Type and Facilities */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-black font-semibold">Property Type</label>
                <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" value="Villa" disabled readOnly />
              </div>
              <div>
                <label className="block text-black font-semibold">Facilities</label>
                <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" value="WiFi, Air Conditioning, Parking" disabled readOnly />
              </div>
            </div>

            {/* Room Numbers */}
            <div className="grid grid-cols-2 gap-4 pt-5">
              <div>
                <label className="block text-black font-semibold">Number of Bathrooms</label>
                <input type="number" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" value={3} disabled readOnly />
              </div>
              <div>
                <label className="block text-black font-semibold">Number of Bedrooms</label>
                <input type="number" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" value={4} disabled readOnly />
              </div>
            </div>

            {/* Description */}
            <div className="pt-5 text-black">
              <label className="block text-black font-semibold">Description</label>
              <CKEditor 
                editor={ClassicEditor}
                data={description}
                disabled={true}
              />
            </div>

            {/* Reject and Approve Buttons */}
            <div className="flex justify-end space-x-4 pt-5">
              <button 
                type="button" 
                className="bg-red-500 text-white py-2 px-4 font-bold rounded hover:bg-red-600 transition duration-200"
                onClick={openRejectModal} // Open the RejectModal on click
              >
                Reject
              </button>
              <button 
                type="button" 
                className="bg-green-500 text-white py-2 px-4 font-bold rounded hover:bg-green-600 transition duration-200"
                onClick={openApprovalModal} // Open modal on click
              >
                Approve
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Approval Modal */}
      <ApprovalModal 
        isOpen={isApprovalModalOpen} 
        onClose={closeApprovalModal} 
        onSubmit={handleApproval} 
      />
      
      {/* Reject Modal */}
      <RejectModal 
        isOpen={isRejectModalOpen} 
        onClose={closeRejectModal} 
        onSubmit={handleReject} 
      />
    </div>
  );
};

export default ReviewProperty;
