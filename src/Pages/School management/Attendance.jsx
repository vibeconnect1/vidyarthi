import React, { useState } from "react";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

function Attendance() {
  const [attendance, setAttendance] = useState(false);

  const [dataTakeAttendance, setDataTakeAttendance] = useState([
    { rollNo: 1, name: "Rajesh Kumar", status: "Present" },
    { rollNo: 2, name: "Sneha Sharma", status: "Absent" },
    { rollNo: 3, name: "Vikram Singh", status: "Present" },
    { rollNo: 4, name: "Anjali Verma", status: "Absent" },
    { rollNo: 5, name: "Ravi Patel", status: "Present" },
  ]);

  const handleAttendanceChange = (rollNo, status) => {
    setDataTakeAttendance((prevData) =>
      prevData.map((student) =>
        student.rollNo === rollNo ? { ...student, status } : student
      )
    );
  };

  const columnsTakeAttendance = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-2">
          <Link
            to={`/school-management/attendance-details/${row.id}`}
            className="text-gray-600 hover:text-gray-900"
          >
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Roll No",
      selector: (row) => row.rollNo,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Attendance",
      cell: (row) => (
        <div className="flex gap-4 items-center justify-center">
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name={`attendance-${row.rollNo}`}
                className="mr-1"
                value="Present"
                checked={row.status === "Present"}
                onChange={() => handleAttendanceChange(row.rollNo, "Present")}
              />
              Present
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name={`attendance-${row.rollNo}`}
                className="mr-1"
                value="Absent"
                checked={row.status === "Absent"}
                onChange={() => handleAttendanceChange(row.rollNo, "Absent")}
              />
              Absent
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name={`attendance-${row.rollNo}`}
                className="mr-1"
                value="Late"
                checked={row.status === "Late"}
                onChange={() => handleAttendanceChange(row.rollNo, "Late")}
              />
              Late
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name={`attendance-${row.rollNo}`}
                className="mr-1"
                value="Halfday"
                checked={row.status === "Halfday"}
                onChange={() => handleAttendanceChange(row.rollNo, "Halfday")}
              />
              Halfday
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name={`attendance-${row.rollNo}`}
                className="mr-1"
                value="Holiday"
                checked={row.status === "Holiday"}
                onChange={() => handleAttendanceChange(row.rollNo, "Holiday")}
              />
              Holiday
            </label>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="">
      <div className="w-full flex flex-col overflow-hidden">
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
            Take Attendance
          </button>
        </div>
        {attendance && (
          <div>
            <div className="my-5">
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
                <div></div>
                <Table
                  columns={columnsTakeAttendance}
                  data={dataTakeAttendance}
                  pagination
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Attendance;
