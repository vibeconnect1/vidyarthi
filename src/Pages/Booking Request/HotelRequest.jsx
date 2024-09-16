import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import BookingRequest from "./BookingRequest";
import { PiPlusCircle } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
const HotelRequest = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/hotel-request-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/edit-hotel-request/${row.id}`}>
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
      name: "Destination",
      selector: (row) => row.Destination,
      sortable: true,
    },
    {
      name: "Check-in Date",
      selector: (row) => row.Checkin,
      sortable: true,
    },
    {
      name: "Check-out Date",
      selector: (row) => row.Checkout,
      sortable: true,
    },
    {
      name: "Hotel Preferences",
      selector: (row) => row.Hotel_Preferences,
      sortable: true,
    },
    {
      name: "Booking Confirmation Number",
      selector: (row) => row.Booking_Number,
      sortable: true,
    },
    {
      name: "Booking Confirmation Email",
      selector: (row) => row.booking_email,
      sortable: true,
    },
    {
      name: "Number of Rooms",
      selector: (row) => row.noofrooms,
      sortable: true,
    },
    {
      name: "Room Type",
      selector: (row) => row.room_type,
      sortable: true,
    },
    {
      name: "Special Requests",
      selector: (row) => row.Special_Requests,
      sortable: true,
    },
    {
      name: "Manager Approval ",
      selector: (row) => row.Manager_Approval,
      sortable: true,
    },
    {
      name: "Booking Status ",
      selector: (row) => row.status,
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
      Destination: "Mumbai",
      Checkin: "23/01/2024",
      Checkout: "15/02/2024",
      Hotel_Preferences: "456",
      Booking_Number: "89",
      booking_email: "jkl",
      noofrooms: "3",
      room_type: "single",
      Special_Requests: "ab",
      Manager_Approval: "Upcoming",
      status: "Upcoming",
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
                to={"/school-management/add-hotel-request"}
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
};

export default HotelRequest;
