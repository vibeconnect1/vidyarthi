import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Header from "../../Form/Header";
import UserSettings from "./UserSettings";
import { GrHelpBook } from "react-icons/gr";
function EmployeeNewsFeedPermissions() {
  return (
    <div>
      <Header />
      <div className="flex ml-24">
        <div className="flex flex-col overflow-hidden w-full">
          <div className="my-6">
            <h2 className="text-2xl font-medium text-gray-800 flex items-center gap-2">
              <Link to={``}>
                <IoIosArrowBack />
              </Link>
              User Settings
            </h2>
            <p className="text-base font-medium text-gray-800 mx-8">
              User details and settings can be performed under this section.
            </p>
          </div>
          <div className="flex gap-1 md:flex-row flex-col">
            <div>
              <UserSettings />
            </div>
            <div className="w-full">
                <h2 className="text-xl font-medium mt-12 mb-2 mx-5">Employee News Feed Permissions</h2>
              <div className="bg-white rounded-md px-5 py-10">
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                  Can employees share updates with people in their Company?
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                  Can employees share updates with people in their Location?
                  </label>
                  <div>
                    <label className="mr-4 text-gray-700">
                      <input
                        type="radio"
                        name="basicInformation"
                        className="mr-1"
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="basicInformation"
                        className="mr-1"
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                  Can employees share updates with people in other Location?
                  </label>
                  <div>
                    <label className="mr-4 text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                  Can employees share updates with people in their Old_Department?
                  </label>
                  <div>
                    <label className="mr-4 text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                      />
                      Yes
                    </label>
                    <label className="text-gray-700 ">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                  Can employees share updates with people in their Blood Group?
                  </label>
                  <div>
                    <label className="mr-4 text-gray-700">
                      <input type="radio" name="name" className="mr-1" />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input type="radio" name="name" className="mr-1" />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                  Can employees share updates with people in their Education Level?
                  </label>
                  <div>
                    <label className="mr-4 text-gray-700">
                      <input type="radio" name="name" className="mr-1" />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input type="radio" name="name" className="mr-1" />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                  Can employees share updates with people in their Currency?
                  </label>
                  <div>
                    <label className="mr-4 text-gray-700">
                      <input type="radio" name="name" className="mr-1" />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input type="radio" name="name" className="mr-1" />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                  Can employees share updates with specific people in their Company?
                  </label>
                  <div>
                    <label className="mr-4 text-gray-700">
                      <input type="radio" name="name" className="mr-1" />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input type="radio" name="name" className="mr-1" />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4 w-fit">
              <div className="flex flex-col mt-4 mr-2 bg-white rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
                <div className="flex  gap-4 font-medium">
                  <GrHelpBook size={20} />
                  <h2>Help Center</h2>
                </div>
                <div className=" ">
                  {/* <p className="font-medium">Help Center</p> */}
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>
                      <ul>
                        <li>
                          You can add administrators and manage admin access
                          rights like IP restrictions, 2-factor authentication,
                          etc
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          You can also restrict access permission based on
                          departments, locations, etc.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          You can add and manage third party users and invite
                          them to join login to the Quikchex software. For e.g.,
                          External auditor, external consultants, etc.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <p>
                        You can view/edit/delete admin permissions at any time.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeNewsFeedPermissions