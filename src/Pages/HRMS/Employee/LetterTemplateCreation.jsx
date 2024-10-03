import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";

function LetterTemplateCreation() {
  const [isEmployee, setIsEmployee] = useState(false);
  const [isEmployee1, setIsEmployee1] = useState(false);
  const empList = [
    "Select all",
    "Rahul Yadav",
    "Vijay Singh",
    "Rohan Singh",
    "Vipin Kumar",
    "Ajay Yadav",
  ];

  const empList1 = [
    "Select all",
    "Rohan Yadav",
    "Viraj Sharma",
    "Rohan Singh",
    "Vipin Kumar",
    "Ajay Yadav",
  ];

  return (
    <div className="w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-8 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">Letter Template Creation</h1>
          </div>
        </header>
        <div className="grid grid-cols-2 gap-5 mx-5 ml-24 my-5 bg-white rounded-md px-10 py-10">
          <label>
            Select Employee(s) to mark CC whenever a letter goes to an employee:
          </label>
          <select
            name=""
            className="border-b border-gray-500 focus:outline-none w-full my-3"
          >
            <option value="">Please Select</option>
            <option value="">Using a Pre-Defined Template</option>
            <option value="">Uploading a one-time template</option>
          </select>
          <label>Employee Name</label>
          <select
            name=""
            className="border-b border-gray-500 focus:outline-none w-full my-3"
          >
            <option value="">Karan</option>
          </select>
          <label className="mt-2">
            Select Employee(s) to mark CC whenever a letter goes to an employee:
          </label>
          <div className="relative">
            <button
              onClick={() => setIsEmployee(!isEmployee)}
              className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
            >
              Select Employees <IoMdArrowDropdown />
            </button>

            {/* Dropdown */}
            {isEmployee && (
              <div className="absolute z-30 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {/* Search Input */}
                <div className="p-2">
                  <div className="relative flex items-center">
                    <CiSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Employee List */}
                <div className="max-h-40 overflow-y-auto">
                  {empList.map((option) => (
                    <label
                      key={option}
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <input type="checkbox" className="mr-2" />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          <label className="mt-3">
            Select Employee(s) to mark BCC whenever a letter goes to an
            employee:
          </label>
          <div className="relative">
            <button
              onClick={() => setIsEmployee1(!isEmployee1)}
              className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
            >
              Select Employees <IoMdArrowDropdown />
            </button>

            {/* Dropdown */}
            {isEmployee1 && (
              <div className="absolute z-30 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {/* Search Input */}
                <div className="p-2">
                  <div className="relative flex items-center">
                    <CiSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Employee List */}
                <div className="max-h-40 overflow-y-auto">
                  {empList1.map((option) => (
                    <label
                      key={option}
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <input type="checkbox" className="mr-2" />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          <label className="mt-3">Download and Preview *</label>
          <div className="flex gap-5">
            <input
              type="text"
              className="border-b border-gray-500 focus:outline-none w-full"
              placeholder="Please select"
            ></input>
            <button className="border bg-orange-500 text-white rounded-md p-1 w-14 flex justify-center items-center">
              <FaDownload />
            </button>
          </div>
          <div className="flex justify-center gap-5 col-span-2 border-t my-5 py-5">
            <button className="border border-gray-500 rounded-md px-5 py-1">Cancel</button>
            <button className="bg-gray-400 rounded-md px-5"> Create Letter</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetterTemplateCreation;
