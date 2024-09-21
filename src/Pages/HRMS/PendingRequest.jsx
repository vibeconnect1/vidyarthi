import React from "react";
import {FaUser } from "react-icons/fa";
import { MdHourglassEmpty } from "react-icons/md";
import { Link } from "react-router-dom";
import HRMSAlert from "./HRMSAlert";

const PendingRequest = () => {
  
  return (
    <div className="mt-5">
      <HRMSAlert />
      <div className="flex ml-20 mt-5 bg-gray-100 space-x-4">
        <div className="bg-white rounded-lg shadow-md p-6 w-96 mx-4 my-4">
          <div className="flex gap-2 text-center">
            <div className="flex flex-col mt-2 gap-5">
              <MdHourglassEmpty size={25} />
              <div className="text-3xl font-bold mb-2">21</div>
            </div>
            <div className="border-l-2 mt-1 border-black h-20 mx-5"></div>
            <div className="flex flex-col">
              <div className="text-gray-700 mb-4">
                Pending Regularization Requests
              </div>
              <Link
                to={"/hrms/alerts/regularization-request"}
                className="bg-black h-10 mt-1  w-24 text-white py-1 px-4 rounded-lg"
              >
                <p className="text-center mt-1 mr-1">View</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-96  mx-4 my-4">
          <div className="flex gap-2 text-center">
            <div className="flex flex-col mt-2 gap-5">
              <FaUser size={25} />
              <div className="text-3xl font-bold mb-2">3</div>
            </div>
            <div className="border-l-2 mt-1 border-black h-20 mx-5"></div>
            <div className="flex flex-col">
              <div className="text-gray-700 mb-4">
                Employee Unactivated Accounts
              </div>
              <Link
                to={"/hrms/alerts/employee-directory"}
                className="bg-black mr-1 h-10 mt-1  w-24 text-white py-1 px-4 rounded-lg"
              >
                <p className="text-center mt-1 mr-1">View</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingRequest;
