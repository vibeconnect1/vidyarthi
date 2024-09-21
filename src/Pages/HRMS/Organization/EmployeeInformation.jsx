import React, { useState } from "react";
import Table from "../../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowUp } from "react-icons/io";
import Header from "../../Form/Header";
import OrganizationSetting from "./OrganizationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";
function EmployeeInformation() {
  const [generalInformation, setGeneralInformation] = useState(true);
  const [jobInformation, setJobInformation] = useState(true);
  const [assets, setAssets] = useState(true);
  const [companyAsssets, setCompanyAsssets] = useState(true);
  const [joiningForm, setJoiningForm] = useState(true);
  const generalColumns = [
    {
      name: "Field",
      selector: (row) => row.field,
      sortable: true,
    },
    {
      name: "Requirement",
      selector: (row) => row.requirement,
      sortable: true,
    },
    {
      name: "Access",
      selector: (row) => row.access,
      sortable: true,
    },
    {
      name: "Sensitive Data",
      selector: (row) => row.sensitive_data,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];

  const generalData = [
    {
      id: 1,
      field: "Employee Code",
      requirement: "Mandatory",
      access: "-",
      sensitive_data: "-",
      action: "-",
    },
  ];

  const jobColumns = [
    {
      name: "Field",
      selector: (row) => row.field,
      sortable: true,
    },
    {
      name: "Requirement",
      selector: (row) => row.requirement,
      sortable: true,
    },
    {
      name: "Access",
      selector: (row) => row.access,
      sortable: true,
    },
    {
      name: "Sensitive Data",
      selector: (row) => row.sensitive_data,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];

  const jobData = [
    {
      id: 1,
      field: "Project",
      requirement: "Optional",
      access: "View Only",
      sensitive_data: "No",
      action: "",
    },
  ];
  const assetsColumns = [
    {
      name: "Field",
      selector: (row) => row.field,
      sortable: true,
    },
    {
      name: "Requirement",
      selector: (row) => row.requirement,
      sortable: true,
    },
    {
      name: "Access",
      selector: (row) => row.access,
      sortable: true,
    },
    {
      name: "Sensitive Data",
      selector: (row) => row.sensitive_data,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];

  const assetsData = [
    {
      id: 1,
      field: "Which Brand Laptop",
      requirement: "Optional",
      access: "Manage",
      sensitive_data: "No",
      action: "",
    },
  ];
  const companyAsssetsColumns = [
    {
      name: "Field",
      selector: (row) => row.field,
      sortable: true,
    },
    {
      name: "Requirement",
      selector: (row) => row.requirement,
      sortable: true,
    },
    {
      name: "Access",
      selector: (row) => row.access,
      sortable: true,
    },
    {
      name: "Sensitive Data",
      selector: (row) => row.sensitive_data,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];

  const companyAsssetsData = [
    {
      id: 1,
      field: "Bank Account Number And Mobile",
      requirement: "Optional",
      access: "Manage",
      sensitive_data: "No",
      action: "",
    },
  ];

  const joiningColumns = [
    {
      name: "Field",
      selector: (row) => row.field,
      sortable: true,
    },
    {
      name: "Requirement",
      selector: (row) => row.requirement,
      sortable: true,
    },
    {
      name: "Access",
      selector: (row) => row.access,
      sortable: true,
    },
    {
      name: "Sensitive Data",
      selector: (row) => row.sensitive_data,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];

  const joiningData = [
    {
      id: 1,
      field: "Pan Card Number",
      requirement: "Mandatory",
      access: "Manage",
      sensitive_data: "No",
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
                  Employee Details
                </h2>
              </div>
              <div className="bg-white rounded-md">
                <div className="flex justify-between bg-white py-3 px-5 border-b border-gray-300">
                  <h2 className="text-base">General Employment Information</h2>
                  <button
                    onClick={() => setGeneralInformation(!generalInformation)}
                  >
                    <IoIosArrowUp
                      className={`transition-transform ${
                        generalInformation ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {generalInformation && (
                  <div>
                    <Table columns={generalColumns} data={generalData} />
                  </div>
                )}
                <div className="flex justify-between bg-white py-3 px-5 border-b border-gray-300">
                  <h2 className="text-base">Job Information</h2>
                  <button
                    onClick={() => setJobInformation(!jobInformation)}
                  >
                    <IoIosArrowUp
                      className={`transition-transform ${
                        jobInformation ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {jobInformation && (
                  <div>
                    <Table columns={jobColumns} data={jobData} />
                  </div>
                )}
                <div className="flex justify-between bg-white py-3 px-5 border-b border-gray-300">
                  <h2 className="text-base">Assets</h2>
                  <button
                    onClick={() => setAssets(!assets)}
                  >
                    <IoIosArrowUp
                      className={`transition-transform ${
                        assets ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {assets && (
                  <div>
                    <Table columns={assetsColumns} data={assetsData} />
                  </div>
                )}
                <div className="flex justify-between bg-white py-3 px-5 border-b border-gray-300">
                  <h2 className="text-base">Company Asssets</h2>
                  <button onClick={() => setCompanyAsssets(!companyAsssets)}>
                    <IoIosArrowUp
                      className={`transition-transform ${
                        companyAsssets ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {companyAsssets && (
                  <div>
                    <Table columns={companyAsssetsColumns} data={companyAsssetsData} />
                  </div>
                )}
                <div className="flex justify-between bg-white py-3 px-5 border-b border-gray-300">
                  <h2 className="text-base">Joining Form</h2>
                  <button onClick={() => setJoiningForm(!joiningForm)}>
                    <IoIosArrowUp
                      className={`transition-transform ${
                        joiningForm ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {joiningForm && (
                  <div>
                    <Table columns={joiningColumns} data={joiningData} />
                  </div>
                )}
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

export default EmployeeInformation;
