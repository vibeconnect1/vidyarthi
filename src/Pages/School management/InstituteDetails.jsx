import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { NavLink } from "react-router-dom";

function InstituteDetails() {
  const [isBasicSetup, setIsBasicSetup] = useState(false);
  const [isFees, setIsFees] = useState(false);
  const toggleBasicSetup = () => {
    setIsBasicSetup((prevState) => !prevState);
  };

  return (
    <div className="h-screen w-48 text-black bg-white">
      <ul className="flex flex-col space-y-2 p-4 bg-white">
        <li>
          <NavLink
            to="/school-management/school-dashboard"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">
              <LuLayoutDashboard className="mt-1" /> Dashboard
            </div>
          </NavLink>
        </li>
        <li>
          <div
            className="p-4 cursor-pointer hover:bg-gray-300 flex justify-between items-center"
            onClick={toggleBasicSetup}
          >
            <div className="flex items-center">
              <span>Basic Setup</span>
            </div>
            <IoIosArrowUp
              className={`transform transition-transform ${
                isBasicSetup ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {isBasicSetup && (
            <ul>
              <li>
                <NavLink
                  to="/school-management/school-Institution-home"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  Institution
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/school-song-and-prayer"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  Song & Prayer
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic-parent-recommendation"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  Parent Recommendation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/general-rules"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  General Rules
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/csr"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  CSR
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/discipline-code"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  Discipline Code
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/path-to-success"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  Path To Success
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic-details"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  Academic
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/school-students"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  Student
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/applicant"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  Applicant
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/employees"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  Employee
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/Quotas"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  Quotas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/staff/Role"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  User Roles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/calendar"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  Calendar & Timing
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div
            className="p-4 cursor-pointer hover:bg-gray-300 flex justify-between items-center"
            onClick={() =>setIsFees(!isFees)}
          >
            <div className="flex items-center">
              <span className="whitespace-nowrap">Fees & Payment</span>
            </div>
            <IoIosArrowUp
              className={`transform transition-transform ${
                isFees ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {isFees && (
            <ul>
              <li>
                <NavLink
                  to="/school-management/fees-payment/feesType"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  Fees type
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/fees-payment/fees-payment"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  Fees Payment 
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/fees-payment/income"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                  Income 
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="dd"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
                    }`
                  }
                >
                   Expense
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default InstituteDetails;
