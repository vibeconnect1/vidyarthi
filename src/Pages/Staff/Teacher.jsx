import React from "react";
import { FaImage } from "react-icons/fa";
import InstituteDetails from "../School management/InstituteDetails";

function Teacher() {
  return (
    <section className="flex">
      <InstituteDetails />
      <div className="flex flex-col w-full overflow-hidden">
        <div className="md:mx-10 my-3 rounded-md bg-white">
          <div className="flex justify-between">
            <h2 className="border-b border-gray-500 text-xl font-medium  my-5 mx-5">
              Teacher Details
            </h2>
          </div>
          <div>
            <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full">
              <div className="md:mx-10 my-5 col-span-1">
                <label
                  htmlFor="file-upload"
                  className="border border-gray-500 p-4 mb-4 h-48 w-36 rounded-lg  flex flex-col items-center justify-center cursor-pointer"
                >
                  <FaImage size={30} className="my-2" />
                  <p>Upload Picture</p>
                </label>
                <input type="file" className="hidden" id="file-upload" />
              </div>
              <div className="col-span-2 mt-8">
                <div className="grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name=""
                      placeholder="First Name"
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name=""
                      placeholder="Last Name"
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name=""
                      placeholder="Guardian's Surname"
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="number"
                      name=""
                      placeholder="Guardian's Aadhar Card No"
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="number"
                      name=""
                      placeholder="Guardian's Pan Card No"
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="email"
                      name=""
                      placeholder="Guardian's Email"
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-10 mx-5">
              <div className="flex flex-col space-y-4">
                <select
                  name="qualification"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select Guardian's Qualification
                  </option>
                  <option value="highSchool">High School</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">Ph.D.</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col">
                <input
                  type="number"
                  name=""
                  placeholder="Guardian's Mobile No"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="number"
                  name=""
                  placeholder="Guardian's Landline"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <select className="border-b border-gray-500 focus:outline-none">
                  <option value="">Select Guardian's Occupation</option>
                  <option value="employed">Employed</option>
                  <option value="business">Business</option>
                  <option value="retired">Retired</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col">
                <select className="border-b border-gray-500 focus:outline-none">
                  <option value="">Select Guardian's Annual Income</option>
                  <option value="below_5lakh">Below 5 Lakhs</option>
                  <option value="5_10lakh">5 - 10 Lakhs</option>
                  <option value="10_20lakh">10 - 20 Lakhs</option>
                  <option value="above_20lakh">Above 20 Lakhs</option>
                </select>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Guardian's Organization"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Guardian's Designation"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <select className="border-b border-gray-500 focus:outline-none">
                  <option value="">Is Guardian a Government Employee?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="flex flex-col">
                <input
                  type="number"
                  placeholder="Guardian's Office Landline No"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Guardian's Official Email ID"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col col-span-3 mb-5">
                <textarea
                  placeholder="Guardian's Office Address"
                  className="border-b border-gray-500 focus:outline-none resize-none"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teacher;
