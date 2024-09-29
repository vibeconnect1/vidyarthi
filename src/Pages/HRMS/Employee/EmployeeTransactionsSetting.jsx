import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImFileText2 } from "react-icons/im";
const EmployeeTransactionsSetting = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full">
      <div className="h-full bg-white rounded-md p-4">
        <ul className="space-y-4">
          <li className="font-bold text-lg">Details List</li>
          <li>
            <NavLink
              to="/hrms/employee-transactions/data-change-request"
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
                Data Change Requests
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Data Change Requests
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hrms/employee-directory/employment"
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
                CTC Basket Requests
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                CTC Basket Requests
              </h2>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeTransactionsSetting