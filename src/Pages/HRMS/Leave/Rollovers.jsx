import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import Table from "../../../ConfigurationFile/Table";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCheck, FaDownload } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
function Rollovers() {
  const [page, setPage] = useState("LeaveCycle");
  const leaveCycleColumns = [
    {
      name: "Rollover Date",
      selector: (row) => row.rollover_date,
      sortable: true,
    },
    {
      name: "Run Date",
      selector: (row) => row.run_date,
      sortable: true,
    },
    {
      name: "No Of Employees Processed",
      selector: (row) => row.no_of_employees_processed,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <div className="flex items-center flex-col space-y-1">
          <p>{row.status}</p>
          <span className="bg-green-500 text-white px-4 rounded-md">
            {row.status_percent}
          </span>
        </div>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <FaDownload size={15} />
          </button>
          <button className="border p-2 cursor-pointer ">
            <RiDeleteBin6Line size={15} />
          </button>
        </div>
      ),
    },
  ];
  const leaveCycleData = [
    {
      id: 1,
      rollover_date: "01-01-2020",
      run_date: "12-02-2020",
      no_of_employees_processed: "11",
      status: "Completed",
      status_percent: "100%",
    },
  ];

  const workCycleColumns = [
    {
      name: "Rollover Date",
      selector: (row) => row.rollover_date,
      sortable: true,
    },
    {
      name: "Run Date",
      selector: (row) => row.run_date,
      sortable: true,
    },
    {
      name: "No Of Employees Processed",
      selector: (row) => row.no_of_employees_processed,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <div className="flex items-center flex-col space-y-1">
          <p>{row.status}</p>
          <span className="bg-green-500 text-white px-4 rounded-md">
            {row.status_percent}
          </span>
        </div>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <FaDownload size={15} />
          </button>
          <button className="border p-2 cursor-pointer ">
            <RiDeleteBin6Line size={15} />
          </button>
        </div>
      ),
    },
  ];
  const workCycleData = [
    {
      id: 1,
      rollover_date: "01-01-2020",
      run_date: "12-02-2020",
      no_of_employees_processed: "11",
      status: "Completed",
      status_percent: "100%",
    },
  ];

  const intraColumns = [
    {
      name: "Rollover Date",
      selector: (row) => row.rollover_date,
      sortable: true,
    },
    {
      name: "Run Date",
      selector: (row) => row.run_date,
      sortable: true,
    },
    {
      name: "No Of Employees Processed",
      selector: (row) => row.no_of_employees_processed,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <div className="flex items-center flex-col space-y-1">
          <p>{row.status}</p>
          <span className="bg-green-500 text-white px-4 rounded-md">
            {row.status_percent}
          </span>
        </div>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <FaDownload size={15} />
          </button>
          <button className="border p-2 cursor-pointer ">
            <RiDeleteBin6Line size={15} />
          </button>
        </div>
      ),
    },
  ];
  const intraData = [
    {
      id: 1,
      rollover_date: "01-01-2020",
      run_date: "12-02-2020",
      no_of_employees_processed: "11",
      status: "Completed",
      status_percent: "100%",
    },
  ];

  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <h1 className="text-lg mx-5">Welcome, Karan Singh</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-1 ml-24 mx-5">
        <div className="col-span-12 my-3 rounded-md">
          <div className="flex justify-center">
            <div className="my-5 space-y-2">
              <p className="text-3xl text-gray-900 text-center">Rollovers</p>
              <p className="text-lg">View and Generate Rollovers</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 my-3 rounded-md bg-gray-100 py-2 px-5">
          <div className="flex">
            <div className="flex w-full">
              <div className=" flex gap-2 p-2 pb-0 border-b border-gray-400">
                <h2
                  className={`p-1 ${
                    page === "LeaveCycle" &&
                    `bg-white font-medium text-blue-500 shadow-custom-all-sides`
                  } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                  onClick={() => setPage("LeaveCycle")}
                >
                  Leave Cycle Rollovers
                </h2>
                <h2
                  className={`p-1 ${
                    page === "WorkAnniversary" &&
                    "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("WorkAnniversary")}
                >
                  Work Anniversary Rollover
                </h2>
                <h2
                  className={`p-1 ${
                    page === "Intra" &&
                    "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("Intra")}
                >
                  Intra Rollovers
                </h2>
              </div>
            </div>
          </div>
          {page === "LeaveCycle" && (
            <div className="my-2">
              <div className="md:flex justify-between my-3">
                <h2 className="text-lg font-medium flex items-center">
                  Leave Cycle Rollover
                </h2>
                <div>
                  <button className="bg-white rounded-md py-2 px-5 flex gap-2 items-center">
                    <FaCheck />
                    Generate Rollover
                  </button>
                </div>
              </div>
              <Table columns={leaveCycleColumns} data={leaveCycleData} />
            </div>
          )}
          {page === "WorkAnniversary" && (
            <div className="my-2">
              <div className="md:flex justify-between my-3">
                <h2 className="text-lg font-medium flex items-center">
                  Work Cycle Rollover
                </h2>
                <div>
                  <button className="bg-white rounded-md py-2 px-5 flex gap-2 items-center">
                    <FaCheck />
                    Generate Rollover
                  </button>
                </div>
              </div>
              <Table
                columns={workCycleColumns}
                data={workCycleData}
              />
            </div>
          )}
          {page === "Intra" && (
            <div className="my-2">
              <div className="md:flex justify-between my-3">
                <h2 className="text-lg font-medium flex items-center">
                  Intra Rollover
                </h2>
                <div>
                  <button className="bg-white rounded-md py-2 px-5 flex gap-2 items-center">
                    <FaCheck />
                    Generate Rollover
                  </button>
                </div>
              </div>
              <Table
                columns={intraColumns}
                data={intraData}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Rollovers;
