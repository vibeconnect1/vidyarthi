import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import AttendanceDetailsList from "./AttendanceDetailsList";
import { GrHelpBook } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";
import Table from "../../ConfigurationFile/Table";

const RegularizationReason = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const [frequencyRestriction, setFrequencyRestriction] = useState(false);
  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  const columns = [
    {
      name: "view",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setShowModal1(true);
            }}
          >
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
    {
      name: "Reason",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Visible To",
      selector: (row) => row.Label,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const data = [
    {
      Name: "person 1",
      Location: "Miss Punch",
      Label: "All",
      status: "Active",
      Country: "India",
    },
  ];

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFrequencyChange = (e) => {
    setFrequencyRestriction(e.target.checked);
  };

  return (
    <section className="flex ml-20">
      <AttendanceDetailsList />
      <div className="w-2/3 flex m-3 flex-col overflow-hidden">
        <div className="flex justify-between my-5">
          <input
            type="text"
            placeholder="Search by name"
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
          />
          <button
            onClick={handleAddClick}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add Reason
          </button>
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
      <div className="my-4 mx-2 w-fit">
        <div className="flex flex-col bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
          <div className="flex  gap-4 font-medium">
            <GrHelpBook size={20} />
            <h2>Help Center</h2>
          </div>
          <div className="">
            <ul style={listItemStyle} className="flex flex-col gap-2">
              <li>
                <ul style={listItemStyle}>
                  <li>
                    Attendance settings allows you to configure attendance
                    policies in the form of templates based on different
                    departments, profiles, locations, etc.{" "}
                  </li>{" "}
                </ul>
              </li>
              <li>
                <ul style={listItemStyle}>
                  <li>
                    Within the attendance templates you can choose the mode of
                    capturing the attendance like web check-in, biometrics,
                    timesheet, mobile application.{" "}
                  </li>
                </ul>
              </li>

              <li>
                <p>
                  You can automate the attendance process by automatically
                  capturing late marks, half-days, overtime and leave deductions
                  based on the template settings. You can also configure
                  attendance regularization limit and reason.
                </p>
              </li>
              <li>
                <p>
                  In the web check-in you can restrict capturing attendance
                  through static IP. Similarly, in mobile applications you can
                  restrict capturing attendance through geo-fencing.{" "}
                </p>
              </li>
              <li>
                <p>
                  Attendance module is integrated with leave and payroll module
                  and hence will sync data from the attendance module and derive
                  data like LOP calculations for running payroll.{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showModal1 && (
        <div className="fixed inset-0 z-10 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-lg font-bold mb-4">
              Edit Regularization Reason
            </h2>
            <input
              type="text"
              placeholder="Label *"
              className="border-b border-gray-500 focus:outline-none w-full"
            />
            <label className="block my-5">
              Frequency Restriction *
              <input
                type="checkbox"
                className="ml-2"
                onChange={handleFrequencyChange}
              />
            </label>
            {frequencyRestriction && (
              <div className="mb-2">
                <label className="block">
                  An Employee Can Apply Maximum
                  <input
                    type="number"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </label>
                <label className="block mt-2">
                  To
                  <select className="border-b border-gray-500 focus:outline-none w-full">
                    <option>Week</option>
                    <option>Month</option>
                  </select>
                </label>
              </div>
            )}
            <label className="block mb-2">
              Within how many days can the employee apply for regularization
              from the date of occurrence?
              <input
                type="number"
                className="border-b border-gray-500 focus:outline-none w-full"
              />
            </label>
            <label className="block my-5">
              Which Employees Does this Reason Apply to? *
              <select className="border-b border-gray-500 focus:outline-none w-full">
                <option>All Employees</option>
                <option>Some Employees</option>
                <option>Specific Employees</option>
              </select>
            </label>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => {
                  setShowModal1(false);
                }}
                className="border-2 font-semibold hover:bg-gray-700 hover:text-white duration-150 transition-all border-gray-700 p-2 rounded-md text-gray-700 cursor-pointer mr-2"
              >
                Cancel
              </button>
              <button className="border-2 font-semibold hover:bg-blue-700 hover:text-white duration-150 transition-all border-blue-700 p-2 rounded-md text-blue-700 cursor-pointer">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 z-10 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-lg font-bold mb-4">
              Add Regularization Reason
            </h2>
            <input
                type="text"
                placeholder="Label *"
                className="border-b border-gray-500 focus:outline-none w-full"
              />
            <label className="block my-5">
              Frequency Restriction *
              <input
                type="checkbox"
                className="ml-2"
                onChange={handleFrequencyChange}
              />
            </label>
            {frequencyRestriction && (
              <div className="mb-2">
                <label className="block">
                  An Employee Can Apply Maximum
                  <input
                    type="number"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </label>
                <label className="block mt-2">
                  To
                  <select className="border-b border-gray-500 focus:outline-none w-full">
                    <option>Week</option>
                    <option>Month</option>
                  </select>
                </label>
              </div>
            )}
            <label className="block my-5">
              Within how many days can the employee apply for regularization
              from the date of occurrence?
              <input
                type="number"
                className="border-b border-gray-500 focus:outline-none w-full"
              />
            </label>
            <label className="block my-5">
              Which Employees Does this Reason Apply to? *
              <select className="border-b border-gray-500 focus:outline-none w-full my-2">
                <option>All Employees</option>
                <option>Some Employees</option>
                <option>Specific Employees</option>
              </select>
            </label>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleModalClose}
                className="border-2 font-semibold hover:bg-gray-700 hover:text-white duration-150 transition-all border-gray-700 p-2 rounded-md text-gray-700 cursor-pointer mr-2"
              >
                Cancel
              </button>
              <button className="border-2 font-semibold hover:bg-blue-700 hover:text-white duration-150 transition-all border-blue-700 p-2 rounded-md text-blue-700 cursor-pointer">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RegularizationReason;
