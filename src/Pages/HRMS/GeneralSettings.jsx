import React, { useState} from "react";
import { GrHelpBook } from "react-icons/gr";
import LeaveSetting from "./Leave/LeaveSetting";
const GeneralSettings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  return (
    <section className="flex gap-10 ml-20">
      <LeaveSetting />
      <div className="w-2/3 h-full my-10">
        <div className="p-6 bg-white  rounded-md ">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4">Leave Settings</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                What month of the year does your leave cycle start from?
              </label>
              <select
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  !isEditing ? "bg-gray-200" : ""
                }`}
                readOnly={!isEditing}
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                {/* Add other months */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Are Admins Having Manage Access to Leave Module Allowed To
                Approve/Reject Leave Applications?
              </label>
              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name="dailyAccruals"
                    value="yes"
                    disabled={!isEditing}
                  />{" "}
                  &nbsp; Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="dailyAccruals"
                    value="no"
                    disabled={!isEditing}
                  />{" "}
                  &nbsp; No
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Can Supervisors add Leave Adjustments for subordinates?
              </label>
              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name="dailyAccruals"
                    value="yes"
                    disabled={!isEditing}
                  />{" "}
                  &nbsp; Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="dailyAccruals"
                    value="no"
                    disabled={!isEditing}
                  />{" "}
                  &nbsp; No
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Would you like to run daily leave accruals?
              </label>
              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name="dailyAccruals"
                    value="yes"
                    disabled={!isEditing}
                  />{" "}
                  &nbsp; Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="dailyAccruals"
                    value="no"
                    disabled={!isEditing}
                  />{" "}
                  &nbsp; No
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 mr-2  bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
        <div className="flex  gap-4 font-medium">
          <GrHelpBook size={20} />
          <h2>Help Center</h2>
        </div>
        <div className=" ">
          <p className="font-medium">Leave Setting Guidelines:</p>
          <ul style={listItemStyle} className="flex flex-col gap-2">
            <li>
              <ul style={listItemStyle}>
                <li>
                  Leaves consist of different categories like Privilege leave,
                  casual leave, maternity leave, etc.{" "}
                </li>
              </ul>
            </li>
            <li>
              <ul style={listItemStyle}>
                <li>
                  Leave settings allows you to configure and assign leave policy
                  for different category of leaves based on department, profile,
                  locations, etc.{" "}
                </li>
              </ul>
            </li>
            <li>
              <ul style={listItemStyle}>
                <li>
                  Within the leave category you can set custom leave policies
                  like accrual frequency period, leave encashment, recovery
                  policies, sandwich leave, etc.{" "}
                </li>
              </ul>
            </li>

            <li>
              <p>
                {/* <a href="#" className="text-blue-400">
                      Click Here{" "}
                    </a> */}
                Within the template settings you can set approval hierarchy and
                accrual policy for new joinees, etc.{" "}
              </p>
            </li>
            <li>
              <p>
                {/* <a href="#" className="text-blue-400">
                      Click Here{" "}
                    </a> */}
                Leave module is integrated with the attendance module. Hence the
                leave data will be synced to attendance.{" "}
              </p>
            </li>
            <li>
              <p>
                <a href="leave-link" className="text-blue-400">
                  Click Here{" "}
                </a>
                for detailed information.{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GeneralSettings