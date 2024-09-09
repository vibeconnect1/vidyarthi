import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import Select from "react-select";
const AddEvent = () => {
  const [shareEvent, setShareEvent] = useState("all");

  const studentsOptions = [
    { value: "Karan Singh", label: "Karan Singh" },
    { value: "Rahul Yadav", label: "Rahul Yadav" },
    { value: "Riya Gupta", label: "Riya Gupta" },
  ];
  
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
  };
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Create Event</p>
          </div>
          <div className="md:mx-5 my-3 rounded-md bg-white py-8">
            <div className="grid md:grid-cols-2 item-start gap-5 px-5 w-full py-5">
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Event Title"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Venue"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="datetime-local"
                  name=""
                  placeholder="Start Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="datetime-local"
                  name=""
                  placeholder="End Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col col-span-2">
                <textarea
                  name="description"
                  placeholder="Event Description"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex gap-5">
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      className="form-checkbox text-blue-600 border-gray-500 focus:outline-none"
                    />
                    <span className="ml-2 text-gray-700">Important</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      className="form-checkbox text-blue-600 border-gray-500 focus:outline-none"
                    />
                    <span className="ml-2 text-gray-700">Send Email</span>
                  </label>
                </div>
              </div>
              <div className="flex flex-col col-span-2">
                <h2 className="text-lg font-semibold text-gray-600 my-2 border-b border-gray-500 ">
                  Upload Attachment
                </h2>
                <div className="mt-5">
                  <label
                    htmlFor="file-upload"
                    className="border border-dashed border-gray-500 p-4 mb-4 h-32 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
                  >
                    <p>Click To Upload</p>
                  </label>
                  <input type="file" className="hidden" id="file-upload" />
                </div>
              </div>
              <div className="flex flex-col col-span-2">
                <h2 className="text-lg font-semibold text-gray-600 my-2 border-b border-gray-500 ">
                  Share With
                </h2>
                <div className="flex gap-5 my-5">
                  <button
                    className={` border border-gray-500 px-4 py-1 cursor-pointer rounded-2xl ${
                      shareEvent === "all" ? "custom-bg px-4 py-1" : ""
                    }`}
                    onClick={() => setShareEvent("all")}
                  >
                    All
                  </button>
                  <button
                    className={` border border-gray-500 px-4 py-1 cursor-pointer rounded-2xl ${
                      shareEvent === "individuals" ? "custom-bg px-4 py-1" : ""
                    }`}
                    onClick={() => setShareEvent("individuals")}
                  >
                    Individuals
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                {shareEvent === "individuals" && (
                  <div>
                    <Select
                      id="students"
                      isMulti
                      options={studentsOptions}
                      className="focus:outline-none border-b border-gray-500"
                      classNamePrefix="select Student"
                      styles={customStyles}
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col col-span-2">
                <h2 className="text-lg font-semibold text-gray-600 my-2 border-b border-gray-500 ">
                  Event Participate
                </h2>
                <div className="flex gap-5 justify-center my-5">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="option"
                      value="option1"
                      className="form-radio text-blue-600"
                    />
                    <span>Yes</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="option"
                      value="option2"
                      className="form-radio text-blue-600"
                    />
                    <span>No</span>
                  </label>
                </div>
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

export default AddEvent;
