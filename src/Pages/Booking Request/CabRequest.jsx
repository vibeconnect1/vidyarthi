import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import BookingRequest from "./BookingRequest";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../ConfigurationFile/Table";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

function CabRequest() {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/cab-request-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/edit-cab-request/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Employee ID",
      selector: (row) => row.Id,
      sortable: true,
    },
    {
      name: "Employee Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Pickup Location",
      selector: (row) => row.Pickup_Location,
      sortable: true,
    },
    {
      name: "Drop-off Location",
      selector: (row) => row.Dropoff_location,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Time",
      selector: (row) => row.time,
      sortable: true,
    },
    {
      name: "Number of Passengers",
      selector: (row) => row.noofpassenger,
      sortable: true,
    },
    {
      name: "Driver Information",
      selector: (row) => row.driver,
      sortable: true,
    },
    {
      name: "Transportation Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Class",
      selector: (row) => row.Class,
      sortable: true,
    },
    {
      name: "Special Requirements",
      selector: (row) => row.req,
      sortable: true,
    },
    {
      name: "Vehicle Details",
      selector: (row) => row.Passport_Information,
      sortable: true,
    },
    {
      name: "Manager Approval",
      selector: (row) => row.Manager_Approval,
      sortable: true,
    },
    {
      name: "Booking Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Confirmation Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Cancellation",
      selector: (row) =>
        row.status === "Upcoming" && (
          <button className="text-red-400 font-medium">Cancel</button>
        ),
      sortable: true,
    },
    {
      name: "Approval",
      selector: (row) =>
        row.status === "Upcoming" && (
          <div className="flex justify-center gap-2">
            <button className="text-green-400 font-medium hover:bg-green-400 hover:text-white transition-all duration-200 p-1 rounded-full">
              <TiTick size={20} />
            </button>
            <button className="text-red-400 font-medium hover:bg-red-400 hover:text-white transition-all duration-200 p-1 rounded-full">
              <IoClose size={20} />
            </button>
          </div>
        ),
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      Id: "55",
      name: "Mi",
      Pickup_Location: "Mumbai",
      Dropoff_location: "abc",
      date: "15/02/2024",
      time: "7:00pm",
      noofpassenger: "4",
      driver: "abc",
      type: "Cab",
      Ticket_number: "89",
      booking_email: "jkl",
      Class: "Economy",
      Passenger_Name: "abc",
      Passport_Information: "ab",
      Manager_Approval: "Upcoming",
      status: "pending",
    },
  ];

  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <BookingRequest />
          <div className="flex md:flex-row flex-col gap-5 justify-between mt-10 my-2 mx-5">
            <div className="sm:flex grid grid-cols-2 items-center justify-center gap-4 bg-white my-2 rounded-md px-3 p-2 w-auto">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="all"
                  name="status"
                  checked={selectedStatus === "all"}
                  onChange={() => setSelectedStatus("all")}
                />
                <label htmlFor="all" className="text-sm">
                  All
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="upcoming"
                  name="status"
                  checked={selectedStatus === "upcoming"}
                  onChange={() => setSelectedStatus("upcoming")}
                />
                <label htmlFor="upcoming" className="text-sm">
                  Upcoming
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="completed"
                  name="status"
                  checked={selectedStatus === "completed"}
                  onChange={() => setSelectedStatus("completed")}
                />
                <label htmlFor="completed" className="text-sm">
                  Completed
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="cancelled"
                  name="status"
                  checked={selectedStatus === "cancelled"}
                  onChange={() => setSelectedStatus("cancelled")}
                />
                <label htmlFor="cancelled" className="text-sm">
                  Cancelled
                </label>
              </div>
            </div>
            <span className="flex gap-4">
              <Link
                to={"/school-management/add-cab-request"}
                className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                style={{ height: "1cm" }}
              >
                <PiPlusCircle size={20} />
                Add
              </Link>
            </span>
          </div>
          <div className="mx-5">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CabRequest