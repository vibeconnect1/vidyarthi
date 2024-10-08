import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import {FaChevronDown } from "react-icons/fa";

function AttendanceAudit() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Hours Worked",
      selector: (row) => row.hours_worked,
      sortable: true,
    },
    {
      name: "Check In	",
      selector: (row) => row.check_in,
      sortable: true,
    },
    {
      name: "Check Out",
      selector: (row) => row.check_out,
      sortable: true,
    },
    {
      name: "Shift Name",
      selector: (row) => row.shift_name,
      sortable: true,
    },
    {
      name: "Shift Timing",
      selector: (row) => row.shift_timing,
      sortable: true,
    },
    {
      name: "Late Mark",
      selector: (row) => row.late_mark,
      sortable: true,
    },
    {
      name: "Early Mark",
      selector: (row) => row.early_mark,
      sortable: true,
    },
    {
      name: "Branch Location",
      selector: (row) => row.branch_location,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      name: "",
      date: "",
      status: "",
      hours_worked: "",
      check_in: "",
      check_out: "",
      shift_name: "",
      shift_timing: "",
      late_mark: "",
      early_mark: "",
      branch_location: "",
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
            <h1 className="text-3xl font-bold">Attendance Audit</h1>
          </div>
          <p className="mx-10 my-2">
            Auditing monthly attendance cycle of each employee in below process.
          </p>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5">
        <div className="col-span-4 bg-white my-3 rounded-md ml-16">
          <div className="border-b py-3 px-5">
            <h2 className="text-gray-800 font-medium text-xl">Smart Filters</h2>
          </div>
          <div className="mb-6 px-5 my-5">
            <h3 className="text-lg font-medium text-gray-500 mb-3">
              Step 1 : Date Selection
            </h3>
            <div className="space-y-5">
              <div>
                <select className="border-b border-gray-500 focus:outline-none w-full">
                <option value="November-2024">Attendance Cycle</option>
                  <option value="November-2024">November-2024</option>
                  <option selected="selected" value="October-2024">
                    October-2024
                  </option>
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
                  <option value="September-2023">September-2023</option>
                  <option value="August-2023">August-2023</option>
                  <option value="July-2023">July-2023</option>
                  <option value="June-2023">June-2023</option>
                  <option value="May-2023">May-2023</option>
                  <option value="April-2023">April-2023</option>
                  <option value="March-2023">March-2023</option>
                  <option value="February-2023">February-2023</option>
                  <option value="January-2023">January-2023</option>
                  <option value="December-2022">December-2022</option>
                  <option value="November-2022">November-2022</option>
                  <option value="October-2022">October-2022</option>
                  <option value="September-2022">September-2022</option>
                </select>
              </div>
              <div>
                <input
                  type=""
                  value=""
                  placeholder="Date Range"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
            </div>
          </div>
          <div className="border-t mx-5 my-5 py-5">
            <h3 className="text-lg font-medium text-gray-500 mb-3">
              Step 2 : Attendance Filter
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox"></input>
                  <h2>Day Status</h2>
                </div>
                <button className="text-gray-500">
                  <FaChevronDown />
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox"></input>
                  <h2>Total Hours Worked</h2>
                </div>
                <button className="text-gray-500">
                  <FaChevronDown />
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox"></input>
                  <h2>Check in Time</h2>
                </div>
                <button className="text-gray-500">
                  <FaChevronDown />
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox"></input>
                  <h2>Check out Time</h2>
                </div>
                <button className="text-gray-500">
                  <FaChevronDown />
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox"></input>
                  <h2>Late and Early Mark Status</h2>
                </div>
                <button className="text-gray-500">
                  <FaChevronDown />
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox"></input>
                  <h2>Shift</h2>
                </div>
                <button className="text-gray-500">
                  <FaChevronDown />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t mx-5 my-5 py-5">
            <h3 className="text-lg font-medium text-gray-500 mb-3">
              Step 3 : Employee Filter
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox"></input>
                  <h2>Work Location</h2>
                </div>
                <button className="text-gray-500">
                  <FaChevronDown />
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox"></input>
                  <h2>Attendance Template</h2>
                </div>
                <button className="text-gray-500">
                  <FaChevronDown />
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox"></input>
                  <h2>Employee Department</h2>
                </div>
                <button className="text-gray-500">
                  <FaChevronDown />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 my-3 rounded-md">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Attendance Audit
            </h2>
            <div className="md:flex justify-end gap-2 mb-1">
              <button className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full">
                <span>Actions</span>
                <FaChevronDown />
              </button>
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

export default AttendanceAudit;
