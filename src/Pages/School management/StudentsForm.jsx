import React, { useState } from "react";
import InstituteDetails from "./InstituteDetails";
import { IoIosArrowUp } from "react-icons/io";

function StudentsForm() {
  const [openDropdown, setOpenDropdown] = useState("student");

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="flex">
      <InstituteDetails />
      <div className="w-full flex flex-col overflow-hidden">
        <h2 className="text-center text-2xl font-medium p-2 mx-10 my-3 bg-white rounded-md text-black">
          Add Student
        </h2>
        <div className="md:mx-10 my-3 rounded-md bg-white">
          <div className="flex justify-between">
            <h2 className="border-b border-gray-500 text-xl font-medium  my-5 mx-5">
              Student Details
            </h2>
            <button className="mx-5">
              <IoIosArrowUp
                className={`transform transition-transform ${
                  openDropdown ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => toggleDropdown("student")}
              />
            </button>
          </div>
          {openDropdown === "student" && (
            <div>
              <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full">
                <div className="md:mx-10 my-5 col-span-1">
                  <label
                    htmlFor="file-upload"
                    className="border border-gray-500 p-4 mb-4 h-48 w-36 rounded-lg  flex items-center justify-center cursor-pointer"
                  >
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
                        placeholder="Surname"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name=""
                        placeholder="Father Name"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name=""
                        placeholder="Mother Name"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <select
                        name="class"
                        className="border-b border-gray-500 focus:outline-none"
                      >
                        <option value="">Select Class</option>
                        <option value="">9th</option>
                        <option value="">10th</option>
                        <option value="">11th</option>
                        <option value="">12th</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <select
                        name="class"
                        className="border-b border-gray-500 focus:outline-none"
                      >
                        <option value="">Select Division</option>
                        <option value="">9-A</option>
                        <option value="">9-B</option>
                        <option value="">9-C</option>
                        <option value="">10-A</option>
                        <option value="">10-B</option>
                        <option value="">10-C</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-10 mx-5">
                <div className="flex flex-col">
                  <input
                    type="date"
                    name=""
                    placeholder="Date of Birth"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="number"
                    name=""
                    placeholder="Age"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name=""
                    placeholder="Place of Birth"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name=""
                    placeholder="State of Birth"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <select
                    name="class"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select Gender</option>
                    <option value="">Male</option>
                    <option value="">FeMale</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name=""
                    placeholder="Nationality"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name=""
                    placeholder="Religion"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name=""
                    placeholder="community"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name=""
                    placeholder="Caste"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name=""
                    placeholder="Mother Tongue"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <select
                    name="bloodGroup"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="number"
                    name=""
                    placeholder="Aadhar Card No"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="number"
                    name=""
                    placeholder="Landing Number"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="number"
                    name=""
                    placeholder="Mobile No"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name=""
                    placeholder="Emergency Contact Name"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="number"
                    name=""
                    placeholder="Emergency Contact Mob No"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="email"
                    name=""
                    placeholder="Email Id"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <select
                    name="state"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select State</option>
                    <option value="state1">Mh</option>
                    <option value="state2">Up</option>
                    <option value="state3">Mp</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name="country"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select Country</option>
                    <option value="country1">Ind</option>
                    <option value="country2">Uk</option>
                    <option value="country3">Aus</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name="board"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select Board</option>
                    <option value="cbse">CBSE</option>
                    <option value="icse">ICSE</option>
                    <option value="state">State Board</option>
                    <option value="international">International Board</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name="fromClass"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">From Class</option>
                    <option value="class1">Class 1</option>
                    <option value="class2">Class 2</option>
                    <option value="class3">Class 3</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name="toClass"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">To Class</option>
                    <option value="class1">Class 1</option>
                    <option value="class2">Class 2</option>
                    <option value="class3">Class 3</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="date"
                    name=""
                    placeholder="Month & Year of Passing"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col col-span-3">
                  <textarea
                    type=""
                    name=""
                    rows={3}
                    placeholder=" Local Address"
                    className="border border-gray-500 focus:outline-none rounded-md"
                  />
                </div>
                <div className="flex flex-col col-span-3">
                  <textarea
                    type=""
                    name=""
                    rows={3}
                    placeholder=" Permanent Address"
                    className="border border-gray-500 focus:outline-none rounded-md"
                  />
                </div>
                <div className="flex flex-col col-span-3 mb-5">
                  <textarea
                    type=""
                    name=""
                    rows={3}
                    placeholder=" School/College e Name"
                    className="border border-gray-500 rounded-md focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="md:mx-10 my-3 rounded-md bg-white">
          <div className="flex justify-between">
            <h2 className="border-b border-gray-500 text-xl font-medium  my-5 mx-5">
              Father Details
            </h2>
            <button className="mx-5">
              <IoIosArrowUp
                className={`transform transition-transform ${
                  openDropdown ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => toggleDropdown("father")}
              />
            </button>
          </div>
          {openDropdown === "father" && (
            <div>
              <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full">
                <div className="md:mx-10 my-5 col-span-1">
                  <label
                    htmlFor="file-upload"
                    className="border border-gray-500 p-4 mb-4 h-48 w-36 rounded-lg  flex items-center justify-center cursor-pointer"
                  >
                    <p>Upload Picture</p>
                  </label>
                  <input type="file" className="hidden" id="file-upload" />
                </div>
                <div className="col-span-2 mt-8">
                  <div className="grid grid-cols-2 gap-10">
                    <div className="flex flex-col">
                      <input
                        type="number"
                        name=""
                        placeholder="Father's Aadhar Card No"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="number"
                        name=""
                        placeholder=" Father's Pan Card No"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="email"
                        name=""
                        placeholder="Father's Email"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col space-y-4">
                      <select
                        name="qualification"
                        className="border-b border-gray-500 focus:outline-none"
                      >
                        <option value="" disabled selected>
                          Select Father's Qualification
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
                        placeholder="Father Mobile No"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="number"
                        name=""
                        placeholder="Father Landing Number"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-10 mx-5">
                <div className="flex flex-col">
                  <select
                    name="fatherOccupation"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select Father's Occupation</option>
                    <option value="employed">Employed</option>
                    <option value="business">Business</option>
                    <option value="retired">Retired</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name="fatherOccupation"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select Father's Occupation</option>
                    <option value="employed">Employed</option>
                    <option value="business">Business</option>
                    <option value="retired">Retired</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name="fatherAnnualIncome"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select Father's Annual Income</option>
                    <option value="below_5lakh">Below 5 Lakhs</option>
                    <option value="5_10lakh">5 - 10 Lakhs</option>
                    <option value="10_20lakh">10 - 20 Lakhs</option>
                    <option value="above_20lakh">Above 20 Lakhs</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="fatherOrganization"
                    placeholder="Father's Organization"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="fatherDesignation"
                    placeholder="Father's Designation"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <select
                    name="fatherIsGovtEmployee"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Is Father a Government Employee?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="number"
                    name="fatherOfficeLandlineNo"
                    placeholder="Father's Office Landline No"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="email"
                    name="fatherOfficialEmailId"
                    placeholder="Father's Official Email ID"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col col-span-3 mb-5">
                  <textarea
                    name="fatherOfficeAddress"
                    placeholder="Father's Office Address"
                    className="border-b border-gray-500 focus:outline-none resize-none"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="md:mx-10 my-3 rounded-md bg-white">
          <div className="flex justify-between">
            <h2 className="border-b border-gray-500 text-xl font-medium  my-5 mx-5">
              Mother Details
            </h2>
            <button className="mx-5">
              <IoIosArrowUp
                className={`transform transition-transform ${
                  openDropdown ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => toggleDropdown("mother")}
              />
            </button>
          </div>
          {openDropdown === "mother" && (
            <div>
              <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full">
                <div className="md:mx-10 my-5 col-span-1">
                  <label
                    htmlFor="file-upload"
                    className="border border-gray-500 p-4 mb-4 h-48 w-36 rounded-lg  flex items-center justify-center cursor-pointer"
                  >
                    <p>Upload Picture</p>
                  </label>
                  <input type="file" className="hidden" id="file-upload" />
                </div>
                <div className="col-span-2 mt-8">
                  <div className="grid grid-cols-2 gap-10">
                    <div className="flex flex-col">
                      <input
                        type="number"
                        name=""
                        placeholder="Mother's Aadhar Card No"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="number"
                        name=""
                        placeholder="Mother's Pan Card No"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="email"
                        name=""
                        placeholder="Mother Email"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col space-y-4">
                      <select
                        name="qualification"
                        className="border-b border-gray-500 focus:outline-none"
                      >
                        <option value="" disabled selected>
                          Select Mother's Qualification
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
                        placeholder="Mother's Mobile No"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="number"
                        name=""
                        placeholder="Mother's Landing Number"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-10 mx-5">
                <div className="flex flex-col">
                  <select className="border-b border-gray-500 focus:outline-none">
                    <option value="">Select Mother's Occupation</option>
                    <option value="employed">Employed</option>
                    <option value="business">Business</option>
                    <option value="retired">Retired</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select className="border-b border-gray-500 focus:outline-none">
                    <option value="">Select Mother's Annual Income</option>
                    <option value="below_5lakh">Below 5 Lakhs</option>
                    <option value="5_10lakh">5 - 10 Lakhs</option>
                    <option value="10_20lakh">10 - 20 Lakhs</option>
                    <option value="above_20lakh">Above 20 Lakhs</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Mother's Organization"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Mother's Designation"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <select className="border-b border-gray-500 focus:outline-none">
                    <option value="">Is Mother a Government Employee?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="number"
                    placeholder="Mother's Office Landline No"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="email"
                    placeholder="Mother's Official Email ID"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col col-span-3 mb-5">
                  <textarea
                    placeholder="Mother's Office Address"
                    className="border-b border-gray-500 focus:outline-none resize-none"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="md:mx-10 my-3 rounded-md bg-white">
          <div className="flex justify-between">
            <h2 className="border-b border-gray-500 text-xl font-medium  my-5 mx-5">
              Guardian Details
            </h2>
            <button className="mx-5">
              <IoIosArrowUp
                className={`transform transition-transform ${
                  openDropdown ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => toggleDropdown("guardian")}
              />
            </button>
          </div>
          {openDropdown === "guardian" && (
            <div>
              <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full">
                <div className="md:mx-10 my-5 col-span-1">
                  <label
                    htmlFor="file-upload"
                    className="border border-gray-500 p-4 mb-4 h-48 w-36 rounded-lg  flex items-center justify-center cursor-pointer"
                  >
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
                        placeholder="Guardian's Name"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name=""
                        placeholder="Surname's Name"
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
                        placeholder="Guardian Email"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
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
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-10 mx-5">
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
                    placeholder="Guardian's Landing Number"
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
          )}
        </div>
        <div className="md:mx-10 my-3 rounded-md bg-white">
          <div className="flex justify-between">
            <h2 className="border-b border-gray-500 text-xl font-medium  my-5 mx-5">
              Other Details
            </h2>
            <button className="mx-5">
              <IoIosArrowUp
                className={`transform transition-transform ${
                  openDropdown ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => toggleDropdown("other")}
              />
            </button>
          </div>
          {openDropdown === "other" && (
            <div>
              <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full">
                {/* <div className="md:mx-10 my-5 col-span-1">
                  <label
                    htmlFor="file-upload"
                    className="border border-gray-500 p-4 mb-4 h-48 w-36 rounded-lg  flex items-center justify-center cursor-pointer"
                  >
                    <p>Upload Picture</p>
                  </label>
                  <input type="file" className="hidden" id="file-upload" />
                </div> */}
                <div className="col-span-3 my-5">
                  <div className="grid grid-cols-3 gap-10 my-5">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name=""
                        placeholder="Sibling Name"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <select className="border-b border-gray-500 focus:outline-none">
                        <option value="">Select Relation</option>
                        <option value="">Brother</option>
                        <option value="">Sister</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="date"
                        name=""
                        placeholder="Date of Birth"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col space-y-4">
                      <select
                        name="class"
                        className="border-b border-gray-500 focus:outline-none"
                      >
                        <option value="">Select Class</option>
                        <option value="1">Class 1</option>
                        <option value="2">Class 2</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <select
                        name="state"
                        className="border-b border-gray-500 focus:outline-none"
                      >
                        <option value="">Select State</option>
                        <option value="state1">Mh</option>
                        <option value="state2">Up</option>
                        <option value="state3">Mp</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <select
                        name="country"
                        className="border-b border-gray-500 focus:outline-none"
                      >
                        <option value="">Select Country</option>
                        <option value="country1">Ind</option>
                        <option value="country2">Uk</option>
                        <option value="country3">Aus</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-10 mx-5">
                <div className="flex flex-col">
                  <select
                    name="board"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select Board</option>
                    <option value="cbse">CBSE</option>
                    <option value="icse">ICSE</option>
                    <option value="state">State Board</option>
                    <option value="international">International Board</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name="fromClass"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">From Class</option>
                    <option value="class1">Class 1</option>
                    <option value="class2">Class 2</option>
                    <option value="class3">Class 3</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name="toClass"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">To Class</option>
                    <option value="class1">Class 1</option>
                    <option value="class2">Class 2</option>
                    <option value="class3">Class 3</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="date"
                    name=""
                    placeholder="Month & Year of Passing"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col col-span-3 my-3">
                  <textarea
                    type="text"
                    name=""
                    rows={3}
                    placeholder="School/College"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="md:mx-10 my-3 rounded-md bg-white">
          <div className="flex justify-between">
            <h2 className="border-b border-gray-500 text-xl font-medium  my-5 mx-5">
              Banking Details
            </h2>
            <button className="mx-5">
              <IoIosArrowUp
                className={`transform transition-transform ${
                  openDropdown ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => toggleDropdown("banking")}
              />
            </button>
          </div>
          {openDropdown === "banking" && (
            <div>
              <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full">
                {/* <div className="md:mx-10 my-5 col-span-1">
                  <label
                    htmlFor="file-upload"
                    className="border border-gray-500 p-4 mb-4 h-48 w-36 rounded-lg  flex items-center justify-center cursor-pointer"
                  >
                    <p>Upload Picture</p>
                  </label>
                  <input type="file" className="hidden" id="file-upload" />
                </div> */}
                <div className="col-span-3 my-5">
                  <div className="grid grid-cols-3 gap-10 my-5">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name=""
                        placeholder="Bank Name"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name=""
                        placeholder="Bank Account"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name=""
                        placeholder="IFSC Code:"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name=""
                        placeholder="Branch Name "
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="md:mx-10 my-3 rounded-md bg-white">
          <div className="flex justify-between">
            <h2 className="border-b border-gray-500 text-xl font-medium  my-5 mx-5">
              Flexible Fields
            </h2>
            <button className="mx-5">
              <IoIosArrowUp
                className={`transform transition-transform ${
                  openDropdown ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => toggleDropdown("flexible")}
              />
            </button>
          </div>
          {openDropdown === "flexible" && (
            <div>
              <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full">
                <div className="md:mx-10 my-5 col-span-1">
                  <label
                    htmlFor="file-upload"
                    className="border border-gray-500 p-4 mb-4 h-48 w-36 rounded-lg  flex items-center justify-center cursor-pointer"
                  >
                    <p>Upload Picture</p>
                  </label>
                  <input type="file" className="hidden" id="file-upload" />
                </div>
                <div className="col-span-3 my-5">
                  <div className="grid grid-cols-4 gap-10 my-5">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name=""
                        placeholder="Label Name"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <select className="border-b border-gray-500 focus:outline-none">
                        <option value="">Select Label</option>
                        <option value="">Option</option>
                        <option value="">Option</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          name=""
                          placeholder="Branch Name "
                          className="border-b border-gray-500 focus:outline-none"
                        />
                        <p>Add Message</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center mt-2">
                      <div className="flex gap-3">
                        <input
                          type="radio"
                          name="options"
                          id="option2"
                          className="border-gray-500 focus:outline-none"
                        />
                        <label htmlFor="option2">Option 2</label>
                      </div>
                      <div className="flex gap-3">
                        <input
                          type="radio"
                          name="options"
                          id="option2"
                          className="border-gray-500 focus:outline-none"
                        />
                        <label htmlFor="option2">Option 2</label>
                      </div>
                    </div>
                    <div className="flex flex-col col-span-4">
                      <textarea
                        type="text"
                        rows={2}
                        placeholder="text Label"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentsForm;
