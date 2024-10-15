import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import Table from "../../../ConfigurationFile/Table";
import ProcessHistorySetting from "./ProcessHistorySetting";
import filter from "/filter.png";
import { IoRefreshOutline } from "react-icons/io5";
import { FilterForm } from "../../../ConfigurationFile/FilterForm";

function AdvanceExpenseProcessHistory() {
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [action, setAction] = useState(false);

  const advanceExpenseStatusList = ["Processed", "Reimbursed"];
  const pendingColumns = [
    {
      name: "Run Date",
      selector: (row) => row.run_date,
      sortable: true,
    },
    {
      name: "Advance Expense Report Details",
      selector: (row) => row.advance_expense_report_details,
      sortable: true,
    },
    {
      name: "Amount",
      cell: (row) => (
        <div className="flex items-center flex-col">
          <span className="">{row.amount_reimbursable}</span>
          <span className="">{row.amount_billable}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      //   cell: (row) => (
      //     <div className="flex items-center">
      //       <button className="border p-2">
      //         <FaDownload size={15} />
      //       </button>
      //       <button className="border p-2 cursor-pointer">
      //         <IoRefreshOutline size={15} />
      //       </button>
      //     </div>
      //   ),
    },
  ];
  const pendingData = [
    {
      id: 1,
      run_date: "",
      advance_expense_report_details: "",
      amount_reimbursable: "",
      amount_billable: "",
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
            <h1 className="text-3xl font-bold">Process History</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5">
        <div className="col-span-3 ml-20">
          <ProcessHistorySetting />
        </div>
        <div className="col-span-9 my-5">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Advance Expense Process History
            </h2>
            <div className="md:flex gap-2 mb-1">
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
                        Process Advance Expense
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Reimbursed Advance Expense
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="my-2">
            <Table columns={pendingColumns} data={pendingData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvanceExpenseProcessHistory;
