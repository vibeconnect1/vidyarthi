import React, { useState } from "react";
import InstituteDetails from "./InstituteDetails";
import ClassAndDivision from "./ClassAndDivision";
import Subject from "./Subject";
import StudyMaterials from "./StudyMaterials";
import Attendance from "./Attendance";
import ClassTimeTable from "./ClassTimeTable";
import AssignHomework from "./AssignHomework";

function AcademicDetails() {
  const [activeSection, setActiveSection] = useState("classAndDivision");

  return (
    <section className="flex">
      <InstituteDetails />
      <div className="w-full flex flex-col overflow-hidden">
        <div className="flex justify-around mx-5 my-3 text-base font-medium text-gray-500 p-2 bg-white rounded-md shadow-xl">
          <div>
            <h2
              className={`p-3 text-slate-800 cursor-pointer ${
                activeSection === "classAndDivision" ? "text-violet-700" : ""
              }`}
              onClick={() => setActiveSection("classAndDivision")}
            >
              Class And Division
            </h2>
          </div>

          <div>
            <h2
              className={`p-3 text-slate-800 cursor-pointer ${
                activeSection === "subject" ? "text-violet-700" : ""
              }`}
              onClick={() => setActiveSection("subject")}
            >
              Subject
            </h2>
          </div>

          <div>
            <h2
              className={`p-3 text-slate-800 cursor-pointer ${
                activeSection === "studyMaterials" ? "text-violet-700" : ""
              }`}
              onClick={() => setActiveSection("studyMaterials")}
            >
              Study Materials
            </h2>
          </div>
          <div>
            <h2
              className={`p-3 text-slate-800 cursor-pointer ${
                activeSection === "homework" ? "text-violet-700" : ""
              }`}
              onClick={() => setActiveSection("homework")}
            >
              Homework
            </h2>
          </div>
          <div>
            <h2
              className={`p-3 text-slate-800 cursor-pointer ${
                activeSection === "attendance" ? "text-violet-700" : ""
              }`}
              onClick={() => setActiveSection("attendance")}
            >
              Attendance
            </h2>
          </div>
          <div>
            <h2
              className={`p-3 text-slate-800 cursor-pointer ${
                activeSection === "classTimeTable" ? "text-violet-700" : ""
              }`}
              onClick={() => setActiveSection("classTimeTable")}
            >
              Class Time Table
            </h2>
          </div>
        </div>
        <div className="mx-5">
          {activeSection === "classAndDivision" && (
            <div>
              <ClassAndDivision />
            </div>
          )}
          {activeSection === "subject" && (
            <div>
              <Subject/>
            </div>
          )}
          {activeSection === "studyMaterials" && (
            <div>
              <StudyMaterials/>
            </div>
          )}
          {activeSection === "attendance" && (
            <div>
              <Attendance/>
            </div>
          )}
          {activeSection === "classTimeTable" && (
            <div>
              <ClassTimeTable/>
            </div>
          )}
          {activeSection === "homework" && (
            <div>
              <AssignHomework/>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AcademicDetails;
