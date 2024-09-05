import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Header from "../Form/Header";

function SalaryProcessingDetails() {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full flex mx-3 flex-col overflow-hidden">
          <h2 className="text-center text-2xl font-medium p-2 mx-10  bg-white rounded-md text-black my-5">
            Salary Processing Details
          </h2>
          <div className="flex flex-col my-2  p-4 gap-4 rounded-md mx-10 bg-white">
            <div className="my-2 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 items-center">
                <p>Employee Name:</p>
                <p className="text-sm font-normal">Rahul Yadav</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Employee ID:</p>
                <p className="text-sm font-normal ">101</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Department:</p>
                <p className="text-sm font-normal ">Finance</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Salary:</p>
                <p className="text-sm font-normal ">₹ 64000</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Payment Date:</p>
                <p className="text-sm font-normal ">12 Aug, 2024</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Payment Method:</p>
                <p className="text-sm font-normal ">Check</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SalaryProcessingDetails;
