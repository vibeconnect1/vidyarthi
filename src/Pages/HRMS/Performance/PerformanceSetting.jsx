import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ImFileText2 } from "react-icons/im";
import AdminHRMS from "../AdminHRMS";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import processIcon from "/process_icon.png";
const PerformanceSetting = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  useEffect(() => {
    // Fetch or use the id to get relevant assessment data
    console.log("Assessment ID:", id);
  }, [id]);
  useEffect(() => {
    const currentPath = window.location.pathname;
    setDropdownOpen(currentPath === "/hrms/performance/performance-assessment");
  }, []);
  return (
    <div className="flex">
      <AdminHRMS />
      <div className="w-full h-full">
        <div className="bg-white p-4 ml-2 rounded-md">
          <ul className="space-y-4">
            <li className="text-gray-600 font-medium border-b my-2 ">
              Tuzar | APC
            </li>
            <li>
              <NavLink
                to="/hrms/performance/performance-dashboard"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:text-blue-400 rounded-md"
                  }`
                }
              >
                <div>{React.createElement(ImFileText2, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Dashboard
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Dashboard
                </h2>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hrms/performance/performance-employee-review"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:text-blue-400 rounded-md"
                  }`
                }
              >
                <div>{React.createElement(ImFileText2, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Employee Review
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Employee Review
                </h2>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hrms/performance/performance-employee-selection"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:text-blue-400 rounded-md"
                  }`
                }
              >
                <div>{React.createElement(ImFileText2, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Employee Selection
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Employee Selection
                </h2>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hrms/performance/performance-cycle-settings"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:text-blue-400 rounded-md"
                  }`
                }
              >
                <div>{React.createElement(ImFileText2, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Settings
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Settings
                </h2>
              </NavLink>
            </li>
            <li>
              <div
                onClick={toggleDropdown}
                className="cursor-pointer group flex items-center text-sm gap-3.5 font-medium p-2 hover:text-blue-500 rounded-md"
              >
                <div>{React.createElement(ImFileText2, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Assessments
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
                  Assessments
                </h2>
              </div>
              {dropdownOpen && (
                <ul className="pl-8 space-y-2 mt-2">
                  <li>
                    <NavLink
                      to={`/hrms/performance/performance-assessment/${id}`}
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
                        1 Assessment 1
                      </h2>
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to={`/hrms/performance/performance-final-recommendation/${id}`}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:text-blue-400 rounded-md"
                  }`
                }
              >
                <div>{React.createElement(ImFileText2, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Final Recommendation
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Final Recommendation
                </h2>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 ml-2 rounded-md my-5">
          <div className="border-b py-3 px-3 pb-2">
            <div className="flex gap-3">
              <span>
                <img src={processIcon}></img>
              </span>
              <h2 className="text-gray-900">PMS Process</h2>
            </div>
          </div>
          <div className="my-3">
            <ul className="space-y-5 px-3">
              <li>
                Customize your goal workflows, review periods, assessment
                templates, competency master and other settings through the
                Settings tab.
              </li>
              <li>
                Through your admin portal, have a 360 degree overview of your
                employees’ development, including their performance review and
                goal progress through the year.
              </li>
              <li>For more information, please visit our Help Center</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSetting;
