import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Header from "../Form/Header";

function FeesPaymentDetails() {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full flex mx-3 flex-col overflow-hidden">
          <h2 className="text-center text-2xl font-medium p-2 mx-10  bg-white rounded-md text-black my-5">
          Fees Payment Details
          </h2>
          <div className="flex flex-col my-2  p-4 gap-4 rounded-md mx-10 bg-white">
            <div className="my-2 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 items-center">
                <p>Student Name:</p>
                <p className="text-sm font-normal">Ajay Singh</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Class:</p>
                <p className="text-sm font-normal ">9th</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Division:</p>
                <p className="text-sm font-normal ">A</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Roll No:</p>
                <p className="text-sm font-normal ">12</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Fees Type:</p>
                <p className="text-sm font-normal ">Admission</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Total Fees:</p>
                <p className="text-sm font-normal ">₹ 64,000</p>
              </div><div className="grid grid-cols-2 items-center">
                <p>Payment Method:</p>
                <p className="text-sm font-normal ">Credit Card</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Payment Date:</p>
                <p className="text-sm font-normal ">2024-08-25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeesPaymentDetails