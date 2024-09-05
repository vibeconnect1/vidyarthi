import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
function EditIncome() {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-2xl font-medium text-gray-800 mx-5 mt-5">
            Edit Income
          </h2>
          <div className="mx-5 bg-white rounded-md my-5 px-5 py-5">
            <div className="grid grid-cols-2 gap-5 mx-5 my-5">
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Source"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Amount"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Invoice No"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  name=""
                  placeholder="Date"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col col-span-3 mb-5">
                <textarea
                  type=""
                  name=""
                  rows={2}
                  placeholder="Description"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button className="border border-gray-500 text-black px-5 py-2 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditIncome