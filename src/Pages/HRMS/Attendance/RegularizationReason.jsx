import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import AttendanceDetailsList from "./AttendanceDetailsList";
import { GrHelpBook } from "react-icons/gr";
import Table from "../../../ConfigurationFile/Table";

function RegularizationReason() {
  const columns = [
    {
      name: "Reason",
      selector: (row) => row.reason,
      sortable: true,
    },
    {
      name: "Visible to",
      selector: (row) => row.visible_to,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      reason: "Forgot",
      visible_to: "All",
      status: "Active",
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
            <h1 className="text-3xl font-bold">Attendance</h1>
          </div>
          <p className="mx-10 my-2">View Attendance Settings</p>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 my-3 rounded-md ml-20">
          <div className="bg-white rounded-md">
            <AttendanceDetailsList />
          </div>
        </div>
        <div className="col-span-6 my-3 rounded-md">
          <div className="flex justify-start">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Regularization Reason
            </h2>
          </div>
          <div className="my-3">
            <Table columns={columns} data={data} />
          </div>
        </div>
        <div className="col-span-3 rounded-md">
          <div className="my-4 w-full">
            <div className="flex flex-col mt-4 mr-2 bg-white rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2">
              <div className="flex  gap-4 font-medium">
                <GrHelpBook size={20} />
                <h2>Help Center</h2>
              </div>
              <div className=" ">
                {/* <p className="font-medium">Help Center</p> */}
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>
                    Attendance settings allows you to configure attendance
                    policies in the form of templates based on different
                    departments, profiles, locations, etc.
                  </li>
                  <li>
                    Within the attendance templates you can choose the mode of
                    capturing the attendance like web check-in, biometrics,
                    timesheet, mobile application.
                  </li>
                  <li>
                    You can automate the attendance process by automatically
                    capturing late marks, half-days, overtime and leave
                    deductions based on the template settings. You can also
                    configure attendance regularization limit and reason.
                  </li>
                  <li>
                    In the web check-in you can restrict capturing attendance
                    through static IP. Similarly, in mobile applications you can
                    restrict capturing attendance through geo-fencing.
                  </li>
                  <li>
                    Attendance module is integrated with leave and payroll
                    module and hence will sync data from the attendance module
                    and derive data like LOP calculations for running payroll.
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

export default RegularizationReason;
