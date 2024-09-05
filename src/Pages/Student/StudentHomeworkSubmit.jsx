import React from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";

function StudentHomeworkSubmit() {
  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <h2 className="text-xl font-semibold text-gray-700">
              Submit Homework
            </h2>
          </div>
          <div className="mx-5 my-5 bg-white rounded-md">
            <div className="space-y-4 px-5 py-5">
              <div>
                <textarea
                  id="homework"
                  rows="4"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Enter homework description"
                />
              </div>
              <div>
                <label htmlFor="file" className="block text-gray-600">Attach File</label>
                <div className="border border-gray-400 my-5">
                <input
                  type="file"
                  id="file"
                  className="hidden"
                />
                </div>
              </div>
              <button
                type="submit"
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHomeworkSubmit;
