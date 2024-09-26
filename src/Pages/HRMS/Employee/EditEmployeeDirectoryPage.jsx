import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdClose,
} from "react-icons/io";
import {
  AiFillExclamationCircle,
} from "react-icons/ai";
import {
  FaCamera,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaUserTie,
} from "react-icons/fa";
import AdminHRMS from "../AdminHRMS";
function EditEmployeeDirectoryPage() {
  const [isAction, setIsAction] = useState(false);
  const [searchSelect, setSearchSelect] = useState(false);
  const [hold, setHold] = useState(false);
  const [deactivate, SetDeactivate] = useState(false);
  const [deleteEmployee, SetDeleteEmployee] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1); // start at slide 1
  const totalSlides = 20; // total number of slides

  // Handlers for slide navigation
  const handlePrev = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  return (
    <div className=" w-full">
      <AdminHRMS/>
      <div className="flex flex-col w-full overflow-hidden">
        <div className="">
          <header className="text-black bg-white  py-4 ml-20 border border-gray-400">
            <h1 className="text-3xl pl-5 font-bold">Employee Directory</h1>
            <p className="pl-5">
              Employee personal details are noted under this section.
            </p>
            <div className="flex justify-between md:flex-row flex-col">
              <div className="flex gap-14 mx-10">
                <div className="text-gray-800 font-semibold text-lg flex items-center mx-36">
                  Ankit Nima | <span className="text-gray-500 ">135162</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by Name / Code"
                    className="border border-gray-500 p-2 text-black rounded-xl w-full md:w-96 my-2 pr-10"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <button
                      className="text-gray-600 focus:outline-none"
                      onClick={() => setSearchSelect(!searchSelect)}
                    >
                      <FiChevronDown className="h-5 w-5" />
                    </button>
                  </div>

                  {searchSelect && (
                    <div className="absolute mt-1 mr-5 w-96 bg-white border border-gray-300 rounded-md shadow-lg z-10 px-2 py-2">
                      <input
                        type="text"
                        className="border-b border-gray-500 focus:outline-none w-full rounded-md"
                        placeholder="Enter Name or Code"
                        name=""
                      />
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full"
                    onClick={() => setIsAction(!isAction)}
                  >
                    <span>Actions</span>
                    <FaChevronDown />
                  </button>
                  {isAction && (
                    <div className="absolute right-4 mt-1 mr-5 w-60 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                      <div className="py-1 flex flex-col ">
                        <Link
                          to={`/hrms/organization/initiate-separation`}
                          className="hover:bg-gray-100 px-4 py-1 text-left cursor-pointer hover:text-red-500"
                        >
                          Initiate Separation
                        </Link>
                        <button
                          className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-left hover:text-red-500"
                          onClick={() => setHold(!hold)}
                        >
                          Hold
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() => SetDeactivate(!deactivate)}
                        >
                          Deactivate
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1 text-left cursor-pointer hover:text-red-500"
                          onClick={() => SetDeleteEmployee(!deleteEmployee)}
                        >
                          Delete Employee
                        </button>
                      </div>
                    </div>
                  )}
                  {hold && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                      <div className="bg-white w-96 rounded-lg shadow-lg p-6">
                        <div className="flex justify-end">
                          <button className="" onClick={() => setHold(!hold)}>
                            <IoMdClose size={20} />
                          </button>
                        </div>
                        <h2 className="text-xl font-medium flex justify-center">
                          Are you sure?
                        </h2>
                        <div className="mt-3">
                          <div className="flex justify-center my-3">
                            <AiFillExclamationCircle size={40} />
                          </div>
                          <div className="flex justify-center mb-3 px-5">
                            <p>
                              Holding Employee would make him/her unavailable
                              for the Payroll Processing. Last Payslip Available
                              is July-2024
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => setHold(!hold)}
                            className="font-semibold py-2 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                          >
                            Cancel
                          </button>
                          <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {deactivate && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                      <div className="bg-white w-96 rounded-lg shadow-lg p-6">
                        <div className="flex justify-end">
                          <button
                            className=""
                            onClick={() => SetDeactivate(!deactivate)}
                          >
                            <IoMdClose size={20} />
                          </button>
                        </div>
                        <h2 className="text-xl font-medium flex justify-center">
                          Are you sure?
                        </h2>
                        <div className="mt-3">
                          <div className="flex justify-center my-3">
                            <AiFillExclamationCircle size={40} />
                          </div>
                          <div className="flex justify-center mb-3 px-5">
                            <p>
                              Deactivating Employee would make him/her unable to
                              login into account
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => SetDeactivate(!deactivate)}
                            className="font-semibold py-2 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                          >
                            Cancel
                          </button>
                          <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {deleteEmployee && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                      <div className="bg-white w-96 rounded-lg shadow-lg p-6">
                        <div className="flex justify-end">
                          <button
                            className=""
                            onClick={() => SetDeleteEmployee(!deleteEmployee)}
                          >
                            <IoMdClose size={20} />
                          </button>
                        </div>
                        <h2 className="text-xl font-medium flex justify-center">
                          Are you sure?
                        </h2>
                        <div className="mt-3">
                          <div className="flex justify-center my-3">
                            <AiFillExclamationCircle size={40} />
                          </div>
                          <div className="flex justify-center mb-3 px-5">
                            <p>Do you really want to delete this Employee?</p>
                          </div>
                        </div>
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => SetDeleteEmployee(!deleteEmployee)}
                            className="font-semibold py-2 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                          >
                            Cancel
                          </button>
                          <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center bg-gray-200 rounded-md py-2">
                  <button
                    className={`border p-1 rounded bg-gray-200 ${
                      currentSlide === 1 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handlePrev}
                    disabled={currentSlide === 1} // disable when at first slide
                  >
                    <IoIosArrowBack />
                  </button>

                  {/* Display current slide number */}
                  <span className="mx-2">
                    {currentSlide} / {totalSlides}
                  </span>

                  <button
                    className={`border p-1 rounded bg-gray-200 ml-1 ${
                      currentSlide === totalSlides
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={handleNext}
                    disabled={currentSlide === totalSlides} // disable when at last slide
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            </div>
          </header>
          <div className="flex ml-20 gap-1 lg:flex-row p-4 rounded-lg">
            <div className="">
              <div className="relative">
                <div className="absolute -top-20">
                  <div className="w-40 h-40 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 text-4xl font-bold">
                    AN
                  </div>
                  <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md">
                    <FaCamera className="text-pink-600" />
                  </button>
                </div>
              </div>
              <div className="mt-20 mx-16 text-center">
                <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Active
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-gray-200 rounded-lg p-4 shadow-md">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-red-500 mr-2" />
                    <span>Joined On:</span>
                    <span className="ml-auto">05-03-2005</span>
                  </div>

                  <div className="flex items-center">
                    <FaPhone className="text-green-500 mr-2" />
                    <span>Mobile No:</span>
                    <span className="ml-auto">+91-9819476002</span>
                  </div>

                  <div className="flex items-center">
                    <FaBuilding className="text-blue-500 mr-2" />
                    <span>Branch Location:</span>
                    <span className="ml-auto">Mumbai, Maharashtra</span>
                  </div>

                  <div className="flex items-center">
                    <FaEnvelope className="text-yellow-500 mr-2" />
                    <span>Email:</span>
                    <span className="ml-auto">ankit.nima@mailinator.com</span>
                  </div>

                  <div className="flex items-center">
                    <FaUserTie className="text-blue-400 mr-2" />
                    <span>Department:</span>
                    <span className="ml-auto">Marketing</span>
                  </div>

                  <div className="flex items-center">
                    <FaUserTie className="text-blue-400 mr-2" />
                    <span>Position:</span>
                    <span className="ml-auto">Marketing Head</span>
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

export default EditEmployeeDirectoryPage;
