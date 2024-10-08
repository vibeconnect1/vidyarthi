import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import Table from "../../../ConfigurationFile/Table";
import { IoMdArrowDropdown } from "react-icons/io";
function RunningAttendanceProcess() {
  const [page, setPage] = useState("activeEmployees");
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
                    <button className="bg-white rounded-md py-2 px-5 flex gap-2">
                      Filter <IoMdArrowDropdown size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <Table columns={activeEmployeesColumns} data={activeEmployeesData} selectableRows={true} />
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
                  <div>
                    <button className="bg-white rounded-md py-2 px-5 flex gap-2">
                      Action <IoMdArrowDropdown size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <Table columns={processedEmployeesColumns} data={processedEmployeesData} selectableRows={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RunningAttendanceProcess;
