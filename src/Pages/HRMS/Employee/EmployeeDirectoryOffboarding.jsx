import React, { useState } from "react";
import EmployeeDirectorySetting from "./EmployeeDirectorySetting";
import EditEmployeeDirectoryPage from "./EditEmployeeDirectoryPage";
import { BiEdit } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import { ImFileText } from "react-icons/im";

function EmployeeDirectoryOffboarding() {
  const [separationApplication, setSeparationApplication] = useState(true);
  const columns = [
    {
      name: "Created by",
      selector: (row) => row.created_by,
      sortable: true,
    },
    {
      name: "Resignation Date",
      selector: (row) => row.resignation_date,
      sortable: true,
    },
    {
      name: "Last Working Date	",
      selector: (row) => row.last_working_date,
      sortable: true,
    },
    {
      name: "Reason",
      selector: (row) => row.reason,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="">
          <button onClick={() => setEditEmployeeOKR(!editEmployeeOKR)}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      created_by: "Karan Singh",
      resignation_date: "29-05-2020",
      last_working_date: "27-06-2020",
      reason: "Transfer",
      status: "Cancelled",

    },
  ];

  return (
    <div>
      <EditEmployeeDirectoryPage />
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <EmployeeDirectorySetting />
        </div>
        <div className="col-span-3">
          <div className=" bg-white rounded-md mx-5 py-5 px-5">
            <h1 className="text-lg font-medium border-b border-gray-500 py-5">
              OffBoarding
            </h1>
            <div className="bg-white rounded-md my-2">
              <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                  <ImFileText size={20} />
                  Separation Application
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setSeparationApplication(!separationApplication)
                    }
                  >
                    <IoIosArrowDown
                      className={`transition-transform ${
                        separationApplication ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-md py-2">
                {separationApplication && (
                  <div>
                    <Table columns={columns} data={data} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDirectoryOffboarding;
