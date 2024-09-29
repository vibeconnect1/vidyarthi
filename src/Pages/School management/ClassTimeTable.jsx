import React, { useEffect, useRef, useState } from "react";
import Table from "../../ConfigurationFile/Table";
import { CiFilter, CiSearch } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import {
  AiOutlineClockCircle,
  AiOutlineDown,
} from "react-icons/ai";
import profile1 from "/profile1.jpg"
import profile2 from "/profile2.jpg"
import profile3 from "/profile3.jpg"
import profile4 from "/profile4.jpg"
import profile5 from "/profile5.jpg"
import profile6 from "/profile6.jpg"

function ClassTimeTable() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-2">
          <Link
            to={`/school-management/class-time-table-details/${row.id}`}
            className="text-gray-600 hover:text-gray-900"
          >
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Classes",
      selector: (row) => row.classes,
    },
    {
      name: "Division",
      selector: (row) => row.division,
    },
  ];
  const data = [
    {
      classes: "10th",
      division: "A",
    },
  ];
  return (
    <section>
      <div className="w-full flex flex-col overflow-hidden">
        <div className="flex justify-between gap-5 my-5">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="border bg-white rounded-md pl-10 pr-4 py-2 w-full focus:outline-none"
            />
            <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
          <Link
            to={`/school-management/add-class-time-table`}
            className="bg-white rounded-md px-4 p-1 flex gap-2 justify-center items-center"
          >
            <IoAddCircleOutline size={20} /> Add
          </Link>
        </div>
        <div>
          <Table columns={columns} data={data} pagination />
        </div>
        <div className="bg-white rounded-md my-5">
          <div className="flex items-center justify-between flex-wrap p-4 my-5">
            <h4 className="text-xl font-bold mb-3">Time Table</h4>
            <div className="flex items-center flex-wrap">
              <div ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center px-4 py-2  text-black border border-gray-500 rounded-md gap-1"
                >
                  <CiFilter size={15} />
                  Filter
                  <AiOutlineDown size={15} />
                </button>
                {isOpen && (
                  <div className="w-80 bg-white shadow-md rounded mt-1 p-4 absolute right-5 z-10">
                    <form onSubmit={handleSubmit} className="p-4">
                      <div className="flex items-center border-b pb-3 mb-3">
                        <h4 className="text-lg font-semibold">Filter</h4>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="class"
                          >
                            Class
                          </label>
                          <select
                            id="class"
                            className="border px-2 py-1 rounded w-full"
                          >
                            <option value="">Select</option>
                            <option value="I">I</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                          </select>
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="section"
                          >
                            Section
                          </label>
                          <select
                            id="section"
                            className="border px-2 py-1 rounded w-full"
                          >
                            <option value="">Select</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-end items-center mt-4 pt-3 border-t">
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)} // Close dropdown on reset
                          className="mr-2 border px-4 py-1 rounded"
                        >
                          Reset
                        </button>
                        <button
                          type="submit"
                          className="bg-blue-500 text-white px-4 py-1 rounded"
                        >
                          Apply
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-500 my-5">
            <div className="flex flex-nowrap overflow-auto py-5 pl-5">
              <div className="flex flex-col mr-4 flex-grow">
                <div class="mb-3">
                  <h6>Monday</h6>
                </div>
                <div className="bg-red-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    09:00 - 09:45 AM
                  </p>
                  <p class="text-gray-800">Subject : Maths</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile2}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Niharika
                    </a>
                  </div>
                </div>
                <div className="bg-blue-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    09:45 - 10:30 AM
                  </p>
                  <p class="text-gray-800">Subject : English</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile3}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Karan
                    </a>
                  </div>
                </div>
                <div className="bg-green-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    10:45 - 11:30 AM
                  </p>
                  <p class="text-gray-800">Subject : Computer</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile4}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Vishal
                    </a>
                  </div>
                </div>
                <div className="bg-yellow-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    11:30 - 12:15 PM
                  </p>
                  <p class="text-gray-800">Subject : Hindi</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile1}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Neha
                    </a>
                  </div>
                </div>
                <div className="bg-gray-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    12:15 - 01:00 PM
                  </p>
                  <p class="text-gray-800">Subject : Science</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile5}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Radha
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mr-4 flex-grow">
                <div class="mb-3">
                  <h6>Tuesday</h6>
                </div>
                <div className="bg-yellow-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    09:00 - 09:45 AM
                  </p>
                  <p class="text-gray-800">Subject : Hindi</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile1}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Neha
                    </a>
                  </div>
                </div>
                <div className="bg-green-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    09:45 - 10:30 AM
                  </p>
                  <p class="text-gray-800">Subject : Computer</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile4}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Vishal
                    </a>
                  </div>
                </div>
                <div className="bg-blue-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    10:45 - 11:30 AM
                  </p>
                  <p class="text-gray-800">Subject : English</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile3}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Karan
                    </a>
                  </div>
                </div>
                <div className="bg-red-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    11:30 - 12:15 PM
                  </p>
                  <p class="text-gray-800">Subject : Maths</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile2}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Niharika
                    </a>
                  </div>
                </div>
                <div className="bg-violet-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    12:15 - 01:00 PM
                  </p>
                  <p class="text-gray-800">Subject : Science</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile6}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Gaurav
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mr-4 flex-grow">
                <div class="mb-3">
                  <h6>Wednesday</h6>
                </div>
                <div className="bg-gray-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    09:00 - 09:45 AM
                  </p>
                  <p class="text-gray-800">Subject : Science</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile5}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Radha
                    </a>
                  </div>
                </div>
                <div className="bg-violet-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    09:45 - 10:30 AM
                  </p>
                  <p class="text-gray-800">Subject : Maths</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile6}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Gaurav
                    </a>
                  </div>
                </div>
                <div className="bg-yellow-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    10:45 - 11:30 AM
                  </p>
                  <p class="text-gray-800">Subject : Hindi</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile1}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Neha
                    </a>
                  </div>
                </div>
                <div className="bg-green-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    11:30 - 12:15 PM
                  </p>
                  <p class="text-gray-800">Subject : Computer</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile4}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Vishal
                    </a>
                  </div>
                </div>
                <div className="bg-blue-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    12:15 - 01:00 PM
                  </p>
                  <p class="text-gray-800">Subject : English</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile3}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Karan
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mr-4 flex-grow">
                <div class="mb-3">
                  <h6>Thursday</h6>
                </div>
                <div className="bg-violet-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    09:00 - 09:45 AM
                  </p>
                  <p class="text-gray-800">Subject : Science</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile6}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Gaurav
                    </a>
                  </div>
                </div>
                <div className="bg-red-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    09:45 - 10:30 AM
                  </p>
                  <p class="text-gray-800">Subject : Maths</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile2}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Niharika
                    </a>
                  </div>
                </div>
                <div className="bg-gray-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    10:45 - 11:30 AM
                  </p>
                  <p class="text-gray-800">Subject : Hindi</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile5}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Radha
                    </a>
                  </div>
                </div>
                <div className="bg-blue-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    11:30 - 12:15 PM
                  </p>
                  <p class="text-gray-800">Subject : English</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile3}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Karan
                    </a>
                  </div>
                </div>
                <div className="bg-yellow-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    12:15 - 01:00 PM
                  </p>
                  <p class="text-gray-800">Subject : Computer</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile1}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Neha
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mr-4 flex-grow">
                <div class="mb-3">
                  <h6>Friday</h6>
                </div>
                <div className="bg-blue-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    09:00 - 09:45 AM
                  </p>
                  <p class="text-gray-800">Subject : English</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile3}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Karan
                    </a>
                  </div>
                </div>
                <div className="bg-yellow-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    09:45 - 10:30 AM
                  </p>
                  <p class="text-gray-800">Subject : Hindi</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile1}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Neha
                    </a>
                  </div>
                </div>
                <div className="bg-red-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    10:45 - 11:30 AM
                  </p>
                  <p class="text-gray-800">Subject : Maths</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile2}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Niharika
                    </a>
                  </div>
                </div>
                <div className="bg-gray-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    11:30 - 12:15 PM
                  </p>
                  <p class="text-gray-800">Subject : Science</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile5}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Radha
                    </a>
                  </div>
                </div>
                <div className="bg-green-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    12:15 - 01:00 PM
                  </p>
                  <p class="text-gray-800">Subject : Computer</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile4}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Vishal
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mr-4 flex-grow">
                <div class="mb-3">
                  <h6>Saturday</h6>
                </div>
                <div className="bg-yellow-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    09:00 - 09:45 AM
                  </p>
                  <p class="text-gray-800">Subject : Hindi</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile1}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Neha
                    </a>
                  </div>
                </div>
                <div className="bg-blue-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    09:45 - 10:30 AM
                  </p>
                  <p class="text-gray-800">Subject : English</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile3}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Karan
                    </a>
                  </div>
                </div>
                <div className="bg-violet-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    10:45 - 11:30 AM
                  </p>
                  <p class="text-gray-800">Subject : Science</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile6}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Gaurav
                    </a>
                  </div>
                </div>
                <div className="bg-red-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    11:30 - 12:15 PM
                  </p>
                  <p class="text-gray-800">Subject : Maths</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile2}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Niharika
                    </a>
                  </div>
                </div>
                <div className="bg-gray-500 bg-opacity-10 rounded p-3 mb-4">
                  <p className="flex items-center whitespace-nowrap mb-1">
                    <AiOutlineClockCircle className="mr-1" />
                    12:15 - 01:00 PM
                  </p>
                  <p class="text-gray-800">Subject : Computer</p>
                  <div className="bg-white rounded p-1 mt-3">
                    <a
                      href="/teacher-details"
                      className="text-gray-500 flex items-center"
                    >
                      <span className="avatar avatar-sm mr-2">
                        <img
                          src={profile5}
                          alt="Teacher"
                          className="w-8 h-8 rounded-md"
                        />
                      </span>
                      Radha
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default ClassTimeTable;
