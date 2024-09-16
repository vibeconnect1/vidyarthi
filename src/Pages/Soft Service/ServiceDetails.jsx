import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { FaQrcode, FaRegFileAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import ServiceQrCodeModal from "../Modal/ServiceQrCodeModal";
const ServiceDetails = () => {
  const [serviceFor, setserviceFor] = useState("schedule");
  const [file, setFile] = useState(null);
  const [qrCode, setQrCode] = useState(false);
  const { id } = useParams();
  const ScheduleColumn = [
    {
      name: "View",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/soft-service/schedule-task-detail`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
      maxWidth: "2rem",
    },
    {
      name: "Checklist",
      selector: (row) => row.checklist?.name,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.start_time,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Assigned To",
      selector: (row) => row.assigned_name,
      sortable: true,
    },
  ];
  const scheduleData = [
    {
      id: 1,
      checklist: { name: "Daily Inspection" },
      start_time: "2024-09-15 08:00",
      status: "Pending",
      assigned_name: "John Doe",
    },
    {
      id: 2,
      checklist: { name: "Weekly Maintenance" },
      start_time: "2024-09-18 09:00",
      status: "Completed",
      assigned_name: "Jane Smith",
    },
    {
      id: 3,
      checklist: { name: "Monthly Review" },
      start_time: "2024-09-20 10:00",
      status: "In Progress",
      assigned_name: "Michael Brown",
    },
    {
      id: 4,
      checklist: { name: "Safety Audit" },
      start_time: "2024-09-22 14:00",
      status: "Pending",
      assigned_name: "Alice Johnson",
    },
    {
      id: 5,
      checklist: { name: "Equipment Inspection" },
      start_time: "2024-09-25 11:30",
      status: "Scheduled",
      assigned_name: "David Wilson",
    },
  ];
  
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails/>
        <div className="flex flex-col w-full overflow-hidden">
          <h2 className="text-center text-xl font-bold p-2 rounded-md my-3 mx-5 text-black bg-white">
            Service Details
          </h2>
          <div className="my-2 mb-10 p-2 px-5 rounded-md md:mx-5 bg-white ">
            <div className="flex gap-2 justify-end">
              <button className="flex gap-2 items-center justify-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white transition-all duration-500"
              onClick={() => setQrCode(true)}
              >
                <FaQrcode /> QR Code
              </button>
              <Link
                to={`/school-management/edit-service/${id}`}
                className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full hover:bg-black transition-all duration-300 hover:text-white"
              >
                <BiEditAlt />
                Edit Details
              </Link>
            </div>
            <div className="flex justify-center m-5">
              <h1 className="p-2 border-2 border-black md:px-28 text-xl rounded-md font-semibold">
                Dusting
              </h1>
            </div>
            <div className="my-2 flex justify-end"></div>
            <div className="p-5 grid md:grid-cols-3 gap-5 bg-gray-100 rounded-md font-medium">
              <div className="grid grid-cols-2">
                <p>Building :</p>
                <p className="text-sm">A Tower</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Floor :</p>
                <p className="text-sm">1 Floor</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Units :</p>
                <p className="text-sm">301</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Created On :</p>
                <p className="text-sm">John Doe</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Updated On :</p>
                <p className="text-sm">2024-09-14</p>
              </div>
            </div>
            <h1 className="border-b border-black font-semibold my-5">
              Attachments
            </h1>
            <div className="mb-4">
              {file ? (
                <p className="text-green-600">
                  <FaRegFileAlt size={20} />
                </p>
              ) : (
                <p className="text-red-600">No Attachments</p>
              )}
            </div>
            <div className="flex justify-center items-center  md:p-0 p-2">
              <div className="w-full my-2">
                <div className="flex items-center gap-4 border-b border-gray-200">
                  <button
                    className={`font-medium ${
                      serviceFor === "schedule"
                        ? "text-black border-b border-black"
                        : "text-gray-400"
                    }`}
                    onClick={() => setserviceFor("schedule")}
                  >
                    Schedule
                  </button>
                  <button
                    className={`font-medium ${
                      serviceFor === "logs"
                        ? "border-b border-black text-black"
                        : "text-gray-400"
                    }`}
                    onClick={() => setserviceFor("logs")}
                  >
                    Logs
                  </button>
                </div>
              </div>
            </div>
            {serviceFor === "schedule" && (
              <div className="flex flex-col w-full">
                <div className="z-20 w-full flex gap-2 justify-between md:flex-row flex-col">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search by assigned to"
                    className="p-2 border-gray-300 rounded-md w-full  my-2 outline-none border"
                  />
                </div>
                <Table />
              </div>
            )}
            {serviceFor === "logs" && (
              <div className="">
                <div>
                  <div className="my-4 flex flex-col bg-gray-50 shadow-custom-all-sides p-2 rounded-md gap-2">
                    <div className="grid grid-cols-12">
                      <div className="col-span-11 items-center">
                        <p className="font-medium">Question :</p>
                        <p className="w-full"></p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center bg-green-100 p-2 rounded-md">
                      <p className="font-medium">Answer :</p>
                      <p></p>
                    </div>
                    <p>
                      <span className="font-medium">Comment : </span>
                      <span className="text-violet-500 font-medium"></span>
                    </p>
                    <span className="font-medium text-gray-500">
                      Attachments :
                    </span>
                    <div className="flex  gap-4 flex-wrap my-4 items-center  text-center"></div>
                    <div className="flex justify-between">
                      <p className="">
                        <span className="font-medium text-gray-500">
                          Performed by :
                        </span>
                        <span className="font-medium text-gray-500"></span>
                      </p>
                      <p className="text-sm text-gray-500"></p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {qrCode && (
            <ServiceQrCodeModal
              onClose={() => setQrCode(false)}
            />
          )}
      </div>
    </section>
  );
};

export default ServiceDetails;
