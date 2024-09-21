import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import Header from "../../Form/Header";
import AdminHRMS from "../AdminHRMS";
import Select from "react-select";
import Switch from "../../../ConfigurationFile/Switch";
import wordImg from "/wordFile.png";
import wordImg2 from "/wordfile2.png";
function EditLetterTemplates() {
  const [approvalLevel, setApprovalLevel] = useState("Auto Approval");
  const [document, setDocument] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const options = [
    { value: "rajesh_kumar", label: "Rajesh Kumar" },
    { value: "anita_sharma", label: "Anita Sharma" },
    { value: "vikram_singh", label: "Vikram Singh" },
    { value: "neha_mehta", label: "Neha Mehta" },
    { value: "arun_patel", label: "Arun Patel" },
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
    <div>
      <Header />
      <div className="flex ml-24">
        <div className="flex flex-col overflow-hidden w-full">
          <div className="my-6">
            <h2 className="text-2xl font-medium text-gray-800 flex items-center gap-2">
              <Link to={``}>
                <IoIosArrowBack />
              </Link>
              Document + Letters
            </h2>
          </div>
          <div className="flex gap-1 md:flex-row flex-col">
            <AdminHRMS />
            <div className="flex flex-col w-full overflow-hidden mx-5">
              <form className="bg-white rounded-md p-8 grid grid-cols-2 gap-5">
                <div className="mb-4 ">
                  <input
                    id="documentName"
                    type="text"
                    className="border-b border-gray-500 focus:outline-none w-full"
                    placeholder=" Document Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    id="templateLabel"
                    type="text"
                    className="border-b border-gray-500 focus:outline-none w-full"
                    placeholder="Template Label"
                    required
                  />
                </div>
                <div className="mb-4">
                  <select
                    id="letterType"
                    className="border-b border-gray-500 focus:outline-none w-full"
                    required
                  >
                    <option value="" disabled>
                      Please Select Letter Type
                    </option>
                    <option value="Type 1">General Letter</option>
                    <option value="Type 2">Onboarding Letter</option>
                    <option value="Type 3">Offboarding Letter</option>
                  </select>
                </div>
                <div className="mb-4">
                  <Select
                    id="categories"
                    isMulti
                    options={options}
                    className="border-b border-gray-500 focus:outline-none w-full"
                    classNamePrefix="select"
                    placeholder="Who can generate the letter?"
                    styles={customStyles}
                  />
                </div>
                <div>
                  <label htmlFor="" className="block text-gray-700 mb-2">
                    How many levels of approvals you want to add?
                  </label>
                </div>
                <div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="autoApproval"
                      name="approvalLevel"
                      value="Auto Approval"
                      className="mr-2"
                      checked={approvalLevel === "Auto Approval"}
                      onChange={() => setApprovalLevel("Auto Approval")}
                    />
                    <label htmlFor="autoApproval" className="mr-4">
                      Auto Approval
                    </label>
                    <input
                      type="radio"
                      id="1Level"
                      name="approvalLevel"
                      value="1 Level"
                      className="mr-2"
                      checked={approvalLevel === "1 Level"}
                      onChange={() => setApprovalLevel("1 Level")}
                    />
                    <label htmlFor="1Level">1 Level</label>&nbsp;&nbsp;
                    <input
                      type="radio"
                      id="2Levels"
                      name="approvalLevel"
                      value="2 Levels"
                      className="mr-2"
                      checked={approvalLevel === "2 Levels"}
                      onChange={() => setApprovalLevel("2 Levels")}
                    />
                    &nbsp;
                    <label htmlFor="2Levels">2 Levels</label>
                  </div>
                  {approvalLevel === "1 Level" && (
                    <div>
                      <select
                        type="text"
                        id="primaryApprover"
                        name="primaryApprover"
                        className="border-b border-gray-500 focus:outline-none w-full my-5"
                      >
                        <option value="">
                          Please select the primary approver for this letter
                          template
                        </option>
                        <option value="">Mittu panda</option>
                      </select>
                    </div>
                  )}
                  {approvalLevel === "2 Levels" && (
                    <div>
                      <select
                        type="text"
                        id="primaryApprover"
                        name="primaryApprover"
                        className="border-b border-gray-500 focus:outline-none w-full my-5"
                      >
                        <option>
                          Please select the primary approver for this letter
                          template{" "}
                        </option>
                        <option value="">Mittu panda</option>
                      </select>
                      <select
                        type="text"
                        id="primaryApprover"
                        name="primaryApprover"
                        className="border-b border-gray-500 focus:outline-none w-full"
                      >
                        <option value="">
                          Please select the secondary approver for this letter
                          template
                        </option>
                        <option value="">Mittu panda</option>
                      </select>
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="" className="block text-gray-700 mb-2">
                    Do you want to link with the existing employee documents
                    field?
                  </label>
                </div>
                <div>
                  <Switch onChange={() => setDocument(!document)} />
                  {document && (
                    <div>
                      <div>
                        <select
                          type="text"
                          id="primaryApprover"
                          name="primaryApprover"
                          className="border-b border-gray-500 focus:outline-none w-full my-5"
                        >
                          <option value="">
                            Please select Employee Document Field
                          </option>
                          <option value="">Academic Certificate</option>
                          <option value="">Driving License</option>
                          <option value="">Identity Proof</option>
                          <option value="">Resume</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <button className="px-4 py-2 mt-2 bg-black text-white rounded-md">
                    View Dynamic Employee Fields
                  </button>
                </div>
                <div className="col-span-2">
                  {!isEditing ? (
                    <div className="mt-5">
                      <div className="flex justify-around px-10 py-5 border border-dotted border-gray-500 rounded-md">
                        <img src={wordImg2} alt="Word icon" />
                        <div>
                          <p className="my-5">Company Signature Required?</p>
                          <p className="my-5">Employee Signature Required?</p>
                        </div>
                        <div>
                          <IoMdClose
                            size={20}
                            className="my-5 bg-red-200 text-red-500 rounded-full"
                          />
                          <IoMdClose
                            size={20}
                            className="my-5 bg-red-200 text-red-500 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Section when editing
                    <div className="mt-5">
                      <label
                        htmlFor="file-upload"
                        className="border border-dashed border-gray-500 p-4 mb-4 h-40 w-full rounded-lg flex items-center flex-col justify-center cursor-pointer"
                      >
                        <div className="flex gap-10 mx-10">
                          <img src={wordImg} alt="Word icon" />
                          <p className="my-5">
                            Drag and drop or click here to upload your document
                            here (.docx format &lt;15 MB). You can insert
                            dynamic placeholders into the document. To view the
                            dynamic employee fields, click on the button below
                            to copy/paste them into your .docx file.
                          </p>
                        </div>
                      </label>
                      <input type="file" className="hidden" id="file-upload" />
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="mb-4 px-4 py-2 border-gray-500 border text-black rounded-md mx-3"
                  >
                    Preview 
                  </button>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="mb-4 px-4 py-2 bg-gray-400 text-white rounded-md"
                    >
                      Edit Document
                    </button>
                  ) : (
                    <button className="mb-4 px-4 py-2 bg-red-500 text-white rounded-md">
                      Delete
                    </button>
                  )}
                </div>
                <div className="flex gap-2 mt-4 mb-2 justify-center col-span-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditLetterTemplates;
