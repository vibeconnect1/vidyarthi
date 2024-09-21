import React, { useState } from "react";
import Table from "../../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Header from "../../Form/Header";
import OrganizationSetting from "./OrganizationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";
import { IoAddCircleOutline } from "react-icons/io5";
import HolidayModal from "./HolidayModal";
import holi from "/holi.jpg"
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditHolidayModal from "./EditHolidayModal";
import HolidayReportModal from "./HolidayReportModal";

function HolidayCalendar() {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);

  const columns = [
    {
      name: "Holiday and Profile",
      cell: (row) => (
        <div className="flex items-center space-x-3">
          {/* Profile Image */}
          <img
            src={holi}
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          {/* Holiday Name and Profile Name */}
          <div>
            <p className="font-medium">{row.holidayName}</p>
            <p className="text-sm text-gray-500">{row.profileName}</p>
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Holiday Name",
      selector: (row) => row.holidayName,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Type Of Holiday",
      selector: (row) => row.type_Of_holiday,
      sortable: true,
    },
    {
      name: "Applies To",
      selector: (row) => row.applies_to,
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
      holidayName: "Makar Sankranti",
      date: "22-01-2024, Mon",
      type_Of_holiday: "Flexi",
      applies_to: "Specific",
      action: "Edit",
    },
    {
      id: 2,
      holidayName: "Holi",
      date: "25-03-2024, Mon",
      type_Of_holiday: "Mandatory",
      applies_to: "All",
      action: "Edit",
    },
    {
      id: 3,
      holidayName: "Independence Day",
      date: "15th August 2024",
      type_Of_holiday: "Mandatory",
      applies_to: "All",
      action: "Edit",
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

            {/* Holiday Table Section */}
            <div className="w-full my-12">
              <div className="flex justify-between my-2">
                <h2 className="text-xl font-semibold text-gray-600 mx-3">
                  Holiday Calendar
                </h2>
                <div className="flex gap-1">
                  <select className="border-b border-gray-500 focus:outline-none">
                    <option>Year 2023</option>
                    <option>Year 2024</option>
                    <option>Year 2025</option>
                  </select>
                  <button
                    className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
                    onClick={() => setAddModal(true)}
                  >
                    <IoAddCircleOutline size={20} />
                    Holiday
                  </button>
                  <button className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
                    onClick={() => setReportModal(true)}
                  >
                    <IoAddCircleOutline size={20} />
                    Holiday Report
                  </button>
                </div>
              </div>

              {/* Table with Scrollable Container */}
              <div className="overflow-x-auto max-h-96">
                <Table columns={columns} data={data} />
              </div>
            </div>

            <div className="my-5">
              <HRMSHelpCenter help={"holiday"} />
            </div>
          </div>
        </div>
      </div>

      {addModal && <HolidayModal onClose={() => setAddModal(false)} />}
      {editModal && <EditHolidayModal onClose={() => setEditModal(false)} />}
      {reportModal && <HolidayReportModal onClose={() => setReportModal(false)} />}
    </div>
  );
}

export default HolidayCalendar;
