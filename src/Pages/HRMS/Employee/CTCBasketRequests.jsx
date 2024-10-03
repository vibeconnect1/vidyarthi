import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import EmployeeTransactionsSetting from "./EmployeeTransactionsSetting";
import { FaChevronDown} from "react-icons/fa";
import Table from "../../../ConfigurationFile/Table";
import { IoMdClose } from "react-icons/io";
import { BsEye } from "react-icons/bs";

function CTCBasketRequests() {
  const [action, setAction] = useState(false);
  const [page, setPage] = useState("pendingReport");

  const [bulkApproved, setBulkApproved] = useState(false);
  const [bulkReject, setBulkReject] = useState(false);

  const [completeDetailTable, setCompleteDetailsTable] = useState(false);
  const [pendingDetailTable, setPendingDetailsTable] = useState(false);

  const columnsPending = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Initiated By",
      selector: (row) => row.initiated_by,
      sortable: true,
    },
    {
      name: "Submitted Date",
      selector: (row) => row.submitted_date,
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
          <button onClick={() => setPendingDetailsTable(!pendingDetailTable)}>
            <BsEye size={15} />
          </button>
        </div>
      ),
    },
  ];
  const dataPending = [
    {
      id: 1,
      employee_name: "Karan",
      initiated_by: "Anil",
      submitted_date: "26-06-2024",
      status: "Pending Submission",
    },
  ];

  const columnsComplete = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Initiated By",
      selector: (row) => row.initiated_by,
      sortable: true,
    },
    {
      name: "Submitted Date",
      selector: (row) => row.submitted_date,
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
          <button onClick={() => setCompleteDetailsTable(!completeDetailTable)}>
            <BsEye size={15} />
          </button>
        </div>
      ),
    },
  ];
  const dataComplete = [
    {
      id: 1,
      employee_name: "Karan",
      initiated_by: "Rahul",
      submitted_date: "27-03-2024",
      requested_by: "Anil",
      status: "Approved",
    },
  ];

  const columnsCompleteDetails = [
    {
      name: "Component",
      selector: (row) => row.component,
      sortable: true,
    },
    {
      name: "Default Values",
      selector: (row) => row.default_values,
      sortable: true,
    },
    {
      name: "Submission by Employee",
      selector: (row) => row.submission,
      sortable: true,
    },
  ];
  const dataCompleteDetails = [
    {
      id: 1,
      component: "HRA",
      default_values: "₹ 25,000.0",
      submission: "₹ 25,000.0",
    },
  ];

  const columnsPendingDetails = [
    {
      name: "Component",
      selector: (row) => row.component,
      sortable: true,
    },
    {
      name: "Default Values",
      selector: (row) => row.default_values,
      sortable: true,
    },
    {
      name: "Submission by Employee",
      selector: (row) => row.submission,
      sortable: true,
    },
  ];
  const dataPendingDetails = [
    {
      id: 1,
      component: "HRA",
      default_values: "₹ 25,000.0",
      submission: "₹ 25,000.0",
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
                  CTC Basket Requests
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
                      className="bg-black text-white font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full"
                      onClick={() => setAction(!action)}
                    >
                      <span>Actions</span>
                      <FaChevronDown />
                    </button>
                    {action && (
                      <div className="absolute right-4 mt-1 mr-5 w-60 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        <div className="py-1 flex flex-col ">
                          <button
                            className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                            onClick={() => setBulkApproved(!bulkApproved)}
                          >
                            Bulk Approve
                          </button>
                          <button
                            className="hover:bg-gray-100 px-4 py-1 text-left cursor-pointer hover:text-red-500"
                            onClick={() => setBulkReject(!bulkReject)}
                          >
                            Bulk Reject
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div className=" flex gap-2 p-2 pb-0 border-b border-gray-400 w-full">
                  <h2
                    className={`p-1 ${
                      page === "pendingReport" &&
                      `bg-white font-medium text-blue-500 shadow-custom-all-sides`
                    } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                    onClick={() => setPage("pendingReport")}
                  >
                    Pending Report
                  </h2>
                  <h2
                    className={`p-1 ${
                      page === "completedReports" &&
                      "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                    } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                    onClick={() => setPage("completedReports")}
                  >
                    Completed Reports
                  </h2>
                </div>
              </div>
              {page === "pendingReport" && (
                <div className="my-3">
                  <Table
                    columns={columnsPending}
                    data={dataPending}
                    selectableRows={true}
                  />
                </div>
              )}
              {page === "completedReports" && (
                <div className="my-3">
                  <Table
                    columns={columnsComplete}
                    data={dataComplete}
                    selectableRows={true}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {bulkApproved && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-1/3 h-72 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkApproved(!bulkApproved)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Are you sure?
              </h2>
            </div>
            <p className="my-5 px-5">
              Are you sure you would like to approve the selected requests?
            </p>
            <div className="px-5 py-2">
              <textarea
                className="border-b border-gray-500 focus:outline-none w-full"
                rows="2"
                placeholder="Approver's comment"
              />
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setBulkApproved(!bulkApproved)}
              >
                Cancel
              </button>
              <button className="px-4 py-1 bg-gray-500  rounded hover:bg-gray-600 text-white">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {bulkReject && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-1/3 h-72 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkReject(!bulkReject)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Are you sure?
              </h2>
            </div>
            <p className="my-5 px-5">
              Are you sure you would like to reject the selected requests?
            </p>
            <div className="px-5 py-2">
              <textarea
                className="border-b border-gray-500 focus:outline-none w-full"
                rows="2"
                placeholder="Approver's comment"
              />
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setBulkReject(!bulkReject)}
              >
                Cancel
              </button>
              <button className="px-4 py-1 bg-gray-500  rounded hover:bg-gray-600 text-white">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {completeDetailTable && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 h-3/4 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setCompleteDetailsTable(!completeDetailTable)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
              CTC Basket Request
              </h2>
            </div>
            <div className="grid grid-cols-2 px-5 py-3">
              <p className="text-gray-950">Effective Date</p>
              <p className="text-gray-500 my-3">31-05-2024</p>
              <p className="text-gray-950">Frequency</p>
              <p className="text-gray-500 my-3">Monthly</p>
            </div>
            <div className="my-5">
              <Table
                columns={columnsCompleteDetails}
                data={dataCompleteDetails}
              />
            </div>
            {/* <div className="flex justify-center space-x-4 mt-14">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setCompleteDetailsTable(!completeDetailTable)}
              >
                Cancel
              </button>
            </div> */}
          </div>
        </div>
      )}
      {pendingDetailTable && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 h-3/4 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setPendingDetailsTable(!pendingDetailTable)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
              CTC Basket Request
              </h2>
            </div>
            <div className="grid grid-cols-2 px-5 py-3">
              <p className="text-gray-950">Effective Date</p>
              <p className="text-gray-500 my-3">31-05-2024</p>
              <p className="text-gray-950">Frequency</p>
              <p className="text-gray-500 my-3">Monthly</p>
            </div>
            <div className="my-5">
              <Table
                columns={columnsPendingDetails}
                data={dataPendingDetails}
              />
            </div>
            {/* <div className="flex justify-center space-x-4 mt-14">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setPendingDetailsTable(!pendingDetailTable)}
              >
                Cancel
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default CTCBasketRequests;
