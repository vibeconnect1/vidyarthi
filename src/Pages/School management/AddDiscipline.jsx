import React from "react";
import InstituteDetails from "./InstituteDetails";

function AddDiscipline() {
  return (
    <section className="flex">
      <div className="bg-white mb-10">
        <InstituteDetails />
      </div>
      <div className="flex flex-col overflow-hidden w-full p-4">
        <div className="bg-white rounded-md py-10 mx-10 my-5">
            <h2 className="text-xl font-medium text-gray-700 mx-5 my-5">Add Discipline Code</h2>
          <div className="grid grid-cols-1 gap-6 mx-5">

            <div className="flex flex-col">
              <textarea
                name=""
                placeholder="Enter Discipline Code"
                className="border-b border-gray-500 focus:outline-none h-24"
              />
            </div>
            <div>
              <button className="border border-gray-500 rounded-md px-5 py-2 ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddDiscipline;