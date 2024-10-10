import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import TimesheetManagementSetting from "./TimesheetManagementSetting";
import { BiEdit } from "react-icons/bi";

function TimesheetGeneralSettings() {
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
            <h1 className="text-3xl font-bold">Timesheet Management</h1>
          </div>
          <p className="mx-10 my-2">View Timesheet Settings</p>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5">
        <div className="col-span-3 my-3 rounded-md ml-20">
          <div className="bg-white rounded-md">
            <TimesheetManagementSetting />
          </div>
        </div>
        <div className="col-span-6 my-3 rounded-md">
          <div className="flex justify-between pb-3 px-2">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Timesheet General Settings
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
            <div>
              <h2 className="my-5">
                {" "}
                Select On what day of the month does your attendance cycle
                begin?
              </h2>
              <select
                name=""
                className="border-b border-gray-500 focus:outline-none w-full"
                disabled={!isEditing}
              >
                <option selected="selected" value="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
              </select>
            </div>

            <div>
              <h2 className="my-5">
                From which attendance cycle is this date active from?
              </h2>
              <div className="flex gap-5">
                <div className="w-full">
                  <select
                    className="border-b border-gray-500 focus:outline-none w-full"
                    disabled={!isEditing}
                    name=""
                  >
                    <option value="">Select</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option selected="selected" value="11">
                      November
                    </option>
                    <option value="12">December</option>
                  </select>
                </div>
                <div className="w-full">
                  <select
                    className="border-b border-gray-500 focus:outline-none w-full"
                    disabled={!isEditing}
                    name=""
                  >
                    <option value="">Select</option>
                    <option value="2021">2021</option>
                    <option selected="selected" value="2022">
                      2022
                    </option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
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
                    Timesheet settings allows you to _ bconfigure and manage
                    company clients, projects, allocated tasks and assigned
                    templates. b_
                  </li>
                  <li>
                    You can define details like client code, project code, per
                    hour rate, type of task (internal/external) and the status
                    of the task.
                  </li>
                  <li>
                    You can configure template settings like frequency of
                    timesheet submission (daily/weekly/monthly), set approval
                    hierarchy and auto approvals, etc.
                  </li>
                  <li>
                    Timesheet module is integrated with the attendance module.
                    Hence, timesheet data can also be used for capturing
                    attendance.
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

export default TimesheetGeneralSettings;
