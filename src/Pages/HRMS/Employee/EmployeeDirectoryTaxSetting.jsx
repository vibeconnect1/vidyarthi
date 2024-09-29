import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImFileText2 } from "react-icons/im";
import AdminHRMS from "../AdminHRMS";
const EmployeeDirectoryTaxSetting = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full">
        <AdminHRMS/>
      <div className="w-80 h-full bg-white rounded-md p-4  ml-24">
        <ul className="space-y-4">
          <li className="font-bold text-lg">Sections</li>
          <li>
            <NavLink
              to="/hrms/employee-directory/tax/deductions-80C"
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
                80C Deductions
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                80C Deductions
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hrms/employee-directory/tax/exemptions-deductions-tax"
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
                Other Exemptions/Deductions
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Other Exemptions/Deductions
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hrms/employee-directory/tax/rent-information-tax"
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
                Rent Information
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Rent Information
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hrms/employee-directory/tax/perquisites-information-tax"
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
                Perquisites Information
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Perquisites Information
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hrms/employee-directory/tax/other-income-info-tax"
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
                Other Income Info
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Other Income Info
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hrms/employee-directory/tax/housing-loan-info-tax"
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
                Housing Loan Info
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Housing Loan Info
              </h2>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDirectoryTaxSetting