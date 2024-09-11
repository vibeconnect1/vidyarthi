import React, { useState } from "react";
import Table from "../../ConfigurationFile/Table";

function Attendance() {
  const [attendance, setAttendance] = useState(false);
  const [attendanceView, setAttendanceView] = useState(false);
  const [status, setStatus] = useState("attendanceList");

  const columnsTakeAttendance = [
    {
      name: "Roll No",
      selector: (row) => row.rollNo,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Status",
      cell: (row) => (
        <div className="flex gap-4 items-center">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={`status-${row.rollNo}`}
              value="Present"
              checked={row.status === "Present"}
              onChange={() => handleStatusChange(row.rollNo, "Present")}
              className="form-radio text-green-500"
            />
            <span className="ml-2">Present</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={`status-${row.rollNo}`}
              value="Absent"
              checked={row.status === "Absent"}
              onChange={() => handleStatusChange(row.rollNo, "Absent")}
              className="form-radio text-red-500"
            />
            <span className="ml-2">Absent</span>
          </label>
        </div>
      ),
    },
  ];

  const dataTakeAttendance = [
    { rollNo: 1, name: "Rajesh Kumar", status: "Present" },
    { rollNo: 2, name: "Sneha Sharma", status: "Absent" },
    { rollNo: 3, name: "Vikram Singh", status: "Present" },
    { rollNo: 4, name: "Anjali Verma", status: "Absent" },
    { rollNo: 5, name: "Ravi Patel", status: "Present" },
  ];

  const columnsAttendanceList = [
    {
      name: "Roll No",
      selector: (row) => row.rollNo,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Status",
      cell: (row) => row.status
    },
  ];

  const dataAttendanceList = [
    { rollNo: 1, name: "Rajesh Kumar", status: "Present" },
    { rollNo: 2, name: "Sneha Sharma", status: "Absent" },
    { rollNo: 3, name: "Vikram Singh", status: "Present" },
    { rollNo: 4, name: "Anjali Verma", status: "Absent" },
    { rollNo: 5, name: "Ravi Patel", status: "Present" },
  ];
  return (
    <section className="">
      <div className="w-full flex flex-col overflow-hidden">
        <div>
          <div className="flex gap-5 border-2 border-gray-400 rounded-md px-5 py-2 w-96 my-5">
            <div className="flex items-center">
              <input
                type="radio"
                id="attendanceList"
                name="status"
                value="attendanceList"
                checked={status === "attendanceList"}
                className="mr-2 cursor-pointer"
                onClick={() => setStatus("attendanceList")}
              />
              <label htmlFor="instructor" className="text-base">
                Attendance List
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="takeAttendance"
                name="status"
                value="takeAttendance"
                checked={status === "takeAttendance"}
                className="mr-2 cursor-pointer"
                onClick={() => setStatus("takeAttendance")}
              />
              <label htmlFor="admin" className="text-base">
                Take Attendance
              </label>
            </div>
          </div>
        </div>
        {status === "attendanceList" && (
          <div>
            <div className="bg-white p-6 rounded-t-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Class
                  </label>
                  <select className="my-2 block w-full py-2 shadow-sm border-b border-gray-500 focus:outline-none">
                    <option value="">Select Class</option>
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Division
                  </label>
                  <select className="my-2 block w-full py-2 shadow-sm border-b border-gray-500 focus:outline-none">
                    <option value="">Select Division</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    className="my-2 block w-full py-2 shadow-sm border-b border-gray-500 focus:outline-none"
                  />
                </div>
              </div>
              <button
                className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
                onClick={() => setAttendanceView(!attendanceView)}
              >
                Attendance List
              </button>
            </div>
            <div className="my-5">
              {attendanceView && (
                <div className="bg-white py-3 ">
                  <div className="flex gap-5 px-3">
                    <h2 className="text-lg font-semibold text-gray-700">
                      Class: <span className="text-gray-400 mx-2">10th A</span>
                    </h2>
                    <h2 className="text-lg font-semibold text-gray-700">
                      Date :
                      <span className="text-gray-400 mx-2">12 Sep, 2024</span>
                    </h2>
                  </div>
                  <Table columns={columnsAttendanceList} data={dataAttendanceList} pagination />
                </div>
              )}
            </div>
          </div>
        )}
        {status === "takeAttendance" && (
          <div>
            <div className="bg-white p-6 rounded-t-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Class
                  </label>
                  <select className="my-2 block w-full py-2 shadow-sm border-b border-gray-500 focus:outline-none">
                    <option value="">Select Class</option>
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Division
                  </label>
                  <select className="my-2 block w-full py-2 shadow-sm border-b border-gray-500 focus:outline-none">
                    <option value="">Select Division</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    className="my-2 block w-full py-2 shadow-sm border-b border-gray-500 focus:outline-none"
                  />
                </div>
              </div>
              <button
                className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
                onClick={() => setAttendance(!attendance)}
              >
                Attendance List
              </button>
            </div>
            <div className="my-5">
              {attendance && (
                <div className="bg-white py-3 ">
                  <div className="flex gap-5 px-3">
                    <h2 className="text-lg font-semibold text-gray-700">
                      Class: <span className="text-gray-400 mx-2">10th A</span>
                    </h2>
                    <h2 className="text-lg font-semibold text-gray-700">
                      Date :
                      <span className="text-gray-400 mx-2">12 Sep, 2024</span>
                    </h2>
                  </div>
                  <Table columns={columnsTakeAttendance} data={dataTakeAttendance} pagination />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Attendance;
