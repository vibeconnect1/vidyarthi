import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ImFileText2 } from "react-icons/im";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import the necessary icons
import AdminHRMS from "../AdminHRMS";

const OnboardingSettings = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [inductionResources, setInductionResources] = useState(false);
  const [onboardingTemplates, setOnboardingTemplates] = useState(false);
  const [open, setOpen] = useState(true); // Assuming open state is managed elsewhere or can be derived

  useEffect(() => {
    const currentPath = window.location.pathname;
    setDropdownOpen(
      currentPath === "/hrms/organization/employee-permissions" ||
        currentPath === "/hrms/organization/induction-templates"
    );
  }, []);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setInductionResources(
      currentPath === "/hrms/organization/company-induction" ||
        currentPath === "/hrms/organization/employee-news-feed-permissions"
    );
  }, []);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setOnboardingTemplates(
      currentPath === "/hrms/organization/onboarding-categories" ||
        currentPath === "/hrms/organization/onboarding-tasks"||
        currentPath === "/hrms/organization/onboarding-checklist-templates"

    );
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleInductionResources = () => {
    setInductionResources(!inductionResources);
  };

  const toggleOnboardingTemplates = () => {
    setOnboardingTemplates(!onboardingTemplates);
  };

  return (
    <div className="flex">
      <AdminHRMS />
      <div className="w-96 h-full bg-white border-r p-4 mt-9">
        <ul className="space-y-4">
          <li className="font-bold text-lg">Details List</li>
          <li>
            <div
              onClick={toggleDropdown}
              className="cursor-pointer justify-between group flex  items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md"
            >
              <div className="flex gap-2">
                <div>{React.createElement(ImFileText2, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Onboarding Settings
                </h2>
              </div>
              <div className="ml-16">
                {dropdownOpen ? (
                  <FiChevronUp size={20} />
                ) : (
                  <FiChevronDown size={20} />
                )}
              </div>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Onboarding Settings
              </h2>
            </div>
            {dropdownOpen && (
              <ul className="pl-5 space-y-2 mt-2">
                <li>
                  <NavLink
                    to="/hrms/organization/onboarding-general-setting"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      General Settings
                    </h2>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hrms/organization/first-day-information-templates"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      First Day Information Templates
                    </h2>
                  </NavLink>
                </li>
                <li>
                  <div
                    onClick={toggleInductionResources}
                    className="cursor-pointer justify-between group flex  items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md"
                  >
                    <div className="flex gap-2">
                      <div>
                        {React.createElement(ImFileText2, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Induction Resources
                      </h2>
                    </div>
                    <div className="ml-16">
                      {inductionResources ? (
                        <FiChevronUp size={20} />
                      ) : (
                        <FiChevronDown size={20} />
                      )}
                    </div>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Induction Resources
                    </h2>
                  </div>
                  {inductionResources && (
                    <ul className="pl-5 space-y-2 mt-2">
                      <li>
                        <NavLink
                          to="/hrms/organization/company-induction"
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                                : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                            }`
                          }
                        >
                          <h2
                            className={`whitespace-pre duration-300 ${
                              !open &&
                              "opacity-0 translate-x-28 overflow-hidden"
                            }`}
                          >
                            Company Induction 
                          </h2>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/hrms/organization/induction-templates"
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                                : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                            }`
                          }
                        >
                          <h2
                            className={`whitespace-pre duration-300 ${
                              !open &&
                              "opacity-0 translate-x-28 overflow-hidden"
                            }`}
                          >
                            Induction Templates
                          </h2>
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <div
                    onClick={toggleOnboardingTemplates}
                    className="cursor-pointer justify-between group flex  items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md"
                  >
                    <div className="flex gap-2">
                      <div>
                        {React.createElement(ImFileText2, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Onboarding Checklist Templates
                      </h2>
                    </div>
                    <div className="">
                      {onboardingTemplates ? (
                        <FiChevronUp size={20} />
                      ) : (
                        <FiChevronDown size={20} />
                      )}
                    </div>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Onboarding Checklist Templates
                    </h2>
                  </div>
                  {onboardingTemplates && (
                    <ul className="pl-5 space-y-2 mt-2">
                      <li>
                        <NavLink
                          to="/hrms/organization/onboarding-categories"
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                                : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                            }`
                          }
                        >
                          <h2
                            className={`whitespace-pre duration-300 ${
                              !open &&
                              "opacity-0 translate-x-28 overflow-hidden"
                            }`}
                          >
                            Onboarding Categories
                          </h2>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/hrms/organization/onboarding-tasks"
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                                : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                            }`
                          }
                        >
                          <h2
                            className={`whitespace-pre duration-300 ${
                              !open &&
                              "opacity-0 translate-x-28 overflow-hidden"
                            }`}
                          >
                            Onboarding Tasks
                          </h2>
                        </NavLink>
                        <NavLink
                          to="/hrms/organization/onboarding-checklist-templates"
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                                : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                            }`
                          }
                        >
                          <h2
                            className={`whitespace-pre duration-300 ${
                              !open &&
                              "opacity-0 translate-x-28 overflow-hidden"
                            }`}
                          >
                            Onboarding Checklist Templates
                          </h2>
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <NavLink
                    to="/hrms/organization/welcome-message"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Welcome Message
                    </h2>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OnboardingSettings;
