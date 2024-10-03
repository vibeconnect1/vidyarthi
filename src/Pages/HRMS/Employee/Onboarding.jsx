import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import Table from "../../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdArrowDropdown } from "react-icons/io";
import ReactApexChart from "react-apexcharts";
import profile1 from "/profile1.jpg";
import { FaUserPlus } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import Chart from "react-apexcharts";
import { PiPlusCircle } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
function Onboarding() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState("pending");
  const [filter, setFilter] = useState(false);
  const [branchLocation, setBranchLocation] = useState(false);
  const [onboardStatus, setOnboardStatus] = useState(false);
  const [department, setDepartment] = useState(false);
  const [joiningMonth, setJoiningMonth] = useState(false);
  const branchLocationList = [
    "Select all",
    "Mumbai; Mumbai; Maharashtra",
    "Test 1 ; Pune; Maharashtra",
    "Delhi; Delhi NCR; Delhi",
    "Asian Paints Delhi; Noida; Delhi",
    "Asian Paints Gurgoan; Gurgoan ; Delhi",
  ];
  const onboardStatusList = [
    "Select all",
    "Incomplete",
    "Active",
    "Onhold",
    "Serving Notice Period",
    "Separated",
    "Unactivated",
  ];
  const departmentList = [
    "Select all",
    "Finance",
    "HR",
    "L machine",
    "L packing",
    "Marketing",
    "Operations",
  ];
  const joiningMonthList = [
    "Select all",
    "Jan 2024",
    "Feb 2024",
    "Mar 2024",
    "Apr 2024",
    "May 2024",
    "Jun 2024",
    "Jul 2024",
    "Aug 2024",
    "Sep 2024",
    "Oct 2024",
    "Nov 2024",
    "Dec 2024",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const pendingColumns = [
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
          <span className="border p-2 cursor-pointer">
            <FaUserPlus size={15} />
          </span>
          <button
            className="border p-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <HiDotsVertical />
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 2
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 3
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
      ),
    },
  ];
  const pendingData = [
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
          <span className="border p-2 cursor-pointer">
            <FaUserPlus size={15} />
          </span>
          <button
            className="border p-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <HiDotsVertical />
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 2
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 3
                  </li>
                </ul>
              </div>
            )}
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
      data: [2, 1, 0, 1.5, 1, 2], // Sample data, replace with actual
    },
  ];
  const [selfOnboarding] = useState({
    series: [16, 2, 2, 0],
    options: {
      chart: {
        type: "donut",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80%",
            labels: {
              show: true,
              total: {
                show: true,
                label: "Total",
              },
            },
          },
        },
      },
      labels: [
        "Invitation Sent(16)",
        "Pending Approval(2)",
        "Not Invited(2)",
        "Rejected(0)",
      ],
      legend: {
        show: true,
        position: "bottom",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  const [portalActivation] = useState({
    series: [19, 58],
    options: {
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80%",
            labels: {
              show: true,
              total: {
                show: true,
                label: "Total",
              },
            },
          },
        },
      },
      labels: ["Not Activated(19)", "Activated(58)"],
      legend: {
        show: true,
        position: "bottom",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">Onboarding</h1>
          </div>
        </header>
        <div className="grid grid-cols-12 gap-5 mx-5 ml-24">
          <div className="col-span-12 my-5">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-4 p-4 bg-white rounded-lg shadow-md">
                <div className="border-b pb-2 mb-5">
                  <h2 className="font-medium">New Joinees Trend</h2>
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
                  <h2 className="font-medium">Self Onboarding Status</h2>
                </div>
                <Chart
                  options={selfOnboarding.options}
                  series={selfOnboarding.series}
                  type="donut"
                  width="380"
                />
              </div>
              <div className="col-span-4 p-4 bg-white rounded-lg shadow-md">
                <div className="border-b pb-2 mb-5">
                  <h2 className="font-medium">Portal Activation</h2>
                </div>
                <Chart
                  options={portalActivation.options}
                  series={portalActivation.series}
                  type="donut"
                  width="380"
                />
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
                    Pending New Hires
                  </h2>
                  <h2
                    className={`p-1 ${
                      page === "completed" &&
                      "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                    } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                    onClick={() => setPage("completed")}
                  >
                    Completed New Hires
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
                </div>
                {filter && (
                <div className="fixed bg-white rounded-lg shadow-lg w-3/5 py-5 z-10">
                  <div className="grid grid-cols-3 gap-5 px-5 my-5">
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
                    <div className="relative">
                      <button
                        onClick={() => setOnboardStatus(!onboardStatus)}
                        className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                      >
                        Branch Location <IoMdArrowDropdown />
                      </button>
                      {onboardStatus && (
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
                            {onboardStatusList.map((option) => (
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
                        placeholder="Start Date"
                        className="border-b border-gray-500 focus:outline-none w-full"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="End Date"
                        className="border-b border-gray-500 focus:outline-none w-full"
                      />
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => setDepartment(!department)}
                        className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                      >
                        Employee Department <IoMdArrowDropdown />
                      </button>

                      {department && (
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
                            {departmentList.map((option, index) => (
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
                        onClick={() => setJoiningMonth(!joiningMonth)}
                        className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                      >
                        Employee Status <IoMdArrowDropdown />
                      </button>
                      {joiningMonth && (
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
                            {joiningMonthList.map((option) => (
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
                    <button className="border border-gray-500 rounded-md text-black py-1 px-4">
                      Clear
                    </button>
                    <button className="bg-gray-500 text-white py-1 px-4 rounded-md ">
                      Apply
                    </button>
                  </div>
                </div>
              )}
                <div>
                  <button className="bg-black text-white font-semibold py-2 px-4 rounded w-full flex items-center whitespace-nowrap gap-1">
                    <PiPlusCircle size={20} /> Add Employee
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
    </div>
  );
}

export default Onboarding;
