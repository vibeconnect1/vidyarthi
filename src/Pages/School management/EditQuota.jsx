import React from "react";
import InstituteDetails from "./InstituteDetails";
import Header from "../Form/Header";

function EditQuota() {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-2xl font-medium text-gray-800 mx-5 mt-5">
            Edit Quota Management
          </h2>
          <div className="mx-5 bg-white rounded-md my-5 px-5 py-5">
            <div className="grid grid-cols-2 gap-5 mx-5">
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Quota Name"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Reserved (%)"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Allocated (%)"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button className="bg-gray-500 text-white px-5 py-2 rounded-md hover:bg-gray-600 focus:outline-none">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditQuota