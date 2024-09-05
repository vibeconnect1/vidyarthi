import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const EditTransportAllocation = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">
              Edit Transport Allocation
            </p>
          </div>
          <div className="md:mx-5 my-3 rounded-md bg-white py-8">
            <div className="grid md:grid-cols-2 item-start gap-5 px-5 w-full">
              <div className="flex flex-col">
                <select
                  name="class"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Route</option>
                  <option value="">Route A</option>
                  <option value="">Route B</option>
                  <option value="">LinK Road</option>
                </select>
              </div>
              <div className="flex flex-col">
                <select
                  name="class"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Vehicle Number</option>
                  <option value="">Mh 2 HA 8968</option>
                  <option value="">Mh 2 HK 1968</option>
                </select>
              </div>
              <div className="flex flex-col">
                <select
                  name="class"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Driver Name</option>
                  <option value="">Ramesh</option>
                  <option value="">John Doe</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center my-5">
              <button className="border border-gray-500 rounded-md px-4 py-2 bg-gray-500 text-white flex gap-2 justify-center items-center">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTransportAllocation