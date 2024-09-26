import React, { useEffect, useState } from "react";
import { FaChevronDown, FaDownload, FaTrash, FaUpload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";
import AdminHRMS from "../AdminHRMS";
import { IoMdClose } from "react-icons/io";
import Switch from "../../../ConfigurationFile/Switch";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
function EmployeeDirectoryPage() {
  const [filterModal, setFilterModal] = useState(false);
  const [isAction, setIsAction] = useState(false);
  const [uploadInvestments, setUploadInvestments] = useState(false);
  const [employeeStatutory, setEmployeeStatutory] = useState(false);
  const [uploadDocuments, setUploadDocuments] = useState(false);
  const [bulkChange, setBulkChange] = useState(false);
  const [bulkUpdate, setBulkUpdate] = useState(false);
  const [bulkAddNew, setBulkAddNew] = useState(false);
  const [bulkAddNewSelf, setBulkAddNewSelf] = useState(false);
  const [bulkAddEmployee, setBulkAddEmployee] = useState(false);
  const [employeePayment, setEmployeePayment] = useState(false);
  const [employeeContract, setEmployeeContract] = useState(false);
  const [employeePerqs, setEmployeePerqs] = useState(false);
  const [terminateEmployees, setTerminateEmployees] = useState(false);
  const [inviteEmployee, setInviteEmployee] = useState(false);
  const [isSwitch1, setIsSwitch1] = useState(false);
  const [isSwitch2, setIsSwitch2] = useState(false);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const employees = [
    {
      id: 1,
      name: "Ankit Nima",
      employeeID: "135162",
      doj: "05-03-2005",
      position: "Marketing Head",
      status: "Active",
      initials: "AN",
    },
    {
      id: 2,
      name: "Bharat Rohra",
      employeeID: "XWM04",
      doj: "01-01-2022",
      position: "Manager",
      status: "Active",
      initials: "BR",
    },
    {
      id: 3,
      name: "Ankit Gaurav",
      employeeID: "1010",
      doj: "19-06-2019",
      position: "Assistant Sales Manager",
      status: "Active",
      initials: "AG",
    },
    {
      id: 4,
      name: "Dibbendu Saha",
      employeeID: "DS101",
      doj: "01-05-2020",
      position: "Developer",
      status: "Active",
      initials: "DS",
    },
  ];

  // Sort employees by name
  const sortedEmployees = employees.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const [selectedLetter, setSelectedLetter] = useState(null);

  const getColorClass = (emp) => {
    switch (emp.status) {
      case "Active":
        return "bg-green-500";
      case "Inactive":
        return "bg-red-500";
      case "Pending":
        return "bg-yellow-500";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col ">
        <div className="">
          <header className="text-black bg-white  py-4 ml-20 border border-gray-400">
            <h1 className="text-3xl pl-5 font-bold">Employee Directory</h1>
            <p className="pl-5">
              Employee personal details are noted under this section.
            </p>
            <div className="md:flex justify-end gap-2 mb-1 mx-5 my-5 space-y-2">
              <div>
                <input
                  type="text"
                  placeholder="Search by Name / Code"
                  className="border border-gray-500 p-2 text-black rounded-xl w-full  md:w-96 my-2"
                />
              </div>
              <div>
                <button
                  onClick={() => setFilterModal(true)}
                  className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded w-full flex justify-center items-center"
                >
                  Filter
                </button>
              </div>
              <div>
                <button
                  className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full"
                  onClick={() => setIsAction(!isAction)}
                >
                  <span>Actions</span>
                  <FaChevronDown />
                </button>
                {isAction && (
                  <div className="absolute mt-1 mr-5 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <ul className="py-1 ">
                      <li
                        className="hover:bg-gray-100 px-4 py-1 cursor-pointer hover:text-red-500"
                        onClick={() => setUploadInvestments(!uploadInvestments)}
                      >
                        Upload Investments
                      </li>
                      <li
                        className="hover:bg-gray-100 px-4 py-1 cursor-pointer hover:text-red-500"
                        onClick={() => setEmployeeStatutory(!employeeStatutory)}
                      >
                        Upload Employee Statutory Setting
                      </li>
                      <li
                        className="hover:bg-gray-100 px-4 py-1 cursor-pointer hover:text-red-500"
                        onClick={() => setUploadDocuments(!uploadDocuments)}
                      >
                        Upload Documents
                      </li>
                      <li
                        className="hover:bg-gray-100 px-4 py-1 cursor-pointer hover:text-red-500"
                        onClick={() => setBulkChange(!bulkChange)}
                      >
                        Bulk Change Settlement Month
                      </li>
                      <li
                        className="hover:bg-gray-100 px-4 py-1 cursor-pointer hover:text-red-500"
                        onClick={() => setBulkUpdate(!bulkUpdate)}
                      >
                        Bulk Update Employee Data
                      </li>
                      <li
                        className="hover:bg-gray-100 px-4 py-1 cursor-pointer hover:text-red-500"
                        onClick={() => setBulkAddNew(!bulkAddNew)}
                      >
                        Bulk Add New Employees
                      </li>
                      <li
                        className="hover:bg-gray-100 px-4 py-1 cursor-pointer hover:text-red-500"
                        onClick={() => setBulkAddNewSelf(!bulkAddNewSelf)}
                      >
                        Bulk Add New Self Onboard Employees
                      </li>
                      <li
                        className="hover:bg-gray-100 px-4 py-1 cursor-pointer hover:text-red-500"
                        onClick={() => setBulkAddEmployee(!bulkAddEmployee)}
                      >
                        Bulk Add Employee Multi-Row Data
                      </li>
                      <li
                        className="hover:bg-gray-100 px-4 py-1 cursor-pointer hover:text-red-500"
                        onClick={() => setEmployeePayment(!employeePayment)}
                      >
                        Bulk Employee Payment Information
                      </li>
                      <li
                        className="hover:bg-gray-100 px-4 py-1 cursor-pointer hover:text-red-500"
                        onClick={() => setEmployeeContract(!employeeContract)}
                      >
                        Bulk Add Employees Contract
                      </li>
                      <li
                        className="hover:bg-gray-100 px-4 py-1 cursor-pointer hover:text-red-500"
                        onClick={() => setEmployeePerqs(!employeePerqs)}
                      >
                        Upload Perqs
                      </li>
                      <li
                        className="hover:bg-gray-100 px-4 py-1 cursor-pointer hover:text-red-500"
                        onClick={() =>
                          setTerminateEmployees(!terminateEmployees)
                        }
                      >
                        Bulk Terminate
                      </li>
                      <li
                        className="hover:bg-gray-100 px-4 py-1 cursor-pointer hover:text-red-500"
                        onClick={() => setInviteEmployee(!inviteEmployee)}
                      >
                        Invite Employee
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div>
                <Link
                  to={"/hrms/alerts/add-employee"}
                  className="border-2 font-semibold bg-black duration-150 transition-all border-white p-2 rounded-md text-white cursor-pointer text-center flex items-center  gap-2 justify-center"
                >
                  <PiPlusCircle size={20} />
                  <span>Add Employee</span>
                </Link>
              </div>
            </div>
          </header>
          {filterModal && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-1/3 rounded-lg shadow-lg p-6">
                <div className="flex justify-end mb-8">
                  <button
                    className=""
                    onClick={() => setFilterModal(!filterModal)}
                  >
                    <IoMdClose size={20} />
                  </button>
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
                    <option value="">Select Employee Status</option>
                    <option value="option1">Select All</option>
                    <option value="option2">Incomplete</option>
                    <option value="option3">Active</option>
                    <option value="option4">Onhold</option>
                    <option value="option4">Serving Notice Period</option>
                    <option value="option4">Separated</option>
                    <option value="option4">Unactivated</option>
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
          {uploadInvestments && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-3/5 rounded-lg shadow-lg p-6">
                <div className="flex justify-end">
                  <button
                    className=""
                    onClick={() => setUploadInvestments(!uploadInvestments)}
                  >
                    <IoMdClose size={20} />
                  </button>
                </div>
                <h2 className="text-xl font-medium flex justify-center">
                  Upload Employee Investment Declarations for 2024-2025
                </h2>
                <div className="my-10">
                  <p className="font-bold">Step 1: Select type of upload *</p>
                  <p className="my-2">
                    Declared Investment Declarations - Upload all the Investment
                    Details declared by your employees.
                  </p>
                  <p className="my-2">
                    Verified Investment Declarations - Upload all the employee
                    Investment Details that have been physically verified.
                  </p>
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none my-3 w-full"
                  >
                    <option value="">Select type of Upload</option>
                    <option value="">Declared Investment Declarations</option>
                    <option value="">Verified Investment Declarations</option>
                  </select>
                  <p className="mt-2 font-bold">
                    Step 2: Download the investments global format
                  </p>
                  <p>Include the investment declarations of all employees.</p>
                  <button className="font-semibold py-2 px-4 rounded text-white bg-gray-500 mt-2 flex gap-2 items-center">
                    <FaDownload />
                    Download
                  </button>
                  <p className="font-bold mb-2 mt-2">
                    Step 3: Make the necessary changes in the downloaded format
                    template and upload *
                  </p>
                  <div>
                    <input
                      type="file"
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    ></input>
                  </div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setUploadInvestments(!uploadInvestments)}
                      className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                    >
                      <IoMdClose /> Cancel
                    </button>
                    <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                      <FaUpload /> Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {employeeStatutory && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-2/5 rounded-lg shadow-lg p-6">
                <div className="flex justify-end">
                  <button
                    className=""
                    onClick={() => setEmployeeStatutory(!employeeStatutory)}
                  >
                    <IoMdClose size={20} />
                  </button>
                </div>
                <h2 className="text-xl font-medium flex justify-center">
                  Upload Employee Settlement Month Change
                </h2>
                <div className="mt-10">
                  <p className="mt-2 font-bold">
                    Step 1: Download employee information global format
                  </p>
                  <button className="font-semibold py-2 px-4 rounded text-white bg-gray-500 mt-2 flex gap-2 items-center">
                    <FaDownload />
                    Download
                  </button>
                  <p className="font-bold mb-2 mt-2">
                    Step 2: Make necessary changes in the downloaded file and
                    upload *
                  </p>
                  <div>
                    <input
                      type="file"
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    ></input>
                  </div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setEmployeeStatutory(!employeeStatutory)}
                      className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                    >
                      <IoMdClose /> Cancel
                    </button>
                    <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                      <FaUpload /> Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {uploadDocuments && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-2/5 rounded-lg shadow-lg p-6">
                <div className="flex justify-end">
                  <button
                    className=""
                    onClick={() => setUploadDocuments(!uploadDocuments)}
                  >
                    <IoMdClose size={20} />
                  </button>
                </div>
                <h2 className="text-xl font-medium flex justify-center">
                  Bulk Upload Employee Documents
                </h2>
                <div className="mt-10">
                  <div>
                    <select
                      name=""
                      id=""
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    >
                      <option value="">Select Document Type</option>
                      <option value="">Academic Certificate</option>
                      <option value="">Driving License</option>
                      <option value="">Identity Proof</option>
                      <option value="">Resume</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name=""
                      id=""
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    >
                      <option value=""> Document name format </option>
                      <option value="">PAN</option>
                      <option value="">Aadhar</option>
                      <option value="">Empcode</option>
                      <option value="">Email</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="file"
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    ></input>
                    <p>Acceptable format: .zip</p>
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Notify Employees by Email</label>
                    <div className="flex gap-4">
                      <div className="flex gap-2">
                        <input name="group1" type="radio" />
                        <label htmlFor="">Yes</label>
                      </div>
                      <div className="flex gap-2">
                        <input name="group1" type="radio" />
                        <label htmlFor="">No</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setUploadDocuments(!uploadDocuments)}
                      className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                    >
                      <IoMdClose /> Cancel
                    </button>
                    <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                      <FaUpload /> Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {bulkChange && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-2/5 rounded-lg shadow-lg p-6">
                <div className="flex justify-end">
                  <button
                    className=""
                    onClick={() => setBulkChange(!bulkChange)}
                  >
                    <IoMdClose size={20} />
                  </button>
                </div>
                <h2 className="text-xl font-medium flex justify-center">
                  Bulk Upload Employee Documents
                </h2>
                <div className="mt-10">
                  <p className="mt-2 font-bold">
                    Step 1: Download employee settlement month change global
                    format
                  </p>
                  <button className="font-semibold py-2 px-4 rounded text-white bg-gray-500 mt-2 flex gap-2 items-center">
                    <FaDownload />
                    Download
                  </button>
                  <p className="font-bold mb-2 mt-2">
                    Step 2: Make necessary changes in the downloaded file and
                    upload *
                  </p>
                  <div>
                    <input
                      type="file"
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    ></input>
                  </div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setEmployeeStatutory(!employeeStatutory)}
                      className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                    >
                      <IoMdClose /> Cancel
                    </button>
                    <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                      <FaUpload /> Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {bulkUpdate && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-2/5 rounded-lg shadow-lg p-6">
                <div className="flex justify-end">
                  <button
                    className=""
                    onClick={() => setBulkUpdate(!bulkUpdate)}
                  >
                    <IoMdClose size={20} />
                  </button>
                </div>
                <h2 className="text-xl font-medium flex justify-center">
                  Upload Employee Information
                </h2>
                <div className="mt-10">
                  <div>
                    <select
                      name=""
                      id=""
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    >
                      <option value="">
                        Select what data you want to update
                      </option>
                      <option value="">Select All</option>
                      <option value="">All Data</option>
                      <option value="">Basic Info</option>
                      <option value="">Family Info</option>
                      <option value="">Address Info</option>
                      <option value="">Bank Info</option>
                    </select>
                  </div>
                  <p className="mt-2 font-bold">
                    Step 2: Download employee information global format Includes
                    all your Employees with their available details. format
                  </p>
                  <button className="font-semibold py-2 px-4 rounded text-white bg-gray-500 mt-2 flex gap-2 items-center">
                    <FaDownload />
                    Download
                  </button>
                  <p className="font-bold mb-2 mt-2">
                    Step 3: Make necessary changes in the downloaded file and
                    upload
                  </p>
                  <div>
                    <input
                      type="file"
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    ></input>
                  </div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setBulkUpdate(!bulkUpdate)}
                      className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                    >
                      <IoMdClose /> Cancel
                    </button>
                    <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                      <FaUpload /> Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {bulkAddNew && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-2/5 rounded-lg shadow-lg p-6">
                <div className="flex justify-end">
                  <button
                    className=""
                    onClick={() => setBulkAddNew(!bulkAddNew)}
                  >
                    <IoMdClose size={20} />
                  </button>
                </div>
                <h2 className="text-xl font-medium flex justify-center">
                  Upload Employee Information
                </h2>
                <div className="mt-10">
                  <p className="mt-2 font-bold">
                    Step 1: Download employee information global format
                  </p>
                  <button className="font-semibold py-2 px-4 rounded text-white bg-gray-500 mt-2 flex gap-2 items-center">
                    <FaDownload />
                    Download
                  </button>
                  <p className="font-bold mb-2 mt-2">
                    Step 2: Make necessary changes in the downloaded file and
                    upload
                  </p>
                  <div>
                    <input
                      type="file"
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    ></input>
                  </div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setBulkAddNew(!bulkAddNew)}
                      className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                    >
                      <IoMdClose /> Cancel
                    </button>
                    <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                      <FaUpload /> Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {bulkAddNewSelf && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-2/5 rounded-lg shadow-lg p-6">
                <div className="flex justify-end">
                  <button
                    className=""
                    onClick={() => setBulkAddNewSelf(!bulkAddNewSelf)}
                  >
                    <IoMdClose size={20} />
                  </button>
                </div>
                <h2 className="text-xl font-medium flex justify-center">
                  Upload Employee Information
                </h2>
                <div className="mt-10">
                  <p className="mt-2 font-bold">
                    Step 1: Download employee information global format
                  </p>
                  <button className="font-semibold py-2 px-4 rounded text-white bg-gray-500 mt-2 flex gap-2 items-center">
                    <FaDownload />
                    Download
                  </button>
                  <p className="font-bold mb-2 mt-2">
                    Step 2: Make necessary changes in the downloaded file and
                    upload
                  </p>
                  <div>
                    <input
                      type="file"
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    ></input>
                  </div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setBulkAddNewSelf(!bulkAddNewSelf)}
                      className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                    >
                      <IoMdClose /> Cancel
                    </button>
                    <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                      <FaUpload /> Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {bulkAddEmployee && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-2/5 rounded-lg shadow-lg p-6">
                <div className="flex justify-end">
                  <button
                    className=""
                    onClick={() => setBulkAddEmployee(!bulkAddEmployee)}
                  >
                    <IoMdClose size={20} />
                  </button>
                </div>
                <h2 className="text-xl font-medium flex justify-center">
                  Upload Employee Multi-Row Data
                </h2>
                <div className="mt-10">
                  <div>
                    <select
                      name=""
                      id=""
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    >
                      <option value="">
                        Select what data you want to update
                      </option>
                      <option value="">Assets</option>
                      <option value="">Employee OKR</option>
                      <option value="">Company Assets</option>
                      <option value="">Mediclaim Form</option>
                      <option value="">Joining Form</option>
                    </select>
                  </div>
                  <p className="mt-2 font-bold">
                    Step 2: Download employee information global formatIncludes
                    all your Employees with their available details.
                  </p>
                  <button className="font-semibold py-2 px-4 rounded text-white bg-gray-500 mt-2 flex gap-2 items-center">
                    <FaDownload />
                    Download
                  </button>
                  <p className="font-bold mb-2 mt-2">
                    Step 3: Make necessary changes in the downloaded file and
                    upload
                  </p>
                  <div>
                    <input
                      type="file"
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    ></input>
                  </div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setBulkAddEmployee(!bulkAddEmployee)}
                      className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                    >
                      <IoMdClose /> Cancel
                    </button>
                    <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                      <FaUpload /> Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {employeePayment && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-2/5 rounded-lg shadow-lg p-6">
                <div className="flex justify-end">
                  <button
                    className=""
                    onClick={() => setEmployeePayment(!employeePayment)}
                  >
                    <IoMdClose size={20} />
                  </button>
                </div>
                <h2 className="text-xl font-medium flex justify-center">
                  Upload Employee Payment Information
                </h2>
                <div className="mt-10">
                  <p className="mt-2 font-bold">
                    Step 1: Download employee payment information global format
                    Includes all your Employees with their available details.
                  </p>
                  <button className="font-semibold py-2 px-4 rounded text-white bg-gray-500 mt-2 flex gap-2 items-center">
                    <FaDownload />
                    Download
                  </button>
                  <p className="font-bold mb-2 mt-2">
                    Step 2: Make necessary changes in the downloaded file and
                    upload
                  </p>
                  <div>
                    <input
                      type="file"
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    ></input>
                  </div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setEmployeePayment(!employeePayment)}
                      className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                    >
                      <IoMdClose /> Cancel
                    </button>
                    <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                      <FaUpload /> Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {employeeContract && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-2/5 rounded-lg shadow-lg p-6">
                <div className="flex justify-end">
                  <button
                    className=""
                    onClick={() => setEmployeeContract(!employeeContract)}
                  >
                    <IoMdClose size={20} />
                  </button>
                </div>
                <h2 className="text-xl font-medium flex justify-center">
                  Upload Employee Contract Data
                </h2>
                <div className="mt-10">
                  <p className="mt-2 font-bold">
                    Step 1: Download employee information global format Includes
                    all your Employees with their available details.
                  </p>
                  <button className="font-semibold py-2 px-4 rounded text-white bg-gray-500 mt-2 flex gap-2 items-center">
                    <FaDownload />
                    Download
                  </button>
                  <p className="font-bold mb-2 mt-2">
                    Step 2: Make necessary changes in the downloaded file and
                    upload
                  </p>
                  <div>
                    <input
                      type="file"
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    ></input>
                  </div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setEmployeeContract(!employeeContract)}
                      className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                    >
                      <IoMdClose /> Cancel
                    </button>
                    <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                      <FaUpload /> Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {employeePerqs && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-2/5 rounded-lg shadow-lg p-6">
                <div className="flex justify-end">
                  <button
                    className=""
                    onClick={() => setEmployeePerqs(!employeePerqs)}
                  >
                    <IoMdClose size={20} />
                  </button>
                </div>
                <h2 className="text-xl font-medium flex justify-center">
                  Upload Employee Perqs for 2024-2025
                </h2>
                <div className="mt-10">
                  <p className="mt-2 font-bold">
                    Step 1: Download employee information global format.
                  </p>
                  <button className="font-semibold py-2 px-4 rounded text-white bg-gray-500 mt-2 flex gap-2 items-center">
                    <FaDownload />
                    Download
                  </button>
                  <p className="font-bold mb-2 mt-2">
                    Step 2: Make necessary changes in the downloaded file and
                    upload
                  </p>
                  <div>
                    <input
                      type="file"
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    ></input>
                  </div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setEmployeePerqs(!employeePerqs)}
                      className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                    >
                      <IoMdClose /> Cancel
                    </button>
                    <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                      <FaUpload /> Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {terminateEmployees && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-2/5 rounded-lg shadow-lg p-6">
                <div className="flex justify-end">
                  <button
                    className=""
                    onClick={() => setTerminateEmployees(!terminateEmployees)}
                  >
                    <IoMdClose size={20} />
                  </button>
                </div>
                <h2 className="text-xl font-medium flex justify-center">
                  Bulk Terminate Employees
                </h2>
                <div className="mt-10">
                  <p className="mt-2 font-bold">
                    Step 1: Download employee information global format
                  </p>
                  <button className="font-semibold py-2 px-4 rounded text-white bg-gray-500 mt-2 flex gap-2 items-center">
                    <FaDownload />
                    Download
                  </button>
                  <p className="font-bold mb-2 mt-2">
                    Step 2: Make necessary changes in the downloaded file and
                    upload
                  </p>
                  <div>
                    <input
                      type="file"
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    ></input>
                  </div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setTerminateEmployees(!terminateEmployees)}
                      className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                    >
                      <IoMdClose /> Cancel
                    </button>
                    <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                      <FaUpload /> Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {inviteEmployee && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-2/5 rounded-lg shadow-lg p-6">
                <div className="flex justify-end">
                  <button
                    className=""
                    onClick={() => setInviteEmployee(!inviteEmployee)}
                  >
                    <IoMdClose size={20} />
                  </button>
                </div>
                <h2 className="text-xl font-medium flex justify-center">
                  Invite Employee
                </h2>
                <div className="mt-10">
                  <div className="grid grid-cols-2 my-2">
                    <div>
                      <p>Welcome Message</p>
                    </div>
                    <div>
                      <Switch onChange={() => setIsSwitch1(!isSwitch1)} />
                    </div>
                  </div>
                  {isSwitch1 && (
                    <div>
                      <textarea
                        id=""
                        className="border-b border-gray-500 focus:outline-none w-full"
                        rows="2"
                        placeholder="Welcome Message"
                      />
                    </div>
                  )}
                  <div className="grid grid-cols-2 my-5">
                    <div>
                      <p>Include First Day Information</p>
                    </div>
                    <div>
                      <Switch onChange={() => setIsSwitch2(!isSwitch2)} />
                    </div>
                  </div>
                  {isSwitch2 && (
                    <div className="space-y-5">
                      <input
                        type="text"
                        className="border-b border-gray-500 focus:outline-none w-full"
                        placeholder="Arrival Time"
                      />
                      <input
                        type="text"
                        className="border-b border-gray-500 focus:outline-none w-full"
                        placeholder="Location"
                      />
                      <select
                        className="border-b border-gray-500 focus:outline-none w-full"
                        name=""
                      >
                        <option value="">Select Contact Person</option>
                        <option value="">Karan Singh</option>
                        <option value="">R.k Kumar</option>
                        <option value="">Vinay Gupta</option>
                        <option value="">Rahul Yadav</option>
                      </select>
                      <textarea
                        id=""
                        className="border-b border-gray-500 focus:outline-none w-full"
                        rows="2"
                        placeholder="Welcome Message"
                      />
                    </div>
                  )}
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setInviteEmployee(!inviteEmployee)}
                      className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                    >
                      <IoMdClose /> Cancel
                    </button>
                    <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                      Send Invite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between h-screen">
          <div className="w-full p-4 flex flex-wrap overflow-y-auto mt-2 ml-20">
            {alphabet.map((letter) => (
              <div key={letter} id={letter} className="w-full">
                {(selectedLetter === null || selectedLetter === letter) && (
                  <>
                    <h2
                      className="text-2xl flex justify-center items-center rounded-lg font-semibold mb-4 bg-orange-400 text-white w-12 h-12"
                      onClick={() =>
                        setSelectedLetter(
                          selectedLetter === letter ? null : letter
                        )
                      }
                    >
                      {letter}
                    </h2>
                    {sortedEmployees.filter((emp) =>
                      emp.name.startsWith(letter)
                    ).length > 0 && (
                      <ul className="grid grid-cols-3 gap-4">
                        {sortedEmployees
                          .filter((emp) => emp.name.startsWith(letter))
                          .map((emp) => (
                            <li
                              key={emp.id}
                              className="flex items-center mb-2 p-2 border-b"
                            >
                              <div className="rounded-full w-16 h-16 bg-gray-300 flex items-center justify-center mr-4">
                                <span className="text-white font-semibold">
                                  {emp.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </span>
                              </div>
                              <div>
                                <div className="font-semibold">{emp.name}</div>
                                <div className="text-sm text-gray-600">
                                  {emp.employeeID} | {emp.doj}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {emp.position}
                                </div>
                                <div
                                  className={`font-semibold bg-green-500 rounded-md text-white text-sm inline-flex justify-center items-center whitespace-nowrap px-5`}
                                >
                                  {emp.status}
                                </div>
                                <div>
                                  <div className=" my-3 border border-gray-500 p-1 rounded-md inline-flex gap-2 text-red-400">
                                    <Link to={`/hrms/employee-directory/personal`} className="">
                                      <BiSolidEdit size={18}/>
                                    </Link>
                                    <button className="">
                                      <RiDeleteBin5Line size={18} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="w-96 p-4 bg-gray-50">
            <h1 className="text-2xl font-semibold mb-4">Employee Details</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDirectoryPage;
