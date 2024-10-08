import React, { useState } from "react";
import InstituteDetails from "./InstituteDetails";
import { BiEdit } from "react-icons/bi";
import { LuRefreshCw } from "react-icons/lu";
import {
  FaBookReader,
  FaBullhorn,
  FaCalendarAlt,
  FaCalendarDay,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaGlobe,
  FaMoneyBillAlt,
  FaPlus,
  FaRegCalendarAlt,
  FaRegCalendarCheck,
  FaTimes,
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
          size: "70%",
        },
      },
    },
  });

  const [chartSeriesPerformance] = useState([45, 11, 2]);

  const [fees, setFees] = useState(false);

  const option = {
    chart: {
      type: "bar",
      height: 290,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Q1 2023",
        "Q2 2023",
        "Q3 2023",
        "Q4 2023",
        "Q1 2024",
        "Q2 2024",
        "Q3 2024",
        "Q4 2024",
        "Q1 2025",
      ],
    },
    yaxis: {
      title: {
        text: "Fee Amount",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val;
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#3d5ee1", "#e9edf4"],
  };

  const series = [
    {
      name: "Collected Fee",
      data: [30, 40, 38, 40, 38, 30, 35, 38, 40],
    },
    {
      name: "Total Fee",
      data: [45, 50, 48, 50, 48, 40, 40, 50, 55],
    },
  ];

  const [leaveDropdownOpen, setLeaveDropdownOpen] = useState(false);
  const [leaveRequests, setLeaveRequests] = useState([
    {
      name: "James",
      role: "Physics Teacher",
      badgeType: "Emergency",
      badgeColor: "bg-red-500",
      avatar: "/teacher-01.jpg",
      leaveDuration: "12 - 13 May",
      applyDate: "12 May",
    },
    {
      name: "Ramien",
      role: "Accountant",
      badgeType: "Casual",
      badgeColor: "bg-yellow-500",
      avatar: "/teacher-01.jpg",
      leaveDuration: "12 - 13 May",
      applyDate: "11 May",
    },
  ]);

  const toggleLeaveDropdown = () => {
    setLeaveDropdownOpen(!leaveDropdownOpen);
  };

  const earningsOptions = {
    chart: {
      type: "area",
      height: 200,
      toolbar: {
        show: false, // Disable the toolbar to remove icons
      },
    },
    colors: ["#3d5ee1"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    series: [
      {
        name: "Earnings",
        data: [43, 0, 86, 43, 64.5, 21.5, 43],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.65,
        opacityTo: 0.5,
      },
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
  };

  const expensesOptions = {
    chart: {
      type: "area",
      height: 200,
      toolbar: {
        show: false, // Disable the toolbar to remove icons
      },
    },
    colors: ["#f56565"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    series: [
      {
        name: "Expenses",
        data: [42, 48, 40, 50, 45, 55, 50],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.65,
        opacityTo: 0.5,
      },
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
  };

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
                <div className="bg-red-100 rounded-md p-2 mr-2">
                  <img
                    src="/student.svg"
                    alt="Student"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">3654</h2>
                    <span className="bg-red-500 text-white px-2 rounded-md text-sm">
                      1.2%
                    </span>
                  </div>
                  <p>Total Students</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t mt-3 pt-3">
                <p className="mb-0">
                  Active:
                  <span className="text-gray-800 font-semibold">3643</span>
                </p>
                <span className="text-gray-500">|</span>
                <p>
                  Inactive:
                  <span className="text-gray-800 font-semibold">11</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col h-full">
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-md p-2 mr-2">
                  <img
                    src="/teacher.svg"
                    alt="Teacher"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">284</h2>
                    <span className="bg-blue-500 text-white px-2 rounded-md text-sm">
                      1.2%
                    </span>
                  </div>
                  <p>Total Teachers</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t mt-3 pt-3">
                <p className="mb-0">
                  Active:
                  <span className="text-gray-800 font-semibold">254</span>
                </p>
                <span className="text-gray-500">|</span>
                <p>
                  Inactive:
                  <span className="text-gray-800 font-semibold">30</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col h-full">
              <div className="flex items-center">
                <div className="bg-yellow-100 rounded-md p-2 mr-2">
                  <img
                    src="/staff.svg"
                    alt="Staff"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">162</h2>
                    <span className="bg-yellow-500 text-white px-2 rounded-md text-sm">
                      1.2%
                    </span>
                  </div>
                  <p>Total Staff</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t mt-3 pt-3">
                <p className="mb-0">
                  Active:
                  <span className="text-gray-800 font-semibold">161</span>
                </p>
                <span className="text-gray-500">|</span>
                <p>
                  Inactive:
                  <span className="text-gray-800 font-semibold">02</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col h-full">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-md p-2 mr-2">
                  <img
                    src="/subject.svg"
                    alt="Subjects"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">82</h2>
                    <span className="bg-green-500 text-white px-2 rounded-md text-sm">
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
        <div className="grid grid-cols-12 gap-5 mx-5">
          <div className="col-span-8 bg-white p-4 rounded-md">
            <div className="flex justify-between">
              <h2 className="text-gray-800 text-lg">Fees Collection</h2>
              <div className="relative">
                <button
                  className="px-4 flex items-center rounded-md cursor-pointer"
                  onClick={() => setFees(!fees)}
                >
                  Last 8 Quarters
                </button>
                {fees && (
                  <ul className="absolute top-6 w-48 bg-white border right-0 mt-2 rounded-md p-3 space-y-3 z-20">
                    <li>This Month</li>
                    <li>This Year</li>
                    <li>Last 12 Quarters</li>
                    <li>Last 16 Quarters</li>
                  </ul>
                )}
              </div>
            </div>
            <div className="border-t">
              <div id="fees-chart">
                <Chart
                  options={option}
                  series={series}
                  type="bar"
                  height={290}
                />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="max-w-md mx-auto">
              <div className="bg-white shadow-md rounded-lg">
                <div className="flex items-center justify-between p-4">
                  <h4 className="text-lg font-semibold">Leave Requests</h4>
                  <div className="relative">
                    <button
                      onClick={toggleLeaveDropdown}
                      className="bg-white px-4 py-2 flex items-center rounded-md cursor-pointer"
                    >
                      <FaCalendarDay className="mr-2" />
                      Today
                    </button>
                    {leaveDropdownOpen && (
                      <ul className="absolute mt-2 bg-white border w-48 right-0 space-y-2 rounded-md shadow-lg p-3">
                        <li className="cursor-pointer">This Week</li>
                        <li className="cursor-pointer">Last Week</li>
                        <li className="cursor-pointer">Last Month</li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="p-4 border-t">
                  {leaveRequests.map((request, index) => (
                    <div className="bg-gray-50 p-4 rounded-lg mb-4" key={index}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <img
                            src={request.avatar}
                            alt="Profile"
                            className="w-12 h-12 rounded-full mr-3"
                          />
                          <div>
                            <h6 className="text-md font-semibold">
                              {request.name}
                              <span
                                className={`ml-2 text-xs px-2 py-1 rounded ${request.badgeColor} text-white`}
                              >
                                {request.badgeType}
                              </span>
                            </h6>
                            <p className="text-sm">{request.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button className="bg-green-500 text-white p-2 rounded-full mr-2">
                            <FaCheck />
                          </button>
                          <button className="bg-red-500 text-white p-2 rounded-full">
                            <FaTimes />
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <p className="text-sm">
                          Leave: {request.leaveDuration}
                        </p>
                        <p className="text-sm">
                          Applied on: {request.applyDate}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mx-5 my-5">
          {/* View Attendance Card */}
          <div className="flex">
            <a
              href="/student-attendance"
              className="card bg-yellow-100 border-4 border-white rounded-lg flex-grow hover:shadow-lg transition-all"
            >
              <div className="card-body p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="bg-yellow-500 rounded-lg p-3 mr-3">
                      <FaCalendarAlt className="text-white text-2xl" />
                    </span>
                    <div className="overflow-hidden">
                      <h6 className="font-semibold text-gray-800">
                        View Attendance
                      </h6>
                    </div>
                  </div>
                  <span className="btn btn-white bg-white text-yellow-500 p-2 rounded-full">
                    <FaChevronRight className="text-sm" />
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* New Events Card */}
          <div className="flex">
            <a
              href="/events"
              className="card bg-green-100 border-4 border-white rounded-lg flex-grow hover:shadow-lg transition-all"
            >
              <div className="card-body p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="bg-green-500 rounded-lg p-3 mr-3">
                      <FaBullhorn className="text-white text-2xl" />
                    </span>
                    <div className="overflow-hidden">
                      <h6 className="font-semibold text-gray-800">
                        New Events
                      </h6>
                    </div>
                  </div>
                  <span className="btn btn-white bg-white text-green-500 p-2 rounded-full">
                    <FaChevronRight className="text-sm" />
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Membership Plans Card */}
          <div className="flex">
            <a
              href="/membership-plans"
              className="card bg-red-100 border-4 border-white rounded-lg flex-grow hover:shadow-lg transition-all"
            >
              <div className="card-body p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="bg-red-500 rounded-lg p-3 mr-3">
                      <FaGlobe className="text-white text-2xl" />
                    </span>
                    <div className="overflow-hidden">
                      <h6 className="font-semibold text-gray-800">
                        Membership Plans
                      </h6>
                    </div>
                  </div>
                  <span className="btn btn-white bg-white text-red-500 p-2 rounded-full">
                    <FaChevronRight className="text-sm" />
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Finance & Accounts Card */}
          <div className="flex">
            <a
              href="/finance-accounts"
              className="card bg-gray-100 border-4 border-white rounded-lg flex-grow hover:shadow-lg transition-all"
            >
              <div className="card-body p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="bg-gray-500 rounded-lg p-3 mr-3">
                      <FaMoneyBillAlt className="text-white text-2xl" />
                    </span>
                    <div className="overflow-hidden">
                      <h6 className="font-semibold text-gray-800">
                        Finance & Accounts
                      </h6>
                    </div>
                  </div>
                  <span className="btn btn-white bg-white text-gray-500 p-2 rounded-full">
                    <FaChevronRight className="text-sm" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 mx-5">
          <div className="col-span-4 space-y-2">
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h6 className="text-gray-600">Total Earnings</h6>
                  <h2 className="text-2xl font-semibold">₹64,52,224</h2>
                </div>
                <span className="rounded-full bg-blue-500 p-3">
                  <i className="ti ti-user-dollar text-white text-2xl"></i>
                </span>
              </div>
              <div>
                <Chart
                  options={earningsOptions}
                  series={earningsOptions.series}
                  type="area"
                  height={100}
                />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h6 className="text-gray-600">Total Expenses</h6>
                  <h2 className="text-2xl font-semibold">₹60,52,224</h2>
                </div>
                <span className="rounded-full bg-red-500 p-3">
                  <i className="ti ti-user-dollar text-white text-2xl"></i>
                </span>
              </div>
              <div>
                <Chart
                  options={expensesOptions}
                  series={expensesOptions.series}
                  type="area"
                  height={100}
                />
              </div>
            </div>
          </div>
          <div class="col-span-4 bg-white rounded-md">
            <div class="flex items-center justify-between p-4 border-b border-gray-200">
              <h4 class="text-lg font-semibold">Notice Board</h4>
              <a href="notice-board.html" class="font-medium text-blue-600">
                View All
              </a>
            </div>
            <div class="flex flex-col space-y-5 px-3 py-5">
              <div class="flex items-center justify-between">
                <div class="flex items-center overflow-hidden ml-2 gap-2">
                  <span class="bg-blue-100 rounded-full flex-shrink-0 p-2">
                    <FaBookReader />
                  </span>
                  <div class="overflow-hidden">
                    <h6 class="text-truncate mb-1">
                      New Syllabus Instructions
                    </h6>
                    <p class="text-sm text-gray-600 flex gap-2 items-center">
                      <FaRegCalendarCheck />
                      Added on: 11 Mar 2024
                    </p>
                  </div>
                </div>
                <span class="bg-gray-100 text-xs rounded-md px-3 py-1">
                  20 Days
                </span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center overflow-hidden me-2">
                  <span class="bg-green-100 rounded-full flex-shrink-0 p-2">
                    <i class="ti ti-note text-xl"></i>
                  </span>
                  <div class="overflow-hidden">
                    <h6 class="text-truncate mb-1">
                      World Environment Day Program.....!!!
                    </h6>
                    <p class="text-sm text-gray-600">
                      <i class="ti ti-calendar me-2"></i>Added on: 21 Apr 2024
                    </p>
                  </div>
                </div>
                <span class="bg-light text-dark rounded-full px-3 py-1">
                  <i class="ti ti-clock me-1"></i>15 Days
                </span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center overflow-hidden me-2">
                  <span class="bg-red-100 rounded-full flex-shrink-0 p-2">
                    <i class="ti ti-bell-check text-xl"></i>
                  </span>
                  <div class="overflow-hidden">
                    <h6 class="text-truncate mb-1">
                      Exam Preparation Notification!
                    </h6>
                    <p class="text-sm text-gray-600">
                      <i class="ti ti-calendar me-2"></i>Added on: 13 Mar 2024
                    </p>
                  </div>
                </div>
                <span class="bg-light text-dark rounded-full px-3 py-1">
                  <i class="ti ti-clock me-1"></i>12 Days
                </span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center overflow-hidden me-2">
                  <span class="bg-sky-100 rounded-full flex-shrink-0 p-2">
                    <i class="ti ti-notes text-xl"></i>
                  </span>
                  <div class="overflow-hidden">
                    <h6 class="text-truncate mb-1">
                      Online Classes Preparation
                    </h6>
                    <p class="text-sm text-gray-600">
                      <i class="ti ti-calendar me-2"></i>Added on: 24 May 2024
                    </p>
                  </div>
                </div>
                <span class="bg-light text-dark rounded-full px-3 py-1">
                  <i class="ti ti-clock me-1"></i>02 Days
                </span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center overflow-hidden me-2">
                  <span class="bg-yellow-100 rounded-full flex-shrink-0 p-2">
                    <i class="ti ti-package text-xl"></i>
                  </span>
                  <div class="overflow-hidden">
                    <h6 class="text-truncate mb-1">Exam Time Table Release</h6>
                    <p class="text-sm text-gray-600">
                      <i class="ti ti-calendar me-2"></i>Added on: 24 May 2024
                    </p>
                  </div>
                </div>
                <span class="bg-light text-dark rounded-full px-3 py-1">
                  <i class="ti ti-clock me-1"></i>06 Days
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-1 space-y-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <p className="mb-2 text-gray-600">Total Fees Collected</p>
                <div className="flex items-end justify-between">
                  <h4 className="text-2xl font-bold">$25,000,02</h4>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold text-green-600 bg-green-100">
                    <i className="ri-arrow-up-line mr-1"></i>1.2%
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <p className="mb-2 text-gray-600">Fine Collected till date</p>
                <div className="flex items-end justify-between">
                  <h4 className="text-2xl font-bold">$4,56,64</h4>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold text-red-600 bg-red-100">
                    <i className="ri-arrow-down-line mr-1"></i>1.2%
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <p className="mb-2 text-gray-600">Student Not Paid</p>
                <div className="flex items-end justify-between">
                  <h4 className="text-2xl font-bold">$545</h4>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold text-blue-600 bg-blue-100">
                    <i className="ri-arrow-up-line mr-1"></i>1.2%
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <p className="mb-2 text-gray-600">Total Outstanding</p>
                <div className="flex items-end justify-between">
                  <h4 className="text-2xl font-bold">$4,56,64</h4>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold text-red-600 bg-red-100">
                    <i className="ri-arrow-down-line mr-1"></i>1.2%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 flex justify-between items-center border-b">
                <h4 className="text-lg font-semibold">Top Subjects</h4>
                <div className="relative">
                  <button
                    className="bg-white flex items-center text-gray-700 px-3 py-2 rounded-md"
                    id="classDropdown"
                  >
                    <i className="ri-school-line mr-2"></i>Class II
                  </button>
                  <ul
                    className="hidden absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
                    id="classDropdownMenu"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Class I
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Class II
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Class III
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Class IV
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-4">
                <div className="bg-green-100 text-green-800 p-3 rounded-md mb-4 flex items-center">
                  <i className="ri-information-line mr-2"></i>
                  <p className="text-sm">
                    These Results are obtained from the syllabus completion on
                    the respective Class
                  </p>
                </div>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-700">Maths</span>
                      <span className="text-gray-600 text-sm">20%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full"></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-700">Physics</span>
                      <span className="text-gray-600 text-sm">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-purple-600 h-2.5 rounded-full"></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-700">Chemistry</span>
                      <span className="text-gray-600 text-sm">40%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-cyan-500 h-2.5 rounded-full"></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-700">Botany</span>
                      <span className="text-gray-600 text-sm">50%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full"></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-700">English</span>
                      <span className="text-gray-600 text-sm">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full"></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-700">Spanish</span>
                      <span className="text-gray-600 text-sm">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full"></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-700">Japanese</span>
                      <span className="text-gray-600 text-sm">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 flex justify-between items-center border-b">
                <h4 className="text-lg font-semibold">Student Activity</h4>
                <div className="relative">
                  <button className="bg-white flex items-center text-gray-700 px-3 py-2 rounded-md">
                    <i className="ri-calendar-line mr-2"></i>This Month
                  </button>
                  <ul className="hidden absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        This Month
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        This Year
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Last Week
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center p-3 border rounded-lg">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="student"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h6 className="font-semibold">1st place in "Chess"</h6>
                    <p className="text-sm text-gray-600">
                      This event took place in Our School
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 border rounded-lg">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="student"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h6 className="font-semibold">Participated in "Carrom"</h6>
                    <p className="text-sm text-gray-600">
                      Justin Lee participated in "Carrom"
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 border rounded-lg">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="student"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h6 className="font-semibold">1st place in "100M"</h6>
                    <p className="text-sm text-gray-600">
                      This event took place in Our School
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 border rounded-lg">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="student"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h6 className="font-semibold">International conference</h6>
                    <p className="text-sm text-gray-600">
                      We attended international conference
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 flex justify-between items-center border-b">
                <h4 className="text-lg font-semibold">Todo</h4>
                <div className="relative">
                  <button className="bg-white flex items-center text-gray-700 px-3 py-2 rounded-md">
                    <i className="ri-calendar-line mr-2"></i>Today
                  </button>
                  <ul className="hidden absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        This Month
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        This Year
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Last Week
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <div className="ml-3">
                        <h6 className="font-semibold line-through">
                          Send Reminder to Students
                        </h6>
                        <p className="text-sm text-gray-600">01:00 PM</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Completed
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <div className="ml-3">
                        <h6 className="font-semibold">
                          Create Routine to new staff
                        </h6>
                        <p className="text-sm text-gray-600">04:50 PM</p>
                      </div>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Inprogress
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <div className="ml-3">
                        <h6 className="font-semibold">
                          Extra Class Info to Students
                        </h6>
                        <p className="text-sm text-gray-600">04:55 PM</p>
                      </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Yet to Start
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <div className="ml-3">
                        <h6 className="font-semibold">
                          Fees for Upcoming Academics
                        </h6>
                        <p className="text-sm text-gray-600">04:55 PM</p>
                      </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Yet to Start
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <div className="ml-3">
                        <h6 className="font-semibold">English - Essay on Visit</h6>
                        <p className="text-sm text-gray-600">05:55 PM</p>
                      </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Yet to Start
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolDashboard;
