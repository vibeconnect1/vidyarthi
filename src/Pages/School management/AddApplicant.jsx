import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { FaImage } from "react-icons/fa";

function AddApplicant() {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-2xl font-medium text-gray-800 mx-5 mt-5">
            Add Applicant
          </h2>
          <div className="mx-5 bg-white rounded-md my-5 px-5 py-5">
            <div className="grid grid-cols-3 gap-10 my-5">
              <div className="md:mx-10 my-5 col-span-1">
                <label
                  htmlFor="file-upload"
                  className="border border-gray-500 p-4 mb-4 h-48 w-36 rounded-lg  flex items-center flex-col justify-center cursor-pointer"
                >
                  <FaImage size={30} className="my-2" />
                  <p>Upload Picture</p>
                </label>
                <input type="file" className="hidden" id="file-upload" />
              </div>
              <div className="col-span-2 ">
                <div className="grid grid-cols-2 my-5 gap-10">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name=""
                      placeholder="Last Name"
                      className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="date"
                      name=""
                      placeholder="Date of Birth (YYYY-MM-DD)"
                      className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <select
                      name=""
                      className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                    >
                      <option value="" disabled selected>
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name=""
                      placeholder="Father Name"
                      className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name=""
                      placeholder="Father Occupation"
                      className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="number"
                      name=""
                      placeholder="Father Mobile"
                      className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name=""
                      placeholder="Mother Name"
                      className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Mother Occupation"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="number"
                  name=""
                  placeholder="Mother Mobile"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="City"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="State"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Country"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Emergency Contact Name"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Emergency Contact Number"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col col-span-3">
                <textarea
                  name=""
                  placeholder="Previous School"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                  rows="3"
                ></textarea>
              </div>
              <div className="flex flex-col col-span-3">
                <textarea
                  name=""
                  placeholder="Address"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                  rows="3"
                ></textarea>
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

export default AddApplicant;
