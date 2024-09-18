import React from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";

function StudentOnlineFees() {
  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="grid grid-cols-3 gap-5 mx-5">
            <div className="col-span-3">
              <div className="shadow-custom-all-sides rounded-md">
                <div className="px-5 py-5 my-5 bg-white rounded-md h-screen">
                  <h2 className="text-2xl font-semibold text-gray-800 text-left mb-8">
                    Fees
                  </h2>
                  <div className="border-t border-gray-500 my-5">
                    <div className="mb-8">
                      <p className="text-xl font-semibold text-gray-800 mb-2">
                        Pay Fees
                      </p>
                      <p className="text-gray-600 text-base leading-relaxed">
                        Please click on
                        <span className="font-semibold text-indigo-600 mx-2">
                          Pay Now
                        </span>
                        to explore payment options, installments, and fee
                        breakups.
                      </p>
                    </div>
                    <div className="flex gap-3 my-2">
                      <p className="bg-gray-200 py-2 rounded-md w-full px-2 text-gray-600 text-sm">
                        TOTAL FEES FOR ACADEMIC YEAR 24-25
                      </p>
                      <span className="bg-gray-200 py-2 rounded-md px-2 w-32">
                        200000
                      </span>
                    </div>
                    <div className="flex gap-3 my-2">
                      <p className="bg-gray-200 py-2 rounded-md w-full px-2 text-gray-600 text-sm">
                        BALANCE FEES
                      </p>
                      <span className="bg-gray-200 py-2 rounded-md px-2 w-32">
                        0
                      </span>
                    </div>
                    <div className="grid grid-cols-2 border-t border-gray-500 my-5 py-5">
                      <div className="grid grid-cols-2 px-5">
                        <label
                          htmlFor=""
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id=""
                          name=""
                          className="border-b border-gray-500 focus:outline-none w-full"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="grid grid-cols-2 px-5">
                        {/* Mobile Number Input */}
                        <label
                          htmlFor=""
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          id=""
                          name=""
                          className="border-b border-gray-500 focus:outline-none w-full"
                          placeholder="Enter your mobile number"
                          pattern="[0-9]{10}"
                          maxLength={10}
                        />
                      </div>
                    </div>
                    <div className="border-t border-gray-500 py-2">
                      <h2 className="text-lg font-medium text-slate-700 underline my-2">
                        DISCLAIMER
                      </h2>
                      <p>
                        For e-mandate registrations, a token transaction of INR
                        1 will be deducted from the customer's bank account.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-b border-gray-500  pt-3 pb-5">
                    <h2 className="text-lg font-medium text-slate-700 underline">
                      Notes
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-3">
                      <li>
                        1. Convenience fee applicable as per mode of payment.{" "}
                        <span className="text-blue-600 cursor-pointer">
                          Click here
                        </span>
                      </li>
                      <li>
                        2. Online collection of fee is subjected to policies and
                        circulars.
                      </li>
                      <li>3. Ensure timely payment to avoid late fees.</li>
                    </ul>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="terms"
                      className="ml-5 text-base text-gray-700 my-2"
                    >
                      I agree to the Terms & Conditions
                      .
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentOnlineFees;
