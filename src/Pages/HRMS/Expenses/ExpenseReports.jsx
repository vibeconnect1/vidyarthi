import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import filter from "/filter.png";
import ExpenseReportsSetting from "./ExpenseReportsSetting";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import Table from "../../../ConfigurationFile/Table";
import { BiEdit } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { FilterForm } from "../../../ConfigurationFile/FilterForm";

function ExpenseReports() {
  const [page, setPage] = useState("pending");
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [action, setAction] = useState(false);
  const expenseStatusList = [
    " Level 1 Approval Pending",
    " Level 2 Approval Pending",
  ];
  const expenseCategory = [
    "Conveyance to Professional",
    "Daily Allowance - Ex",
    "Daily Allowance - JV Code",
    "Daily Allowance - Outstation",
    "Demo",
    "Distance/Fuel",
    "Int Travel Tickets",
    "Internet Reimbursement",
    "Late Sitting",
    "Lodging",
    "Meal Reimbursement ( Late Sitting )",
    "Meal exps",
    "Misc Expenses",
    "Mobile",
    "Per Diem",
    "Test - D",
    "Time",
    "Travel / Conveyance Reimbursement",
    "Travel Allowance",
    "Travel Expense",
    "Travelling Expenses",
  ];
  const employeeDepartmentList = [
    "Finance",
    "HR",
    " HR",
    "L machine",
    "L packing",
    "Marketing",
    "Operations",
    "Sales",
    "Unassigned",
  ];
  const branchLocationList = [
    "Mumbai; Mumbai; Maharashtra",
    "Test 1 ; Pune; Maharashtra",
    "Delhi; Delhi NCR; Delhi",
    "Asian Paints Delhi; Noida; Delhi",
    "Asian Paints Gurgoan; Gurgoan ; Delhi",
  ];

  const pendingColumns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Report Title",
      cell: (row) => (
        <div className="flex items-center flex-col">
          <span className="">{row.report_title_id}</span>
          <span className="">{row.report_title}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Submitted On",
      selector: (row) => row.submitted_on,
      sortable: true,
    },
    {
      name: "Reimbursable",
      selector: (row) => row.reimbursable,
      sortable: true,
    },
    {
      name: "Billable",
      selector: (row) => row.billable,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <BiEdit size={15} />
          </button>
          <button className="border p-2 cursor-pointer text-yellow-500">
            <FaCheck size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <HiDotsVertical />
          </button>
        </div>
      ),
    },
  ];
  const pendingData = [
    {
      id: 1,
      employee_name: "Karan",
      report_title_id: "ID: REP 70",
      report_title: "April 2024",
      submitted_on: "07-06-2024",
      reimbursable: "-420",
      billable: "0",
      status: "Level 1 Approval Pending",
    },
    {
      id: 1,
      employee_name: "Rohit",
      report_title_id: "ID: REP 68",
      report_title: "Mumbai",
      submitted_on: "02-04-2024",
      reimbursable: "-8,820",
      billable: "0",
      status: "Level 1 Approval Pending",
    },
  ];
  const completedColumns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Report Title",
      cell: (row) => (
        <div className="flex items-center flex-col">
          <span className="">{row.report_title_id}</span>
          <span className="">{row.report_title}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Submitted On",
      selector: (row) => row.submitted_on,
      sortable: true,
    },
    {
      name: "Reimbursable",
      selector: (row) => row.reimbursable,
      sortable: true,
    },
    {
      name: "Billable",
      selector: (row) => row.billable,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <BiEdit size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <HiDotsVertical />
          </button>
        </div>
      ),
    },
  ];
  const completedData = [
    {
      id: 1,
      employee_name: "Rahul",
      report_title_id: "ID: REP 80",
      report_title: "July 2024",
      submitted_on: "10-07-2024",
      reimbursable: "80",
      billable: "0",
      status: "Approved",
    },
    {
      id: 2,
      employee_name: "Mukesh",
      report_title_id: "ID: REP 78",
      report_title: "YOGESH Singh",
      submitted_on: "10-07-2024",
      reimbursable: "90",
      billable: "0",
      status: "Approved",
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
            <h1 className="text-3xl font-bold">Reports</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5">
        <div className="col-span-3 my-3 rounded-md ml-20">
          <div className="bg-white rounded-md">
            <ExpenseReportsSetting />
          </div>
        </div>
        <div className="col-span-9 my-3 rounded-md">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Advance Expense Reports
            </h2>
            <div className="md:flex gap-2 mb-1">
              <div>
                <input
                  type="text"
                  placeholder="Search by Employee Name or Code"
                  className="border border-gray-500 py-2 px-2 text-black rounded-xl w-full  md:w-96"
                />
              </div>
              <div className="relative">
                <button
                  className="bg-white rounded-full h-10 w-10"
                  onClick={() => setFilterDropdown(!filterDropdown)}
                >
                  <span className="flex justify-center items-center text-black">
                    <img src={filter} alt="filter-icon" />
                  </span>
                </button>
              </div>
              {filterDropdown && (
                <div className="absolute mt-12 right-32 bg-white rounded-md z-20 border-2 w-[810px] p-5">
                  <div className="grid grid-cols-3 gap-8 pt-5">
                    <FilterForm
                      label="Expense Status"
                      options={expenseStatusList}
                    />
                    <FilterForm
                      label="Expense Category"
                      options={expenseCategory}
                    />
                    <input
                      type="text"
                      className="border-b border-gray-500 focus:outline-none"
                      placeholder="Start Date"
                    />
                    <input
                      type="text"
                      className="border-b border-gray-500 focus:outline-none"
                      placeholder="End Date"
                    />
                    <FilterForm
                      label="Employee Department"
                      options={employeeDepartmentList}
                    />
                    <FilterForm
                      label="Branch Location"
                      options={branchLocationList}
                    />
                    <div className="flex justify-end col-span-3 gap-2">
                      <button className="border border-gray-500 rounded-md text-black py-1 px-4">
                        Clear
                      </button>
                      <button className="bg-gray-500 text-white py-1 px-4 rounded-md ">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="relative">
                <button
                  className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full"
                  onClick={() => setAction(!action)}
                >
                  <span>Actions</span>
                  <FaChevronDown />
                </button>
                {action && (
                  <div className="absolute right-0 mt-1 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-10 py-2">
                    <div className="py-1 flex flex-col ">
                      <button className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-left hover:text-red-500">
                        Add Expense Report
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Approve multiple requests
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Reject multiple requests
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Bulk Upload Expense Reports
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className=" flex gap-2 p-2 pb-0 border-b border-gray-400">
              <h2
                className={`p-1 ${
                  page === "pending" &&
                  `bg-white font-medium text-blue-500 shadow-custom-all-sides`
                } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                onClick={() => setPage("pending")}
              >
                Pending Reports
              </h2>
              <h2
                className={`p-1 ${
                  page === "completed" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                onClick={() => setPage("completed")}
              >
                Completed Reports
              </h2>
            </div>
          </div>
          {page === "pending" && (
            <div className="my-2">
              <Table
                columns={pendingColumns}
                data={pendingData}
                selectableRows={true}
              />
            </div>
          )}
          {page === "completed" && (
            <div className="my-2">
              <Table
                columns={completedColumns}
                data={completedData}
                selectableRows={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExpenseReports;
