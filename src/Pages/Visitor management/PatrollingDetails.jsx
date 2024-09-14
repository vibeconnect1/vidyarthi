import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { FaQrcode } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import RVehicleQRCodeModal from "../Modal/RVehicleQRCodeModal";
import Table from "../../ConfigurationFile/Table";
import PatrollingQrCodeModal from "../Modal/PatrollingQrCodeModal";

const PatrollingDetails = () => {
  const [qrCode, setQrCode] = useState(false);
  const LogsColumn = [
    {
      name: "Name",
      selector: (row) => row.unit_name,
      sortable: true,
    },
    {
      name: "Expected Time",
      selector: (row) => row.expected_time,
      sortable: true,
    },
    {
      name: "Actual Date",
      selector: (row) => row.actual_time,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const LogsData = [
    {
      id: 1,
      name: "Building A",
      expected_time: "2024-09-10 8:00 AM",
      actual_time: "2024-09-10 08:15 AM",
      status: "Not completed",
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center text-black bg-white font-semibold rounded-md my-3 text-lg p-2 px-4 mx-5">
            Patrolling Details
          </h2>
          <div className="bg-white mx-5 rounded-md py-5">
            <div className="flex gap-2 justify-end my-5 mx-5">
              <button
                className="flex gap-2 items-center justify-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white transition-all duration-500"
                onClick={() => setQrCode(true)}
              >
                <FaQrcode /> QR Code
              </button>
              <Link
                to={`/school-management/edit-patrolling`}
                className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full hover:bg-black transition-all duration-300 hover:text-white"
              >
                <BiEditAlt />
                Edit Details
              </Link>
            </div>
            <div className="md:grid px-4 flex flex-col grid-cols-3 gap-5 gap-x-4">
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Building: </p>
                <p>Building A</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Floor: </p>
                <p>Floor 1</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Unit: </p>
                <p>Unit 101</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Start Date: </p>
                <p>2024-09-10</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">End Date: </p>
                <p>2024-09-12</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Time Interval : </p>
                <p>8hr</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Start Time: </p>
                <p>08:00 PM</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">End Time: </p>
                <p>05:00 PM</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Created On: </p>
                <p>2024-09-01 10:00 AM</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Created On: </p>
                <p>2024-09-01 10:00 AM</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Updated on: </p>
                <p>2024-09-12</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Specific Time : </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="mx-5 my-5">
            <h2 className="border-b border-gray-500 my-5 text-lg font-medium">
              Logs
            </h2>
            <div>
              <Table columns={LogsColumn} data={LogsData} />
            </div>
          </div>
        </div>
      </div>
      {qrCode && <PatrollingQrCodeModal onClose={() => setQrCode(false)} />}
    </div>
  );
};
export default PatrollingDetails;
