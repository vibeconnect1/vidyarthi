import React from "react";
import InstituteDetails from "./InstituteDetails";

function SchoolDashboard() {
  return (
    <div className="flex">
      <InstituteDetails />
      <div className="w-full flex flex-col overflow-hidden">
        <div className="flex gap-5 my-5 mx-5">
          <div className="bg-white h-32 w-60 rounded-md flex justify-center items-center flex-col">
            <h2 className="text-2xl font-medium text-gray-800 my-2">Total Students</h2>
            <p className="text-lg font-medium text-gray-500">568</p>
          </div>
          <div className="bg-white h-32 w-60 rounded-md flex justify-center items-center flex-col">
            <h2 className="text-2xl font-medium text-gray-800 my-2">Total Teachers</h2>
            <p className="text-lg font-medium text-gray-500">20</p>
          </div>
          <div className="bg-white h-32 w-60 rounded-md flex justify-center items-center flex-col">
            <h2 className="text-2xl font-medium text-gray-800 my-2">Total Staff</h2>
            <p className="text-lg font-medium text-gray-500">50</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolDashboard;
