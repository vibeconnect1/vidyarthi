import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import Table from "../../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import profile1 from "/profile1.jpg";
import { PiPlusCircle } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { LuArrowRightToLine } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import MultiSelect from "../../../ConfigurationFile/MultiSelect";
function GeneratedLetter() {
  const [page, setPage] = useState("pending");
  //filter
  const [filter, setFilter] = useState(false);
  const [letterTemplate, setLetterTemplate] = useState(false);
  const [publishedLetter, setPublishedLetter] = useState(false);
  const [status, setStatus] = useState(false);
  const [employeeStatus, setEmployeeStatus] = useState(false);
  const [signedByCompany, setSignedByCompany] = useState(false);
  const [signedByEmployee, setSignedByEmployee] = useState(false);
  const [createdBy, setCreatedBy] = useState(false);
  //action
  const [action, setAction] = useState(false);

  const [bulkApprove, setBulkApprove] = useState(false);
  const [bulkReject, setBulkReject] = useState(false);
  const [bulkCompany, setBulkCompany] = useState(false);
  const [bulkSendSignature, setBulkSendSignature] = useState(false);
  const [bulkVerifyLetters, setBulkVerifyLetters] = useState(false);
  const [bulkSendLetters, setBulkSendLetters] = useState(false);
  const [bulkPublishLetters, setBulkPublishLetters] = useState(false);
  const [bulkUnpublishLetters, setBulkUnpublishLetters] = useState(false);
  const [bulkLettersDownload, setBulkLettersDownload] = useState(false);

  const [initiateSeparation, setInitiateSeparation] = useState(false);
  const [clearanceTask, setClearanceTask] = useState(false);
  const [actionTableCloseModal, setActionTableCloseModal] = useState(false);
  const publishedLetterList = ["Select all", "Published", "UnPublished"];
  const statusList = [
    "Select all",
    " Pending Company Signatory Signature",
    " Level 1 Approval Pending",
    " Level 2 Approval Pending",
    " Pending Verification",
    " Pending Employee Signature",
  ];
  const letterTemplateList = [
    "Select all",
    "Offer Letter adarsh",
    "Resignation",
    "Offer letter",
    "Offer Letter 1",
    "Offer Letter 1 1",
    "Offer Letter 2",
    "Offer Letter 3",
    "Offer Letter 4",
    "Offer letter 1",
    "Offer Letter 3 1",
    "Termination",
    "Offer Letter adarsh 1",
    "Offer Letter adarsh 2",
  ];
  const employeeStatusList = [
    "Select all",
    "Incomplete",
    "Active",
    "Onhold",
    "Serving Notice Period",
    "Separated",
    "Unactivated",
  ];
  const signedByCompanyList = ["Select all", "Yes", "No"];
  const signedByEmployeeList = ["Select all", "Yes", "No"];
  const createdByList = ["Select all", "Karan Singh", "Vijay Yadav"];
  const pendingColumns = [
    {
      name: "Employee Name",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <img
            src={profile1}
            className="h-10 w-10 rounded-full bg-gray-100"
          ></img>
          <p>{row.employee_name}</p>
        </div>
      ),
    },
    {
      name: "Resignation Date",
      selector: (row) => row.resignation_date,
      sortable: true,
    },
    {
      name: "Last Working Date	",
      selector: (row) => row.last_working_date,
      sortable: true,
    },
    {
      name: "Separation Reason",
      selector: (row) => row.separation_reason,
      sortable: true,
    },
    {
      name: "Separation Status",
      selector: (row) => row.separation_status,
      sortable: true,
    },
    {
      name: "FnF Status	",
      selector: (row) => row.FnF_status,
      sortable: true,
    },
    {
      name: "Exit Clearance Task	Exit",
      selector: (row) => (
        <button
          className="text-yellow-500"
          onClick={() => setClearanceTask(!clearanceTask)}
        >
          {row.exit_clearance_task_exit}
        </button>
      ),
      sortable: true,
    },
    {
      name: "Exit Interview",
      selector: (row) => row.exit_interview,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <Link
            to={`/hrms/employee-directory/separation-applications/${row.id}`}
            className="border p-2"
          >
            <BsEye size={15} />
          </Link>
          <span className="border p-2 cursor-pointer text-yellow-500">
            <LuArrowRightToLine size={15} />
          </span>
          <button
            className="border p-2 cursor-pointer"
            onClick={() => setActionTableCloseModal(!actionTableCloseModal)}
          >
            <IoMdClose />
          </button>
        </div>
      ),
    },
  ];
  const pendingData = [
    {
      id: 1,
      employee_name: "Riya",
      resignation_date: "15-02-2023",
      last_working_date: "11-03-2023",
      separation_reason: "Better Opportunity-Compensation",
      separation_status: "Admin Approval Pending",
      FnF_status: "Pending",
      exit_clearance_task_exit: "0 out of 0 task",
      exit_interview: "Not Assigned",
    },
  ];
  const completedColumns = [
    {
      name: "Name",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <div>
            <img
              src={profile1}
              className="h-10 w-10 rounded-full bg-gray-100"
            ></img>
          </div>
          <div>
            <h2 className="font-medium text-base">{row.employee_name}</h2>
            <h2>{row.employee_roll}</h2>
          </div>
        </div>
      ),
    },
    {
      name: "Joining Date",
      selector: (row) => row.joining_date,
      sortable: true,
    },
    {
      name: "Onboarding Status",
      selector: (row) => row.onboarding_status,
      sortable: true,
    },
    {
      name: "Onboarding Checklist",
      selector: (row) => (
        <div className="flex items-center gap-2">
          <div className="border-2 border-green-500 h-10 w-10 rounded-full flex items-center justify-center text-green-500">
            {row.onboading_checklist_percant}
          </div>
          <span>{row.onboading_checklist}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Portal Activation",
      selector: (row) => row.portal_activation,
      sortable: true,
    },
    {
      name: "Pending Letters Awaiting Signatures",
      selector: (row) => (
        <div className="flex items-center gap-2">
          <div className="border-2 border-yellow-500 h-10 w-10 rounded-full flex items-center justify-center text-yellow-500">
            {row.pending_percent}
          </div>
          <span>{row.pending_name}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <Link
            to={`/hrms/employee-directory/onboarding-details/${row.id}`}
            className="border p-2"
          >
            <BsEye size={15} />
          </Link>
          <span className="border p-2 cursor-pointer text-yellow-500">
            <LuArrowRightToLine size={15} />
          </span>
          <button className="border p-2 cursor-pointer">
            <IoMdClose />
          </button>
        </div>
      ),
    },
  ];
  const completedData = [
    {
      id: 1,
      employee_name: "Riya",
      employee_roll: "Developer",
      joining_date: "05 Jan 2015",
      onboarding_status: "Invitation Sent",
      onboading_checklist: "Declaration Approval",
      onboading_checklist_percant: "100 %",
      portal_activation: "Not Activated",
      pending_percent: "50%",
      pending_name: "2 Out of Letters",
    },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  //add filter dropdown field
  const [addFilter, setAddFilter] = useState(false);
  const [employeeStatusFilter, setEmployeeStatusFilter] = useState(false);
  const [empStatusDropdown, setEmpStatusDropdown] = useState(false);
  const [employmentType, setEmploymentType] = useState(false);
  const [empTypeDropdown, setEmpTypeDropdown] = useState(false);
  const [empBranchLocation, setEmpBranchLocation] = useState(false);
  const [empBranchLocationDropdown, setEmpBranchLocationDropdown] =
    useState(false);
  const [empWorkLocation, setEmpWorkLocation] = useState(false);
  const [empWorkLocationDropdown, setEmpWorkLocationDropdown] = useState(false);
  const [empDepartment, setEmpDepartment] = useState(false);
  const [empDepartmentDropdown, setEmpDepartmentDropdown] = useState(false);
  const [empLeaveTemplate, setEmpLeaveTemplate] = useState(false);
  const [empLeaveTemplateDropdown, setEmpLeaveTemplateDropdown] =
    useState(false);
  const empStatusDropdownList = [
    "Select all",
    "Incomplete",
    "Active",
    "Onhold",
    "Separated",
  ];
  const empTypeDropdownList = [
    "Select all",
    "Fulltime",
    "Intern",
    "Consultant",
    "Contract",
  ];
  const BranchLocationDropdownList = [
    "Select all",
    "Mumbai; Maharashtra",
    "Pune; Maharashtra",
    "Delhi NCR; Delhi",
    "Noida; Delhi",
    "Gurgoan ; Delhi",
  ];
  const workLocationDropdownList = [
    "Select all",
    "Mumbai; Maharashtra",
    "Pune; Maharashtra",
    "Delhi NCR; Delhi",
    "Noida; Delhi",
    "Gurgoan ; Delhi",
  ];
  const empDepartmentDropdownList = [
    "Select all",
    "Finance",
    "HR",
    "HR",
    "L machine",
    "L packing",
    "Marketing",
    "Operations",
    "Sales",
    "Unassigned",
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
            <h1 className="text-3xl font-bold">Letter Template Creation</h1>
          </div>
        </header>
        <div className="grid grid-cols-12 gap-5 mx-5 ml-24">
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
                    Pending Letters
                  </h2>
                  <h2
                    className={`p-1 ${
                      page === "completed" &&
                      "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                    } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                    onClick={() => setPage("completed")}
                  >
                    Completed Letters
                  </h2>
                </div>
              </div>
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
                  {filter && (
                    <div className="absolute mt-2 right-6 bg-white rounded-lg shadow-lg w-3/5 py-5 z-10">
                      <div className="grid grid-cols-3 gap-5 px-5 my-5">
                        <div className="relative w-64">
                          <button
                            onClick={() => setLetterTemplate(!letterTemplate)}
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Letter Template
                            <IoMdArrowDropdown className="text-gray-600" />
                          </button>
                          {letterTemplate && (
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
                                {letterTemplateList.map((option, index) => (
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
                        <div className="relative w-64">
                          <button
                            onClick={() => setPublishedLetter(!publishedLetter)}
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Published/Unpublished Letter
                            <IoMdArrowDropdown className="text-gray-600" />
                          </button>
                          {publishedLetter && (
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
                                {publishedLetterList.map((option, index) => (
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
                        <div className="relative w-64">
                          <button
                            onClick={() => setStatus(!status)}
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Status
                            <IoMdArrowDropdown className="text-gray-600" />
                          </button>
                          {status && (
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
                                {statusList.map((option, index) => (
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
                        <div className="relative w-64">
                          <button
                            onClick={() => setEmployeeStatus(!employeeStatus)}
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Employee Status
                            <IoMdArrowDropdown className="text-gray-600" />
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
                        <div className="relative w-64">
                          <button
                            onClick={() => setSignedByCompany(!signedByCompany)}
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Signed by Company
                            <IoMdArrowDropdown className="text-gray-600" />
                          </button>
                          {signedByCompany && (
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
                                {signedByCompanyList.map((option, index) => (
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
                        <div className="relative w-64">
                          <button
                            onClick={() =>
                              setSignedByEmployee(!signedByEmployee)
                            }
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Signed By Employee
                            <IoMdArrowDropdown className="text-gray-600" />
                          </button>
                          {signedByEmployee && (
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
                                {signedByEmployeeList.map((option, index) => (
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
                        <div className="relative w-64">
                          <button
                            onClick={() => setCreatedBy(!createdBy)}
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Created By
                            <IoMdArrowDropdown className="text-gray-600" />
                          </button>
                          {createdBy && (
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
                                {createdByList.map((option, index) => (
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
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="Date of Creation(From)"
                          ></input>
                        </div>
                        <div>
                          <input
                            type="text"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="Date of Creation(To)"
                          ></input>
                        </div>
                      </div>
                      <div className="flex gap-2 justify-end mx-5">
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
                    <div className="absolute right-0 mt-1 mr-5 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-10 py-5">
                      <div className="py-1 flex flex-col ">
                        <button
                          className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-left hover:text-red-500"
                          onClick={() => setBulkApprove(!bulkApprove)}
                        >
                          Bulk Approve Letters
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() => setBulkReject(!bulkReject)}
                        >
                          Bulk Reject Letters
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() => setBulkCompany(!bulkCompany)}
                        >
                          Bulk Company Signatory Signature
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() =>
                            setBulkSendSignature(!bulkSendSignature)
                          }
                        >
                          Bulk Send for Signature From Employee
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() =>
                            setBulkVerifyLetters(!bulkVerifyLetters)
                          }
                        >
                          Bulk Verify Letters
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() => setBulkSendLetters(!bulkSendLetters)}
                        >
                          Bulk Send Letters To Employees
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() =>
                            setBulkPublishLetters(!bulkPublishLetters)
                          }
                        >
                          Bulk Publish Letters To Employees
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() =>
                            setBulkUnpublishLetters(!bulkUnpublishLetters)
                          }
                        >
                          Bulk Unpublish Letters To Employees
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() =>
                            setBulkLettersDownload(!bulkLettersDownload)
                          }
                        >
                          Bulk Letters Download
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="bg-black text-white font-semibold py-2 px-4 rounded w-full flex items-center whitespace-nowrap gap-1"
                    onClick={() => setInitiateSeparation(!initiateSeparation)}
                  >
                    <PiPlusCircle size={20} />
                    Generate Letter
                  </button>
                </div>
              </div>
            </div>
            {page === "pending" && (
              <div className="my-2">
                <Table columns={pendingColumns} data={pendingData} />
              </div>
            )}
            {page === "completed" && (
              <div className="my-2">
                <Table columns={completedColumns} data={completedData} />
              </div>
            )}
          </div>
        </div>
      </div>
      {initiateSeparation && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96 h-60 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setInitiateSeparation(!initiateSeparation)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Initiate Separation
              </h2>
            </div>
            <div className="px-5 mb-10 mt-5 ">
              <div>
                <select
                  name=""
                  id=""
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                >
                  <option value="">Please Select Employee</option>
                  <option value="">Rahul Kumar</option>
                  <option value="">Vinay Singh</option>
                  <option value="">Ankit Pal</option>
                  <option value="">Ravindran Singh</option>
                  <option value="">Vishal Sharma</option>
                  <option value="">Mayur Gupta</option>
                  <option value="">Megha Tiwari</option>
                  <option value="">vinay varma</option>
                  <option value="">Raj Kishan</option>
                  <option value="">Ajay More</option>
                  <option value="">Nish Kashyap</option>
                  <option value="">Nilesh Singh</option>
                  <option value="">Amar Kumar</option>
                  <option value="">Neha Joshi</option>
                  <option value="">Ashok Singh</option>
                  <option value="">Reshama Vijay</option>
                  <option value="">Hanuman Gupta</option>
                  <option value="">Archana Arora</option>
                  <option value="">Juhi Panchal</option>
                  <option value="">Sania Khan</option>
                  <option value="">Pooja Patel</option>
                  <option value="">Angad Chaturvedi</option>
                  <option value="">Shivani Yadav</option>
                  <option value="">Kalpak Kartik</option>
                  <option value="">Kartiki Sharma</option>
                  <option value="">Aman Shaikh</option>
                  <option value="">Rishab Mali</option>
                  <option value="">Vinay Sonara</option>
                  <option value="">Roshani Kumari</option>
                  <option value="">Yogesh Mishra</option>
                  <option value="">Pooja Puniya</option>
                  <option value="">hdgd fgh - J00018</option>
                  <option value="">Karuna kapoor</option>
                  <option value="">Nishant Bassi</option>
                  <option value="">Rudra Karan</option>
                  <option value="">Karan Singh</option>
                  <option value="">Bharat Gupta</option>
                  <option value="">Rohan Nishad</option>
                  <option value="">Saurabh Patil</option>
                  <option value="">Chetana More</option>
                  <option value="">Vipin Dubey</option>
                  <option value="">Rani Trivedi - 00123</option>
                  <option value="">Kartik Pal</option>
                  <option value="">Maya Kapur</option>
                  <option value="">Monalish Yadav</option>
                  <option value="">Sonu Varma</option>
                  <option value="">Monu Kumar</option>
                  <option value="">Prakash Jadhav</option>
                  <option value="">Nilesh Prajapati</option>
                  <option value="">Ramandip Singh</option>
                  <option value="">Swapnil Singh</option>
                  <option value="">Sanjay Yadav</option>
                  <option value="">Sanjay Chaurasia</option>
                  <option value="">Rupesh Vishavkarma</option>
                  <option value="">Anil Singh</option>
                  <option value="">Kanhaiya Kumar</option>
                  <option value="">Girish Bharati</option>
                  <option value="">Ankit Raj</option>
                  <option value="">Gaurav Bharati</option>
                  <option value="">Vaishnavi Kumar</option>
                  <option value="">Prachiti Panchal</option>
                  <option value="">Sanjeev Lad</option>
                  <option value="">Madhura Lad</option>
                  <option value="">Nidhi Gupta</option>
                  <option value="">Ruhi Hussain</option>
                  <option value="">Priya Gupta</option>
                  <option value="">Vinayak Kumar</option>
                  <option value="">Abhijit nishad</option>
                  <option value="">Leena Nishad</option>
                  <option value="">Kushum Singh</option>
                  <option value="">Bhupesh Sahu</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setInitiateSeparation(!initiateSeparation)}
                className="font-semibold py-1 px-4 rounded border border-gray-500 text-gray-500 mt-2 flex items-center gap-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {clearanceTask && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96 h-60 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setClearanceTask(!clearanceTask)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Task Status
              </h2>
            </div>
            <div className="px-5 mb-10 mt-5 ">
              <div className="flex items-center gap-4">
                <img
                  src={profile1}
                  className="h-10 w-10 rounded-full bg-gray-100"
                ></img>
                <div>
                  <p className="font-medium">Gautam Singh</p>
                  <p className="text-sm text-gray-800">0/0 Pending</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setClearanceTask(!clearanceTask)}
                className="font-semibold py-1 px-4 rounded border border-gray-500 text-gray-500 mt-2 flex items-center gap-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {actionTableCloseModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96 h-66 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setActionTableCloseModal(!actionTableCloseModal)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Are you sure?
              </h2>
            </div>
            <div className="px-5 mt-3 ">
              <p>Do you really want to reject this Separation?</p>
              <textarea
                id=""
                rows={2}
                placeholder="Approver's comment"
                className="border-b border-gray-500 focus:outline-none my-3 w-full"
              ></textarea>
            </div>
            <div className="flex justify-center gap-2 my-2">
              <button
                onClick={() => setActionTableCloseModal(!actionTableCloseModal)}
                className="font-semibold py-1 px-4 rounded border border-gray-500 text-gray-500 mt-2 flex items-center gap-2"
              >
                Cancel
              </button>
              <button className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {bulkApprove && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-56 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkApprove(!bulkApprove)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="mt-6 px-5">
              Please select atleast one employee letter.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setBulkApprove(!bulkApprove)}
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
            <p className="mt-6 px-5">
              Please select atleast one employee letter.
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
      {bulkCompany && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-56 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkCompany(!bulkCompany)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="mt-6 px-5">
              Please select atleast one employee letter.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setBulkCompany(!bulkCompany)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {bulkSendSignature && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-56 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkSendSignature(!bulkSendSignature)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="mt-6 px-5">
              Please select atleast one employee letter.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setBulkSendSignature(!bulkSendSignature)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {bulkVerifyLetters && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-56 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkVerifyLetters(!bulkVerifyLetters)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="mt-6 px-5">
              Please select atleast one employee letter.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setBulkVerifyLetters(!bulkVerifyLetters)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {bulkSendLetters && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-56 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkSendLetters(!bulkSendLetters)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="mt-6 px-5">
              Please select atleast one employee letter.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setBulkSendLetters(!bulkSendLetters)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {bulkPublishLetters && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-56 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkPublishLetters(!bulkPublishLetters)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="mt-6 px-5">
              Please select atleast one employee letter.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setBulkPublishLetters(!bulkPublishLetters)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {bulkUnpublishLetters && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 h-56 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkUnpublishLetters(!bulkUnpublishLetters)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Error
              </h2>
            </div>
            <p className="mt-6 px-5">
              Please select atleast one employee letter.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setBulkUnpublishLetters(!bulkUnpublishLetters)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {bulkLettersDownload && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 max-h-screen">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkLettersDownload(!bulkLettersDownload)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Generate Bulk Letters Download
              </h2>
            </div>
            <div className="grid grid-cols-1 p-5 space-y-5 overflow-y-auto h-96">
              <div>
                <input
                  type="text"
                  id=""
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Select Start Date"
                />
              </div>
              <div>
                <input
                  type="text"
                  id=""
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Select End Date"
                />
              </div>
              <div className="mb-4">
                <select
                  id="selectOption"
                  className="border-b border-gray-500 focus:outline-none w-full"
                >
                  <option value="">Select Letter Templates </option>
                  <option value="">
                    Offer Letter Format (Offer Letter Format)
                  </option>
                  <option value="">Appraisal Letter (Appraisal Letter)</option>
                  <option value="">
                    Letter of Intent for apppointment (Offer Letter)
                  </option>
                  <option value="">
                    Offer Letter Format 1 (Offer Letter Format 1)
                  </option>
                  <option value="">
                    Letter of Appointment for employee post joining 1
                    (Appointment Letter 1)
                  </option>
                  <option value="">
                    Letter of Appointment for employee post joining 2
                    (Appointment Letter 1)
                  </option>
                  <option value="">
                    Offer Letter Format 2 (Offer Letter Format 2)
                  </option>
                  <option value="">
                    Offer Letter Format 3 (Offer Letter Format 3)
                  </option>
                  <option value="">
                    Offer Letter Format 4 (Offer Letter Format 4)
                  </option>
                  <option value="">
                    Offer Letter Format 5 (Offer Letter Format 5)
                  </option>
                  <option value="">
                    Offer Letter Format 6 (Offer Letter Format 6)
                  </option>
                  <option value="">
                    Offer Letter Format 7 (Offer Letter Format 7)
                  </option>
                  <option value="">
                    Offer Letter Format 8 (Offer Letter Format 8)
                  </option>
                  <option value="">
                    Offer Letter Format 9 (Offer Letter Format 9)
                  </option>
                  <option value="">
                    Offer Letter Format 10 (Offer Letter Format 10)
                  </option>
                  <option value="">
                    Offer Letter Format 11 (Offer Letter Format 11)
                  </option>
                  <option value="">
                    Offer Letter Format 12 (Offer Letter Format 12)
                  </option>
                  <option value="">
                    Offer Letter Format 13 (Offer Letter Format 13)
                  </option>
                  <option value="">
                    Offer Letter Format 14 (Offer Letter Format 14)
                  </option>
                  <option value="">
                    Offer Letter Format 15 (Offer Letter Format 15)
                  </option>
                  <option value="">
                    Offer Letter Format 16 (Offer Letter Format 16)
                  </option>
                </select>
              </div>
              <div>
                <h2 className="text-base text-gray-700 mb-4">
                  Employee Selection
                </h2>
                <div className="flex gap-5">
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      id="allEmployees"
                      name="options"
                      value="allEmployees"
                      checked={selectedOption === "allEmployees"}
                      onChange={handleOptionChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="allEmployees"
                      className="ml-2 text-gray-700"
                    >
                      All Employees
                    </label>
                  </div>

                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      id="someEmployees"
                      name="options"
                      value="someEmployees"
                      checked={selectedOption === "someEmployees"}
                      onChange={handleOptionChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="someEmployees"
                      className="ml-2 text-gray-700"
                    >
                      Some Employees
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      id="specificEmployees"
                      name="options"
                      value="specificEmployees"
                      checked={selectedOption === "specificEmployees"}
                      onChange={handleOptionChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="specificEmployees"
                      className="ml-2 text-gray-700"
                    >
                      Specific Employees
                    </label>
                  </div>
                </div>
                {selectedOption === "someEmployees" && (
                  <div>
                    <div className="grid grid-cols-5 my-5">
                      {employeeStatusFilter && (
                        <div className="relative w-48">
                          <button
                            onClick={() =>
                              setEmpStatusDropdown(!empStatusDropdown)
                            }
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Employee Status
                            <IoMdArrowDropdown className="text-gray-600" />
                          </button>
                          {empStatusDropdown && (
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
                                {empStatusDropdownList.map((option, index) => (
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
                      )}
                      {employmentType && (
                        <div className="relative w-48">
                          <button
                            onClick={() => setEmpTypeDropdown(!empTypeDropdown)}
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Employment Type
                            <IoMdArrowDropdown className="text-gray-600" />
                          </button>
                          {empTypeDropdown && (
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
                                {empTypeDropdownList.map((option, index) => (
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
                      )}
                      {empBranchLocation && (
                        <div className="relative w-48">
                          <button
                            onClick={() =>
                              setEmpBranchLocationDropdown(
                                !empBranchLocationDropdown
                              )
                            }
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Branch Location
                            <IoMdArrowDropdown className="text-gray-600" />
                          </button>
                          {empBranchLocationDropdown && (
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
                                {BranchLocationDropdownList.map(
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
                      )}
                      {empWorkLocation && (
                        <div className="relative w-48">
                          <button
                            onClick={() =>
                              setEmpWorkLocationDropdown(
                                !empWorkLocationDropdown
                              )
                            }
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Work Location
                            <IoMdArrowDropdown className="text-gray-600" />
                          </button>
                          {empWorkLocationDropdown && (
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
                                {workLocationDropdownList.map(
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
                      )}
                      {empDepartment && (
                        <div className="relative w-48">
                          <button
                            onClick={() =>
                              setEmpDepartmentDropdown(!empDepartmentDropdown)
                            }
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Employee Department
                            <IoMdArrowDropdown className="text-gray-600" />
                          </button>
                          {empDepartmentDropdown && (
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
                                {empDepartmentDropdownList.map(
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
                      )}
                      {empLeaveTemplate && (
                        <div className="relative w-48">
                          <button
                            onClick={() =>
                              setEmpLeaveTemplateDropdown(
                                !empLeaveTemplateDropdown
                              )
                            }
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Leave Template
                            <IoMdArrowDropdown className="text-gray-600" />
                          </button>
                          {empLeaveTemplateDropdown && (
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
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <button
                      className="flex items-center gap-2 bg-gray-400 text-white rounded md py-1 px-5"
                      onClick={() => setAddFilter(!addFilter)}
                    >
                      <PiPlusCircle size={20} />
                      Add Filter
                    </button>
                    {addFilter && (
                      <div className="relative">
                        <div className="absolute z-10 w-56 h-48 overflow-y-auto mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                          <ul class="dropdown-menu space-y-2 py-2 px-5 ">
                            <li
                              className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                              onClick={() =>
                                setEmployeeStatusFilter(!employeeStatusFilter)
                              }
                            >
                              Employee Status
                            </li>
                            <li
                              className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                              onClick={() => setEmploymentType(!employmentType)}
                            >
                              Employment Type
                            </li>
                            <li
                              className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                              onClick={() =>
                                setEmpBranchLocation(!empBranchLocation)
                              }
                            >
                              Branch Location
                            </li>
                            <li
                              className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                              onClick={() =>
                                setEmpWorkLocation(!empWorkLocation)
                              }
                            >
                              Work Location
                            </li>
                            <li
                              className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                              onClick={() => setEmpDepartment(!empDepartment)}
                            >
                              Employee Department
                            </li>
                            <li
                              className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                              onClick={() =>
                                setEmpLeaveTemplate(!empLeaveTemplate)
                              }
                            >
                              Leave Template
                            </li>
                            <li className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                              Attendance Template
                            </li>
                            <li className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                              Leave Supervisor
                            </li>
                            <li className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                              Attendance Supervisor
                            </li>
                            <li className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                              Expense Template
                            </li>
                            <li className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                              Expense Supervisor
                            </li>
                            <li className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                              Reporting Supervisor
                            </li>
                            <li className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                              Bank Name
                            </li>
                            <li className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                              CTC Template
                            </li>
                            <li className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                              Old_Department
                            </li>
                            <li className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                              Blood Group
                            </li>
                            <li className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                              Education Level
                            </li>
                            <li className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                              Currency
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center space-x-4 my-5">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setBulkLettersDownload(!bulkLettersDownload)}
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

export default GeneratedLetter;
