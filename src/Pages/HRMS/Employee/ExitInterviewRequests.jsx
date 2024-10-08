import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import Table from "../../../ConfigurationFile/Table";
import { BiEdit } from "react-icons/bi";
function ExitInterviewRequests() {
  const [filter, setFilter] = useState(false);
  const [exitInterviewStatus, setExitInterviewStatus] = useState(false);
  const [branchLocation, setBranchLocation] = useState(false);
  const [supervisor, setSupervisor] = useState(false);
  const [employeeStatus, setEmployeeStatus] = useState(false);
  const [action, setAction] = useState(false);
  const [approvalModal, setApprovalModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);
  const [editEmploymentContract, setEditEmploymentContract] = useState(false);

  const branchLocationList = [
    "Select all",
    "Mumbai; Mumbai; Maharashtra",
    "Test 1 ; Pune; Maharashtra",
    "Delhi; Delhi NCR; Delhi",
    "Asian Paints Delhi; Noida; Delhi",
    "Asian Paints Gurgoan; Gurgoan ; Delhi",
  ];
  const exitInterviewStatusList = [
    "Select all",
    "Pending Approval",
    "Approved",
    "Rejected",
    "Not Submitted",
  ];

  const employeeStatusList = [
    "Select all",
    "Incomplete",
    "Active",
    "Onhold",
    "Terminated",
  ];

  const supervisorList = [
    "Select all",
    "Ajay Singh-100",
    "Vinay Kumar-101",
    "Vishal Yadav-102",
    "Ramesh Kumar-103",
    "Vijay Sharma-104",
    "Virat Gupat-105",
  ];

  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Resignation Date",
      selector: (row) => row.resignation_date,
      sortable: true,
    },
    {
      name: "Last Working Date",
      selector: (row) => row.last_working_date,
      sortable: true,
    },
    {
      name: "Due Date",
      selector: (row) => row.due_date,
      sortable: true,
    },
    {
      name: "Separation Reason",
      selector: (row) => row.separation_reason,
      sortable: true,
    },
    {
      name: "Remark",
      selector: (row) => row.remark,
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
        <div className="flex items-center gap-4">
          <Link
            to={`/hrms/employee-directory/edit-exit-interview-requests/${row.id}`}
          >
            <BiEdit size={15} />
          </Link>
          <button
          >
            <FaDownload size={15} />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      employee_name: "Karan",
      resignation_date: "13-02-2021",
      last_working_date: "13-04-2021",
      due_date: "08-04-2021",
      separation_reason: "Resigned",
      status:"Approved"
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
            <h1 className="text-3xl font-bold">Exit Interview Requests</h1>
          </div>
          <p className="text-sm my-1 mx-3">
            Interview requests for resignation applied and exit the organisation
          </p>
        </header>
        <div className="grid grid-cols-12 gap-5 my-3 pr-2 ml-24">
          <div className="col-span-12">
            <div className="flex justify-between">
              <h2 className="flex items-center text-gray-800 text-xl font-medium">
                Exit Interview Requests
              </h2>
              <div className="md:flex gap-2 mb-1">
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
                    onClick={() => setFilter(!filter)}
                  >
                    Filter
                  </button>
                  {filter && (
                    <div className="absolute right-24 mt-1 bg-white rounded-lg shadow-lg w-3/5 py-5 z-10">
                      <div className="grid grid-cols-3 gap-5 px-5 my-5">
                        <div className="relative">
                          <button
                            onClick={() =>
                              setExitInterviewStatus(!exitInterviewStatus)
                            }
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Exit Interview Status <IoMdArrowDropdown />
                          </button>

                          {exitInterviewStatus && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                              <div className="p-2">
                                <div className="relative flex items-center">
                                  <CiSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                  <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </div>
                              <div className="max-h-60 overflow-y-auto">
                                {exitInterviewStatusList.map(
                                  (option, index) => (
                                    <label
                                      key={option}
                                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                                    >
                                      <input type="checkbox" className="mr-2" />
                                      {option}
                                    </label>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="relative">
                          <button
                            onClick={() => setSupervisor(!supervisor)}
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Supervisor <IoMdArrowDropdown />
                          </button>
                          {supervisor && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                              <div className="p-2">
                                <div className="relative flex items-center">
                                  <CiSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                  <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </div>
                              <div className="max-h-60 overflow-y-auto">
                                {supervisorList.map((option, index) => (
                                  <label
                                    key={option}
                                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                                  >
                                    <input type="checkbox" className="mr-2" />
                                    {option}
                                  </label>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="relative">
                          <button
                            onClick={() => setEmployeeStatus(!employeeStatus)}
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Employee Status
                            <IoMdArrowDropdown />
                          </button>
                          {employeeStatus && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                              <div className="p-2">
                                <div className="relative flex items-center">
                                  <CiSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                  <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </div>
                              <div className="max-h-60 overflow-y-auto">
                                {employeeStatusList.map((option, index) => (
                                  <label
                                    key={option}
                                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                                  >
                                    <input type="checkbox" className="mr-2" />
                                    {option}
                                  </label>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="relative">
                          <button
                            onClick={() => setBranchLocation(!branchLocation)}
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Branch Location <IoMdArrowDropdown />
                          </button>

                          {branchLocation && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                              <div className="p-2">
                                <div className="relative flex items-center">
                                  <CiSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                  <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </div>
                              <div className="max-h-60 overflow-y-auto">
                                {branchLocationList.map((option) => (
                                  <label
                                    key={option}
                                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                                  >
                                    <input type="checkbox" className="mr-2" />
                                    {option}
                                  </label>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => setFilter(!filter)}
                          className="border border-gray-500 rounded-md text-black py-1 px-4"
                        >
                          Clear
                        </button>
                        <button className="bg-gray-500 text-white py-1 px-4 rounded-md ">
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="bg-black text-white font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full"
                    onClick={() => setAction(!action)}
                  >
                    <span>Actions</span>
                    <FaChevronDown />
                  </button>
                  {action && (
                    <div className="absolute right-0 mt-1 mr-5 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                      <div className="py-1 flex flex-col ">
                        <button
                          className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-left hover:text-red-500"
                          onClick={() => setApprovalModal(!approvalModal)}
                        >
                          Approve multiple requests
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() => setRejectModal(!rejectModal)}
                        >
                          Reject multiple requests
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="my-3">
              <Table columns={columns} data={data} selectableRows={true} />
            </div>
          </div>
        </div>
      </div>
      {approvalModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-56 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setApprovalModal(!approvalModal)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="mt-10 px-5">Please select at least 1 request</p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setApprovalModal(!rejectModal)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {rejectModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-56 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setRejectModal(!rejectModal)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="mt-10 px-5">Please select at least 1 request</p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setRejectModal(!rejectModal)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExitInterviewRequests;
