import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function AddNewCTCGeneralInfo() {
  const [showInput, setShowInput] = useState(false);
  const [modal, setModal] = useState(false);
  const handleRadioChange = (event) => {
    setShowInput(event.target.value === "yes");
  };
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="grid grid-cols-2 gap-x-8 gap-y-3 bg-white my-5 p-5 rounded-md">
        <div className="mb-2">
          <input
            type="text"
            name=""
            placeholder="Select Effective Date for Payroll Processing"
            className="border-b border-gray-500 focus:outline-none w-full"
          />
        </div>
        <div className="flex flex-col">
          <label className="block  text-gray-600 text-base">
            Does the actual effective date of salary differ?*
          </label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="response"
                value="yes"
                onChange={handleRadioChange}
                className="mr-1"
              />
              Yes
            </label>
            <label className="text-gray-700">
              <input
                type="radio"
                name="response"
                value="no"
                onChange={handleRadioChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="col-span-2 ">
          {showInput && (
            <div className="grid grid-cols-2 ">
              <div className="mb-2">
                <input
                  type="text"
                  name=""
                  placeholder="Please select the actual effective date"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex flex-col gap-2 ml-5">
                <label className="block  text-gray-600 text-base">
                  Auto-Salary Revision Arrears Required?*
                </label>
                <div>
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="response"
                      value="yes"
                      className="mr-1"
                    />
                    Yes
                  </label>
                  <label className="text-gray-700">
                    <input
                      type="radio"
                      name="response"
                      value="no"
                      className="mr-1"
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <select
            name=""
            className="border-b border-gray-500 focus:outline-none w-full"
          >
            <option value="">Select CTC Amount frequency</option>
            <option value="">Annually</option>
            <option value="">Monthly</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <select
            name=""
            class="border-b border-gray-500 focus:outline-none w-full"
          >
            <option value="">Select Template</option>
            <option value="">jnk</option>
            <option value="">Grabbit Empire- HR ADMIN2</option>
            <option value="">Grabbit Empire- National Operation Manager</option>
            <option value="">Grabbit Empire- Account Officer</option>
            <option value="">Grabbit Empire - Personal Secretary</option>
            <option value="">
              Grabbit Empire - Assistant Manager Operation
            </option>
            <option value="">Grabbit Empire - Operation Manager</option>
            <option value="">Grabbit Empire - ASM-Sales &amp; Marketing</option>
            <option value="">Grabbit Empire - ASM-Vending</option>
            <option value="">test11</option>
            <option value="">test 22</option>
            <option value="">ctc basket</option>
            <option value="">CTC Basket NEW</option>
            <option value="">sj</option>
            <option value="">Sr. Executive</option>
            <option value="">ctc</option>
            <option value="">Grabbit Empire - HR admin</option>
            <option value="">Grabbit Empire - Account Officer 2</option>
            <option value="">Executive</option>
            <option value="">Grabbit </option>
            <option value="">Grabbit Empire - Director</option>
            <option value="">General</option>
            <option value="">
              Grabbit Empire - Research &amp; Devlopment -Manager{" "}
            </option>
            <option value="">Grabbit Empire- National Sales Manager</option>
            <option value="">temp newwww</option>
            <option value="">CTC New</option>
            <option value="">Grabbit Empire- HR Manager</option>
            <option value="">Enter Manually</option>
          </select>
        </div>
        <div className="flex justify-center gap-2 col-span-2 my-5">
          <Link
            to={`/hrms/employee-directory/salary`}
            className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
          >
            Back
          </Link>
          <button
            className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
            onClick={() => setModal(!modal)}
          >
            Save & Proceed
          </button>
        </div>
      </div>
      {modal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button className="" onClick={() => setModal(!modal)}>
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
              Are you sure?
            </h2>
            <div className="mt-3">
              <p className="font-normal text-gray-500">
                Please Select CTC Template
              </p>
              <div className="flex justify-center gap-2 my-5">
                <button className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddNewCTCGeneralInfo;
