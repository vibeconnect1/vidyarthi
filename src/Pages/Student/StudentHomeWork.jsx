import React, { useState, useEffect } from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";
import { FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";

function StudentHomeWork() {
  const [homework, setHomework] = useState([
    {
      title: "Equation",
      Subject: "Math",
      description: "Complete problems 1 to 5 on page 20.",
      dueDate: "2024-09-10",
      Attachment: <FaFile size={20} />,
    },
  ]);

  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <h2 className="text-xl font-semibold text-gray-700">
              Homework
            </h2>
            <div>
              <Link to={'/student/student-homework-submit'} className="border border-gray-500 rounded-md px-4 p-1">
                Submit Home
              </Link>
            </div>
          </div>
          <div className="bg-white mx-5 rounded-md">
            {homework.length === 0 ? (
              <p className="mx-5 text-red-500">There is no homework assigned</p>
            ) : (
              <div className="mx-5">
                {homework.map((hw, index) => (
                  <div key={index} className="mb-4 py-5 space-y-2">
                    <h3 className="text-lg font-semibold">{hw.title}</h3>
                    <p className="text-gray-600">{hw.Subject}</p>
                    <p className="text-gray-600">{hw.description}</p>
                    <p className="text-sm text-gray-500">Due: {hw.dueDate}</p>
                    <p className="text-sm text-gray-500 my-2">
                      {hw.Attachment}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHomeWork;
