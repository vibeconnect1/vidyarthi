import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Header from "../Form/Header";

function IncomeDetails() {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full flex mx-3 flex-col overflow-hidden">
          <h2 className="text-center text-2xl font-medium p-2 mx-10  bg-white rounded-md text-black my-5">
          Income Details
          </h2>
          <div className="flex flex-col my-2  p-4 gap-4 rounded-md mx-10 bg-white">
            <div className="my-2 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 items-center">
                <p>Source:</p>
                <p className="text-sm font-normal">Admission</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Amount:</p>
                <p className="text-sm font-normal ">₹ 64,000</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Invoice No:</p>
                <p className="text-sm font-normal ">310</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Date:</p>
                <p className="text-sm font-normal ">1 Sep, 2024</p>
              </div>
              <div className="grid grid-cols-1 items-center">
                <p>Description:</p>
                <p className="text-sm font-normal ">Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IncomeDetails