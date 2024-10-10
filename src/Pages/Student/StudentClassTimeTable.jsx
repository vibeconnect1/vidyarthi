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

function StudentClassTimeTable() {
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
  return (
    <section>
      <div className="w-full flex flex-col overflow-hidden">
        <div className="bg-white rounded-md my-5">
          <div className="flex items-center justify-between flex-wrap p-4">
            <h4 className="text-xl font-bold">Time Table</h4>
          </div>
          <div className="border-t">
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

export default StudentClassTimeTable