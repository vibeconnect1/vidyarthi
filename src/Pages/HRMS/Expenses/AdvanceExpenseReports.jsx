import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import filter from "/filter.png";
import ExpenseReportsSetting from "./ExpenseReportsSetting";
import { FaCheck, FaChevronDown, FaDownload } from "react-icons/fa";
import Table from "../../../ConfigurationFile/Table";
import { BiEdit } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { BsEye } from "react-icons/bs";
import { FilterForm } from "../../../ConfigurationFile/FilterForm";

function AdvanceExpenseReports() {
  const [page, setPage] = useState("pending");
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [action, setAction] = useState(false);

  const advanceExpenseStatusList = [
    " Level 1 Approval Pending",
    " Level 2 Approval Pending",
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
      name: "Report Title and ID",
      cell: (row) => (
        <div className="flex items-center flex-col">
          <span className="">{row.report_id}</span>
          <span className="">{row.report_title}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Advance Amount",
      selector: (row) => row.advance_amount,
      sortable: true,
    },
    {
      name: "Amount Used",
      selector: (row) => row.amount_used,
      sortable: true,
    },
    {
      name: "Unused Advance",
      selector: (row) => row.unused_advance,
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
      employee_name: "",
      report_id: "",
      report_title: "",
      advance_amount: "",
      amount_used: "",
      unused_advance: "",
      status: "",
    },
  ];
  const completedColumns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Report Title and ID",
      cell: (row) => (
        <div className="flex items-center flex-col">
          <span className="">{row.report_id}</span>
          <span className="">{row.report_title}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Advance Amount",
      selector: (row) => row.advance_amount,
      sortable: true,
    },
    {
      name: "Amount Used",
      selector: (row) => row.amount_used,
      sortable: true,
    },
    {
      name: "Unused Advance",
      selector: (row) => row.unused_advance,
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
            <BsEye size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <FaDownload size={15} />
          </button>
        </div>
      ),
    },
  ];
  const completedData = [
    {
      id: 1,
      employee_name: "Karan",
      report_id: "ID: REP 1",
      report_title: "testing",
      advance_amount: "Sub: 100 App: 100",
      amount_used: "0",
      unused_advance: "100",
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
              Expense Reports
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
                      label="Advance Expense Status"
                      options={advanceExpenseStatusList}
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
                        Add Advance Request
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Approve multiple requests
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Reject multiple requests
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

export default AdvanceExpenseReports;
