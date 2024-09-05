import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const AddLibraryCard = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">
              Create Library Card
            </p>
          </div>
          <div className="md:mx-5 my-3 rounded-md bg-white py-8">
            <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full">
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Student Name"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Student Roll No"
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
                </select>
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  name=""
                  placeholder="Join Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  name=""
                  placeholder="Expire Date"
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

export default AddLibraryCard;
