import React, { useState } from "react";
import EmployeeDirectorySetting from "./EmployeeDirectorySetting";
import EditEmployeeDirectoryPage from "./EditEmployeeDirectoryPage";
import { PiAddressBookThin } from "react-icons/pi";
import { BiEdit } from "react-icons/bi";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { MdNewspaper, MdOutlineFamilyRestroom } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import Select from "react-select";
import Table from "../../../ConfigurationFile/Table";

function PersonalEmployeeDirectory() {
  const [personal, setPersonal] = useState(true);
  const [isPersonal, setIsPersonal] = useState(false);

  const [familyInformation, SetFamilyInformation] = useState(true);
  const [editFamilyInformation, SetEditFamilyInformation] = useState(false);

  const [addressInformation, SetAddressInformation] = useState(true);
  const [editAddressInformation, SetEditAddressInformation] = useState(false);

  const [payment, SetPayment] = useState(true);
  const [editPaymentModal, setEditPaymentModal] = useState(false);
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
  const columns = [
    {
      name: "Payment Type",
      selector: (row) => row.payment_type,
      sortable: true,
    },
    {
      name: "Payment Mode",
      selector: (row) => row.payment_mode,
      sortable: true,
    },
    {
      name: "Bank Name",
      selector: (row) => row.bank_name,
      sortable: true,
    },
    {
      name: "Bank Account Number",
      selector: (row) => row.bank_account_number,
      sortable: true,
    },
    {
      name: "Bank IFSC Code",
      selector: (row) => row.bank_IFSC_code,
      sortable: true,
    },
    {
      name: "Bene Code	",
      selector: (row) => row.bene_code,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="">
          <button onClick={() => setEditPaymentModal(!editPaymentModal)}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      payment_type: "Salary",
      payment_mode: "Bank Transfer",
      bank_name: "State Bank of India",
      bank_account_number: "1234567890",
      bank_IFSC_code: "SBIN0001234",
      bene_code: "BEN001",
    },
    {
      id: 2,
      payment_type: "Reimbursement",
      payment_mode: "Cheque",
      bank_name: "HDFC Bank",
      bank_account_number: "0987654321",
      bank_IFSC_code: "HDFC0004321",
      bene_code: "BEN002",
    },
    {
      id: 3,
      payment_type: "Bonus",
      payment_mode: "UPI",
      bank_name: "ICICI Bank",
      bank_account_number: "1122334455",
      bank_IFSC_code: "ICIC0005678",
      bene_code: "BEN003",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const bankOptions = [
    { value: "Bank 1", label: "Bank 1" },
    { value: "Bank 2", label: "Bank 2" },
    { value: "Bank 3", label: "Bank 3" },
    { value: "Bank 4", label: "Bank 4" },
  ];

  const handleSelectChange = (selected) => {
    setSelectedOption(selected);
  };
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
              Personal
            </h1>
            <div className="bg-white rounded-md">
              <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                  <PiAddressBookThin size={20} />
                  Basic Information
                </h2>
                <div className="flex gap-2">
                  <div>
                    {!isPersonal ? (
                      <button
                        onClick={() => setIsPersonal(!isPersonal)}
                        className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-3"
                      >
                        <BiEdit size={15} /> Edit
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-2"
                          onClick={() => setIsPersonal(!isPersonal)}
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
                  <button onClick={() => setPersonal(!personal)}>
                    <IoIosArrowDown
                      className={`transition-transform ${
                        personal ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
              {personal && (
                <div>
                  <div className="p-6 bg-white rounded-lg w-full">
                    <div className="flex justify-between"></div>
                    <div>
                      <div className="grid grid-cols-2 w-full gap-5">
                        <div className="mb-2">
                          <input
                            type="text"
                            name=""
                            placeholder="First Name"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !isPersonal
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!isPersonal}
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            type="text"
                            name=""
                            placeholder="Last Name"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !isPersonal
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!isPersonal}
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            type="email"
                            name=""
                            placeholder="Email ID"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !isPersonal
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!isPersonal}
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            type="number"
                            name=""
                            placeholder="Mobile"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !isPersonal
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!isPersonal}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="block  text-gray-600 text-base">
                            Gender
                          </label>
                          <div>
                            <label className="mr-4">
                              <input
                                type="radio"
                                name="gender"
                                className="mr-1"
                                disabled={!isPersonal}
                              />
                              Male
                            </label>
                            <label className="text-gray-700">
                              <input
                                type="radio"
                                name="gender"
                                className="mr-1"
                                disabled={!isPersonal}
                              />
                              Female
                            </label>
                          </div>
                        </div>
                        <div className="mb-2">
                          <input
                            type="text"
                            name=""
                            placeholder="Date of Birth"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !isPersonal
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!isPersonal}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <select
                            name="maritalStatus"
                            className="border-b border-gray-500 focus:outline-none w-full"
                            disabled={!isPersonal} // Makes the select read-only if isPersonal is false
                          >
                            <option value="">Select Marital Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                          </select>
                        </div>
                        <div className="mb-2">
                          <input
                            type="number"
                            name=""
                            placeholder="PAN"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !isPersonal
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!isPersonal}
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            type="number"
                            name=""
                            placeholder="Aadhar No"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !isPersonal
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!isPersonal}
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            type="number"
                            name=""
                            placeholder="klg"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !isPersonal
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!isPersonal}
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            type="text"
                            name=""
                            placeholder="Test TMS"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !isPersonal
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!isPersonal}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className=" bg-white rounded-md mx-5 py-5 px-5 my-2">
            <div className="bg-white rounded-md">
              <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                  <MdOutlineFamilyRestroom size={20} />
                  Family Information
                </h2>
                <div className="flex gap-2">
                  <div>
                    {!editFamilyInformation ? (
                      <button
                        onClick={() =>
                          SetEditFamilyInformation(!editFamilyInformation)
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
                            SetEditFamilyInformation(!editFamilyInformation)
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
                    onClick={() => SetFamilyInformation(!familyInformation)}
                  >
                    <IoIosArrowDown
                      className={`transition-transform ${
                        familyInformation ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
              {familyInformation && (
                <div>
                  <div className="p-6 bg-white rounded-lg w-full">
                    <div className="flex justify-between"></div>
                    <div>
                      <div className="grid grid-cols-2 w-full gap-5">
                        <div className="mb-2">
                          <input
                            type="text"
                            name=""
                            placeholder="Father's Name"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !editFamilyInformation
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!editFamilyInformation}
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            type="text"
                            name=""
                            placeholder="Mother's Name"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !editFamilyInformation
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!editFamilyInformation}
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            type="text"
                            name=""
                            placeholder="Son Birthday"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !editFamilyInformation
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!editFamilyInformation}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className=" bg-white rounded-md mx-5 py-5 px-5 my-2">
            <div className="bg-white rounded-md">
              <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                  <FaHome size={20} />
                  Address Information
                </h2>
                <div className="flex gap-2">
                  <div>
                    {!editAddressInformation ? (
                      <button
                        onClick={() =>
                          SetEditAddressInformation(!editAddressInformation)
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
                            SetEditAddressInformation(!editAddressInformation)
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
                    onClick={() => SetAddressInformation(!addressInformation)}
                  >
                    <IoIosArrowDown
                      className={`transition-transform ${
                        addressInformation ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
              {addressInformation && (
                <div>
                  <div className="p-6 bg-white rounded-lg w-full">
                    <div className="flex justify-between"></div>
                    <div>
                      <div className="grid grid-cols-2 w-full gap-5">
                        <div className="mb-2">
                          <input
                            type="text"
                            name=""
                            placeholder="Address Line 1"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !editAddressInformation
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!editAddressInformation}
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            type="text"
                            name=""
                            placeholder="Address Line 2"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !editAddressInformation
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!editAddressInformation}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <select
                            name="country"
                            className="border-b border-gray-500 focus:outline-none w-full my-3"
                            disabled={!editAddressInformation}
                          >
                            <option value="">Select Country</option>
                            <option value="">United States</option>
                            <option value="">Canada</option>
                            <option value="">United Kingdom</option>
                            <option value="">Australia</option>
                            <option value="">India</option>
                            <option value="">Germany</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Select
                            name="branchState"
                            // options={options}
                            classNamePrefix="react-select"
                            isDisabled={!editAddressInformation}
                            placeholder="Select Branch State"
                            styles={customStyles}
                            className="border-b border-gray-500 focus:outline-none w-full"
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            type="text"
                            name=""
                            placeholder="City"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !editAddressInformation
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!editAddressInformation}
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            type="text"
                            name=""
                            placeholder="Pin Code"
                            className={`border-b border-gray-500 focus:outline-none w-full${
                              !editAddressInformation
                                ? "border-b border-gray-500 focus:outline-none w-full"
                                : ""
                            }`}
                            readOnly={!editAddressInformation}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className=" bg-white rounded-md mx-5 py-5 px-5 my-2">
            <div className="bg-white rounded-md">
              <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                  <MdNewspaper size={20} />
                  Payment Information
                </h2>
                <div className="flex gap-2">
                  <button onClick={() => SetPayment(!payment)}>
                    <IoIosArrowDown
                      className={`transition-transform ${
                        payment ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
              {payment && (
                <div>
                  <Table columns={columns} data={data} />
                </div>
              )}
            </div>
          </div>
        </div>
        {editPaymentModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-96 rounded-lg shadow-lg p-6">
              <div className="flex justify-end">
                <button
                  className=""
                  onClick={() => setEditPaymentModal(!editPaymentModal)}
                >
                  <IoMdClose size={20} />
                </button>
              </div>
              <h2 className="text-xl font-medium flex justify-center border-b border-gray-500 py-5">
                Edit Payment Type
              </h2>
              <div className="mt-3">
                <div className="flex flex-col gap-2 mt-2">
                  <Select
                    name="branchState"
                    // options={options}
                    classNamePrefix="react-select"
                    isDisabled={!editAddressInformation}
                    placeholder="Select Payment Type"
                    styles={customStyles}
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <select
                    name="paymentType"
                    className="border-b border-gray-500 focus:outline-none w-full my-3"
                    onChange={(e) =>
                      setIsBankTransfer(e.target.value === "Bank Transfer")
                    }
                  >
                    <option value="">Select Payment Type</option>
                    <option value="Cheque">Cheque</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Cash">Cash</option>
                  </select>
                </div>

                {isBankTransfer && (
                  <div>
                    <div className="w-full my-3">
                      <Select
                        value={selectedOption}
                        onChange={handleSelectChange}
                        options={bankOptions}
                        placeholder="Select Bank Name "
                        styles={customStyles}
                        className="border-b border-gray-500 focus:outline-none w-full"
                      />
                    </div>
                    <div className="my-5">
                      <input
                        type="number"
                        name=""
                        placeholder="Bank Account Number"
                        className="border-b border-gray-500 focus:outline-none w-full"
                      />
                    </div>
                    <div className="my-5">
                      <input
                        type="number"
                        name=""
                        placeholder="Bank IFSC Code"
                        className="border-b border-gray-500 focus:outline-none w-full"
                      />
                    </div>
                    <div className="my-5">
                      <input
                        type="number"
                        name=""
                        placeholder="Bene Code"
                        className="border-b border-gray-500 focus:outline-none w-full"
                      />
                    </div>
                  </div>
                )}
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => setEditPaymentModal(!editPaymentModal)}
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
      </div>
    </div>
  );
}

export default PersonalEmployeeDirectory;
