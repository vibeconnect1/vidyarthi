import React from "react";
import { NavLink } from "react-router-dom";
import { ImFileText2 } from "react-icons/im";
import AdminHRMS from "../AdminHRMS";
const ProcessHistorySetting = () => {
  return (
    <div className="flex">
      <AdminHRMS />
      <div className="w-72 h-auto bg-white rounded-md border-r p-4 mt-9">
        <ul className="space-y-4">
          <li className="font-bold text-lg">Details</li>
          <li>
            <NavLink
              to="/hrms/expense/expense-process-history"
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
                Expense Process History
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Expense Process History
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hrms/expense/advance-expense-process-history"
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
                Advance Expense Process History
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Advance Expense Process History
              </h2>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProcessHistorySetting