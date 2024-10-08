import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";
import { FaBuilding } from "react-icons/fa";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { MdOutlineDashboard, MdExpandMore, MdExpandLess } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { RiFileListLine } from "react-icons/ri";
import { FaRegCalendarTimes } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";
import { FaRegRegistered } from "react-icons/fa";
import { IoPeopleOutline, IoCashOutline } from "react-icons/io5";
// import { PiSignOutBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserCog, FaRegCalendarAlt } from "react-icons/fa";
import {
  FaFileInvoice,
  FaFileWord,
  FaRegFile,
  FaRegFilePowerpoint,
} from "react-icons/fa";
import { ImFileText2 } from "react-icons/im";
import { RiSettings3Line } from "react-icons/ri";
import { getItemInLocalStorage } from "../../ConfigurationFile/localStorage";
const AdminHRMS = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const [isOrgOpen, setIsOrgOpen] = useState(false);
  const [isEmpOpen, setIsEmpOpen] = useState(false);
  const [isAttOpen, setIsAttOpen] = useState(false);
  const [isLeaveOpen, setIsLeaveOpen] = useState(false);
  const [ispayOpen, setIspayOpen] = useState(false);
  const [isRosterOpen, setIsRosterOpen] = useState(false);
  const [isExpenses, setIsExpenses] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };
  const toggleRosterMenu = () => {
    setIsRosterOpen(!isRosterOpen);
  };
  const toggleExpensesMenu = () => {
    setIsExpenses(!isExpenses);
  };

  useEffect(() => {
    const userType = getItemInLocalStorage("USERTYPE");
    setUser(userType);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };
  const toggleOrgMenu = () => {
    setIsOrgOpen(!isOrgOpen);
  };
  const toggleEmpMenu = () => {
    setIsEmpOpen(!isEmpOpen);
  };
  const toggleAttMenu = () => {
    setIsAttOpen(!isAttOpen);
  };
  const toggleLeaveMenu = () => {
    setIsLeaveOpen(!isLeaveOpen);
  };
  const togglepayMenu = () => {
    setIspayOpen(!ispayOpen);
  };
  const location = useLocation();

  const organizationPaths = [
    "/hrms/organization/basic-information",
    "/admin/company-profile/address-information",
    "/admin/geographical-settings",
    "/admin/locations",
    "/admin/department",
    "/admin/company-holidays",
    "/admin/employee-fields/personal-details",
    "/admin/employee-fields/employment-details",
    "/admin/employee-fields/other-details",
    "/admin/employee-fields/documents",
    "/admin/bank-accounts",
    "/admin/add-bank-account",
    "/admin/calendar-milestones-events",
    "/admin/manage-admin",
    "/admin/third-party",
    "/admin/employee-fields/permission",
    "/admin/employee-fields/news-feed-permission",
    "/hrms/organization/company-policy-documents",
    "/admin/edit-letter-templates",
    "/admin/document/letter-template",
    "/admin/add-letter-template",
    "/admin/document/old-letter-template",
    "/admin/onboarding-setting",
    "/admin/communication-template",
    "/admin/edit-communication-templates/undefined",
    "/admin/add-communication-templates",
    "/admin/emailid-mapping",
    "/admin/workflow-trigger",
    "/admin/hrms/investment-setting",
  ];
  const rosterPaths = ["/admin/hrms/roaster", "/admin/hrms/roaster-shift"];
  const expensesPaths = ["/hrms/expense/expense-reports", "/hrms/expense/expense-process-history" , "/hrms/expense/expense-categories"];
  const leavePaths = [
    "/admin/hrms/leave-application",
    "/admin/hrms/leave-balance",
    "/admin/hrms/rollover",
    "/general-settings",
    "/leave-categories",
    "/templates",
    "/templates-assignments",
  ];
  const payrollPaths = [
    "/admin/hrms/run-payroll",
    "/admin/pay-slip",
    "/admin/hrms/loan-app",
    "/admin/hrms/payroll-setting",
    "/admin/NPS",
    "/admin/Gratuity",
    "/admin/Leave-Recovery",
    "/admin/Notice-Recovery",
    "/admin/Minimum-Wage",
    "/admin/PF",
    "/admin/daily-wage",
    "/admin/location-master",
    "/admin/fixed-allowance",
    "/admin/fixed-deduction",
    "/admin/variable-allowance",
    "/admin/variable-deduction",
    "/admin/other-benefit",
    "/admin/loans",
    "/admin/tax-setting",
    "/admin/payslip-setting",
    "/admin/hrms/ctc/CTC-Template",
    "/admin/hrms/ctc/",
    "/admin/hrms/ctc/ctc-template/General-Settings",
    "/admin/hrms/ctc/ctc-template/Component",
    "/admin/hrms/ctc/ctc-template/Restrictions",
  ];
  const employeePaths = [
    "/admin/hrms/employee-directory",
    "/hrms/employee-directory-Personal",
    "/hrms/organization/employee-directory-page",
    "/admin/employee-directory-Employment",
    "/admin/employee-directory-Statutory",
    "/admin/employee-directory/Salary",
    "/admin/employee-directory-Tax",
    "/admin/OtherDetails",
    "/admin/employee-directory-Documents",
    "/admin/employee-directory-LoansAdvances",
    "/admin/employee-directory-Transaction",
    "/admin/employee-directory-Change-logs",
    "/hrms/organisation-tree",
    "/admin/organisation-view2",
    "/admin/organisation-view3",
    "/admin/organisation-view1",
    "/hrms/employee-transactions/data-change-request",
    "/admin/ctc-basket",
    "/hrms/investment-approvals",
    "/hrms/employee-directory/onboarding",
    "/hrms/employee-directory/pending-contract-renewal",

    "/hrms/employee-directory/separation-request",
    "/hrms/employee-directory/exit-interview-requests",
    "/hrms/employee-directory/generated-letter",
    "/hrms/employee-directory/calendar",
    "/admin/add-employee/onboarding",
    "/admin/add-employee/basics",
    "/admin/add-employee/Employment",
    "/admin/add-employee/Salary",
    "/admin/add-employee/Statutory",
    "/admin/add-employee/Policies",
    "/admin/add-employee/Invite",
  ];
  const attendancePaths = [
    "/hrms/attendance/attendance-records",
    "/hrms/attendance/regularization-requests",
    "/hrms/attendance/attendance-audit",
    "/hrms/attendance/attendance-process",
    "/hrms/attendance/setting/attendance-general-setting",
    "/admin/attendance/Regularization-Reason",
    "/admin/att/template",
    "/admin/att/template-assign",
    "/hrms/attendance/device-registration-request",
    "/hrms/attendance/attendance-validations",
    "/hrms/attendance/attendance-logs",
  ];
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("menuState"));
    if (savedState) {
      setIsOrgOpen(savedState.isOrgOpen);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("menuState", JSON.stringify({ isOrgOpen }));
  }, [isOrgOpen]);

  useEffect(() => {
    const currentPath = location.pathname;
    const isOrgPath = organizationPaths.includes(currentPath);
    setIsOrgOpen(isOrgPath);
    setIsRosterOpen(rosterPaths.includes(currentPath));
    setIsLeaveOpen(leavePaths.includes(currentPath));
    setIspayOpen(payrollPaths.includes(currentPath));
    setIsEmpOpen(employeePaths.includes(currentPath));
    setIsAttOpen(attendancePaths.includes(currentPath));
    setIsExpenses(expensesPaths.includes(currentPath));
  }, [location.pathname]);
  const isActiveLink = (location, routes) => {
    return routes.includes(location.pathname);
  };
  const routes = [
    "/hrms/organization/basic-information",
    "/admin/company-profile/address-information",
    "/admin/geographical-settings",
    "/admin/locations",
    "/admin/department",
    "/admin/company-holidays",
    "/admin/add-bank-account",
    "/admin/employee-fields/personal-details",
    "/admin/employee-fields/employment-details",
    "/admin/employee-fields/other-details",
    "/admin/employee-fields/documents",
    "/admin/bank-accounts",
    "/admin/calendar-milestones-events",
  ];
  const routes1 = [
    "/admin/manage-admin",
    "/admin/third-party",
    "/admin/employee-fields/permission",
    "/admin/employee-fields/news-feed-permission",
  ];
  const routes2 = [
    "/hrms/organization/company-policy-documents",
    "/admin/add-letter-template",
    "/admin/edit-letter-templates",
    "/admin/document/letter-template",
    "/admin/document/old-letter-template",
  ];
  const routes3 = [
    "/admin/onboarding-setting",
    "/admin/communication-template",
    "/admin/edit-communication-templates/undefined",
    "/admin/add-communication-templates",
    "/admin/emailid-mapping",
    "/admin/workflow-trigger",
  ];
  const routes4 = [
    "/hrms/organisation-tree",
    "/admin/organisation-view2",
    "/admin/organisation-view3",
    "/admin/organisation-view1",
  ];
  const routes5 = [
    "/hrms/employee-transactions/data-change-request",
    "/admin/ctc-basket",
  ];
  const routes6 = [
    "/hrms/attendance/setting/attendance-general-setting",
    "/admin/attendance/Regularization-Reason",
    "/admin/att/template",
    "/admin/att/template-assign",
  ];
  const routes7 = [
    "/general-settings",
    "/leave-categories",
    "/templates",
    "/templates-assignments",
  ];
  const routes8 = [
    "/admin/hrms/payroll-setting",
    "/admin/NPS",
    "/admin/Gratuity",
    "/admin/Leave-Recovery",
    "/admin/Notice-Recovery",
    "/admin/Minimum-Wage",
    "/admin/PF",
    "/admin/daily-wage",
    "/admin/location-master",
    "/admin/fixed-allowance",
    "/admin/fixed-deduction",
    "/admin/variable-allowance",
    "/admin/variable-deduction",
    "/admin/other-benefit",
    "/admin/loans",
    "/admin/tax-setting",
    "/admin/payslip-setting",
  ];
  const routes9 = [
    "/hrms/employee-directory-Personal",
    "/hrms/organization/employee-directory-page",
    "/admin/employee-directory-Employment",
    "/admin/employee-directory-Statutory",
    "/admin/employee-directory/Salary",
    "/admin/employee-directory-Tax",
    "/admin/OtherDetails",
    "/admin/employee-directory-Documents",
    "/admin/employee-directory-LoansAdvances",
    "/admin/employee-directory-Transaction",
    "/admin/employee-directory-Change-logs",
  ];
  return (
    <section className="flex gap-6 fixed top-0 left-0 bottom-0 h-screen z-30">
      <div
        className={`p-[8px]  max-h-screen  bg-white ${
          open ? "w-full md:w-72" : "w-20"
        } duration-500 text-gray-100 px-4 shadow-2xl overflow-y-auto h-screen custom-scrollbar left-0 z-30`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`py-3 flex text-black ${
            open ? "justify-end" : "justify-center"
          }`}
        >
          <HiMenuAlt3
            size={26}
            className="cursor-pointer "
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex flex-col h-full gap-4 mb-5 relative">
          <>
            <NavLink
              to="/hrms/hrms-Dashboard"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-500 bg- flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black "
                }`
              }
            >
              <div>
                {React.createElement(MdOutlineDashboard, { size: "20" })}
              </div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Dashboard
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Dashboard
              </h2>
            </NavLink>
            <NavLink
              to="/hrms/alerts/pending-request"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                }`
              }
            >
              <div>{React.createElement(FaRegFile, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Alerts
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Alerts
              </h2>
            </NavLink>

            <div>
              <div
                onClick={toggleOrgMenu}
                className="cursor-pointer flex items-center text-sm gap-3.5 font-medium p-2 text-black"
              >
                <div>
                  {React.createElement(FaBuilding, { size: "20" })}
                  {/* <p>Organization</p> */}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Organization
                </h2>
                <div className="ml-auto">
                  {isOrgOpen
                    ? React.createElement(MdExpandLess, { size: "20" })
                    : React.createElement(MdExpandMore, { size: "20" })}
                </div>
              </div>
              {isOrgOpen && (
                <div className="flex flex-col gap-2">
                  <NavLink
                    to="/hrms/organization/basic-information"
                    className={() =>
                      `${
                        isActiveLink(location, routes)
                          ? "text-blue-500 bg-white flex p-2 pl-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(IoSettingsOutline, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-100 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Organization Setting
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-100 group-hover:w-fit`}
                    >
                      Organization Setting
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/organization/manage-administrators"
                    className={() =>
                      `${
                        isActiveLink(location, routes1)
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>{React.createElement(FaUserCog, { size: "20" })}</div>
                    <h2
                      className={`whitespace-pre  duration-200 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      User Setting
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-200 group-hover:w-fit`}
                    >
                      User Setting
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/organization/company-policy-documents"
                    className={() =>
                      `${
                        isActiveLink(location, routes2)
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(ImFileText2, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Document + Letter
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Document + Letter
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/organization/onboarding-general-setting"
                    className={() =>
                      `${
                        isActiveLink(location, routes3)
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(RiSettings3Line, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      HR Workflow Setting
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      HR Workflow Setting
                    </h2>
                  </NavLink>
                </div>
              )}
            </div>
            <div>
              <div
                onClick={toggleEmpMenu}
                className="cursor-pointer text-black flex items-center text-sm gap-3.5 font-medium p-2  rounded-md"
              >
                <div>
                  {React.createElement(IoPeopleOutline, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Employees
                </h2>
                <div className="ml-auto">
                  {isEmpOpen
                    ? React.createElement(MdExpandLess, { size: "20" })
                    : React.createElement(MdExpandMore, { size: "20" })}
                </div>
              </div>
              {isEmpOpen && (
                <div className="">
                  <NavLink
                    to="/hrms/organization/employee-directory-page"
                    className={({ isActive }) =>
                      `${
                        isActiveLink(location, routes9)
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(ImFileText2, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Employee Directory
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Employee Directory
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/organisation-tree"
                    className={() =>
                      `${
                        isActiveLink(location, routes4)
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(RiSettings3Line, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Organization Tree Setting
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Organization Tree Setting
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/employee-transactions/data-change-request"
                    className={() =>
                      `${
                        isActiveLink(location, routes5)
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(IoCashOutline, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Employee Transaction
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Employee Transaction
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/investment-approvals"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(IoCashOutline, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Investment
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Investment
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/employee-directory/onboarding"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>{React.createElement(FaUserCog, { size: "20" })}</div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Onboarding
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Onboarding
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/employee-directory/pending-contract-renewal"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(RiFileListLine, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Pending Contract Renewal
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Pending Contract Renewal
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/employee-directory/separation-request"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(RiFileListLine, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Separation Request
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Separation Request
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/employee-directory/exit-interview-requests"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(RiFileListLine, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Exit Interview Requests
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Exit Interview Requests
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/employee-directory/generated-letter"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(ImFileText2, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Generated Letter
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Generated Letter
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/employee-directory/calendar"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2  text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(FaRegCalendarAlt, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Calendar
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Calendar
                    </h2>
                  </NavLink>
                </div>
              )}
            </div>
            {/* <NavLink
                to="/hrms/attendance"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                  }`
                }
              >
                <div>
                  {React.createElement(FaCalendarCheck, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Attendance
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Attendance
                </h2>
              </NavLink> */}

            <div>
              <div
                onClick={toggleAttMenu}
                className="cursor-pointer flex items-center text-sm gap-3.5 font-medium p-2 text-black"
              >
                <div>{React.createElement(HiCheck, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Attendance
                </h2>
                <div className="ml-auto">
                  {isAttOpen
                    ? React.createElement(MdExpandLess, { size: "20" })
                    : React.createElement(MdExpandMore, { size: "20" })}
                </div>
              </div>
              {isAttOpen && (
                <div className="">
                  <NavLink
                    to="/hrms/attendance/attendance-records"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(IoSettingsOutline, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Attendance Records
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Attendance Records
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/attendance/regularization-requests"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(IoSettingsOutline, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Regularization Requests
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Regularization Requests
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/attendance/attendance-audit"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>{React.createElement(FaUserCog, { size: "20" })}</div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Attendance Audit
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Attendance Audit
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/attendance/attendance-process"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(ImFileText2, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Attendance Process
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Attendance Process
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/attendance/setting/attendance-general-setting"
                    className={() =>
                      `${
                        isActiveLink(location, routes6)
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(RiSettings3Line, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Setting
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Setting
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/attendance/device-registration-request"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(IoCashOutline, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Device Registration Request
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Device Registration Request
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/attendance/attendance-validations"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(IoCashOutline, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Attendance Validation
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Attendance Validation
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/hrms/attendance/attendance-logs"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                      }`
                    }
                  >
                    <div>
                      {React.createElement(IoCashOutline, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Attendance Log
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Attendance Log
                    </h2>
                  </NavLink>
                </div>
              )}
            </div>
            <div
              onClick={toggleExpensesMenu}
              className="cursor-pointer flex items-center text-sm gap-3 font-medium p-2 text-black"
            >
              <div>{React.createElement(FaRegRegistered, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Expenses
              </h2>
              <div className="ml-auto">
                {isExpenses
                  ? React.createElement(MdExpandLess, { size: "20" })
                  : React.createElement(MdExpandMore, { size: "20" })}
              </div>
            </div>
            {isExpenses && (
              <div className="">
                <NavLink
                  to="/hrms/expense/expense-reports"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                        : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                    }`
                  }
                >
                  <div>
                    {React.createElement(AiOutlineFieldTime, { size: "20" })}
                  </div>
                  <h2
                    className={`whitespace-pre duration-300 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Expense Reports
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                  >
                    Expense Reports
                  </h2>
                </NavLink>
                <NavLink
                  to="/hrms/expense/expense-process-history"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                        : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                    }`
                  }
                >
                  <div>{React.createElement(MdAlarm, { size: "20" })}</div>
                  <h2
                    className={`whitespace-pre duration-300 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Process History
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                  >
                    Process History
                  </h2>
                </NavLink>
                <NavLink
                  to="/hrms/expense/expense-categories"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-blue-500 bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                        : "group flex items-center text-sm gap-3.5 font-medium p-2 text-black"
                    }`
                  }
                >
                  <div>{React.createElement(MdAlarm, { size: "20" })}</div>
                  <h2
                    className={`whitespace-pre duration-300 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Settings
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                  >
                    Settings
                  </h2>
                </NavLink>
              </div>
            )}
            <div
              onClick={toggleRosterMenu}
              className="cursor-pointer flex items-center text-sm gap-3 font-medium p-2 "
            >
              <div>{React.createElement(FaRegRegistered, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Roster
              </h2>
              <div className="ml-auto">
                {isEmpOpen
                  ? React.createElement(MdExpandLess, { size: "20" })
                  : React.createElement(MdExpandMore, { size: "20" })}
              </div>
            </div>
            {isRosterOpen && (
              <div className="">
                <NavLink
                  to="/admin/hrms/roaster"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                        : "group flex items-center text-sm gap-3.5 font-medium p-2 "
                    }`
                  }
                >
                  <div>
                    {React.createElement(AiOutlineFieldTime, { size: "20" })}
                  </div>
                  <h2
                    className={`whitespace-pre duration-300 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Roaster Records
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                  >
                    Roaster Records
                  </h2>
                </NavLink>
                <NavLink
                  to="/admin/hrms/roaster-shift"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                        : "group flex items-center text-sm gap-3.5 font-medium p-2 "
                    }`
                  }
                >
                  <div>{React.createElement(MdAlarm, { size: "20" })}</div>
                  <h2
                    className={`whitespace-pre duration-300 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Shift
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                  >
                    Shift
                  </h2>
                </NavLink>
              </div>
            )}

            {/* <NavLink
                to="/hrms/attendance"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                  }`
                }
              >
                <div>
                  {React.createElement(FaFileWord, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Leave
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Leave
                </h2>
              </NavLink> */}

            <div>
              <div
                onClick={toggleLeaveMenu}
                className="cursor-pointer flex items-center text-sm gap-3.5 font-medium p-2 "
              >
                <div>
                  {React.createElement(FaRegCalendarTimes, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Leave
                </h2>
                <div className="ml-auto">
                  {isLeaveOpen
                    ? React.createElement(MdExpandLess, { size: "20" })
                    : React.createElement(MdExpandMore, { size: "20" })}
                </div>
              </div>
              {isLeaveOpen && (
                <div className="">
                  <NavLink
                    to="/admin/hrms/leave-application"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 "
                      }`
                    }
                  >
                    <div>
                      {React.createElement(IoSettingsOutline, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Leave Application
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Leave Application
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/admin/hrms/leave-balance"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 "
                      }`
                    }
                  >
                    <div>
                      {React.createElement(IoSettingsOutline, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Leave Balance
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Leave Balance
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/admin/hrms/rollover"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 "
                      }`
                    }
                  >
                    <div>{React.createElement(FaUserCog, { size: "20" })}</div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Rollover
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Rollover
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/general-settings"
                    className={() =>
                      `${
                        isActiveLink(location, routes7)
                          ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 "
                      }`
                    }
                  >
                    <div>
                      {React.createElement(ImFileText2, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Setting
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Setting
                    </h2>
                  </NavLink>
                </div>
              )}
            </div>

            {/* <NavLink
                to="/hrms/attendance"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                  }`
                }
              >
                <div>
                  {React.createElement(FaRegFilePowerpoint, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Payroll
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Payroll
                </h2>
              </NavLink> */}

            <div>
              <div
                onClick={togglepayMenu}
                className="cursor-pointer flex items-center text-sm gap-3.5 font-medium p-2 "
              >
                <div>{React.createElement(FaMoneyBillAlt, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Payroll
                </h2>
                <div className="ml-auto">
                  {ispayOpen
                    ? React.createElement(MdExpandLess, { size: "20" })
                    : React.createElement(MdExpandMore, { size: "20" })}
                </div>
              </div>
              {ispayOpen && (
                <div className="">
                  <NavLink
                    to="/admin/hrms/run-payroll"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 "
                      }`
                    }
                  >
                    <div>
                      {React.createElement(IoSettingsOutline, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Run Payroll
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Run Payroll
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/admin/pay-slip"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 "
                      }`
                    }
                  >
                    <div>
                      {React.createElement(IoSettingsOutline, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Payslip & Form 16s
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Payslip & Form 16s
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/admin/hrms/loan-app"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 "
                      }`
                    }
                  >
                    <div>{React.createElement(FaUserCog, { size: "20" })}</div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Loan Application
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Loan Application
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/admin/hrms/payroll-setting"
                    className={({ isActive }) =>
                      `${
                        isActiveLink(location, routes8)
                          ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 "
                      }`
                    }
                  >
                    <div>
                      {React.createElement(ImFileText2, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Payroll Setting
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      Payroll Setting
                    </h2>
                  </NavLink>
                  <NavLink
                    to="/admin/hrms/ctc/"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                          : "group flex items-center text-sm gap-3.5 font-medium p-2 "
                      }`
                    }
                  >
                    <div>
                      {React.createElement(ImFileText2, { size: "20" })}
                    </div>
                    <h2
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      CTC Template
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      CTC Template
                    </h2>
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/admin/reports/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 "
                }`
              }
            >
              <div>{React.createElement(FaFileInvoice, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Reports
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Reports
              </h2>
            </NavLink>
          </>
        </div>
      </div>
    </section>
  );
};

export default AdminHRMS;
