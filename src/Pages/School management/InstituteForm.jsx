import React from "react";
import Sidebar from "../Form/Sidebar";

function InstituteForm() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col overflow-hidden">
        <h2 className="text-center text-2xl font-medium p-2 mx-10 my-3 bg-white rounded-md text-black">
          Institute Form
        </h2>
        <div className="md:mx-10 my-5 py-5 rounded-md bg-white">
            <h2 className="border-b border-gray-500 text-2xl font-medium  my-5 mx-5">Institute Form</h2>
          <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full">
            <div className="flex flex-col">
              <input
              type="text"
                name=""
                placeholder="Institute Name"
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <select
                id="board"
                name="board"
                className="border-b border-gray-500 focus:outline-none"
              >
                <option value="">Select Board</option>
                <option value="cbse">CBSE</option>
                <option value="icse">ICSE</option>
                <option value="state">State Board</option>
                <option value="ib">IB</option>
                <option value="igcse">IGCSE</option>
              </select>
            </div>
            <div className="flex flex-col">
              <select
                id="country"
                name="country"
                className="border-b border-gray-500 focus:outline-none"
              >
                <option value="">Select Country</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
              </select>
            </div>
            <div className="flex flex-col">
              <select
                id="zone"
                name="zone"
                className="border-b border-gray-500 focus:outline-none"
              >
                <option value="">Select Zone</option>
                <option value="north">North</option>
                <option value="south">South</option>
                <option value="east">East</option>
                <option value="west">West</option>
                <option value="central">Central</option>
              </select>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Enter Cluster"
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Center"
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Location"
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="First Name"
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Last Name"
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="number"
                placeholder="Contact Number"
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Associate Users"
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
            <div className="col-span-3 border-t border-gray-500 my-5">
                <button className="border border-gray-500 rounded-md px-5 p-2 mt-5 hover:bg-gray-500 hover:text-white">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstituteForm;
