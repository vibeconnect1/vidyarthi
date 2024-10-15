import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FilterForm } from "../../../ConfigurationFile/FilterForm";

function AttendanceAudit() {
  const [action, setAction] = useState(false);
  const [importQuikchex, setImportQuikchex] = useState(false);
  const [exportExcel, setExportExcel] = useState(false);
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

  const [attendanceFilters, setAttendanceFilters] = useState({
    dayStatus: { checked: false, open: false },
    totalHours: { checked: false, open: false },
    checkInTime: { checked: false, open: false },
    checkOutTime: { checked: false, open: false },
    lateEarlyMarkStatus: { checked: false, open: false },
    shift: { checked: false, open: false },
  });

  // Toggle checkbox and dropdown
  const handleToggle = (key) => {
    setAttendanceFilters((prev) => ({
      ...prev,
      [key]: { checked: !prev[key].checked, open: !prev[key].open },
    }));
  };

  const dayStatusList = [
    "Present",
    "Absent",
    "Half Day Absent",
    "Leave",
    "Invalid",
    "WeeklyOff",
    "Holiday",
    "No Shift Assigned",
  ];

  const totalHoursWorkedList = ["Greater than", "Less than", "Between"];

  const checkInTimeList = ["Greater than", "Less than", "Between"];

  const checkOutTimeList = ["Greater than", "Less than", "Between"];
  const lateEarlyMarkStatusStatusList = [
    " Late Mark Applicable",
    " Early Mark Applicable",
  ];

  const shiftList = [
    " Sales Morning Shift ",
    " Morning Shift ",
    " Break Shift",
    " General",
    " General Shift for Dairy",
    " Uk Shift",
    " Evening Shift",
    " General Shift",
    " Morning Shift",
    " Night Shift",
  ];

  const [employeeFilters, setEmployeeFilters] = useState({
    workLocation: { checked: false, open: false },
    attendanceTemplate: { checked: false, open: false },
    employeeDepartment: { checked: false, open: false },
  });

  const handleToggleEmployee = (key) => {
    setEmployeeFilters((prev) => ({
      ...prev,
      [key]: { checked: !prev[key].checked, open: !prev[key].open },
    }));
  };

  const workLocationList = [
    "Mumbai; Mumbai; Maharashtra",
    "Test 1; Pune; Maharashtra",
    "Delhi; Delhi NCR; Delhi",
    "Asian Paints Delhi; Noida; Delhi",
    "Asian Paints Gurgoan; Gurgoan; Delhi",
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
        <div className="col-span-4 bg-white my-3 rounded-md ml-20">
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
              {/* Day Status */}
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={attendanceFilters.dayStatus.checked}
                    onChange={() => handleToggle("dayStatus")}
                  />
                  <h2>Day Status</h2>
                </div>
                <button
                  className="text-gray-500"
                  onClick={() => handleToggle("dayStatus")}
                >
                  {attendanceFilters.dayStatus.open ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </div>
              <div className=" w-full">
                {attendanceFilters.dayStatus.open && (
                  <div className="py-3 w-full">
                    <FilterForm
                      label="Day Status"
                      options={dayStatusList}
                      className="w-full"
                    />
                  </div>
                )}
              </div>

              {/* Total Hours Worked */}
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={attendanceFilters.totalHours.checked}
                    onChange={() => handleToggle("totalHours")}
                  />
                  <h2>Total Hours Worked</h2>
                </div>
                <button
                  className="text-gray-500"
                  onClick={() => handleToggle("totalHours")}
                >
                  {attendanceFilters.totalHours.open ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </div>
              {attendanceFilters.totalHours.open && (
                <div className="py-3 w-full">
                  <FilterForm
                    label="Total Hours Worked"
                    options={totalHoursWorkedList}
                    className="w-full"
                  />
                </div>
              )}

              {/* Check in Time */}
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={attendanceFilters.checkInTime.checked}
                    onChange={() => handleToggle("checkInTime")}
                  />
                  <h2>Check in Time</h2>
                </div>
                <button
                  className="text-gray-500"
                  onClick={() => handleToggle("checkInTime")}
                >
                  {attendanceFilters.checkInTime.open ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </div>
              {attendanceFilters.checkInTime.open && (
                <div className="py-3 w-full">
                  <FilterForm
                    label="Check in Time"
                    options={checkInTimeList}
                    className="w-full"
                  />
                </div>
              )}

              {/* Check out Time */}
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={attendanceFilters.checkOutTime.checked}
                    onChange={() => handleToggle("checkOutTimeList")}
                  />
                  <h2>Check out Time</h2>
                </div>
                <button
                  className="text-gray-500"
                  onClick={() => handleToggle("checkOutTime")}
                >
                  {attendanceFilters.checkOutTime.open ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </div>
              {attendanceFilters.checkOutTime.open && (
                <div className="py-3 w-full">
                  <FilterForm
                    label="Check out Time"
                    options={checkOutTimeList}
                    className="w-full"
                  />
                </div>
              )}

              {/* Late and Early Mark Status */}
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={attendanceFilters.lateEarlyMarkStatus.checked}
                    onChange={() => handleToggle("lateEarlyMarkStatus")}
                  />
                  <h2>Late and Early Mark Status</h2>
                </div>
                <button
                  className="text-gray-500"
                  onClick={() => handleToggle("lateEarlyMarkStatus")}
                >
                  {attendanceFilters.lateEarlyMarkStatus.open ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </div>
              {attendanceFilters.lateEarlyMarkStatus.open && (
                <div className="py-3 w-full">
                  <FilterForm
                    label="Late and Early Mark Status"
                    options={lateEarlyMarkStatusStatusList}
                    className="w-full"
                  />
                </div>
              )}

              {/* Shift */}
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={attendanceFilters.shift.checked}
                    onChange={() => handleToggle("shift")}
                  />
                  <h2>Shift</h2>
                </div>
                <button
                  className="text-gray-500"
                  onClick={() => handleToggle("shift")}
                >
                  {attendanceFilters.shift.open ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </div>
              {attendanceFilters.shift.open && (
                <div>
                  <div className="py-3 w-full">
                    <FilterForm
                      label="Shift"
                      options={shiftList}
                      className="w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="border-t mx-5 my-5 py-5">
            <h3 className="text-lg font-medium text-gray-500 mb-3">
              Step 3 : Employee Filter
            </h3>
            <div className="space-y-2">
              {/* Work Location */}
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={employeeFilters.workLocation.checked}
                    onChange={() => handleToggleEmployee("workLocation")}
                  />
                  <h2>Work Location</h2>
                </div>
                <button
                  className="text-gray-500"
                  onClick={() => handleToggleEmployee("workLocation")}
                >
                  {employeeFilters.workLocation.open ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </div>
              {employeeFilters.workLocation.open && (
                <div className="py-3 w-full">
                  <FilterForm
                    label="Work Location"
                    options={workLocationList}
                    className="w-full"
                  />
                </div>
              )}

              {/* Attendance Template */}
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={employeeFilters.attendanceTemplate.checked}
                    onChange={() => handleToggleEmployee("attendanceTemplate")}
                  />
                  <h2>Attendance Template</h2>
                </div>
                <button
                  className="text-gray-500"
                  onClick={() => handleToggleEmployee("attendanceTemplate")}
                >
                  {employeeFilters.attendanceTemplate.open ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </div>
              {employeeFilters.attendanceTemplate.open && (
                <div className="py-3 w-full">
                  <FilterForm
                    label="Attendance Template"
                    options={attendanceTemplateList}
                    className="w-full"
                  />
                </div>
              )}

              {/* Employee Department */}
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={employeeFilters.employeeDepartment.checked}
                    onChange={() => handleToggleEmployee("employeeDepartment")}
                  />
                  <h2>Employee Department</h2>
                </div>
                <button
                  className="text-gray-500"
                  onClick={() => handleToggleEmployee("employeeDepartment")}
                >
                  {employeeFilters.employeeDepartment.open ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </div>
              {employeeFilters.employeeDepartment.open && (
                <div className="py-3 w-full">
                  <FilterForm
                    label="Employee Department"
                    options={employeeDepartmentList}
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="border-t py-2">
            <div className="flex justify-center col-span-3 gap-2 my-5">
              <button className="border border-gray-500 rounded-md text-black py-1 px-4">
                Clear
              </button>
              <button className="bg-gray-500 text-white py-1 px-4 rounded-md ">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-8 my-3 rounded-md">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Attendance Audit
            </h2>
            <div className="md:flex justify-end gap-2 mb-1 relative">
              <button
                className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full"
                onClick={() => setAction(!action)}
              >
                <span>Actions</span>
                <FaChevronDown />
              </button>
              {action && (
                <div className="absolute right-0 top-10 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-10 py-5">
                  <div className="py-1 flex flex-col space-y-1">
                    <button
                      className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-left hover:text-red-500"
                      onClick={() => setImportQuikchex(!importQuikchex)}
                    >
                      Import to Quikchex
                    </button>
                    <button
                      className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                      onClick={() => setExportExcel(!exportExcel)}
                    >
                      Export to Excel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="my-3">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
      {importQuikchex && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 max-h-screen">
            <div className="bg-gray-200 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setImportQuikchex(!importQuikchex)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Upload Attendance Audit Changes
              </h2>
            </div>
            <div className="p-5 overflow-y-auto h-80">
              <div>
                <p className="mt-2 font-medium">
                  Make necessary changes in the imported file and upload *
                </p>
                <div>
                  <input
                    type="file"
                    className="border-b border-gray-500 focus:outline-none my-3 w-full"
                  ></input>
                </div>
              </div>
              <div>
                <h2 className="font-medium text-lg">Format For Upload:</h2>
                <ul className="space-y-2 my-5">
                  <li>
                    a) Select all the cells instructions when uploading check in
                    times
                  </li>
                  <li>b) Right click and select the format cells button</li>
                  <li>c) Choose the "Text" format</li>
                  <li>
                    d) Enter the check-in / check-out times in AM/PM format:
                    E.g. 8:05 AM or 12:30 PM
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center gap-2 my-5">
              <button
                onClick={() => setImportQuikchex(!importQuikchex)}
                className="font-semibold py-2 px-4 rounded border-2 text-black mt-2 flex items-center gap-2"
              >
                Cancel
              </button>
              <button className="font-semibold py-2 px-4 rounded bg-gray-400 text-white mt-2 flex items-center gap-2">
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
      {exportExcel && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96  h-80 overflow-y-auto max-h-screen">
            <div className="bg-gray-200 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setExportExcel(!exportExcel)}
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <div className="py-2 px-5">
              <div className="my-2 flex flex-col items-center justify-center text-center">
                <img src="/success.png" className="h-16 w-16" />
                <h2 className="font-medium text-lg text-green-500 mt-2">
                  Successful
                </h2>
                <p>
                  Your process has started. You can view the progress in the
                  'Import Export' tab. To access it, please
                  <Link className="text-blue-500 mx-2" href="#">
                    click here
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <button className="font-semibold py-2 px-4 rounded bg-gray-400 text-white mt-2 flex items-center gap-2">
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AttendanceAudit;
