import React from "react";

interface ApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const ApprovalModal: React.FC<ApprovalModalProps> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <div className="flex items-center mb-4">
          <i className="fas fa-check-circle text-green-500 text-2xl mr-2"></i>
          <h1 className="text-xl font-bold text-black">Property Approval</h1>
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
        <div className="bg-green-100 p-4 text-black rounded-lg mb-4 border border-green-500">
          <p className="font-bold">Are you sure you want to approve this property?</p>
          <p>Once approved, it will be active and the renter will receive a notification</p>
        </div>
        <div className="flex justify-end">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalModal;
