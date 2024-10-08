import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import Table from "../../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import ReactApexChart from "react-apexcharts";
import profile1 from "/profile1.jpg";
import { FaCheck, FaExclamation } from "react-icons/fa";
import { PiPlusCircle } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { LuArrowRightToLine } from "react-icons/lu";
function SeparationRequest() {
  const [page, setPage] = useState("pending");
  const [filter, setFilter] = useState(false);
  const [branchLocation, setBranchLocation] = useState(false);
  const [separationStatus, setSeparationStatus] = useState(false);
  const [separationReason, setSeparationReason] = useState(false);
  const [initiateSeparation, setInitiateSeparation] = useState(false);
  const [clearanceTask, setClearanceTask] = useState(false);
  const [actionTableCloseModal, setActionTableCloseModal] = useState(false);
  const separationReasonList = [
    {
      name: "Absconding",
      optionName: [
        "Better Opportunity - Compensation",
        "Better Opportunity - Job Role",
        "Better Opportunity - Other",
        "Company Issue - Culture",
        "Company Issue - Other",
        "Company Issue - Reporting Supervisor",
        "Personal Reason - Family",
        "Personal Reason - Health",
        "Personal Reason - Higher Education",
        "Personal Reason - Other",
        "Personal Reason - Relocation",
        "Personal Reason - Work Commute",
      ],
    },
    {
      name: "Contract End Reason For Not Renewing",
      optionName: [
        "Company Layoff",
        "Ethical Violation",
        "Job Performance",
        "Project Completion",
      ],
    },
    {
      name: "Death",
      optionName: ["Job Related Death", "Non-Job Related Death"],
    },
    {
      name: "Disability",
      optionName: ["Job Related Disability", "Non-Job Related Disability"],
    },
    {
      name: "Resignation",
      optionName: [
        "Better Opportunity - Compensation",
        "Better Opportunity - Job Role",
        "Better Opportunity - Other",
        "Company Issue - Culture",
        "Company Issue - Other",
        "Company Issue - Reporting Supervisor",
        "Personal Reason - Family",
        "Personal Reason - Health",
        "Personal Reason - Higher Education",
        "Personal Reason - Other",
        "Personal Reason - Relocation",
        "Personal Reason - Work Commute",
      ],
    },
    {
      name: "Retirement",
      optionName: [
        "Company Voluntary Retirement Scheme",
        "Early Retirement",
        "Reach Company Retirement Age",
      ],
    },
    {
      name: "Termination",
      optionName: [
        "Company Layoff",
        "Ethical Violation",
        "Job Performance",
        "Other",
        "Redundancy of Job role",
      ],
    },
    {
      name: "Transfer",
      optionName: [
        "Transfer Within Group Entity",
        "Transfer to Other Location",
      ],
    },
  ];
  const branchLocationList = [
    "Select all",
    "Mumbai; Mumbai; Maharashtra",
    "Test 1 ; Pune; Maharashtra",
    "Delhi; Delhi NCR; Delhi",
    "Asian Paints Delhi; Noida; Delhi",
    "Asian Paints Gurgoan; Gurgoan ; Delhi",
  ];
  const separationStatusList = [
    "Select all",
    "Level 1 Approval Pending",
    "Level 2 Approval Pending",
    "Admin Approval Pending",
  ];
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

  const joineesTrendOptions = {
    chart: {
      type: "line",
      height: 330,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["May24", "Jun24", "Jul24", "Aug24", "Sep24", "Oct24"],
      labels: {
        style: {
          colors: "#333",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#333",
          fontSize: "12px",
        },
      },
      title: {
        text: "Employee Count",
        style: {
          fontSize: "12px",
          fontWeight: "bold",
          color: "#333",
        },
      },
    },
    grid: {
      borderColor: "#e7e7e7",
    },
    dataLabels: {
      enabled: false,
    },
  };

  const seriesJoineesTrend = [
    {
      name: "Employee Count",
      data: [2, 1, 0, 1.5, 1, 2],
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
            <h1 className="text-3xl font-bold">Separation Applications</h1>
          </div>
          <p className="mx-2 my-2">
            Employees who have requested for separation from the organisation
            are located here.
          </p>
        </header>
        <div className="grid grid-cols-12 gap-5 mx-5 ml-24">
          <div className="col-span-12 my-5">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-4 p-4 bg-white rounded-lg shadow-md">
                <div className="border-b pb-2 mb-5">
                  <h2 className="font-medium text-lg">
                    Total Separation Requests
                  </h2>
                </div>
                <div className="grid grid-cols-2 divide-gray-200 h-[80%] divide-x-2">
                  <div className="flex justify-center px-5">
                    <div className="my-5 space-y-3">
                      <div className="bg-orange-600 rounded-full h-10 w-10 flex justify-center items-center p-3 mx-10">
                        <FaExclamation className="text-white" />
                      </div>
                      <h2 className="text-orange-600 text-3xl flex justify-center">
                        2
                      </h2>
                      <p className="text-gray-800 flex justify-center">
                        Pending Request
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="my-5 space-y-3">
                      <div className="bg-green-600 rounded-full h-10 w-10 flex justify-center items-center p-3 mx-10">
                        <FaCheck className="text-white" />
                      </div>
                      <h2 className="text-green-600 text-3xl flex justify-center">
                        0
                      </h2>
                      <p className="text-gray-800 flex justify-center">
                        Approved Request
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 p-4 bg-white rounded-lg shadow-md">
                <div className="border-b pb-2 mb-5">
                  <h2 className="font-medium">Separated Employees Count</h2>
                </div>
                <ReactApexChart
                  options={joineesTrendOptions}
                  series={seriesJoineesTrend}
                  type="line"
                  height={230}
                />
              </div>
              <div className="col-span-4 p-4 bg-white rounded-lg shadow-md">
                <div className="border-b pb-2 mb-5">
                  <h2 className="font-medium">
                    Top Resignation Reasons over last 6 months
                  </h2>
                </div>
              </div>
            </div>
          </div>
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
                    Pending Request
                  </h2>
                  <h2
                    className={`p-1 ${
                      page === "completed" &&
                      "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                    } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                    onClick={() => setPage("completed")}
                  >
                    Completed Request
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
                    <div className="absolute mt-2 right-0 bg-white rounded-lg shadow-lg w-3/5 py-5 z-10">
                      <div className="grid grid-cols-3 gap-5 px-5 my-5">
                        <button className="col-span-3 flex justify-end text-red-500">
                          {" "}
                          Clear Filter
                        </button>
                        <div className="relative w-64">
                          <button
                            onClick={() =>
                              setSeparationReason(!separationReason)
                            }
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Separation Reason
                            <IoMdArrowDropdown className="text-gray-600" />
                          </button>
                          {separationReason && (
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
                                {separationReasonList.map((option) => (
                                  <div key={option.name}>
                                    <h2 className="font-medium mx-3">
                                      {option.name}
                                    </h2>
                                    <ul>
                                      {option.optionName.map(
                                        (element, index) => (
                                          <div
                                            key={index}
                                            className="mx-2 my-2"
                                          >
                                            <input
                                              type="checkbox"
                                              className="mr-2"
                                            />
                                            {element}
                                          </div>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="relative">
                          <button
                            onClick={() =>
                              setSeparationStatus(!separationStatus)
                            }
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Separation Status
                            <IoMdArrowDropdown />
                          </button>

                          {separationStatus && (
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
                                {separationStatusList.map((option, index) => (
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
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="bg-black text-white font-semibold py-2 px-4 rounded w-full flex items-center whitespace-nowrap gap-1"
                    onClick={() => setInitiateSeparation(!initiateSeparation)}
                  >
                    <PiPlusCircle size={20} /> Initiate Separation
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
              <button
                className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SeparationRequest;
