import React from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";
import idCard from "/idCard.jpg";
function StudentDashboard() {
  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="grid grid-cols-3 gap-5 mx-5">
            <div className="col-span-3">
              <div className="shadow-custom-all-sides rounded-md">
                <div className="px-5 py-5 my-5 bg-white rounded-md">
                  <h2 className="text-xl font-semibold text-gray-800 mx-5 text-center">
                    Personal Information
                  </h2>
                  <img src={idCard} className="rounded-full h-40 w-40 bg-gray-500 my-5"></img>
                  <div className="grid grid-cols-2 py-5">
                    <div className="flex gap-4">
                      <h2 className="text-lg font-medium text-gray-500">
                        Student
                      </h2>
                      <p className="text-gray-500 text-base mt-1">
                        Karan Gupta
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <h2 className="text-lg font-medium text-gray-500">
                        Roll No:
                      </h2>
                      <p className="text-gray-500 text-base mt-1">
                        001
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <h2 className="text-lg font-medium text-gray-500">
                        Session
                      </h2>
                      <p className="text-gray-500 text-base mt-1">2024-2025</p>
                    </div>
                    <div className="flex gap-4">
                      <h2 className="text-lg font-medium text-gray-500">
                        Class
                      </h2>
                      <p className="text-gray-500 text-base mt-1">9th</p>
                    </div>
                    <div className="flex gap-4">
                      <h2 className="text-lg font-medium text-gray-500">
                        Father Name:
                      </h2>
                      <p className="text-gray-500 text-base mt-1">Vivek Gupta</p>
                    </div>
                    <div className="flex gap-4">
                      <h2 className="text-lg font-medium text-gray-500">
                        Mother Name:
                      </h2>
                      <p className="text-gray-500 text-base mt-1">Gita Gupta</p>
                    </div>
                    <div className="flex gap-4">
                      <h2 className="text-lg font-medium text-gray-500">
                      Board:
                      </h2>
                      <p className="text-gray-500 text-base mt-1">CBSE</p>
                    </div>
                    <div className="flex gap-4">
                      <h2 className="text-lg font-medium text-gray-500">
                        School Name:
                      </h2>
                      <p className="text-gray-500 text-base mt-1">Greenwood High School</p>
                    </div>
                    <div className="flex gap-4">
                      <h2 className="text-lg font-medium text-gray-500">
                        School Email:
                      </h2>
                      <p className="text-gray-500 text-base mt-1">info@school.com</p>
                    </div>
                    <div className="flex gap-4">
                      <h2 className="text-lg font-medium text-gray-500">
                        School Address:
                      </h2>
                      <p className="text-gray-500 text-base mt-1">jp road Andheri</p>
                    </div>
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

export default StudentDashboard;
