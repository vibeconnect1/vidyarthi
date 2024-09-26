import React, { useState } from "react";
import { BsCheck2All } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { FaFileExcel, FaFilePdf, FaUserClock } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FiUserCheck } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { TbCalendarClock } from "react-icons/tb";

const AttendanceDetails = () => {
  const attendanceData = [
    { id: 1, days: ["P", "P", "P", "A", "P", "P", "P", "L", "H"] },
    { id: 2, days: ["P", "P", "A", "P", "P", "P", "P", "O", "P"] },
    { id: 3, days: ["P", "P", "L", "P", "P", "H", "P", "P", "P"] },
    { id: 4, days: ["P", "A", "P", "P", "P", "P", "L", "P", "O"] },
    { id: 5, days: ["P", "P", "P", "H", "P", "P", "P", "P", "P"] },
    { id: 6, days: ["P", "P", "P", "P", "P", "A", "P", "L", "P"] },
    { id: 7, days: ["P", "O", "P", "L", "P", "P", "A", "P", "P"] },
    { id: 8, days: ["P", "P", "P", "P", "A", "P", "P", "P", "P"] },
    { id: 9, days: ["P", "P", "P", "P", "P", "H", "P", "A", "P"] },
    { id: 10, days: ["P", "P", "P", "P", "P", "P", "P", "O", "A"] },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "P":
        return "text-green-500"; // Present
      case "A":
        return "text-red-500"; // Absent
      case "L":
        return "text-blue-500"; // Late
      case "H":
        return "text-indigo-500"; // Halfday
      case "O":
        return "text-gray-500"; // Holiday
      default:
        return "text-gray-200"; // Default color
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Attendance</h1>
      <div className="bg-white rounded-lg shadow-lg my-6 p-6">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Class: <span className="font-normal">9th A</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-700">
              Name: <span className="font-normal">Rajesh Kumar</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-700">
              Roll No: <span className="font-normal">1</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <input
              type="date"
              className="block w-40 px-3 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <select className="block w-48 px-3 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="">Year: 2024/2025</option>
              <option value="">Year: 2023/2024</option>
              <option value="">Year: 2022/2023</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-6 text-center">
          <div className="bg-green-100 p-4 rounded-md shadow-md">
            <FiUserCheck className="text-green-500 text-2xl mx-auto" />
            <p className="text-gray-600 mt-2">Present</p>
            <h2 className="text-xl font-bold text-gray-700">220</h2>
          </div>
          <div className="bg-red-100 p-4 rounded-md shadow-md">
            <FiUserCheck className="text-red-500 text-2xl mx-auto" />
            <p className="text-gray-600 mt-2">Absent</p>
            <h2 className="text-xl font-bold text-gray-700">20</h2>
          </div>
          <div className="bg-yellow-100 p-4 rounded-md shadow-md">
            <FiUserCheck className="text-yellow-500 text-2xl mx-auto" />
            <p className="text-gray-600 mt-2">Half Day</p>
            <h2 className="text-xl font-bold text-gray-700">2</h2>
          </div>
          <div className="bg-blue-100 p-4 rounded-md shadow-md">
            <FiUserCheck className="text-blue-500 text-2xl mx-auto" />
            <p className="text-gray-600 mt-2">Late</p>
            <h2 className="text-xl font-bold text-gray-700">6</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-2 mb-4">
          <button className="flex items-center px-4 py-2 text-black border border-gray-800 rounded">
            <span className="bg-green-500 text-white rounded-md mr-2 px-1 py-1">
              <BsCheck2All />
            </span>
            <span>Present</span>
          </button>
          <button className="flex items-center px-4 py-2 text-black border border-gray-800 rounded">
            <span className="bg-red-500 text-white rounded-md mr-2 px-1 py-1">
              <IoClose />
            </span>
            <span>Absent</span>
          </button>
          <button className="flex items-center px-4 py-2 text-black border border-gray-800 rounded">
            <span className="bg-sky-500 text-white rounded-md mr-2 px-1 py-1">
              <FaUserClock />
            </span>
            <span>Late</span>
          </button>
          <button className="flex items-center px-4 py-2 text-black border border-gray-800 rounded">
            <span className="bg-black text-white rounded-md mr-2 px-1 py-1">
              <TbCalendarClock />
            </span>
            <span>Halfday</span>
          </button>
          <button className="flex items-center px-4 py-2 text-black border border-gray-800 rounded">
            <span className="bg-indigo-500 text-white rounded-md mr-2 px-1 py-1">
              <FaCalendarDays />
            </span>
            <span>Holiday</span>
          </button>
        </div>
        <div className="flex gap-4">
          <div>
            <select className="block w-48 px-3 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="">
                <CiCalendar /> This Year
              </option>
              <option value="">This Month</option>
              <option value="">This Week</option>
            </select>
          </div>
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              className="inline-flex justify-between w-48 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Export
              <MdArrowDropDown className="w-5 h-5 ml-2" />
            </button>

            {isOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <ul className="py-1">
                  <li>
                    <button
                      onClick={() => {
                        // Handle export PDF action here
                        setIsOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FaFilePdf className="w-5 h-5 mr-2 text-red-500" />
                      Export Pdf
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        // Handle export Excel action here
                        setIsOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FaFileExcel className="w-5 h-5 mr-2 text-green-500" />
                      Export Excel
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Date/Month</th>
              {[
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
              ].map((month) => (
                <th key={month} className="px-4 py-2 border">
                  {month}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((entry) => (
              <tr key={entry.id}>
                <td className="px-4 py-2 border">
                  {entry.id.toString().padStart(2, "0")}
                </td>
                {entry.days.map((status, index) => (
                  <td
                    key={index}
                    className={`px-4 py-2 border ${getStatusColor(status)}`}
                  >
                    <span>{status}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceDetails;
