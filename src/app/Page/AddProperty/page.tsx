'use client';

import { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { ImagePlus, Plus, X } from 'lucide-react';
// import ImageUpload from "@/app/components/ImageUpload";
// import ConstructionNoise from "@/app/components/ConstructionNoise";
// import BillsUpload from "@/app/components/BillsUpload";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import BreadCrumb from "../../components/BreadCrumb";
import PropertyUploadTabs from '@/app/components/PropertyUploadTabs';

const AddProperty = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "ManageProperty / Add Property", path: "/Page/ManageProperty" },
  ];

  const [description, setDescription] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<{ [key: string]: boolean }>({
    bathroom: false,
    bedroom: false,
    livingRoom: false,
    pool: false,
    garden: false,
  });
  
  // const [customCategories, setCustomCategories] = useState<string[]>([]);
  // const [newCategory, setNewCategory] = useState<string>('');

  // const handleCategoryToggle = (category: string) => {
  //   setSelectedCategories(prev => ({
  //     ...prev,
  //     [category]: !prev[category],
  //   }));
  // };

  // const handleAddCustomCategory = () => {
  //   if (newCategory.trim()) {
  //     setCustomCategories(prev => [...prev, newCategory.trim()]);
  //     setSelectedCategories(prev => ({
  //       ...prev,
  //       [newCategory.trim()]: true,
  //     }));
  //     setNewCategory('');
  //   }
  // };

  // const handleRemoveCustomCategory = (category: string) => {
  //   setCustomCategories(prev => prev.filter(cat => cat !== category));
  //   setSelectedCategories(prev => {
  //     const newState = { ...prev };
  //     delete newState[category];
  //     return newState;
  //   });
  // };

  // const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  // };

  // const handleDrop = (e: React.DragEvent<HTMLDivElement>, category: string) => {
  //   e.preventDefault();
  //   // Handle file drop logic here
  //   const files = Array.from(e.dataTransfer.files);
  //   console.log(`Files dropped for ${category}:`, files);
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!", selectedCategories);
  };

  return (
    <div className="flex h-screen">
  <Sidebar />
  <div className="flex-1 ml-64">
    <Navbar />
    <div className="p-6 bg-background min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl text-black font-semibold mb-1">Add New Property</h1>
          <BreadCrumb items={breadcrumbItems} />
        </div>
        {/* Tombol Save Changes */}
        <button className="bg-blue-500 text-white py-2 px-4 font-bold rounded hover:bg-blue-600 transition duration-200">
          Save Changes
        </button>
      </div>

    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-5 rounded-lg shadow-lg">
    {/* Basic Information */}
    <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="block text-black font-semibold">Renter Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" required placeholder="Your Name"/>
        </div>
        <div>
            <label className="block text-black font-semibold">Renter Phone <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" required placeholder="Phone Number"/>
        </div>
        <div>
            <label className="block text-black font-semibold">Property Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" required placeholder="Property Title" />
        </div>
        <div>
            <label className="block text-black font-semibold">Price <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" required placeholder="USD"/>
        </div>
        <div className="col-span-2 grid grid-cols-3 gap-4">
            <div>
                <label className="block text-black font-semibold">Country <span className="text-red-500">*</span></label>
                <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" required value="Indonesia" disabled readOnly/>
            </div>
            <div>
                <label className="block text-black font-semibold">Province <span className="text-red-500">*</span></label>
                <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" required placeholder="Province" />
            </div>
            <div>
                <label className="block text-black font-semibold">City <span className="text-red-500">*</span></label>
                <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" required placeholder="City" />
            </div>
        </div>
        <div>
            <label className="block text-black font-semibold">Location Link <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" required placeholder="Embed Link"/>
        </div>
        <div>
            <label className="block text-black font-semibold">Address <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 text-gray-800 rounded-md p-2" required placeholder="Detail Address"/>
        </div>
        <div className="col-span-2 text-black h-30">
            <label className="block text-gray-700 font-semibold">Description <span className="text-red-500">*</span></label>
            <CKEditor 
                editor={ClassicEditor}
                data={description}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setDescription(data);
                }}
            />
        </div>
    </div>
    {/* Property Type and Facilities */}
    <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="block text-gray-700 font-semibold mb-2">Property Type <span className="text-red-500">*</span></label>
            <div className="space-x-4 border border-gray-300 h-full p-2 text-gray-800 rounded-md">
                <label className="inline-flex items-center">
                    <input type="radio" name="propertyType" value="Villa" className="mr-2" required />
                    Villa
                </label>
                <label className="inline-flex items-center">
                    <input type="radio" name="propertyType" value="Flats" className="mr-2" />
                    Flats
                </label>
                <label className="inline-flex items-center">
                    <input type="radio" name="propertyType" value="Rooms" className="mr-2" />
                    Rooms
                </label>
            </div>
        </div>
        <div>
            <label className="block text-gray-700 font-semibold mb-2">Facilities <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-2 gap-4 border border-gray-300 h-full p-2 text-gray-800 rounded-md">
                <label className="inline-flex items-center">
                    <input type="checkbox" name="facilities" value="WiFi" className="mr-2" />
                    WiFi
                </label>
                <label className="inline-flex items-center">
                    <input type="checkbox" name="facilities" value="Air Conditioning" className="mr-2" />
                    Air Conditioning
                </label>
                <label className="inline-flex items-center">
                    <input type="checkbox" name="facilities" value="Parking" className="mr-2" />
                    Parking
                </label>
                <label className="inline-flex items-center">
                    <input type="checkbox" name="facilities" value="Fitness Center" className="mr-2" />
                    Fitness Center
                </label>
            </div>
        </div>
    </div>
        {/* Room Numbers */}
        <div className="grid grid-cols-2  gap-4 pt-5">
          <div>
            <label className="block text-gray-700 font-semibold">Number of Bathrooms <span className="text-red-500">*</span></label>
            <input type="number" className="w-full border text-gray-700 border-gray-300 rounded-md p-2" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Number of Bedrooms <span className="text-red-500">*</span></label>
            <input type="number" className="w-full border text-gray-700  border-gray-300 rounded-md p-2" required />
          </div>
        </div>

      {/* Property Upload Tabs */}
      <div className="space-y-4">
        <PropertyUploadTabs />
      </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 w-full mt-10 text-white rounded-md p-4">
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
  );
};

export default AddProperty;
