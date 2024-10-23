"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname

  // Function to determine if the link is active
  const isActive = (path: string): boolean => pathname === path; // Specify path type

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-green-900 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold">Suaka</div>
      <nav className="mt-10">
        <Link 
          href="/" 
          className={`flex items-center py-2 px-6 ${isActive('/') ? 'bg-green-800' : 'hover:bg-green-800'}`}
        >
          <i className="fas fa-home mr-3"></i>
          Home
        </Link>
        <Link 
          href="/Page/ManageProperty" 
          className={`flex items-center py-2 px-6 mt-2 ${isActive('/Page/ManageProperty') ? 'bg-green-800' : 'hover:bg-green-700'}`}
        >
          <i className="fas fa-tasks mr-3"></i>
          Manage Property
        </Link>
        <Link 
          href="/Page/ApprovalQueue" 
          className={`flex items-center py-2 px-6 mt-2 ${isActive('/Page/ApprovalQueue') ? 'bg-green-800' : 'hover:bg-green-700'}`}
        >
          <i className="fas fa-check-square mr-3"></i>
          Approval Queue
        </Link>
        <Link 
          href="/Page/Recommendation" 
          className={`flex items-center py-2 px-6 mt-2 ${isActive('/Page/Recommendation') ? 'bg-green-800' : 'hover:bg-green-700'}`}
        >
          <i className="fas fa-bookmark mr-3"></i>
          Recommendation
        </Link>
      </nav>
      <div className="p-4 border-t border-green-700 mt-auto">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-400"></div>
          <div className="ml-4">
            <p className="font-medium">User</p>
            <p className="text-sm">youraccount@gmail.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
