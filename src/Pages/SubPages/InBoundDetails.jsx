import React from "react";
import { BsPass } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const InBoundDetails = () => {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails/>
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center text-xl font-bold p-2 bg-white rounded-md mx-10 my-3">
            Inbound Package Details
          </h2>
          <div className="flex flex-col my-5 p-8 gap-4 rounded-md bg-white mx-10">
            <div className=" flex justify-between ">
              <p className="border-2 px-4 p-1 rounded-full text-blue-500 border-blue-500">
                Received
              </p>
              <div className="flex gap-2">
                <button className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white">
                  <TiTick />
                  Mark As Collected
                </button>
                <button className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white">
                  <BsPass />
                  Delegate Package
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-center font-semibold text-xl">
                Package ID: 32
              </h2>
              <div>
                <p className="text-lg font-medium">No. of Package:</p>
              </div>
            </div>
            <div className=" my-10">
              <h2 className="border-b text-center text-xl border-black m-5 font-bold">
                Package Details
              </h2>
              <div className="md:grid flex flex-col grid-cols-4 justify-center gap-6">
                <p className="text-lg font-medium">Vendor Name:</p>
                <p className="text-lg font-medium">Department:</p>
                <p className="text-lg font-medium">Collected On:</p>
                <p className="text-lg font-medium">AWB Number:</p>
                <p className="text-lg font-medium">Recipient Name:</p>
                <p className="text-lg font-medium">Received On:</p>
                <p className="text-lg font-medium">Collected By:</p>
                <p className="text-lg font-medium">Received By:</p>
                <p className="text-lg font-medium">Delegated To:</p>
                <p className="text-lg font-medium">Delegate Package Reason:</p>
              </div>
            </div>
            <div>
              <h2 className="border-b text-center text-xl border-black m-5 font-bold">
                Sender Details
              </h2>
              <div className="md:grid flex flex-col grid-cols-4 justify-center">
                <p className="text-lg font-medium">Sender Name:</p>
                <p className="text-lg font-medium">Mobile:</p>
                <p className="text-lg font-medium">Company:</p>
                <p className="text-lg font-medium">Address:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InBoundDetails;
