import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ConstructionNoise from './ConstructionNoise';
import BillsUpload from './BillsUpload';

const PropertyUploadTabs = () => {
  const [activeTab, setActiveTab] = useState<'images' | 'bills' | 'noise'>('images');

  return (
    <div className="space-y-4">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('images')}
            className={`py-4 px-1 relative font-medium text-lg ${
              activeTab === 'images'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Upload Images <span className='text-red-500 font-bold'>*</span>
            {activeTab === 'images' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('bills')}
            className={`py-4 px-1 relative font-medium text-lg ${
              activeTab === 'bills'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Bills
            {activeTab === 'bills' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('noise')}
            className={`py-4 px-1 relative font-medium text-lg ${
              activeTab === 'noise'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Construction Noise
            {activeTab === 'noise' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
            )}
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 'images' && (
          <div>
            <ImageUpload />
          </div>
        )}
        {activeTab === 'bills' && (
          <div>
            <BillsUpload />
          </div>
        )}
        {activeTab === 'noise' && (
          <div>
            <ConstructionNoise />
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyUploadTabs;
