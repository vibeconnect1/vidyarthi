import React, { useState, useEffect, useRef } from 'react';
import profile1 from '/profile1.jpg';
import profile2 from '/profile2.jpg';
import profile3 from '/profile3.jpg';
import profile4 from '/profile4.jpg';
import profile5 from '/profile5.jpg';
import { PiPhoneCallThin } from 'react-icons/pi';
import { VscDeviceCameraVideo } from 'react-icons/vsc';
import { RxDotsHorizontal } from 'react-icons/rx';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const employees = [
  {
    id: 1,
    name: 'Kristin Watson',
    role: 'Web Development',
    profilePic: profile1,
  },
  {
    id: 2,
    name: 'Dianna Smiley',
    role: 'Front End Developer',
    profilePic: profile2,
  },
  {
    id: 3,
    name: 'Nia Sikhone',
    role: 'Web Developer, Designer, and Teacher',
    profilePic: profile3,
  },
  {
    id: 4,
    name: 'Jacob Jones',
    role: 'Bootstrap Expert',
    profilePic: profile4,
  },
  {
    id: 5,
    name: 'Sina Ray',
    role: 'Engineering Architect',
    profilePic: profile5,
  },
];

function ProjectTeam() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeEmployeeId, setActiveEmployeeId] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (employeeId) => {
    setDropdownOpen(!dropdownOpen);
    setActiveEmployeeId(employeeId);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="mx-5 mb-5">
        <input
          type="search"
          placeholder="Search Member"
          className="border p-2 border-gray-300 rounded-lg hover:border-violet-600"
        />
      </div>
      <div className='border-t border-gray-500 mx-5'></div>
      <div className="grid grid-cols lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-5 gap-5 rounded-md py-5 px-5">
        {employees.map(employee => (
          <div key={employee.id} className="bg-white rounded-md">
            <div className="flex gap-3 my-5 mx-5">
              <div>
                <img src={employee.profilePic} className="h-16 w-16 rounded-full" alt="Profile" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{employee.name}</h2>
                <p className="text-base text-gray-600">{employee.role}</p>
              </div>
            </div>
            <div className="flex gap-4 mx-5 mb-5 text-gray-500 relative" ref={dropdownRef}>
              <div>
                <PiPhoneCallThin size={22} />
              </div>
              <div>
                <VscDeviceCameraVideo size={22} />
              </div>
              <div>
                <button onClick={() => toggleDropdown(employee.id)}>
                  <RxDotsHorizontal size={22} />
                </button>
                {dropdownOpen && activeEmployeeId === employee.id && (
                  <div className="absolute right-12 mt-0 w-40 bg-white border rounded-md shadow-lg">
                    <ul className="py-1">
                      <li className="px-4 py-1 hover:bg-gray-100 flex items-center">
                        Settings
                      </li>
                      <li className="px-4 py-1 font-semibold hover:bg-gray-100 flex items-center cursor-pointer">
                        <BiEdit className="mr-2 text-gray-400" size={18} /> <span className='hover:text-blue-500'>Edit</span>
                      </li>
                      <li className="px-4 py-1 font-semibold hover:bg-gray-100 flex items-center cursor-pointer">
                        <RiDeleteBin6Line className="mr-2 text-gray-400" size={18} /> <span className='hover:text-blue-500'>Remove</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProjectTeam