import React, { useState } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import {
  IoIosArrowDown,
  IoMdClose,
} from "react-icons/io";
import {
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";
import EmployeeDirectorySetting from "./EmployeeDirectorySetting";
import { BiEdit } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";
import Table from "../../../ConfigurationFile/Table";
import { BsEye, BsPinFill } from "react-icons/bs";
import { PiPlusCircle } from "react-icons/pi";
import { RiContactsBook3Line, RiDeleteBin6Line } from "react-icons/ri";
import Select from "react-select";
import EditEmployeeDirectoryPage from "./EditEmployeeDirectoryPage";
function EmploymentDirectory() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [generalEmployment, setGeneralEmployment] = useState(true);
  const [editGeneralEmployment, setEditGeneralEmployment] = useState(false);
  const [employmentStatus, setEmploymentStatus] = useState(true);
  const [updateEmploymentModal, setUpdateEmploymentModal] = useState(false);
  const [employmentStatus1, setEmploymentStatus1] = useState("probation");
  const [detailsEmploymentModal, setDetailsEmploymentModal] = useState(false);
  const [jobInformation, setJobInformation] = useState(true);
  const [addJobModal, setAddJobModal] = useState(false);
  const [EditJobModal, setEditJobModal] = useState(false);
  const [assets, setAssets] = useState(true);
  const [rowAssetsModal, setRowAssetsModal] = useState(false);
  const [editAssetsModal, setEditAssetsModal] = useState(false);
  const [deleteAssetsModal, setDeleteAssetsModal] = useState(false);
  const [pinAssetsModal, setPinAssetsModal] = useState(false);
  const [companyAssets, setCompanyAssets] = useState(true);
  const [rowCompanyAssetsModal, setRowCompanyAssetsModal] = useState(false);
  const [editCompanyAssetsModal, setEditCompanyAssetsModal] = useState(false);
  const [deleteCompanyAssetsModal, setDeleteCompanyAssetsModal] =
    useState(false);
  const [pinCompanyAssetsModal, setPinCompanyAssetsModal] = useState(false);
  const [joiningForm, setJoiningForm] = useState(true);
  const [rowJoiningForm, setRowJoiningForm] = useState(false);
  const columns = [
    {
      name: "Effective From",
      selector: (row) => row.effective_from,
      sortable: true,
    },
    {
      name: "Effective To",
      selector: (row) => row.effective_to,
      sortable: true,
    },
    {
      name: "Confirmation Due Date",
      selector: (row) => row.confirmation_due_date,
      sortable: true,
    },
    {
      name: "Confirmation Date",
      selector: (row) => row.confirmation_date,
      sortable: true,
    },
    {
      name: "Employment Status",
      selector: (row) => row.employment_status,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDetailsEmploymentModal(!detailsEmploymentModal)}
          >
            <BsEye size={15} />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      effective_from: "19-06-2019",
      effective_to: "",
      confirmation_due_date: "NA",
      confirmation_date: "16-12-2019",
      employment_status: "Confirmed",
    },
  ];

  const JobInformationColumns = [
    {
      name: "Effective From",
      selector: (row) => row.effective_from,
      sortable: true,
    },
    {
      name: "Effective To",
      selector: (row) => row.effective_to,
      sortable: true,
    },
    {
      name: "Branch Location",
      selector: (row) => row.branch_location,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Designation",
      selector: (row) => row.designation,
      sortable: true,
    },
    {
      name: "Reporting Supervisor",
      selector: (row) => row.reporting_supervisor,
      sortable: true,
    },
    {
      name: "Project",
      selector: (row) => row.project,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button onClick={() => setEditJobModal(!EditJobModal)}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
  ];

  const JobInformationData = [
    {
      effective_from: "2023-01-01",
      effective_to: "2023-12-31",
      branch_location: "New York",
      department: "Engineering",
      designation: "Senior Engineer",
      reporting_supervisor: "John Doe",
      project: "Project Alpha",
    },
  ];

  const AssetColumns = [
    {
      name: "Which brand Laptop?",
      selector: (row) => row.brand_laptop,
      sortable: true,
    },
    {
      name: "Retrieve email ID",
      selector: (row) => row.retrieve_email_id,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button onClick={() => setEditAssetsModal(!editAssetsModal)}>
            <BiEdit size={15} />
          </button>
          <button onClick={() => setDeleteAssetsModal(!deleteAssetsModal)}>
            <RiDeleteBin6Line size={15} />
          </button>
          <button onClick={() => setPinAssetsModal(!pinAssetsModal)}>
            <BsPinFill size={15} />
          </button>
        </div>
      ),
    },
  ];

  const AssetData = [
    {
      brand_laptop: "2023-01-01",
      retrieve_email_id: "DELL Laptop- Vend/Pun/L/02",
    },
  ];

  const companyAssetColumns = [
    {
      name: "Which Company Laptop and Model Number",
      selector: (row) => row.laptop_model,
      sortable: true,
    },
    {
      name: "Mobile Phone",
      selector: (row) => row.mobile_phone,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button
            onClick={() => setEditCompanyAssetsModal(!editCompanyAssetsModal)}
          >
            <BiEdit size={15} />
          </button>
          <button
            onClick={() =>
              setDeleteCompanyAssetsModal(!deleteCompanyAssetsModal)
            }
          >
            <RiDeleteBin6Line size={15} />
          </button>
          <button
            onClick={() => setPinCompanyAssetsModal(!pinCompanyAssetsModal)}
          >
            <BsPinFill size={15} />
          </button>
        </div>
      ),
    },
  ];

  const companyAssetData = [
    {
      laptop_model: "Vodafone Sim Card-8657460137",
      mobile_phone: "",
    },
  ];

  const joinFormColumns = [
    {
      name: "Pan Card Number",
      selector: (row) => row.pan,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <div className="flex items-center gap-4">
    //       <button
    //         onClick={() => setEditCompanyAssetsModal(!editCompanyAssetsModal)}
    //       >
    //         <BiEdit size={15} />
    //       </button>
    //       <button
    //         onClick={() =>
    //           setDeleteCompanyAssetsModal(!deleteCompanyAssetsModal)
    //         }
    //       >
    //         <RiDeleteBin6Line size={15} />
    //       </button>
    //       <button
    //         onClick={() => setPinCompanyAssetsModal(!pinCompanyAssetsModal)}
    //       >
    //         <BsPinFill size={15} />
    //       </button>
    //     </div>
    //   ),
    // },
  ];

  const joinFormData = [
    {
      pan: "",
    },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      textAlign: "left",
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
    menu: (provided) => ({
      ...provided,
      border: "none",
    }),
  };

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
                Employment
              </h1>
              <div className="bg-white rounded-md">
                <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                  <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                    <FaRegAddressCard size={20} />
                    General Employment Details
                  </h2>
                  <div className="flex gap-2">
                    <div>
                      {!editGeneralEmployment ? (
                        <button
                          onClick={() =>
                            setEditGeneralEmployment(!editGeneralEmployment)
                          }
                          className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-3"
                        >
                          <BiEdit size={15} /> Edit
                        </button>
                      ) : (
                        <div className="flex gap-2">
                          <button
                            className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-2"
                            onClick={() =>
                              setEditGeneralEmployment(!editGeneralEmployment)
                            }
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
                    <button
                      onClick={() => setGeneralEmployment(!generalEmployment)}
                    >
                      <IoIosArrowDown
                        className={`transition-transform ${
                          generalEmployment ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
                {generalEmployment && (
                  <div>
                    <div className="p-6 bg-white rounded-lg w-full">
                      <div>
                        <div className="grid grid-cols-2 w-full gap-5">
                          <div className="mb-2">
                            <input
                              type="number"
                              name=""
                              placeholder="Employee Code"
                              className={`border-b border-gray-500 focus:outline-none w-full${
                                !editGeneralEmployment
                                  ? "border-b border-gray-500 focus:outline-none w-full"
                                  : ""
                              }`}
                              readOnly={!editGeneralEmployment}
                            />
                          </div>
                          <div className="mb-2">
                            <input
                              type="text"
                              name=""
                              placeholder="Joining Date"
                              className={`border-b border-gray-500 focus:outline-none w-full${
                                !editGeneralEmployment
                                  ? "border-b border-gray-500 focus:outline-none w-full"
                                  : ""
                              }`}
                              readOnly={!editGeneralEmployment}
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <select
                              name="maritalStatus"
                              className="border-b border-gray-500 focus:outline-none w-full"
                              disabled={!editGeneralEmployment} // Makes the select read-only if isPersonal is false
                            >
                              <option value="">Select Employment Type</option>
                              <option value="single">Full Time</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-2">
                            <select
                              name="maritalStatus"
                              className="border-b border-gray-500 focus:outline-none w-full"
                              disabled={!editGeneralEmployment} // Makes the select read-only if isPersonal is false
                            >
                              <option value="">Select Skill Level</option>
                              <option value="single">Highly Skills</option>
                              <option value="single">Skills</option>
                              <option value="single">UnSkills</option>
                              <option value="single">Semi Skills</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-2">
                            <select
                              name="maritalStatus"
                              className="border-b border-gray-500 focus:outline-none w-full"
                              disabled={!editGeneralEmployment} // Makes the select read-only if isPersonal is false
                            >
                              <option value="">Select Currency</option>
                              <option value="single">INR</option>
                              <option value="single">SGD</option>
                            </select>
                          </div>
                          <div className="mb-2">
                            <input
                              type="text"
                              name=""
                              placeholder="CA Number"
                              className={`border-b border-gray-500 focus:outline-none w-full${
                                !editGeneralEmployment
                                  ? "border-b border-gray-500 focus:outline-none w-full"
                                  : ""
                              }`}
                              readOnly={!editGeneralEmployment}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-white rounded-md my-2">
                <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                  <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                    <GrStatusGood size={20} />
                    Employment Status
                  </h2>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-3"
                      onClick={() =>
                        setUpdateEmploymentModal(!updateEmploymentModal)
                      }
                    >
                      <PiPlusCircle size={20} /> Update Employment Status
                    </button>
                    <button
                      onClick={() => setEmploymentStatus(!employmentStatus)}
                    >
                      <IoIosArrowDown
                        className={`transition-transform ${
                          employmentStatus ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
                {employmentStatus && (
                  <div>
                    <Table columns={columns} data={data} />
                  </div>
                )}
              </div>
              <div className="bg-white rounded-md my-2">
                <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                  <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                    <RiContactsBook3Line size={20} />
                    Job Information
                  </h2>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-3"
                      onClick={() => setAddJobModal(!addJobModal)}
                    >
                      <PiPlusCircle size={20} />
                      Add Position
                    </button>
                    <button onClick={() => setJobInformation(!jobInformation)}>
                      <IoIosArrowDown
                        className={`transition-transform ${
                          jobInformation ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
                {jobInformation && (
                  <div>
                    <Table
                      columns={JobInformationColumns}
                      data={JobInformationData}
                    />
                  </div>
                )}
              </div>
              <div className="bg-white rounded-md my-2">
                <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                  <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                    <RiContactsBook3Line size={20} />
                    Assets
                  </h2>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-3"
                      onClick={() => setRowAssetsModal(!rowAssetsModal)}
                    >
                      <PiPlusCircle size={20} />
                      Add Row
                    </button>
                    <button onClick={() => setAssets(!assets)}>
                      <IoIosArrowDown
                        className={`transition-transform ${
                          assets ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
                {assets && (
                  <div>
                    <Table columns={AssetColumns} data={AssetData} />
                  </div>
                )}
              </div>
              <div className="bg-white rounded-md my-2">
                <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                  <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                    <RiContactsBook3Line size={20} />
                    Company Assets
                  </h2>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-3"
                      onClick={() =>
                        setRowCompanyAssetsModal(!rowCompanyAssetsModal)
                      }
                    >
                      <PiPlusCircle size={20} />
                      Add Row
                    </button>
                    <button onClick={() => setCompanyAssets(!companyAssets)}>
                      <IoIosArrowDown
                        className={`transition-transform ${
                          companyAssets ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
                {companyAssets && (
                  <div>
                    <Table
                      columns={companyAssetColumns}
                      data={companyAssetData}
                    />
                  </div>
                )}
              </div>
              <div className="bg-white rounded-md my-2">
                <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                  <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                    <RiContactsBook3Line size={20} />
                    Joining Form
                  </h2>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-3"
                      onClick={() => setRowJoiningForm(!rowJoiningForm)}
                    >
                      <PiPlusCircle size={20} />
                      Add Row
                    </button>
                    <button onClick={() => setJoiningForm(!joiningForm)}>
                      <IoIosArrowDown
                        className={`transition-transform ${
                          joiningForm ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
                {joiningForm && (
                  <div>
                    <Table columns={joinFormColumns} data={joinFormData} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {updateEmploymentModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button
                className=""
                onClick={() => setUpdateEmploymentModal(!updateEmploymentModal)}
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
              Job Information
            </h2>
            <div className="mt-3">
              <div className="flex flex-col gap-2 mt-2">
                <select
                  name="paymentType"
                  className="border-b border-gray-500 focus:outline-none w-full my-3"
                  value={employmentStatus1}
                  onChange={(e) => setEmploymentStatus1(e.target.value)}
                >
                  <option value="">
                    Please select Employment Status you wish to update
                  </option>
                  <option value="probation">Probation</option>
                  <option value="confirmed">Confirmed</option>
                </select>
              </div>
              {/* Show probation input field if 'Probation' is selected */}
              {employmentStatus1 === "probation" && (
                <div className="my-5">
                  <input
                    type="text"
                    placeholder="What is the employee's confirmation due date?"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </div>
              )}

              {/* Show confirmation input field if 'Confirmed' is selected */}
              {employmentStatus1 === "confirmed" && (
                <div className="my-5">
                  <input
                    type="text"
                    placeholder="What is the employee's confirmation date?"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </div>
              )}
              <div className="my-5">
                <textarea
                  name=""
                  placeholder="Please enter comments, if any"
                  className="border-b border-gray-500 focus:outline-none w-full p-2"
                ></textarea>
              </div>

              <div className="flex justify-center gap-2">
                <button
                  onClick={() =>
                    setUpdateEmploymentModal(!updateEmploymentModal)
                  }
                  className="font-semibold py-2 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                >
                  <AiOutlineClose size={20} /> Cancel
                </button>
                <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                  <AiOutlineCheck size={20} /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {detailsEmploymentModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button
                className=""
                onClick={() =>
                  setDetailsEmploymentModal(!detailsEmploymentModal)
                }
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
              Employment Status and Comment History
            </h2>
            <div className="mt-1">
              <h2>Effective From</h2>
              <div className="my-2">
                <input
                  type="text"
                  placeholder="19-06-2019"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  readOnly
                />
              </div>
              <div className="mt-1">
                <h2>Employment Status</h2>
                <div className="my-2">
                  <input
                    type="text"
                    placeholder="16-12-2019"
                    className="border-b border-gray-500 focus:outline-none w-full"
                    readOnly
                  />
                </div>
              </div>
              <div className="mt-1">
                <h2>Employment Status</h2>
                <div className="my-2">
                  <input
                    type="text"
                    placeholder="Confirmed"
                    className="border-b border-gray-500 focus:outline-none w-full"
                    readOnly
                  />
                </div>
              </div>
              <h2 className="mb-2">Comments and History</h2>
              <div className="flex justify-center gap-2">
                <button
                  onClick={() =>
                    setDetailsEmploymentModal(!detailsEmploymentModal)
                  }
                  className="font-semibold py-1 px-4 rounded-md border border-gray-500 text-black mt-2 flex items-center gap-2"
                >
                  <AiOutlineClose size={15} /> Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {addJobModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button className="" onClick={() => setAddJobModal(!addJobModal)}>
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
              Job Information
            </h2>
            <div className="mt-3">
              <div className="my-2">
                <input
                  type="text"
                  placeholder="Effective From "
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-2">
                <select
                  name=""
                  className="border-b border-gray-500 focus:outline-none w-full my-3"
                >
                  <option value="">Branch Location</option>
                  <option value="probation">Mumbai; Mumbai; Maharashtra</option>
                  <option value="confirmed">Test 1 ; Pune; Maharashtra</option>
                  <option value="confirmed">Delhi; Delhi NCR; Delhi</option>
                  <option value="confirmed">
                    Asian Paints Delhi; Noida; Delhi
                  </option>
                  <option value="confirmed">
                    Asian Paints Gurgoan; Gurgoan ; Delhi
                  </option>
                </select>
              </div>
              <div className="my-2">
                <select
                  name=""
                  className="border-b border-gray-500 focus:outline-none w-full my-3"
                >
                  <option value="">Department</option>
                  <option value="probation">Sale</option>
                  <option value="confirmed">Finance</option>
                  <option value="confirmed">Hr</option>
                  <option value="confirmed">Marketing</option>
                  <option value="confirmed">operations</option>
                </select>
              </div>
              <div className="my-2">
                <input
                  type="text"
                  placeholder="Designation"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <Select
                  name="branchState"
                  // options={options}
                  classNamePrefix="react-select"
                  placeholder="Select Reporting supervisor"
                  styles={customStyles}
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-5">
                <input
                  type="text"
                  placeholder="Project"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-2">
                <textarea
                  name=""
                  placeholder="Comment"
                  className="border-b border-gray-500 focus:outline-none w-full p-2"
                ></textarea>
              </div>

              <div className="flex justify-center gap-2">
                <button
                  onClick={() => setAddJobModal(!addJobModal)}
                  className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                >
                  <AiOutlineClose size={15} /> Cancel
                </button>
                <button className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                  <AiOutlineCheck size={15} /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {EditJobModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button
                className=""
                onClick={() => setEditJobModal(!EditJobModal)}
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
              Job Information
            </h2>
            <div className="mt-3">
              <div className="my-2">
                <input
                  type="text"
                  placeholder="Effective From "
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-2">
                <select
                  name=""
                  className="border-b border-gray-500 focus:outline-none w-full my-3"
                >
                  <option value="">Branch Location</option>
                  <option value="probation">Mumbai; Mumbai; Maharashtra</option>
                  <option value="confirmed">Test 1 ; Pune; Maharashtra</option>
                  <option value="confirmed">Delhi; Delhi NCR; Delhi</option>
                  <option value="confirmed">
                    Asian Paints Delhi; Noida; Delhi
                  </option>
                  <option value="confirmed">
                    Asian Paints Gurgoan; Gurgoan ; Delhi
                  </option>
                </select>
              </div>
              <div className="my-2">
                <select
                  name=""
                  className="border-b border-gray-500 focus:outline-none w-full my-3"
                >
                  <option value="">Department</option>
                  <option value="probation">Sale</option>
                  <option value="confirmed">Finance</option>
                  <option value="confirmed">Hr</option>
                  <option value="confirmed">Marketing</option>
                  <option value="confirmed">operations</option>
                </select>
              </div>
              <div className="my-2">
                <input
                  type="text"
                  placeholder="Designation"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <Select
                  name="branchState"
                  // options={options}
                  classNamePrefix="react-select"
                  placeholder="Select Reporting supervisor"
                  styles={customStyles}
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-5">
                <input
                  type="text"
                  placeholder="Project"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-2">
                <textarea
                  name=""
                  placeholder="Comment"
                  className="border-b border-gray-500 focus:outline-none w-full p-2"
                ></textarea>
              </div>
              <p className="my-5">Comments and History</p>
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => setEditJobModal(!EditJobModal)}
                  className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                >
                  <AiOutlineClose size={15} /> Cancel
                </button>
                <button className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                  <AiOutlineCheck size={15} /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {rowAssetsModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button
                className=""
                onClick={() => setRowAssetsModal(!rowAssetsModal)}
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
              Assets
            </h2>
            <div className="mt-3">
              <div className="my-5">
                <input
                  type="text"
                  placeholder="Which brand Laptop?"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-5">
                <input
                  type="email"
                  placeholder="Retrieve email ID *"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex justify-center gap-2 my-5">
                <button
                  onClick={() => setRowAssetsModal(!rowAssetsModal)}
                  className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                >
                  <AiOutlineClose size={15} /> Cancel
                </button>
                <button className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                  <AiOutlineCheck size={15} /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {editAssetsModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button
                className=""
                onClick={() => setEditAssetsModal(!editAssetsModal)}
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
              Assets
            </h2>
            <div className="mt-3">
              <div className="my-5">
                <input
                  type="text"
                  placeholder="Which brand Laptop?"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-5">
                <input
                  type="email"
                  placeholder="Retrieve email ID *"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex justify-center gap-2 my-5">
                <button
                  onClick={() => setEditAssetsModal(!editAssetsModal)}
                  className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                >
                  <AiOutlineClose size={15} /> Cancel
                </button>
                <button className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                  <AiOutlineCheck size={15} /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {deleteAssetsModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button
                className=""
                onClick={() => setDeleteAssetsModal(!deleteAssetsModal)}
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
              Are you sure?
            </h2>
            <div className="mt-3">
              <p className="font-normal text-gray-500">
                Do you really want to delete this Custom Field Value Row?
              </p>
              <div className="flex justify-center gap-2 my-5">
                <button
                  onClick={() => setDeleteAssetsModal(!deleteAssetsModal)}
                  className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                >
                  <AiOutlineClose size={15} /> Cancel
                </button>
                <button className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                  <AiOutlineCheck size={15} /> Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {pinAssetsModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button
                className=""
                onClick={() => setPinAssetsModal(!pinAssetsModal)}
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
              Are you sure?
            </h2>
            <div className="mt-3">
              <p className="font-normal text-gray-500">
                Do you really want to set this Custom Field Value Row As
                Default?
              </p>
              <div className="flex justify-center gap-2 my-5">
                <button
                  onClick={() => setPinAssetsModal(!pinAssetsModal)}
                  className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                >
                  <AiOutlineClose size={15} /> Cancel
                </button>
                <button className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                  <AiOutlineCheck size={15} /> Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {rowCompanyAssetsModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button
                className=""
                onClick={() => setRowCompanyAssetsModal(!rowCompanyAssetsModal)}
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
              Company Assets
            </h2>
            <div className="mt-3">
              <div className="my-5">
                <input
                  type="text"
                  placeholder="Which Company Laptop and Model Number"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-5">
                <input
                  type="number"
                  placeholder="Mobile Phone"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex justify-center gap-2 my-5">
                <button
                  onClick={() =>
                    setRowCompanyAssetsModal(!rowCompanyAssetsModal)
                  }
                  className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                >
                  <AiOutlineClose size={15} /> Cancel
                </button>
                <button className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                  <AiOutlineCheck size={15} /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {editCompanyAssetsModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button
                className=""
                onClick={() =>
                  setEditCompanyAssetsModal(!editCompanyAssetsModal)
                }
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
              Company Assets
            </h2>
            <div className="mt-3">
              <div className="my-5">
                <input
                  type="text"
                  placeholder="Which Company Laptop and Model Number"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-5">
                <input
                  type="number"
                  placeholder="Mobile Phone"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex justify-center gap-2 my-5">
                <button
                  onClick={() =>
                    setEditCompanyAssetsModal(!editCompanyAssetsModal)
                  }
                  className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                >
                  <AiOutlineClose size={15} /> Cancel
                </button>
                <button className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                  <AiOutlineCheck size={15} /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {deleteCompanyAssetsModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button
                className=""
                onClick={() =>
                  setDeleteCompanyAssetsModal(!deleteCompanyAssetsModal)
                }
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
              Are you sure?
            </h2>
            <div className="mt-3">
              <p className="font-normal text-gray-500">
                Do you really want to delete this Custom Field Value Row?
              </p>
              <div className="flex justify-center gap-2 my-5">
                <button
                  onClick={() =>
                    setDeleteCompanyAssetsModal(!deleteCompanyAssetsModal)
                  }
                  className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                >
                  <AiOutlineClose size={15} /> Cancel
                </button>
                <button className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                  <AiOutlineCheck size={15} /> Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {pinCompanyAssetsModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button
                className=""
                onClick={() => setPinCompanyAssetsModal(!pinCompanyAssetsModal)}
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
              Are you sure?
            </h2>
            <div className="mt-3">
              <p className="font-normal text-gray-500">
                Do you really want to set this Custom Field Value Row As
                Default?
              </p>
              <div className="flex justify-center gap-2 my-5">
                <button
                  onClick={() =>
                    setPinCompanyAssetsModal(!pinCompanyAssetsModal)
                  }
                  className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                >
                  <AiOutlineClose size={15} /> Cancel
                </button>
                <button className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                  <AiOutlineCheck size={15} /> Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {rowJoiningForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button
                className=""
                onClick={() => setRowJoiningForm(!rowJoiningForm)}
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
            Joining Form
            </h2>
            <div className="mt-3">
              <div className="my-5">
                <input
                  type="text"
                  placeholder="Pan Card Number"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex justify-center gap-2 my-5">
                <button
                  onClick={() => setRowJoiningForm(!rowJoiningForm)}
                  className="font-semibold py-1 px-4 rounded border border-gray-500 text-black mt-2 flex items-center gap-2"
                >
                  <AiOutlineClose size={15} /> Cancel
                </button>
                <button className="font-semibold py-1 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                  <AiOutlineCheck size={15} /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmploymentDirectory;
