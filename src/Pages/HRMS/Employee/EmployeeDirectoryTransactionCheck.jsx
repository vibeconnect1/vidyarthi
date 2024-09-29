import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import AdminHRMS from "../AdminHRMS";
import { FaPhone, FaRegUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import profile3 from "/profile3.jpg";
function EmployeeDirectoryTransactionCheck() {
  return (
    <div>
      {/* <Header /> */}
      <AdminHRMS />
      <div className="flex">
        <div className="flex flex-col overflow-hidden w-screen">
          <div className="my-6 space-y-4 ml-24">
            <h2 className="text-2xl font-medium text-gray-800 flex items-center gap-2">
              <Link>
                <IoIosArrowBack />
              </Link>
              Employee Data Request
            </h2>
          </div>
          <div className="flex gap-5 w-full ml-24 mr-5">
            <div className="w-96 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex justify-center items-center flex-col">
                <img
                  className=" h-20 w-20 rounded-full my-2"
                  src={profile3}
                  alt="Profile"
                />
                <h2 className="text-lg font-medium  text-gray-800">
                  Rahul Sharma
                </h2>
                <p className="text-gray-600 text-sm mb-2">125323</p>
                <p className="text-white bg-green-500 rounded-md px-2">
                  Active
                </p>
              </div>
              <div className="my-5">
                <div className="flex gap-3 px-5 py-1">
                  <span className="text-red-700 mt-1">
                    <FaRegUser />
                  </span>
                  <div className="border-r border-gray-300 mx-1 h-5"></div>
                  <p className="text-gray-600 ">Marketing Head</p>
                </div>
                <div className="flex gap-3 px-5 py-1">
                  <span className="text-red-700 mt-1">
                    <CiLocationOn />
                  </span>
                  <div className="border-r border-gray-300 mx-1 h-5"></div>
                  <p className="text-gray-600 ">Mumbai: Maharashtra</p>
                </div>
                <div className="flex gap-3 px-5 py-1">
                  <span className="text-red-700 mt-1">
                    <FaPhone />
                  </span>
                  <div className="border-r border-gray-300 mx-1 h-5"></div>
                  <p className="text-gray-600 ">123452345</p>
                </div>
                <div className="flex gap-3 px-5 py-1">
                  <span className="text-red-700 mt-1">
                    <MdOutlineMail />
                  </span>
                  <div className="border-r border-gray-300 mx-1 h-5"></div>
                  <p className="text-gray-600 ">abc@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="w-screen">
              <div className="my-2">
                <h2 className="text-xl font-medium text-gray-800">
                  Update Records
                </h2>
              </div>
              <div className="bg-white px-5 rounded-md py-3">
                <p className="text-gray-500">
                  Dear Ankit Nima, Vinayak Kapdoskar has requested you to
                  complete the following data
                </p>
                <div className="my-5 flex flex-wrap">
                  <div className="w-1/6 px-0"></div>
                  <div className="w-2/5 px-2 text-center font-medium">
                    Current Value
                  </div>
                  <div className="w-2/5 px-2 text-center font-semibold">
                    Proposed Value
                  </div>
                </div>
                <div className="w-full px-0 mx-5">
                  <div className="flex mb-4 gap-5">
                    <div className="w-1/6 px-0">
                      <label className="font-medium">Aadhar No</label>
                    </div>
                    <div className="w-2/5 px-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        value=""
                        placeholder="854153693741"
                        className="border-b border-gray-500 focus:outline-none w-full"
                        disabled
                      />
                    </div>
                    <div className="w-2/5">
                      <input
                        type="number"
                        placeholder="Aadhar Number"
                        className="border-b border-gray-500 focus:outline-none w-full"
                      />
                      <div className="flex items-center mt-2">
                        <input
                          className="current_data_box aadhar_no_checkbox"
                          type="checkbox"
                          id="" // add an id for better accessibility
                          name=""
                        />
                        <label htmlFor="" className="text-sm ml-2">
                          Use Current Data
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <button className="font-semibold py-2 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2">
                    Back
                  </button>
                  <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDirectoryTransactionCheck;
