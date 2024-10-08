import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";

function InstituteDetails() {
  const [isBasicSetup, setIsBasicSetup] = useState(false);
  const [isFees, setIsFees] = useState(false);
  const [communication, setCommunication] = useState(false);
  const [library, setLibrary] = useState(false);
  const [exam, setExam] = useState(false);
  const [transport, setTransport] = useState(false);
  const [canteen, setCanteen] = useState(false);
  const toggleBasicSetup = () => {
    setIsBasicSetup((prevState) => !prevState);
  };

  const location = useLocation();

  const basicRoutes = [
    "/school-management/school-Institution-home",
    "/school-management/school-song-and-prayer",
    "/school-management/academic-parent-recommendation",
    "/school-management/academic/general-rules",
    "/school-management/academic/csr",
    "/school-management/academic/discipline-code",
    "/school-management/academic/path-to-success",
    "/school-management/academic-details",
    "/school-management/stud-id-card",
    "/school-management/school-students",
    "/school-management/academic/employees",
    "/school-management/academic/Quotas",
    "/school-management/staff/Role",
    "/school-management/academic/calendar",
    "/school-management/academic/noticeboard",
    "/school-management/academic/live-classes"
  ];

  const feeRoutes = [
    "/school-management/fees-payment/feesType",
    "/school-management/fees-payment/fees-payment",
  ];

  useEffect(() => {
    if (feeRoutes.includes(location.pathname)) {
      setIsFees(true);
    }

    if (basicRoutes.includes(location.pathname)) {
      setIsBasicSetup(true);
    }
  }, [location.pathname]);

  return (
    <div className="h-screen w-48 text-black bg-white">
      <ul className="flex flex-col space-y-2 p-4 bg-white">
        <li>
          <NavLink
            to="/school-management/school-dashboard"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">
              <LuLayoutDashboard className="mt-1" /> Dashboard
            </div>
          </NavLink>
        </li>
        <li>
          <div
            className="p-4 cursor-pointer hover:bg-gray-300 flex justify-between items-center"
            onClick={toggleBasicSetup}
          >
            <div className="flex items-center">
              <span>Basic Setup</span>
            </div>
            <IoIosArrowUp
              className={`transform transition-transform ${
                isBasicSetup ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {isBasicSetup && (
            <ul>
              <li>
                <NavLink
                  to="/school-management/school-Institution-home"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Institution
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/school-song-and-prayer"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Song & Prayer
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic-parent-recommendation"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Parent Recommendation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/general-rules"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  General Rules
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/csr"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  CSR
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/discipline-code"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Discipline Code
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/path-to-success"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Path To Success
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic-details"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Academic
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/school-students"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Student
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/school-management/stud-id-card"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Student Id Card
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  to="/school-management/academic/applicant"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Applicant
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/school-management/academic/employees"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Employee
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/Quotas"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Quotas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/staff/Role"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  User Roles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/calendar"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Calendar & Timing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/noticeboard"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Noticeboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/academic/live-classes"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Live Classes
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div
            className="p-4 cursor-pointer hover:bg-gray-300 flex justify-between items-center"
            onClick={() => setIsFees(!isFees)}
          >
            <div className="flex items-center">
              <span className="whitespace-nowrap">Fees & Payment</span>
            </div>
            {isFees ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
          {isFees && (
            <ul>
              <li>
                <NavLink
                  to="/school-management/fees-payment/feesType"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Fees type
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/fees-payment/fees-payment"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Fees Payment
                </NavLink>
              </li>
              <li></li>
              {/* <li>
                <NavLink
                  to="/school-management/fees-payment/income"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Income
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  to="/school-management/fees-payment/expense"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Expense
                </NavLink>
              </li> */}
            </ul>
          )}
        </li>
        <li>
          <div
            className="p-4 cursor-pointer hover:bg-gray-300 flex justify-between items-center"
            onClick={() => setCommunication(!communication)}
          >
            <div className="flex items-center">
              <span className="whitespace-nowrap">Communication</span>
            </div>
            <IoIosArrowUp
              className={`transform transition-transform ${
                communication ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {communication && (
            <ul>
              <li>
                <NavLink
                  to="/student/event"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/student/survey"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Survey
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div
            className="p-4 cursor-pointer hover:bg-gray-300 flex justify-between items-center"
            onClick={() => setLibrary(!library)}
          >
            <div className="flex items-center">
              <span className="whitespace-nowrap">Library</span>
            </div>
            <IoIosArrowUp
              className={`transform transition-transform ${
                library ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {library && (
            <ul>
              <li>
                <NavLink
                  to="/school-management/library/book"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/library/library-card"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Library Card
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/library/issue-book"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Issue Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/library/book-return"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Book Return
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/library/request-book"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Request Book
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div
            className="p-4 cursor-pointer hover:bg-gray-300 flex justify-between items-center"
            onClick={() => setExam(!exam)}
          >
            <div className="flex items-center">
              <span className="whitespace-nowrap">Examination</span>
            </div>
            <IoIosArrowUp
              className={`transform transition-transform ${
                exam ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {exam && (
            <ul>
              <li>
                <NavLink
                  to="/school-management/exam-category"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Exam Category
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/exam-timetable"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Exam Time Table
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/admit-cards"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Admit Card
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/exam-result"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Exam Result
                </NavLink>
              </li>
              
            </ul>
          )}
        </li>
        <li>
          <div
            className="p-4 cursor-pointer hover:bg-gray-300 flex justify-between items-center"
            onClick={() => setTransport(!transport)}
          >
            <div className="flex items-center">
              <span className="whitespace-nowrap">Transport</span>
            </div>
            <IoIosArrowUp
              className={`transform transition-transform ${
                transport ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {transport && (
            <ul>
              <li>
                <NavLink
                  to="/school-management/transport/vehicle"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Add Vehicle
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/transport/driver"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Driver
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/transport/vehicle-route"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Route
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-management/transport/transport-allocation"
                  className={({ isActive }) =>
                    `p-4 block hover:bg-gray-200 ${
                      isActive
                        ? "custom-bg text-black mx-2 my-3 rounded-md"
                        : ""
                    }`
                  }
                >
                  Allocation
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to="/canteen/canteen-info"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Canteen</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/asset"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Asset</div>
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/school-management/purchase"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">
               Purchase
            </div>
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/school-management/ticket"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Service Desk</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/supplier"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Supplier</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/meeting"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Online Meeting</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/birthday"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Birthday</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/visitor-page"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Passes</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/project-management"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Project Management</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/service-page"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Soft Service</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/hotel-request"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Booking Request</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/audit"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Audit</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/Permit"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Permit</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/incidents"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Incidents</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/mail-room"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Mail Room</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/business-card"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Business Card</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/work-space-booking"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">WorkSpace Booking</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/doctor-appointment"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Doctor Appointment</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/insurance"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Insurance</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/parkings"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Parkings</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-management/document-main"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">Document Pro</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hrms/hrms-Dashboard"
            className={({ isActive }) =>
              `p-4 block hover:bg-gray-200 ${
                isActive ? "custom-bg text-black mx-2 my-3 rounded-md" : ""
              }`
            }
          >
            <div className="flex gap-2">HRMS</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default InstituteDetails;
