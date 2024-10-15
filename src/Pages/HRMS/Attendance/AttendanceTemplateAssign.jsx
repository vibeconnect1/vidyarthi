import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import AttendanceDetailsList from "./AttendanceDetailsList";
import { GrHelpBook } from "react-icons/gr";
import Table from "../../../ConfigurationFile/Table";
import { PiPlusCircle } from "react-icons/pi";
import { RiMenu2Line } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import filter from "/filter.png";
import { FilterForm } from "../../../ConfigurationFile/FilterForm";
function AttendanceTemplateAssign() {
  const [action, setAction] = useState(false);
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
  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Current Attendance Template",
      selector: (row) => row.current_attendance_template,
      sortable: true,
    },
    {
      name: "Biometric Code / Device ID	",
      selector: (row) => row.biometric_code_deviceID,
      sortable: true,
    },
    {
      name: "Supervisors",
      selector: (row) => row.supervisors,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <PiPlusCircle size={15} />
          </button>
          <button className="border p-2 cursor-pointer text-yellow-500">
            <RiMenu2Line size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <HiDotsVertical size={15} />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      employee_name: "Karan",
      current_attendance_template: "Marketing Employees",
      biometric_code_deviceID: "7890",
      supervisors: "L1: Rahul L2: Kavita",
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
            <h1 className="text-3xl font-bold">Attendance</h1>
          </div>
          <p className="mx-10 my-2">View Attendance Settings</p>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 my-3 rounded-md ml-20">
          <div className="bg-white rounded-md">
            <AttendanceDetailsList />
          </div>
        </div>
        <div className="col-span-6 my-3 rounded-md">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Employee Attendance Assignment
            </h2>
            <div className="md:flex justify-end gap-2 mb-1">
              <div>
                <input
                  type="text"
                  placeholder="Search by Employee Name or Code"
                  className="border border-gray-500 py-2 px-2 text-black rounded-xl"
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
                {filterDropdown && (
                  <div className="absolute mt-0 right-5 bg-white rounded-md z-20 border-2 w-[810px] p-5">
                    <div className="grid grid-cols-3 gap-8 pt-5">
                      <FilterForm
                        label="Attendance Template"
                        options={attendanceTemplateList}
                      />
                       <FilterForm
                        label="Supervisor"
                        options={supervisorList}
                      />
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
              </div>
              <div className="relative">
                <button
                  className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full"
                  onClick={() => setAction(!action)}
                >
                  <span>Actions</span>
                  <FaChevronDown />
                </button>
                {action && (
                  <div className="absolute right-0 mt-1 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-10 py-5">
                    <div className="py-1 flex flex-col ">
                      <button className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-left hover:text-red-500">
                        Assign Attendance Template
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Assign Supervisor
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Delete Template Assignment
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Upload attendance templates
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Upload attendance supervisors
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="my-3 bg-white rounded-md px-5 py-5 space-y-6">
            <div className="my-2">
              <Table columns={columns} data={data} selectableRows={true} />
            </div>
          </div>
        </div>
        <div className="col-span-3 rounded-md">
          <div className="my-4 w-full">
            <div className="flex flex-col mt-4 mr-2 bg-white rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2">
              <div className="flex  gap-4 font-medium">
                <GrHelpBook size={20} />
                <h2>Help Center</h2>
              </div>
              <div className=" ">
                {/* <p className="font-medium">Help Center</p> */}
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>
                    Attendance settings allows you to configure attendance
                    policies in the form of templates based on different
                    departments, profiles, locations, etc.
                  </li>
                  <li>
                    Within the attendance templates you can choose the mode of
                    capturing the attendance like web check-in, biometrics,
                    timesheet, mobile application.
                  </li>
                  <li>
                    You can automate the attendance process by automatically
                    capturing late marks, half-days, overtime and leave
                    deductions based on the template settings. You can also
                    configure attendance regularization limit and reason.
                  </li>
                  <li>
                    In the web check-in you can restrict capturing attendance
                    through static IP. Similarly, in mobile applications you can
                    restrict capturing attendance through geo-fencing.
                  </li>
                  <li>
                    Attendance module is integrated with leave and payroll
                    module and hence will sync data from the attendance module
                    and derive data like LOP calculations for running payroll.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceTemplateAssign;
