import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import Table from "../../../ConfigurationFile/Table";
import ProcessHistorySetting from "./ProcessHistorySetting";
import { HiRocketLaunch } from "react-icons/hi2";
import { IoRefreshOutline } from "react-icons/io5";

function ExpenseProcessHistory() {
  const pendingColumns = [
    {
      name: "Run Date",
      selector: (row) => row.run_date,
      sortable: true,
    },
    {
      name: "Expense Report Details",
      selector: (row) => row.expense_report_details,
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
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <FaDownload size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <IoRefreshOutline size={15}/>
          </button>
        </div>
      ),
    },
  ];
  const pendingData = [
    {
      id: 1,
      run_date: "27-05-2024, 14:26:13 IST By: Vinayak Kapdoskar",
      expense_report_details : "33 reports processed",
      amount_reimbursable: "Reimbursable: Rs.1,849",
      amount_billable: "Billable: Rs.0",
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
              Expense Process History
            </h2>
            <div className="md:flex gap-2 mb-1">
              <Link
                to={`/hrms/expense/expense-process-history/process-expense`}
                className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center w-full gap-2"
              >
                <HiRocketLaunch size={15} />
                <span className="text-base">Process Expense</span>
              </Link>
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

export default ExpenseProcessHistory;
