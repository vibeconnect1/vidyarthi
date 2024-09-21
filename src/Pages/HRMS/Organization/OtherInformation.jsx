import React, { useState } from "react";
import Table from "../../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowUp } from "react-icons/io";
import Header from "../../Form/Header";
import OrganizationSetting from "./OrganizationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";
function OtherInformation() {
  const [otherInformation, setOtherInformation] = useState(true);
  const [employeeOKR, setEmployeeOKR] = useState(true);
  const [mediclaimForm, setMediclaimForm] = useState(true);
  const [BGVRemarks, setBGVRemarks] = useState(true);
  const [demo, setDemo] = useState(true);
  const otherColumns = [
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

  const otherData = [
    {
      id: 1,
      field: "Old_Department",
      requirement: "Optional",
      access: "Invisible",
      sensitive_data: "No",
      action: "",
    },
  ];

  const OKRColumns = [
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

  const OKRData = [
    {
      id: 1,
      field: "Your Quarterly Target",
      requirement: "Optional",
      access: "View Only",
      sensitive_data: "No",
      action: "",
    },
  ];
  const mediclaimColumns = [
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

  const mediclaimData = [
    {
      id: 1,
      field: "Full Name",
      requirement: "Mandatory",
      access: "View Only",
      sensitive_data: "No",
      action: "",
    },
  ];
  const BGVColumns = [
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

  const BGVData = [
    {
      id: 1,
      field: "BGV Remarks By Hr",
      requirement: "Optional",
      access: "Invisible",
      sensitive_data: "No",
      action: "",
    },
  ];

  const DemoColumns = [
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

  const DemoData = [
    {
      id: 1,
      field: "",
      requirement: "",
      access: "",
      sensitive_data: "",
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
              <div className="bg-white rounded-md">
                <div className="flex justify-between bg-white py-3 px-5 border-b border-gray-300">
                  <h2 className="text-base">Other Information</h2>
                  <button
                    onClick={() => setOtherInformation(!otherInformation)}
                  >
                    <IoIosArrowUp
                      className={`transition-transform ${
                        otherInformation ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {otherInformation && (
                  <div>
                    <Table columns={otherColumns} data={otherData} />
                  </div>
                )}
                <div className="flex justify-between bg-white py-3 px-5 border-b border-gray-300">
                  <h2 className="text-base">Employee OKR</h2>
                  <button
                    onClick={() => setEmployeeOKR(!employeeOKR)}
                  >
                    <IoIosArrowUp
                      className={`transition-transform ${
                        employeeOKR ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {employeeOKR && (
                  <div>
                    <Table columns={OKRColumns} data={OKRData} />
                  </div>
                )}
                <div className="flex justify-between bg-white py-3 px-5 border-b border-gray-300">
                  <h2 className="text-base">Mediclaim Form</h2>
                  <button
                    onClick={() => setMediclaimForm(!mediclaimForm)}
                  >
                    <IoIosArrowUp
                      className={`transition-transform ${
                        mediclaimForm ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {mediclaimForm && (
                  <div>
                    <Table columns={mediclaimColumns} data={mediclaimData} />
                  </div>
                )}
                <div className="flex justify-between bg-white py-3 px-5 border-b border-gray-300">
                  <h2 className="text-base">BGV Remarks</h2>
                  <button onClick={() => setBGVRemarks(!BGVRemarks)}>
                    <IoIosArrowUp
                      className={`transition-transform ${
                        BGVRemarks ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {BGVRemarks && (
                  <div>
                    <Table columns={BGVColumns} data={BGVData} />
                  </div>
                )}
                <div className="flex justify-between bg-white py-3 px-5 border-b border-gray-300">
                  <h2 className="text-base">Demo</h2>
                  <button onClick={() => setDemo(!demo)}>
                    <IoIosArrowUp
                      className={`transition-transform ${
                        demo ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {demo && (
                  <div>
                    <Table columns={DemoColumns} data={DemoData} />
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

export default OtherInformation;
