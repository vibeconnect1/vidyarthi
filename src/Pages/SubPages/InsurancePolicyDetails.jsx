import React from "react";

import policy from "/policy.png";
import { PiPlusCircle } from "react-icons/pi";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const InsurancePolicyDetails = () => {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails/>
        <div className="w-full flex md:m-5 flex-col overflow-hidden">
          <div className="mt-5 flex justify-between items-center">
            <h2 className="font-semibold text-xl">Policy Details</h2>
          </div>
          <div className="border border-gray-500 my-2" />
          <div className="bg-white rounded-md p-8">
            <div className="flex gap-5 items-center justify-center">
              <img src={policy} alt="" width={"20%"} className="w-40" />
              <div>
                <p className="font-semibold">ReAssure 2.0 Bronze + Direct</p>
                <b className="text-green-400">See all features</b>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-lg">Cover Amount</p>
              <p className="text-xs text-gray-500 ">
                Medical treatment are getting costlier every year. Higher the
                cover better it is.
              </p>
              <select
                name=""
                id=""
                className="border-b border-gray-500 focus:outline-none"
              >
                <option value="">5 lakh</option>
                <option value="">4 lakh</option>
                <option value="">3 lakh</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 my-4">
              <p className="font-medium text-lg">Policy Period</p>
              <p className="text-xs text-gray-500 ">
                Choosing a multi-year plan saves your money and the trouble of
                remembering yearly renewal.
              </p>
              <div className="flex gap-5 mx-2">
                <button className="py-5 px-4 shadow-custom-all-sides rounded-md border-2 hover:border-green-400">
                  1 year @ ₹ 6,755
                </button>
                <button className="py-5 px-4 shadow-custom-all-sides rounded-md border-2 hover:border-green-400">
                  1 year @ ₹ 6,755
                </button>
                <button className="py-5 px-4 shadow-custom-all-sides rounded-md border-2 hover:border-green-400">
                  1 year @ ₹ 6,755
                </button>
              </div>
              <p className="text-xs text-gray-400">
                Easy EMI options starting from ₹ 604/month View details
              </p>
            </div>
            <div className="flex flex-col gap-2 my-4">
              <p className="font-medium text-lg">Riders</p>
              <p className="text-xs text-gray-500 ">
                You should get these additional benefits to enhance your current
                plan.
              </p>
              <div className="mx-2">
                <div className="bg-gray-100 p-4 rounded-md  ">
                  <p className="font-medium">Instant Covers</p>
                  <div className="flex md:flex-row flex-col justify-between items-center">
                    <p className="text-xs text-gray-400">
                      Claim can be made for hospitallization related to
                      diabetes. Hypertension, Hyperlipidemia & Asthma after
                      initial wait period of 30 days
                    </p>
                    <p>Premium 1,371</p>
                    <button className="border-2 border-black p-1 px-4 rounded-md flex gap-2 items-center">
                      <PiPlusCircle /> Add
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex justify-between items-center">
                <h2 className="font-semibold text-xl">Summary</h2>
              </div>
              <div className="border border-gray-500 my-2" />
              <div className="grid gap-2 mx-2">
                <div className="grid grid-cols-2">
                  <p className="font-medium">Base premium - 1 year </p>
                  <p className="text-right">₹ 6,755</p>
                </div>
                <div className="grid">
                  <p className="font-medium">Select Riders(s) </p>
                  <div className="bg-gray-100 rounded-md p-2 grid grid-cols-2 gap-2">
                    <p>Missing out on benefits </p>
                    <p className="text-green-400 font-medium text-right">
                      View riders
                    </p>
                  </div>
                </div>
                <div className="bg-indigo-100 text-white rounded-md p-1 px-3 grid grid-cols-2 my-2">
                  <p className="font-medium text-black">Total Premium</p>
                  <p className="font-medium text-right text-green-600">
                    {" "}
                    Rs. 6,755 /-
                  </p>
                </div>
                <div className="bg-green-100 text-green-600 rounded-md p-1 px-3  my-2">
                  <p className="font-medium ">Effectively costs just ₹2,278.</p>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-black p-1 px-4 rounded-md text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300">
                  Process to proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsurancePolicyDetails;
