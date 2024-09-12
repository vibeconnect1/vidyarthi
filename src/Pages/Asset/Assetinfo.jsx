import React, { useState } from "react";
import { FaQrcode, FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import output from "/output.png";
import Table from "../../ConfigurationFile/Table";
import AssetQrCode from "./AssetQrCode";
function Assetinfo() {
    const [qrCode, setQrCode] = useState(false);
  const column = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button onClick={() => handleEditParameter(row.id)}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
    { name: "Name", selector: (row) => row.name },
    { name: "Order", selector: (row) => row.order },
    { name: "Charactor Limit", selector: (row) => row.digit },
    { name: "Alert Below", selector: (row) => row.alert_below },
    { name: "Alert Above", selector: (row) => row.alert_above },
    { name: "Min", selector: (row) => row.min_val },
    { name: "Max", selector: (row) => row.max_val },
    {
      name: "Dashboard view",
      selector: (row) => row.dashboard - view,
    },
    {
      name: "Consumption view",
      selector: (row) => row.consumption - view,
    },
    {
      name: "Check prev Readings",
      selector: (row) => row.check - prev - readings,
    },
    {
      name: "created on",
      selector: (row) => row.createdOn,
    },
    {
      name: "Updated on",
      selector: (row) => row.updatedOn,
    },
  ];
  return (
    <div>
      <div className="flex flex-col overflow-hidden w-full">
        <div className="flex flex-col my-5 p-4 gap-4 rounded-md bg-white mx-3">
          <div className=" flex sm:flex-row flex-col gap-5 justify-between ">
            <div className="flex items-center gap-2 "></div>
            <div className="flex md:flex-row flex-col gap-2">
              <button className="flex gap-2 items-center justify-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white transition-all duration-500"
              onClick={() => setQrCode(true)}
              >
                <FaQrcode /> QR Code
              </button>
              <Link
                to={`/school-management/edit-assets`}
                className="flex gap-2 items-center justify-center border-2 border-black px-4 p-1 rounded-full  hover:bg-black hover:text-white transition-all duration-500"
              >
                <BiEditAlt />
                Edit Details
              </Link>
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Location Details
            </h2>
            <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2">
                <p>Building : </p>
                <p className="text-sm font-normal">East Building</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Floor : </p>
                <p className="text-sm font-normal">B-1 Parking</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Unit : </p>
                <p className="text-sm font-normal">B1 BASMENT</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="border-b text-xl border-black font-semibold">
              Asset Information
            </h2>
            <div className="my-5 md:px-10 items-center font-medium grid gap-5 md:grid-cols-3 text-sm">
              <div className="grid grid-cols-2 items-center">
                <p>Asset Name : </p>
                <p className="text-sm font-normal">Chiller 320TR</p>
              </div>

              <div className="grid grid-cols-2">
                <p>Model Number : </p>
                <p className="text-sm font-normal">ch-3487</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Serial Number :</p>
                <p className="text-sm font-normal"> CT977846</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Purchased on : </p>
                <p className="text-sm font-normal">2024-09-01</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Date Of Installation : </p>
                <p className="text-sm font-normal">2024-09-01</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Breakdown : </p>
                <p className="text-sm font-normal">No</p>
              </div>

              <div className="grid grid-cols-2">
                <p>Capacity : </p>
                <p className="text-sm font-normal">200</p>
              </div>
              <div className="grid grid-cols-2">
                <p>UOM : </p>
                <p className="text-sm font-normal">LTR</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Purchase Cost : </p>
                <p className="text-sm font-normal">50</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Group : </p>
                <p className="text-sm font-normal">prafulll</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Subgroup : </p>
                <p className="text-sm font-normal">wert</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Critical : </p>
                <p className="text-sm font-normal">Yes</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Meter Applicable : </p>
                <p className="text-sm font-normal">Yes</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Created On : </p>
                <p className="text-sm font-normal">9/2/2024, 10:42:02 AM</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Updated On : </p>
                <p className="text-sm font-normal">9/2/2024, 10:42:02 AM</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Additional Info
            </h2>
            <div className="flex  flex-col my-2 gap-2">
              <p className="font-medium">Comments : </p>
              <div className="bg-gray-400 p-1 text-white rounded-md">
                <div className="text-center w-full">No Comments</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium">Description : </p>
              <div className="bg-gray-400 p-1 text-white rounded-md">
                <div className="text-center w-full">No Description</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Warranty Details
            </h2>
            <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-3 w-full">
              <div className="grid grid-cols-2 items-center">
                <p>Warranty Start Date :</p>
                <p className="text-sm">2024-09-01</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Expiry Date : </p>
                <p className="text-sm">2025-03-08</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Attachments
            </h2>
            <div className="flex md:flex-row flex-col justify-between gap-2 w-full">
              <div className="bg-gray-100 p-1 rounded-md my-2 px-2 w-96">
                <p className="text-center font-medium">Purchase Invoice</p>
                <div className="flex  gap-4 justify-center my-4 items-center text-center">
                  <p className="text-center w-full">No Attachments</p>
                </div>
              </div>
              <div className="bg-gray-100 p-1 rounded-md my-2 px-2 w-96">
                <p className="text-center font-medium">Insurance</p>
                <div className="flex  gap-4 justify-center my-4 items-center text-center">
                  <div className="">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="attachment-link hover:text-blue-400 transition-all duration-300  text-center flex flex-col items-center  "
                    >
                      <FaRegFileAlt size={50} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-1 rounded-md my-2 px-2 w-96">
                <p className="text-center font-medium">Manuals</p>
                <div className="flex  gap-4 justify-center my-4 items-center text-center">
                  <div className="">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="attachment-link hover:text-blue-400 transition-all duration-300  text-center flex flex-col items-center  "
                    >
                      <FaRegFileAlt size={50} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-1 rounded-md my-2 px-2 ">
              <p className="text-center font-medium">Other Files</p>
              <div className="flex  gap-4 flex-wrap my-4 items-center  text-center">
                <div className="">
                  <img
                    src={output}
                    alt=""
                    className="w-40 h-28 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="border-b  text-xl border-black font-semibold">
              Consumption Parameter
            </h2>
            <div className="grid md:grid-cols-3 items-start gap-4 w-full py-5">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="order"
                  id="order"
                  placeholder="Enter Order"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="digit"
                  id="charactorLimit"
                  placeholder="Input Character Limit"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="alert_below"
                  id="below"
                  placeholder="Alert Below Value"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="alert_above"
                  id="above"
                  placeholder="Alert Above Value"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="min_val"
                  id="min"
                  placeholder="Min Value"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="max_val"
                  id="max"
                  placeholder="Max Value"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="dashboard_view"
                  id="dashboard_view"
                />
                <label htmlFor="dashboard_view">Dashboard View</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="consumption_view"
                  id="consumption_view"
                />
                <label htmlFor="consumption_view">Consumption View</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="check_prev" id="check_prev" />
                <label htmlFor="check_prev">Check previous Reading</label>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-black p-1 px-4 font-medium text-white rounded-md">
                Add
              </button>
            </div>
            <div className="border-b-2 my-2 border-gray-400" />
          </div>
          <Table columns={column} />
        </div>
        {qrCode && (
          <AssetQrCode
            onClose={() => setQrCode(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Assetinfo;
