import React from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";
import idCard from "/idCard.jpg";
import qrcode from "/QrCode.png";

function StudentIdCard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 gap-5 p-5">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-8 py-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Student ID Card
                </h2>

                <div className="border-b border-gray-300 mb-6"></div>

                <div className="flex items-start">
                  {/* Student Photo and Text */}
                  <div className="mr-8 flex flex-col items-center">
                    <img
                      src={idCard}
                      alt="Student ID"
                      className="h-48 w-40 object-cover rounded-lg shadow-lg border border-gray-200"
                    />
                    <p className="text-sm text-red-500 mt-2 text-center">
                      Max. File Size: 500 KB
                    </p>
                  </div>

                  {/* Student Details */}
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-800">
                      Student Name:{" "}
                      <span className="text-gray-600 ml-2">Karan Singh</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-800 mt-3">
                      Class:{" "}
                      <span className="text-gray-600 ml-2">9th</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-800 mt-3">
                      Division:{" "}
                      <span className="text-gray-600 ml-2">D</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-800 mt-3">
                      Enr No:{" "}
                      <span className="text-gray-600 ml-2">B679</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-800 mt-3">
                      Date of Birth:{" "}
                      <span className="text-gray-600 ml-2">01/05/2018</span>
                    </p>
                  </div>

                  {/* QR Code */}
                  <div className="ml-8 flex flex-col items-center">
                    <img
                      src={qrcode}
                      alt="QR Code"
                      className="h-32 w-32 object-contain"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      Scan for details
                    </p>
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

export default StudentIdCard;
