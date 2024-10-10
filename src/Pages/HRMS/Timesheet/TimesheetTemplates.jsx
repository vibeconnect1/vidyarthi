import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import TimesheetManagementSetting from "./TimesheetManagementSetting";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../../ConfigurationFile/Table";
import { BiEdit } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";

function TimesheetTemplates() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Level Of Approvals",
      selector: (row) => row.level_of_approvals,
      sortable: true,
    },
    {
      name: "Capture Approvers	",
      selector: (row) => row.capture_approvers,
      sortable: true,
    },
    {
      name: "Date Updated",
      selector: (row) => row.date_updated,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      name: "General Temp...",
      level_of_approvals: "Single Level",
      capture_approvers: "Employee Wise",
      date_updated: "21-06-2023",
    },
  ];
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
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Templates
            </h2>
            <div className="md:flex justify-end gap-2 mb-1">
              <div>
                <input
                  type="text"
                  placeholder="Search by Employee Name or Code"
                  className="border border-gray-500 py-2 px-2 text-black rounded-xl"
                />
              </div>
              <div>
                <button className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full">
                  <PiPlusCircle size={15} />
                  <span>Add Templates</span>
                </button>
              </div>
            </div>
          </div>
          <div className="my-2 bg-white rounded-md px-5 py-5 space-y-6">
            <div>
              <Table columns={columns} data={data} />
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

export default TimesheetTemplates;
