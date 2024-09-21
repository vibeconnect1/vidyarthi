import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Collapsible from "react-collapsible";
import CustomTrigger from "../../ConfigurationFile/CustomTrigger";
import { FaTrash } from "react-icons/fa";
import Table from "../../ConfigurationFile/Table";
const PendingTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showBulkModal, setshowBulkModal] = useState(false);
  const [showApproveModal, setshowApproveModal] = useState(false);
  const [showApproveFilterModal, setshowApproveFilterModal] = useState(false);
  const [showRejectModal, setshowRejectModal] = useState(false);
  const [showRejectFilterModal, setshowRejectFilterModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);
  const [modalData, setModalData] = useState({
    regularizationReason: "",
    regularizationRequestStatus: "",
    startDate: "",
    endDate: "",
    employeeDepartment: "",
  });
  const handleApproveMultiple = () => {
    // Logic to approve multiple requests
    console.log("Approve multiple requests");
    setShowActionsDropdown(false);
  };

  const handleRejectMultiple = () => {
    // Logic to reject multiple requests
    console.log("Reject multiple requests");
    setShowActionsDropdown(false);
  };
  const handleEditClick = (row) => {
    setModalData({
      regularizationReason: row.reason || "",
      regularizationRequestStatus: row.status || "",
      startDate: "",
      endDate: "",
      employeeDepartment: row.department || "",
      ...row,
    });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const columns = [
    {
      name: <input type="checkbox" />,
      selector: (row) => row.check,
      sortable: true,
    },

    {
      name: "Employee Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.Date,
      sortable: true,
    },
    {
      name: "Requested Timings",
      selector: (row) => row.time,
      sortable: true,
    },
    {
      name: "Actual Timings",
      selector: (row) => row.atime,
      sortable: true,
    },
    {
      name: "Reason",
      selector: (row) => row.reason,
      sortable: true,
    },
    {
      name: "Comment",
      selector: (row) => row.Comment,
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
          <button onClick={() => handleEditClick(row)}>
            <BiEdit size={15} />
          </button>
          <button onClick={() => setShowModalDelete(true)}>
            <FaTrash size={15} />
          </button>
        </div>
      ),
    },
    {
      name: "Approval",
      selector: (row) => (
        <div className="flex justify-center gap-2">
          <button className="text-green-400 font-medium hover:bg-green-400 hover:text-white transition-all duration-200 p-1 rounded-full">
            <TiTick size={20} />
          </button>
          <button className="text-red-400 font-medium hover:bg-red-400 hover:text-white transition-all duration-200 p-1 rounded-full">
            <IoClose size={20} />
          </button>
        </div>
      ),
      sortable: true,
    },
  ];

  const data = [
    {
      check: <input type="checkbox" />,
      Name: "Mittu Panda",
      Date: "1/2/2023",
      time: "3:00pm",
      atime: "3:00pm",
      reason: "Miss punch",
      Comment: "miss punch in",
      status: "pending",
    },
  ];

  return (
    <section className="flex">
      <div className="w-full flex m-3 flex-col overflow-hidden">
        <div className="flex justify-end gap-2 my-5">
          <input
            type="text"
            placeholder="Search by Employee name"
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
          />
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={() => setShowFilterModal(true)}
          >
            Filter
          </button>
          <button
            onClick={() => setShowActionsDropdown(!showActionsDropdown)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Actions
          </button>
          {showActionsDropdown && (
            <div className="absolute top-35 right-2 mt-10 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() => setshowApproveModal(!showApproveModal)}
              >
                Approve multiple requests
              </button>
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() => setshowRejectModal(!showRejectModal)}
              >
                Reject multiple requests
              </button>
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() =>
                  setshowApproveFilterModal(!showApproveFilterModal)
                }
              >
                Approve multiple requests by filters
              </button>
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() => setshowRejectFilterModal(!showRejectFilterModal)}
              >
                Reject multiple requests by filters
              </button>
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() => setshowBulkModal(!showBulkModal)}
              >
                Bulk Upload Regularization
              </button>
            </div>
          )}
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-96">
            <h2 className="text-lg font-bold mb-4">
              Edit Regularization Request
            </h2>
            <div className="grid md:grid-cols-1 gap-5 mt-5">
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  name="regularizationReason"
                  placeholder="Regularization Reason"
                  value={modalData.regularizationReason}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  name="regularizationRequestStatus"
                  placeholder="Regularization Request Status"
                  value={modalData.regularizationRequestStatus}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  name="startDate"
                  placeholder="Enter Start Date"
                  value={modalData.startDate}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  name="endDate"
                  placeholder="Enter End Date"
                  value={modalData.endDate}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  name="employeeDepartment"
                  placeholder="Enter Employee Department"
                  value={modalData.employeeDepartment}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showModalDelete && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-96">
            <h2 className="text-lg font-bold mb-4">Are you sure?</h2>
            <p>Do you really want to delete this Regularize Request?</p>
            <div className="grid md:grid-cols-1 gap-5 mt-5">
              {/* <div className="grid gap-2 items-center w-full">
                <label htmlFor="regularizationReason">Approver's comment</label>
                <textarea type="text" name="regularizationReason" value={modalData.regularizationReason} onChange={handleChange} className="border border-gray-400 p-2 rounded-md"/>
              </div> */}
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setShowModalDelete(false)}
            >
              Cancel
            </button>
            <button
              className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setShowModalDelete(false)}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
      {showApproveModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-96">
            <h2 className="text-lg font-bold mb-4">Are you sure?</h2>
            <p>Do you really want to approve selected records?</p>
            <div className="grid md:grid-cols-1 gap-5 mt-5">
              <div className="grid gap-2 items-center w-full">
                <textarea
                  type="text"
                  name="regularizationReason"
                  placeholder="Approver's comment"
                  value={modalData.regularizationReason}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setshowApproveModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showRejectModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-96">
            <h2 className="text-lg font-bold mb-4">Are you sure?</h2>
            <p>Do you really want to reject selected records?</p>
            <div className="grid md:grid-cols-1 gap-5 mt-5">
              <div className="grid gap-2 items-center w-full">
                <textarea
                  type="text"
                  name="regularizationReason"
                  placeholder="Approver's comment"
                  value={modalData.regularizationReason}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setshowRejectModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showFilterModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Filter Requests</h2>
            <div className="grid md:grid-cols-2 gap-5 space-y-3 mt-5">
              <div className="grid gap-2 items-center w-full  mt-3">
                <select
                  name="filterReason"
                  value={modalData.regularizationReason}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option>Regularization Reason</option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full">
                <select
                  name="filterStatus"
                  value={modalData.regularizationRequestStatus}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option>Regularization Request Status</option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  name="filterStartDate"
                  placeholder="Start Date"
                  value={modalData.startDate}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  name="filterEndDate"
                  placeholder="End Date"
                  value={modalData.endDate}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <select
                  type="text"
                  name="filterDepartment"
                  value={modalData.employeeDepartment}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option>Employee Department</option>
                </select>
              </div>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setShowFilterModal(false)}
            >
              Close
            </button>
            &nbsp;
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setShowFilterModal(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {showBulkModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">
              Bulk Upload Regularization
            </h2>
            <Collapsible
              readOnly
              trigger={
                <CustomTrigger isOpen={isOpen}>Instructions:</CustomTrigger>
              }
              onOpen={() => setIsOpen(true)}
              onClose={() => setIsOpen(false)}
              className="bg-gray-100 my-4 p-2 rounded-md font-bold "
            >
              <div className="grid grid-cols-1 bg-gray-300 p-2 rounded-md gap-1">
                <p>
                  1. Download bulk regularization format from download section
                </p>
                <p>
                  2. Enter employee email as per records, Name & Emp Code Date &
                  date in DD-MM-YYYY Format
                </p>
                <p>3. Select Requested Check In and Check Out Column</p>
                <p>4. Right click and select the format cells button</p>
                <p>5. Choose the "Text" format</p>
                <p>
                  6. Enter the check-in / check-out times in AM/PM format: E.g.
                  8:05 AM or 12:30 PM
                </p>
              </div>
            </Collapsible>
            <div className="grid md:grid-cols-1 gap-5 mt-5">
              <div className="grid gap-2 items-center w-full">
                <label htmlFor="filterReason">
                  Step 1: Download Bulk Regularization Format
                </label>
                <button className="bg-blue-500 w-48 text-white p-2 rounded-md">
                  Download
                </button>
              </div>
              {/* <div className="grid gap-2 items-center w-full">
                <label htmlFor="filterStatus">Regularization Request Status</label>
                <select  name="filterStatus" value={modalData.regularizationRequestStatus} onChange={handleChange} className="border border-gray-400 p-2 rounded-md"/>
              </div> */}
              <div className="grid gap-2 items-center w-full">
                <label htmlFor="filterStartDate" className="mb-3">
                  Step 2: Make necessary changes in upload format as per
                  instructions and Upload *
                </label>
                <input
                  type="file"
                  name="filterStartDate"
                  value={modalData.startDate}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <label htmlFor="filterEndDate" className="mb-3">
                  Step 3: Select Regularizataion Status Applicable *
                </label>
                <select
                  name="filterEndDate"
                  value={modalData.endDate}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option>Select Regularizataion Status Applicable</option>
                </select>
              </div>
              {/* <div className="grid gap-2 items-center w-full">
                <label htmlFor="filterDepartment">Employee Department</label>
                <select type="text" name="filterDepartment" value={modalData.employeeDepartment} onChange={handleChange} className="border border-gray-400 p-2 rounded-md"/>
              </div> */}
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setshowBulkModal(false)}
            >
              Close
            </button>
            &nbsp;
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setshowBulkModal(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {showApproveFilterModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">
              Bulk Approve Regularizataion Requests by Filters
            </h2>
            <div className="grid md:grid-cols-2 gap-5 space-y-3 mt-5">
              <div className="grid gap-2 items-center w-full  mt-3">
                <select
                  type="text"
                  name="filterReason"
                  value={modalData.regularizationReason}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                >
                    <option>Regularization Reason</option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full">
                <select
                  type="text"
                  name="filterStatus"
                  value={modalData.regularizationRequestStatus}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                >
                    <option>Regularization Request Status</option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  name="filterStartDate"
                  value={modalData.startDate}
                  onChange={handleChange}
                  placeholder="Start Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  name="filterEndDate"
                  value={modalData.endDate}
                  onChange={handleChange}
                  placeholder="End Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <select
                  type="text"
                  name="filterDepartment"
                  value={modalData.employeeDepartment}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                >
                    <option>Employee Department</option>
                </select>
              </div>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setshowApproveFilterModal(false)}
            >
              Close
            </button>
            &nbsp;
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setshowApproveFilterModal(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}
      {showRejectFilterModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">
              Bulk Reject Regularizataion Requests by Filters
            </h2>
            <div className="grid md:grid-cols-2 gap-5 space-y-3 mt-5">
              <div className="grid gap-2 items-center w-full  mt-3">
                <select
                  type="text"
                  name="filterReason"
                  value={modalData.regularizationReason}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                >
                    <option>Regularization Reason</option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full">
                <select
                  type="text"
                  name="filterStatus"
                  value={modalData.regularizationRequestStatus}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                >
                    <option>Regularization Request Status</option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  name="filterStartDate"
                  value={modalData.startDate}
                  onChange={handleChange}
                  placeholder="Start Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  name="filterEndDate"
                  value={modalData.endDate}
                  onChange={handleChange}
                  placeholder="End Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <select
                  type="text"
                  name="filterDepartment"
                  value={modalData.employeeDepartment}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                >
                    <option>Employee Department</option>
                </select>
              </div>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setshowRejectFilterModal(false)}
            >
              Close
            </button>
            &nbsp;
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setshowRejectFilterModal(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PendingTable;
