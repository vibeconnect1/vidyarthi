import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import profile3 from "/profile3.jpg";
import Table from "../../ConfigurationFile/Table";
import { FaFileAlt, FaQrcode } from "react-icons/fa";
import StaffQrCodeModal from "../Modal/StaffQrCodeModal";
const StaffDetails = () => {
    const [qrCode, setQrCode] = useState(false);
  const columns = [
    {
      name: "Sr No",
      selector: (row) => row.srNo,
      sortable: true,
    },
    {
      name: "Day",
      selector: (row) => row.day,
      sortable: true,
    },
    {
      name: "Start Time",
      selector: (row) => row.startTime,
      sortable: true,
    },
    {
      name: "End Time",
      selector: (row) => row.endTime,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      srNo: "1",
      day: "Monday",
      startTime: "11:00 Am",
      endTime: "12:00 Pm",
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full mx-5">
          <h2 className="text-center md:text-xl font-bold p-2 bg-white rounded-md my-4 text-black">
            Staff Details
          </h2>
          <div className="border border-gray-300 rounded-lg py-5 px-5 w-full bg-white mb-5">
            <div className="flex gap-2 justify-end my-5 mx-5">
              <button
                className="flex gap-2 items-center justify-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white transition-all duration-500"
                onClick={() => setQrCode(true)}
              >
                <FaQrcode /> QR Code
              </button>
            </div>
            <div className="flex justify-center my-5">
              <img src={profile3} className="w-40 h-40 rounded-full"></img>
            </div>
            <div className="md:grid  px-4 flex flex-col grid-cols-3 gap-5 gap-x-4 border border-gray-200 py-5 rounded-md">
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">ID : </p>
                <p className="">1</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Name : </p>
                <p className="">Rajnish Patil</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Unit : </p>
                <p className="">78</p>
              </div>

              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">department: </p>
                <p className="">Security</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Email : </p>
                <p className="">rajnish@gmail.com</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Mobile : </p>
                <p className="">8965456123</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Staff Id : </p>
                <p className="">178</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Work Type : </p>
                <p className="">Driver</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Vendor name : </p>
                <p className="">Rakesh</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Status : </p>
                <p className="">Rejected</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="border-b border-gray-500 my-5 text-lg font-medium">
              Working Schedule
            </h2>
            <div>
              <Table columns={columns} data={data} />
            </div>
          </div>
          <div>
            <h2 className="border-b border-gray-500 my-5 text-lg font-medium">
              Attachments
            </h2>
            <div className="bg-white py-5 px-5 my-5 rounded-md flex justify-center">
              <FaFileAlt size={30} />
            </div>
          </div>
        </div>
      </div>
      {qrCode && (
        <StaffQrCodeModal
          onClose={() => setQrCode(false)}
        />
      )}
    </div>
  );
};

export default StaffDetails;
