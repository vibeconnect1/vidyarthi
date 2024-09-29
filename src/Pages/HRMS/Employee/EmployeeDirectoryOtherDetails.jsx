import React, { useState } from "react";
import EmployeeDirectorySetting from "./EmployeeDirectorySetting";
import EditEmployeeDirectoryPage from "./EditEmployeeDirectoryPage";
import { BiEdit } from "react-icons/bi";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { MdOutlineTableChart } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import Table from "../../../ConfigurationFile/Table";
import { PiPlusCircle } from "react-icons/pi";
import { GoTable } from "react-icons/go";

function EmployeeDirectoryOtherDetails() {
  const [customField, setCustomField] = useState(true);
  const [editCustomField, setEditCustomField] = useState(false);
  const [employeeOKR, setEmployeeOKR] = useState(true);
  const [rowEmployeeOKR, setRowEmployeeOKR] = useState(false);
  const [editEmployeeOKR, setEditEmployeeOKR] = useState(false);
  const [mediclaimForm, setMediclaimForm] = useState(true);
  const [rowMediclaimForm, setRowMediclaimForm] = useState(false);
  const [editMediclaimForm, setEditMediclaimForm] = useState(false);
  const [bgvRemarks, setBgvRemarks] = useState(true);
  const [editBgvRemarks, setEditBgvRemarks] = useState(true);
  const employeeOKRColumns = [
    {
      name: "Your Quarterly Target",
      selector: (row) => row.your_quarterly_target,
      sortable: true,
    },

    {
      name: "",
      selector: (row) => "",
      sortable: true,
    },
    {
      name: "",
      selector: (row) => "",
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="">
          <button onClick={() => setEditEmployeeOKR(!editEmployeeOKR)}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
  ];

  const employeeOKRData = [
    {
      id: 1,
      your_quarterly_target: "Complete 3 major projects",
    },
  ];

  const mediclaimFormColumns = [
    {
      name: "Full Name",
      selector: (row) => row.full_name,
      sortable: true,
    },

    {
      name: "Mediclaim Number",
      selector: (row) => row.mediclaim_number,
      sortable: true,
    },
    {
      name: "",
      selector: (row) => "",
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="">
          <button onClick={() => setEditMediclaimForm(!editMediclaimForm)}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
  ];

  const mediclaimFormData = [
    {
      full_name: "John Doe",
      mediclaim_number: "12345678",
    },
    {
      full_name: "Jane Smith",
      mediclaim_number: "87654321",
    },
  ];

  return (
    <div>
      <EditEmployeeDirectoryPage />
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <EmployeeDirectorySetting />
        </div>
        <div className="col-span-3">
          <div className=" bg-white rounded-md mx-5 py-5 px-5">
            <h1 className="text-lg font-medium border-b border-gray-500 py-5">
              Other Details
            </h1>
            <div className="bg-white rounded-md my-2">
              <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                  <FaFileAlt size={20} />
                  Custom Field Information
                </h2>
                <div className="flex gap-2">
                  <div>
                    {!editCustomField ? (
                      <button
                        onClick={() => setEditCustomField(!editCustomField)}
                        className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-3"
                      >
                        <BiEdit size={15} /> Edit
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-2"
                          onClick={() => setEditCustomField(!editCustomField)}
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
                  <button onClick={() => setCustomField(!customField)}>
                    <IoIosArrowDown
                      className={`transition-transform ${
                        customField ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
              {customField && (
                <div>
                  <div className="p-6 bg-white rounded-lg w-full">
                    <div className="flex justify-between"></div>
                    <div>
                      <div className="grid grid-cols-2 w-full gap-5">
                        <div className="flex flex-col gap-2">
                          <select
                            name=""
                            className="border-b border-gray-500 focus:outline-none w-full"
                            disabled={!editCustomField}
                          >
                            <option value="">Select Old_Department</option>
                            <option value="">HR</option>
                            <option value="">Marketing</option>
                            <option value="">Finance</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <select
                            name=""
                            className="border-b border-gray-500 focus:outline-none w-full"
                            disabled={!editCustomField}
                          >
                            <option value="">Select Blood Group</option>
                            <option value="">A+</option>
                            <option value="">AB+</option>
                            <option value="">B-</option>
                            <option value="">B+</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <select
                            name=""
                            className="border-b border-gray-500 focus:outline-none w-full"
                            disabled={!editCustomField}
                          >
                            <option value="">Select Education Level</option>
                            <option value="">Graduate</option>
                            <option value="">Post Graduate</option>
                            <option value="">Masters</option>
                          </select>
                        </div>
                        <div className="mb-2">
                          <input
                            type="text"
                            name=""
                            placeholder="Father Name"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !editCustomField
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!editCustomField}
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            type="text"
                            name=""
                            placeholder="Age Group"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !editCustomField
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!editCustomField}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white rounded-md py-2">
              <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                  <MdOutlineTableChart size={20} />
                  Employee OKR
                </h2>
                <div className="flex gap-2">
                  <button
                    className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-3"
                    onClick={() => setRowEmployeeOKR(!rowEmployeeOKR)}
                  >
                    <PiPlusCircle size={20} />
                    Add Row
                  </button>
                  <button onClick={() => setEmployeeOKR(!employeeOKR)}>
                    <IoIosArrowDown
                      className={`transition-transform ${
                        employeeOKR ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
              {employeeOKR && (
                <div>
                  <Table columns={employeeOKRColumns} data={employeeOKRData} />
                </div>
              )}
            </div>
            <div className="bg-white rounded-md py-2">
              <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                  <MdOutlineTableChart size={20} />
                  Mediclaim Form
                </h2>
                <div className="flex gap-2">
                  <button
                    className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-3"
                    onClick={() => setRowMediclaimForm(!rowMediclaimForm)}
                  >
                    <PiPlusCircle size={20} />
                    Add Row
                  </button>
                  <button onClick={() => setMediclaimForm(!mediclaimForm)}>
                    <IoIosArrowDown
                      className={`transition-transform ${
                        mediclaimForm ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
              {mediclaimForm && (
                <div>
                  <Table
                    columns={mediclaimFormColumns}
                    data={mediclaimFormData}
                  />
                </div>
              )}
            </div>
            <div className="bg-white rounded-md my-2">
              <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                  <GoTable  size={20} />
                  BGV Remarks
                </h2>
                <div className="flex gap-2">
                  <div>
                    {!editBgvRemarks ? (
                      <button
                        onClick={() => setEditBgvRemarks(!editBgvRemarks)}
                        className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-3"
                      >
                        <BiEdit size={15} /> Edit
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-2"
                          onClick={() => setEditBgvRemarks(!editBgvRemarks)}
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
                  <button onClick={() => setBgvRemarks(!bgvRemarks)}>
                    <IoIosArrowDown
                      className={`transition-transform ${
                        bgvRemarks ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
              {bgvRemarks && (
                <div>
                  <div className="p-6 bg-white rounded-lg w-full">
                    <div className="grid grid-cols-2 w-full gap-5">
                      <div className="mb-2">
                        <input
                          type="text"
                          name=""
                          placeholder="BGV Remarks by HR"
                          className={`border-b border-gray-500 focus:outline-none w-full${
                            !editBgvRemarks
                              ? "border-b border-gray-500 focus:outline-none w-full"
                              : ""
                          }`}
                          readOnly={!editBgvRemarks}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {rowEmployeeOKR && (
          <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-96 max-h-screen overflow-y-auto">
              <div className="bg-pink-100 py-5 relative">
                <button
                  className="absolute right-2 top-2"
                  onClick={() => setRowEmployeeOKR(!rowEmployeeOKR)}
                >
                  <IoMdClose size={20} />
                </button>
                <h2 className="text-xl font-medium text-center text-gray-800">
                  Employee OKR
                </h2>
              </div>
              <div className="mt-5 mx-5">
                <textarea
                  name=""
                  placeholder="Your Quarterly Target"
                  className="border-b border-gray-500 focus:outline-none w-full p-2"
                ></textarea>
              </div>
              <div className="flex justify-center gap-2 mb-5">
                <button
                  onClick={() => setRowEmployeeOKR(!rowEmployeeOKR)}
                  className="mt-4 border border-gray-500 text-black py-2 px-4 rounded-md  flex items-center gap-2"
                >
                  Cancel
                </button>
                <button className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-md  flex items-center gap-2">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
        {editEmployeeOKR && (
          <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-96 max-h-screen overflow-y-auto">
              <div className="bg-pink-100 py-5 relative">
                <button
                  className="absolute right-2 top-2"
                  onClick={() => setEditEmployeeOKR(!editEmployeeOKR)}
                >
                  <IoMdClose size={20} />
                </button>
                <h2 className="text-xl font-medium text-center text-gray-800">
                  Edit Employee OKR
                </h2>
              </div>
              <div className="mt-5 mx-5">
                <textarea
                  name=""
                  placeholder="Your Quarterly Target"
                  className="border-b border-gray-500 focus:outline-none w-full p-2"
                ></textarea>
              </div>
              <div className="flex justify-center gap-2 mb-5">
                <button
                  onClick={() => setEditEmployeeOKR(!editEmployeeOKR)}
                  className="mt-4 border border-gray-500 text-black py-2 px-4 rounded-md  flex items-center gap-2"
                >
                  Cancel
                </button>
                <button className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-md  flex items-center gap-2">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
        {rowMediclaimForm && (
          <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-96 max-h-screen overflow-y-auto">
              <div className="bg-pink-100 py-5 relative">
                <button
                  className="absolute right-2 top-2"
                  onClick={() => setRowMediclaimForm(!rowMediclaimForm)}
                >
                  <IoMdClose size={20} />
                </button>
                <h2 className="text-xl font-medium text-center text-gray-800">
                  Mediclaim Form
                </h2>
              </div>
              <div className="my-5 mx-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-5 mx-5">
                <input
                  type="text"
                  placeholder="Mediclaim Number "
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex justify-center gap-2 mb-5">
                <button
                  onClick={() => setRowMediclaimForm(!rowMediclaimForm)}
                  className="mt-4 border border-gray-500 text-black py-2 px-4 rounded-md  flex items-center gap-2"
                >
                  Cancel
                </button>
                <button className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-md  flex items-center gap-2">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
        {editMediclaimForm && (
          <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-96 max-h-screen overflow-y-auto">
              <div className="bg-pink-100 py-5 relative">
                <button
                  className="absolute right-2 top-2"
                  onClick={() => setEditMediclaimForm(!editMediclaimForm)}
                >
                  <IoMdClose size={20} />
                </button>
                <h2 className="text-xl font-medium text-center text-gray-800">
                  Edit Mediclaim Form
                </h2>
              </div>
              <div className="my-5 mx-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-5 mx-5">
                <input
                  type="text"
                  placeholder="Mediclaim Number "
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex justify-center gap-2 mb-5">
                <button
                  onClick={() => setEditMediclaimForm(!editMediclaimForm)}
                  className="mt-4 border border-gray-500 text-black py-2 px-4 rounded-md  flex items-center gap-2"
                >
                  Cancel
                </button>
                <button className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-md  flex items-center gap-2">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeDirectoryOtherDetails;
