import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImFileText2 } from "react-icons/im";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import the necessary icons
import AdminHRMS from "./AdminHRMS";


const PayslipDetailsList = () => {
  const [open, setOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
      <div className="w-72 h-full bg-white shadow-lg p-4 mt-9">
        <ul className="space-y-4">
        <div className="flex justify-between">
          <li className="font-bold text-lg">Details List</li>
          <select name="" id="" className="border p-2 border-black rounded-md"><option value="">FY 2023-2024</option>
          <option value="">FY 2024-2025</option></select>
          </div>
          <li>
            {/* <div
              onClick={toggleDropdown}
              className="cursor-pointer group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md"
            > */}
              {/* <div>
                {React.createElement(ImFileText2, { size: "20" })}
              </div> */}
              {/* <h2
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
              </h2> */}
            {/* </div> */}
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
              to="/hrms/alerts/payslip"
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
                Payslip
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Payslip
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hrms/alerts/payroll-form16"
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
                Form 16
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Form 16
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
             {/* <div
              onClick={toggleDropdown1}
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
                Employee Permission
              </h2>
              <div className="ml-12">
                {dropdownOpen1 ? (
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
                Employee Permission
              </h2>
            </div> */}
            {dropdownOpen1 && (
              <ul className="pl-8 space-y-2 mt-2">
                <li>
                  <NavLink
                    to="/admin/employee-fields/permission"
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
                      Permission 
                    </h2>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/employee-fields/news-feed-permission"
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
                    Employee News Feed Permission
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

export default PayslipDetailsList