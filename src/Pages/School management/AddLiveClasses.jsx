import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "./InstituteDetails";
import { FaArrowRightLong } from "react-icons/fa6";
import Select from "react-select";
import { FiCopy } from "react-icons/fi";

const AddLiveClasses = () => {
  const [generate, setGenerate] = useState(false);
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

  const [isRepeat, setIsRepeat] = useState(false);

  const handleCheckboxChange = () => {
    setIsRepeat(!isRepeat);
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Create Live Class</p>
          </div>
          <div className="md:mx-5 my-3 rounded-md bg-white py-8">
            <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="topic"
                  placeholder="Topic"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  name=""
                  placeholder="Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="time"
                  name=""
                  placeholder="Time"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="time"
                  name=""
                  placeholder="Time"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <select
                  name="subject"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select Subject
                  </option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                </select>
              </div>
              <div className="flex flex-col space-y-4">
                <select
                  name="subject"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select Teacher
                  </option>
                  <option value="English">Rakesh Kumar</option>
                  <option value="Hindi">Niharika Patel</option>
                  <option value="Mathematics">Mira Singh</option>
                  <option value="Science">Vipul Pal</option>
                </select>
              </div>
              <div className="flex flex-col">
                <select
                  name="class"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select Class
                  </option>
                  <option value="9th">9th</option>
                  <option value="10th">10th</option>
                  <option value="11th">11th</option>
                  <option value="12th">12th</option>
                </select>
              </div>
              <div className="flex flex-col">
                <select
                  name="division"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select Division
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>
              <div className="flex flex-col col-span-3">
                <textarea
                  name="agenda"
                  placeholder="Description"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex justify-between mx-5 my-3">
              <div>
                <button
                  className="border border-gray-500 rounded-md px-4 py-1 flex gap-3"
                  onClick={() => setGenerate(!generate)}
                >
                  Generate Link <FaArrowRightLong className="mt-1" />
                </button>
              </div>
              {generate && (
                <div className="flex gap-3">
                  <button className="rounded-md px-4 py-1 bg-green-500">
                    Zoom Meet
                  </button>
                  <button className="rounded-md px-4 py-1 bg-blue-500">
                    Team Meet
                  </button>
                </div>
              )}
            </div>
            <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full">
              <div className="flex items-center gap-4 col-span-3">
                <input
                  type="text"
                  name=""
                  placeholder="Join Link"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
                <div>
                  <button className="border border-gray-500 rounded-md px-4 py-1 flex gap-2 whitespace-nowrap">
                    <span>Copy Link</span>
                    <FiCopy size={20} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <Select
                  id="students"
                  isMulti
                  options={studentsOptions}
                  className="focus:outline-none border-b border-gray-500"
                  classNamePrefix="select Student"
                  styles={customStyles}
                />
              </div>
              <div className="flex flex-col col-span-2">
                <div className="flex gap-2 items-center my-2">
                  <input
                    type="email"
                    name=""
                    placeholder="Email Id"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                  <div>
                    <button className="border border-gray-500 rounded-md px-4 py-1 flex gap-2 whitespace-nowrap">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mx-5">
              <label htmlFor="checkbox" className="text-lg text-gray-500">
                Repeat
              </label>
              <input
                type="checkbox"
                id="checkbox"
                className="w-4 h-4"
                onChange={handleCheckboxChange}
              />
            </div>
            {isRepeat && (
              <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full my-5">
                <div className="flex flex-col">
                  <input
                    type="date"
                    name=""
                    placeholder="Date"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="time"
                    name=""
                    placeholder="Time"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col col-span-3 mb-2">
                  <h2>Select Working Days :</h2>
                  <div className="flex gap-5 my-3">
                    <button className="custom-bg rounded-md px-5 py-1 hover:bg-green-500">Mon</button>
                    <button className="custom-bg rounded-md px-5 py-1 hover:bg-green-500">Tues</button>
                    <button className="custom-bg rounded-md px-5 py-1 hover:bg-green-500">Wed</button>
                    <button className="custom-bg rounded-md px-5 py-1 hover:bg-green-500">Thus</button>
                    <button className="custom-bg rounded-md px-5 py-1 hover:bg-green-500">Fri</button>
                    <button className="custom-bg rounded-md px-5 py-1 hover:bg-green-500">Sat</button>
                    <button className="custom-bg rounded-md px-5 py-1 hover:bg-green-500">Sun</button>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-center my-5">
              <button className="border border-gray-500 rounded-md px-4 py-1 flex gap-2 justify-center items-center">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLiveClasses;
