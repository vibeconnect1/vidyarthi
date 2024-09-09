import React from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";
import idCard from "/idCard.jpg";
function StudentIdCard() {
  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="grid grid-cols-3 gap-5 mx-5 mb-10">
            <div className="col-span-3">
              <div className="px-5 py-5 my-5 bg-white rounded-md h-full">
                <h2 className="text-2xl font-semibold text-gray-800 text-left mb-8">
                  ID Card Photo
                </h2>
                <div className="my-2">
                  <h2 className="text-gray-500 font-medium text-lg">
                    Student Photo's For ID Card
                  </h2>
                </div>
                <div className="border-t border-gray-500 py-5">
                  <div className="grid grid-cols-4">
                    <div className="col-span-1 py-2 px-5">
                      <img src={idCard} className="h-44 w-40 rounded-md"></img>
                      <p className="text-red-400 text-sm mx-2 mt-2">
                        Max. File Size is 500 KB
                      </p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-lg font-semibold text-gray-800 ">Student Name: <span className="text-gray-500 mx-5">Karan Singh</span></p>
                        <p className="text-lg font-semibold text-gray-800">Board: <span className="text-gray-500 mx-5 ">CBSE</span></p>
                        <p className="text-lg font-semibold text-gray-800">Grade: <span className=" text-gray-500 mx-5">Grade II</span></p>
                        <p className="text-lg font-semibold text-gray-800">Division: <span className=" text-gray-500 mx-5">D</span></p>
                        <p className="text-lg font-semibold text-gray-800">APP No: <span className="text-gray-500 mx-5 ">K123</span></p>
                        <p className="text-lg font-semibold text-gray-800">Enr No: <span className="text-gray-500 mx-5 ">B679</span></p>
                        <p className="text-lg font-semibold text-gray-800">Date of birth: <span className="text-gray-500 mx-5 ">01/05/2018</span></p>
                        <p className="text-lg font-semibold text-gray-800">Gender: <span className="text-gray-500 mx-5 ">Male</span></p>
                        <p className="text-lg font-semibold text-gray-800">Blood group: <span className="text-gray-500 mx-5 ">O+VE</span></p>
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

export default StudentIdCard;
