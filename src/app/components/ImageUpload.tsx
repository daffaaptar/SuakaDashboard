import React, { useState } from 'react';
import { ImagePlus, X, Loader2 } from 'lucide-react';

const ImageUpload = () => {
  const [selectedCategories, setSelectedCategories] = useState({
    bathroom: false,
    bedroom: false,
    livingRoom: false,
    pool: false,
  });

  const [customCategories, setCustomCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [uploadedImages, setUploadedImages] = useState({});
  const [isDragging, setIsDragging] = useState(false);

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleAddCustomCategory = () => {
    if (newCategory.trim() && !customCategories.includes(newCategory.trim())) {
      setCustomCategories((prev) => [...prev, newCategory.trim()]);
      setSelectedCategories((prev) => ({
        ...prev,
        [newCategory.trim()]: true,
      }));
      setUploadedImages((prev) => ({
        ...prev,
        [newCategory.trim()]: [],
      }));
      setNewCategory('');
    }
  };

  const handleRemoveCustomCategory = (category) => {
    setCustomCategories((prev) => prev.filter((cat) => cat !== category));
    setSelectedCategories((prev) => {
      const newState = { ...prev };
      delete newState[category];
      return newState;
    });
    setUploadedImages((prev) => {
      const newState = { ...prev };
      delete newState[category];
      return newState;
    });
  };

  const handleImageUpload = (category, files) => {
    const imageFiles = Array.from(files).filter((file) =>
      file.type.startsWith('image/')
    );

    setUploadedImages((prev) => ({
      ...prev,
      [category]: [
        ...(prev[category] || []),
        ...imageFiles.map((file) => ({
          id: Math.random().toString(36).substr(2, 9),
          file,
          preview: URL.createObjectURL(file),
        })),
      ],
    }));
  };

  const handleRemoveImage = (category, imageId) => {
    setUploadedImages((prev) => ({
      ...prev,
      [category]: prev[category].filter((img) => img.id !== imageId),
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e, category) => {
    e.preventDefault();
    setIsDragging(false);
    handleImageUpload(category, e.dataTransfer.files);
  };

  const renderUploadArea = (category) => (
    <div
      className={`mt-2 border-2 border-dashed rounded-lg p-4 transition-colors ${
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      } ${selectedCategories[category] ? 'block' : 'hidden'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={(e) => handleDrop(e, category)}
    >
      <div className="flex flex-col items-center justify-center space-y-2">
        <ImagePlus className="w-8 h-8 text-gray-400" />
        <p className="text-sm text-gray-500">Drag and drop images here or</p>
        <label className="cursor-pointer">
          <span className="bg-blue-500 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-600 transition">
            Browse Files
          </span>
          <input
            type="file"
            className="hidden"
            multiple
            accept="image/*"
            onChange={(e) => handleImageUpload(category, e.target.files)}
          />
        </label>
      </div>

      {/* Image Preview Grid */}
      {uploadedImages[category]?.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          {uploadedImages[category].map((image) => (
            <div key={image.id} className="relative group">
              <img
                src={image.preview}
                alt="preview"
                className="w-full h-24 object-cover rounded-lg"
              />
              <button
                onClick={() => handleRemoveImage(category, image.id)}
                className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full 
                         opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Predefined Categories */}
      <div className="space-y-2">
        {Object.keys(selectedCategories)
          .filter((category) => !customCategories.includes(category)) // Predefined categories
          .map((category) => (
            <div key={category} className="border rounded-lg p-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedCategories[category]}
                  onChange={() => handleCategoryToggle(category)}
                  className="w-4 h-4 text-blue-500"
                />
                <span className="text-gray-700">
                  {category
                    .charAt(0)
                    .toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
                </span>
              </label>
              {renderUploadArea(category)}
            </div>
          ))}
      </div>

      {/* Custom Categories */}
      <div className="space-y-2">
        {customCategories.map((category) => (
          <div key={category} className="border rounded-lg p-4 relative">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCategories[category]}
                onChange={() => handleCategoryToggle(category)}
                className="w-4 h-4 text-blue-500"
              />
              <span className="text-gray-700">{category}</span>
            </label>
            <button
              onClick={() => handleRemoveCustomCategory(category)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
            {renderUploadArea(category)}
          </div>
        ))}
      </div>

      {/* Custom Category Input */}
      <h3 className="text-lg text-gray-700 font-semibold ">Add Manual Category</h3>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Garden"
          className="flex-1 border border-gray-300 text-gray-700 rounded-md p-2"
        />
        <button
          onClick={handleAddCustomCategory}
          disabled={!newCategory.trim()}
          className="bg-blue-500 text-white px-4 py-2 font-extrabold rounded-md hover:bg-blue-600 
                   disabled:bg-gray-300 disabled:cursor-not-allowed transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
