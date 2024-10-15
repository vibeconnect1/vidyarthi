import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import filter from "/filter.png";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { FilterForm } from "../../../ConfigurationFile/FilterForm";
function DeviceRegistrationRequest() {
  const [action, setAction] = useState(false);
  const [bulkApprove, setBulkApprove] = useState(false);
  const [bulkReject, setBulkReject] = useState(false)
  const [page, setPage] = useState("pending");
  const [filterDropdown, setFilterDropdown] = useState(false);
  const supervisorList = ["Karan", "Rohit", " Sonu"];
  const branchLocationList = [
    "Mumbai; Mumbai; Maharashtra",
    "Test 1 ; Pune; Maharashtra",
    "Delhi; Delhi NCR; Delhi",
    "Asian Paints Delhi; Noida; Delhi",
    "Asian Paints Gurgoan; Gurgoan ; Delhi",
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

  const employeeStatusList = [
    " Incomplete",
    " Active",
    " Onhold",
    " Terminated",
  ];

  const joiningMonthList = [
    "December-2024",
    "November-2024",
    "October-2024",
    "September-2024",
    "August-2024",
    "July-2024",
    "June-2024",
    "May-2024",
    "April-2024",
    "March-2024",
    "February-2024",
    "January-2024",
    "December-2023",
    "November-2023",
    "October-2023",
  ];
  const attendanceTemplateList = [
    "Corporate",
    "Finance Employees",
    "Marketing Employees",
    "Accounting Department",
    "Grabbitempire Attendance",
    "Xeon",
    "IT Employees",
    "HR Employees",
    "Basic policy",
  ];
  const pendingColumns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Device Ids",
      selector: (row) => row.device_Ids,
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
          <button className="border p-2 cursor-pointer text-yellow-500">
            <FaCheck size={15} />
          </button>
          <button className="border p-2">
            <IoCloseSharp size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <BsEye />
          </button>
        </div>
      ),
    },
  ];
  const pendingData = [
    {
      id: 1,
      employee_name: "Karan",
      device_Ids: "861e2fce0ba2fe63",
      status: "Approval Pending",
    },
  ];
  const completedColumns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Device Ids",
      selector: (row) => row.device_Ids,
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
          <button className="border p-2 cursor-pointer">
            <BsEye />
          </button>
        </div>
      ),
    },
  ];
  const completedData = [
    {
      id: 1,
      employee_name: "Karan",
      device_Ids: "861e2fce0ba2fe63",
      status: "Approval Pending",
    },
  ];
  const deviceAttachedColumns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Device Ids",
      selector: (row) => row.device_Ids,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <div className="flex items-center">
    //       <button className="border p-2 cursor-pointer">
    //         <BsEye />
    //       </button>
    //     </div>
    //   ),
    // },
  ];
  const deviceAttachedData = [
    {
      id: 1,
      employee_name: "Karan",
      device_Ids: "",
      status: "",
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
            <h1 className="text-3xl font-bold">Device Registration Request</h1>
          </div>
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
                    Pending
                  </h2>
                  <h2
                    className={`p-1 ${
                      page === "completed" &&
                      "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                    } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                    onClick={() => setPage("completed")}
                  >
                    Completed
                  </h2>
                  <h2
                    className={`p-1 ${
                      page === "NoDeviceAttached" &&
                      "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                    } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                    onClick={() => setPage("NoDeviceAttached")}
                  >
                    No Device Attached
                  </h2>
                </div>
              </div>
              <div className="md:flex justify-end gap-2 mb-1">
                <div>
                  <input
                    type="text"
                    placeholder="Search by Employee Name or Code"
                    className="border border-gray-500 py-2 px-2 text-black rounded-xl w-full  md:w-96"
                  />
                </div>
                <div className="relative">
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
                  <div className="absolute mt-12 right-32 bg-white rounded-md z-20 border-2 w-[810px] p-5">
                    <div className="grid grid-cols-3 gap-8 pt-5">
                      <FilterForm
                        label="Attendance Template"
                        options={attendanceTemplateList}
                      />
                      <FilterForm label="Supervisor" options={supervisorList} />
                      <FilterForm
                        label="Branch Location"
                        options={branchLocationList}
                      />
                      <FilterForm
                        label="Joining Month"
                        options={joiningMonthList}
                      />
                      <FilterForm
                        label="Employee Status"
                        options={employeeStatusList}
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
                <div className="relative">
                  <button
                    className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full"
                    onClick={() => setAction(!action)}
                  >
                    <span>Actions</span>
                    <FaChevronDown />
                  </button>
                  {action && (
                    <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10 py-2">
                      <div className="py-1 flex flex-col ">
                        <button className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-left hover:text-red-500" onClick={() =>setBulkApprove(!bulkApprove)}>
                          Bulk Approve
                        </button>
                        <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500" onClick={() =>setBulkReject(!bulkReject)}>
                          Bulk Reject
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
            {page === "NoDeviceAttached" && (
              <div className="my-2">
                <Table
                  columns={deviceAttachedColumns}
                  data={deviceAttachedData}
                  selectableRows={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceRegistrationRequest;
