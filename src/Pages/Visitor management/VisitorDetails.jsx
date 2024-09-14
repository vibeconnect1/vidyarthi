import React, { useState } from "react";
import { BiEdit, BiQr } from "react-icons/bi";
import { Link } from "react-router-dom";
import image from "/profile.png";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import VisitorQRModal from "../Modal/VisitorQRModal";
const VisitorDetails = () => {
  const VisitorColumns = [
    {
      name: " Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: " Mobile No.",
      selector: (row) => row.contact_no,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => row.created_at,
      sortable: true,
    },
  ];

  const visitorData = [
    {
      name: "John Doe",
      contact_no: "123-456-7890",
      created_at: "2024-09-01 10:00 AM",
    },
    {
      name: "Jane Smith",
      contact_no: "987-654-3210",
      created_at: "2024-09-01 11:30 AM",
    },
    {
      name: "Emily Johnson",
      contact_no: "555-555-5555",
      created_at: "2024-09-02 09:45 AM",
    },
  ];

  const visitorLogColumn = [
    {
      name: "Sr. no.",
      selector: (row) => row.SrNo,
      sortable: true,
    },
    {
      name: " Check in",
      selector: (row) => row.check_in,
      sortable: true,
    },
    {
      name: " Check out",
      selector: (row) => row.check_in,
      sortable: true,
    },
  ];

  const visitorLogData = [
    {
      SrNo: 1,
      check_in: "2024-09-01 10:00 AM",
      check_out: "2024-09-01 12:00 PM",
    },
    {
      SrNo: 2,
      check_in: "2024-09-01 11:30 AM",
      check_out: "2024-09-01 01:30 PM",
    },
    {
      SrNo: 3,
      check_in: "2024-09-02 09:45 AM",
      check_out: "2024-09-02 11:45 AM",
    },
  ];

  const [qrModal, setQrmodal] = useState(false);
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className=" w-full flex mx-5 flex-col overflow-hidden">
          <div className="flex flex-col gap-2">
            <h2 className="text-center rounded-md w-full text-black font-semibold text-lg p-2 px-4 mt-2 bg-white">
              Visitor Details
            </h2>
            <div className="bg-white rounded-md py-5 px-3 my-3">
              <div className="flex justify-end gap-2 mx-2 mt-1">
                <button
                  onClick={() => setQrmodal(true)}
                  className="border-2 border-black rounded-full px-2 p-1 flex items-center gap-2"
                >
                  <BiQr /> QR code
                </button>
                <Link
                  to={`/school-management/edit-visitor`}
                  className="border-2 border-black rounded-full px-2 p-1 flex items-center gap-2"
                >
                  <BiEdit /> Edit Details
                </Link>
              </div>
              <div className="flex justify-center">
                <img src={image} alt="" className="w-48 h-48" />
              </div>
              <div className="md:grid  px-4 flex flex-col grid-cols-3 gap-5 gap-x-4 ">
                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Visitor Type : </p>
                  <p className="">Business</p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Visitor's Name : </p>
                  <p className="">John Doe</p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Mobile No. : </p>
                  <p className="">1234567890</p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Purpose : </p>
                  <p className="">Meeting</p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Coming From : </p>
                  <p className="">New York</p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Vehicle No. : </p>
                  <p className="">NY1234</p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Expected Date : </p>
                  <p className="">2024-09-11</p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Expected Time : </p>
                  <p className="">10:00 AM</p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Goods Inward : </p>
                  <p className="">Yes</p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">
                    Host Approval Needed ? :{" "}
                  </p>
                  <p className="">Yes</p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Pass Start Date : </p>
                  <p className="">2024-09-11T1</p>
                </div>

                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Pass End Date : </p>
                  <p className="">2024-09-11T05:</p>
                </div>

                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Host : </p>
                  <p className="">prafultest kadampost</p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Created On : </p>
                  <p className="">Tue Aug 20 2024</p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Updated On : </p>
                  <p className=""></p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className="font-semibold text-sm">Permitted Days : </p>
                  <p className="">Fri Aug 23 2024</p>
                </div>
              </div>
            </div>
            <div className="my-2">
              <h2 className="font-medium border-b-2 text-lg border-black px-4">
                Visitor Log
              </h2>
              <div className="my-4">
                <Table columns={visitorLogColumn} data={visitorLogData} />
              </div>
            </div>
            <div className="my-2 ">
              <h2 className="font-medium border-b-2 text-lg border-black px-4 ">
                Additional Visitors Info
              </h2>
              <div className="my-4 ">
                <Table columns={VisitorColumns} data={visitorData} />
              </div>
            </div>
          </div>
        </div>
        {qrModal && (
        <VisitorQRModal
          onClose={() => setQrmodal(false)}
        />
      )}
      </div>
    </section>
  );
};

export default VisitorDetails;
