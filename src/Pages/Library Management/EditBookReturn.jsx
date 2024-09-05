import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const EditBookReturn = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Edit Book Return</p>
          </div>
          <div className="md:mx-5 my-3 rounded-md bg-white py-8">
            <div className="grid md:grid-cols-2 gap-5 px-5 w-full">
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Student ID"
                  className="border-b border-gray-500 focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Book Id"
                  className="border-b border-gray-500 focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  name=""
                  placeholder="Return Date"
                  className="border-b border-gray-500 focus:outline-none"
                  required
                />
              </div>
              <div className="flex justify-center my-5 col-span-2">
                <button
                  type="submit"
                  className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBookReturn