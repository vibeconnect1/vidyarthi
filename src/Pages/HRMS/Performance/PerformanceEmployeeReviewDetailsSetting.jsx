import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ImFileText2 } from "react-icons/im";
import AdminHRMS from "../AdminHRMS";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaRegIdCard, FaUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
const PerformanceEmployeeReviewDetailsSetting = () => {
  const [open, setOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const { id } = useParams();
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
                to={`/hrms/performance/performance-employee-review/details-summary/${id}`}
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
                  Summary
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Summary
                </h2>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hrms/performance/performance-employee-review/details-submissions"
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
                  Submissions
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Submissions
                </h2>
              </NavLink>
            </li>
            <li>
              <div
                onClick={toggleDropdown}
                className="cursor-pointer group flex justify-between items-center text-sm gap-3.5 font-medium p-2 hover:text-blue-500 rounded-md"
              >
                <div className="flex gap-2">
                  <div>{React.createElement(ImFileText2, { size: "20" })}</div>
                  <h2
                    className={`whitespace-pre duration-300 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Assessments
                  </h2>
                </div>
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
                      to={`/hrms/performance/performance-employee-review/details-assessments`}
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
          </ul>
        </div>
        <div className="bg-white p-4 ml-2 rounded-md my-5">
          <div className="border-b py-3 pb-2">
            <div className="flex mx-1 gap-2">
              <span className="flex items-center">
                <img
                  src="/profile3.jpg"
                  className="h-10 w-10 rounded-full whitespace-nowrap"
                ></img>
              </span>
              <div>
                <h2 className="font-medium">PMS Process</h2>
                <p className="text-sm">President of Indian National Congress</p>
              </div>
            </div>
          </div>
          <div className="my-3 space-y-2">
            <div className="flex gap-3 items-center">
              <span className="text-blue-500">
                <FaRegIdCard />
              </span>
              <h2 className="text-sm ">Department: Marketing</h2>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-blue-500">
                <IoLocationSharp />
              </span>
              <h2 className="text-sm">Location</h2>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-blue-500">
                <FaUser />
              </span>
              <h2 className="text-sm ">Supervisor: Karan Singh</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceEmployeeReviewDetailsSetting;
