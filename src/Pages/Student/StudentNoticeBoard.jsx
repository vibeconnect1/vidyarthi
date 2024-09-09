import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";
import { AiTwotoneNotification } from "react-icons/ai";

function StudentNoticeBoard() {
  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="grid grid-cols-3 gap-5 mx-5 my-5">
            <Link to="/student/student-notice-details" className="bg-white rounded-md p-5 hover:bg-gray-100">
              <h2 className="text-lg font-semibold mb-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <AiTwotoneNotification className="" />
                  <span>Notice</span>
                </div>
                <span className="text-gray-500">September 6, 2024</span>
              </h2>
              <p className="text-gray-600">
                Details about the notice go here. Note reason: School will be closed for maintenance.
              </p>
            </Link>

            <Link to="/student/student-notice-details" className="bg-white rounded-md p-5 hover:bg-gray-100">
              <h2 className="text-lg font-semibold mb-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <AiTwotoneNotification className="" />
                  <span>Holiday</span>
                </div>
                <span className="text-gray-500">September 5, 2024</span>
              </h2>
              <p className="text-gray-600">
                Details about the notice go here. Note reason: National holiday.
              </p>
            </Link>

            <Link to="/student/student-notice-details" className="bg-white rounded-md p-5 hover:bg-gray-100">
              <h2 className="text-lg font-semibold mb-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <AiTwotoneNotification className="" />
                  <span>Event</span>
                </div>
                <span className="text-gray-500">September 4, 2024</span>
              </h2>
              <p className="text-gray-600">
                Details about the notice go here. Note reason: Annual sports day.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentNoticeBoard;
