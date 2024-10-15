import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";
import FlexiSettingsidebar from "./FlexiSettingsidebar";

function GeneralSettingsFlexi() {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">Flexi Benefit Management</h1>
          </div>
          <p className="mx-10 my-2">View Flexi Benefit Settings</p>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5">
        <div className="col-span-3 my-3 rounded-md ml-20">
          <div className="bg-white rounded-md">
            <FlexiSettingsidebar />
          </div>
        </div>
        <div className="col-span-6 my-3 rounded-md">
          <div className="flex justify-between pb-3 px-2">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Flexi Benefit Settings
            </h2>
            <div className="flex gap-2">
              <div>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="px-4 py-1 border border-gray-500 text-black rounded-md flex items-center gap-3"
                  >
                    <BiEdit size={15} /> Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-1 border border-gray-500 text-black rounded-md flex items-center gap-2"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      Cancel
                    </button>
                    <button className="px-4 py-1 bg-green-500 text-white rounded-md flex items-center gap-2">
                      Save
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-8 bg-white rounded-md p-5 pb-10">
            <label className="block  text-gray-600 text-base">
              When were the initial balances set? (Auto eligibility accrual will
              begin after this date) *
            </label>
            <div className="mb-2">
              <input
                type="text"
                name=""
                placeholder="01-01-2024"
                className={`border-b border-gray-500 focus:outline-none w-full${
                  !isEditing
                    ? "border-b border-gray-500 focus:outline-none w-full"
                    : ""
                }`}
                readOnly={!isEditing}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="block  text-gray-600 text-base">
                Would you like to have separate payslips for flexi benefits? *
              </label>
              <div>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="separatePayslips"
                    className="mr-1"
                    disabled={!isEditing}
                  />
                  Yes
                </label>
                <label className="text-gray-700">
                  <input
                    type="radio"
                    name="separatePayslips"
                    className="mr-1"
                    disabled={!isEditing}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="block  text-gray-600 text-base">
                Would you like to have previous uploads for flexi benefits?{" "}
              </label>
              <div>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="previousUploads"
                    className="mr-1"
                    disabled={!isEditing}
                  />
                  Yes
                </label>
                <label className="text-gray-700">
                  <input
                    type="radio"
                    name="previousUploads"
                    className="mr-1"
                    disabled={!isEditing}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="block  text-gray-600 text-base">
                Can supervisors add manual adjustment of eligiblity balance for
                their subordinates? *
              </label>
              <div>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="subordinates"
                    className="mr-1"
                    disabled={!isEditing}
                  />
                  Yes
                </label>
                <label className="text-gray-700">
                  <input
                    type="radio"
                    name="subordinates"
                    className="mr-1"
                    disabled={!isEditing}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="block  text-gray-600 text-base">
                Would you like to freeze the submission of flexi benefits?
              </label>
              <div>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="freeze"
                    className="mr-1"
                    disabled={!isEditing}
                  />
                  Yes
                </label>
                <label className="text-gray-700">
                  <input
                    type="radio"
                    name="freeze"
                    className="mr-1"
                    disabled={!isEditing}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 rounded-md">
          <div className="my-4 w-full">
            <div className="flex flex-col mt-4 bg-white rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2">
              <div className="flex  gap-4 font-medium">
                <GrHelpBook size={20} />
                <h2>Help Center</h2>
              </div>
              <div className=" ">
                {/* <p className="font-medium">Help Center</p> */}
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>
                    Flexi benefit settings allow you to configure salary-related
                    reimbursements that let employees save on tax by submitting
                    proofs. Unsubmitted amount will be considered as a taxable
                    income.
                  </li>
                  <li>
                    You can create different categories like internet
                    allowances, petrol reimbursements, food allowances, etc. and
                    set the allowance amount in the employee salary table. You
                    can set the frequency as
                    monthly/quarterly/semi-annually/annually.
                  </li>
                  <li>
                    The eligibility of the calculations will be based on the
                    attendance.
                  </li>
                  <li>
                    Employees can track their eligibility and reimbursement
                    status from the flexi-benefits section. They also have an
                    option to generate separate flexi payslip.
                  </li>
                  <li>
                    Categories cannot be edited/deleted if already assigned to
                    employees.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralSettingsFlexi;
