import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { FaIdCard, FaUpload } from "react-icons/fa";
import { LuFileSearch } from "react-icons/lu";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentMagnifyingGlass,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import Select from "react-select";
import { GrDocumentText, GrHelpBook } from "react-icons/gr";
import profile from "/profile.png";

function InitiateSeparation() {
  const [holdSalary, setHoldSalary] = useState("");
  const [salaryHoldModal, setSalaryHoldModal] = useState(false);
  const [salaryModal, setSalaryModal] = useState(false);

  const [checklist, setChecklist] = useState(false);
  const [encashExemption, setEncashExemption] = useState(false);
  const handleChange = (event) => {
    setHoldSalary(event.target.value);
  };

  const options = [
    { value: "select-all", label: "Select All" },
    { value: "general", label: "General" },
  ];

  const handleSelectChange = (selectedOption) => {
    console.log("Selected:", selectedOption);
  };

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

  const handleSelectChange1 = (e) => {
    // Get the selected value
    const selectedValue = e.target.value;
    console.log("Selected value:", selectedValue);

    // Check if the selected value matches "manual"
    if (selectedValue === "manual") {
      setEncashExemption(true); // Show the input field for manual input
    } else {
      setEncashExemption(false); // Hide the input field
    }
  };

  return (
    <div className="w-screen">
      <AdminHRMS />
      <div className="flex flex-col ">
        <div className="">
          <header className="text-black bg-white  py-4 ml-20 px-5 border border-gray-400">
            <h1 className="text-3xl pl-5 font-bold">Resignation Application</h1>
            <p className="pl-5 text-sm mb-3">
              Employees who have requested for separation from the organisation
              are located here.
            </p>
            <h2 className="text-xl font-semibold mx-3">Resignation Form</h2>
          </header>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-5">
            <div className="col-span-4 ml-20">
              <div className="col-span-3 px-20 bg-white mx-10 py-5">
                <div className="flex gap-2 items-center py-5">
                  <FaIdCard size={30} />{" "}
                  <h2 className="font-semibold">Basic Information</h2>
                </div>
                <div className="grid grid-cols-2 my-3 gap-x-5">
                  <div className="flex justify-between my-1">
                    <p>Employee Name:</p>
                    <p>Karan Singh</p>
                  </div>
                  <div className="flex justify-between my-1">
                    <p>Branch Location:</p>
                    <p>Mumbai; Mumbai; Maharashtra</p>
                  </div>
                  <div className="flex justify-between my-1">
                    <p>Employee Code:</p>
                    <p>1010</p>
                  </div>
                  <div className="flex justify-between my-1">
                    <p>Department:</p>
                    <p>Unassigned</p>
                  </div>
                  <div className="flex justify-between my-1">
                    <p>Employment Status:</p>
                    <p className="text-green-500">Confirmed</p>
                  </div>
                  <div className="flex justify-between my-1">
                    <p>Supervisor Name & Code: </p>
                    <p>Sandeep Jain - 1001</p>
                  </div>
                  <div className="flex justify-between my-1">
                    <p>Submission Date: </p>
                    <p>23-Sep-2024</p>
                  </div>
                  <div className="flex justify-between my-1">
                    <p>Joining Date:</p>
                    <p>19-Jun-2019</p>
                  </div>
                </div>
              </div>
              <div className="col-span-3 px-20 bg-white my-3 mx-10 py-5">
                <div className="flex gap-2 items-center py-5">
                  <LuFileSearch size={30} />{" "}
                  <h2 className="font-semibold">Resignation Details</h2>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      name=""
                      className="border-b border-gray-500 focus:outline-none w-full"
                      placeholder="Resignation Applicate Date *"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name=""
                      className="border-b border-gray-500 focus:outline-none w-full"
                      placeholder="Requested Last Working Date *"
                    />
                  </div>
                  <div>
                    <select
                      className="border-b border-gray-500 focus:outline-none w-full"
                      required
                      name=""
                    >
                      <option value="">
                        Select Separation Types and Reasons
                      </option>
                      <optgroup value="" label="Absconding">
                        <option value="">
                          Better Opportunity - Compensation
                        </option>
                        <option value="">Better Opportunity - Job Role</option>
                        <option value="">Better Opportunity - Other</option>
                        <option value="">Company Issue - Culture</option>
                        <option value="">Company Issue - Other</option>
                        <option value="">Personal Reason - Family</option>
                        <option value="">Personal Reason - Health</option>
                        <option value="">
                          Personal Reason - Higher Education
                        </option>
                        <option value="">Personal Reason - Other</option>
                        <option value="">Personal Reason - Relocation</option>
                        <option value="">Personal Reason - Work Commute</option>
                      </optgroup>
                      <optgroup
                        value=""
                        label="Contract End Reason For Not Renewing"
                      >
                        <option value="">Company Layoff</option>
                        <option value="">Ethical Violation</option>
                        <option value="">Job Performance</option>
                        <option value="">Project Completion</option>
                      </optgroup>
                      <optgroup value="" label="Death">
                        <option value="">Job Related Death</option>
                        <option value="">Non-Job Related Death</option>
                      </optgroup>
                      <optgroup value="" label="Disability">
                        <option value="">Job Related Disability</option>
                        <option value="">Non-Job Related Disability</option>
                      </optgroup>
                      <optgroup value="" label="Resignation">
                        <option value="">
                          Better Opportunity - Compensation
                        </option>
                        <option value="">Better Opportunity - Job Role</option>
                        <option value="">Better Opportunity - Other</option>
                        <option value="">Company Issue - Culture</option>
                        <option value="">Company Issue - Other</option>
                        <option value="">
                          Company Issue - Reporting Supervisor
                        </option>
                        <option value="">Personal Reason - Family</option>
                        <option value="">Personal Reason - Health</option>
                        <option value="">
                          Personal Reason - Higher Education
                        </option>
                        <option value="">Personal Reason - Other</option>
                        <option value="">Personal Reason - Relocation</option>
                        <option value="">Personal Reason - Work Commute</option>
                      </optgroup>
                      <optgroup value="" label="Retirement">
                        <option value="">
                          Company Voluntary Retirement Scheme
                        </option>
                        <option value="">Early Retirement</option>
                        <option value="">Reach Company Retirement Age</option>
                      </optgroup>
                      <optgroup value="" label="Termination">
                        <option value="">Company Layoff</option>
                        <option value="">Ethical Violation</option>
                        <option value="">Job Performance</option>
                        <option value="">Other</option>
                        <option value="">Redundancy of Job role</option>
                      </optgroup>
                      <optgroup value="" label="Transfer">
                        <option value="">Transfer Within Group Entity</option>
                        <option value="">Transfer to Other Location</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <select
                      className="border-b border-gray-500 focus:outline-none w-full"
                      required
                      name=""
                    >
                      <option value="">Select FnF Settlement Month </option>
                      <option value="">Sep-2024</option>
                      <option value="">Oct-2024</option>
                      <option value="">Nov-2024</option>
                      <option value="">Dec-2024</option>
                      <option value="">Jan-2025</option>
                      <option value="">Feb-2025</option>
                      <option value="">Mar-2025</option>
                      <option value="">Apr-2025</option>
                      <option value="">May-2025</option>
                      <option value="">Jun-2025</option>
                      <option value="">Jul-2025</option>
                      <option value="">Aug-2025</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      id=""
                      className="border-b border-gray-500 focus:outline-none w-full"
                      rows="2"
                      placeholder="Comments"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-3 px-20 bg-white my-3 mx-10 py-5">
                <div className="flex gap-2 items-center py-5">
                  <HiOutlineClipboardDocumentList size={30} />
                  <h2 className="font-semibold">Additional Details</h2>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="block text-gray-600 text-base">
                      Hold Salary? *
                    </label>
                    <div>
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="holdSalary"
                          value="yes"
                          checked={holdSalary === "yes"}
                          onChange={handleChange}
                          onClick={() => setSalaryHoldModal(!salaryHoldModal)}
                          className="mr-1"
                        />
                        Yes
                      </label>
                      <label className="text-gray-700">
                        <input
                          type="radio"
                          name="holdSalary"
                          value="no"
                          checked={holdSalary === "no"}
                          onChange={handleChange}
                          className="mr-1"
                        />
                        No
                      </label>
                      {salaryHoldModal && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
                            <div className="flex justify-end">
                              <button
                                className=""
                                onClick={() => {
                                  setSalaryHoldModal(false); // Close current modal
                                  setSalaryModal(true); // Open new modal
                                }}
                              >
                                <IoMdClose size={20} />
                              </button>
                            </div>
                            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 pb-2">
                              Are you sure?
                            </h2>
                            <div className="mt-3">
                              <p className="my-2">
                                Holding Employee would make him/her unavailable
                                for the Payroll Processing.
                              </p>
                              <p className="my-2">
                                Last Payslips available is July-2024
                              </p>
                              <div className="flex justify-center gap-2">
                                <button
                                  onClick={() => {
                                    setSalaryHoldModal(false); // Close current modal
                                    setSalaryModal(true); // Open new modal
                                  }}
                                  className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
                                >
                                  Ok
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {salaryModal && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
                            <div className="flex justify-end">
                              <button
                                className=""
                                onClick={() => setSalaryModal(false)} // Close new modal
                              >
                                <IoMdClose size={20} />
                              </button>
                            </div>
                            <h2 className="text-xl font-medium flex justify-center">
                              Are you sure?
                            </h2>
                            <div className="mt-3">
                              <div>
                                <textarea
                                  id=""
                                  className="border-b border-gray-500 focus:outline-none w-full"
                                  rows="2"
                                  placeholder="Approver's comment"
                                />
                              </div>
                            </div>
                            <div className="flex justify-center gap-2">
                              <button
                                onClick={() => setSalaryModal(false)}
                                className="font-semibold py-2 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                              >
                                Cancel
                              </button>
                              <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                                Upload
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <input
                      type="number"
                      name=""
                      className="border-b border-gray-500 focus:outline-none w-full"
                      placeholder="Employee Portal access after the Last working days *"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block  text-gray-600 text-base">
                      Exit Interview Required?
                    </label>
                    <div>
                      <label className="mr-4">
                        <input type="radio" name="name" className="mr-1" />
                        Yes
                      </label>
                      <label className="text-gray-700">
                        <input type="radio" name="name" className="mr-1" />
                        No
                      </label>
                    </div>
                  </div>
                  <div>
                    <select
                      className="border-b border-gray-500 focus:outline-none w-full"
                      required
                      name=""
                    >
                      <option value="">Exit Interview Survey </option>
                      <option value="">
                        Please select Exit Interview Survey
                      </option>
                      <option value="">Exit Interview Template</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block  text-gray-600 text-base">
                      Offboarding Checklist *
                    </label>
                    <div>
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="name"
                          className="mr-1"
                          onClick={() => setChecklist(!checklist)}
                        />
                        Yes
                      </label>
                      <label className="text-gray-700">
                        <input type="radio" name="name" className="mr-1" />
                        No
                      </label>
                    </div>
                  </div>
                  {checklist && (
                    <div>
                      <Select
                        options={options}
                        placeholder="Select All"
                        onChange={handleSelectChange}
                        className="border-b border-gray-500 focus:outline-none w-full"
                        styles={customStyles}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-3 px-20 bg-white mx-10 py-5">
                <div>
                  <div className="flex gap-2 items-center py-5">
                    <GrDocumentText size={30} />
                    <h2 className="font-semibold">
                      Estimated Full & Final Settlement and Recovery
                    </h2>
                  </div>
                  <h2 className="font-medium text-lg flex flex-col">
                    Leave Encashment/Recovery:
                  </h2>
                </div>
                <div className="grid grid-cols-2 my-3 gap-5">
                  <div>
                    <input
                      type="text"
                      name=""
                      className="border-b border-gray-500 focus:outline-none w-full"
                      placeholder="Total Leave Encashment/Recovery Days(Calculated) "
                      readOnly
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name=""
                      className="border-b border-gray-500 focus:outline-none w-full"
                      placeholder="Total Leave Encashment/Recovery(Calculated)"
                      readOnly
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name=""
                      className="border-b border-gray-500 focus:outline-none w-full"
                      placeholder="Overwrite Leave Encashment/Recovery Days "
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name=""
                      className="border-b border-gray-500 focus:outline-none w-full"
                      placeholder="Overwrite Leave Encashment/Recovery Amount "
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <select
                      className="border-b border-gray-500 focus:outline-none"
                      onChange={handleSelectChange1}
                    >
                      <option value="default">
                        How to calculate Leave encash exemption?
                      </option>
                      <option value="manual">
                        Manually Enter the Amount while calculating the FNF
                      </option>
                      <option value="automatic">
                        Automatically calculate as per Government's Limit
                        (300000)
                      </option>
                    </select>
                  </div>
                  <div>
                    {encashExemption && (
                      <div>
                        <input
                          type="number"
                          name="encashAmount"
                          className="border-b border-gray-500 focus:outline-none w-full"
                          placeholder="Leave Encashment Exemption to be paid"
                        />
                      </div>
                    )}
                  </div>
                  <h2 className="font-medium text-lg flex flex-col col-span-2">
                    Gratuity:
                  </h2>
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-2">
                      <select className="border-b border-gray-500 focus:outline-none">
                        <option value="default">Eligible for Grauity</option>
                        <option value="manual">Yes</option>
                        <option value="automatic">No</option>
                      </select>
                    </div>
                    <div>
                      <input
                        type="number"
                        name=""
                        className="border-b border-gray-500 focus:outline-none w-full"
                        placeholder="Gratuity Amount "
                        readOnly
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="number"
                      name=""
                      className="border-b border-gray-500 focus:outline-none w-full"
                      placeholder="Overwrite Gratuity Amount  "
                    />
                  </div>
                  <h2 className="font-medium text-lg flex flex-col col-span-2">
                    Notice Period Recovery::
                  </h2>
                  <div>
                    <input
                      type="number"
                      name=""
                      className="border-b border-gray-500 focus:outline-none w-full"
                      placeholder="Served Notice Days "
                      readOnly
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name=""
                      className="border-b border-gray-500 focus:outline-none w-full"
                      placeholder="Notice Recovery Days "
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name=""
                      className="border-b border-gray-500 focus:outline-none w-full"
                      placeholder="Notice Period Recovery Amount"
                      readOnly
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name=""
                      className="border-b border-gray-500 focus:outline-none w-full"
                      placeholder="Overwrite Notice Period Recovery Amount "
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-3 px-20 bg-white mx-10 my-3 py-5">
                <div className="flex gap-2 items-center pt-3">
                  <HiOutlineDocumentMagnifyingGlass size={30} />
                  <h2 className="font-semibold">Approver Details</h2>
                </div>
                <div className="grid grid-cols-2 my-3 gap-x-5">
                  <div className="flex items-center space-x-4">
                    <div>
                      <img
                        src={profile}
                        alt="Approver"
                        className="w-16 h-16 rounded-full border-2 border-gray-300" // Circular image with border
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-lg">Level 1 Approver:</p>
                      <p className="text-gray-700">Name: Vinayak Kapdoskar</p>
                      <p className="text-gray-700">Code: 7</p>
                      <p className="text-gray-700">Designation: MD</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div>
                      <img
                        src={profile}
                        alt="Approver"
                        className="w-16 h-16 rounded-full border-2 border-gray-300" // Circular image with border
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-lg">HR and Admin</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 px-20  mx-10 my-3">
                <div className="flex justify-center gap-5">
                  <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                    Cancel
                  </button>
                  <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col mt-4 mr-2 bg-white rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2">
                <div className="flex  gap-4 font-medium max-w-fit">
                  <GrHelpBook size={20} />
                  <h2>Help Center</h2>
                </div>
                <div className=" ">
                  {/* <p className="font-medium">Help Center</p> */}
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li className="text-red-500">
                      Resignation Application Help Section:
                    </li>
                    <li>
                      Resignation Application allows Admins to initiate
                      voluntary or involuntary resignation applications on
                      behalf of the employees. He can do so in situations like
                      the employee absconding, termination etc. As an Admin you
                      can:
                    </li>
                    <li>
                      Decide if you wish to keep the employees' salary on hold
                      and whether the employees' offboarding tasks and exit
                      interviews are required.
                    </li>
                    <li>
                      Control the leave encashment/recovery, gratuity
                      eligibility, and notice period recovery.
                    </li>
                    <li>View/Edit/Cancel Separation Applications <span className="text-red-500">Click Here</span></li>
                    <li>Download FNF Payslip <span className="text-red-500">Click Here</span></li>
                    <li>Download Resignation details <span className="text-red-500">Click Here</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitiateSeparation;
