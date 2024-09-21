import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import AttendanceDetailsList from "./AttendanceDetailsList";
import { BiEdit } from "react-icons/bi";
import Table from "../../ConfigurationFile/Table";
import FileInput from "../../ConfigurationFile/FileInput";

const AttendanceTemplateAssign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [isModalOpen6, setIsModalOpen6] = useState(false);

  const [attendanceTemplate, setAttendanceTemplate] = useState("");
  const [primaryApprover, setPrimaryApprover] = useState("");
  const [effectiveFrom, setEffectiveFrom] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const columns = [
    {
      name: "view",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <button onClick={handleAddClick}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
    {
      name: "Employee Name",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Current Attendance Template",
      selector: (row) => row.Label,
      sortable: true,
    },
    {
      name: "Biometric Code / Device ID",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "Supervisors",
      selector: (row) => row.State,
      sortable: true,
    },
  ];

  const data = [
    {
      Label: "Attendance Policy	",
      Location: "Mittu Panda",
      City: "--",
      State: "Kunal Sah",
      Country: "India",
    },
  ];

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    console.log("Attendance Template:", attendanceTemplate);
    console.log("Primary Approver:", primaryApprover);
    console.log("Effective From:", effectiveFrom);
    setIsModalOpen(false);
  };

  return (
    <section className="flex ml-20">
      <AttendanceDetailsList />
      <div className="w-full flex m-3 flex-col overflow-hidden mr-2">
        <div className="flex justify-end gap-2 my-5 mr-2">
          <input
            type="text"
            placeholder="Search by name"
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
          />
          <button
            onClick={handleAddClick}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add
          </button>
          <button
            onClick={() => setIsModalOpen1(true)}
            className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
          >
            Filter
          </button>
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            >
              Actions
              <svg
                className="-mr-1 mt-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707 1.707L6.414 9.586a1 1 0 01-1.414 0L.293 5.707A1 1 0 011.707 4.293L6 8.586 9.293 5.293A1 1 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
      {isOpen && (
        <div className="origin-top-right z-30 absolute right-0 mt-20 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <button onClick={() => setIsModalOpen2(true)}>
                Assign Attendance Template
              </button>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              {/* Upload Statutory Settings */}
              <button onClick={() => setIsModalOpen3(true)}>
                Assign Supervisior
              </button>
            </a>

            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              {/* Bulk Update Employee Data */}
              <button onClick={() => setIsModalOpen4(true)}>
                Delete Template Assignment{" "}
              </button>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              {/* Bulk Add New Employees */}
              <button onClick={() => setIsModalOpen5(true)}>
                Upload attendance templates
              </button>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <button onClick={() => setIsModalOpen6(true)}>
                Upload attendance supervisiors
              </button>
            </a>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              Allocate Attendance Template
            </h2>
            <div className="mb-4">
              <label className="block mb-1">Select Attendance Template *</label>
              <select
                value={attendanceTemplate}
                onChange={(e) => setAttendanceTemplate(e.target.value)}
                className="border border-gray-400 rounded-lg p-2 w-full"
              >
                <option value="">Select</option>
                <option value="Template1">Template1</option>
                <option value="Template2">Template2</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Select Primary Approver *</label>
              <select
                value={primaryApprover}
                onChange={(e) => setPrimaryApprover(e.target.value)}
                className="border border-gray-400 rounded-lg p-2 w-full"
              >
                <option value="">Select</option>
                <option value="Approver1">Approver1</option>
                <option value="Approver2">Approver2</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Effective From *</label>
              <input
                type="date"
                value={effectiveFrom}
                onChange={(e) => setEffectiveFrom(e.target.value)}
                className="border border-gray-400 rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Biometric code *</label>
              <input
                type="text"
                value={effectiveFrom}
                onChange={(e) => setEffectiveFrom(e.target.value)}
                className="border border-gray-400 rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Device ID *</label>
              <input
                type="text"
                value={effectiveFrom}
                onChange={(e) => setEffectiveFrom(e.target.value)}
                className="border border-gray-400 rounded-lg p-2 w-full"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleModalClose}
                className="border-2 border-gray-400 rounded-lg p-2 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white rounded-lg p-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen1 && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
          <div className="bg-white p-5 rounded-md shadow-md w-2/3">
            {/* <h2 className="text-xl font-semibold mb-4">Add Department</h2> */}
            <div className="grid md:grid-cols-3 gap-5 mt-5">
              <div className="grid gap-2 items-center w-full">
                <label
                  htmlFor="departmentName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Attendance Template
                </label>
                <select
                  type="text"
                  id="departmentName"
                  className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                  placeholder="Enter Branch Location"
                >
                  <option value="">Attendance policy</option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full ">
                <label
                  htmlFor="headOfDepartment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Supervisor
                </label>
                <select
                  id="headOfDepartment"
                  // value={headOfDepartment}
                  // onChange={(e) => setHeadOfDepartment(e.target.value)}
                  className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                >
                  <option value="" disabled>
                    Mittu Panda
                  </option>
                  <option value="" disabled>
                    Nikhil Nayak
                  </option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full ">
                <label
                  htmlFor="headOfDepartment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Branch Location
                </label>
                <select
                  id="headOfDepartment"
                  className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                >
                  <option value="" disabled>
                    Mumbai
                  </option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full ">
                <label
                  htmlFor="headOfDepartment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Joining Month
                </label>
                <select
                  id="headOfDepartment"
                  className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                >
                  <option value="" disabled>
                    January
                  </option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full ">
                <label
                  htmlFor="headOfDepartment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Employee Status
                </label>
                <select
                  id="headOfDepartment"
                  // value={headOfDepartment}
                  // onChange={(e) => setHeadOfDepartment(e.target.value)}
                  className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                >
                  <option value="" disabled>
                    Active
                  </option>
                  <option value="" disabled>
                    Hold
                  </option>
                  <option value="" disabled>
                    Incomplete
                  </option>
                  <option value="" disabled>
                    Onhold
                  </option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full ">
                <label
                  htmlFor="headOfDepartment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Employee Department
                </label>
                <select
                  id="headOfDepartment"
                  // value={headOfDepartment}
                  // onChange={(e) => setHeadOfDepartment(e.target.value)}
                  className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                >
                  <option value="" disabled>
                    HR
                  </option>
                </select>
              </div>
            </div>
            <div className="mt-2 flex justify-end">
              <button
                onClick={() => setIsModalOpen1(false)}
                className="bg-gray-300 text-gray-700 p-2 rounded-md mr-2"
              >
                Clear
              </button>
              <button
                // onClick={handleAddDepartment}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen2 && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
          <div className="bg-white p-5 rounded-md shadow-md w-2/3">
            <h2 className="text-xl font-semibold mb-4">
              Bulk Assign Attendance Templates To Employees
            </h2>
            <div className="grid md:grid-cols-1 gap-5 mt-5">
              <div className="grid gap-2 items-center w-full">
                <label
                  htmlFor="departmentName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Template *
                </label>
                <select
                  type="text"
                  id="departmentName"
                  className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                  placeholder="Enter Branch Location"
                >
                  <option value="">Attendance Policy</option>
                  <option value="">Work from home</option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full ">
                <label
                  htmlFor="headOfDepartment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Add Geo Location *
                </label>
                <select
                  id="headOfDepartment"
                  // value={headOfDepartment}
                  // onChange={(e) => setHeadOfDepartment(e.target.value)}
                  className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                >
                  <option value="" disabled>
                    BPC-Goregaon
                  </option>
                </select>
              </div>
            </div>
            <div className="mt-2 flex justify-end">
              <button
                onClick={() => setIsModalOpen2(false)}
                className="bg-gray-300 text-gray-700 p-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                // onClick={handleAddDepartment}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen3 && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
          <div className="bg-white p-5 rounded-md shadow-md w-2/3">
            <h2 className="text-xl font-semibold mb-4">
              Bulk Assign Attendance Supervisor's To Employees
            </h2>
            <div className="grid md:grid-cols-1 gap-5 mt-5">
              <div className="grid gap-2 items-center w-full">
                <label
                  htmlFor="departmentName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Primary Approver *
                </label>
                <select
                  type="text"
                  id="departmentName"
                  className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                  placeholder="Enter Branch Location"
                >
                  <option value="">Reporting Supervivior</option>
                  <option value="">HR</option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full ">
                <label
                  htmlFor="headOfDepartment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Secondary Approver *
                </label>
                <select
                  id="headOfDepartment"
                  // value={headOfDepartment}
                  // onChange={(e) => setHeadOfDepartment(e.target.value)}
                  className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                >
                  <option value="" disabled>
                    Mittu Panda
                  </option>
                </select>
              </div>
            </div>
            <div className="mt-2 flex justify-end">
              <button
                onClick={() => setIsModalOpen3(false)}
                className="bg-gray-300 text-gray-700 p-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                // onClick={handleAddDepartment}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen4 && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
          <div className="bg-white p-5 rounded-md shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">Warning</h2>
            <h2 className="text-xl font-semibold mb-4">
              Are you sure you want to delete these Shift Templates?
            </h2>
            <div className="mt-2 flex justify-end">
              <button
                onClick={() => setIsModalOpen4(false)}
                className="bg-gray-300 text-gray-700 p-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                // onClick={handleAddDepartment}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen5 && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
          <div className="bg-white p-5 rounded-md shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">
              Bulk Assign Attendance Templates To Employees
            </h2>
            <h2 className=" font-semibold mb-4">
              Step 1: Download the excel template which contains details of all
              Employees who are employed as of today
            </h2>
            <p className="mt-2 ">
              Includes all your Employees with their available details.
            </p>
            <button>Download</button>
            <h2 className=" font-semibold mb-4">
              Step 2: After making the necessary changes, please upload the
              excel template *
            </h2>
            <p className="mt-2">
              Note: To assign a attendance template, simply enter "Yes" in that
              specific column for that specific employee
            </p>
            <FileInput />
            <div className="mt-2 flex justify-end">
              <button
                onClick={() => setIsModalOpen5(false)}
                className="bg-gray-300 text-gray-700 p-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                // onClick={handleAddDepartment}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen6 && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
          <div className="bg-white p-5 rounded-md shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">Import Supervisor</h2>
            <h2 className=" font-semibold mb-4">
              Step 1: Download employee supervisor global format
            </h2>
            <p className="mt-2 ">
              Includes all your Employees with their available details..
            </p>
            <button>Download</button>
            <h2 className=" font-semibold mb-4">
              Step 2: Make necessary changes in the downloaded file upload **
            </h2>
            <p className="mt-2">
              For Reporting Supervisor use initials RS and Head of Department
              use initial HOD
            </p>
            <FileInput />
            <div className="mt-2 flex justify-end">
              <button
                onClick={() => setIsModalOpen6(false)}
                className="bg-gray-300 text-gray-700 p-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                // onClick={handleAddDepartment}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AttendanceTemplateAssign;
