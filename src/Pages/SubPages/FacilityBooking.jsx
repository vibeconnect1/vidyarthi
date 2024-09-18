import React, { useState } from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Header from "../Form/Header";
import Select from "react-select";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FacilityBooking = () => {
  const [behalf, setBehalf] = useState("self");
  const [paymentMode, setPaymentMode] = useState("post");
  const [cancellationPolicy, setCancellationPolicy] = useState(false);
  const [termsConditions, setTermsConditions] = useState(false);
  const users = [
    { value: "user1", label: "User 1" },
    { value: "user2", label: "User 2" },
    { value: "user3", label: "User 3" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      textAlign: "left",
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
    menu: (provided) => ({
      ...provided,
      border: "none",
    }),
  };

  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className=" w-full flex  flex-col overflow-hidden">
          <h2 className="text-xl font-semibold text-center text-black bg-white py-2 rounded-md mx-10 my-3">
            Book Facility
          </h2>
          <div className="flex flex-col">
            <div className="flex justify-center p-2 rounded-md"></div>
            <div className="bg-white rounded-md md:mx-10 my-2 px-4 py-5">
              <div className="md:grid flex flex-col grid-cols-4 items-center">
                <p className="font-semibold">For :</p>
                <div className="flex gap-5">
                  <p
                    className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                      behalf === "self" && "bg-black text-white"
                    }`}
                    onClick={() => setBehalf("self")}
                  >
                    Self
                  </p>
                  <p
                    className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                      behalf === "others" && "bg-black text-white"
                    }`}
                    onClick={() => setBehalf("others")}
                  >
                    Others
                  </p>
                </div>
                {behalf === "others" && (
                  <Select
                    options={users}
                    placeholder="Select User"
                    className="border-b border-gray-500 focus:outline-none w-full"
                    isMulti
                    styles={customStyles}
                  />
                )}
              </div>
              <div className="grid grid-cols-4 gap-5 my-5">
                <div className="flex flex-col gap-2">
                  <input
                    type="date"
                    name=""
                    id=""
                    placeholder="Select Date"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <select className="border-b border-gray-500 focus:outline-none w-full">
                    <option value="">Choose Facility</option>
                    <option value="">Conference Room</option>
                    <option value="">Cabin</option>
                  </select>
                </div>
              </div>
              <div className="my-5">
                <h2 className="border-b text-xl border-black font-semibold mb-5">
                  Payment Mode
                </h2>
                <div>
                  <div className=" flex flex-col md:flex-row  items-center my-2 w-full">
                    {/* <p className="font-semibold">For :</p> */}
                    <div className="flex gap-5 w-full">
                      <p
                        className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                          paymentMode === "post" && "bg-black text-white"
                        }`}
                        onClick={() => setPaymentMode("post")}
                      >
                        Post Paid
                      </p>
                      <p
                        className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                          paymentMode === "pre" && "bg-black text-white"
                        }`}
                        onClick={() => setPaymentMode("pre")}
                      >
                        Prepaid
                      </p>
                    </div>
                    {paymentMode === "pre" && (
                      <div>
                        <input
                          type="text"
                          placeholder="Enter UPI"
                          className="border-b border-gray-500 focus:outline-none"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col my-2">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="2"
                  placeholder="Enter Comment"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex justify-center">
                <button className="p-2 px-4 bg-black text-white hover:bg-white hover:text-black rounded-md border-2 border-black font-medium transition-all duration-300">
                  Submit
                </button>
              </div>
              <div
                className={`flex justify-between  rounded-md mt-5 ${
                  cancellationPolicy
                    ? "bg-transparent my-1 text-base"
                    : "bg-gray-100 py-3 px-3 text-gray-800 font-semibold"
                }`}
                onClick={() => setCancellationPolicy(!cancellationPolicy)}
              >
                <div className="flex items-center">
                  <span className="whitespace-nowrap">
                    Cancellation Policy:
                  </span>
                </div>
                <p>
                  {cancellationPolicy ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </p>
              </div>
              <div className="mb-5">
                {cancellationPolicy && (
                  <div className="bg-gray-200 px-5 py-2 rounded-md text-gray-500 font-semibold">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Cancellations made between 48 and 168 hours (2 to 7
                        days) before the booking time will incur a 50%
                        cancellation fee.
                      </li>
                      <li>
                        Cancellations made less than 48 hours before the booking
                        time will not be refunded.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div
                className={`flex justify-between  rounded-md ${
                  termsConditions
                    ? "bg-transparent my-1 text-base"
                    : "bg-gray-100 py-3 px-3 text-gray-800 font-semibold"
                }`}
                onClick={() => setTermsConditions(!termsConditions)}
              >
                <div className="flex items-center">
                  <span className="whitespace-nowrap">Terms & Conditions:</span>
                </div>
                <p>{termsConditions ? <IoIosArrowDown /> : <IoIosArrowUp />}</p>
              </div>
              <div>
                {termsConditions && (
                  <div className="bg-gray-200 px-5 py-2 rounded-md text-gray-500 font-semibold">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        The facility must be used for the purpose stated at the
                        time of booking. Any change in purpose requires prior
                        approval.
                      </li>
                      <li>
                        The booking party is responsible for any damage caused
                        to the facility during the booking period. Any repair
                        costs will be charged to the booking party.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityBooking;
