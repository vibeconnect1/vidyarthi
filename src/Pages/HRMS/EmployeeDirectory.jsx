import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaChevronDown, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";
import AdminHRMS from "./AdminHRMS";
import { getItemInLocalStorage } from "../../ConfigurationFile/localStorage";
import FileInput from "../../ConfigurationFile/FileInput";
import InviteEmployeeModal from "./InviteEmployeeModal";
function EmployeeDirectory() {
  const hrmsOrgId = getItemInLocalStorage("HRMSORGID");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [isModalOpen6, setIsModalOpen6] = useState(false);
  const [isModalOpen7, setIsModalOpen7] = useState(false);
  const [isModalOpen8, setIsModalOpen8] = useState(false);
  const [isModalOpen9, setIsModalOpen9] = useState(false);
  const [isModalOpen10, setIsModalOpen10] = useState(false);
  const [isModalOpen11, setIsModalOpen11] = useState(false);
  const [employeesData, setEmployeesData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [selectedLetter, setSelectedLetter] = useState(null);

  const groupedEmployees = employeesData.reduce((acc, employee) => {
    const firstLetter = employee.first_name[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(employee);
    return acc;
  }, {});

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSelectedEmployee(null); // Deselect employee if a new letter is selected
  };

  const filteredEmployees = selectedLetter
    ? groupedEmployees[selectedLetter] || []
    : employeesData;

  function getRandomColor() {
    const colors = [
      "#8B0000",
      "#FF4500",
      "#2E8B57",
      "#4682B4",
      "#6A5ACD",
      "#D2691E",
    ];
    // Add more colors if needed
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const randomColor = getRandomColor();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const handleDeleteModal = (empId) => {
    setIsDeleteModalOpen(true);
    setEmployeeId(empId);
  };
  const handleDeleteEmployee = async () => {
    try {
      await deleteHRMSEmployee(employeeId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col ">
        <div className="">
          <header className=" text-black bg-white  py-4 ml-20 border border-gray-400">
            <h1 className="text-3xl pl-5 font-bold">Employee Directory</h1>
            <p className="pl-5">
              Employee personal details are noted under this section.
            </p>

            <div className="flex justify-end  gap-2 mb-1">
              <input
                type="text"
                placeholder="Search by Name / Code"
                className="border p-2 text-black rounded w-1/3"
              />
              <div className="flex gap-3">
                <div className="relative inline-block text-left">
                  <button
                    onClick={toggleDropdown}
                    className=" justify-center w-full flex items-center gap-2 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  >
                    Actions
                    <FaChevronDown />
                  </button>

                  {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
                          <button onClick={() => setIsModalOpen1(true)}>
                            Upload Investments
                          </button>
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {/* Upload Statutory Settings */}
                          <button onClick={() => setIsModalOpen2(true)}>
                            Upload Statutory Settings
                          </button>
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {/* Upload Documents */}
                          <button onClick={() => setIsModalOpen3(true)}>
                            Upload Documents
                          </button>
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {/* Bulk Update Employee Data */}
                          <button onClick={() => setIsModalOpen4(true)}>
                            Bulk Update Employee Data
                          </button>
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {/* Bulk Add New Employees */}
                          <button onClick={() => setIsModalOpen5(true)}>
                            Bulk Add New Employees
                          </button>
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          <button onClick={() => setIsModalOpen5(true)}>
                            Bulk Add New Self Onboard Employees
                          </button>
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          <button onClick={() => setIsModalOpen6(true)}>
                            Bulk Add Employee Multi-row Data
                          </button>
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {/* Bulk Update Payment Information */}
                          <button onClick={() => setIsModalOpen7(true)}>
                            Bulk Update Payment Information
                          </button>
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {/* Bulk Add Employees Contract */}
                          <button onClick={() => setIsModalOpen8(true)}>
                            Bulk Add Employees Contract
                          </button>
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {/* Upload Perqs */}
                          <button onClick={() => setIsModalOpen9(true)}>
                            Upload Perqs
                          </button>
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {/* Bulk Termination */}
                          <button onClick={() => setIsModalOpen10(true)}>
                            Bulk Termination
                          </button>
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          <button onClick={() => setIsModalOpen11(true)}>
                            {" "}
                            Invite Employees
                          </button>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <InviteEmployeeModal
                  isOpen={isModalOpen11}
                  onClose={() => setIsModalOpen11(false)}
                />
                {isModalOpen1 && (
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
                    <div className="bg-white text-black p-5 rounded-md shadow-md w-2/3">
                      <h2 className="text-xl font-semibold mb-4">
                        Upload Employee Investment Declarations for 2024-2025
                      </h2>
                      <p className="font-bold">
                        Step 1: Select type of upload *
                      </p>
                      <p>
                        Declared Investment Declarations - Upload all the
                        Investment Details declared by your employees.
                      </p>
                      <p>
                        Verified Investment Declarations - Upload all the
                        employee Investment Details that have been physically
                        verified.
                      </p>
                      <select
                        name=""
                        id=""
                        className="border-b border-gray-500 focus:outline-none my-3 w-full"
                      >
                        <option value="">Select type of Upload</option>
                        <option value="">
                          Declared Investment Declarations
                        </option>
                        <option value="">
                          Verified Investment Declarations
                        </option>
                      </select>
                      <p className="mt-2 font-bold">
                        Step 2: Download the investments global format
                      </p>
                      <p>
                        Include the investment declarations of all employees.
                      </p>
                      <button className="font-semibold py-2 px-4 rounded text-white bg-gray-500 mt-2">
                        Download
                      </button>
                      <p className="fonr-bold mb-2 mt-2">
                        Step 3: Make the necessary changes in the downloaded
                        format template and upload *
                      </p>
                      <FileInput />
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setIsModalOpen1(false)}
                          className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2"
                        >
                          Cancel
                        </button>
                        <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isModalOpen4 && (
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
                    <div className="bg-white text-black p-5 rounded-md shadow-md w-2/3">
                      <h2 className="text-xl font-semibold mb-4">
                        Upload Employee Information
                      </h2>
                      <p className="font-bold">
                        Step 1: Select what data you want to update
                      </p>

                      <select
                        name=""
                        id=""
                        className="border-b border-gray-500 focus:outline-none w-full"
                      >
                        <option value="">Select Sections</option>
                        <option value="">Salary Info</option>
                        <option value="">Address Info</option>{" "}
                      </select>
                      <p className="mt-2 font-bold">
                        Step 2: Download employee information global format
                      </p>
                      <p>
                        Includes all your Employees with their available
                        details.
                      </p>
                      <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                        Download
                      </button>
                      <p className="fonr-bold mb-2 mt-2">
                        Step 3: Make the necessary changes in the downloaded
                        file and upload *
                      </p>
                      <FileInput />
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setIsModalOpen4(false)}
                          className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2"
                        >
                          Cancel
                        </button>
                        <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isModalOpen2 && (
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
                    <div className="bg-white text-black p-5 rounded-md shadow-md w-2/3">
                      <h2 className="text-xl font-semibold mb-4">
                        Upload Employee Statutory Setting
                      </h2>
                      <p className="font-bold">
                        Step 1: Download employee information global format
                      </p>

                      <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                        Download
                      </button>
                      <p className="fonr-bold mb-2 mt-2">
                        Step 2: Make the necessary changes in the downloaded
                        file and upload *
                      </p>
                      <FileInput />
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setIsModalOpen2(false)}
                          className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2"
                        >
                          Cancel
                        </button>
                        <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isModalOpen5 && (
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
                    <div className="bg-white text-black p-5 rounded-md shadow-md w-2/3">
                      <h2 className="text-xl font-semibold mb-4">
                        Upload Employee Information
                      </h2>
                      <p className="font-bold">
                        Step 1: Download employee information global format
                      </p>

                      <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                        Download
                      </button>
                      <p className="fonr-bold mb-2 mt-2">
                        Step 2: Make the necessary changes in the downloaded
                        file and upload *
                      </p>
                      <FileInput />
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setIsModalOpen5(false)}
                          className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2"
                        >
                          Cancel
                        </button>
                        <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isModalOpen6 && (
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
                    <div className="bg-white text-black p-5 rounded-md shadow-md w-2/3">
                      <h2 className="text-xl font-semibold mb-4">
                        Upload Employee Information
                      </h2>
                      <p className="font-bold">
                        Step 1: Select what data you want to update *
                      </p>
                      <select
                        className="border-b border-gray-500 focus:outline-none w-full"
                        name=""
                        id=""
                      >
                        <option value="">Select Custom Multi-Row Table</option>
                      </select>
                      <p className="font-bold">
                        Step 2: Download employee information global format
                      </p>
                      <p>
                        Includes all your Employees with their available
                        details.
                      </p>

                      <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                        Download
                      </button>
                      <p className="fonr-bold mb-2 mt-2">
                        Step 3: Make the necessary changes in the downloaded
                        file and upload *
                      </p>
                      <FileInput />
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setIsModalOpen6(false)}
                          className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2"
                        >
                          Cancel
                        </button>
                        <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isModalOpen7 && (
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
                    <div className="bg-white text-black p-5 rounded-md shadow-md w-2/3">
                      <h2 className="text-xl font-semibold mb-4">
                        Upload Employee Payment Information
                      </h2>
                      <p className="font-bold">
                        Step 1: Download employee information global format
                      </p>
                      <p>
                        Includes all your Employees with their available
                        details.
                      </p>

                      <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                        Download
                      </button>
                      <p className="fonr-bold mb-2 mt-2">
                        Step 2: Make the necessary changes in the downloaded
                        file and upload *
                      </p>
                      <FileInput />
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setIsModalOpen7(false)}
                          className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2"
                        >
                          Cancel
                        </button>
                        <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isModalOpen8 && (
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
                    <div className="bg-white text-black p-5 rounded-md shadow-md w-2/3">
                      <h2 className="text-xl font-semibold mb-4">
                        Upload Employee Contract Data
                      </h2>
                      <p className="font-bold">
                        Step 1: Download employee information global format
                      </p>
                      <p>
                        Includes all your Employees with their available
                        details.
                      </p>

                      <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                        Download
                      </button>
                      <p className="fonr-bold mb-2 mt-2">
                        Step 2: Make the necessary changes in the downloaded
                        file and upload *
                      </p>
                      <FileInput />
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setIsModalOpen8(false)}
                          className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2"
                        >
                          Cancel
                        </button>
                        <button className="font-semibold py-2 px-4 bg-gray-500 rounded text-white mt-2">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isModalOpen9 && (
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
                    <div className="bg-white text-black p-5 rounded-md shadow-md w-2/3">
                      <h2 className="text-xl font-semibold mb-4">
                        Upload Employee Perqs for 2024-2025
                      </h2>
                      <p className="font-bold">
                        Step 1: Download employee information global format
                      </p>
                      {/* <p>Includes all your Employees with their available details.</p> */}

                      <button className="font-semibold py-2 px-4 bg-gray-500 rounded text-white mt-2">
                        Download
                      </button>
                      <p className="fonr-bold mb-2 mt-2">
                        Step 2: Make the necessary changes in the downloaded
                        file and upload *
                      </p>
                      <FileInput />
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setIsModalOpen9(false)}
                          className="font-semibold py-2 px-4 bg-gray-500 rounded text-white mt-2"
                        >
                          Cancel
                        </button>
                        <button className="font-semibold py-2 px-4 bg-gray-500 rounded text-white mt-2">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isModalOpen10 && (
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
                    <div className="bg-white text-black p-5 rounded-md shadow-md w-2/3">
                      <h2 className="text-xl font-semibold mb-4">
                        Bulk Termination
                      </h2>
                      <p className="font-bold">
                        Step 1: Download employee information global format
                      </p>
                      <p>
                        Includes all your Employees with their available
                        details.
                      </p>

                      <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                        Download
                      </button>
                      <p className="fonr-bold mb-2 mt-2">
                        Step 2: Make the necessary changes in the downloaded
                        file and upload *
                      </p>
                      <FileInput />
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setIsModalOpen10(false)}
                          className="font-semibold py-2 px-4 bg-gray-500 rounded text-white mt-2"
                        >
                          Cancel
                        </button>
                        <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isModalOpen3 && (
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
                    <div className="bg-white text-black p-5 rounded-md shadow-md w-1/3">
                      <h2 className="text-xl font-semibold mb-4">
                        Bulk Upload Employee Documents
                      </h2>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="grid gap-2 my-2">
                          <select
                            className="border-b border-gray-500 focus:outline-none"
                            name=""
                            id=""
                            required
                          >
                            <option value="">Select Document Type</option>
                          </select>
                        </div>
                        <div className="grid gap-2">
                          <select
                            className="border-b border-gray-500 focus:outline-none"
                            name=""
                            id=""
                            required
                          >
                            <option value="">Document name format</option>
                            <option value="">PAN</option>
                            <option value="">Aadhar</option>
                          </select>
                        </div>
                      </div>
                      {/* <p className='font-bold'>Step 1: Download employee information global format</p> */}

                      {/* <button style={{ background: themeColor }} className='font-semibold py-2 px-4 rounded text-white mt-2'>Download</button> */}
                      <p className="fonr-bold mb-2 mt-2">Upload Documents *</p>
                      <FileInput />

                      <p>Acceptable format: .zip</p>
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
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setIsModalOpen3(false)}
                          className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2"
                        >
                          Cancel
                        </button>
                        <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
                >
                  Filter
                </button>
                <Link
                  to={"/hrms/alerts/add-employee"}
                  className="border-2 font-semibold bg-black duration-150 transition-all border-white p-2 rounded-md text-white cursor-pointer text-center flex items-center  gap-2 justify-center"
                >
                  <PiPlusCircle size={20} />
                  Add Employee
                </Link>
              </div>
            </div>
          </header>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
            <div className="bg-white p-5 rounded-md shadow-md w-1/3">
              {/* <h2 className="text-xl font-semibold mb-4">Add Department</h2> */}
              <div className="my-5">
                <select
                  type="text"
                  id="departmentName"
                  // value={departmentName}
                  // onChange={(e) => setDepartmentName(e.target.value)}
                  className="border-b border-gray-500 focus:outline-none w-full"
                  // placeholder="Enter Department Name"
                >
                  <option value="">Branch Location</option>
                  <option value="">Mumbai</option>
                  <option value="">Pune</option>
                </select>
              </div>
              <div className="my-5">
                <select
                  id=""
                  // value={headOfDepartment}
                  // onChange={(e) => setHeadOfDepartment(e.target.value)}
                  className="border-b border-gray-500 focus:outline-none w-full"
                >
                  <option value="">Joining Month</option>
                </select>
              </div>
              <div className="my-5">
                <select
                  id="headOfDepartment"
                  // value={headOfDepartment}
                  // onChange={(e) => setHeadOfDepartment(e.target.value)}
                  className="border-b border-gray-500 focus:outline-none w-full"
                >
                  <option value="">Employee Status</option>
                  <option value="">pending</option>
                </select>
              </div>
              <div className="my-5">
                <select
                  id="headOfDepartment"
                  // value={headOfDepartment}
                  // onChange={(e) => setHeadOfDepartment(e.target.value)}
                  className="border-b border-gray-500 focus:outline-none w-full"
                >
                  <option value="">Employee Department</option>
                  <option value="">HR</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
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
        <div className="flex justify-between h-screen">
          <div className="w-full p-4 flex flex-wrap overflow-y-auto mt-2 ml-20">
            {alphabet.map((letter) => (
              <div key={letter} id={letter} className="w-full">
                {selectedLetter === null || selectedLetter === letter ? (
                  <>
                    <h2 className="text-xl rounded-xl font-semibold mb-4">
                      {letter}
                    </h2>
                    <div className="flex flex-wrap">
                      {groupedEmployees[letter]?.map((employee) => (
                        <div
                          key={employee.id}
                          className="bg-white w-64 p-2 m-2 rounded-lg border cursor-pointer"
                          onClick={() => setSelectedEmployee(employee)}
                        >
                          <div className="flex items-center">
                            <div
                              className="bg-gray-300 rounded-full text-white h-12 w-12 flex items-center font-medium justify-center mr-4"
                              style={{ backgroundColor: randomColor }}
                            >
                              {employee.first_name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <h2 className=" font-bold">
                                {employee.first_name}
                              </h2>
                              <p className="text-sm font-medium">
                                DOJ: 12-12-2022
                              </p>
                              <p>{employee.role}</p>

                              <p className="text-green-500">
                                {employee.status}
                              </p>
                              {/* <Link><BiEdit size={15}/></Link> */}
                              <div className="flex items-center  gap-4 mt-2">
                                <Link
                                  to={`/hrms/employee-directory-Personal/${employee.id}`}
                                >
                                  <BiEdit size={18} />
                                </Link>{" "}
                                <button
                                  onClick={() => handleDeleteModal(employee.id)}
                                >
                                  <FaTrash size={15} className="text-red-400" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            ))}
          </div>
          <div className="w-10 bg-white text-black p-4">
            <div className="flex flex-col">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => handleLetterClick(letter)}
                  className=" p-1 text-sm "
                  title={letter}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
          <div className="w-96 p-4 bg-gray-50">
            <h1 className="text-2xl font-semibold mb-4">Employee Details</h1>
            {selectedEmployee ? (
              <div className="flex flex-col justify-between h-96">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl text-center font-medium mb-2 border-b border-dashed border-gray-300">
                    {selectedEmployee.first_name} {selectedEmployee.last_name}
                  </h2>
                  <p className="grid grid-cols-2">
                    {" "}
                    <span className="font-medium text-sm">
                      Department :
                    </span>{" "}
                    <span className="font-medium text-sm">
                      {selectedEmployee.department}
                    </span>
                  </p>
                  <p className="grid grid-cols-2">
                    <span className="font-medium text-sm">Role :</span>{" "}
                    <span className="font-medium text-sm">
                      {selectedEmployee.role}
                    </span>
                  </p>
                  <p className="grid grid-cols-2">
                    <span className="font-medium text-sm">Status :</span>{" "}
                    <span className="font-medium text-sm">
                      {selectedEmployee.status}
                    </span>
                  </p>
                  <p className="grid grid-cols-2">
                    <span className="font-medium text-sm">Location :</span>{" "}
                    <span className="font-medium text-sm">
                      {selectedEmployee.location}
                    </span>
                  </p>
                  <p className="grid grid-cols-2">
                    <span className="font-medium text-sm">Phone : </span>{" "}
                    <span className="font-medium text-sm">
                      {selectedEmployee.mobile}
                    </span>
                  </p>
                  <p className="grid grid-cols-2">
                    <span className="font-medium text-sm">Email :</span>{" "}
                    <span className="font-medium text-sm">
                      {selectedEmployee.email_id}
                    </span>
                  </p>
                </div>
                {/* <button
                  type="submit"
                  className="bg-black w-full mb-4 text-white mt-2 hover:bg-gray-700 font-semibold py-2 px-4 rounded"
                >
                  View Profile
                </button> */}
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="bg-black text-white hover:bg-gray-700 py-2 px-4 rounded-full"
                  >
                    Separate
                  </button>
                  <button
                    type="submit"
                    className="bg-yellow-500 text-white hover:bg-gray-700  py-2 px-4 rounded-full"
                  >
                    Hold
                  </button>
                  <button
                    type="submit"
                    className="bg-red-500 text-sm font-medium text-white hover:bg-gray-700  py-2 px-4 rounded-full"
                  >
                    Deactivate
                  </button>
                </div>
              </div>
            ) : (
              <p>Select an employee to see details</p>
            )}
          </div>
        </div>
      </div>
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-20">
          <div className="bg-white overflow-auto max-h-[70%]  md:w-auto w-96 p-4 px-8 flex flex-col rounded-md gap-5">
            <h2 className="font-medium border-b border-gray-400">
              Do you really want to delete this Employee?
            </h2>
            <div className="flex items-center justify-end gap-2">
              <button
                className="bg-green-400 text-white rounded-full p-1 px-4 font-medium"
                onClick={handleDeleteEmployee}
              >
                Confirm
              </button>
              <button
                className="bg-red-400 text-white rounded-full p-1 px-4 font-medium"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeDirectory;
