import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "./InstituteDetails";

const AddLiveClasses = () => {
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
                  type="text"
                  name="duration"
                  placeholder="Duration"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="datetime-local"
                  name="dateTime"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="meetingId"
                  placeholder="Meeting Id"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
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
                  <option value="Hindi">English</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                </select>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="teacher"
                  placeholder="Teacher"
                  className="border-b border-gray-500 focus:outline-none"
                />
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
              <div className="flex flex-col">
                <input
                  type="text"
                  name="joinLink"
                  placeholder="Join Link"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col col-span-3">
                <textarea
                  name="agenda"
                  placeholder="Agenda"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>
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
