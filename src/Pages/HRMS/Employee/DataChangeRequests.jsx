import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import EmployeeTransactionsSetting from "./EmployeeTransactionsSetting";
import { FaChevronDown } from "react-icons/fa";
import Table from "../../../ConfigurationFile/Table";
import { IoMdClose } from "react-icons/io";

function DataChangeRequests() {
  const [action, setAction] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Request Type",
      selector: (row) => row.section_declarations,
      sortable: true,
    },
    {
      name: "Submitted Date",
      selector: (row) => row.other_declarations,
      sortable: true,
    },
    {
      name: "Requested By",
      selector: (row) => row.rent_declarations,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.perquisites,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      fiscal_year: "2015-2016",
      section_declarations: "5,85,000.0",
      other_declarations: "1,39,200.0",
      rent_declarations: "3,00,000.0",
      perquisites: "0.0",
      total_other_income: "-1,50,000.0",
    },
  ];
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col ">
        <div className="">
          <header className="text-black bg-white  py-4 ml-20 border border-gray-400">
            <h1 className="text-3xl pl-5 font-bold">Organisation Tree</h1>
            <p className="pl-5">
              Organisation splits among employees are presented under this
              section.
            </p>
            <div className="md:flex justify-end gap-2 mb-1 mx-5 my-5 space-y-2"></div>
          </header>
          <div className="grid grid-cols-12 gap-5 mx-5">
            <div className="col-span-4 bg-white my-3 rounded-md ml-16">
              <EmployeeTransactionsSetting />
            </div>
            <div className="col-span-8 my-3 rounded-md">
              <div className="flex justify-between">
                <h2 className="flex items-center text-gray-800 text-xl font-medium">
                  Data Change Requests
                </h2>
                <div className="md:flex justify-end gap-2 mb-1">
                  <div>
                    <input
                      type="text"
                      placeholder="Search by Employee Name or Code"
                      className="border border-gray-500 p-2 text-black rounded-xl w-full  md:w-96"
                    />
                  </div>
                  <div>
                    <button
                      className="bg-black text-white  font-semibold py-2 px-4 rounded w-full"
                      onClick={() => setFilterModal(!filterModal)}
                    >
                      Filter
                    </button>
                  </div>
                  <div>
                    <button className="bg-black text-white font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full">
                      <span>Actions</span>
                      <FaChevronDown />
                    </button>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <Table columns={columns} data={data} />
              </div>
            </div>
          </div>
        </div>
        {filterModal && (
          <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-2/4 h-3/4 max-h-screen overflow-y-auto">
              <div className="bg-pink-100 py-8 relative">
                <button
                  className="absolute right-2 top-2"
                  onClick={() => setFilterModal(!filterModal)}
                >
                  <IoMdClose size={20} />
                </button>
              </div>
              <div className="grid grid-cols-2">
                <div className="mb-4">
                  <select
                    id="filter"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Request Status</option>
                    <option>
                      <input type="check" /> All
                    </option>
                  </select>
                </div>
                <div className="mb-4">
                  <select
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Branch Location</option>
                    <option value="option1">Mumbai</option>
                    <option value="option2">Pune</option>
                    <option value="option3">Indore</option>
                    <option value="option4">Surat</option>
                  </select>
                </div>
                <div className="mb-4">
                  <select
                    id="filter"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Joining Month</option>
                    <option value="">Joining Month</option>
                    <option value="all">Select All</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                  </select>
                </div>
                <div className="mb-4">
                  <select
                    id="filter"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Employee Department</option>
                    <option value="option1">Select All</option>
                    <option value="option1">Hr</option>
                    <option value="option2">Sales</option>
                    <option value="option3">Finance</option>
                    <option value="option4">Marketing</option>
                    <option value="option4">Operation</option>
                    <option value="option4">Unassigned</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => setFilterModal(!filterModal)}
                  className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                >
                  Clear
                </button>
                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DataChangeRequests;
