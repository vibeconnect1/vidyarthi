import React, { useState } from "react";
import InstituteDetails from "./InstituteDetails";
import { BiEdit } from "react-icons/bi";
import { LuRefreshCw } from "react-icons/lu";
import {
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaPlus,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { PiCalendarDotLight } from "react-icons/pi";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import Chart from "react-apexcharts";
import { TbCalendarShare, TbReportSearch } from "react-icons/tb";
import { GiHexagonalNut } from "react-icons/gi";
import { SlNotebook } from "react-icons/sl";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdNotifications } from "react-icons/md";
function SchoolDashboard() {
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const [currentDate, setCurrentDate] = useState(new Date(2024, 8, 29)); // September 29, 2024

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const renderCalendarDays = () => {
    const days = [];
    const totalDays = 42; // 6 rows * 7 days

    for (let i = 0; i < totalDays; i++) {
      const dayNumber = i - startingDayOfWeek + 1;
      const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
      const isSelected = dayNumber === currentDate.getDate() && isCurrentMonth;

      days.push(
        <div
          key={i}
          className={`p-2 text-center ${
            isCurrentMonth ? "text-gray-700" : "text-gray-400"
          } ${isSelected ? "bg-blue-500 text-white rounded-lg" : ""}`}
        >
          {isCurrentMonth
            ? dayNumber
            : dayNumber <= 0
            ? lastDayOfMonth.getDate() + dayNumber
            : dayNumber - daysInMonth}
        </div>
      );
    }

    return days;
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const [activeTab, setActiveTab] = useState("students");

  const [chartOptionsStudent] = useState({
    chart: {
      type: "donut",
    },
    labels: ["Present", "Absent"],
    colors: ["#3D5EE1", "#6FCCD8"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#fff"],
      },
    },
  });

  const [chartSeriesStudent] = useState([98.8, 1.2]);

  const [chartOptionsTeacher] = useState({
    chart: {
      type: "donut",
    },
    labels: ["Present", "Absent"],
    colors: ["#3D5EE1", "#6FCCD8"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#fff"],
      },
    },
  });

  const [chartSeriesTeacher] = useState([86.5, 13.5]);

  const [chartOptionsStaff] = useState({
    chart: {
      type: "donut",
    },
    labels: ["Present", "Absent"],
    colors: ["#3D5EE1", "#6FCCD8"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#fff"],
      },
    },
  });

  const [chartSeriesStaff] = useState([88.6, 12.4]);

  const [performance, setPerformance] = useState(false);

  const [chartPerformance] = useState({
    chart: {
      type: "donut",
    },
    labels: [], 
    colors: ["#1E90FF", "#32CD32", "#FF6347"], 
    legend: {
      position: "bottom",
    },
    legend: {
      show: false, // Hide the legend entirely
    },
    dataLabels: {
      enabled: false, 
    },
    stroke: {
      width: 2, 
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%', 
        },
      },
    },
  });
 
  const [chartSeriesPerformance] = useState([45, 11, 2]);

  return (
    <div className="flex">
      <InstituteDetails />
      <div className="w-full flex flex-col overflow-hidden">
        <div className="md:flex block items-center justify-between mb-3 mx-5 my-5">
          <div class="my-auto mb-2">
            <h3 class="text-2xl font-bold mb-1">Admin Dashboard</h3>
            <nav>
              <ol class="flex text-gray-500 space-x-2">
                <li>
                  <a href="index.html" class="text-blue-500 hover:underline">
                    Dashboard
                  </a>
                </li>
                <li class="text-gray-400" aria-current="page">
                  Admin Dashboard
                </li>
              </ol>
            </nav>
          </div>
          <div class="flex items-center flex-wrap mt-3 md:mt-0">
            <div class="mb-2">
              <a
                href="add-student.html"
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center mr-3"
              >
                <i class="ti ti-square-rounded-plus mr-2"></i>Add New Student
              </a>
            </div>
            <div class="mb-2">
              <a
                href="collect-fees.html"
                class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded flex items-center"
              >
                Fees Details
              </a>
            </div>
          </div>
        </div>
        <div className="w-full px-5">
          <div className="bg-gray-900 rounded-md relative">
            <div className="">
              <img
                src="/shape-04.png"
                alt="img"
                className="absolute top-0 left-1/3 w-5 h-5"
              />
              <img
                src="/shape-01.png"
                alt="img"
                className="absolute bottom-0 right-1/3 w-20 h-12"
              />
              <img
                src="/shape-02.png"
                alt="img"
                className="absolute top-0 right-60 w-12 h-8"
              />
              <img
                src="/shape-03.png"
                alt="img"
                className="absolute bottom-0 right-56 w-16 h-6"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between flex-col xl:flex-row">
                <div className="mb-3 xl:mb-0">
                  <div className="flex items-center flex-wrap mb-2">
                    <h1 className="text-white mr-2 text-2xl">
                      Welcome Back, Mr. Herald
                    </h1>
                    <a
                      href="profile.html"
                      className="bg-gray-800 hover:bg-gray-700 rounded-md text-white p-1"
                    >
                      <BiEdit size={20} />
                    </a>
                  </div>
                  <p className="text-white">Have a Good day at work</p>
                </div>
                <p className="text-white flex gap-2 items-center">
                  <LuRefreshCw size={20} />
                  Updated Recently on 15 Jun 2024
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col h-full">
              <div className="flex items-center">
                <div className="bg-red-100 rounded-full p-2 mr-2">
                  <img
                    src="assets/img/icons/student.svg"
                    alt="Student"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">3654</h2>
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full">
                      1.2%
                    </span>
                  </div>
                  <p>Total Students</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t mt-3 pt-3">
                <p className="mb-0">
                  Active:{" "}
                  <span className="text-gray-800 font-semibold">3643</span>
                </p>
                <span className="text-gray-500">|</span>
                <p>
                  Inactive:{" "}
                  <span className="text-gray-800 font-semibold">11</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col h-full">
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-2">
                  <img
                    src="assets/img/icons/teacher.svg"
                    alt="Teacher"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">284</h2>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full">
                      1.2%
                    </span>
                  </div>
                  <p>Total Teachers</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t mt-3 pt-3">
                <p className="mb-0">
                  Active:{" "}
                  <span className="text-gray-800 font-semibold">254</span>
                </p>
                <span className="text-gray-500">|</span>
                <p>
                  Inactive:{" "}
                  <span className="text-gray-800 font-semibold">30</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col h-full">
              <div className="flex items-center">
                <div className="bg-yellow-100 rounded-full p-2 mr-2">
                  <img
                    src="assets/img/icons/staff.svg"
                    alt="Staff"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">162</h2>
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full">
                      1.2%
                    </span>
                  </div>
                  <p>Total Staff</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t mt-3 pt-3">
                <p className="mb-0">
                  Active:{" "}
                  <span className="text-gray-800 font-semibold">161</span>
                </p>
                <span className="text-gray-500">|</span>
                <p>
                  Inactive:{" "}
                  <span className="text-gray-800 font-semibold">02</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col h-full">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-2">
                  <img
                    src="assets/img/icons/subject.svg"
                    alt="Subjects"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">82</h2>
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full">
                      1.2%
                    </span>
                  </div>
                  <p>Total Subjects</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t mt-3 pt-3">
                <p className="mb-0">
                  Active:{" "}
                  <span className="text-gray-800 font-semibold">81</span>
                </p>
                <span className="text-gray-500">|</span>
                <p>
                  Inactive:{" "}
                  <span className="text-gray-800 font-semibold">01</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 mx-5">
          <div className="col-span-4">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Schedules</h2>
                <button
                  className="text-blue-500 hover:text-blue-600 flex items-center"
                  aria-label="Add New Schedule"
                >
                  <FaPlus size={20} />
                  <span className="ml-1">Add New</span>
                </button>
              </div>
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={prevMonth}
                  className="text-gray-600 hover:text-gray-800"
                  aria-label="Previous Month"
                >
                  <FaChevronLeft size={20} />
                </button>
                <h3 className="text-lg font-semibold text-gray-700">
                  {currentDate.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </h3>
                <button
                  onClick={nextMonth}
                  className="text-gray-600 hover:text-gray-800"
                  aria-label="Next Month"
                >
                  <FaChevronRight size={20} />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="text-center font-semibold text-gray-600"
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {renderCalendarDays()}
              </div>
            </div>
            <div class="bg-white overflow-auto px-5">
              <div class="border-l-4 border-sky-400 shadow-sm p-4 mb-4">
                <div class="flex items-center mb-3 pb-3 border-b">
                  <span class="avatar p-1 mr-2 bg-teal-200 flex-shrink-0">
                    <i class="ti ti-user-edit text-blue-600 text-xl"></i>
                  </span>
                  <div class="flex-grow">
                    <h6 class="mb-1 text-lg font-semibold">
                      Parents, Teacher Meet
                    </h6>
                    <p class="flex items-center text-sm text-gray-600">
                      <i class="ti ti-calendar mr-1"></i> 15 July 2024
                    </p>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <p class="mb-0 text-sm text-gray-600">
                    <i class="ti ti-clock mr-1"></i> 09:10 AM - 10:50 PM
                  </p>
                  <div class="flex -space-x-2">
                    <span class="inline-block border-0">
                      <img
                        src="assets/img/parents/parent-01.jpg"
                        class="rounded-full w-8 h-8"
                        alt="img"
                      />
                    </span>
                    <span class="inline-block border-0">
                      <img
                        src="assets/img/parents/parent-07.jpg"
                        class="rounded-full w-8 h-8"
                        alt="img"
                      />
                    </span>
                    <span class="inline-block border-0">
                      <img
                        src="assets/img/parents/parent-02.jpg"
                        class="rounded-full w-8 h-8"
                        alt="img"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div class="border-l-4 border-blue-400 shadow-sm p-4 mb-4">
                <div class="flex items-center mb-3 pb-3 border-b">
                  <span class="avatar p-1 mr-2 bg-blue-200 flex-shrink-0">
                    <i class="ti ti-user-edit text-xl"></i>
                  </span>
                  <div class="flex-grow">
                    <h6 class="mb-1 text-lg font-semibold">
                      Parents, Teacher Meet
                    </h6>
                    <p class="flex items-center text-sm text-gray-600">
                      <i class="ti ti-calendar mr-1"></i> 15 July 2024
                    </p>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <p class="mb-0 text-sm text-gray-600">
                    <i class="ti ti-clock mr-1"></i> 09:10 AM - 10:50 PM
                  </p>
                  <div class="flex -space-x-2">
                    <span class="inline-block border-0">
                      <img
                        src="assets/img/parents/parent-05.jpg"
                        class="rounded-full w-8 h-8"
                        alt="img"
                      />
                    </span>
                    <span class="inline-block border-0">
                      <img
                        src="assets/img/parents/parent-06.jpg"
                        class="rounded-full w-8 h-8"
                        alt="img"
                      />
                    </span>
                    <span class="inline-block border-0">
                      <img
                        src="assets/img/parents/parent-07.jpg"
                        class="rounded-full w-8 h-8"
                        alt="img"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div class="border-l-4 border-red-400 shadow-sm p-4 mb-4">
                <div class="flex items-center mb-3 pb-3 border-b">
                  <span class="avatar p-1 mr-2 bg-red-200 flex-shrink-0">
                    <i class="ti ti-vacuum-cleaner text-xl"></i>
                  </span>
                  <div class="flex-grow">
                    <h6 class="mb-1 text-lg font-semibold">Vacation Meeting</h6>
                    <p class="flex items-center text-sm text-gray-600">
                      <i class="ti ti-calendar mr-1"></i> 07 July 2024 - 07 July
                      2024
                    </p>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <p class="mb-0 text-sm text-gray-600">
                    <i class="ti ti-clock mr-1"></i> 09:10 AM - 10:50 PM
                  </p>
                  <div class="flex -space-x-2">
                    <span class="inline-block border-0">
                      <img
                        src="assets/img/parents/parent-11.jpg"
                        class="rounded-full w-8 h-8"
                        alt="img"
                      />
                    </span>
                    <span class="inline-block border-0">
                      <img
                        src="assets/img/parents/parent-13.jpg"
                        class="rounded-full w-8 h-8"
                        alt="img"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="bg-white rounded-md">
              <div className="flex items-center justify-between px-5 py-2 border-b">
                <h4 className="text-lg font-semibold">Attendance</h4>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-2 bg-white px-3 py-2 rounded-md"
                  >
                    <PiCalendarDotLight size={15} /> Today
                    <IoIosArrowDown size={20} />
                  </button>

                  {dropdownOpen && (
                    <ul className="absolute left-0 mt-2 p-3 w-40 bg-white shadow-lg rounded-md">
                      <li>
                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                          This Week
                        </button>
                      </li>
                      <li>
                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                          Last Week
                        </button>
                      </li>
                      <li>
                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                          Last Month
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="mb-4 px-5 py-5">
                <ul className="flex space-x-4 border-b gap-3 pb-2">
                  <li>
                    <a
                      href="#"
                      className={`${
                        activeTab === "students"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600"
                      } pb-2`}
                      onClick={() => setActiveTab("students")}
                      role="tab"
                    >
                      Students
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`${
                        activeTab === "teachers"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600"
                      } pb-2`}
                      onClick={() => setActiveTab("teachers")}
                      role="tab"
                    >
                      Teachers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`${
                        activeTab === "staff"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600"
                      } pb-2`}
                      onClick={() => setActiveTab("staff")}
                      role="tab"
                    >
                      Staff
                    </a>
                  </li>
                </ul>

                {/* Tab Content */}
                <div className="mt-4">
                  {activeTab === "students" && (
                    <div id="students">
                      <div className="py-5">
                        <div className="flex gap-3">
                          <div className="bg-gray-100 rounded-md w-full">
                            <div className="p-3 text-center">
                              <h5 className="text-lg font-medium">28</h5>
                              <p className="text-sm">Emergency</p>
                            </div>
                          </div>
                          <div className="bg-gray-100 rounded-md w-full">
                            <div className="card-body p-3 text-center">
                              <h5 className="text-lg font-medium">01</h5>
                              <p className="text-sm">Absent</p>
                            </div>
                          </div>
                          <div className="bg-gray-100 rounded-md w-full">
                            <div className="p-3 text-center">
                              <h5 className="text-lg font-medium">01</h5>
                              <p className="text-sm">Late</p>
                            </div>
                          </div>
                        </div>

                        <div className="text-center mt-6">
                          <div id="student-chart" className="mb-4">
                            <Chart
                              options={chartOptionsStudent}
                              series={chartSeriesStudent}
                              type="donut"
                              height="300"
                            />
                          </div>
                          <a
                            href="student-attendance.html"
                            className="bg-gray-200 py-2 px-4 rounded-md inline-flex items-center gap-2"
                          >
                            <TbCalendarShare />
                            View All
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "teachers" && (
                    <div id="teachers">
                      <div className="py-5">
                        <div className="flex gap-3">
                          <div className="bg-gray-100 rounded-md w-full">
                            <div className="p-3 text-center">
                              <h5 className="text-lg font-medium">30</h5>
                              <p className="text-sm">Emergency</p>
                            </div>
                          </div>
                          <div className="bg-gray-100 rounded-md w-full">
                            <div className="card-body p-3 text-center">
                              <h5 className="text-lg font-medium">03</h5>
                              <p className="text-sm">Absent</p>
                            </div>
                          </div>
                          <div className="bg-gray-100 rounded-md w-full">
                            <div className="p-3 text-center">
                              <h5 className="text-lg font-medium">03</h5>
                              <p className="text-sm">Late</p>
                            </div>
                          </div>
                        </div>

                        <div className="text-center mt-6">
                          <div id="student-chart" className="mb-4">
                            <Chart
                              options={chartOptionsTeacher}
                              series={chartSeriesTeacher}
                              type="donut"
                              height="300"
                            />
                          </div>
                          <a
                            href="student-attendance.html"
                            className="bg-gray-200 py-2 px-4 rounded-md inline-flex items-center gap-2"
                          >
                            <TbCalendarShare />
                            View All
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "staff" && (
                    <div id="staff">
                      <div className="py-5">
                        <div className="flex gap-3">
                          <div className="bg-gray-100 rounded-md w-full">
                            <div className="p-3 text-center">
                              <h5 className="text-lg font-medium">45</h5>
                              <p className="text-sm">Emergency</p>
                            </div>
                          </div>
                          <div className="bg-gray-100 rounded-md w-full">
                            <div className="card-body p-3 text-center">
                              <h5 className="text-lg font-medium">01</h5>
                              <p className="text-sm">Absent</p>
                            </div>
                          </div>
                          <div className="bg-gray-100 rounded-md w-full">
                            <div className="p-3 text-center">
                              <h5 className="text-lg font-medium">10</h5>
                              <p className="text-sm">Late</p>
                            </div>
                          </div>
                        </div>

                        <div className="text-center mt-6">
                          <div id="student-chart" className="mb-4">
                            <Chart
                              options={chartOptionsStaff}
                              series={chartSeriesStaff}
                              type="donut"
                              height="300"
                            />
                          </div>
                          <a
                            href="student-attendance.html"
                            className="bg-gray-200 py-2 px-4 rounded-md inline-flex items-center gap-2"
                          >
                            <TbCalendarShare />
                            View All
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex">
              <div className=""></div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="bg-white rounded-md p-2">
              <div className="flex items-center px-5 pt-1">
                <h2 className="text-lg font-semibold">Quick Links</h2>
              </div>
              <div className="border-t my-5">
                <div className="grid grid-cols-3 gap-5 my-5 mx-5">
                  <div className="bg-green-50 rounded p-2 text-center mb-3">
                    <div className="flex justify-center">
                      <div className="w-14 h-14 border p-1 border-green-400 rounded-full mb-2">
                        <div className="inline-flex items-center justify-center w-full h-full bg-green-400 rounded-full">
                          <button>
                            <FaRegCalendarAlt className="text-xl text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-sm">Calender</h2>
                  </div>
                  <div className="bg-blue-50 rounded p-2 text-center mb-3">
                    <div className="flex justify-center">
                      <div className="w-14 h-14 border p-1 border-blue-400 rounded-full mb-2">
                        <div className="inline-flex items-center justify-center w-full h-full bg-blue-400 rounded-full">
                          <button>
                            <GiHexagonalNut className="text-xl text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-sm">Exam Result</h2>
                  </div>
                  <div className="bg-yellow-50 rounded p-2 text-center mb-3">
                    <div className="flex justify-center">
                      <div className="w-14 h-14 border p-1 border-yellow-400 rounded-full mb-2">
                        <div className="inline-flex items-center justify-center w-full h-full bg-yellow-400 rounded-full">
                          <button>
                            <TbCalendarShare className="text-xl text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-sm">Attendance</h2>
                  </div>
                  <div className="bg-cyan-50 rounded p-2 text-center mb-3">
                    <div className="flex justify-center">
                      <div className="w-14 h-14 border p-1 border-cyan-400 rounded-full mb-2">
                        <div className="inline-flex items-center justify-center w-full h-full bg-cyan-400 rounded-full">
                          <button>
                            <FaFileAlt className="text-xl text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-sm">Fees</h2>
                  </div>
                  <div className="bg-red-50 rounded p-2 text-center mb-3">
                    <div className="flex justify-center">
                      <div className="w-14 h-14 border p-1 border-red-400 rounded-full mb-2">
                        <div className="inline-flex items-center justify-center w-full h-full bg-red-400 rounded-full">
                          <button>
                            <SlNotebook className="text-xl text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-sm">Home Work</h2>
                  </div>
                  <div className="bg-sky-50 rounded p-2 text-center mb-3">
                    <div className="flex justify-center">
                      <div className="w-14 h-14 border p-1 border-sky-400 rounded-full mb-2">
                        <div className="inline-flex items-center justify-center w-full h-full bg-sky-400 rounded-full">
                          <button>
                            <TbReportSearch className="text-xl text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-sm">Report</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-2 my-5">
              <div className="flex items-center justify-between px-5">
                <h2 className="text-lg font-semibold">Class Routine</h2>
                <div className="flex gap-1 items-center  text-blue-500">
                  <span>
                    <IoAddCircleOutline />
                  </span>
                  <h2 className="text-sm font-medium">Add New</h2>
                </div>
              </div>
              <div className="border-t my-5">
                <div className="flex items-center border rounded-md p-3 my-3">
                  <span className="flex-shrink-0 border rounded me-2">
                    <img
                      src="/teacher-01.jpg"
                      className="h-10 w-10 rounded-md"
                      alt="Profile"
                    />
                  </span>
                  <div className="w-full">
                    <p className="mb-1">Oct 2024</p>
                    <div className="progress progress-xs flex-grow mb-1">
                      <div className="bg-gray-200 h-1">
                        <div
                          className="bg-blue-500 h-full"
                          style={{ width: "80%" }}
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center border rounded-md  p-3 mb-3">
                  <span className="flex-shrink-0 border rounded me-2">
                    <img
                      src="/teacher-02.jpg"
                      className="h-10 w-10 rounded-md"
                      alt="Profile"
                    />
                  </span>
                  <div className="w-full">
                    <p className="mb-1">Oct 2024</p>
                    <div className="progress progress-xs flex-grow mb-1">
                      <div className="bg-gray-200  h-1">
                        <div
                          className="bg-green-500 h-full"
                          style={{ width: "60%" }}
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center border rounded-md  p-3 mb-3">
                  <span className="flex-shrink-0 border rounded me-2">
                    <img
                      src="/teacher-03.jpg"
                      className="h-10 w-10 rounded-md"
                      alt="Profile"
                    />
                  </span>
                  <div className="w-full">
                    <p className="mb-1">Nov 2024</p>
                    <div className="progress progress-xs flex-grow mb-1">
                      <div className="bg-gray-200 h-1">
                        <div
                          className="bg-yellow-500 h-full"
                          style={{ width: "50%" }}
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-2 my-5">
              <div className="flex items-center justify-between px-5">
                <h2 className="text-lg font-semibold">Performance</h2>
                <div className="relative">
                  <button
                    className="flex items-center gap-1 text-gray-500"
                    onClick={() => setPerformance(!performance)}
                  >
                    <MdNotifications className="transform rotate-45" />
                    <h2>Class</h2>
                    <IoIosArrowDown size={20} />
                  </button>
                  {performance && (
                    <ul className="absolute -right-7  mt-2  p-3 w-40 bg-white shadow-lg rounded-md z-20">
                      <li>
                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                          Class I
                        </button>
                      </li>
                      <li>
                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                          Class II
                        </button>
                      </li>
                      <li>
                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                          Class III
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="border-t my-5 py-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="mb-3 w-full">
                    <div className="border border-dashed p-3 rounded flex items-center justify-between mb-1">
                      <p className="mb-0 me-2 flex items-center">
                        <IoMdArrowDropdown
                          size={20}
                          className="ti ti-arrow-badge-down-filled me-2 text-blue-500"
                        />
                        Top
                      </p>
                      <h5>45</h5>
                    </div>
                    <div className="border border-dashed p-3 rounded flex items-center justify-between mb-1">
                      <p className="mb-0 me-2 flex items-center">
                        <IoMdArrowDropdown
                          size={20}
                          className="ti ti-arrow-badge-down-filled me-2 text-yellow-500"
                        />
                        Average
                      </p>
                      <h5>11</h5>
                    </div>
                    <div className="border border-dashed p-3 rounded flex items-center justify-between mb-0">
                      <p className="mb-0 me-2 flex items-center">
                        <IoMdArrowDropdown
                          size={20}
                          className="ti ti-arrow-badge-down-filled me-2 text-red-500"
                        />
                        Below Avg
                      </p>
                      <h5>02</h5>
                    </div>
                  </div>
                  <div id="student-chart" className="mb-4">
                    <Chart
                      options={chartPerformance}
                      series={chartSeriesPerformance}
                      type="donut"
                      height="300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolDashboard;
