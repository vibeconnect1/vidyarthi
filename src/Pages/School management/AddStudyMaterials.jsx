import React from "react";
import InstituteDetails from "./InstituteDetails";

function AddStudyMaterials() {
  return (
    <section className="flex">
      <InstituteDetails />
      <div className="w-full flex flex-col overflow-hidden ">
        <h2 className="text-center text-2xl font-medium p-2 mx-10 my-3 bg-white rounded-md text-black">
          Add Study Materials
        </h2>
        <div className="md:mx-10 my-3 rounded-md bg-white py-8">
          <div className="grid md:grid-cols-2 item-start gap-5 px-5 w-full">
            <div className="flex flex-col">
              <input
                type="text"
                name=""
                placeholder="Title"
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <select
                name=""
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
                name=""
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
            <div className="flex flex-col space-y-4">
              <select
                name=""
                className="border-b border-gray-500 focus:outline-none"
              >
                <option value="" disabled selected>
                  Select Subject
                </option>
                <option value="">English</option>
                <option value="">Hindi</option>
                <option value="">Math</option>
                <option value="">Science</option>
              </select>
            </div>
            <div className="flex flex-col">
              <input
                type="file"
                name=""
                placeholder="Add File"
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <textarea
                name=""
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
    </section>
  );
}

export default AddStudyMaterials;
