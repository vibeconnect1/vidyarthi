import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { ImFileText2 } from "react-icons/im";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import the necessary icons
import AdminHRMS from '../AdminHRMS';


const OrganizationSetting = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(true); // Assuming open state is managed elsewhere or can be derived

  useEffect(() => {
   
    const currentPath = window.location.pathname;
    setDropdownOpen(
      currentPath === '/admin/company-profile/basic-information' ||
      currentPath === '/admin/company-profile/address-information'
    );
  }, []);
  useEffect(() => {
    
    const currentPath = window.location.pathname;
    setDropdownOpen1(
      currentPath === '/admin/employee-fields/personal-details' ||
      currentPath === '/admin/employee-fields/employment-details' ||
       currentPath === '/admin/employee-fields/documents' ||
       currentPath === '/admin/employee-fields/other-details'
    );
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const [open1, setOpen1] = useState(true);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };

  return (
    <div className="flex">
        <AdminHRMS/>
      <div className="w-96 h-full bg-white border-r p-4 mt-9">
        
        <ul className="space-y-4">
          <li className="font-bold text-lg">Details List</li>
          <li>
            <div
              onClick={toggleDropdown}
              className="cursor-pointer group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md"
            >
              <div>
                {React.createElement(ImFileText2, { size: "20" })}
              </div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Company Profile
              </h2>
              <div className="ml-16">
                {dropdownOpen ? (
                  <FiChevronUp size={20} />
                ) : (
                  <FiChevronDown size={20} />
                )}
              </div>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Company Profile
              </h2>
            </div>
            {dropdownOpen && (
              <ul className="pl-8 space-y-2 mt-2">
                <li>
                  <NavLink
                    to="/admin/company-profile/basic-information"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Basic Information
                    </h2>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/company-profile/address-information"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Address Information
                    </h2>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/admin/geographical-settings"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                }`
              }
            >
              <div>
                {React.createElement(ImFileText2, { size: "20" })}
              </div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Geographical Settings
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Geographical Settings
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/locations"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                }`
              }
            >
              <div>
                {React.createElement(ImFileText2, { size: "20" })}
              </div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Locations
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Locations
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hrms/organization/department"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                }`
              }
            >
              <div>
                {React.createElement(ImFileText2, { size: "20" })}
              </div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Department
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Department
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hrms/organization/holiday-calendar"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                }`
              }
            >
              <div>
                {React.createElement(ImFileText2, { size: "20" })}
              </div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Company Holidays
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Company Holidays
              </h2>
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              to="/employee-fields"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                }`
              }
            >
              <div>
                {React.createElement(ImFileText2, { size: "20" })}
              </div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Employee Fields
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Employee Fields
              </h2>
            </NavLink> */}
             <div
              onClick={toggleDropdown1}
              className="cursor-pointer group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md"
            >
              <div>
                {React.createElement(ImFileText2, { size: "20" })}
              </div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open1 && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Employee Fields
              </h2>
              <div className="ml-16">
                {dropdownOpen1 ? (
                  <FiChevronUp size={20} />
                ) : (
                  <FiChevronDown size={20} />
                )}
              </div>
              <h2
                className={`${
                  open1 && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Employee Fields
              </h2>
            </div>
            {dropdownOpen1 && (
              <ul className="pl-8 space-y-2 mt-2">
                <li>
                  <NavLink
                    to="/hrms/organization/personal-information"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Personal Details
                    </h2>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hrms/organization/employee-information"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Employment Details
                    </h2>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hrms/organization/other-information"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Other Information
                    </h2>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hrms/organization/employee-document"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                     Documents
                    </h2>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/hrms/organization/bank-accounts"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                }`
              }
            >
              <div>
                {React.createElement(ImFileText2, { size: "20" })}
              </div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Bank Accounts
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Bank Accounts
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hrms/organization/calendar-settings"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                }`
              }
            >
              <div>
                {React.createElement(ImFileText2, { size: "20" })}
              </div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Calendar Milestones and Events
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Calendar Milestones and Events
              </h2>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <div className="flex-grow p-6 bg-gray-100">
        This section can be used to render the content of the selected menu item
        <h1 className="text-2xl font-bold">Organisation Settings</h1>
        <p className="mt-2">Select a menu item to view and edit settings.</p>
      </div> */}
    </div>
  );
};

export default OrganizationSetting