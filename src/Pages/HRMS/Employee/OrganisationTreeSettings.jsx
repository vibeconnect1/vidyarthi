import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import profile3 from "/profile3.jpg";
import { RiDeleteBin5Line } from "react-icons/ri";
import Table from "../../../ConfigurationFile/Table";
import { LiaDownloadSolid } from "react-icons/lia";
import { BiEdit } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { FaCheck, FaDownload, FaUpload } from "react-icons/fa";
import Select from "react-select";
function OrganisationTreeSettings() {
  const [step, setStep] = useState("step1");
  const [uploadEmployeeInfoModal, setUploadEmployeeInfoModal] = useState(false);
  const [editModalStep3, setEditModalStep3] = useState(false);

  const [sections, setSections] = useState([
    { id: 1, companyName: "Company 1" },
  ]);

  const addSection = () => {
    const newId = sections.length + 1;
    setSections([...sections, { id: newId, companyName: `Company ${newId}` }]);
  };

  const removeSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  const handleCompanyNameChange = (id, newName) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, companyName: newName } : section
      )
    );
  };

  const step2Columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Head of Department",
      selector: (row) => row.head_of_department,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];

  const step2Data = [
    {
      id: 1,
      name: "Finance",
      head_of_department: "Ankit Gaurav",
    },
    {
      id: 2,
      name: "HR",
      head_of_department: "Rohan Sahu",
    },
    {
      id: 3,
      name: "Marketing",
      head_of_department: "Dhiraj Kumar",
    },
    {
      id: 4,
      name: "Sales",
      head_of_department: "Riya Gupta",
    },
  ];

  const step3Columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Head of Department",
      selector: (row) => row.head_of_department,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button onClick={() => setEditModalStep3(!editModalStep3)}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
  ];

  const step3data = [
    {
      id: 1,
      name: "Finance",
      head_of_department: "Ankit Gaurav",
    },
    {
      id: 2,
      name: "HR",
      head_of_department: "Rohan Sahu",
    },
    {
      id: 3,
      name: "Marketing",
      head_of_department: "Dhiraj Kumar",
    },
    {
      id: 4,
      name: "Sales",
      head_of_department: "Riya Gupta",
    },
  ];

  const [selectedJobs, setSelectedJobs] = useState([]);

  const jobOptions = [
    { value: "software_engineer", label: "Software Engineer" },
    { value: "data_scientist", label: "Data Scientist" },
    { value: "product_manager", label: "Product Manager" },
    { value: "ux_designer", label: "UX Designer" },
    { value: "dev_ops", label: "DevOps Engineer" },
    { value: "qa_engineer", label: "QA Engineer" },
    { value: "web_developer", label: "Web Developer" },
    { value: "business_analyst", label: "Business Analyst" },
  ];

  const handleChange = (selected) => {
    setSelectedJobs(selected);
  };

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
      <AdminHRMS />
      <div className="flex flex-col ">
        <div className="">
          <header className="text-black bg-white  py-4 ml-20 border border-gray-400">
            <h1 className="text-3xl pl-5 font-bold">
              Organisation Tree Settings
            </h1>
            <p className="pl-5">
              Organisation splits among employees are presented under this
              section.
            </p>
          </header>
          <div className="grid grid-cols-12 gap-5 mx-5 ml-24 px-2 py-3">
            <div className="col-span-6 bg-white my-3 rounded-md">
              <div className="py-2 border-b border-gray-500">
                <h1 className="text-xl pl-5 font-medium text-gray-600">
                  Organisation Tree Activation
                </h1>
                <p className="pl-5 text-gray-600">
                  In order to activate your org tree, please fix the following
                </p>
              </div>
              <div className="px-3 py-5">
                <div className="flex justify-around">
                  <div>
                    <img
                      src={profile3}
                      className="h-12 w-12 rounded-full"
                    ></img>
                  </div>
                  <div>
                    <h2 className="text-gray-500 text-sm">Step 1</h2>
                    <p className="text-sm font-medium text-gray-600 mt-1">
                      Assign Head of Company
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-600 mt-1">
                      Completed
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => setStep("step1")}
                      className="border border-gray-500 rounded-md py-1 px-5 flex items-center gap-2"
                    >
                      View
                    </button>
                  </div>
                </div>
                <div className="border-l-2 border-dotted border-gray-500 h-10 mx-16 my-1"></div>
                <div className="flex justify-around">
                  <div>
                    <img
                      src={profile3}
                      className="h-12 w-12 rounded-full"
                    ></img>
                  </div>
                  <div>
                    <h2 className="text-gray-500 text-sm">Step 2</h2>
                    <p className="text-sm font-medium text-gray-600 mt-1">
                      Assign Department Heads
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-600 mt-1">
                      Completed
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => setStep("step2")}
                      className="border border-gray-500 rounded-md py-1 px-5 flex items-center gap-2"
                    >
                      View
                    </button>
                  </div>
                </div>
                <div className="border-l-2 border-dotted border-gray-500 h-10 mx-16 my-1"></div>
                <div className="flex justify-around">
                  <div>
                    <img
                      src={profile3}
                      className="h-12 w-12 rounded-full"
                    ></img>
                  </div>
                  <div>
                    <h2 className="text-gray-500 text-sm">Step 3</h2>
                    <p className="text-sm font-medium text-gray-600 mt-1">
                      Assign Missing Reporting Supervisors
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-600 mt-1">
                      Completed
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => setStep("step3")}
                      className="border border-gray-500 rounded-md py-1 px-5 flex items-center gap-2"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center border-t border-gray-500 my-5 py-5">
                <button className="bg-gray-400 rounded-md py-2 px-5 text-white">
                  Submit
                </button>
              </div>
            </div>
            <div className="col-span-6 bg-white my-3 py-5 px-5 rounded-md">
              {step === "step1" && (
                <div>
                  <div className="flex gap-5 bg-gray-100 py-5 px-5 rounded-md">
                    <div>
                      <img
                        src={profile3}
                        className="h-12 w-12 rounded-full"
                      ></img>
                    </div>
                    <div>
                      <h2 className="text-gray-500 text-sm">Step 1</h2>
                      <p className="text-sm font-medium text-gray-600 mt-1">
                        Assign Head of Company
                      </p>
                    </div>
                  </div>
                  <div>
                    {sections.map((section) => (
                      <div
                        key={section.id}
                        className="flex justify-between my-5 mx-5"
                      >
                        <h2>
                          Select Head of{" "}
                          <input
                            type="text"
                            value={section.companyName}
                            onChange={(e) =>
                              handleCompanyNameChange(
                                section.id,
                                e.target.value
                              )
                            }
                            className=""
                          />
                        </h2>
                        <div>
                          <input
                            type="text"
                            placeholder="Search Employee"
                            className="border border-gray-500 p-2 text-black rounded-md"
                          />
                        </div>
                        <div>
                          <button onClick={() => removeSection(section.id)}>
                            <RiDeleteBin5Line size={20} />
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="border-t border-gray-500 my-5 py-3">
                      <button
                        className="border-b border-red-500 text-red-500"
                        onClick={addSection}
                      >
                        + Add Head of Company
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {step === "step2" && (
                <div>
                  <div className="flex justify-between bg-gray-100">
                    <div className="flex gap-5  py-5 px-5 rounded-md">
                      <div>
                        <img
                          src={profile3}
                          className="h-12 w-12 rounded-full"
                        ></img>
                      </div>
                      <div>
                        <h2 className="text-gray-500 text-sm">Step 2</h2>
                        <p className="text-sm font-medium text-gray-600 mt-1">
                          Assign Head of Department
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center mx-3">
                      <div>
                        <input
                          type="text"
                          placeholder="Search Employee"
                          className="border border-gray-500 p-1 text-black rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <Table columns={step2Columns} data={step2Data} />
                </div>
              )}
              {step === "step3" && (
                <div>
                  <div className="flex justify-between bg-gray-100">
                    <div className="flex gap-5  py-5 px-5 rounded-md">
                      <div>
                        <img
                          src={profile3}
                          className="h-12 w-12 rounded-full"
                        ></img>
                      </div>
                      <div>
                        <h2 className="text-gray-500 text-sm">Step 3</h2>
                        <p className="text-sm font-medium text-gray-600 mt-1">
                          Assign Missing Reporting Supervisors
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center mx-3">
                      <div>
                        <input
                          type="text"
                          placeholder="Search Employee"
                          className="border border-gray-500 p-1 text-black rounded-md"
                        />
                      </div>
                      <div>
                        <button
                          className="border border-gray-500 rounded-md px-5 py-2"
                          onClick={() =>
                            setUploadEmployeeInfoModal(!uploadEmployeeInfoModal)
                          }
                        >
                          <div className="rotated-icon">
                            <LiaDownloadSolid
                              style={{ transform: "rotate(180deg)" }}
                              size={15}
                              color="#4A5568"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <Table columns={step3Columns} data={step3data} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {uploadEmployeeInfoModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() =>
                  setUploadEmployeeInfoModal(!uploadEmployeeInfoModal)
                }
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Upload Employee Information
              </h2>
            </div>
            <div className="mt-10 px-5">
              <p className="mt-2 text-gray-800">
                Step 1: Select what data you want to update
              </p>
              <div className="w-full my-4">
                <Select
                  isMulti
                  value={selectedJobs}
                  onChange={handleChange}
                  options={jobOptions}
                  styles={customStyles}
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Select Job Information"
                />
              </div>
              <p className="text-gray-800 mb-2 mt-2">
                Step 2: Download employee information global format Includes all
                your Employees with their available details.
              </p>
              <button className="font-semibold py-2 px-4 rounded text-white bg-gray-500 mt-2 flex gap-2 items-center">
                <FaDownload />
                Download
              </button>
              <p className="mt-2 text-gray-800">
                Step 3: Make necessary changes in the downloaded file and upload
                *
              </p>
              <div>
                <input
                  type="file"
                  className="border-b border-gray-500 focus:outline-none my-3 w-full"
                ></input>
              </div>
            </div>
            <div className="flex justify-center gap-2 my-5">
              <button
                onClick={() =>
                  setUploadEmployeeInfoModal(!uploadEmployeeInfoModal)
                }
                className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
              >
                <IoMdClose /> Cancel
              </button>
              <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                <FaUpload /> Upload
              </button>
            </div>
          </div>
        </div>
      )}
      {editModalStep3 && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 h-3/4 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setEditModalStep3(!editModalStep3)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Job Information
              </h2>
            </div>
            <div className="mt-10 px-5">
              <div className="my-5">
                <input
                  type="text"
                  name=""
                  placeholder="Effective From"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <select
                  name=""
                  className="border-b border-gray-500 focus:outline-none w-full my-3"
                >
                  <option value="">Select Branch Location</option>
                  <option value="">Mumbai; Mumbai; Maharashtra</option>
                  <option value="">Delhi; Delhi NCR; Delhi</option>
                  <option value="">Asian Paints Delhi; Noida; Delhi</option>
                  <option value="">
                    Asian Paints Gurgoan; Gurgoan ; Delhi
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <select
                  name=""
                  className="border-b border-gray-500 focus:outline-none w-full my-3"
                >
                  <option value="">Select Department</option>
                  <option value="">Finance</option>
                  <option value="">HR</option>
                  <option value="">L machine</option>
                  <option value="">L packing</option>
                  <option value="">Operations</option>
                  <option value="">Marketing</option>
                  <option value="">Sales</option>
                  <option value="">Unassigned</option>
                </select>
              </div>
              <div className="my-5">
                <input
                  type="text"
                  name=""
                  placeholder="Designation"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-5">
                <input
                  type="search"
                  name=""
                  placeholder="Enter Name and code (Reporting supervisor)"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-5">
                <input
                  type="text"
                  name=""
                  placeholder="Project"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div>
                <textarea
                  rows={2}
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Comments"
                />
              </div>
              <div>
                <h2 className="text-gray-950">Comments and History</h2>
                <div className="mx-5">
                    <span className="text-red-500">02-01-2023, 15:09:59</span>
                    <p>Ramesh created job information effective from 01-01-2023</p>
                    <span className="text-red-500">22-02-2023, 10:54:09</span>
                    <p>Karan updated job information effective from 01-01-2023</p>
                    <span className="text-red-500">27-12-2023, 14:57:51</span>
                    <p>Anil updated job information effective from 01-01-2023</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 my-5">
              <button
                onClick={() => setEditModalStep3(!editModalStep3)}
                className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2"
              >
                <IoMdClose /> Cancel
              </button>
              <button className="font-semibold py-2 px-4 rounded bg-gray-500 text-white mt-2 flex items-center gap-2">
                <FaCheck /> Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrganisationTreeSettings;
