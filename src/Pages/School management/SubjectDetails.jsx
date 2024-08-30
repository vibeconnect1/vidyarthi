import React from "react";
import InstituteDetails from "./InstituteDetails";

function SubjectDetails() {
  return (
    <section className="flex">
      <InstituteDetails />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <h2 className="text-center text-2xl font-medium p-2 mx-10 my-3 bg-white rounded-md text-black">
          Subject Details
        </h2>
        <div className="flex flex-col my-2  p-4 gap-4 rounded-md mx-10 bg-white">
          <h2 className=" text-lg border-black border-b font-semibold ">
            Subject Details
          </h2>
          <div className="my-2 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
            <div className="grid grid-cols-2 items-center">
              <p>Subject Name:</p>
              <p className="text-sm font-normal ">English</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Subject Code:</p>
              <p className="text-sm font-normal ">345</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Default for classes:</p>
              <p className="text-sm font-normal ">9th</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubjectDetails;
