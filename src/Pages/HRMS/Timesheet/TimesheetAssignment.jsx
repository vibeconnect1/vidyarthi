import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import Table from "../../../ConfigurationFile/Table";
import { PiPlusCircle } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import filter from "/filter.png";
import TimesheetManagementSetting from "./TimesheetManagementSetting";
import { FilterForm } from "../../../ConfigurationFile/FilterForm";
function TimesheetAssignment() {
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
  const timesheetTemplateList = [
    " General Template",
    " Test Healthcare",
    " No Template",
  ];
  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Current Template",
      selector: (row) => row.current_template,
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
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      employee_name: "Karan",
      current_template: "",
      supervisors: "",
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
            <h1 className="text-3xl font-bold">Timesheet Management</h1>
          </div>
          <p className="mx-10 my-2">View Timesheet Settings</p>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5">
        <div className="col-span-3 my-3 rounded-md ml-20">
          <div className="bg-white rounded-md">
            <TimesheetManagementSetting />
          </div>
        </div>
        <div className="col-span-6 my-3 rounded-md">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Timesheet Assignment
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
                        label="Timesheet Template"
                        options={timesheetTemplateList}
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
                        Assign templates
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Assign supervisors
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Upload template assignment
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Upload approver assignment
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
            <div className="flex flex-col mt-4 bg-white rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2">
              <div className="flex  gap-4 font-medium">
                <GrHelpBook size={20} />
                <h2>Help Center</h2>
              </div>
              <div className=" ">
                {/* <p className="font-medium">Help Center</p> */}
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>
                    Timesheet settings allows you to _ bconfigure and manage
                    company clients, projects, allocated tasks and assigned
                    templates. b_
                  </li>
                  <li>
                    You can define details like client code, project code, per
                    hour rate, type of task (internal/external) and the status
                    of the task.
                  </li>
                  <li>
                    You can configure template settings like frequency of
                    timesheet submission (daily/weekly/monthly), set approval
                    hierarchy and auto approvals, etc.
                  </li>
                  <li>
                    Timesheet module is integrated with the attendance module.
                    Hence, timesheet data can also be used for capturing
                    attendance.
                  </li>
                  <li>
                    <Link to={`Click Here`} className="text-red-500">
                      Click Here
                    </Link>
                    for detailed information.
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

export default TimesheetAssignment;
