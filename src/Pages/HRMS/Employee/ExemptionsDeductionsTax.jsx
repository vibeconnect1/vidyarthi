import React, { useState } from "react";
import EmployeeDirectoryTaxSetting from "./EmployeeDirectoryTaxSetting";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";

function ExemptionsDeductionsTax() {
  const [detailModal, setDetailModal] = useState(false);
  const columns = [
    {
      name: "Section",
      selector: (row) => row.section,
      sortable: true,
    },
    {
      name: "Exemption For",
      selector: (row) => row.exemption_for,
      sortable: true,
    },
    {
      name: "Additional Information",
      selector: (row) => row.additional_information,
      sortable: true,
    },
    {
      name: "Declared Amount (In ₹)",
      selector: (row) => row.declared_amount,
      sortable: true,
    },
    {
      name: "Promisory Amount (In ₹)",
      selector: (row) => row.promisory_amount,
      sortable: true,
    },
    {
      name: "Verified Amount (In ₹)",
      selector: (row) => row.verified_amount,
      sortable: true,
    },
    {
      name: "Disallowed Amount (₹)",
      selector: (row) => row.disallowed_amount,
      sortable: true,
    },
    {
      name: "Remarks",
      selector: (row) => row.remarks,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button onClick={() => setDetailModal(!detailModal)}>
            <BsEye size={15} />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      section:"10",
      exemption_for: "LTA - Rail Travel",
      additional_information: "",
      declared_amount: "25,00.0",
      promisory_amount: "0.0",
      verified_amount: "25,000.0",
      disallowed_amount: "0.0",
      remarks: "",
    },
  ];

  const detailsColumns = [
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Transaction Details",
      selector: (row) => row.transaction_details,
      sortable: true,
    },
    {
      name: "User",
      selector: (row) => row.user,
      sortable: true,
    },
  ];
  const detailsData = [
    {
      id: 1,
      date: "",
      transaction_details: "",
      user: "",
    },
  ];
  return (
    <div>
      {/* <Header /> */}
      <div className="flex">
        <div className="flex flex-col overflow-hidden w-full">
          <div className="my-6 space-y-4 ml-24">
            <h2 className="text-2xl font-medium text-gray-800 flex items-center gap-2">
              <Link>
                <IoIosArrowBack />
              </Link>
              Investment Summary 2015-2016
            </h2>
            <Link className="bg-white text-black inline-flex items-center px-5 py-1 rounded-md gap-1">
              <IoIosArrowBack /> Back to Profile
            </Link>
          </div>
          <div className="flex gap-5 w-full">
            <div className="">
              <EmployeeDirectoryTaxSetting />
            </div>
            <div className="w-full">
              <div className="flex justify-between my-2">
                <h2 className="text-xl font-medium text-gray-800">
                  Other Exemptions/Deductions
                </h2>
                <div className="flex gap-2 mx-5">
                  <div className="bg-white rounded-md px-5 py-1">
                    <h2 className="font-medium text-gray-800">
                      Ankit Nima | 135162
                    </h2>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Search By name"
                      className="border-2 py-1 px-5 md:w-48 border-gray-300 rounded-lg placeholder:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[68rem]">
                <Table columns={columns} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {detailModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setDetailModal(!detailModal)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Transaction History
              </h2>
            </div>
            <div>
              <Table columns={detailsColumns} data={detailsData} />
            </div>
            <div className="flex justify-center mb-5">
              <button
                onClick={() => setDetailModal(!detailModal)}
                className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 flex items-center gap-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExemptionsDeductionsTax;
