import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import the necessary icon
import AdminHRMS from "../AdminHRMS";
import { BiMenuAltLeft } from "react-icons/bi";

const SurveySidebar = () => {
  const [open, setOpen] = useState(true);
  const [submission, setSubmission] = useState(false);
  const [questionBank, setQuestionBank] = useState(false);
  const [settings, setSettings] = useState(false);
  const toggleSubmission = () => {
    setSubmission(!submission);
  };
  const toggleQuestionBank = () => {
    setQuestionBank(!questionBank);
  };
  const toggleSettings = () => {
    setSettings(!settings);
  };
  useEffect(() => {
    const currentPath = window.location.pathname;
    setSubmission(
      currentPath === "/hrms/survey/general-survey" ||
        currentPath === "/hrms/survey/onboarding-survey" ||
        currentPath === "/hrms/survey/exit-interviews"
    );
    setQuestionBank(
      currentPath === "/hrms/survey/question-bank-general-survey" ||
        currentPath === "/hrms/survey/question-bank-onboarding-survey"||
        currentPath === "/hrms/survey/question-bank-exit-interviews"
    );
    setSettings(
      currentPath === "/hrms/survey/general-survey-setting" ||
        currentPath === "/hrms/survey/onboarding-survey-setting"||
        currentPath === "/hrms/survey/exit-interviews-setting"
    );
  }, []);
  return (
    <div className="flex">
      <AdminHRMS />
      <div className="w-72 h-auto bg-white rounded-md border-r p-4 mt-9">
        <div className="text-lg text-gray-900 flex gap-1 items-center border-b pb-2">
          <span>
            <BiMenuAltLeft />
          </span>
          <h2>Sections</h2>
        </div>
        <ul>
          <li>
            <div
              onClick={toggleSubmission}
              className="cursor-pointer group flex justify-between items-center text-lg gap-3.5 text-gray-800 p-2 border-b py-3"
            >
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Submission
              </h2>
              <div className="ml-16">
                {submission ? (
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
                Submission
              </h2>
            </div>
            {submission && (
              <ul className="pl-4 space-y-2 mt-2">
                <li>
                  <NavLink
                    to="/hrms/survey/general-survey"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      General Survey
                    </h2>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hrms/survey/onboarding-survey"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Onboarding Survey
                    </h2>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hrms/survey/exit-interviews"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Exit Interviews
                    </h2>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              onClick={toggleQuestionBank}
              className="cursor-pointer group flex justify-between items-center text-lg gap-3.5 text-gray-800 p-2 border-b py-3"
            >
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Question Bank
              </h2>
              <div className="ml-16">
                {questionBank ? (
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
                Question Bank
              </h2>
            </div>
            {questionBank && (
              <ul className="pl-4 space-y-2 mt-2">
                <li>
                  <NavLink
                    to="/hrms/survey/question-bank-general-survey"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      General Survey
                    </h2>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hrms/survey/question-bank-onboarding-survey"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Onboarding Survey
                    </h2>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hrms/survey/question-bank-exit-interviews"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Exit Interviews
                    </h2>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              onClick={toggleSettings}
              className="cursor-pointer group flex justify-between items-center text-lg gap-3.5 text-gray-800 p-2 border-b py-3"
            >
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Settings
              </h2>
              <div className="ml-16">
                {settings ? (
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
                Settings
              </h2>
            </div>
            {settings && (
              <ul className="pl-4 space-y-2 mt-2">
                <li>
                  <NavLink
                    to="/hrms/survey/general-survey-setting"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      General Survey
                    </h2>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hrms/survey/onboarding-survey-setting"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Onboarding Survey
                    </h2>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hrms/survey/exit-interviews-setting"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                      }`
                    }
                  >
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Exit Interviews
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

export default SurveySidebar;
