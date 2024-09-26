import React, { useState } from "react";
import {
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";
import EmployeeDirectorySetting from "./EmployeeDirectorySetting";
import { BiEdit } from "react-icons/bi";
import { PiFolderStarThin } from "react-icons/pi";
import EditEmployeeDirectoryPage from "./EditEmployeeDirectoryPage";
function StatutoryDirectory() {
  const [editStatutory, setEditStatutory] = useState(false);
  return (
    <div className=" w-full">
        <EditEmployeeDirectoryPage/>
      <div className="flex flex-col w-full overflow-hidden">
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <EmployeeDirectorySetting />
          </div>
          <div className="col-span-3">
            <div className=" bg-white rounded-md mx-5 py-5 px-5">
              <h1 className="text-lg font-medium border-b border-gray-500 py-5">
                Statutory
              </h1>
              <div className="bg-white rounded-md">
                <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                  <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                    <PiFolderStarThin size={20} />
                    Statutory Settings Information
                  </h2>
                  <div className="flex gap-2">
                    <div>
                      {!editStatutory ? (
                        <button
                          onClick={() => setEditStatutory(!editStatutory)}
                          className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-3"
                        >
                          <BiEdit size={15} /> Edit
                        </button>
                      ) : (
                        <div className="flex gap-2">
                          <button
                            className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-2"
                            onClick={() => setEditStatutory(!editStatutory)}
                          >
                            <AiOutlineClose size={20} />
                            Cancel
                          </button>
                          <button className="px-4 py-1 bg-green-500 text-white rounded-full flex items-center gap-2">
                            <AiOutlineCheck size={20} />
                            Save
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 w-full gap-5 py-5">
                  <div className="flex flex-col gap-2">
                    <label className="block  text-gray-600 text-base">
                      PF Applicable
                    </label>
                    <div>
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        Yes
                      </label>
                      <label className="text-gray-700">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block  text-gray-600 text-base">
                      PF Pension Applicable
                    </label>
                    <div>
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        Yes
                      </label>
                      <label className="text-gray-700">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block  text-gray-600 text-base">
                      Employee PF Ceiling Applicable
                    </label>
                    <div>
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        Yes
                      </label>
                      <label className="text-gray-700">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block  text-gray-600 text-base">
                      Employer PF Ceiling Applicable
                    </label>
                    <div>
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        Yes
                      </label>
                      <label className="text-gray-700">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      name=""
                      placeholder="PF Joining Date"
                      className={`border-b border-gray-500 focus:outline-none w-full${
                        !editStatutory
                          ? "border-b border-gray-500 focus:outline-none w-full"
                          : ""
                      }`}
                      readOnly={!editStatutory}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="number"
                      name=""
                      placeholder="PF Number"
                      className={`border-b border-gray-500 focus:outline-none w-full${
                        !editStatutory
                          ? "border-b border-gray-500 focus:outline-none w-full"
                          : ""
                      }`}
                      readOnly={!editStatutory}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="number"
                      name=""
                      placeholder="UAN Number"
                      className={`border-b border-gray-500 focus:outline-none w-full${
                        !editStatutory
                          ? "border-b border-gray-500 focus:outline-none w-full"
                          : ""
                      }`}
                      readOnly={!editStatutory}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="number"
                      name=""
                      placeholder="PF Wage"
                      className={`border-b border-gray-500 focus:outline-none w-full${
                        !editStatutory
                          ? "border-b border-gray-500 focus:outline-none w-full"
                          : ""
                      }`}
                      readOnly={!editStatutory}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="number"
                      name=""
                      placeholder="VPF"
                      className={`border-b border-gray-500 focus:outline-none w-full${
                        !editStatutory
                          ? "border-b border-gray-500 focus:outline-none w-full"
                          : ""
                      }`}
                      readOnly={!editStatutory}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block  text-gray-600 text-base">
                      ESIC Applicable
                    </label>
                    <div>
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        Yes
                      </label>
                      <label className="text-gray-700">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div className="mb-2">
                    <input
                      type="number"
                      name=""
                      placeholder="ESIC Number"
                      className={`border-b border-gray-500 focus:outline-none w-full${
                        !editStatutory
                          ? "border-b border-gray-500 focus:outline-none w-full"
                          : ""
                      }`}
                      readOnly={!editStatutory}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block  text-gray-600 text-base">
                      PT Applicable
                    </label>
                    <div>
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        Yes
                      </label>
                      <label className="text-gray-700">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block  text-gray-600 text-base">
                      LWF Applicable
                    </label>
                    <div>
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        Yes
                      </label>
                      <label className="text-gray-700">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block  text-gray-600 text-base">
                      IT Applicable
                    </label>
                    <div>
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        Yes
                      </label>
                      <label className="text-gray-700">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block  text-gray-600 text-base">
                      Gratuity Applicable
                    </label>
                    <div>
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        Yes
                      </label>
                      <label className="text-gray-700">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block  text-gray-600 text-base">
                      NPS Applicable
                    </label>
                    <div>
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        Yes
                      </label>
                      <label className="text-gray-700">
                        <input
                          type="radio"
                          name="applicable"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <select
                      name=""
                      className="border-b border-gray-500 focus:outline-none w-full"
                      disabled={!editStatutory} // Makes the select read-only if isPersonal is false
                    >
                      <option value="">Select Tax Regime</option>
                      <option value="">New Regime</option>
                      <option value="">Old Regime</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <input
                      type="number"
                      name=""
                      placeholder="Tax Regime Updated at"
                      className={`border-b border-gray-500 focus:outline-none w-full${
                        !editStatutory
                          ? "border-b border-gray-500 focus:outline-none w-full"
                          : ""
                      }`}
                      readOnly={!editStatutory}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="number"
                      name=""
                      placeholder="Tax Regime Updated by"
                      className={`border-b border-gray-500 focus:outline-none w-full${
                        !editStatutory
                          ? "border-b border-gray-500 focus:outline-none w-full"
                          : ""
                      }`}
                      readOnly={!editStatutory}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block  text-gray-600 text-base">
                      Decimal Rates Allowed
                    </label>
                    <div>
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="allowed"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        Yes
                      </label>
                      <label className="text-gray-700">
                        <input
                          type="radio"
                          name="allowed"
                          className="mr-1"
                          disabled={!editStatutory}
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatutoryDirectory;
