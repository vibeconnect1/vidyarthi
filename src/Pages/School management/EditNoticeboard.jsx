import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "./InstituteDetails";
import Select from "react-select";

const studentOptions = [
  { value: "all", label: "All" },
  { value: "karan", label: "Karan" },
  { value: "nehe", label: "Neha" },
  { value: "kavita", label: "Kavita" },
  { value: "vishal", label: "Vishal" },
];

const EditNoticeboard = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Edit Noticeboard</p>
          </div>
          <div className="md:mx-5 my-3 rounded-md bg-white py-8">
            <div className="grid md:grid-cols-2 item-start gap-5 px-5 w-full">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <select
                  name="class"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select Class
                  </option>
                  <option value="">9th</option>
                  <option value="">10th</option>
                  <option value="">11th</option>
                  <option value="">12th</option>
                </select>
              </div>
              <div className="flex flex-col space-y-4">
                <select
                  name="division"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select Division
                  </option>
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">C</option>
                  <option value="">D</option>
                </select>
              </div>
              <div className="flex flex-col space-y-4 ">
                <Select
                  isMulti
                  options={studentOptions}
                  placeholder="Select Students"
                  className="basic-single border-b border-gray-500"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  name="date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="file"
                  name="file"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col col-span-2">
                <textarea
                  name="description"
                  placeholder="Description"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex justify-center my-5">
              <button className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNoticeboard