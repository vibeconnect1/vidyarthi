import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import Table from "../../../ConfigurationFile/Table";
import ProcessHistorySetting from "./ProcessHistorySetting";
import filter from "/filter.png";
import { IoRefreshOutline } from "react-icons/io5";

function AdvanceExpenseProcessHistory() {
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
              <button className="bg-white rounded-full h-10 w-10">
                <span className="flex justify-center items-center text-black">
                  <img src={filter} alt="filter-icon" />
                </span>
              </button>
              <div>
                <button className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full">
                  <span>Actions</span>
                  <FaChevronDown />
                </button>
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
