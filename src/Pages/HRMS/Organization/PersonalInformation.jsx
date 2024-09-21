import React, { useState } from "react";
import Table from "../../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowUp } from "react-icons/io";
import Header from "../../Form/Header";
import OrganizationSetting from "./OrganizationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";;
function PersonalInformation() {
  const [basicInformation, setBasicInformation] = useState(true);
  const [familyInformation, setFamilyInformation] = useState(true);
  const [addressInformation, setAddressInformation] = useState(true);
  const [bankInformation, setBankInformation] = useState(true);
  const basicColumns = [
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

  const basicData = [
    {
      id: 1,
      field: "Aadhar No",
      requirement: "Optional",
      access: "Manage",
      sensitive_data: "No",
      action: "",
    },
  ];

  const familyColumns = [
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

  const familyData = [
    {
      id: 1,
      field: "Father's Name",
      requirement: "Optional",
      access: "Manage",
      sensitive_data: "No",
      action: "",
    },
  ];
  const addressColumns = [
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

  const addressData = [
    {
      id: 1,
      field: "Address Line 1",
      requirement: "Optional",
      access: "Manage",
      sensitive_data: "No",
      action: "",
    },
  ];
  const bankColumns = [
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

  const bankData = [
    {
      id: 1,
      field: "Bank Account Number",
      requirement: "Optional",
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
                  Personal Details
                </h2>
              </div>
              <div className="bg-white rounded-md">
                <div className="flex justify-between bg-white py-3 px-5 border-b border-gray-300">
                  <h2 className="text-base">Basic Information</h2>
                  <button
                    onClick={() => setBasicInformation(!basicInformation)}
                  >
                    <IoIosArrowUp
                      className={`transition-transform ${
                        basicInformation ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {basicInformation && (
                  <div>
                    <Table columns={basicColumns} data={ basicData} />
                  </div>
                )}
                <div className="flex justify-between bg-white py-3 px-5 border-b border-gray-300">
                  <h2 className="text-base">Family Information</h2>
                  <button
                    onClick={() => setFamilyInformation(!familyInformation)}
                  >
                    <IoIosArrowUp
                      className={`transition-transform ${
                        familyInformation ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {familyInformation && (
                  <div>
                    <Table columns={familyColumns} data={familyData} />
                  </div>
                )}
                <div className="flex justify-between bg-white py-3 px-5 border-b border-gray-300">
                  <h2 className="text-base">Address Information</h2>
                  <button
                    onClick={() => setAddressInformation(!addressInformation)}
                  >
                    <IoIosArrowUp
                      className={`transition-transform ${
                        addressInformation ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {addressInformation && (
                  <div>
                    <Table columns={addressColumns} data={addressData} />
                  </div>
                )}
                <div className="flex justify-between bg-white py-3 px-5 border-b border-gray-300">
                  <h2 className="text-base">Bank Information</h2>
                  <button onClick={() => setBankInformation(!bankInformation)}>
                    <IoIosArrowUp
                      className={`transition-transform ${
                        bankInformation ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {bankInformation && (
                  <div>
                    <Table columns={bankColumns} data={bankData} />
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

export default PersonalInformation;
