import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ImFileText2 } from "react-icons/im";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import the necessary icons
import AdminHRMS from "../AdminHRMS";

const UserSettings = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(true); // Assuming open state is managed elsewhere or can be derived

  useEffect(() => {
    const currentPath = window.location.pathname;
    setDropdownOpen(
      currentPath === "/hrms/organization/employee-permissions" ||
        currentPath === "/hrms/organization/employee-news-feed-permissions"
    );
  }, []);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="flex">
      <AdminHRMS />
      <div className="w-96 h-full bg-white border-r p-4 mt-9">
        <ul className="space-y-4">
          <li className="font-bold text-lg">Details List</li>
          <li>
            <NavLink
              to="/hrms/organization/manage-administrators"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                }`
              }
            >
              <div>{React.createElement(ImFileText2, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Manage Administrators
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Manage Administrators
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hrms/organization/third-party-users"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                }`
              }
            >
              <div>{React.createElement(ImFileText2, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Third Party Users
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Third Party Users
              </h2>
            </NavLink>
          </li>
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
                 Employee Permissions
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
                 Employee Permissions
              </h2>
            </div>
            {dropdownOpen && (
              <ul className="pl-8 space-y-2 mt-2">
                <li>
                  <NavLink
                    to="/hrms/organization/employee-permissions"
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
                      Permissions
                    </h2>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hrms/organization/employee-news-feed-permissions"
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
                      Employee News Feed Permissions
                    </h2>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserSettings;
