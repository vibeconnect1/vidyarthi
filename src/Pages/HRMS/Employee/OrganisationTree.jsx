import React, { useState } from "react";
import { FaBullhorn, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import AdminHRMS from "../AdminHRMS";
import Switch from "../../../ConfigurationFile/Switch";
import { CiSettings } from "react-icons/ci";
import profile3 from "/profile3.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";
import finance from "/finance.png";
import { BsEye } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiWashingMachineFill } from "react-icons/pi";
import { FaBoxesPacking } from "react-icons/fa6";
import { GrUserSettings } from "react-icons/gr";
import sale from "/sale.png";
import mobile from "/mobile.png";
import email from "/email.png";
import branch from "/branch.png";
import user from "/user.png";

function OrganisationTree() {
  const [employeeDetails, setEmployeeDetails] = useState(false);
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col ">
        <div className="">
          <header className="text-black bg-white  py-4 ml-20 border border-gray-400">
            <h1 className="text-3xl pl-5 font-bold">Organisation Tree</h1>
            <p className="pl-5">
              Organisation splits among employees are presented under this
              section.
            </p>
            <div className="md:flex justify-end gap-2 mb-1 mx-5 my-5 space-y-2">
              <div className="flex gap-3 border border-gray-500 items-center rounded-md px-5 my-3 py-2">
                <p className="text-sm font-medium">Visible to Employee</p>
                <Switch />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search Employee"
                  className="border border-gray-500 p-2 text-black rounded-xl w-full  md:w-72"
                />
              </div>
              <div>
                <Link
                  to={"/hrms/organisation-tree-details/setting"}
                  className="border-2 font-semibold bg-gray-500 duration-150 transition-all border-white p-2 rounded-md text-white cursor-pointer text-center flex items-center  gap-2 justify-center"
                >
                  <CiSettings size={20} />
                  <span>Org Settings</span>
                </Link>
              </div>
              <div>
                <div className="bg-gray-500 text-white hover:bg-gray-700 font-semibold p-3 rounded-md h-10 w-10 flex items-center justify-center">
                  <FaDownload size={25} />
                </div>
              </div>
            </div>
          </header>
          <div className="grid grid-cols-12 gap-5 mx-5">
            <div className="col-span-8 bg-white my-3 rounded-md">
              <div className="flex justify-center border p-5">
                <div
                  className="flex gap-3 border-2 border-gray-300 py-6 px-10 rounded-md relative"
                  onClick={() => setEmployeeDetails(!employeeDetails)}
                >
                  <div className="flex items-center">
                    <img
                      src={profile3}
                      className="h-14 w-14 rounded-full"
                    ></img>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium">Ankit Gaurav</h2>
                    <p className="text-gray-500">Marketing Head</p>
                  </div>
                  <div className="bg-gray-500 text-white rounded-md absolute -bottom-7 right-3">
                    <span className="text-sm flex items-center px-1 py-1">
                      12{" "}
                      <span>
                        <RiArrowDropDownLine className="h-8 w-8" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 bg-white my-3 py-5 px-5 rounded-md">
              <div>
                {!employeeDetails ? (
                  <div>
                    <h2 className="font-medium text-gray-500 text-lg mb-2">
                      Departments
                    </h2>
                    <div className="border-t border-gray-500">
                      <div className="flex justify-between my-5">
                        <div className="flex gap-2">
                          <img
                            src={finance}
                            className="h-12 w-12 rounded-full"
                          ></img>
                          <h2 className="text-sm font-medium flex items-center">
                            Finance
                          </h2>
                        </div>
                        <div>
                          <Link
                            to={`/hrms/organisation-tree-details`}
                            className="border border-gray-500 rounded-md py-1 px-5 flex items-center gap-2"
                          >
                            <BsEye size={15} /> View
                          </Link>
                        </div>
                      </div>
                      <div className="flex justify-between my-5">
                        <div className="flex gap-2">
                          <HiMiniUserGroup className="h-10 w-10 text-gray-300" />
                          <h2 className="text-sm font-medium flex items-center">
                            HR
                          </h2>
                        </div>
                        <div>
                          <Link
                            to={`/hrms/organisation-tree-details`}
                            className="border border-gray-500 rounded-md py-1 px-5 flex items-center gap-2"
                          >
                            <BsEye size={15} /> View
                          </Link>
                        </div>
                      </div>
                      <div className="flex justify-between my-5">
                        <div className="flex gap-2">
                          <PiWashingMachineFill className="h-10 w-10 text-sky-300" />
                          <h2 className="text-sm font-medium flex items-center">
                            L machine
                          </h2>
                        </div>
                        <div>
                          <Link
                            to={`/hrms/organisation-tree-details`}
                            className="border border-gray-500 rounded-md py-1 px-5 flex items-center gap-2"
                          >
                            <BsEye size={15} /> View
                          </Link>
                        </div>
                      </div>
                      <div className="flex justify-between my-5">
                        <div className="flex gap-2">
                          <FaBoxesPacking className="h-10 w-10 text-amber-300" />
                          <h2 className="text-sm font-medium flex items-center">
                            L packing
                          </h2>
                        </div>
                        <div>
                          <Link
                            to={`/hrms/organisation-tree-details`}
                            className="border border-gray-500 rounded-md py-1 px-5 flex items-center gap-2"
                          >
                            <BsEye size={15} /> View
                          </Link>
                        </div>
                      </div>
                      <div className="flex justify-between my-5">
                        <div className="flex gap-2">
                          <FaBullhorn className="h-10 w-10 text-green-300" />
                          <h2 className="text-sm font-medium flex items-center">
                            Marketing
                          </h2>
                        </div>
                        <div>
                          <Link
                            to={`/hrms/organisation-tree-details`}
                            className="border border-gray-500 rounded-md py-1 px-5 flex items-center gap-2"
                          >
                            <BsEye size={15} /> View
                          </Link>
                        </div>
                      </div>
                      <div className="flex justify-between my-5">
                        <div className="flex gap-2">
                          <GrUserSettings className="h-10 w-10 text-yellow-300" />
                          <h2 className="text-sm font-medium flex items-center">
                            Operations
                          </h2>
                        </div>
                        <div>
                          <Link
                            to={`/hrms/organisation-tree-details`}
                            className="border border-gray-500 rounded-md py-1 px-5 flex items-center gap-2"
                          >
                            <BsEye size={15} /> View
                          </Link>
                        </div>
                      </div>
                      <div className="flex justify-between my-5">
                        <div className="flex gap-2">
                          <img
                            src={sale}
                            className="h-12 w-12 rounded-full"
                          ></img>
                          <h2 className="text-sm font-medium flex items-center">
                            Sales
                          </h2>
                        </div>
                        <div>
                          <Link
                            to={`/hrms/organisation-tree-details`}
                            className="border border-gray-500 rounded-md py-1 px-5 flex items-center gap-2"
                          >
                            <BsEye size={15} /> View
                          </Link>
                        </div>
                      </div>
                      <div className="flex justify-between my-5">
                        <div className="flex gap-2">
                          <HiMiniUserGroup className="h-10 w-10 text-blue-300" />
                          <h2 className="text-sm font-medium flex items-center">
                            Unassigned
                          </h2>
                        </div>
                        <div>
                          <Link
                            to={`/hrms/organisation-tree-details`}
                            className="border border-gray-500 rounded-md py-1 px-5 flex items-center gap-2"
                          >
                            <BsEye size={15} /> View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex gap-3 py-3">
                      <div className="flex items-center">
                        <img
                          src={profile3}
                          className="h-14 w-14 rounded-full"
                        ></img>
                      </div>
                      <div>
                        <h2 className="text-lg font-medium">Rajan Kumar</h2>
                        <p className="text-gray-500">MP</p>
                        <p className="text-gray-500">125677</p>
                      </div>
                    </div>
                    <div className="flex gap-3 border-t border-gray-300 py-2">
                      <div className="flex items-center">
                        <img
                          src={profile3}
                          className="h-10 w-10 rounded-full"
                        ></img>
                      </div>
                      <div>
                        <h2 className="text-gray-500 text-sm">
                          Reporting Supervisor
                        </h2>
                        <p className="text-sm font-medium text-gray-600 mt-1">
                          Mukesh
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 py-2">
                      <div className="flex items-center">
                        <img
                          src={mobile}
                          className="h-10 w-10 rounded-full"
                        ></img>
                      </div>
                      <div>
                        <h2 className="text-gray-500 text-sm">Mobile No.</h2>
                        <p className="text-sm font-medium text-gray-600 mt-1">
                          8979922321
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 py-2">
                      <div className="flex items-center">
                        <img
                          src={email}
                          className="h-10 w-10 rounded-full"
                        ></img>
                      </div>
                      <div>
                        <h2 className="text-gray-500 text-sm">Email ID</h2>
                        <p className="text-sm font-medium text-gray-600 mt-1">
                          Rajan@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 py-2">
                      <div className="flex items-center">
                        <img
                          src={branch}
                          className="h-10 w-10 rounded-full"
                        ></img>
                      </div>
                      <div>
                        <h2 className="text-gray-500 text-sm">
                          Branch Location
                        </h2>
                        <p className="text-sm font-medium text-gray-600 mt-1">
                          Mumbai; Maharashtra
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 py-2">
                      <div className="flex items-center">
                        <img
                          src={user}
                          className="h-10 w-10 rounded-full"
                        ></img>
                      </div>
                      <div>
                        <h2 className="text-gray-500 text-sm">Designation</h2>
                        <p className="text-sm font-medium text-gray-600 mt-1">
                          MP
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganisationTree;
