import React, { useState } from 'react';
import { Save } from 'lucide-react';

const ConstructionNoise = () => {
  const [during, setDuring] = useState<string>('');
  const [noise, setNoise] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ during, noise, description });
  };

  return (
    <div className="space-y-4 border rounded-lg p-4">
      <form onSubmit={handleSubmit}>
        {/* During the day */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            During the day?
          </label>
          <div className="space-x-4">
            <label className="inline-flex text-gray-700 items-center">
              <input
                type="radio"
                value="yes"
                checked={during === 'yes'}
                onChange={(e) => setDuring(e.target.value)}
                className="mr-2 text-gray-700"
              />
              Yes
            </label>
            <label className="inline-flex text-gray-700 items-center">
              <input
                type="radio"
                value="no"
                checked={during === 'no'}
                onChange={(e) => setDuring(e.target.value)}
                className="mr-2 text-gray-700"
              />
              No
            </label>
          </div>
        </div>

        {/* How loud is it */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            How loud is it?
          </label>
          <div className="space-x-4">
            <label className="inline-flex text-gray-700 items-center">
              <input
                type="radio"
                value="low"
                checked={noise === 'low'}
                onChange={(e) => setNoise(e.target.value)}
                className="mr-2 text-gray-700"
              />
              Low
            </label>
            <label className="inline-flex text-gray-700 items-center">
              <input
                type="radio"
                value="moderate"
                checked={noise === 'moderate'}
                onChange={(e) => setNoise(e.target.value)}
                className="mr-2 text-gray-700"
              />
              Moderate
            </label>
            <label className="inline-flex text-gray-700 items-center">
              <input
                type="radio"
                value="high"
                checked={noise === 'high'}
                onChange={(e) => setNoise(e.target.value)}
                className="mr-2 text-gray-700"
              />
              High
            </label>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 h-32"
            placeholder="Describe the construction noise..."
          />
        </div>
      </form>
    </div>
  );
};

export default ConstructionNoise;