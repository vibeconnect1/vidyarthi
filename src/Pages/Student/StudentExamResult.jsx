import React, { useState } from "react";
import Table from "../../ConfigurationFile/Table";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";

function StudentExamResult() {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  const columns = [
    { name: "Paper Code", selector: (row) => row.paperCode },
    { name: "Subject", selector: (row) => row.subject },
    { name: "Subject Type", selector: (row) => row.subjectType },
    { name: "Maximum Marks", selector: (row) => row.maximumMarks },
    { name: "Obtained Marks", selector: (row) => row.obtainedMarks },
    { name: "Grade", selector: (row) => row.grade },
  ];

  const data = [
    {
      paperCode: "101",
      subject: "English",
      subjectType: "Theory",
      maximumMarks: 100,
      obtainedMarks: 85,
      grade: "A",
    },
    {
      paperCode: "102",
      subject: "Hindi",
      subjectType: "Theory",
      maximumMarks: 100,
      obtainedMarks: 90,
      grade: "A",
    },
    {
      paperCode: "103",
      subject: "Math",
      subjectType: "Practical",
      maximumMarks: 100,
      obtainedMarks: 78,
      grade: "B",
    },
    {
      paperCode: "104",
      subject: "Science",
      subjectType: "Theory",
      maximumMarks: 100,
      obtainedMarks: 92,
      grade: "A",
    },
  ];
  const totalObtainedMarks = data.reduce(
    (total, item) => total + item.obtainedMarks,
    0
  );

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="bg-white rounded-md my-5 px-5 pb-5">
        <div className="flex justify-between items-center border-b pb-2 my-5">
          <h2 className="text-lg font-medium">Exams & Results</h2>
          <div className="flex gap-4">
            <div>
              <select className="block w-48 px-3 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="">
                  <CiCalendar /> This Year 2024/2025
                </option>
                <option value="">This Year 2023/2024</option>
                <option value="">This Year 2022/2023</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md py-3 border">
          <div className="flex justify-between px-5">
            <h2 className="font-medium text-gray-600">Week Test</h2>
            <button className="mx-5" onClick={() => toggleSection("weekTest")}>
              <IoIosArrowUp
                className={`transition-transform ${
                  openSection === "weekTest" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {openSection === "weekTest" && (
            <div className="border-t pb-5 my-5 px-5">
              <Table columns={columns} data={data} pagination />
              <div className="mt-2 flex justify-start">
                <p className="text-lg font-semibold text-gray-700">
                  Total Obtained Marks: {totalObtainedMarks}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white rounded-md py-3 px-5 border my-3">
          <div className="flex justify-between">
            <h2 className="font-medium text-gray-600">Monthly Test</h2>
            <button className="mx-5" onClick={() => toggleSection("monthlyTest")}>
              <IoIosArrowUp
                className={`transition-transform ${
                  openSection === "monthlyTest" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {openSection === "monthlyTest" && (
            <div>
              <Table columns={columns} data={data} pagination />
              <div className="mt-2 flex justify-start">
                <p className="text-lg font-semibold text-gray-700">
                  Total Obtained Marks: {totalObtainedMarks}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white rounded-md py-3 px-5 border my-3">
          <div className="flex justify-between">
            <h2 className="font-medium text-gray-600">Unit Test</h2>
            <button className="mx-5" onClick={() => toggleSection("unitTest")}>
              <IoIosArrowUp
                className={`transition-transform ${
                  openSection === "unitTest" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {openSection === "unitTest" && (
            <div>
              <Table columns={columns} data={data} pagination />
              <div className="mt-2 flex justify-start">
                <p className="text-lg font-semibold text-gray-700">
                  Total Obtained Marks: {totalObtainedMarks}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white rounded-md py-3 px-5 border my-3">
          <div className="flex justify-between">
            <h2 className="font-medium text-gray-600">Semester Exam</h2>
            <button className="mx-5" onClick={() => toggleSection("semesterExam")}>
              <IoIosArrowUp
                className={`transition-transform ${
                  openSection === "semesterExam" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {openSection === "semesterExam" && (
            <div>
              <Table columns={columns} data={data} pagination />
              <div className="mt-2 flex justify-start">
                <p className="text-lg font-semibold text-gray-700">
                  Total Obtained Marks: {totalObtainedMarks}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white rounded-md py-3 px-5 border my-3">
          <div className="flex justify-between">
            <h2 className="font-medium text-gray-600">Annual Exam</h2>
            <button className="mx-5" onClick={() => toggleSection("annualExam")}>
              <IoIosArrowUp
                className={`transition-transform ${
                  openSection === "annualExam" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {openSection === "annualExam" && (
            <div>
              <Table columns={columns} data={data} pagination />
              <div className="mt-2 flex justify-start">
                <p className="text-lg font-semibold text-gray-700">
                  Total Obtained Marks: {totalObtainedMarks}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentExamResult;
