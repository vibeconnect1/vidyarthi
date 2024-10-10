import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import Table from "../../../ConfigurationFile/Table";
import LeaveSetting from "./LeaveSetting";
function LeavePoliciesTemplates() {
  const columns = [
    {
      name: "Leave Type",
      selector: (row) => row.leave_type,
      sortable: true,
    },
    {
      name: "Number of employees covered",
      selector: (row) => row.number_of_employees_covered,
      sortable: true,
    },
    {
      name: "Number of leave categories",
      selector: (row) => row.number_of_leave_categories,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          {/* <button className="border p-2">
            <BiEdit size={15} />
          </button> */}
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      leave_type: "Empire Grabbit - Leave Policy",
      number_of_employees_covered: "59",
      number_of_leave_categories: "7",
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
              Leave Policies
            </h2>
          </div>
          <div className="my-2">
            <Table columns={columns} data={data} />
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
                <p className="text-red-500 text-lg my-1">
                  Leave Setting Guidelines:
                </p>
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

export default LeavePoliciesTemplates;
