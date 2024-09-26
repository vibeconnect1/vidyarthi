import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmployeeDirectorySetting from "./EmployeeDirectorySetting";
import { PiPlusCircle } from "react-icons/pi";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import Table from "../../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import EditEmployeeDirectoryPage from "./EditEmployeeDirectoryPage";
import { IoMdClose } from "react-icons/io";
import { MdClose } from "react-icons/md";
function SalaryDirectory() {
  const [detailModal, setDetailModal] = useState(false);
  const [isTaxSettingsVisible, setTaxSettingsVisible] = useState(false);
  const [fixedAllowances, setFixedAllowances] = useState(false);
  const [statutoryContributions, setStatutoryContributions] = useState(false);
  const [statutoryDeductions, setStatutoryDeductions] = useState(false);
  const [fixedDeduction, setFixedDeduction] = useState(false);
  const columns = [
    {
      name: "Sr. No",
      selector: (row) => row.sr_no,
      sortable: true,
    },
    {
      name: "CTC Effective From",
      selector: (row) => row.ctc_effective_from,
      sortable: true,
    },
    {
      name: "CTC Effective To",
      selector: (row) => row.ctc_effective_to,
      sortable: true,
    },
    {
      name: "Monthly Gross (₹)",
      selector: (row) => row.monthly_gross,
      sortable: true,
    },
    {
      name: "Monthly CTC (₹)",
      selector: (row) => row.monthly_ctc,
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
      sr_no: "1",
      ctc_effective_from: "05-03-2005",
      ctc_effective_to: "31-10-2016",
      monthly_gross: "10,850.0",
      monthly_ctc: "10,850.0",
    },
  ];
  return (
    <div className=" w-full">
      <EditEmployeeDirectoryPage />
      <div className="flex flex-col w-full overflow-hidden">
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <EmployeeDirectorySetting />
          </div>
          <div className="col-span-3">
            <div className=" bg-white rounded-md mx-5 py-5 px-5">
              <h1 className="text-lg font-medium border-b border-gray-500 py-5">
                Salary
              </h1>
              <div className="bg-white rounded-md">
                <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                  <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                    <HiClipboardDocumentCheck size={20} />
                    Salary Information
                  </h2>
                  <div>
                    <Link
                      to={`/hrms/employee-directory/salary/add-new-ctc`}
                      className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-3"
                    >
                      <PiPlusCircle size={20} /> Add New CTC
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <Table columns={columns} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {detailModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 h-4/5 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setDetailModal(!detailModal)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                CTC Structures Details
              </h2>
            </div>
            <div className="px-5">
              <div className="my-5 space-y-2">
                <div className="flex justify-between">
                  <p className="text-gray-600">Select Payroll Effective Date</p>
                  <p className="text-gray-500">05-03-2005</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Select Actual Effective Date</p>
                  <p className="text-gray-500">05-03-2005</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">
                    Auto Salary Revision Arrears Required?
                  </p>
                  <p className="text-gray-500">No</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Selected CTC Template</p>
                  <p className="text-gray-500">Enter Manually</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Entered CTC Amount</p>
                  <p className="text-gray-500">₹</p>
                </div>
              </div>
              <div className="border-b border-t border-gray-500 py-2">
                <p
                  className="cursor-pointer text-gray-600 font-medium"
                  onClick={() => setTaxSettingsVisible(!isTaxSettingsVisible)}
                >
                  {isTaxSettingsVisible ? "-" : "+"} Tax and Statutory Settings
                </p>
                {isTaxSettingsVisible && (
                  <div className="border-t border-gray-500">
                    <div className="flex justify-between my-1">
                      <p className="text-gray-600 my-1">PF Deduction</p>
                      <p className="text-gray-500">No</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="text-gray-600">
                        Provident Pension Deduction
                      </p>
                      <p className="text-gray-500">No</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="text-gray-600">
                        Employee's Provident Fund contribution capped at the PF
                        Ceiling?
                      </p>
                      <p className="text-gray-500">No</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="text-gray-600">
                        Employer's Provident Fund contribution capped at the PF
                        Ceiling?
                      </p>
                      <p className="text-gray-500">No</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="text-gray-600">PF Template</p>
                      <p className="text-gray-500"></p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="text-gray-600">PF Wage</p>
                      <p className="text-gray-500">0</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="text-gray-600">ESIC Deduction</p>
                      <p className="text-gray-500">No</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="text-gray-600">PT Deduction</p>
                      <p className="text-gray-500">No</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="text-gray-600">LWF Deduction</p>
                      <p className="text-gray-500">No</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="text-gray-600">Income Tax Deduction</p>
                      <p className="text-gray-500">No</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="text-gray-600">Nps Deduction</p>
                      <p className="text-gray-500">No</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="text-gray-600">Gratuity</p>
                      <p className="text-gray-500">No</p>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <table className="w-full">
                  <thead className="">
                    <tr>
                      <th className="py-2 text-left font-medium">
                        CTC Components
                      </th>
                      <th className="py-2 text-right font-medium">Monthly</th>
                      <th className=" py-2 text-right font-medium">Yearly</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-b border-gray-500">
                      <td className="py-2 font-medium text-gray-600">
                        <button
                          className="cursor-pointer"
                          onClick={() => setFixedAllowances(!fixedAllowances)}
                        >
                          <span className="mx-1">
                            {fixedAllowances ? "-" : "+"}
                          </span>
                          <span>Fixed Allowances Details</span>
                        </button>
                      </td>
                      <td className="py-2 text-right font-medium text-gray-600">
                        ₹ 10850
                      </td>
                      <td className="py-2 text-right font-medium text-gray-600">
                        ₹ 130200
                      </td>
                    </tr>
                    {fixedAllowances && (
                      <>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            Basic
                          </td>
                          <td className="py-1 text-right  text-gray-500">
                            8000
                          </td>
                          <td className="py-1 text-right text-gray-500">
                            96000
                          </td>
                        </tr>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            DA
                          </td>
                          <td className="py-1 text-right text-gray-500">800</td>
                          <td className="py-1 text-right text-gray-500">
                            9600
                          </td>
                        </tr>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            Conveyance Allowance
                          </td>
                          <td className="py-1 text-right text-gray-500">800</td>
                          <td className="py-1 text-right text-gray-500">
                            9600
                          </td>
                        </tr>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            Medical
                          </td>
                          <td className="py-1 text-right text-gray-500">
                            1250
                          </td>
                          <td className="py-1 text-right text-gray-500">
                            15000
                          </td>
                        </tr>
                      </>
                    )}
                    <tr className="border-t border-b border-gray-500">
                      <td className="py-2 font-medium text-gray-600">
                        <button
                          className="cursor-pointer"
                          onClick={() =>
                            setStatutoryContributions(!statutoryContributions)
                          }
                        >
                          <span className="mx-1">
                            {statutoryContributions ? "-" : "+"}
                          </span>
                          <span>
                            Total Employer Statutory Contributions Details
                          </span>
                        </button>
                      </td>
                      <td className="py-2 text-right font-medium text-gray-600">
                        ₹ 0.0
                      </td>
                      <td className="py-2 text-right font-medium text-gray-600">
                        ₹ 0.0
                      </td>
                    </tr>
                    {statutoryContributions && (
                      <>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            PF Employer Contribution
                          </td>
                          <td className="py-1 text-right  text-gray-500">0</td>
                          <td className="py-1 text-right text-gray-500">0</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            ESIC Employer Contribution
                          </td>
                          <td className="py-1 text-right text-gray-500">0</td>
                          <td className="py-1 text-right text-gray-500">0</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            LWF Employer Contribution
                          </td>
                          <td className="py-1 text-right text-gray-500">0</td>
                          <td className="py-1 text-right text-gray-500">0</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            Gratuity
                          </td>
                          <td className="py-1 text-right text-gray-500">0</td>
                          <td className="py-1 text-right text-gray-500">0</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            Nps
                          </td>
                          <td className="py-1 text-right text-gray-500">0</td>
                          <td className="py-1 text-right text-gray-500">0</td>
                        </tr>
                      </>
                    )}
                    <tr className="border-t border-b border-gray-500">
                      <td className="py-2 font-medium text-gray-600">
                        <button
                          className="cursor-pointer"
                          onClick={() =>
                            setStatutoryDeductions(!statutoryDeductions)
                          }
                        >
                          <span className="mx-1">
                            {statutoryDeductions ? "-" : "+"}
                          </span>
                          <span>
                            Total Employee Statutory Deductions Details
                          </span>
                        </button>
                      </td>
                      <td className="py-2 text-right font-medium text-gray-600">
                        ₹ 0.0
                      </td>
                      <td className="py-2 text-right font-medium text-gray-600">
                        ₹ 0.0
                      </td>
                    </tr>
                    {statutoryDeductions && (
                      <>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            PF Employee Deduction
                          </td>
                          <td className="py-1 text-right  text-gray-500">0</td>
                          <td className="py-1 text-right text-gray-500">0</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            ESIC Employee Deduction
                          </td>
                          <td className="py-1 text-right text-gray-500">0</td>
                          <td className="py-1 text-right text-gray-500">0</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            LWF Employee Deduction
                          </td>
                          <td className="py-1 text-right text-gray-500">0</td>
                          <td className="py-1 text-right text-gray-500">0</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            PT Deduction
                          </td>
                          <td className="py-1 text-right text-gray-500">0</td>
                          <td className="py-1 text-right text-gray-500">0</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            Nps Employee Deduction
                          </td>
                          <td className="py-1 text-right text-gray-500">0</td>
                          <td className="py-1 text-right text-gray-500">0</td>
                        </tr>
                      </>
                    )}
                    <tr className="border-t border-b border-gray-500">
                      <td className="py-2 font-medium text-gray-600">
                        <button
                          className="cursor-pointer"
                          onClick={() => setFixedDeduction(!fixedDeduction)}
                        >
                          <span className="mx-1">
                            {fixedDeduction ? "-" : "+"}
                          </span>
                          <span>Fixed Deduction Details</span>
                        </button>
                      </td>
                      <td className="py-2 text-right font-medium text-gray-600">
                        ₹ 0.0
                      </td>
                      <td className="py-2 text-right font-medium text-gray-600">
                        ₹ 0.0
                      </td>
                    </tr>
                    {fixedDeduction && (
                      <>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            Advance
                          </td>
                          <td className="py-1 text-right  text-gray-500">0</td>
                          <td className="py-1 text-right text-gray-500">0</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            Test
                          </td>
                          <td className="py-1 text-right text-gray-500">0</td>
                          <td className="py-1 text-right text-gray-500">0</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            PF
                          </td>
                          <td className="py-1 text-right text-gray-500">0</td>
                          <td className="py-1 text-right text-gray-500">0</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-left px-4 text-gray-500">
                            Loan EMI
                          </td>
                          <td className="py-1 text-right text-gray-500">0</td>
                          <td className="py-1 text-right text-gray-500">0</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="my-5 bg-[#294259] px-5 py-5">
                <table className="w-full">
                  <thead className="text-white">
                    <tr>
                      <th className="py-2 text-left font-medium">
                        Consolidated Output
                      </th>
                      <th className="py-2 text-right font-medium">Monthly</th>
                      <th className=" py-2 text-right font-medium">Yearly</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-b border-gray-500">
                      <td className="py-2 text-left text-white">
                        Total Take Home (excluding Variable)
                      </td>
                      <td className="py-2 text-right text-white">₹ 10,850.0</td>
                      <td className="py-2 text-right text-white">
                        ₹ 1,30,200.0
                      </td>
                    </tr>
                    <tr className="border-t border-b border-gray-500">
                      <td className="py-2  text-left text-white">
                        Total CTC (excluding Variable & Other Benefits)
                      </td>
                      <td className="py-2 text-right text-white">₹ 10,850.0</td>
                      <td className="py-2 text-right text-white">
                        ₹ 1,30,200.0
                      </td>
                    </tr>
                    <tr className="border-t border-b border-gray-500">
                      <td className="py-2  text-left text-white">
                        Total CTC (including Variable)
                      </td>
                      <td className="py-2 text-right text-white"></td>
                      <td className="py-2 text-right text-white">
                        ₹ 1,30,200.0
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-center mb-5">
              <button
                onClick={() => setDetailModal(!detailModal)}
                className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 flex items-center gap-2"
              >
                <MdClose /> Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SalaryDirectory;
