import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { FaImage } from "react-icons/fa";

function AddEmployees() {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-2xl font-medium text-gray-800 mx-5 mt-5">
            Add Employees
          </h2>
          <div className="mx-5 bg-white rounded-md my-5 px-5 py-5">
            <div className="grid grid-cols-3 gap-10 my-5">
              <div className="md:mx-10 my-5 col-span-1">
                <label
                  htmlFor="file-upload"
                  className="border border-gray-500 p-4 mb-4 h-48 w-36 rounded-lg  flex items-center flex-col justify-center cursor-pointer"
                >
                  <FaImage size={30} className="my-2" />
                  <p>Upload Picture</p>
                </label>
                <input type="file" className="hidden" id="file-upload" />
              </div>
              <div className="col-span-2 ">
                <div className="grid grid-cols-2 my-5 gap-10">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Employee Name"
                      className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="employeeId"
                      placeholder="Employee ID"
                      className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <select
                      name="gender"
                      className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                    >
                      <option value="" disabled selected>
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="date"
                      name="dob"
                      placeholder="Date of Birth (YYYY-MM-DD)"
                      className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="contactNumber"
                      placeholder="Contact Number"
                      className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                    />
                  </div>
                  <div className="flex flex-col">
                <input
                  type="date"
                  name="joiningDate"
                  placeholder="Joining Date (YYYY-MM-DD)"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="salary"
                  placeholder="Salary"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
                </div>
              </div>
              <div className="flex flex-col">
                <select
                  name="role"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                >
                  <option value="" disabled selected>
                    Role
                  </option>
                  <option value="teaching">Teaching</option>
                  <option value="administration">Administration</option>
                  <option value="support">Support Staff</option>
                </select>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="designation"
                  placeholder="Designation"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <select
                  name="qualification"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                >
                  <option value="" disabled selected>
                    Qualification
                  </option>
                  <option value="highSchool">High School</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
              <div className="flex flex-col">
                <select
                  name="employmentType"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                >
                  <option value="" disabled selected>
                    Employment Type
                  </option>
                  <option value="fullTime">Full-Time</option>
                  <option value="partTime">Part-Time</option>
                  <option value="contract">Contract</option>
                </select>
              </div>
              <div className="flex flex-col col-span-3">
                <textarea
                  name="address"
                  placeholder="Address"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button className="bg-gray-500 text-white px-5 py-2 rounded-md hover:bg-gray-600 focus:outline-none">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployees;
