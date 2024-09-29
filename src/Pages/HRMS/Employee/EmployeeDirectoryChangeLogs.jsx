import React from "react";
import EmployeeDirectorySetting from "./EmployeeDirectorySetting";
import EditEmployeeDirectoryPage from "./EditEmployeeDirectoryPage";
import { FaRegFileAlt } from "react-icons/fa";
import profile3 from "/profile3.jpg"
function EmployeeDirectoryChangeLogs() {
  
  return (
    <div>
      <EditEmployeeDirectoryPage />
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <EmployeeDirectorySetting />
        </div>
        <div className="col-span-3">
          <div className=" bg-white rounded-md mx-5 py-5 px-5 mb-5">
            <div className="flex  bg-white py-3">
              <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                <FaRegFileAlt size={20} />
                Change Logs
              </h2>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-600">20-06-2024, Thursday</h4>
              <div className="my-3">
                <div className="flex items-start">
                  <div>
                    <img
                      className="w-14 h-14 rounded-full"
                      alt="image"
                      src={profile3}
                    />
                  </div>
                  <div className="w-full ml-4">
                    <p className="text-gray-900">
                      Karan Sharma | (Admin - 7) updated the employees
                    </p>
                    <div className="flex justify-between mt-1">
                      <p className="text-gray-600 font-light">
                        Is recruitment applicable in the Employee admin
                        restriction Section has been changed from "No" to "Yes"
                      </p>
                      <p className="text-gray-600 font-light text-right">
                        03:29:40 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h4 className="text-lg font-medium text-gray-600">20-06-2024, Thursday</h4>
              <div className="my-3">
                <div className="flex items-start">
                  <div>
                    <img
                      className="w-14 h-14 rounded-full"
                      alt="image"
                      src={profile3}
                    />
                  </div>
                  <div className="w-full ml-4">
                    <p className="text-gray-900">
                      Karan Sharma | (Admin - 7) updated the employees
                    </p>
                    <div className="flex justify-between mt-1">
                      <p className="text-gray-600 font-light">
                      Is survey applicable in the Employee admin restriction Section has been changed from "No" to "Yes"
                      </p>
                      <p className="text-gray-600 font-light text-right">
                        03:29:40 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h4 className="text-lg font-medium text-gray-600">20-06-2024, Thursday</h4>
              <div className="my-3">
                <div className="flex items-start">
                  <div>
                    <img
                      className="w-14 h-14 rounded-full"
                      alt="image"
                      src={profile3}
                    />
                  </div>
                  <div className="w-full ml-4">
                    <p className="text-gray-900">
                      Karan Sharma | (Admin - 7) updated the employees
                    </p>
                    <div className="flex justify-between mt-1">
                      <p className="text-gray-600 font-light">
                      Is pms applicable in the Employee admin restriction Section has been changed from "Yes" to "No"
                      </p>
                      <p className="text-gray-600 font-light text-right">
                        03:29:40 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h4 className="text-lg font-medium text-gray-600">20-06-2024, Thursday</h4>
              <div className="my-3">
                <div className="flex items-start">
                  <div>
                    <img
                      className="w-14 h-14 rounded-full"
                      alt="image"
                      src={profile3}
                    />
                  </div>
                  <div className="w-full ml-4">
                    <p className="text-gray-900">
                      Karan Sharma | (Admin - 7) updated the employees
                    </p>
                    <div className="flex justify-between mt-1">
                      <p className="text-gray-600 font-light">
                        Is recruitment applicable in the Employee admin
                        restriction Section has been changed from "No" to "Yes"
                      </p>
                      <p className="text-gray-600 font-light text-right">
                        03:29:40 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDirectoryChangeLogs;
