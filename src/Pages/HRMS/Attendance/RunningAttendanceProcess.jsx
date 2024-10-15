import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import Table from "../../../ConfigurationFile/Table";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { FilterForm } from "../../../ConfigurationFile/FilterForm";
import { FaCheck, FaUpload } from "react-icons/fa";
function RunningAttendanceProcess() {
  const [page, setPage] = useState("activeEmployees");
  const [filter, setFilter] = useState(false);
  const [action, setAction] = useState(false);
  const [rerun, setRerun] = useState(false);
  const [rerunUpload, setRerunUpload] = useState(false);
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
  const activeEmployeesColumns = [
    {
      name: "Employee Code",
      selector: (row) => row.employee_code,
      sortable: true,
    },
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Joining Date",
      selector: (row) => row.joining_date,
      sortable: true,
    },
  ];
  const activeEmployeesData = [
    {
      id: 1,
      employee_code: "7",
      employee_name: "Karan Singh",
      joining_date: "05-01-2015",
    },
  ];

  const processedEmployeesColumns = [
    {
      name: "Employee Code",
      selector: (row) => row.employee_code,
      sortable: true,
    },
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Joining Date",
      selector: (row) => row.joining_date,
      sortable: true,
    },
  ];
  const processedEmployeesData = [
    {
      id: 1,
      employee_code: "7",
      employee_name: "Karan Singh",
      joining_date: "05-01-2015",
    },
  ];

  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <h1 className="text-lg mx-5">Welcome, Karan Singh</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-1 ml-24 mx-5">
        <div className="col-span-12 my-3 rounded-md">
          <div className="flex justify-center">
            <div className="my-5 space-y-2">
              <p className="text-3xl text-gray-900">
                Running Attendance Process for August - 2024
              </p>
              <p className="text-center text-lg">
                Running Attendance Process is No More Tedious
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 my-3 rounded-md bg-gray-100 py-2 px-5">
          <div className="flex">
            <div className="flex w-full">
              <div className=" flex gap-2 p-2 pb-0 border-b border-gray-400">
                <h2
                  className={`p-1 ${
                    page === "activeEmployees" &&
                    `bg-white font-medium text-blue-500 shadow-custom-all-sides`
                  } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                  onClick={() => setPage("activeEmployees")}
                >
                  Active Employees
                </h2>
                <h2
                  className={`p-1 ${
                    page === "processedEmployees" &&
                    "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("processedEmployees")}
                >
                  Processed Employees
                </h2>
              </div>
            </div>
          </div>
          {page === "activeEmployees" && (
            <div className="my-2">
              <div className="md:flex justify-between my-3">
                <h2 className="text-lg font-medium flex items-center">
                  Listing Pending Employees
                </h2>
                <div className="flex gap-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Search by Employee Name or Code"
                      className="border border-gray-500 py-2 px-2 text-black rounded-xl w-full  md:w-96"
                    />
                  </div>
                  <div>
                    <button
                      className="bg-white rounded-md py-2 px-5 flex gap-2"
                      onClick={() => setFilter(!filter)}
                    >
                      Filter <IoMdArrowDropdown size={20} />
                    </button>
                    {filter && (
                      <div className="absolute mt-2 right-10 bg-white rounded-md z-20 border-2 w-4/6 p-5">
                        <div className="grid grid-cols-3 gap-8 pt-5">
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
                </div>
              </div>
              <Table
                columns={activeEmployeesColumns}
                data={activeEmployeesData}
                selectableRows={true}
              />
              <div className="border-t py-2">
                <div className="flex justify-center col-span-3 gap-2 my-5">
                  <button className="border border-gray-500 rounded-md text-black py-1 px-4 flex items-center gap-1">
                    <IoMdClose /> Cancel
                  </button>
                  <button className="bg-gray-500 text-white py-1 px-4 rounded-md flex items-center gap-1">
                    <FaCheck /> Submit
                  </button>
                </div>
              </div>
            </div>
          )}
          {page === "processedEmployees" && (
            <div className="my-2">
              <div className="md:flex justify-between my-3">
                <h2 className="text-lg font-medium flex items-center">
                  Listing Processed Employees
                </h2>
                <div className="flex gap-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Search by Employee Name or Code"
                      className="border border-gray-500 py-2 px-2 text-black rounded-xl w-full  md:w-96"
                    />
                  </div>
                  <div className="relative">
                    <button
                      className="bg-white rounded-md py-2 px-5 flex gap-2"
                      onClick={() => setAction(!action)}
                    >
                      Action <IoMdArrowDropdown size={20} />
                      {action && (
                        <div className="absolute right-0 top-12 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-10 py-5">
                          <div className="py-1 flex flex-col space-y-1">
                            <button
                              className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-left hover:text-red-500"
                              onClick={() => setRerun(!rerun)}
                            >
                              Rerun selected employees
                            </button>
                            <button
                              className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                              onClick={() => setRerunUpload(!rerunUpload)}
                            >
                              Upload employee list to rerun
                            </button>
                          </div>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <Table
                columns={processedEmployeesColumns}
                data={processedEmployeesData}
                selectableRows={true}
              />
            </div>
          )}
        </div>
      </div>
      {rerun && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 overflow-y-auto h-56 max-h-screen">
            <div className="bg-gray-200 py-3 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setRerun(!rerun)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Are you sure?
              </h2>
            </div>
            <div className="px-2 py-5">
              <p className="mt-2 text-gray-800 text-center mx-5">
                Do you really want selected employees to Rerun?
              </p>
            </div>
            <div className="flex justify-center gap-2 border-t py-5">
              <button
                className="border border-gray-500 rounded-md text-black py-1 px-4 flex items-center gap-1"
                onClick={() => setRerun(!rerun)}
              >
                <IoMdClose /> Cancel
              </button>
              <button className="bg-gray-500 text-white py-1 px-4 rounded-md flex items-center gap-1">
                <FaCheck /> Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {rerunUpload && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-1/3 max-h-screen">
            <div className="bg-gray-200 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setRerunUpload(!rerunUpload)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Bulk Re-Run for Upload September - 2024
              </h2>
            </div>
            <div className="p-5 overflow-y-auto h-84">
              <h2 className="font-medium text-lg">Upload Instructions:</h2>
              <ul className="space-y-2 my-5">
                <li>
                  The upload sheet must only include "Email", "Employee Name",
                  "Employee Code" (with the exact case and order).
                </li>
                <li>
                  All the Employees' whose details are provided would be taken
                  for Re-Run
                </li>
                <li>
                  Bulk Re-Run for your selected Employees in just 1 steps:
                </li>
              </ul>
              <p className="mt-2 font-medium">
                Step 1: Create the Upload Sheet as per instructions given above
                and Upload *
              </p>
              <div>
                <input
                  type="file"
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></input>
              </div>
            </div>
            <div className="flex justify-end gap-2 mb-5 px-5">
              <button className="font-semibold py-2 px-4 rounded bg-gray-400 text-white mt-2 flex items-center gap-2">
                <FaUpload /> Bulk Re-Run Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RunningAttendanceProcess;
