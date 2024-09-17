import React from "react";
import { BsPass } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const OutBoundDetails = () => {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center text-xl font-bold p-2 bg-white rounded-md mx-10 my-3">
            Out Package Details
          </h2>
          <div className="flex flex-col my-5 p-8 gap-4 rounded-md bg-white mx-10">
            <div className=" flex justify-between ">
              <p className="border-2 px-4 p-1 rounded-full text-green-500 border-green-500">
                Send
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
              <div className="md:grid flex flex-col grid-cols-3 justify-center gap-6">
                <p className="text-lg font-medium">Sender Name:</p>
                <p className="text-lg font-medium">Recipient Name:</p>
                <p className="text-lg font-medium">Sending Date:</p>
                <p className="text-lg font-medium">Recipient Email ID:</p>
                <p className="text-lg font-medium">Recipient Mobile:</p>
                <p className="text-lg font-medium">Recipient Address:</p>
              </div>
            </div>
            <div>
              <h2 className="border-b text-center text-xl border-black m-5 font-bold">
                Courier Details
              </h2>
              <div className="md:grid flex flex-col grid-cols-3 gap-4 justify-center">
                <p className="text-lg font-medium">Vendor Name:</p>
                <p className="text-lg font-medium">AWB Number:</p>
                <p className="text-lg font-medium">Track Status:</p>
                <p className="text-lg font-medium">SPOC Person:</p>
                <p className="text-lg font-medium">Contact Number:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutBoundDetails;
