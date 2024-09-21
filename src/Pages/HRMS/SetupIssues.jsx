import React from "react";
import { Link } from "react-router-dom";
import HRMSAlert from "./HRMSAlert";

const SetupIssues = () => {
  
  return (
    <div className="mt-5">
      <HRMSAlert />
      <div className="flex  ml-20 mt-5 bg-gray-100 space-x-4">
        <div className="bg-white rounded-lg shadow-md p-6 w-96  mx-4 my-4">
          <div className="flex gap-2 text-center">
            <div className="text-3xl font-bold mb-2">2</div>
            <div className="border-l-2 mt-1 border-black h-20 mx-5"></div>

            <div className="flex flex-col">
              <div className="text-gray-700 mb-4">
                Missing Attendance Templates
              </div>
              <Link
                to={"/hrms/alerts/setup-issues/attendance-general-setting"}
                className="bg-black h-10 mt-1  w-24 text-white py-1 px-4 rounded-lg"
              >
                <p className="text-center mt-1 mr-1">View</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-96  mx-4 my-4">
          <div className="flex gap-2 text-center">
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="border-l-2 mt-1 border-black h-20 mx-5"></div>

            <div className="flex flex-col">
              <div className="text-gray-700 mb-4">Missing Leave Templates</div>
              <Link
                to={"/hrms/alerts/setup-issues/general-settings"}
                className="bg-black h-10 mt-1  w-24 text-white py-1 px-4 rounded-lg"
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

export default SetupIssues;
