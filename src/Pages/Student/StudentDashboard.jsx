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
import { AiOutlineDownload } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import { BiSolidFilePdf } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import StudentClassTimeTable from "./StudentClassTimeTable";
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
                        img: "/student-06.jpg",
                      },
                      {
                        name: "Julie Scott",
                        class: "V, A",
                        img: "/student-07.jpg",
                      },
                    ].map((sibling, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 rounded-lg p-3"
                      >
                        <img
                          src={sibling.img}
                          alt={sibling.name}
                          className="w-12 h-12 rounded-md mr-3"
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
                <div className="my-5 w-full">
                  <div className="bg-white rounded-md py-5">
                    <div className="border-b py-2 px-5">
                      <h2>Parents Information</h2>
                    </div>
                    <div className="flex justify-between border my-5 mx-5 px-5 py-3 rounded-md">
                      <div className="flex gap-2">
                        <div className="">
                          <img
                            src="/parent-13.jpg "
                            className="h-12 w-12 rounded-md"
                          ></img>
                        </div>
                        <div>
                          <h2 className="text-gray-600 font-medium">
                            Jerald Vicinius
                          </h2>
                          <span className="text-blue-800">Father</span>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-gray-600 font-medium">Phone</h2>
                        <span className="text-gray-800">+25945 46864</span>
                      </div>
                      <div>
                        <h2 className="text-gray-600 font-medium">Email</h2>
                        <span className="text-blue-800">jera@example.com</span>
                      </div>
                      <div>
                        <h2 className="text-gray-600 font-medium">
                          Jerald Vicinius
                        </h2>
                        <span className="text-blue-800">Father</span>
                      </div>
                    </div>
                    <div className="flex justify-between border my-5 mx-5 px-5 py-3 rounded-md">
                      <div className="flex gap-2">
                        <div className="">
                          <img
                            src="/parent-14.jpg "
                            className="h-12 w-12 rounded-md"
                          ></img>
                        </div>
                        <div>
                          <h2 className="text-gray-600 font-medium">
                            Roberta Webber
                          </h2>
                          <span className="text-blue-800">Mother</span>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-gray-600 font-medium">Phone</h2>
                        <span className="text-gray-800">+22945 46864</span>
                      </div>
                      <div>
                        <h2 className="text-gray-600 font-medium">Email</h2>
                        <span className="text-blue-800">jera@example.com</span>
                      </div>
                      <div>
                        <h2 className="text-gray-600 font-medium">
                          Jerald Vicinius
                        </h2>
                        <span className="text-blue-800">Father</span>
                      </div>
                    </div>
                    <div className="flex justify-between border my-5 mx-5 px-5 py-3 rounded-md">
                      <div className="flex gap-2">
                        <div className="">
                          <img
                            src="/parent-13.jpg "
                            className="h-12 w-12 rounded-md"
                          ></img>
                        </div>
                        <div>
                          <h2 className="text-gray-600 font-medium">
                            Jerald Vicinius
                          </h2>
                          <span className="text-blue-800">Father</span>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-gray-600 font-medium">Phone</h2>
                        <span className="text-gray-800">+21045 46864</span>
                      </div>
                      <div>
                        <h2 className="text-gray-600 font-medium">Email</h2>
                        <span className="text-blue-800">jera@example.com</span>
                      </div>
                      <div>
                        <h2 className="text-gray-600 font-medium">
                          Jerald Vicinius
                        </h2>
                        <span className="text-blue-800">Father</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-5 my-5">
                    <div className="col-span-6 bg-white rounded-md py-2">
                      <div className="border-b py-2 px-5">
                        <h2>Documents</h2>
                      </div>
                      <div className="flex justify-between border my-5 mx-5 px-5 py-2 rounded-md items-center">
                        <div className="flex gap-3">
                          <span>
                            <BiSolidFilePdf className="h-10 w-10 text-gray-300 rounded-md" />
                          </span>
                          <span className="text-gray-800 flex items-center">
                            BirthCertificate.pdf
                          </span>
                        </div>
                        <div>
                          <span className="bg-black rounded-md flex justify-items-center text-white p-2">
                            <AiOutlineDownload />
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between border my-5 mx-5 px-5 py-2 rounded-md items-center">
                        <div className="flex gap-3">
                          <span>
                            <BiSolidFilePdf className="h-10 w-10 text-gray-300 rounded-md" />
                          </span>
                          <span className="text-gray-800 flex items-center">
                            Transfer Certificate.pdf
                          </span>
                        </div>
                        <div>
                          <span className="bg-black rounded-md flex justify-items-center text-white p-2">
                            <AiOutlineDownload />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 bg-white rounded-md py-2">
                      <div className="border-b py-2 px-5">
                        <h2>Address</h2>
                      </div>
                      <div className="flex justify-between border my-5 mx-5 px-5 py-2 rounded-md">
                        <div className="flex gap-2 items-center">
                          <div className="flex bg-gray-100 h-10 w-10 rounded-md items-center justify-center">
                            <IoLocationOutline />
                          </div>
                          <div>
                            <h2 className="text-gray-600 font-medium">
                              Current Address
                            </h2>
                            <span className="text-gray-800 text-sm">
                              3495 Red Hawk Road, Buffalo Lake, MN 55314
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between border my-5 mx-5 px-5 py-2 rounded-md">
                        <div className="flex gap-2 items-center">
                          <div className="flex bg-gray-100 h-10 w-10 rounded-md items-center justify-center">
                            <CiLocationArrow1 />
                          </div>
                          <div>
                            <h2 className="text-gray-600 font-medium">
                              Permanent Address
                            </h2>
                            <span className="text-gray-800 text-sm">
                              3495 Red Hawk Road, Buffalo Lake, MN 55314
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-5 my-5">
                    <div className="col-span-12 bg-white rounded-md py-2">
                      <div className="border-b py-2 px-5">
                        <h2>Previous School Details</h2>
                      </div>
                      <div className="grid grid-cols-2 py-3 mx-5 rounded-md items-center">
                        <div className="flex flex-col">
                          <h2 className="font-medium">Previous School Name</h2>
                          <span className="text-gray-800 flex items-center">
                            Oxford Matriculation, USA
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <h2 className="font-medium">School Address</h2>
                          <span className="text-gray-800 flex items-center">
                            1852 Barnes Avenue, Cincinnati, OH 45202
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-5 my-5">
                    <div className="col-span-6 bg-white rounded-md py-2">
                      <div className="border-b py-2 px-5">
                        <h2>Bank Details</h2>
                      </div>
                      <div className="flex justify-between mx-5 px-5 py-2 rounded-md items-center">
                        <div className="flex flex-col">
                          <h2 className="font-medium">Bank Name</h2>
                          <span className="text-gray-800 flex items-center">
                            Bank of America
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <h2 className="font-medium">Branch</h2>
                          <span className="text-gray-800 flex items-center">
                            Cincinnati
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <h2 className="font-medium">IFSC</h2>
                          <span className="text-gray-800 flex items-center">
                            BOA83209832
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 bg-white rounded-md py-2">
                      <div className="border-b py-2 px-5">
                        <h2>Medical History</h2>
                      </div>
                      <div className="flex justify-between mx-5 px-5 py-2 rounded-md items-center">
                        <div className="flex flex-col">
                          <h2 className="font-medium">Known Allergies</h2>
                          <span className="text-gray-800 flex items-center bg-gray-100 rounded-md w-fit py-1 px-3 my-1 text-xs">
                            Rashes
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <h2 className="font-medium">Medications</h2>
                          <span className="text-gray-800 flex items-center"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-5 my-5">
                    <div className="col-span-12 bg-white rounded-md py-2">
                      <div className="border-b py-2 px-5">
                        <h2>Previous School Details</h2>
                      </div>
                      <p className="text-gray-800 text-sm py-2 px-5">
                        Depending on the specific needs of your organization or
                        system, additional information may be collected or
                        tracked. It's important to ensure that any data
                        collected complies with privacy regulations and policies
                        to protect students' sensitive information.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {studentHeader === "Time-Table" && (
                <div>
                  <StudentClassTimeTable/>
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
