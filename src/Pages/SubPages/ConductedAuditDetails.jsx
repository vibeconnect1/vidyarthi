import React, { useState } from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Header from "../Form/Header";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { IoAddCircleOutline } from "react-icons/io5";
import AddItems from "../Modal/AddItems";

const ConductedAuditDetails = () => {
    const [itemModal , setItemModal] = useState(false);
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col w-full overflow-hidden">
          <div className="flex gap-2 justify-end mt-5 mx-5">
            <button
              className="flex gap-2 items-center justify-center border-2 border-black px-4 p-1 rounded-md hover:bg-black hover:text-white transition-all duration-500"
              onClick={() => setItemModal(true)}
            >
               <IoAddCircleOutline size={20} /> Add Item
            </button>
            <Link
              to={`/school-management/edit-conducted-audit-details`}
              className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-md hover:bg-black transition-all duration-300 hover:text-white"
            >
              <BiEditAlt />
              Edit Details
            </Link>
          </div>
          <h2 className="text-center bg-white font-semibold my-3 text-lg p-2 px-4 rounded-md mx-5">
            Ticket Details
          </h2>
          <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-3 bg-white mx-5 rounded-md p-8">
            <div className="grid grid-cols-2 ">
              <p>Site Owner : </p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Ticket No : </p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Status : </p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Site : </p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Issue Type : </p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Assigned To : </p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Building Name :</p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Category :</p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Priority : </p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Floor Name :</p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Sub category : </p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Related To :</p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Unit :</p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Total time :</p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Created By :</p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Created On :</p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Updated On :</p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Rating :</p>
              <p className="text-sm font-normal"></p>
            </div>
          </div>
          <div className="flex flex-col  flex-wrap gap-2">
            <h2 className="text-center bg-white font-semibold mt-3 text-lg p-2 px-4 mx-5 rounded-md">
              Additional Info
            </h2>
            <div className="bg-white p-8 mx-5 rounded-md">
              <div className="px-4 flex flex-col gap-1 justify-center">
                <p className="font-medium">Description :</p>
                <p className="text-wrap bg-gray-200 p-2 rounded-md"></p>
              </div>
              <div className="px-4 flex flex-col gap-1 justify-center">
                <p className="font-medium">Impact :</p>
                <p className="text-wrap bg-gray-200 p-2 rounded-md"></p>
              </div>
              <div className="px-4 flex flex-col gap-1 justify-center">
                <p className="font-medium">Root Cause :</p>
                <p className="text-wrap bg-gray-200 p-2 rounded-md "></p>
              </div>
              <div className="px-4 flex flex-col gap-1 justify-center">
                <p className="font-medium">Corrective Action :</p>
                <p className="text-wrap bg-gray-200 p-2 rounded-md"></p>
              </div>
              <div className="px-4 flex flex-col gap-1 justify-center">
                <p className="font-medium">Proactive/Reactive :</p>
                <p className="text-wrap bg-gray-200 p-2 rounded-md">Reactive</p>
              </div>
              <div className="px-4 flex flex-col gap-1 justify-center">
                <p className="font-medium">Correction :</p>
                <p className="text-wrap bg-gray-200 p-2 rounded-md"></p>
              </div>
            </div>
          </div>
          <div className="my-5 mx-5 rounded-md">
            <Table />
          </div>
          <h2 className="text-center bg-white font-semibold mt-3 text-lg p-2 px-4 mx-5 rounded-md">
            Attachments
          </h2>
          <div>
            <p className="text-center my-5">No Attachment</p>
          </div>
          <div className="flex sm:flex-row flex-col items-center "></div>

          <h2 className="text-center bg-white font-semibold mt-3 text-lg p-2 px-4 mx-5 rounded-md">
            Logs
          </h2>
          <h2 className="text-center bg-white font-semibold mt-3 text-lg p-2 px-4 mx-5 rounded-md">
            Escalations
          </h2>
          <div className="px-4 mb-10"></div>
        </div>
      </div>
      {
        itemModal && (<div>
            <AddItems onclose={() =>setItemModal(false)} />
        </div>)
      }
    </div>
  );
};

export default ConductedAuditDetails;
