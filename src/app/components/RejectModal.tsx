import React, { useState } from "react";

interface RejectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reason: string) => void;
}

const RejectModal: React.FC<RejectModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [reason, setReason] = useState("");
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (reason.trim()) {
      setError(null); // Bersihkan pesan error jika sudah ada input
      onSubmit(reason);
    } else {
      setError("Please provide a valid reason for rejection.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <div className="flex items-center mb-4">
          <i className="fas fa-exclamation-circle text-red-500 text-2xl mr-2"></i>
          <h1 className="text-xl font-bold text-black">Reject</h1>
        </div>
        <hr className="mb-4" />
        <div className="bg-gray-100 p-4 text-black rounded-lg mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Property ID</p>
              <p className="font-bold">PR001</p>
            </div>
            <div>
              <p className="text-gray-500">Property Name</p>
              <p className="font-bold">Villa Uma: A Modern V...</p>
            </div>
            <div>
              <p className="text-gray-500">Renter</p>
              <p className="font-bold">John Doe</p>
            </div>
            <div>
              <p className="text-gray-500">Submission Date</p>
              <p className="font-bold">15 Mar 2024</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="declineReason">
            Decline Reason <span className="text-red-500">*</span>
          </label>
          <textarea
            id="declineReason"
            placeholder="Provide the reason for declining this property"
            className="w-full p-2 border rounded-lg"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <div className="flex justify-end">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded text-white bg-red-500"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectModal;
