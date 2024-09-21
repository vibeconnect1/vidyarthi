import React, { useState } from "react";
import OrganizationSetting from "./OrganizationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";

const BasicInformation = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="flex ml-20 justify-between bg-white">
      <OrganizationSetting />
      <div className="p-6 bg-white rounded-lg w-full">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Edit
            </button>
          ) : (
            <button className="mb-4 px-4 py-2 bg-green-500 text-white rounded-md">
              Save
            </button>
          )}
        </div>
        <div>
          <div className="grid grid-cols-1 w-full gap-5">
            <div className="mb-2">
              <input
                type="text"
                name="companyName"
                placeholder="What is the registered name of your Company?"
                className={`border-b border-gray-500 focus:outline-none w-full${
                  !isEditing
                    ? "border-b border-gray-500 focus:outline-none w-full"
                    : ""
                }`}
                readOnly={!isEditing}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="contactNumber"
                placeholder="What is the Company contact number?"
                className={`border-b border-gray-500 focus:outline-none w-full${
                  !isEditing
                    ? "border-b border-gray-500 focus:outline-none w-full"
                    : ""
                }`}
                readOnly={!isEditing}
              />
            </div>

            <div className="mb-2">
              <input
                type="number"
                name="retirementAge"
                placeholder="Company's Retirement Age"
                className={`border-b border-gray-500 focus:outline-none w-full${
                  !isEditing
                    ? "border-b border-gray-500 focus:outline-none w-full"
                    : ""
                }`}
                readOnly={!isEditing}
              />
            </div>

            <div className="mb-2">
              <select
                type="number"
                name="minEmployeeAge"
                placeholder=""
                className={`border-b border-gray-500 focus:outline-none w-full${
                  !isEditing
                    ? "border-b border-gray-500 focus:outline-none w-full"
                    : ""
                }`}
                readOnly={!isEditing}
                select
              />
              <option>What is your Company's retirement age?</option>
            </div>

            <div className="mb-2">
              <input
                type="number"
                name="inactiveAccessDays"
                placeholder="What is the minimum age for a person to be an employee in your company?"
                className={`border-b border-gray-500 focus:outline-none w-full${
                  !isEditing
                    ? "border-b border-gray-500 focus:outline-none w-full"
                    : ""
                }`}
              />
            </div>

            <div className="mb-2">
              <input
                type="number"
                name="inactiveAccessDays"
                placeholder="Till how many days Inactive Employees can access the portal from their last working date?"
                className={`border-b border-gray-500 focus:outline-none w-full${
                  !isEditing
                    ? "border-b border-gray-500 focus:outline-none w-full"
                    : ""
                }`}
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 mb-2">
                Last working date can be before resignation date?
              </label>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="lastWorkingDateBeforeResignation"
                    value="true"
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="lastWorkingDateBeforeResignation"
                    value="false"
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            <div className="mb-2">
              <input
                type="number"
                name="probationPeriod"
                placeholder="What is the default Probation period (in days)?"
                className={`border-b border-gray-500 focus:outline-none w-full${
                  !isEditing
                    ? "border-b border-gray-500 focus:outline-none w-full"
                    : ""
                }`}
                readOnly={!isEditing}
              />
            </div>
            <div className="mb-2">
              <input
                type="number"
                name="unauthorizedAbsenceRate"
                placeholder="What is the Unauthorised Absence Rate?"
                className={`border-b border-gray-500 focus:outline-none w-full${
                  !isEditing
                    ? "border-b border-gray-500 focus:outline-none w-full"
                    : ""
                }`}
                readOnly={!isEditing}
              />
            </div>

            <div className="mb-2">
              <label className="block text-gray-400 mb-2">
                Do you want to overwrite old email ID if the same ID is used?
              </label>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="overwriteEmail"
                    value="true"
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="overwriteEmail"
                    value="false"
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HRMSHelpCenter help={"basic"} />
    </div>
  );
};

export default BasicInformation;
