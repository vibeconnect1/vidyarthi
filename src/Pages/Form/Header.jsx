import React from "react";
import { IoBookOutline } from "react-icons/io5";

function Header() {
  return (
    <div className="w-screen h-16 bg-gray-800 text-white">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex gap-6 items-center space-x-4">
          <IoBookOutline size={40} />
          <input
            type="search"
            placeholder="Search"
            className="border border-gray-600 rounded-md px-2 py-1 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer">Notification</div>
          <div className="cursor-pointer">Profile</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
