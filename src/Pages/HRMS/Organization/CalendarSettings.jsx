import React, { useState } from "react";
import Table from "../../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Header from "../../Form/Header";
import OrganizationSetting from "./OrganizationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import CalendarSettingsModal from "./CalendarSettingsModal";

function CalendarSettings() {
  const [editModal, setEditModal] = useState(false);
  const columns = [
    {
      name: "Name of Milestone",
      selector: (row) => row.name_of_milestone,
      sortable: true,
    },
    {
      name: "Who can view it",
      selector: (row) => row.who_can_view_it,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button onClick={() => setEditModal(true)}>
            <BiEdit size={15} />
          </button>
          <div>
            <RiDeleteBin6Line size={15} />
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name_of_milestone: "Approved Leave",
      who_can_view_it: "Employees Supervisor Only, Admin Only",
    },
    {
      id: 2,
      name_of_milestone: "Birthday",
      who_can_view_it: "Everyone",
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
              Organisation Settings
            </h2>
            <p className="text-base font-medium text-gray-800 mx-8">
              Company details and settings can be performed under this section.
            </p>
          </div>
          <div className="flex gap-1 md:flex-row flex-col">
            <div>
              <OrganizationSetting />
              <div className="bg-white p-6 rounded-lg border border-gray-200 w-96 my-3">
                <h2 className="text-xl font-semibold mb-4">VibeCopilot</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Location :</span>
                    <span>Mumbai, Maharashtra</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">No. Of Employees::</span>
                    <span>20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Authorised Signatory::</span>
                    <span>ABC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">No. of Admins::</span>
                    <span>3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">No. Of Payrolls Run::</span>
                    <span>12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">
                      Part Of Vibe Connect Since::
                    </span>
                    <span>23/20/2023</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full my-12">
              <div className="flex justify-between my-2">
                <h2 className="text-xl font-semibold text-gray-600 mx-3">
                  Calendar Settings
                </h2>
              </div>

              <div>
                <Table columns={columns} data={data} />
              </div>
            </div>

            <div className="my-5">
              <HRMSHelpCenter help={"calendar"} />
            </div>
          </div>
        </div>
      </div>
      {editModal && <CalendarSettingsModal onClose={() => setEditModal(false)} />}
    </div>
  );
}

export default CalendarSettings;
