import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../../ConfigurationFile/Table";
import { BiEdit } from "react-icons/bi";
function PendingContractRenewal() {
  const [filter, setFilter] = useState(false);
  const [workLocation, setWorkLocation] = useState(false);
  const [employeeDepartment, setEmployeeDepartment] = useState(false);
  const [supervisor, setSupervisor] = useState(false);
  const [action, setAction] = useState(false);
  const [bulkUploadApproval, setBulkUploadApproval] = useState(false);
  const [bulkUploadAgreement, setBulkUploadAgreement] = useState(false);
  const [addEmploymentContract, setAddEmploymentContract] = useState(false);
  const [editEmploymentContract, setEditEmploymentContract] = useState(false);
  const [addFileUpload, setAddFileUpload] = useState(false);
  const [editFileUpload, setEditFileUpload] = useState(false);
  const handleAddFileUpload = (e) => {
    if (e.target.value === "fileUpload") {
      setAddFileUpload(true);
    } else {
      setAddFileUpload(false);
    }
  };
  const handleEditFileUpload = (e) => {
    if (e.target.value === "fileUpload") {
      setEditFileUpload(true);
    } else {
      setEditFileUpload(false);
    }
  };
  const workLocationList = [
    "Select all",
    "Mumbai; Mumbai; Maharashtra",
    "Test 1 ; Pune; Maharashtra",
    "Delhi; Delhi NCR; Delhi",
    "Asian Paints Delhi; Noida; Delhi",
    "Asian Paints Gurgoan; Gurgoan ; Delhi",
  ];
  const employeeDepartmentList = [
    "Select all",
    "Finance",
    "HR",
    "L machine",
    "L packing",
    "Marketing",
    "Operations",
  ];

  const supervisorList = [
    "Select all",
    "Ajay Singh-100",
    "Vinay Kumar-101",
    "Vishal Yadav-102",
    "Ramesh Kumar-103",
    "Vijay Sharma-104",
    "Virat Gupat-105",
  ];

  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Contract Start Date",
      selector: (row) => row.contract_start_date,
      sortable: true,
    },
    {
      name: "Contract End Date",
      selector: (row) => row.contract_end_date,
      sortable: true,
    },
    {
      name: "Contract Approval Proof",
      selector: (row) => row.contract_approval_proof,
      sortable: true,
    },
    {
      name: "Contract Agreement	",
      cell: (row) => (
        <button className="bg-gray-400 p-2 rounded-md text-white">View</button>
      ),
      sortable: true,
    },
    {
      name: "Remark",
      selector: (row) => row.remark,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button
            onClick={() => setAddEmploymentContract(!addEmploymentContract)}
          >
            <PiPlusCircle size={15} />
          </button>
          <button
            onClick={() => setEditEmploymentContract(!editEmploymentContract)}
          >
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      employee_name: "Karan",
      contract_start_date: "06-04-2022",
      contract_end_date: "06-04-2022	",
      contract_approval_proof: "",
      remark: "-",
    },
  ];

  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">Pending Employment Contract</h1>
          </div>
        </header>
        <div className="grid grid-cols-12 gap-5 my-3 pr-2 ml-24">
          <div className="col-span-12">
            <div className="flex justify-between">
              <h2 className="flex items-center text-gray-800 text-xl font-medium">
                Pending Employment Contract
              </h2>
              <div className="md:flex gap-2 mb-1">
                <div>
                  <input
                    type="text"
                    placeholder="Search by Employee Name or Code"
                    className="border border-gray-500 p-2 text-black rounded-xl w-full  md:w-96"
                  />
                </div>
                <div>
                  <button
                    className="bg-black text-white  font-semibold py-2 px-4 rounded w-full"
                    onClick={() => setFilter(!filter)}
                  >
                    Filter
                  </button>
                  {filter && (
                    <div className="absolute right-24 mt-1 bg-white rounded-lg shadow-lg w-3/5 py-5 z-10">
                      <div className="grid grid-cols-3 gap-5 px-5 my-5">
                        <div>
                          <input
                            type="date"
                            placeholder="Contract Start Date"
                            className="border-b border-gray-500 focus:outline-none w-full"
                          />
                        </div>
                        <div>
                          <input
                            type="date"
                            placeholder="Contract End Date"
                            className="border-b border-gray-500 focus:outline-none w-full"
                          />
                        </div>
                        <div className="relative">
                          <button
                            onClick={() => setWorkLocation(!workLocation)}
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Work Location <IoMdArrowDropdown />
                          </button>

                          {workLocation && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                              <div className="p-2">
                                <div className="relative flex items-center">
                                  <CiSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                  <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </div>
                              <div className="max-h-60 overflow-y-auto">
                                {workLocationList.map((option) => (
                                  <label
                                    key={option}
                                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                                  >
                                    <input type="checkbox" className="mr-2" />
                                    {option}
                                  </label>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="relative">
                          <button
                            onClick={() =>
                              setEmployeeDepartment(!employeeDepartment)
                            }
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Employee Department <IoMdArrowDropdown />
                          </button>

                          {employeeDepartment && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                              <div className="p-2">
                                <div className="relative flex items-center">
                                  <CiSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                  <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </div>
                              <div className="max-h-60 overflow-y-auto">
                                {employeeDepartmentList.map((option, index) => (
                                  <label
                                    key={option}
                                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                                  >
                                    <input type="checkbox" className="mr-2" />
                                    {option}
                                  </label>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="relative">
                          <button
                            onClick={() => setSupervisor(!supervisor)}
                            className="border-b border-gray-500 focus:outline-none w-full text-left flex items-center gap-2 justify-between"
                          >
                            Supervisor <IoMdArrowDropdown />
                          </button>
                          {supervisor && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                              <div className="p-2">
                                <div className="relative flex items-center">
                                  <CiSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                  <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </div>
                              <div className="max-h-60 overflow-y-auto">
                                {supervisorList.map((option, index) => (
                                  <label
                                    key={option}
                                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                                  >
                                    <input type="checkbox" className="mr-2" />
                                    {option}
                                  </label>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => setFilter(!filter)}
                          className="border border-gray-500 rounded-md text-black py-1 px-4"
                        >
                          Clear
                        </button>
                        <button className="bg-gray-500 text-white py-1 px-4 rounded-md ">
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="bg-black text-white font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full"
                    onClick={() => setAction(!action)}
                  >
                    <span>Actions</span>
                    <FaChevronDown />
                  </button>
                  {action && (
                    <div className="absolute right-0 mt-1 mr-5 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                      <div className="py-1 flex flex-col ">
                        <button className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-left hover:text-red-500">
                          Bulk Add Employee Contract
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1  text-left cursor-pointer hover:text-red-500"
                          onClick={() =>
                            setBulkUploadApproval(!bulkUploadApproval)
                          }
                        >
                          Bulk Upload Contract Approval Proof
                        </button>
                        <button
                          className="hover:bg-gray-100 px-4 py-1 text-left cursor-pointer hover:text-red-500"
                          onClick={() =>
                            setBulkUploadAgreement(!bulkUploadAgreement)
                          }
                        >
                          Bulk Upload Contract Agreement
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="my-3">
              <Table columns={columns} data={data} selectableRows={true} />
            </div>
          </div>
        </div>
      </div>
      {bulkUploadApproval && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 h-80 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkUploadApproval(!bulkUploadApproval)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Bulk Upload Contract Approval Proof Document
              </h2>
            </div>
            <div className="px-5 py-5">
              <div>
                <select
                  name=""
                  id=""
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                >
                  <option value="">Document name format</option>
                  <option value="">PAN</option>
                  <option value="">Aadhar</option>
                  <option value="">Emp Code</option>
                  <option value="">Email</option>
                </select>
              </div>
              <p className="mmt-2">Upload Documents</p>
              <div>
                <input
                  type="file"
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></input>
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setBulkUploadApproval(!bulkUploadApproval)}
                className="font-semibold py-2 px-4 rounded border border-gray-500 text-gray-500 mt-2 flex items-center gap-2"
              >
                Cancel
              </button>
              <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
      {bulkUploadAgreement && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 h-80 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setBulkUploadAgreement(!bulkUploadAgreement)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Bulk Upload Contract Agreement Document
              </h2>
            </div>
            <div className="px-5 py-5">
              <div>
                <select
                  name=""
                  id=""
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                >
                  <option value="">Document name format</option>
                  <option value="">PAN</option>
                  <option value="">Aadhar</option>
                  <option value="">Emp Code</option>
                  <option value="">Email</option>
                </select>
              </div>
              <p className="mmt-2">Upload Documents</p>
              <div>
                <input
                  type="file"
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></input>
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setBulkUploadAgreement(!bulkUploadAgreement)}
                className="font-semibold py-2 px-4 rounded border border-gray-500 text-gray-500 mt-2 flex items-center gap-2"
              >
                Cancel
              </button>
              <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
      {addEmploymentContract && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 max-h-screen pb-5">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setAddEmploymentContract(!addEmploymentContract)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Employment Contract
              </h2>
            </div>
            <div className="px-5 py-5 overflow-y-auto h-80">
              <div>
                <input
                  type="text"
                  placeholder="Contract Start Date"
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Contract End Date"
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></input>
              </div>
              <div>
                <p className="mmt-2">Contract Approval Proof Document</p>
                <input
                  type="file"
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></input>
              </div>
              <div>
                <select
                  name=""
                  id=""
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                  onChange={handleAddFileUpload} // Handle selection change here
                >
                  <option value="">
                    How would you like to set the Contract Agreement Document?
                  </option>
                  <option value="fileUpload">By File Upload</option>
                  <option value="employeeDocument">
                    By Employee Document or Generated Letters
                  </option>
                </select>
                {addFileUpload && (
                  <div>
                    <p className="mt-2">Contract Agreement Document</p>
                    <input
                      type="file"
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    />
                  </div>
                )}
              </div>
              <div>
                <select
                  name=""
                  id=""
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                >
                  <option value="">
                    Choose from Employee Document or Generated Letters
                  </option>
                  <option value="">12-4-2024</option>
                  <option value="">13-4-2024</option>
                  <option value="">14-4-2024</option>
                  <option value="">15-4-2024</option>
                  <option value="">16-4-2024</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="remark"
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></input>
              </div>
              <div>
                <textarea
                  placeholder="Comments"
                  rows={2}
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setAddEmploymentContract(!addEmploymentContract)}
                className="font-semibold py-2 px-4 rounded border border-gray-500 text-gray-500 mt-2 flex items-center gap-2"
              >
                Cancel
              </button>
              <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {editEmploymentContract && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 max-h-screen pb-5">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() =>
                  setEditEmploymentContract(!editEmploymentContract)
                }
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
               Edit Employment Contract
              </h2>
            </div>
            <div className="px-5 py-5 overflow-y-auto h-80">
              <div>
                <input
                  type="text"
                  placeholder="Contract Start Date"
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Contract End Date"
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></input>
              </div>
              <div>
                <p className="mmt-2">Contract Approval Proof Document</p>
                <input
                  type="file"
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></input>
              </div>
              <div>
                <select
                  name=""
                  id=""
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                  onChange={handleEditFileUpload} // Handle selection change here
                >
                  <option value="">
                    How would you like to set the Contract Agreement Document?
                  </option>
                  <option value="fileUpload">By File Upload</option>
                  <option value="employeeDocument">
                    By Employee Document or Generated Letters
                  </option>
                </select>
                {editFileUpload && (
                  <div>
                    <p className="mt-2">Contract Agreement Document</p>
                    <input
                      type="file"
                      className="border-b border-gray-500 focus:outline-none my-3 w-full"
                    />
                  </div>
                )}
              </div>
              <div>
                <select
                  name=""
                  id=""
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                >
                  <option value="">
                    Choose from Employee Document or Generated Letters
                  </option>
                  <option value="">12-4-2024</option>
                  <option value="">13-4-2024</option>
                  <option value="">14-4-2024</option>
                  <option value="">15-4-2024</option>
                  <option value="">16-4-2024</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="remark"
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></input>
              </div>
              <div>
                <textarea
                  placeholder="Comments"
                  rows={2}
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <button
                onClick={() =>
                  setEditEmploymentContract(!editEmploymentContract)
                }
                className="font-semibold py-2 px-4 rounded border border-gray-500 text-gray-500 mt-2 flex items-center gap-2"
              >
                Cancel
              </button>
              <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PendingContractRenewal;
