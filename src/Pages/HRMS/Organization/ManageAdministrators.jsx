import React from "react";
import Table from "../../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { IoIosArrowBack} from "react-icons/io";
import Header from "../../Form/Header";
import UserSettings from "./UserSettings";
import { CiSearch } from "react-icons/ci";
import { GrHelpBook } from "react-icons/gr";
function ManageAdministrators() {
  const columns = [
    {
      name: "Full Name",
      selector: (row) => row.full_name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Type of Access",
      selector: (row) => row.type_of_access,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      full_name: "Vinay Kumar",
      email: "vinay@gmail.com",
      type_of_access: "Restricted Access",
    },
  ];

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
            <div className="w-full my-12">
              <div className="flex justify-between">
                <h2 className="text-xl font-medium">Listing Admin Employees</h2>
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search"
                    className="border bg-white rounded-xl pl-3 pr-4 py-2 w-full focus:outline-none mb-2"
                  />
                  <CiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>
              <div className="bg-white rounded-md py-3 px-5">
                <Table columns={columns} data={data} />
              </div>
            </div>
            <div className="my-4 mx-2 w-fit">
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

export default ManageAdministrators;
