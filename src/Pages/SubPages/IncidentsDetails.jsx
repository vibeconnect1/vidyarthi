import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";
import InstituteDetails from "../School management/InstituteDetails";
import Header from "../Form/Header";
import IncidentsDetailsUpdateModal from "../Modal/IncidentsDetailsUpdateModal";
import IncidentsDetailsInjuryModal from "../Modal/IncidentsDetailsInjuryModal";

const IncidentsDetails = () => {
  const [injuryModal, showInjuryModal] = useState(false);
  const [updateModal, showUpdateModal] = useState(false);
  const { id } = useParams();
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails/>
        <div className="w-full flex flex-col overflow-hidden">
          <div className="flex gap-2 justify-end my-3 mx-10 md:flex-row flex-col">
            <Link
              to={`/school-management/edit-incidents/${id}`}
              className="font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md"
            >
              <BiEdit />
              Edit Details
            </Link>
            <button
              className="font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md"
              onClick={() => showUpdateModal(true)}
            >
              <FaCheckCircle />
              Update Status
            </button>
            {updateModal && <IncidentsDetailsUpdateModal onclose={() => showUpdateModal(false)} />}
            <button
              className="font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md"
              onClick={() => showInjuryModal(true)}
            >
              <IoMdAdd />
              Add Injury
            </button>
            {injuryModal && <IncidentsDetailsInjuryModal onclose={() => showInjuryModal(false)} />}
            <button
              className="font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md"
            >
              <LuDownload />
              Download Report
            </button>
          </div>
          <div className="flex flex-col my-2 mx-10  p-4 gap-4 rounded-md bg-white">
            <h2 className=" text-lg border-black border-b font-semibold ">
              BASIC DETAILS
            </h2>
            <div className="my-2 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 items-center">
                <p>Status:</p>
                <p className="text-sm font-normal ">Pending</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Incident Date and Time:</p>
                <p className="text-sm font-normal ">18/03/2024 3:12 PM</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Revision Date and Time:</p>
                <p className="text-sm font-normal ">18/03/2024 3:13 PM</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Reporting Date and Time:</p>
                <p className="text-sm font-normal ">18/03/2024 3:13 PM</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Reported By:</p>
                <p className="text-sm font-normal ">Rajnish Patil</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Level:</p>
                <p className="text-sm font-normal ">L1</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Incident Primary Category:</p>
                <p className="text-sm font-normal ">Health and Safety</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Category for the Health and Safety Incident:</p>
                <p className="text-sm font-normal ">Injury / Illness</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Category for the Injury / Illness Incident:</p>
                <p className="text-sm font-normal ">
                  Medical Treatment – Injury
                </p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Support Required:</p>
                <p className="text-sm font-normal ">Yes</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>First Aid provided by Employees?:</p>
                <p className="text-sm font-normal ">No</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Sent for Medical Treatment:</p>
                <p className="text-sm font-normal ">No</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Has Any Property Damage Happend In The Incident:</p>
                <p className="text-sm font-normal "> No</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-2 mx-10 p-4 gap-4 rounded-md bg-white">
            <h2 className=" text-lg border-black border-b font-semibold ">
              DESCRIPTION DETAILS
            </h2>
            <div className="my-2 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 items-center">
                <p>Description:</p>
                <p className="text-sm font-normal ">Accident near Main Gate</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>RCA:</p>
                <p className="text-sm font-normal ">Material Quality</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-2  p-4 gap-4 rounded-md bg-white mx-10">
            <h2 className=" text-lg font-semibold ">INJURIES - 0</h2>
          </div>
          <div className="flex flex-col my-2  p-4 gap-4 rounded-md bg-white mx-10">
            <h2 className=" text-lg font-semibold ">Attachments - 0</h2>
          </div>
          <div className="flex flex-col my-2  p-4 gap-4 rounded-md bg-white mx-10">
            <h2 className=" text-lg font-semibold ">UPDATE STATUS</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncidentsDetails;
