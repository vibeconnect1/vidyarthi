import React from "react";
import AdminHRMS from "../AdminHRMS";
import { FiRefreshCcw } from "react-icons/fi";
import filter from "/filter.png";
import { LuArrowUpToLine } from "react-icons/lu";
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaUser,
} from "react-icons/fa";

function AttendanceRecords() {
 
  return (
    <div className="w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 border border-gray-400 pl-24">
          <div className="flex gap-1 items-center">
            <h1 className="text-2xl font-medium">Welcome, Karan Singh</h1>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-5 mx-5 ml-24 my-5">
          <div className="flex justify-between col-span-12">
            <div className="bg-white rounded-md flex items-center gap-2 px-4">
              <select>
                <option>October-2024</option>
                <option>September-2024</option>
                <option>August-2024</option>
                <option>July-2024</option>
                <option>June-2024</option>
                <option>May-2024</option>
                <option>April-2024</option>
                <option>March-2024</option>
                <option>February-2024</option>
                <option>January-2024</option>
                <option>December-2023</option>
                <option>November-2023</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button className="bg-white rounded-full h-8 w-8">
                <span className="flex justify-center items-center text-black">
                  <FiRefreshCcw />
                </span>
              </button>
              <button className="bg-white rounded-full h-8 w-8">
                <span className="flex justify-center items-center text-black">
                  <img src={filter} alt="filter-icon" />
                </span>
              </button>
              <button className="bg-white rounded-md flex items-center gap-2 px-4">
                <LuArrowUpToLine />
                <h2 className="font-medium">Upload Records</h2>
              </button>
              <button className="bg-white rounded-md flex items-center gap-2 px-4">
                <span>Actions</span>
                <FaChevronDown />
              </button>
            </div>
          </div>
          <div className="col-span-9">
            <div className="flex gap-x-5 space-y-3 flex-wrap">
              <div className="flex gap-2 items-center mt-3">
                <div className="bg-green-400 rounded-full w-4 h-4"></div>
                <h2>Present</h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-red-400 rounded-full w-4 h-4"></div>
                <h2>Absent</h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-orange-400 rounded-full w-4 h-4"></div>
                <h2>Weekly Off/Holiday/Leave</h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-blue-800 rounded-full w-4 h-4"></div>
                <h2>Half Day</h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-orange-400 rounded-full w-4 h-4"></div>
                <h2>No Shift/Template missing</h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-yellow-400 rounded-full w-4 h-4"></div>
                <h2>Invalid Record</h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-sky-400 rounded-full w-4 h-4"></div>
                <h2>Early</h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-amber-700 rounded-full w-4 h-4"></div>
                <h2>Late</h2>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <button className="bg-white rounded-md flex py-1 items-center gap-2 px-4">
              <h2>Selected Records</h2>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AttendanceRecords;
