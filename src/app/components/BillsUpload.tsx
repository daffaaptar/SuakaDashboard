import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const BillsUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      file => file.type === 'application/pdf'
    );
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).filter(
        file => file.type === 'application/pdf'
      );
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  return (
    <div className="space-y-4 border rounded-lg p-4">
      <div
        className={`border-2 border-dashed rounded-lg p-8 transition-colors ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <Upload className="w-8 h-8 text-gray-400" />
          <p className="text-sm text-gray-500">Upload PDF Bills</p>
          <p className="text-sm text-gray-500">Drag and drop PDF here, or click to select file</p>
          <label className="cursor-pointer">
            <span className="bg-blue-500 text-white text-sm px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition">
              Browse Files
            </span>
            <input
              type="file"
              className="hidden"
              multiple
              accept=".pdf"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-2">Uploaded Files:</h4>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="text-sm text-gray-600">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BillsUpload;