import React from "react";
import { NavLink } from "react-router-dom";
import AdminHRMS from "../AdminHRMS";
import menu from "/MenuGroup.png"
import menu2 from "/MenuGroup2.png"
import menu3 from "/MenuGroup3.png"
const PerformanceSettingSidebar = () => {
  return (
    <div className="flex">
      <AdminHRMS />
      <div className="w-full h-full">
        <div className="bg-white  ml-2 rounded-md">
          <ul className="space-y-1 pb-5 px-4">
            <li className="text-gray-600 font-medium border-b my-5 p-3 ">
              Performance Settings
            </li>
            <li>
              <NavLink
                to="/hrms/performance/setting/goal-category-competency-bank"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black bg-gray-200 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md"
                  }`
                }
              >
                <div className="flex gap-1 items-center">
                    <img src={menu} className="h-16 w-16"></img>
                    <div className="flex flex-col space-y-1">
                        <h2 className="font-medium text-sm whitespace-nowrap">1.Goal Category / Competency Bank</h2>
                        <p className="text-gray-500 text-sm">List Out your Goal Categories & Competencies</p>
                    </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hrms/performance/setting/evaluation-template"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black bg-gray-200 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md"
                  }`
                }
              >
                <div className="flex gap-3 mx-2 items-center">
                    <img src={menu2} className="h-12 w-12"></img>
                    <div className="flex flex-col space-y-1">
                        <h2 className="font-medium text-sm whitespace-nowrap">2. Evaluation Template</h2>
                        <p className="text-gray-500 text-sm whitespace-nowrap">Select evaluation Components</p>
                    </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hrms/performance/setting/performance-cycle"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black bg-gray-200 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md"
                  }`
                }
              >
                <div className="flex gap-3 items-center mx-2">
                    <img src={menu3} className="h-12 w-12"></img>
                    <div className="flex flex-col space-y-1">
                        <h2 className="font-medium text-sm whitespace-nowrap"> 3. Performance Cycle</h2>
                        <p className="text-gray-500 text-sm whitespace-nowrap">Define your Performance policy</p>
                    </div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSettingSidebar;
