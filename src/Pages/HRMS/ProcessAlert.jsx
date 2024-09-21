import React, { useState } from "react";
import { Link } from "react-router-dom";
import HRMSAlert from "./HRMSAlert";

const ProcessAlert = () => {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState("OverDue");
  const [subPage, setSubPage] = useState("attendance");
  return (
    <div className="mt-5">
      <HRMSAlert />

      <div className=" w-full my-2 flex  ml-20 mt-5 overflow-hidden flex-col">
        <div className="flex w-full">
          <div className=" flex gap-2 p-2 pb-0 border-b-2 border-gray-200 w-full">
            <h2
              className={`p-1 ${
                page === "OverDue" &&
                `bg-white font-medium text-blue-500 shadow-custom-all-sides`
              } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
              onClick={() => setPage("OverDue")}
            >
              Overdue
            </h2>
            <h2
              className={`p-1 ${
                page === "Upcoming" &&
                "bg-white font-medium text-blue-500 shadow-custom-all-sides"
              } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
              onClick={() => setPage("Upcoming")}
            >
              Upcoming
            </h2>
            <h2
              className={`p-1 ${
                page === "Archived" &&
                "bg-white font-medium text-blue-500 shadow-custom-all-sides"
              } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
              onClick={() => setPage("Archived")}
            >
              Archived
            </h2>
          </div>
        </div>
        {page === "OverDue" && (
          <div>
            <div className=" flex gap-2 p-2 pb-0 border-b-2 border-gray-200 w-full">
              <h2
                className={`p-1 ${
                  subPage === "attendance" &&
                  `bg-white font-medium text-blue-500 shadow-custom-all-sides`
                } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                onClick={() => setSubPage("attendance")}
              >
                Attendance
              </h2>
              <h2
                className={`p-1 ${
                  subPage === "payroll" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                onClick={() => setSubPage("payroll")}
              >
                Payroll
              </h2>
              <h2
                className={`p-1 ${
                  subPage === "leave" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                onClick={() => setSubPage("leave")}
              >
                Leave
              </h2>
              <h2
                className={`p-1 ${
                  subPage === "Expense" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                onClick={() => setSubPage("Expense")}
              >
                Expense
              </h2>
              <h2
                className={`p-1 ${
                  subPage === "Others" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                onClick={() => setSubPage("Others")}
              >
                Others
              </h2>
            </div>
            <div>
              {subPage === "attendance" && (
                <div className="flex   bg-gray-100 space-x-4">
                  <div className="bg-white rounded-lg shadow-md p-6 w-96  mx-4 my-4">
                    <div className="flex gap-2 text-center">
                      <div className="text-3xl font-bold mb-2"></div>
                      <div className="flex flex-col">
                        <div className="text-gray-700 mb-4">
                          Process Attendance for July-2024
                        </div>
                        <button
                          onClick={() => setShowModal(true)}
                          //  to={"/admin/hrms/setting"}
                          className="bg-black mr-1 h-10 mt-1  w-24 text-center text-white py-1 px-4 rounded-lg"
                        >
                          Process
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {subPage === "payroll" && (
                <div className="flex   bg-gray-100 space-x-4">
                  <div className="bg-white rounded-lg shadow-md p-6 w-96  mx-4 my-4">
                    <div className="flex gap-2 text-center">
                      <div className="text-3xl font-bold mb-2"></div>
                      <div className="flex flex-col">
                        <div className="text-gray-700 mb-4">
                          Run Payroll for June-2024
                        </div>
                        <Link
                          //  to={"/admin/hrms/setting"}
                          className="bg-black mr-1 h-10 mt-1  w-24 text-center text-white py-2 px-4 rounded-lg"
                        >
                          Process
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {subPage === "leave" && (
                <div className="flex   bg-gray-100 space-x-4">
                  <div className="bg-white rounded-lg shadow-md p-6 w-96  mx-4 my-4">
                    <div className="flex gap-2 text-center">
                      <div className="text-3xl font-bold mb-2"></div>
                      <div className="flex flex-col">
                        <div className="text-gray-700 mb-4">
                          Rollover Leave Cycle Balances
                        </div>
                        <Link
                          //  to={"/admin/hrms/setting"}
                          className="bg-black mr-1 h-10 mt-1  w-24 text-center text-white py-2 px-4 rounded-lg"
                        >
                          Process
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {subPage === "Others" && (
                <div className="flex   bg-gray-100 space-x-4">
                  <div className="bg-white rounded-lg shadow-md p-6 w-96  mx-4 my-4">
                    <div className="flex gap-2 text-center">
                      <div className="text-3xl font-bold mb-2"></div>
                      <div className="flex flex-col">
                        <div className="text-gray-700 mb-4">
                          Publish 18 Payslips for November-2023
                        </div>
                        <Link
                          to={"/hrms/alerts/payslip"}
                          className="bg-black mr-1 h-10 mt-1  w-24 text-center text-white py-2 px-4 rounded-lg"
                        >
                          Publish
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {page === "Upcoming" && (
          <div className="flex   bg-gray-100 space-x-4">
            <div className="bg-white rounded-lg shadow-md p-6 w-96  mx-4 my-4">
              <div className="flex gap-2 text-center">
                <div className="text-3xl font-bold mb-2"></div>
                <div className="flex flex-col">
                  <div className="text-gray-700 mb-4">
                    Run Payroll for July-2024
                  </div>
                  <Link
                    to={"/hrms/alerts/setup-issues/attendance-general-setting"}
                    className="bg-black mr-1 h-10 mt-1  w-24 text-white py-2 px-4 rounded-lg"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {page === "Archived" && (
          <div className="flex   bg-gray-100 space-x-4">
            <div className="bg-white rounded-lg shadow-md p-6 w-96  mx-4 my-4">
              <div className="flex gap-2 text-center">
                <div className="text-3xl font-bold mb-2"></div>
                <div className="flex flex-col">
                  <div className="text-gray-700 mb-4">
                    Process Attendance for July-2024
                  </div>
                  <Link
                    to={"/hrms/alerts/setup-issues/attendance-general-setting"}
                    className="bg-black mr-1 h-10 mt-1  w-24 text-white py-2 px-4 rounded-lg"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <div>
        {subPage === "attendance" && (
          <div className="flex   bg-gray-100 space-x-4">
     
          <div  className="bg-white rounded-lg shadow-md p-6 w-96  mx-4 my-4">
            <div className="flex gap-2 text-center">
              <div className="text-3xl font-bold mb-2"></div>
              <div className="flex flex-col">
              <div className="text-gray-700 mb-4">Process Attendance for July-2024</div>
              <Link 
              //  to={"/admin/hrms/setting"}
                className="bg-black mr-1 h-10 mt-1  w-20 text-center text-white py-1 px-4 rounded-lg"
               
              >
                Process
              </Link>
              
              </div>
            </div>
          </div></div>
        )}
        {subPage === "payroll" && (
        <div className="flex   bg-gray-100 space-x-4">
     
        <div  className="bg-white rounded-lg shadow-md p-6 w-96  mx-4 my-4">
          <div className="flex gap-2 text-center">
            <div className="text-3xl font-bold mb-2"></div>
            <div className="flex flex-col">
            <div className="text-gray-700 mb-4">Run Payroll for June-2024</div>
            <Link 
            //  to={"/admin/hrms/setting"}
              className="bg-black mr-1 h-10 mt-1  w-20 text-center text-white py-1 px-4 rounded-lg"
             
            >
              Process
            </Link>
            
            </div>
          </div>
        </div></div>
        )}
        {subPage === "leave" && (
         <div className="flex   bg-gray-100 space-x-4">
     
         <div  className="bg-white rounded-lg shadow-md p-6 w-96  mx-4 my-4">
           <div className="flex gap-2 text-center">
             <div className="text-3xl font-bold mb-2"></div>
             <div className="flex flex-col">
             <div className="text-gray-700 mb-4">Rollover Leave Cycle Balances</div>
             <Link 
             //  to={"/admin/hrms/setting"}
               className="bg-black mr-1 h-10 mt-1  w-20 text-center text-white py-1 px-4 rounded-lg"
              
             >
               Process
             </Link>
             
             </div>
           </div>
         </div></div>
        )}
         {subPage === "Others" && (
         <div className="flex   bg-gray-100 space-x-4">
     
         <div  className="bg-white rounded-lg shadow-md p-6 w-96  mx-4 my-4">
           <div className="flex gap-2 text-center">
             <div className="text-3xl font-bold mb-2"></div>
             <div className="flex flex-col">
             <div className="text-gray-700 mb-4">Publish 18 Payslips for November-2023</div>
             <Link 
             //  to={"/admin/hrms/setting"}
               className="bg-black mr-1 h-10 mt-1  w-20 text-center text-white py-1 px-4 rounded-lg"
              
             >
               Publish
             </Link>
             
             </div>
           </div>
         </div></div>
        )}
      
      </div> */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg w-96">
              <h2 className="text-lg font-bold mb-4">Are you sure?</h2>
              <p>
                This will process attendance for all your employees,make sure
                you have validated the attendance records before you process.
              </p>
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              {""}{" "}
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Confirm
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessAlert;
