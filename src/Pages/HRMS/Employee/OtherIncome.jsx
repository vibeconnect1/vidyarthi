import React from "react";
import NoImg from "/NoImg.jpg";
import InvestmentApprovalsDetailsSetting from "./InvestmentApprovalsDetailsSetting";
import { Link } from "react-router-dom";
import { BsFillExclamationCircleFill } from "react-icons/bs";

function OtherIncome() {
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
                  Other Income
                </h2>
                <div className="bg-white rounded-md px-5 py-1">
                  <h2 className="font-medium text-gray-800">
                    Ankit Nima | 135162
                  </h2>
                </div>
              </div>
              <div className="bg-white rounded-md space-y-5">
                <div className="bg-orange-200 py-3 flex justify-center rounded-md">
                    <h2 className="font-medium">Income From Other Source</h2>
                </div>
                <div className="rounded-md px-5 py-10">
                  <div className="flex justify-center">
                    <img src={NoImg} className="h-50 w-60"></img>
                  </div>
                  <p className="text-gray-500 flex justify-center gap-1 items-center">
                    <BsFillExclamationCircleFill />
                    No declarations available under this section
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-md space-y-5 my-3 pb-5">
                <div className="bg-orange-200 py-3 flex justify-center rounded-md">
                    <h2 className="font-medium">Income From Other Source</h2>
                </div>
                <div className="rounded-md px-5 py-10">
                  <div className="flex justify-center">
                    <img src={NoImg} className="h-50 w-60"></img>
                  </div>
                  <p className="text-gray-500 flex justify-center gap-1 items-center">
                    <BsFillExclamationCircleFill />
                    No declarations available under this section
                  </p>
                </div>
                <div className="flex justify-center gap-2 my-5">
                  <Link
                    to={`/hrms/investment-approvals`}
                    className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                  >
                    Close
                  </Link>
                  <Link
                    to={`/hrms/investment-approvals/exemption10LTA`}
                    className="font-semibold py-1 px-4 rounded bg-gray-200 text-black mt-2 flex items-center gap-2"
                  >
                    Back
                  </Link>
                  <Link
                    to={`/hrms/investment-approvals/housing-loan`}
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

export default OtherIncome;
