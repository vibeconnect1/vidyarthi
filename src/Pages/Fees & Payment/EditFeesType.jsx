import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
function EditFeesType() {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-2xl font-medium text-gray-800 mx-5 mt-5">
            Edit Fees
          </h2>
          <div className="mx-5 bg-white rounded-md my-5 px-5 py-5">
            <div className="grid grid-cols-2 gap-5 mx-5 my-5">
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Admission"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <select className="border-b border-gray-500 focus:outline-none placeholder-gray-700">
                  <option value="" disabled selected>Select Class</option>
                  <option value="">9th</option>
                  <option value="">10th</option>
                  <option value="">11th</option>
                  <option value="">12th</option>
                </select>
              </div>
              <div className="flex flex-col">
                <select className="border-b border-gray-500 focus:outline-none placeholder-gray-700">
                  <option value="" disabled selected>
                    Select Period
                  </option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Amount"
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

export default EditFeesType