import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import filter from "/filter.png";
import { FaCheck, FaChevronDown, FaDownload, FaUpload } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { BsEye } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FilterForm } from "../../../ConfigurationFile/FilterForm";
function RegularizationRequests() {
  const [page, setPage] = useState("pending");
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [action, setAction] = useState(false);
  const [approveMultipleRequests, setApproveMultipleRequests] = useState(false);
  const [approveRequestsByFilters, setApproveRequestsByFilters] =
    useState(false);
  const [rejectMultipleRequests, setRejectMultipleRequests] = useState(false);
  const [rejectRequestsByFilters, setRejectRequestsByFilters] = useState(false);
  const [bulkUploadRegularization, setBulUploadRegularization] =
    useState(false);
  const regularizationReasonList = [
    "Forgot",
    "Outdoor Duty",
    "On field",
    "Project Activity",
    "No Reason",
  ];
  const regularizationRequestStatusList = [
    "Level 1 Approval Pending",
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
  const pendingColumns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Requested Timings	",
      selector: (row) => row.requested_timings,
      sortable: true,
    },
    {
      name: "Actual Timings",
      selector: (row) => row.actual_timings,
      sortable: true,
    },
    {
      name: "Reason",
      selector: (row) => row.reason,
      sortable: true,
    },
    {
      name: "Comment",
      selector: (row) => row.comment,
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
      date: "15-04-2024	",
      requested_timings: "In: 09:00 PM Out: 06:40 PM",
      actual_timings: "",
      reason: "Forgot	",
      comment: "forgot",
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
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Requested Timings	",
      selector: (row) => row.requested_timings,
      sortable: true,
    },
    {
      name: "Actual Timings",
      selector: (row) => row.actual_timings,
      sortable: true,
    },
    {
      name: "Reason",
      selector: (row) => row.reason,
      sortable: true,
    },
    {
      name: "Comment",
      selector: (row) => row.comment,
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
          <button className="border p-2 cursor-pointer text-yellow-500">
            <RiDeleteBin6Line size={15} />
          </button>
        </div>
      ),
    },
  ];
  const completedData = [
    {
      id: 1,
      employee_name: "Karan",
      date: "15-04-2024	",
      requested_timings: "In: 09:00 PM Out: 06:40 PM",
      actual_timings: "",
      reason: "Forgot	",
      comment: "forgot",
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
            <h1 className="text-3xl font-bold">Regularization Requests</h1>
          </div>
          <p className="mx-10 my-2">
            Employees who have requested for separation from the organisation
            are located here.
          </p>
        </header>
        <div className="grid grid-cols-12 gap-5 my-3 pr-2 ml-24">
          <div className="col-span-12 my-3 rounded-md">
            <div className="flex justify-between">
              <div className="flex w-full">
                <div className=" flex gap-2 p-2 pb-0 border-b border-gray-400">
                  <h2
                    className={`p-1 ${
                      page === "pending" &&
                      `bg-white font-medium text-blue-500 shadow-custom-all-sides`
                    } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                    onClick={() => setPage("pending")}
                  >
                    Pending Requests
                  </h2>
                  <h2
                    className={`p-1 ${
                      page === "completed" &&
                      "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                    } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                    onClick={() => setPage("completed")}
                  >
                    Completed Requests
                  </h2>
                </div>
              </div>
              <div className="md:flex justify-end gap-2 mb-1">
                <div>
                  <input
                    type="text"
                    placeholder="Search by Employee Name or Code"
                    className="border border-gray-500 py-2 px-2 text-black rounded-xl w-full md:w-96"
                  />
                </div>
                <div>
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
                  <div className="absolute mt-12 right-32 bg-white rounded-md z-20 border-2 w-4/6 p-5">
                    <div className="grid grid-cols-3 gap-8 pt-5">
                      <FilterForm
                        label="Regularization Reason"
                        options={regularizationReasonList}
                      />
                      <FilterForm
                        label="Regularization Request Status"
                        options={regularizationRequestStatusList}
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
                <div>
                  <button
                    className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full"
                    onClick={() => setAction(!action)}
                  >
                    <span>Actions</span>
                    <FaChevronDown />
                  </button>
                  {action && (
                    <div className="absolute right-0 mt-1 mr-5 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-10 py-5">
                      <div className="py-1 flex flex-col space-y-1">
                        <button
                          className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-left hover:text-red-500"
                          onClick={() =>
                            setApproveMultipleRequests(!approveMultipleRequests)
                          }
                        >
                          Approve multiple requests
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() =>
                            setApproveRequestsByFilters(
                              !approveRequestsByFilters
                            )
                          }
                        >
                          Approve requests by filters
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() =>
                            setRejectMultipleRequests(!rejectMultipleRequests)
                          }
                        >
                          Reject multiple requests
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() =>
                            setRejectRequestsByFilters(!rejectRequestsByFilters)
                          }
                        >
                          Reject requests by filters
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() =>
                            setBulUploadRegularization(
                              !bulkUploadRegularization
                            )
                          }
                        >
                          Bulk Upload Regularization
                        </button>
                      </div>
                    </div>
                  )}
                </div>
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
      {approveMultipleRequests && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-56 max-h-screen overflow-y-auto">
            <div className="bg-gray-200 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() =>
                  setApproveMultipleRequests(!approveMultipleRequests)
                }
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="mt-6 px-5">Please select at least 1 request</p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() =>
                  setApproveMultipleRequests(!approveMultipleRequests)
                }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {approveRequestsByFilters && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 max-h-screen">
            <div className="bg-gray-200 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() =>
                  setApproveRequestsByFilters(!approveRequestsByFilters)
                }
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Bulk Approve Regularizataion Requests by Filters
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-5 overflow-y-auto p-5 my-5">
              <FilterForm
                label="Regularization Reason"
                options={regularizationReasonList}
              />
              <FilterForm
                label="Regularization Request Status"
                options={regularizationRequestStatusList}
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
            </div>
            <div className="flex justify-center space-x-4 my-5">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() =>
                  setApproveRequestsByFilters(!approveRequestsByFilters)
                }
              >
                Cancel
              </button>
              <button className="px-4 py-1 bg-gray-400 text-white rounded hover:bg-gray-400">
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
      {rejectMultipleRequests && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-56 max-h-screen overflow-y-auto">
            <div className="bg-gray-200 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() =>
                  setRejectMultipleRequests(!rejectMultipleRequests)
                }
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="mt-6 px-5">Please select at least 1 request</p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() =>
                  setRejectMultipleRequests(!rejectMultipleRequests)
                }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {rejectRequestsByFilters && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 max-h-screen">
            <div className="bg-gray-200 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() =>
                  setRejectRequestsByFilters(!rejectRequestsByFilters)
                }
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Bulk Reject Regularizataion Requests by Filters
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-5 overflow-y-auto p-5 my-5">
              <FilterForm
                label="Regularization Reason"
                options={regularizationReasonList}
              />
              <FilterForm
                label="Regularization Request Status"
                options={regularizationRequestStatusList}
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
            </div>
            <div className="flex justify-center space-x-4 my-5">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() =>
                  setRejectRequestsByFilters(!rejectRequestsByFilters)
                }
              >
                Cancel
              </button>
              <button className="px-4 py-1 bg-gray-400 text-white rounded hover:bg-gray-400">
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
      {bulkUploadRegularization && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 max-h-screen">
            <div className="bg-gray-200 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() =>
                  setBulUploadRegularization(!bulkUploadRegularization)
                }
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Bulk Reject Regularizataion Requests by Filters
              </h2>
            </div>
            <div className="p-5 overflow-y-auto h-96">
              <h2 className="font-medium text-lg">Instructions:</h2>
              <ul className="space-y-2 my-5">
                <li>
                  1. Download bulk regularization format from download section
                </li>
                <li>
                  2. Enter employee email as per records, Name & Emp Code Date &
                  date in DD-MM-YYYY Format
                </li>
                <li>3. Select Requested Check In and Check Out Column</li>
                <li>4. Right click and select the format cells button</li>
                <li>5. Choose the "Text" format</li>
                <li>
                  6. Enter the check-in / check-out times in AM/PM format: E.g.
                  8:05 AM or 12:30 PM
                </li>
              </ul>
              <p className="mt-2 font-medium">
                Step 1: Download Bulk Regularization Format
              </p>
              <button className="py-2 px-4 rounded text-white bg-gray-400 mt-2 flex gap-2 items-center">
                <FaDownload />
                Download
              </button>
              <p className="mt-2 font-medium">
                Step 2: Make necessary changes in upload format as per
                instructions and Upload
              </p>
              <div>
                <input
                  type="file"
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></input>
              </div>
              <p className="my-2 font-medium">
                Step 2: Make necessary changes in upload format as per
                instructions and Upload
              </p>
              <select
                name=""
                id=""
                className="border-b border-gray-500 focus:outline-none w-full"
              >
                <option value="approved">Approved</option>
                <option value="approval_workflow">
                  Go Through Approval Workflow
                </option>
              </select>
            </div>
            <div className="flex justify-center gap-2 my-5">
              <button
                onClick={() =>
                  setBulUploadRegularization(!bulkUploadRegularization)
                }
                className="font-semibold py-2 px-4 rounded border-2 text-black mt-2 flex items-center gap-2"
              >
                <IoMdClose /> Cancel
              </button>
              <button className="font-semibold py-2 px-4 rounded bg-gray-400 text-white mt-2 flex items-center gap-2">
                <FaUpload /> Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegularizationRequests;
