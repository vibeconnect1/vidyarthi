import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import EmployeeTransactionsSetting from "./EmployeeTransactionsSetting";
import { FaChevronDown, FaDownload, FaTrashAlt } from "react-icons/fa";
import Table from "../../../ConfigurationFile/Table";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

function DataChangeRequests() {
  const [action, setAction] = useState(false);
  const [page, setPage] = useState("pendingReport");
  const [requestEmployeeInformation, setRequestEmployeeInformation] =
    useState(false);

  const [employeeSelection, setEmployeeSelection] = useState("Some Employees");
  const [bulkApproved, setBulkApproved] = useState(false);
  const [bulkReject, setBulkReject] = useState(false);
  const [bulkDelete, setBulkDelete] = useState(false);
  const [bulkSend, setBulkSend] = useState(false);

  // filter
  const [filter, setFilter] = useState(false);
  const [request, setRequest] = useState(false);
  const [employeeDepartment, setEmployeeDepartment] = useState(false);
  const [branchLocation, setBranchLocation] = useState(false);
  const [employeeStatus, setEmployeeStatus] = useState(false);
  const requestStatus = [
    "Select all",
    "Pending Submission",
    "Pending Approval",
  ];

  const department = [
    "Select all",
    "Finance",
    "HR",
    "L machine",
    "L packing",
    "Marketing",
    "Operations",
  ];

  const location = [
    "Select all",
    "Mumbai; Mumbai; Maharashtra",
    "Test 1 ; Pune; Maharashtra",
    "Delhi; Delhi NCR; Delhi",
    "Asian Paints Delhi; Noida; Delhi",
    "Asian Paints Gurgoan; Gurgoan ; Delhi",
  ];

  const empStatus = [
    "Select all",
    "Incomplete",
    "Active",
    "Onhold",
    "Serving Notice Period",
    "Separated",
    "Unactivated",
  ];

  const columnsPending = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Request Type",
      selector: (row) => row.request_type,
      sortable: true,
    },
    {
      name: "Submitted Date",
      selector: (row) => row.submitted_date,
      sortable: true,
    },
    {
      name: "Requested By",
      selector: (row) => row.requested_by,
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
          <button>
            <FaDownload size={15} />
          </button>
          <Link
            to={`/hrms/employee-transactions/edit-data-change-request/${row.id}`}
          >
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
  ];
  const dataPending = [
    {
      id: 1,
      employee_name: "Karan",
      request_type: "Basic Information",
      submitted_date: "",
      requested_by: "Anil",
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
      name: "Request Type",
      selector: (row) => row.request_type,
      sortable: true,
    },
    {
      name: "Submitted Date",
      selector: (row) => row.submitted_date,
      sortable: true,
    },
    {
      name: "Requested By",
      selector: (row) => row.requested_by,
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
      request_type: "Basic Information",
      submitted_date: "27-03-2024",
      requested_by: "Anil",
      status: "Pending Submission",
    },
  ];

  const columnsCompleteDetails = [
    {
      name: "Field",
      selector: (row) => row.field,
      sortable: true,
    },
    {
      name: "Current Value",
      selector: (row) => row.current_value,
      sortable: true,
    },
    {
      name: "Proposed Value	",
      selector: (row) => row.proposed_value	,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status	,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action	,
      sortable: true,
    },
  ];
  const dataCompleteDetails = [
    {
      id: 1,
      field: "Aadhar No",
      current_value: "",
      status: "Approved",
      proposed_value: "654567328778",
      status: "Pending Submission",
    },
  ];

  const [completeDetailTable, setCompleteDetailsTable] = useState(false);

  const [sections, setSections] = useState([]);

  const addSection = () => {
    setSections([...sections, { id: sections.length }]);
  };

  const removeSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  const [selectedField, setSelectedField] = useState("");

  const handleSelectChange = (e) => {
    setSelectedField(e.target.value);
  };

  const [someEmployeeLocation, setSomeEmployeeLocation] = useState(false);
  const someEmpLocation = [
    "Select all",
    "Mumbai; Mumbai; Maharashtra",
    "Test 1 ; Pune; Maharashtra",
    "Delhi; Delhi NCR; Delhi",
    "Asian Paints Delhi; Noida; Delhi",
    "Asian Paints Gurgoan; Gurgoan ; Delhi",
  ];

  const [someEmployeeDepartment, setSomeEmployeeDepartment] = useState(false);
  const someEmpDepartment = [
    "Select all",
    "Finance",
    "HR",
    "L machine",
    "L packing",
    "Marketing",
    "Operations",
  ];
  const [employmentType, setEmploymentType] = useState(false);
  const someEmploymentType = [
    "Select all",
    "Full Time",
    "Contract",
    "Intern",
    "Consultant",
  ];

  const [isGender, setIsGender] = useState(false);
  const genderList = ["Select all", "Male", "Female"];

  const [oldDept, setOldDept] = useState(false);
  const dept = ["Select all", "Hr", "Marketing", "Finance"];

  const [blood, setBlood] = useState(false);
  const bloodList = ["Select all", "A+", "AB+", "B+", "B-"];

  const [isEducationLevel, setIsEducationLevel] = useState(false);
  const educationList = ["Select all", "Graduate", "Post Graduate", "Masters"];

  const [isCurrency, setIsCurrency] = useState(false);
  const currencyList = ["Select all", "INR", "SGD"];

  const [isSpecificEmp, setIsSpecificEmp] = useState(false);

  const specificEmployeesList = [
    "Select all",
    " Ankit -1009",
    " Ankit gaurav - 1010",
    " Pavan Pal - 1011",
    " Rahul - 1012",
    " Rohit Kumar - 1013",
  ];

  const [sections1, setSections1] = useState([{ id: 1 }]); // Initial state with one section

  // Function to add a new section
  const addSection1 = () => {
    setSections1([...sections1, { id: sections1.length + 1 }]); // Increment ID based on length
  };

  // Function to remove a section
  const removeSection1 = (id) => {
    setSections1(sections1.filter((sec) => sec.id !== id));
  };

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
                      onClick={() => setFilter(!filter)}
                    >
                      Filter
                    </button>
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
                            className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-left hover:text-red-500"
                            onClick={() =>
                              setRequestEmployeeInformation(
                                !requestEmployeeInformation
                              )
                            }
                          >
                            Request Employee Information
                          </button>
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
                          <button
                            className="hover:bg-gray-100 px-4 py-1 text-left cursor-pointer hover:text-red-500"
                            onClick={() => setBulkDelete(!bulkDelete)}
                          >
                            Bulk Delete
                          </button>
                          <button
                            className="hover:bg-gray-100 px-4 py-1 text-left cursor-pointer hover:text-red-500"
                            onClick={() => setBulkSend(!bulkSend)}
                          >
                            Bulk Send Reminder Mail To Employees
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {filter && (
                <div className="fixed bg-white rounded-lg shadow-lg w-3/5 py-5 z-10">
                  <div className="grid grid-cols-3 gap-5 px-5 my-5">
                    <div className="relative">
                      <button
                        onClick={() => setRequest(!request)}
                        className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                      >
                        Request Status <IoMdArrowDropdown />
                      </button>

                      {request && (
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
                            {requestStatus.map((option, index) => (
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
                    <div>
                      <input
                        type="text"
                        placeholder="Date of Creation(From)"
                        className="border-b border-gray-500 focus:outline-none w-full"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Date of Creation(To)"
                        className="border-b border-gray-500 focus:outline-none w-full"
                      />
                    </div>
                    <div className="relative">
                      <button
                        onClick={() =>
                          setEmployeeDepartment(!employeeDepartment)
                        }
                        className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                      >
                        Employee Department <IoMdArrowDropdown />
                      </button>

                      {employeeDepartment && (
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
                            {department.map((option, index) => (
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
                            {location.map((option, index) => (
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
                        Employee Status <IoMdArrowDropdown />
                      </button>
                      {employeeStatus && (
                        <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
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
                            {empStatus.map((option, index) => (
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
      {requestEmployeeInformation && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 h-3/4 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() =>
                  setRequestEmployeeInformation(!requestEmployeeInformation)
                }
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Request Employee Information
              </h2>
            </div>
            <div className="my-5 mx-5">
              <div className="">
                <h2 className="font-medium">Please select which employee</h2>
                <div className="flex gap-5 my-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-orange-500"
                      name="employee"
                      checked={employeeSelection === "All the Employee"}
                    />
                    <span className="ml-2 whitespace-nowrap">
                      All the Employees
                    </span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-orange-500"
                      name="employee"
                      checked={employeeSelection === "Some Employees"}
                      onChange={() => setEmployeeSelection("Some Employees")}
                    />
                    <span className="ml-2 whitespace-nowrap">
                      Some Employees
                    </span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-orange-500"
                      name="employee"
                      checked={employeeSelection === "Specific Employees"}
                    />
                    <span className="ml-2 whitespace-nowrap">
                      Specific Employees
                    </span>
                  </div>
                </div>
              </div>
              {employeeSelection === "Some Employees" && (
                <div className="my-5">
                  {sections.map((section, index) => (
                    <div key={section.id} className="mt-4">
                      <div className="flex items-center space-x-4 gap-5 my-5">
                        <button
                          className="text-red-500 hover:text-red-600"
                          onClick={() => removeSection(section.id)}
                        >
                          <FaTrashAlt size={15} />
                        </button>
                        <div className="flex flex-col gap-2">
                          <select
                            name="dynamic-select"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            onChange={handleSelectChange}
                          >
                            <option value="">Select</option>
                            <option value="location">Location</option>
                            <option value="department">Department</option>
                            <option value="employmentType">
                              Employment Type
                            </option>
                            <option value="daysCompleted">
                              Days Completed in Company
                            </option>
                            <option value="gender">Gender</option>
                            <option value="oldDepartment">
                              Old Department
                            </option>
                            <option value="bloodGroup">Blood Group</option>
                            <option value="educationLevel">
                              Education Level
                            </option>
                            <option value="currency">Currency</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <select
                            name=""
                            className="border-b border-gray-500 focus:outline-none w-full"
                          >
                            <option value="">Is</option>
                            <option value="">Is Not</option>
                          </select>
                        </div>
                        <div>
                          {selectedField === "location" && (
                            <div className="relative">
                              <button
                                onClick={() =>
                                  setSomeEmployeeLocation(!someEmployeeLocation)
                                }
                                className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                              >
                                Branch Location <IoMdArrowDropdown />
                              </button>
                              {someEmployeeLocation && (
                                <div className="absolute z-10 w-60 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
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
                                    {someEmpLocation.map((option, index) => (
                                      <label
                                        key={option}
                                        className="flex items-center px-4 py-2 hover:bg-gray-100"
                                      >
                                        <input
                                          type="checkbox"
                                          className="mr-2"
                                        />
                                        {option}
                                      </label>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                          {selectedField === "department" && (
                            <div className="relative">
                              <button
                                onClick={() =>
                                  setSomeEmployeeDepartment(
                                    !someEmployeeDepartment
                                  )
                                }
                                className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                              >
                                Employee Department <IoMdArrowDropdown />
                              </button>

                              {someEmployeeDepartment && (
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
                                    {someEmpDepartment.map((option, index) => (
                                      <label
                                        key={option}
                                        className="flex items-center px-4 py-2 hover:bg-gray-100"
                                      >
                                        <input
                                          type="checkbox"
                                          className="mr-2"
                                        />
                                        {option}
                                      </label>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                          {selectedField === "employmentType" && (
                            <div className="relative">
                              <button
                                onClick={() =>
                                  setEmploymentType(!employmentType)
                                }
                                className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                              >
                                Employment Type
                                <IoMdArrowDropdown />
                              </button>
                              {employmentType && (
                                <div className="absolute z-10 w-60 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
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
                                    {someEmploymentType.map((option, index) => (
                                      <label
                                        key={option}
                                        className="flex items-center px-4 py-2 hover:bg-gray-100"
                                      >
                                        <input
                                          type="checkbox"
                                          className="mr-2"
                                        />
                                        {option}
                                      </label>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                          {selectedField === "daysCompleted" && (
                            <input
                              type="number"
                              placeholder="Greater than"
                              className="border-b border-gray-500 focus:outline-none w-full"
                            />
                          )}
                          {selectedField === "gender" && (
                            <div className="relative">
                              <button
                                onClick={() => setIsGender(!isGender)}
                                className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                              >
                                Gender
                                <IoMdArrowDropdown />
                              </button>
                              {isGender && (
                                <div className="absolute z-10 w-60 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
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
                                    {genderList.map((option, index) => (
                                      <label
                                        key={option}
                                        className="flex items-center px-4 py-2 hover:bg-gray-100"
                                      >
                                        <input
                                          type="checkbox"
                                          className="mr-2"
                                        />
                                        {option}
                                      </label>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          {selectedField === "oldDepartment" && (
                            <div className="relative">
                              <button
                                onClick={() => setOldDept(!oldDept)}
                                className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                              >
                                Old Department
                                <IoMdArrowDropdown />
                              </button>
                              {oldDept && (
                                <div className="absolute z-10 w-60 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
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
                                    {dept.map((option, index) => (
                                      <label
                                        key={option}
                                        className="flex items-center px-4 py-2 hover:bg-gray-100"
                                      >
                                        <input
                                          type="checkbox"
                                          className="mr-2"
                                        />
                                        {option}
                                      </label>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                          {selectedField === "bloodGroup" && (
                            <div className="relative">
                              <button
                                onClick={() => setBlood(!blood)}
                                className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                              >
                                Blood Group
                                <IoMdArrowDropdown />
                              </button>
                              {blood && (
                                <div className="absolute z-10 w-60 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
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
                                    {bloodList.map((option, index) => (
                                      <label
                                        key={option}
                                        className="flex items-center px-4 py-2 hover:bg-gray-100"
                                      >
                                        <input
                                          type="checkbox"
                                          className="mr-2"
                                        />
                                        {option}
                                      </label>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                          {selectedField === "educationLevel" && (
                            <div className="relative">
                              <button
                                onClick={() =>
                                  setIsEducationLevel(!isEducationLevel)
                                }
                                className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                              >
                                Education List
                                <IoMdArrowDropdown />
                              </button>
                              {isEducationLevel && (
                                <div className="absolute z-10 w-60 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
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
                                    {educationList.map((option, index) => (
                                      <label
                                        key={option}
                                        className="flex items-center px-4 py-2 hover:bg-gray-100"
                                      >
                                        <input
                                          type="checkbox"
                                          className="mr-2"
                                        />
                                        {option}
                                      </label>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                          {selectedField === "currency" && (
                            <div className="relative">
                              <button
                                onClick={() => setIsCurrency(!isCurrency)}
                                className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                              >
                                Education List
                                <IoMdArrowDropdown />
                              </button>
                              {isCurrency && (
                                <div className="absolute z-10 w-60 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
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
                                    {currencyList.map((option, index) => (
                                      <label
                                        key={option}
                                        className="flex items-center px-4 py-2 hover:bg-gray-100"
                                      >
                                        <input
                                          type="checkbox"
                                          className="mr-2"
                                        />
                                        {option}
                                      </label>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    className="text-orange-500 hover:text-orange-600 border-b border-orange-500"
                    onClick={addSection}
                  >
                    + Add Employee Selector Rule
                  </button>
                </div>
              )}
              {employeeSelection === "Specific Employees" && (
                <div className="flex gap-10 my-5">
                  <h2 className="font-medium">
                    Select Employee(s) from the List Below:
                  </h2>
                  <div className="relative">
                    <button
                      onClick={() => setIsSpecificEmp(!isSpecificEmp)}
                      className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                    >
                      Branch Location <IoMdArrowDropdown />
                    </button>
                    {isSpecificEmp && (
                      <div className="absolute z-10 w-60 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
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
                          {specificEmployeesList.map((option, index) => (
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
              )}
            </div>
            <div className="px-5">
              <p className="mb-2">
                Please select the fields within the section which you would like
                to update *
              </p>
              <div>
                {sections1.map((sec) => (
                  <div
                    key={sec.id}
                    className="grid grid-cols-3 gap-4 mb-4 border p-5 rounded-md"
                  >
                    <div>
                      <p className="font-semibold mb-2">Choose Section</p>
                      <select className="w-full border rounded px-2 py-1">
                        <option>Select</option>
                      </select>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Choose Field</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">
                        Hide if value already exists
                      </p>
                      <div className="space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio text-orange-500"
                            name={`hideIfExists-${sec.id}`} // Unique name for radio button group
                          />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio text-orange-500"
                            name={`hideIfExists-${sec.id}`} // Unique name for radio button group
                          />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Mandatory?</p>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-orange-500"
                          name={`mandatory-${sec.id}`} // Unique name for radio button group
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center mx-2">
                        <input
                          type="radio"
                          className="form-radio text-orange-500"
                          name={`mandatory-${sec.id}`} // Unique name for radio button group
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                    <div className="flex items-end">
                      <button
                        className="text-red-500 hover:text-red-600"
                        onClick={() => removeSection1(sec.id)}
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  className="text-orange-500 hover:text-orange-600 border-b border-orange-500 text-left"
                  onClick={addSection1}
                >
                  + Add Section
                </button>
              </div>
            </div>
            <div className="flex justify-between mx-5 my-5">
              <p>Show pop-up on web?</p>
              <div className="flex gap-5">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-orange-500"
                    name="sendEmail"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-orange-500"
                    name="sendEmail"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
            <div className="flex justify-between mx-5 my-5">
              <p>Do you want to send an email request to employees?</p>
              <div className="flex gap-5">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-orange-500"
                    name="sendEmail"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-orange-500"
                    name="sendEmail"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
            <div className="flex justify-center space-x-4 my-5">
              <button
                className="px-4 py-2 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() =>
                  setRequestEmployeeInformation(!requestEmployeeInformation)
                }
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                Send Request to employees
              </button>
            </div>
          </div>
        </div>
      )}
      {bulkApproved && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-56 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkApproved(!bulkApproved)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="my-5 px-5">
              {" "}
              Please select atleast one data change request
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setBulkApproved(!bulkApproved)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {bulkReject && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-56 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkReject(!bulkReject)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="my-5 px-5">
              {" "}
              Please select atleast one data change request
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setBulkReject(!bulkReject)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {bulkDelete && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-56 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkDelete(!bulkDelete)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="my-5 px-5">
              {" "}
              Please select atleast one data change request
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setBulkDelete(!bulkDelete)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {bulkSend && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-60 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkSend(!bulkSend)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="my-5 px-5">
              Are you sure you want to send reminder mail to requests having
              status as 'Pending Submission'?
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setBulkSend(!bulkSend)}
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
                Data Change Request
              </h2>
            </div>
            <div className="grid grid-cols-2 px-5 py-3">
              <div className="flex gap-6">
                <p className="text-gray-900 whitespace-nowrap">Employee Name:</p>
                <p>Karan</p>
              </div>
            </div>
            <div>
              <Table columns={columnsCompleteDetails} data={dataCompleteDetails}/>
            </div>
            <div className="grid grid-cols-2 px-5 py-3">
              <div className="grid grid-cols-2 gap-6">
                <p className="text-gray-900 whitespace-nowrap">Status:</p>
                <p>Approved</p>
              </div>
            </div>
            <div className="grid grid-cols-2 px-5 py-3">
              <div className="grid grid-cols-2 gap-6">
                <p className="text-gray-900 whitespace-nowrap">Submitted On :</p>
                <p>27-03-2024</p>
              </div>
            </div>
            <div className="grid grid-cols-2 px-5 py-3">
              <div className="grid grid-cols-2 gap-6">
                <p className="text-gray-900 whitespace-nowrap">Submitted By :</p>
                <p>Anil</p>
              </div>
            </div>
            <div className="grid grid-cols-2 px-5 py-3">
              <div className="grid grid-cols-2 gap-6">
                <p className="text-gray-900 whitespace-nowrap">Comments and History:</p>
                <div className="col-span-2">
                <p>Salome Kulangara has approved: saying</p>
                <p>27-03-2024, 13:24:28</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4 my-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setCompleteDetailsTable(!completeDetailTable)}
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

export default DataChangeRequests;
