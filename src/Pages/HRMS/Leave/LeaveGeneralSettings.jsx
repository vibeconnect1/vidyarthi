import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import LeaveSetting from "./LeaveSetting";
function LeaveGeneralSettings() {
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">Leave Management</h1>
          </div>
          <p className="mx-10 my-2">View Leave Settings</p>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5">
        <div className="col-span-3 my-3 rounded-md ml-20">
          <div className="bg-white rounded-md">
            <LeaveSetting />
          </div>
        </div>
        <div className="col-span-6 my-3 rounded-md">
          <div className="flex justify-start">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Leave Settings
            </h2>
          </div>
          <div className="my-3 bg-white rounded-md p-5 space-y-5">
            <div>
              <label className="block text-base text-gray-900 mb-1">
                What month of the year does your leave cycle start from?
              </label>
              <select
                id="employee"
                name="employee"
                disabled
                className="border-b border-gray-500 focus:outline-none w-1/2 py-2"
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div>
              <label className="block text-base text-gray-900 mb-1">
                Are Admins Having Manage Access to Leave Module Allowed To
                Approve/Reject Leave Applications? *
              </label>
              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name="leaveApplications"
                    value="yes"
                    className="mr-2"
                    disabled
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="leaveApplications"
                    value="no"
                    className="mr-2"
                    disabled
                  />
                  No
                </label>
              </div>
            </div>
            <div>
              <label className="block text-base text-gray-900 mb-1">
                Can Supervisors add Leave Adjustments for subordinates?
              </label>
              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name="leaveAdjustments"
                    value="yes"
                    className="mr-2"
                    disabled
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="leaveAdjustments"
                    value="no"
                    className="mr-2"
                    disabled
                  />
                  No
                </label>
              </div>
            </div>
            <div>
              <label className="block text-base text-gray-900 mb-1">
                Would you like to run daily leave accruals?
              </label>
              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name="dailyLeave"
                    value="yes"
                    className="mr-2"
                    disabled
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="dailyLeave"
                    value="no"
                    className="mr-2"
                    disabled
                  />
                  No
                </label>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="block text-base text-gray-900 mb-1">
                What date were initial balances set?{" "}
              </label>
              <input
                name="employee"
                className="border-b border-gray-500 focus:outline-none w-1/2 py-2 bg-white"
                placeholder="01-05-2023"
                disabled
              ></input>
            </div>
            <div>
              <label className="block text-base text-gray-900 mb-1">
                Would you like to show Approve/Reject button in the email
                notification for the approver?
              </label>
              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name="emailNotification"
                    value="yes"
                    className="mr-2"
                    disabled
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="emailNotification"
                    value="no"
                    className="mr-2"
                    disabled
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
                <p className="text-red-500 text-lg my-1">Leave Setting Guidelines:</p>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>
                    Leaves consist of different categories like Privilege leave,
                    casual leave, maternity leave, etc.
                  </li>
                  <li>
                    Leave settings allows you to configure and assign leave
                    policy for different category of leaves based on department,
                    profile, locations, etc.
                  </li>
                  <li>
                    Within the leave category you can set custom leave policies
                    like accrual frequency period, leave encashment, recovery
                    policies, sandwich leave, etc.
                  </li>
                  <li>
                    Within the template settings you can set approval hierarchy
                    and accrual policy for new joinees, etc.
                  </li>
                  <li>
                    Leave module is integrated with the attendance module. Hence
                    the leave data will be synced to attendance.
                  </li>
                  <li>
                    <Link to={`Click Here`} className="text-red-500">
                      Click Here
                    </Link>{" "}
                    for detailed information.
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

export default LeaveGeneralSettings;
