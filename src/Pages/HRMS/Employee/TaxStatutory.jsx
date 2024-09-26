import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function TaxStatutory() {
  const [modal, setModal] = useState(false);
  const [response, setResponse] = useState("");

  const handleRadioChange = (event) => {
    setResponse(event.target.value);
    if (event.target.value === "yes") {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="grid grid-cols-2 gap-x-8 gap-y-3 bg-white my-5 p-5 rounded-md">
        <div className="flex flex-col gap-2 ml-5">
          <label className="block text-gray-600 text-base">
            Auto-Salary Revision Arrears Required?*
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
        <div className="flex flex-col gap-2 ml-5">
          <label className="block text-gray-600 text-base">PF Deduction</label>
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
        <div className="flex flex-col gap-2 ml-5">
          <label className="block text-gray-600 text-base">
            Provident Pension Deduction
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
        <div className="flex flex-col gap-2 ml-5">
          <label className="block text-gray-600 text-base">
            Employee’s Provident Fund contribution capped at the PF Ceiling?
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
        <div className="mb-2 px-5">
          <input
            type="number"
            name=""
            placeholder="Would you like to set a fixed amount for your Provident Fund Wage?(leave blank for no amount) "
            className="border-b border-gray-500 focus:outline-none w-full"
          />
        </div>
        <div className="flex flex-col gap-2 px-5">
          <select
            name=""
            className="border-b border-gray-500 focus:outline-none w-full"
          >
            <option value="">
              Select PF Template(leave blank for default settings)
            </option>
            <option value=""> Pf Template</option>
            <option value="">pf template new</option>
            <option value="">new pf</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 ml-5">
          <label className="block text-gray-600 text-base">
            ESIC Deduction
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
        <div className="flex flex-col gap-2 ml-5">
          <label className="block text-gray-600 text-base">PT Deduction</label>
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
        <div className="flex flex-col gap-2 ml-5">
          <label className="block text-gray-600 text-base">LWF Deduction</label>
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
        <div className="flex flex-col gap-2 ml-5">
          <label className="block text-gray-600 text-base">
            Gratuity Applicable
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
        <div className="flex flex-col gap-2 ml-5">
          <label className="block text-gray-600 text-base">
            Income Tax Deduction
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
        <div className="flex flex-col gap-2 ml-5">
          <label className="block text-gray-600 text-base">NPS Deduction</label>
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
        <div className="flex justify-center gap-2 col-span-2 my-5">
          <Link
            to={`/hrms/employee-directory/salary`}
            className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
          >
            Cancel
          </Link>
          <Link
            
            className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
          >
            Back
          </Link>
          <button
            className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
            onClick={() => setModal(true)} // Optional: keep the modal opening here for manual trigger
          >
            Save & Proceed
          </button>
        </div>
      </div>
      {modal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button className="" onClick={() => setModal(false)}>
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500">
              Are you sure?
            </h2>
            <div className="mt-3">
              <p className="font-normal text-gray-500">
                Note that you are currently changing the statutory settings that
                have been predefined in Template settings. If you do not wish to
                do so, please revert back to the original settings
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

export default TaxStatutory;
