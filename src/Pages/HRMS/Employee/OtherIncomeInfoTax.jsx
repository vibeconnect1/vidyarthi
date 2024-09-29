import React, { useState } from "react";
import EmployeeDirectoryTaxSetting from "./EmployeeDirectoryTaxSetting";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import { BiEdit } from "react-icons/bi";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function OtherIncomeInfoTax() {
  const [incomeType, setIncomeType] = useState(false);
  const columns = [
    {
      name: "Other Income Type",
      selector: (row) => row.other_income_type,
      sortable: true,
    },
    {
      name: "Declared Amount (In ₹)",
      selector: (row) => row.declared_amount,
      sortable: true,
    },
    {
      name: "Verified Amount (In ₹)",
      selector: (row) => row.verified_amount,
      sortable: true,
    },
    {
      name: "Disallowed Amount (In ₹)",
      selector: (row) => row.verified_amount,
      sortable: true,
    },
    {
      name: "Remarks",
      selector: (row) => row.remarks,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      other_income_type: "Other Income",
      declared_amount: "0.0",
      verified_amount: "0.0",
      disallowed_amount: "0",
      remarks: "0.0",
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
                  Other Income Info
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
              <div className="w-[68rem] my-5">
                <div className="flex justify-between mr-5 my-3">
                  <h2 className="text-xl font-medium">
                    Employee's Previous Income Details
                  </h2>
                  <div>
                    {!incomeType ? (
                      <button
                        onClick={() => setIncomeType(!incomeType)}
                        className="px-4 py-1 border border-gray-500 text-black rounded-md flex items-center gap-3"
                      >
                        <BiEdit size={15} /> Edit
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          className="px-4 py-1 border border-gray-500 text-black rounded-md flex items-center gap-2"
                          onClick={() => setIncomeType(!incomeType)}
                        >
                          <AiOutlineClose size={20} />
                          Cancel
                        </button>
                        <button className="px-4 py-1 bg-green-500 text-white rounded-md flex items-center gap-2">
                          <AiOutlineCheck size={20} />
                          Save
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <table className="min-w-full table-auto border border-gray-200 shadow-sm bg-white rounded-md">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold">
                        Income Type
                      </th>
                      <th className="px-4 py-2 text-left font-semibold">
                        Declared (In ₹)
                      </th>
                      <th className="px-4 py-2 text-left font-semibold">
                        Verified (In ₹)
                      </th>
                      <th className="px-4 py-2 text-left font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-medium text-gray-500">
                        How much Taxable Gross Salary you were paid in your
                        previous job?
                      </td>
                      {!incomeType ? (
                        <td className="px-4 py-2 font-medium text-gray-500"></td>
                      ) : (
                        <td className="px-4 py-2 text-gray-800">
                          <input
                            type="number"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="₹ 0"
                          />
                        </td>
                      )}
                      {!incomeType ? (
                        <td className="px-4 py-2 font-medium text-gray-500"></td>
                      ) : (
                        <td className="px-4 py-2 text-gray-800">
                          <input
                            type="number"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="₹ 0"
                          />
                        </td>
                      )}
                    </tr>
                    <tr className="border-t border-b">
                      <td className="px-4 py-2 font-medium text-gray-500">
                        How much Income Tax was deducted?
                      </td>
                      {!incomeType ? (
                        <td className="px-4 py-2 font-medium text-gray-500"></td>
                      ) : (
                        <td className="px-4 py-2 text-gray-800">
                          <input
                            type="number"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="₹ 0"
                          />
                        </td>
                      )}
                      {!incomeType ? (
                        <td className="px-4 py-2 font-medium text-gray-500"></td>
                      ) : (
                        <td className="px-4 py-2 text-gray-800">
                          <input
                            type="number"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="₹ 0"
                          />
                        </td>
                      )}
                    </tr>
                    <tr className="border-t border-b">
                      <td className="px-4 py-2 font-medium text-gray-500">
                        How much Provident Fund was deducted?
                      </td>
                      {!incomeType ? (
                        <td className="px-4 py-2 font-medium text-gray-500"></td>
                      ) : (
                        <td className="px-4 py-2 text-gray-800">
                          <input
                            type="number"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="₹ 0"
                          />
                        </td>
                      )}
                      {!incomeType ? (
                        <td className="px-4 py-2 font-medium text-gray-500"></td>
                      ) : (
                        <td className="px-4 py-2 text-gray-800">
                          <input
                            type="number"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="₹ 0"
                          />
                        </td>
                      )}
                    </tr>
                    <tr className="border-t border-b">
                      <td className="px-4 py-2 font-medium text-gray-500">
                        How much Employer Provident Fund was deducted?
                      </td>
                      {!incomeType ? (
                        <td className="px-4 py-2 font-medium text-gray-500"></td>
                      ) : (
                        <td className="px-4 py-2 text-gray-800">
                          <input
                            type="number"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="₹ 0"
                          />
                        </td>
                      )}
                      {!incomeType ? (
                        <td className="px-4 py-2 font-medium text-gray-500"></td>
                      ) : (
                        <td className="px-4 py-2 text-gray-800">
                          <input
                            type="number"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="₹ 0"
                          />
                        </td>
                      )}
                    </tr>
                    <tr className="border-t border-b">
                      <td className="px-4 py-2 font-medium text-gray-500">
                        How much Professional Tax was deducted?
                      </td>
                      {!incomeType ? (
                        <td className="px-4 py-2 font-medium text-gray-500"></td>
                      ) : (
                        <td className="px-4 py-2 text-gray-800">
                          <input
                            type="number"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="₹ 0"
                          />
                        </td>
                      )}
                      {!incomeType ? (
                        <td className="px-4 py-2 font-medium text-gray-500"></td>
                      ) : (
                        <td className="px-4 py-2 text-gray-800">
                          <input
                            type="number"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="₹ 0"
                          />
                        </td>
                      )}
                    </tr>
                    <tr className="border-t border-b">
                      <td className="px-4 py-2 font-medium text-gray-500">
                        How much Nps Fund was deducted?
                      </td>
                      {!incomeType ? (
                        <td className="px-4 py-2 font-medium text-gray-500"></td>
                      ) : (
                        <td className="px-4 py-2 text-gray-800">
                          <input
                            type="number"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="₹ 0"
                          />
                        </td>
                      )}
                      {!incomeType ? (
                        <td className="px-4 py-2 font-medium text-gray-500"></td>
                      ) : (
                        <td className="px-4 py-2 text-gray-800">
                          <input
                            type="number"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="₹ 0"
                          />
                        </td>
                      )}
                    </tr>
                    <tr className="border-t border-b">
                      <td className="px-4 py-2 font-medium text-gray-500">
                        How much Employer Nps Fund was deducted?
                      </td>
                      {!incomeType ? (
                        <td className="px-4 py-2 font-medium text-gray-500"></td>
                      ) : (
                        <td className="px-4 py-2 text-gray-800">
                          <input
                            type="number"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="₹ 0"
                          />
                        </td>
                      )}
                      {!incomeType ? (
                        <td className="px-4 py-2 font-medium text-gray-500"></td>
                      ) : (
                        <td className="px-4 py-2 text-gray-800">
                          <input
                            type="number"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="₹ 0"
                          />
                        </td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherIncomeInfoTax;
