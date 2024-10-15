import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import FlexiSettingsidebar from "./FlexiSettingsidebar";
import { PiPlusCircle } from "react-icons/pi";
import { FiPlus, FiTrash2 } from "react-icons/fi";
function EditFlexiBenefitCategory() {
  const [fields, setFields] = useState([{ name: "", type: "TextField" }]);

  const addField = () => {
    setFields([...fields, { name: "", type: "TextField" }]);
  };

  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const updateField = (index, key, value) => {
    const newFields = [...fields];
    newFields[index][key] = value;
    setFields(newFields);
  };

  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">Flexi Benefit Management</h1>
          </div>
          <p className="mx-10 my-2">View Flexi Benefit Settings</p>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5">
        <div className="col-span-3 my-3 rounded-md ml-20">
          <div className="bg-white rounded-md">
            <FlexiSettingsidebar />
          </div>
        </div>
        <div className="col-span-6 my-3 rounded-md">
          <div className="flex justify-start">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Edit Flexi Benefit Categories
            </h2>
          </div>
          <div className="bg-white p-5 rounded-md my-2">
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    Please choose type of Flexi Benefit
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <select
                    required
                    id=""
                    name=""
                    disabled
                    className="border-b border-gray-500 text-gray-800 py-1 focus:outline-none w-full"
                  >
                    <option value="">Select Type</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    What label would you like to give this Flexi Benefit?
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    name=""
                    placeholder="Custom Label"
                    disabled
                    className="border-b border-gray-500 text-gray-800 py-1 focus:outline-none w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    Choose Icon
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <button className="bg-gray-500 rounded-full p-2" disabled>
                    <PiPlusCircle className=" h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    What is the frequency of the Flexi Benefit?
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <select
                    required
                    id=""
                    name=""
                    disabled
                    className="border-b border-gray-500 text-gray-800 py-1 focus:outline-none w-full"
                  >
                    <option value="">Select Frequency</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Semi-Annually">Semi-Annually</option>
                    <option value="Annually">Annually</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    How would you like to treat unclaimed amounts in each
                    claimable period?
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <select
                    required
                    id=""
                    name=""
                    disabled
                    className="border-b border-gray-500 text-gray-800 py-1 focus:outline-none w-full"
                  >
                    <option value="">Select an Action</option>
                    <option value="Rollover to next period">
                      Rollover to next period
                    </option>
                    <option value="Lapse Immediately">Lapse Immediately</option>
                    <option value="Payout as taxable in that period">
                      Payout as taxable in that period
                    </option>
                    <option value="Payout as tax-free in that period">
                      Payout as tax-free in that period
                    </option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    How would you like to treat negative eligibility amounts in
                    each claimable period?
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <select
                    required
                    id=""
                    name=""
                    disabled
                    className="border-b border-gray-500 text-gray-800 py-1 focus:outline-none w-full"
                  >
                    <option value="">Select an Action</option>
                    <option value="Rollover to next period">
                      Rollover to next period
                    </option>
                    <option value="Recover in Payslip">
                      Recover in Payslip
                    </option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    How would you like to treat unclaimed amounts at the end of
                    financial year?
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <select
                    required
                    id=""
                    name=""
                    disabled
                    className="border-b border-gray-500 text-gray-800 py-1 focus:outline-none w-full"
                  >
                    <option value="">Select an Action</option>
                    <option value="Lapse">Lapse</option>
                    <option value="Pay out all Unclaimed Amounts as Taxable">
                      Pay out all Unclaimed Amounts as Taxable
                    </option>
                    <option value="Pay out all Unclaimed and Lapsed Amounts YTD as Taxable">
                      Pay out all Unclaimed and Lapsed Amounts YTD as Taxable
                    </option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    What would you like to do with any outstanding unclaimed
                    amounts for FnF employees?
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <select
                    required
                    id=""
                    name=""
                    disabled
                    className="border-b border-gray-500 text-gray-800 py-1 focus:outline-none w-full"
                  >
                    <option value="">Select an Action</option>
                    <option value="Lapse">Lapse</option>
                    <option value="Pay out all Unclaimed Amounts as Taxable">
                      Pay out all Unclaimed Amounts as Taxable
                    </option>
                    <option value="Pay out all Unclaimed and Lapsed Amounts YTD as Taxable">
                      Pay out all Unclaimed and Lapsed Amounts YTD as Taxable
                    </option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    What would you like to call the unclaimed amount paid as
                    taxable with salary?
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    name=""
                    disabled
                    placeholder="Unclaimed Amount Label"
                    className="border-b border-gray-500 text-gray-800 py-1 focus:outline-none w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    Are Unclaimed Amount Payments part of PF Wage?
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <label className="mr-4">
                    <input type="radio" name="PFwage" className="mr-1" disabled />
                    Yes
                  </label>
                  <label className="text-gray-700">
                    <input type="radio" name="PFwage" className="mr-1" disabled/>
                    No
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    Are Unclaimed Amount Payments part of ESIC Wage?
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <label className="mr-4">
                    <input type="radio" name="ESICwage" className="mr-1" disabled/>
                    Yes
                  </label>
                  <label className="text-gray-700">
                    <input type="radio" name="ESICwage" className="mr-1" disabled/>
                    No
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    Are Unclaimed Amount Payments part of PT Wage?
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <label className="mr-4">
                    <input type="radio" name="Wage" className="mr-1" disabled/>
                    Yes
                  </label>
                  <label className="text-gray-700">
                    <input type="radio" name="Wage" className="mr-1"disabled />
                    No
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    Are Unclaimed Amount Payments part of LWF Wage?
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <label className="mr-4">
                    <input type="radio" name="LWF" className="mr-1" disabled/>
                    Yes
                  </label>
                  <label className="text-gray-700">
                    <input type="radio" name="LWF" className="mr-1" disabled/>
                    No
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    How many times can employee submit Flexi Benefit request in
                    each claimable period?
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    name=""
                    placeholder="Leave Blank for No Limit"
                    disabled
                    className="border-b border-gray-500 text-gray-800 py-1 focus:outline-none w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    Would you like to pro rate eligibility based on attendance?
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <label className="mr-4">
                    <input type="radio" name="attendance" className="mr-1" disabled/>
                    Yes
                  </label>
                  <label className="text-gray-700">
                    <input type="radio" name="attendance" className="mr-1" disabled/>
                    No
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="">
                    What would you like to do with the surplus amount if total
                    amount approved is more than the eligiblity balance? *
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="col-span-1">
                  <select
                    required
                    id=""
                    name=""
                    disabled
                    className="border-b border-gray-500 text-gray-800 py-1 focus:outline-none w-full"
                  >
                    <option value="">Select an Action</option>
                    <option value="Carry Forward">Carry Forward</option>
                    <option value="Lapse">Lapse</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-3">
                  <h1 className="text-lg font-medium mb-2">Custom Fields</h1>
                  <p className="text-gray-600 mb-6">
                    Please add/edit fields that employees need to fill during
                    flexi benefit application
                  </p>

                  {fields.map((field, index) => (
                    <div
                      key={index}
                      className="flex mb-4 items-center space-x-4"
                    >
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Custom Field Label"
                          value={field.name}
                          disabled
                          onChange={(e) =>
                            updateField(index, "name", e.target.value)
                          }
                          className="border-b border-gray-500 text-gray-800 py-1 focus:outline-none w-full"
                        />
                      </div>
                      <div className="flex-1">
                        <select
                          value={field.type}
                          onChange={(e) =>
                            updateField(index, "type", e.target.value)
                          }
                          disabled
                          className="border-b border-gray-500 text-gray-800 py-1 focus:outline-none w-full"
                        >
                          <option value="TextField">TextField</option>
                          <option value="NumberField">NumberField</option>
                          <option value="DateField">DateField</option>
                        </select>
                      </div>
                      <button
                        onClick={() => removeField(index)}
                        className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors duration-200"
                      >
                        <FiTrash2 className="w-5 h-5"/>
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={addField}
                    className="mb-6 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 flex items-center"
                  >
                    <FiPlus className="mr-2"/> Add Custom Field
                  </button>

                  <div className="flex justify-center space-x-4">
                    <Link to={`/hrms/flexi/setting/flexi-benefit-categories`} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200">
                      Close
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
                {/* <p className="font-medium">Help Center</p> */}
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>
                    Flexi benefit settings allow you to configure salary-related
                    reimbursements that let employees save on tax by submitting
                    proofs. Unsubmitted amount will be considered as a taxable
                    income.
                  </li>
                  <li>
                    You can create different categories like internet
                    allowances, petrol reimbursements, food allowances, etc. and
                    set the allowance amount in the employee salary table. You
                    can set the frequency as
                    monthly/quarterly/semi-annually/annually.
                  </li>
                  <li>
                    The eligibility of the calculations will be based on the
                    attendance.
                  </li>
                  <li>
                    The eligibility of the calculations will be based on the
                    attendance.
                  </li>
                  <li>
                    Employees can track their eligibility and reimbursement
                    status from the flexi-benefits section. They also have an
                    option to generate separate flexi payslip.
                  </li>
                  <li>
                    Categories cannot be edited/deleted if already assigned to
                    employees.
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
export default EditFlexiBenefitCategory