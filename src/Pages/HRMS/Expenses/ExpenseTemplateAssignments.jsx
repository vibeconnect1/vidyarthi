import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import Table from "../../../ConfigurationFile/Table";
import { PiPlusCircle } from "react-icons/pi";
import { RiMenu2Line } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import filter from "/filter.png";
import ExpenseManagementSetting from "./ExpenseManagementSetting";
function ExpenseTemplateAssignments() {
  const [action, setAction] = useState(false);
  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Current Expense Template",
      selector: (row) => row.current_expense_template,
      sortable: true,
    },
    {
      name: "Supervisors",
      selector: (row) => row.supervisors,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <PiPlusCircle size={15} />
          </button>
          <button className="border p-2 cursor-pointer text-yellow-500">
            <RiMenu2Line size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <HiDotsVertical size={15} />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      employee_name: "Karan",
      current_expense_template: "General Expense P...",
      supervisors: "L1: Rahul L2: Kavita",
    },
  ];
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">Expense Management</h1>
          </div>
          <p className="mx-10 my-2">View Expense Settings</p>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5">
        <div className="col-span-3 my-3 rounded-md ml-20">
          <div className="bg-white rounded-md">
            <ExpenseManagementSetting />
          </div>
        </div>
        <div className="col-span-6 my-3 rounded-md">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Employee Expense Assignment
            </h2>
            <div className="md:flex justify-end gap-2 mb-1">
              <div>
                <input
                  type="text"
                  placeholder="Search by Employee Name or Code"
                  className="border border-gray-500 py-2 px-2 text-black rounded-xl"
                />
              </div>
              <button className="bg-white rounded-full h-10 w-10">
                <span className="flex justify-center items-center text-black">
                  <img src={filter} alt="filter-icon" />
                </span>
              </button>
              <div className="relative">
                <button
                  className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full"
                  onClick={() => setAction(!action)}
                >
                  <span>Actions</span>
                  <FaChevronDown />
                </button>
                {action && (
                  <div className="absolute right-0 mt-1 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-10 py-5">
                    <div className="py-1 flex flex-col ">
                      <button className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-left hover:text-red-500">
                        Assign templates
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Assign supervisors
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Upload template assignments
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Upload supervisors
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="my-3 bg-white rounded-md px-5 py-5 space-y-6">
            <div className="my-2">
              <Table columns={columns} data={data} selectableRows={true} />
            </div>
          </div>
        </div>
        <div className="col-span-3 rounded-md">
          <div className="my-4 w-full">
            <div className="flex flex-col mt-4 bg-white rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2">
              <div className="flex  gap-4 font-medium">
                <GrHelpBook size={20} />
                <h2>Help Center</h2>
              </div>
              <div className=" ">
                {/* <p className="font-medium">Help Center</p> */}
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>
                    Expense consists of different categories like travelling,
                    mobile allowance, food allowance, or any other expense
                    related to the business.
                  </li>
                  <li>
                    Expense settings allows you to configure and assign expense
                    policy for different category of expenses based on profiles,
                    band, etc.
                  </li>
                  <li>
                    Within the expense category settings, you can set custom
                    expense policies like expense limit, choose to allow
                    employees to upload expense receipts, cut-off expense
                    submission timeline, frequency of reminders for unsubmitted
                    (saved) expenses.
                  </li>
                  <li>
                    You will see default leave categories like (i) Per Diem: You
                    can set daily allowance limits like lunch allowance, etc.
                    (ii) Distance/fuel: You can set kilometer wise limits (per
                    km rate) for 2-wheelers and 4-wheelers (iii) Time: You can
                    set your frequency of expense submissions in a period.
                  </li>
                  <li>
                    Within the expense template settings, you can set approval
                    hierarchy.
                  </li>
                  <li>
                    You can edit/update the templates and categories at any
                    time. You cannot delete the templates and modules if already
                    assigned.
                  </li>
                  <li>
                    The admin can process all approved expenses and generate a
                    consolidated report and bank report.
                  </li>
                  <li>
                    <Link to={`Click Here`} className="text-red-500">
                      Click Here
                    </Link>{" "}
                    for detailed information.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTemplateAssignments;
