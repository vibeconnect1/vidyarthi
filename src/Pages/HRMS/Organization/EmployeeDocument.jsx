import React, { useState } from "react";
import Table from "../../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowUp } from "react-icons/io";
import Header from "../../Form/Header";
import OrganizationSetting from "./OrganizationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";
function EmployeeDocument() {
  const documentColumns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Applies To",
      selector: (row) => row.applies,
      sortable: true,
    },
    {
      name: "Employee Permissions",
      selector: (row) => row.employee_permissions,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];

  const documentData = [
    {
      id: 1,
      name: "Academic certificates(Please upload your highest qualificat...)",
      applies: "All Employees	",
      employee_permissions: "View Only",
      action: "",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex ml-24">
        <div className="flex flex-col overflow-hidden w-full">
          <div className="my-6">
            <h2 className="text-2xl font-medium text-gray-800 flex items-center gap-2">
              <Link to={``}>
                <IoIosArrowBack />
              </Link>
              Organisation Settings
            </h2>
            <p className="text-base font-medium text-gray-800 mx-8">
              Company details and settings can be performed under this section.
            </p>
          </div>
          <div className="flex gap-1 md:flex-row flex-col">
            <div>
              <OrganizationSetting />
              <div className="bg-white p-6 rounded-lg border border-gray-200 w-96 my-3">
                <h2 className="text-xl font-semibold mb-4">VibeCopilot</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Location :</span>
                    <span>Mumbai, Maharashtra</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">No. Of Employees::</span>
                    <span>20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Authorised Signatory::</span>
                    <span>ABC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">No. of Admins::</span>
                    <span>3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">No. Of Payrolls Run::</span>
                    <span>12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">
                      Part Of Vibe Connect Since::
                    </span>
                    <span>23/20/2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Holiday Table Section */}
            <div className="w-full my-12">
              <div className="flex justify-between my-2">
                <h2 className="text-xl font-semibold text-gray-600 mx-3">
                  Other Information
                </h2>
              </div>
              <div className="bg-white rounded-md py-3 px-5">
                <h2 className="text-lg font-medium border-b border-gray-300 my-2 pb-2">Employee Document</h2>
                <Table columns={documentColumns} data={documentData} />
              </div>
            </div>
            <div className="my-5">
              <HRMSHelpCenter help={"personal"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDocument;
