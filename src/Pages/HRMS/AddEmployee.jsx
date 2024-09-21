import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GrHelpBook } from "react-icons/gr";
import { ImFileText2 } from "react-icons/im";
import { MdOutlineWork } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import AdminHRMS from "./AdminHRMS";

const AddEmployee = () => {
  const [steps, setSteps] = useState("basic");
  const [disableSave, setDisableSave] = useState(false);
  const [disableNext, setDisableNext] = useState(true);

  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };

  return (
    <div className="flex ml-20 justify-between">
      {/* <AddEmployeeDetailsList /> */}
      <div className="flex">
        <AdminHRMS />
        <div className="w-56 h-full bg-white  p-4 mt-9 border-r">
          <ul className="space-y-2">
            <li className="font-bold text-lg">Steps</li>

            <button
              className={`flex items-center gap-2 p-2 w-full  rounded-md ${
                steps === "basic"
                  ? " text-white bg-blue-500 font-medium cursor-pointer"
                  : "text-white bg-gray-500 font-medium cursor-not-allowed"
              }`}
              disabled={steps !== "basic"}
              onClick={() => setSteps("basic")}
            >
              <div>{React.createElement(ImFileText2, { size: "20" })}</div>
              Basics
            </button>
            <div className="border-b border-gray-400 w-full" />
            <button
              className={`flex items-center gap-2 p-2 w-full  rounded-md ${
                steps === "employment"
                  ? " text-white bg-blue-500 font-medium cursor-pointer"
                  : "text-white bg-gray-500 font-medium cursor-not-allowed"
              }`}
              onClick={() => setSteps("employment")}
              disabled={steps !== "employment"}
            >
              <div>{React.createElement(MdOutlineWork, { size: "20" })}</div>
              Employment
            </button>
            <div className="border-b border-gray-400 w-full" />
            <button
              className={`flex items-center gap-2 p-2  w-full rounded-md ${
                steps === "salary"
                  ? " text-white bg-blue-500 font-medium cursor-pointer"
                  : "text-white bg-gray-500 font-medium cursor-not-allowed"
              }`}
              onClick={() => setSteps("salary")}
              disabled={steps !== "salary"}
            >
              <div>{React.createElement(FcMoneyTransfer, { size: "20" })}</div>
              Salary
            </button>
            <div className="border-b border-gray-400 w-full" />
            <button
              className={`flex items-center gap-2 p-2  w-full rounded-md ${
                steps === "statutory"
                  ? " text-white bg-blue-500 font-medium cursor-pointer"
                  : "text-white bg-gray-500 font-medium cursor-not-allowed"
              }`}
              disabled={steps !== "statutory"}
              onClick={() => setSteps("statutory")}
            >
              <div>{React.createElement(ImFileText2, { size: "20" })}</div>
              Statutory
            </button>
          </ul>
        </div>
      </div>

      {steps === "basic" && (
        <div className="w-full py-6 px-2 bg-white rounded-lg my-9 mx-5">
          <h2 className="border-b text-center text-xl border-black mb-6 font-bold mt-2">
            Employee Basic Information
          </h2>
          <div>
            <div className="grid md:grid-cols-3 gap-5 my-5  mt-5">
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="First name"
                  required
                  name="firstName"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Last name"
                  required
                  name="lastName"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="email"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Email"
                  required
                  name="emailId"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="tel"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Mobile Number"
                  name="mobile"
                  pattern="[0-9]*"
                  onKeyDown={(e) => {
                    if (
                      !/[0-9]/.test(e.key) &&
                      e.key !== "Backspace" &&
                      e.key !== "ArrowLeft" &&
                      e.key !== "ArrowRight"
                    ) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <select
                  className="border-b border-gray-500 focus:outline-none w-full"
                  required
                  name="gender"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Date"
                  required
                  name="dob"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <select
                  className="border-b border-gray-500 focus:outline-none w-full"
                  required
                  name="bloodGroup"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="AB-">AB-</option>
                  <option value="O-">O-</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="O+">O+</option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="PAN "
                  name="pan"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Aadhar Number"
                  name="aadhar"
                  maxLength={14}
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <select
                  className="border-b border-gray-500 focus:outline-none w-full"
                  name="maritalStatus"
                >
                  <option value="">Select Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Widow">Widow</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Emergency Contact Name"
                  name="emergencyContactName"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Emergency Contact Number"
                  name="emergencyContactNumber"
                  pattern="[0-9]*"
                  onKeyDown={(e) => {
                    if (
                      !/[0-9]/.test(e.key) &&
                      e.key !== "Backspace" &&
                      e.key !== "ArrowLeft" &&
                      e.key !== "ArrowRight"
                    ) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
            </div>
            <h2 className="border-b text-center text-xl border-black  mb-6 font-bold mt-2">
              Family Information
            </h2>
            <div className="grid md:grid-cols-3 gap-5 my-5 px-2 mt-5">
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Father's Name"
                  name="fatherName"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Mother's Name"
                  name="motherName"
                />
              </div>
              {/* <div className="grid gap-2 items-center w-full">
                  <input
                    type="text"
                    className="border-b border-gray-500 focus:outline-none w-full"
                    placeholder="Spouse's Name"
                    name="spouseName"
                  />
                </div> */}
            </div>
            <h2 className="border-b text-center text-xl  border-black mb-6 font-bold mt-2">
              Address Information
            </h2>
            <div className="grid md:grid-cols-3 gap-5 my-5 px-2 mt-5">
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Address Line 1"
                  maxLength="150"
                  name="address1"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Address Line 2"
                  maxLength="150"
                  name="address2"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="City"
                  name="city"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="State/Province"
                  name="state"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Zip / Pin Code"
                  name="code"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  placeholder="Country"
                  name="country"
                />
              </div>
            </div>
            <h2 className="border-b text-center text-xl border-black mb-6 font-bold mt-2 my-5">
              Payment Information
            </h2>
            <div className="grid gap-4">
              <div className="grid lg:grid-cols-3 gap-5 px-2">
                <div className="flex flex-col gap-2">
                  <select
                    className="border-b border-gray-500 focus:outline-none w-full"
                    required
                    name="paymentMode"
                  >
                    <option value="">Select payment Mode</option>
                    <option></option>
                  </select>
                </div>
                {/* <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="bankName"
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                    placeholder="Enter bank name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="accountNumber"
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                    placeholder="Enter bank account no."
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="ifsc"
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                    placeholder="Enter IFSC"
                  />
                </div> */}
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5 mt-5"></div>

            <div className="flex gap-5 justify-end items-center my-4">
              <button
                type="submit"
                className={`px-4 py-2  text-white font-medium rounded-md flex items-center gap-2 ${
                  disableSave
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-400"
                }`}
              >
                Save
              </button>
              <button
                type="submit"
                onClick={() => setSteps("employment")}
                className={`px-4 py-2  text-white font-medium  rounded-md flex items-center gap-2 ${
                  disableNext
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-400"
                }`}
                disabled={disableNext}
              >
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
      {steps === "employment" && (
        <Employment setSteps={setSteps} empId={empId} />
      )}
      {steps === "salary" && <OnboardingSalary />}
      {steps === "statutory" && <Statutory empId={empId} />}

      <div className="my-4 mx-2 w-fit">
        <div className="flex flex-col  bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
          <div className="flex  gap-4 font-medium">
            <GrHelpBook size={20} />
            <h2>Tool Tips</h2>
          </div>
          <div className=" ">
            <ul style={listItemStyle} className="flex flex-col gap-2">
              <li>
                <ul style={listItemStyle}>
                  <li>
                    Add basic employee details such as Name, Email ID, Contact
                    Number, Gender, DoB, PAN and AADHAR Number.{" "}
                  </li>
                </ul>
              </li>
              <li>
                <ul style={listItemStyle}>
                  <li>
                    Add Family Information such as Father's Name, Senior Citizen
                    applicable, Disability Level etc{" "}
                  </li>
                </ul>
              </li>
              <li>
                <ul style={listItemStyle}>
                  <li>Add employee's Payment Information </li>
                </ul>
              </li>

              <li>
                <p>
                  Any custom fields added in Organisation {">"} Organisation
                  Settings {">"} Employee Fields {">"} Personal Details will be
                  reflected on the page{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
