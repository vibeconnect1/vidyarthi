import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import filter from "/filter.png";
import Table from "../../../ConfigurationFile/Table";
import ProcessHistorySetting from "./ProcessHistorySetting";
import { BiEdit } from "react-icons/bi";

function ProcessExpense() {
  const pendingColumns = [
    {
      name: "Report Title",
      cell: (row) => (
        <div className="flex items-center flex-col">
          <span className="">{row.report_id}</span>
          <span className="">{row.report_title}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Submitted On",
      selector: (row) => row.submitted_on,
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
        </div>
      ),
    },
  ];
  const pendingData = [
    {
      id: 1,
      report_id: "ID: REP 80",
      report_title: "July 2024",
      employee_name: "Karan",
      submitted_on: "10-07-2024",
      amount_reimbursable: "Reimbursable: Rs.1,849",
      amount_billable: "Billable: Rs.0",
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
              Process Expense
            </h2>
            <div className="md:flex gap-2 mb-1">
              <div>
                <input
                  type="text"
                  placeholder="Search by Employee Name or Code"
                  className="border border-gray-500 py-2 px-2 text-black rounded-xl w-full  md:w-96"
                />
              </div>
              <button className="bg-white rounded-full h-10 w-10">
                <span className="flex justify-center items-center text-black">
                  <img src={filter} alt="filter-icon" />
                </span>
              </button>
            </div>
          </div>
          <div className="my-2">
            <Table columns={pendingColumns} data={pendingData} selectableRows={true}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessExpense;
