import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import profile from "/profile1.jpg";
import { BsEye } from "react-icons/bs";
import profileFile from "/profile_file.png";
import { BiMenuAltLeft } from "react-icons/bi";
import email from "/email.png"
function SeparationApplications() {
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">Separation Applications</h1>
          </div>
        </header>
        <div className="grid grid-cols-12 gap-5 mx-5 ml-20">
          <div className="col-span-4 ml-5">
            <div className="bg-white rounded-md p-3 my-3 mx-2">
              <div className="flex gap-3 my-3">
                <img
                  src={profile}
                  className="h-14 w-14 rounded-full flex items-center my-2"
                ></img>
                <div className="space-y-1">
                  <h2 className="text-lg text-gray-800 flex items-center font-medium">
                    Riya Singh
                  </h2>
                  <p className="text-sm">Designation: Manager</p>
                  <p className="text-sm">Work Location: Mumbai; Maharashtra</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-3 my-3 mx-2">
              <div className="my-5 space-y-1">
                <h2 className="font-medium text-gray-800 text-xl">
                  Separation Request
                </h2>
                <span className="flex justify-between gap-2">
                  <h2>Joining Date</h2>
                  <p>02-01-2018</p>
                </span>
                <span className="flex justify-between gap-2">
                  <h2>Resignation Date</h2>
                  <p>15-02-2023</p>
                </span>
                <span className="flex justify-between gap-2">
                  <h2>Last Working Date</h2>
                  <p>11-03-2023</p>
                </span>
                <span className="flex justify-between gap-2">
                  <h2>Status</h2>
                  <p className="text-red-500">Admin Approval Pending</p>
                </span>
                <span className="flex justify-between gap-2">
                  <h2>FnF Month</h2>
                  <p>-</p>
                </span>
                <span className="flex justify-between gap-2">
                  <h2>Separation Type & Reason</h2>
                  <p> Better Opportunity-Compensation</p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-8 my-3 rounded-md">
            <div className="bg-white rounded-md py-5 px-5">
              <div className="flex gap-2 my-2 items-center">
                <span>
                  <BiMenuAltLeft size={20} />
                </span>
                <h2 className="text-lg font-medium">
                  Separation Request & Exit Interview
                </h2>
              </div>
              <div className="flex flex-wrap gap-5">
                <div className="bg-yellow-50 rounded-md w-60 h-48 space-y-5 py-3">
                  <span className="flex justify-center">
                    <img
                      src={profileFile}
                      className="w-16 h-16 rounded-full"
                    ></img>
                  </span>
                  <h2 className="font-medium text-center">
                    Separation Request
                  </h2>
                  <div className="flex justify-center">
                    <Link
                      to={``}
                      className="flex justify-center bg-white shadow-2xl p-2 w-10 rounded-full"
                    >
                      <BsEye />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-t my-5 py-5">
                <div className="flex gap-2 my-2 items-center">
                  <span>
                    <BiMenuAltLeft size={20} />
                  </span>
                  <h2 className="text-lg font-medium">Checklist</h2>
                </div>
              </div>
              <div className="border-t my-5 py-5">
                <div className="flex gap-2 my-2 items-center">
                  <span>
                    <BiMenuAltLeft size={20} />
                  </span>
                  <h2 className="text-lg font-medium">Letters & F&F</h2>
                </div>
                <div className="bg-yellow-50 rounded-md w-60 h-48 space-y-5 py-3">
                  <span className="flex justify-center">
                    <img
                      src={email}
                      className="w-16 h-16 rounded-full"
                    ></img>
                  </span>
                  <h2 className="font-medium text-center">F&F</h2>
                  <div className="flex justify-center">
                    <h2 className="text-yellow-500">Pending</h2>
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

export default SeparationApplications;
