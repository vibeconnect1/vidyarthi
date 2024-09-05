import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { FaImage } from "react-icons/fa";
const EditEvent = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Edit Event</p>
          </div>
          <div className="md:mx-5 my-3 rounded-md bg-white py-8">
            <div className="grid md:grid-cols-2 item-start gap-5 px-5 w-full">
              <div className="my-5 col-span-2">
                <label
                  htmlFor="file-upload"
                  className="border border-gray-500 p-4 mb-4 h-48 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
                >
                  <FaImage size={30} className="my-2" />
                  <p>Upload Picture</p>
                </label>
                <input type="file" className="hidden" id="file-upload" />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="title"
                  placeholder="Event Title"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  name="Event Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="time"
                  name="Event Time"
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

export default EditEvent;
