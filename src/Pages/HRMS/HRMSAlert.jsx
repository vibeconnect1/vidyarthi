import React from "react";
import AdminHRMS from "./AdminHRMS";
import { NavLink } from "react-router-dom";
const HRMSAlert = () => {
  return (
    <section className="">
      <AdminHRMS />
      <div className="flex justify-center w-full">
        <div className="sm:flex grid grid-cols-2 text-sm md:text-base sm:flex-row gap-5 font-medium p-2 sm:rounded-full rounded-md opacity-90 bg-gray-300 ">
          <NavLink
            to={"/hrms/alerts/pending-request"}
            className={({ isActive }) =>
              `  md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Pending Requests
          </NavLink>
          <NavLink
            to={"/hrms/alerts/setup-issues"}
            className={({ isActive }) =>
              ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Setup Issues
          </NavLink>
          <NavLink
            to={"/hrms/alerts/process-alert"}
            className={({ isActive }) =>
              ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Process Alerts
          </NavLink>
          <NavLink
            to={"/hrms/alerts/alert-tasks"}
            className={({ isActive }) =>
              ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Tasks
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HRMSAlert;
