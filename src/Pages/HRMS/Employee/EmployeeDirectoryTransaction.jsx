import React from "react";
import EmployeeDirectorySetting from "./EmployeeDirectorySetting";
import EditEmployeeDirectoryPage from "./EditEmployeeDirectoryPage";
import Table from "../../../ConfigurationFile/Table";
import { FaCheck, FaTable } from "react-icons/fa";
import { Link } from "react-router-dom";

function EmployeeDirectoryTransaction() {
  const columns = [
    {
      name: "Transaction Type",
      selector: (row) => row.transaction_type,
      sortable: true,
    },
    {
      name: "Initiated By",
      selector: (row) => row.initiated_by,
      sortable: true,
    },
    {
      name: "Last Activity",
      selector: (row) => row.last_activity,
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
        <div className="">
          <Link
            to={`/hrms/employee-directory/transaction-check`}
            className="bg-gray-500 p-1 text-white rounded-md flex items-center"
          >
            <FaCheck size={15} />
          </Link>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      transaction_type: "Data Change(Family Information, Basic Information)",
      initiated_by: "Karan Singh",
      last_activity: "30-07-2024",
      status: "Pending Submission",
    },
  ];

  return (
    <div>
      <EditEmployeeDirectoryPage />
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <EmployeeDirectorySetting />
        </div>
        <div className="col-span-3">
          <div className=" bg-white rounded-md mx-5 py-5 px-5">
            <h1 className="text-lg font-medium border-b border-gray-500 py-5">
              Transaction
            </h1>
            <div className="bg-white rounded-md my-2">
              <div className="flex  bg-white py-3  border-b border-gray-500">
                <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                  <FaTable size={20} />
                  Separation Application
                </h2>
              </div>
              <div className="bg-white rounded-md py-2">
                <Table columns={columns} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDirectoryTransaction;
