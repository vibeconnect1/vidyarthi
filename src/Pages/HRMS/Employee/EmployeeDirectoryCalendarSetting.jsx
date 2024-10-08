import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { FaRegCalendarAlt } from "react-icons/fa";
import birthday from "/birthday.png";
import anniversary from "/work_anniversary.png";
import approved from "/approved_leave.png";
import holiday from "/company_holidays.png";
import age from "/custom_milestone.png";
import onboardingTask from "/onboarding_tasks.png";
import offboardingTask from "/offboarding_tasks.png";
import { BiMenu } from "react-icons/bi";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
const EmployeeDirectoryCalendarSetting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownItem, setDropdownItem] = useState(false);
  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <AdminHRMS />
      <div className="h-full bg-white rounded-md p-4 ml-24">
        <p className="text-lg font-medium flex gap-2 items-center border-b mx-2 py-2">
          <FaRegCalendarAlt />
          October 2024 Events
        </p>
        <div className="space-y-6 my-5">
          <div className="flex justify-between items-center">
            <button
              className="flex gap-2 items-center"
              onClick={toggleOffcanvas}
            >
              <img src={birthday} className="h-14 w-14 rounded-md"></img>
              <p className="text-gray-600">Birthday</p>
            </button>
            <span>2</span>
          </div>
          <div className="flex justify-between items-center">
            <button className="flex gap-2 items-center" onClick={toggleOffcanvas}>
              <img src={anniversary} className="h-14 w-14 rounded-md"></img>
              <p className="text-gray-600">Work Anniversary </p>
            </button>
            <span>2</span>
          </div>
          <div className="flex justify-between items-center">
            <button className="flex gap-2 items-center" onClick={toggleOffcanvas}>
              <img src={approved} className="h-14 w-14 rounded-md"></img>
              <p className="text-gray-600">Approved Leave</p>
            </button>
            <span>2</span>
          </div>
          <div className="flex justify-between items-center">
            <button className="flex gap-2 items-center" onClick={toggleOffcanvas}>
              <img src={holiday} className="h-14 w-14 rounded-md"></img>
              <p className="text-gray-600">Company Holidays </p>
            </button>
            <span>2</span>
          </div>
          <div className="flex justify-between items-center">
            <button className="flex gap-2 items-center" onClick={toggleOffcanvas}>
              <img src={birthday} className="h-14 w-14 rounded-md"></img>
              <p className="text-gray-600">Son Birthday</p>
            </button>
            <span>2</span>
          </div>
          <div className="flex justify-between items-center">
            <button className="flex gap-2 items-center" onClick={toggleOffcanvas}>
              <img src={age} className="h-14 w-14 rounded-md"></img>
              <p className="text-gray-600">Age Group</p>
            </button>
            <span>2</span>
          </div>
          <div className="flex justify-between items-center">
            <button className="flex gap-2 items-center" onClick={toggleOffcanvas}>
              <img src={age} className="h-14 w-14 rounded-md"></img>
              <p className="text-gray-600">Grey Day </p>
            </button>
            <span>2</span>
          </div>
          <div className="flex justify-between items-center">
            <button className="flex gap-2 items-center" onClick={toggleOffcanvas}>
              <img src={onboardingTask} className="h-14 w-14 rounded-md"></img>
              <p className="text-gray-600">Onboarding Tasks</p>
            </button>
            <span>2</span>
          </div>
          <div className="flex justify-between items-center">
            <button className="flex gap-2 items-center" onClick={toggleOffcanvas}>
              <img src={offboardingTask} className="h-14 w-14 rounded-md"></img>
              <p className="text-gray-600">Onboarding Tasks</p>
            </button>
            <span>2</span>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleOffcanvas}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <button
          onClick={toggleOffcanvas}
          className="text-black p-4 focus:outline-none flex gap-2 items-center"
        >
          <BiMenu size={20} />
          <span className="text-lg text-gray-800">Event Details</span>
        </button>
        <div className="p-4 bg-gray-300 rounded-md  mx-5">
          <div className="flex">
            <button
              onClick={() => setDropdownItem(!dropdownItem)}
              className="focus:outline-none w-full text-left flex justify-between items-center gap-2"
            >
              <h2>Birthday</h2>
              <IoIosArrowDown className="text-gray-600" />
            </button>
          </div>
          {dropdownItem && (
            <div className="my-5 space-y-5 ">
              <div className="bg-white p-2 flex justify-between rounded-md">
                <h2 className="font-medium">Oct 12, 2024</h2>
                <p className="text-gray-600">1</p>
              </div>
              <div className="bg-white p-2 flex justify-between rounded-md">
                <h2 className="font-medium">Oct 22, 2024</h2>
                <p className="text-gray-600">1</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDirectoryCalendarSetting;
