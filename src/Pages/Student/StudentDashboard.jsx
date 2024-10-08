import React, { useState } from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";
import {
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaBus,
  FaCircle,
  FaPlus,
} from "react-icons/fa";
function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("hostel");
  const [studentHeader, setStudentHeader] = useState("Student-details");
  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="grid grid-cols-12 gap-5 mx-5">
            <div className="col-span-3 w-full">
              <div className="w-full max-w-sm mx-auto space-y-5">
                {/* Student Info Card */}
                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative w-24 h-24 rounded-md border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                      <img
                        src="/student-01.jpg"
                        alt="Janet Daniel"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <FaCircle className="w-2 h-2 mr-1 text-green-400" />
                        Active
                      </span>
                      <h5 className="text-lg font-semibold mt-1">
                        Janet Daniel
                      </h5>
                      <p className="text-blue-600">AD1256589</p>
                    </div>
                  </div>

                  <h5 className="font-semibold mb-3">Basic Information</h5>
                  <dl className="grid grid-cols-2 gap-x-3 gap-y-4">
                    {[
                      { label: "Roll No", value: "35013" },
                      { label: "Gender", value: "Female" },
                      { label: "Date Of Birth", value: "25 Jan 2008" },
                      { label: "Blood Group", value: "O +ve" },
                      { label: "Blood Group", value: "Red" },
                      { label: "Religion", value: "Christianity" },
                      { label: "Caste", value: "Catholic" },
                      { label: "Category", value: "OBC" },
                      { label: "Mother tongue", value: "English" },
                      {
                        label: "Language",
                        value: (
                          <div>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                              English
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                              Spanish
                            </span>
                          </div>
                        ),
                      },
                    ].map((item, index) => (
                      <React.Fragment key={index}>
                        <dt className="font-medium text-gray-700">
                          {item.label}
                        </dt>
                        <dd className="text-gray-900">{item.value}</dd>
                      </React.Fragment>
                    ))}
                  </dl>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                    <FaPlus className="mr-2" />
                    Add Fees
                  </button>
                </div>

                {/* Primary Contact Info Card */}
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h5 className="font-semibold mb-3">Primary Contact Info</h5>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <FaPhone className="w-5 h-5 text-gray-600" />
                      </span>
                      <div>
                        <span className="text-sm font-medium text-gray-700">
                          Phone Number
                        </span>
                        <p className="text-gray-900">+1 46548 84498</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <FaEnvelope className="w-5 h-5 text-gray-600" />
                      </span>
                      <div>
                        <span className="text-sm font-medium text-gray-700">
                          Email Address
                        </span>
                        <p className="text-gray-900">jan@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sibling Information Card */}
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h5 className="font-semibold mb-3">Sibling Information</h5>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Ralph Claudia",
                        class: "III, B",
                        img: "/placeholder.svg?height=48&width=48",
                      },
                      {
                        name: "Julie Scott",
                        class: "V, A",
                        img: "/placeholder.svg?height=48&width=48",
                      },
                    ].map((sibling, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 rounded-lg p-3"
                      >
                        <img
                          src={sibling.img}
                          alt={sibling.name}
                          className="w-12 h-12 rounded-full mr-3"
                        />
                        <div>
                          <h6 className="font-medium">{sibling.name}</h6>
                          <p className="text-sm text-gray-600">
                            {sibling.class}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hostel and Transportation Card */}
                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex border-b mb-4">
                    <button
                      className={`pb-2 px-4 ${
                        activeTab === "hostel"
                          ? "border-b-2 border-blue-500 text-blue-600"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveTab("hostel")}
                    >
                      Hostel
                    </button>
                    <button
                      className={`pb-2 px-4 ${
                        activeTab === "transport"
                          ? "border-b-2 border-blue-500 text-blue-600"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveTab("transport")}
                    >
                      Transportation
                    </button>
                  </div>
                  {activeTab === "hostel" && (
                    <div className="flex items-center">
                      <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <FaBuilding className="w-5 h-5 text-gray-600" />
                      </span>
                      <div>
                        <h6 className="font-medium">HI-Hostel, Floor</h6>
                        <p className="text-blue-600">Room No : 25</p>
                      </div>
                    </div>
                  )}
                  {activeTab === "transport" && (
                    <div>
                      <div className="flex items-center mb-3">
                        <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          <FaBus className="w-5 h-5 text-gray-600" />
                        </span>
                        <div>
                          <span className="text-sm text-gray-600">Route</span>
                          <p className="font-medium">Newyork</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm text-gray-600">
                            Bus Number
                          </span>
                          <p className="font-medium">AM 54548</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">
                            Pickup Point
                          </span>
                          <p className="font-medium">Cincinatti</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-span-9  w-full">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex border-b gap-5 mb-4">
                  <button
                    className={`pb-2 px-4 ${
                      studentHeader === "Student-details"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setStudentHeader("Student-details")}
                  >
                    Student Details
                  </button>
                  <button
                    className={`pb-2 px-4 ${
                      studentHeader === "Time-Table"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setStudentHeader("Time-Table")}
                  >
                    Time Table
                  </button>
                  <button
                    className={`pb-2 px-4 ${
                      studentHeader === "leave"
                        ? "border-b-2 border-blue-500 text-blue-600 whitespace-nowrap"
                        : "text-gray-500 whitespace-nowrap"
                    }`}
                    onClick={() => setStudentHeader("leave")}
                  >
                    Leave & Attendance
                  </button>
                  <button
                    className={`pb-2 px-4 ${
                      studentHeader === "Fees"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setStudentHeader("Fees")}
                  >
                    Fees
                  </button>
                  <button
                    className={`pb-2 px-4 ${
                      studentHeader === "Exam-Results"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setStudentHeader("Exam-Results")}
                  >
                    Exam & Results
                  </button>
                  <button
                    className={`pb-2 px-4 ${
                      studentHeader === "Library"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setStudentHeader("Library")}
                  >
                    Library
                  </button>
                </div>
              </div>
              {studentHeader === "Student-details" && (
                  <div className="bg-white rounded-md my-5 w-full">
                    <div className="border-b py-2 px-5">
                      <h2>Parents Information</h2>
                    </div>
                    <div>
                      <div></div>
                    </div>
                  </div>
                )}
                {activeTab === "transport" && (
                  <div className="bg-white my-5">
                    <div className="flex items-center mb-3">
                      <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <FaBus className="w-5 h-5 text-gray-600" />
                      </span>
                      <div>
                        <span className="text-sm text-gray-600">Route</span>
                        <p className="font-medium">Newyork</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-600">
                          Bus Number
                        </span>
                        <p className="font-medium">AM 54548</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">
                          Pickup Point
                        </span>
                        <p className="font-medium">Cincinatti</p>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
