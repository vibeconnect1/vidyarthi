import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import { BiEdit } from "react-icons/bi";
import { FilterForm } from "../../../ConfigurationFile/FilterForm";
import { FaChevronDown } from "react-icons/fa";
import filter from "/filter.png";
function TimeSheetRequest() {
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
      name: "Latest Submission Date",
      selector: (row) => row.latest_submission_date,
      sortable: true,
    },
    {
      name: "No. of Approved Applications",
      selector: (row) => row.approved_applications,
      sortable: true,
    },
    {
      name: "No. of Pending Applications",
      selector: (row) => row.pending_applications,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <Link to={`/hrms/time-sheet/edit-time-sheet-requests/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      employee_name: "Rahul Yadav",
      latest_submission_date: "-",
      approved_applications: "0",
      pending_applications: "0",
    },
    // Additional rows...
  ];

  return (
    <div className="w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">Timesheet Requests</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 ml-20">
        <div className="col-span-12 my-3 rounded-md mx-5">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Timesheet Requests
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
                        Approve multiple request
                      </button>
                      <button className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500">
                        Reject multiple request
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <select className="bg-white py-2 px-4 rounded-md w-full">
                  <option value="October-2023">October-2024</option>
                  <option value="September-2024">September-2024</option>
                  <option value="August-2024">August-2024</option>
                  <option value="July-2024">July-2024</option>
                  <option value="June-2024">June-2024</option>
                  <option value="May-2024">May-2024</option>
                  <option value="April-2024">April-2024</option>
                  <option value="March-2024">March-2024</option>
                  <option value="February-2024">February-2024</option>
                  <option value="January-2024">January-2024</option>
                  <option value="December-2023">December-2023</option>
                  <option value="November-2023">November-2023</option>
                  <option value="October-2023">October-2023</option>
                  <option value="September-2024">September-2023</option>
                  <option value="August-2024">August-2023</option>
                </select>
              </div>
            </div>
          </div>
          <div className="my-3">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeSheetRequest;
