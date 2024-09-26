import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiPlusCircle } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Table from "../../../ConfigurationFile/Table";
import { Link } from "react-router-dom";

function CTCComponents() {
  const [fixed, setFixed] = useState(false);
  const [benefits, setBenefits] = useState(false);
  const [flexiBenefit, setFlexiBenefit] = useState(false);
  const [statutoryContributions, setStatutoryContributions] = useState(false);
  const [statutoryDeductions, setStatutoryDeductions] = useState(false);
  const [fixedDeductions, setFixedDeductions] = useState(false);
  const [variableAllowances, setVariableAllowances] = useState(false);
  const [variableDeductions, setVariableDeductions] = useState(false);
  const [inputFields, setInputFields] = useState([]);

  const handleAddField = () => {
    setInputFields([...inputFields, length]);
  };

  const handleRemoveField = (index) => {
    const newFields = inputFields.filter((_, i) => i !== index);
    setInputFields(newFields);
  };

  const [fields, setFields] = useState([]);

  const handleAddField1 = () => {
    setFields([...fields, length]);
  };

  const handleRemoveField1 = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const columns = [
    {
      name: "Consolidated Output",
      selector: (row) => row.consolidated_output,
      sortable: true,
    },
    {
      name: "Monthly",
      selector: (row) => row.monthly,
      sortable: true,
    },
    {
      name: "Yearly",
      selector: (row) => row.yearly,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      consolidated_output: "Total Take Home (excluding Variable)",
      monthly: "₹",
      yearly: "₹",
    },
    {
      id: 2,
      consolidated_output: "Total CTC (excluding Variable & Other Benefits",
      monthly: "₹",
      yearly: "₹",
    },
    {
      id: 3,
      consolidated_output: "Total CTC (including Variable)",
      monthly: "₹",
      yearly: "₹",
    },
  ];
  return (
    <div className="my-5">
      <table className="min-w-full table-auto border border-gray-200 shadow-sm bg-white rounded-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">Components</th>
            <th className="px-4 py-2 text-left font-semibold">Monthly</th>
            <th className="px-4 py-2 text-left font-semibold">Yearly</th>
            <th className="px-4 py-2 text-left font-semibold"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-2 font-medium">Fixed Allowance</td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">
              <button onClick={() => setFixed(!fixed)}>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ease-in-out ${
                    fixed ? "rotate-180" : ""
                  }`}
                />
              </button>
            </td>
          </tr>
          {/* Dropdown content with height and opacity transition */}
          {fixed && (
            <>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Basic
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for HRA
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Conveyance Allowance
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for HRA
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for LTA
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Medical
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Hostel
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Special
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Education
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Special Allowance
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Other Allowance
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Retainership Fee
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Books & Periodical Allowance
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Mobile & Internet Allowance
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for test allowance
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for allowence
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
            </>
          )}
          <tr className="border-t">
            <td className="px-4 py-2 font-medium">Other Benefits</td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">
              <button onClick={() => setBenefits(!benefits)}>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ease-in-out ${
                    benefits ? "rotate-180" : ""
                  }`}
                />
              </button>
            </td>
          </tr>
          {benefits && (
            <>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for other benefit dummy
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
                <td></td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for ac
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
                <td></td>
              </tr>
            </>
          )}
          <tr className="border-t border-b">
            <td className="px-4 py-2 font-medium">Flexi Benefit</td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">
              <button onClick={() => setFlexiBenefit(!flexiBenefit)}>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ease-in-out ${
                    flexiBenefit ? "rotate-180" : ""
                  }`}
                />
              </button>
            </td>
          </tr>
          {flexiBenefit && (
            <>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Internet
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for PayTM Food Voucher
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Books & Periodicals
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
            </>
          )}
          <tr className="border-t border-b">
            <td className="px-4 py-2 font-medium">
              Total Employer Statutory Contributions
            </td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">
              <button
                onClick={() =>
                  setStatutoryContributions(!statutoryContributions)
                }
              >
                <IoIosArrowDown
                  className={`transition-transform duration-300 ease-in-out ${
                    statutoryContributions ? "rotate-180" : ""
                  }`}
                />
              </button>
            </td>
          </tr>
          {statutoryContributions && (
            <>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Employer PF Contribution
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Employer ESIC Contribution
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Employer LWF Contribution
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Employer Gratuity Contribution
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Employer NPS Contribution
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
            </>
          )}

          <tr className="border-t border-b">
            <td className="px-4 py-2 font-medium">
              Total Employee Statutory Deductions
            </td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">
              <button
                onClick={() => setStatutoryDeductions(!statutoryDeductions)}
              >
                <IoIosArrowDown
                  className={`transition-transform duration-300 ease-in-out ${
                    statutoryDeductions ? "rotate-180" : ""
                  }`}
                />
              </button>
            </td>
          </tr>
          {statutoryDeductions && (
            <>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Employee PF Deduction
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Employee ESIC Deduction
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Employee LWF Deduction
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Employee PT Deduction
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Employee NPS Deduction
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
            </>
          )}
          <tr className="border-t border-b">
            <td className="px-4 py-2 font-medium">Fixed Deductions</td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">
              <button onClick={() => setFixedDeductions(!fixedDeductions)}>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ease-in-out ${
                    fixedDeductions ? "rotate-180" : ""
                  }`}
                />
              </button>
            </td>
          </tr>
          {fixedDeductions && (
            <>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Advance
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Test
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for PF
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-500">
                  Enter the Amount for Loan EMI
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 pr-2">₹</span>
                    <input
                      type="number"
                      className="border-b border-gray-500 focus:outline-none w-40"
                      placeholder="0"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-500">₹ 0</td>
              </tr>
            </>
          )}
          <tr className="border-t border-b">
            <td className="px-4 py-2 font-medium">Variable Allowances</td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">
              <button
                onClick={() => setVariableAllowances(!variableAllowances)}
              >
                <IoIosArrowDown
                  className={`transition-transform duration-300 ease-in-out ${
                    variableAllowances ? "rotate-180" : ""
                  }`}
                />
              </button>
            </td>
          </tr>
          {variableAllowances && (
            <>
              <tr className="py-5 flex justify-start px-5">
                <td className="w-full">
                  <div>
                    {inputFields.map((index) => (
                      <div key={index} className="flex items-center mb-2">
                        <div className="flex flex-col gap-2 px-2 w-full">
                          <select className="border-b border-gray-500 focus:outline-none w-full">
                            <option value="">Performance Incentives</option>
                            <option value="">Annual Performance Bonus</option>
                            <option value="">Part-timer</option>
                            <option value="">Variable Allowance dummy</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2 px-2 w-full">
                          <select className="border-b border-gray-500 focus:outline-none w-full">
                            <option value="">Select Month</option>
                            <option value="">Jan</option>
                            <option value="">Feb</option>
                            <option value="">Mar</option>
                            <option value="">Apr</option>
                            <option value="">May</option>
                            <option value="">Jun</option>
                            <option value="">Jul</option>
                            <option value="">Aug</option>
                            <option value="">Sep</option>
                            <option value="">Oct</option>
                            <option value="">Nov</option>
                            <option value="">Dec</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2 px-2 w-full">
                          <select className="border-b border-gray-500 focus:outline-none w-full">
                            <option value="">Select Year</option>
                            <option value="">2022</option>
                            <option value="">2023</option>
                            <option value="">2024</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2 px-2 w-full">
                          <input
                            type="text"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="Variable Amount"
                          />
                        </div>
                        <button
                          onClick={() => handleRemoveField(index)}
                          className="bg-red-500 text-white rounded-md px-3 py-1"
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={handleAddField}
                      className="border border-gray-500 rounded-md px-5 py-1 flex items-center mt-4"
                    >
                      <PiPlusCircle size={20} />
                      Add
                    </button>
                  </div>
                </td>
              </tr>
            </>
          )}
          <tr className="border-t border-b">
            <td className="px-4 py-2 font-medium">Variable Deductions</td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">₹ 0</td>
            <td className="px-4 py-2 font-medium">
              <button
                onClick={() => setVariableDeductions(!variableDeductions)}
              >
                <IoIosArrowDown
                  className={`transition-transform duration-300 ease-in-out ${
                    variableDeductions ? "rotate-180" : ""
                  }`}
                />
              </button>
            </td>
          </tr>
          {variableDeductions && (
            <>
              <tr className="py-5 flex justify-start px-5">
                <td className="w-full">
                  <div className="py-5 flex flex-col px-5">
                    {fields.map((index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 mb-4"
                      >
                        <select className="border-b border-gray-500 focus:outline-none w-full">
                          <option value="">Loan</option>
                          <option value="">Telephone Reimbursement</option>
                          <option value="">veriableded</option>
                          <option value="">VD1</option>
                        </select>
                        <select
                          name="month"
                          className="border-b border-gray-500 focus:outline-none w-full"
                        >
                          <option value="">Select Month</option>
                          <option value="">Jan</option>
                          <option value="">Feb</option>
                          <option value="">Mar</option>
                          <option value="">Apr</option>
                          <option value="">May</option>
                          <option value="">Jun</option>
                          <option value="">Jul</option>
                          <option value="">Aug</option>
                          <option value="">Sep</option>
                          <option value="">Oct</option>
                          <option value="">Nov</option>
                          <option value="">Dec</option>
                        </select>
                        <select
                          name="year"
                          className="border-b border-gray-500 focus:outline-none w-full"
                        >
                          <option value="">Select Year</option>
                          <option value="">2022</option>
                          <option value="">2023</option>
                          <option value="">2024</option>
                        </select>
                        <div className="flex flex-col gap-2 px-2 w-full">
                          <input
                            type="text"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            placeholder="Variable Amount"
                          />
                        </div>
                        <button
                          onClick={() => handleRemoveField1(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    ))}
                    <div>
                      <button
                        onClick={handleAddField1}
                        className="border border-gray-500 rounded-md px-5 py-1 flex items-center mt-4"
                      >
                        <PiPlusCircle size={20} />
                        Add
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      <div className="my-2">
        <Table columns={columns} data={data} />
      </div>
      <div className="flex justify-center gap-2 col-span-2 my-5">
        <Link
          to={`/hrms/employee-directory/salary`}
          className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
        >
          Cancel
        </Link>
        <Link className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2">
          Back
        </Link>
        <button
          className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
          onClick={() => setModal(true)} 
        >
          Save & Proceed
        </button>
      </div>
    </div>
  );
}

export default CTCComponents;
