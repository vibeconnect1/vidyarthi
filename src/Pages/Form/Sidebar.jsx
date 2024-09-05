import React from 'react';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdSchool } from 'react-icons/md';
import { RiFileSettingsLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-20 bg-white flex flex-col">
      <nav className="flex flex-col space-y-2 p-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-300 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          <LuLayoutDashboard size={30}/>
        </NavLink>
        <NavLink 
          to="/school-management" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-300 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          <MdSchool size={30}/>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar