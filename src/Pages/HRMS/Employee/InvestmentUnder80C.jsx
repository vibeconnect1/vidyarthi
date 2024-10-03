import React from "react";
import postOffice from "/PostOffice.png";
import lifeInsurance from "/Life_Insurance.png";
import InvestmentApprovalsDetailsSetting from "./InvestmentApprovalsDetailsSetting";
import { Link } from "react-router-dom";

function InvestmentUnder80C() {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex">
        <div className="flex flex-col overflow-hidden w-screen">
          <div className="my-6 ml-24">
            <h2 className="text-2xl font-medium text-gray-800 flex items-center gap-2">
              Tax Declaration
            </h2>
            <p className="text-base text-gray-800">
              List of all tax declarations and investment summary.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-2 my-5">
            <div className="col-span-4">
              <InvestmentApprovalsDetailsSetting />
            </div>
            <div className="col-span-8 mx-5">
              <div className="flex justify-between my-2">
                <h2 className="text-xl font-medium text-gray-800">
                  Investment under 80C
                </h2>
                <div className="bg-white rounded-md px-5 py-1">
                  <h2 className="font-medium text-gray-800">
                    Ankit Nima | 135162
                  </h2>
                </div>
              </div>
              <div className="bg-white rounded-md px-5 py-10 space-y-5 ">
                <div className="border border-gray-500 rounded-md px-5 py-2">
                  <div className="flex gap-5 ">
                    <img src={postOffice} className="h-12 w-12 "></img>
                    <h2 className="text-2xl font-medium text-gray-600 flex items-center">
                      Post Office Time deposit
                    </h2>
                  </div>
                  <div className="flex justify-between text-base text-gray-800 my-5">
                    <p>Amount Declared</p>
                    <p>₹ 50000.0</p>
                    <p>Approved Declared Amount by Admin:</p>
                    <p>₹ 50000.0</p>
                  </div>
                </div>
                <div className="border border-gray-500 rounded-md px-5 py-2">
                  <div className="flex gap-5 ">
                    <img src={lifeInsurance} className="h-12 w-12 "></img>
                    <h2 className="text-2xl font-medium text-gray-600 flex items-center">
                      Life Insurance Premium
                    </h2>
                  </div>
                  <div className="flex justify-between text-base text-gray-800 my-5">
                    <p>Amount Declared</p>
                    <p>₹ 20000.0</p>
                    <p>Approved Declared Amount by Admin:</p>
                    <p>₹ 20000.0</p>
                  </div>
                </div>
                <div className="flex justify-center gap-2 my-5">
                  <Link
                    to={`/hrms/investment-approvals`}
                    className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                  >
                    Close
                  </Link>
                  <Link
                    to={`/hrms/investment-approvals/investment-under80-other`}
                    className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                  >
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentUnder80C;
