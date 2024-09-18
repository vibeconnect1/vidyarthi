import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";
import { BiExport } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

const SeatBooking = () => {
  const column = [
    {
      name: "View",
      cell: (row) => (
        <div>
          <Link
            to={`/school-management/work-space-booking/seat-booking-details/${row.id}`}
          >
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    { name: "Booking ID", selector: (row) => row.id, sortable: true },
    {
      name: "Seat Type",
      selector: (row) => row.facility,
      sortable: true,
    },
    {
      name: "Seat Number",
      selector: (row) => row.facility,
      sortable: true,
    },
    { name: "Booked By", selector: (row) => row.bookedBy, sortable: true },
    { name: "Booked On", selector: (row) => row.bookedOn, sortable: true },
    {
      name: "Scheduled On",
      selector: (row) => row.scheduledOn,
      sortable: true,
    },
    {
      name: "Scheduled Time",
      selector: (row) => row.scheduledTime,
      sortable: true,
    },
    {
      name: "Booking Status",
      selector: (row) => row.bookingStatus,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      facility: "fac1",
      bookedBy: "A",
      bookedOn: "booked date",
      facilityType: "bookable",
      scheduledOn: "date",
      scheduledTime: "time",
      bookingStatus: "confirmed",
    },
    {
      id: 2,
      facility: "Test2",
      bookedBy: "B",
      bookedOn: "booked date",
      facilityType: "bookable",
      scheduledOn: "date",
      scheduledTime: "time",
      bookingStatus: "Requested",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search By Facility"
          className="border-2 p-2 w-96 border-gray-300 rounded-lg"
        />
        <div className="flex gap-4 justify-end w-full">
          <Link
            to={"/school-management/work-space-booking/add-seat-booking"}
            className=" w-20 rounded-lg flex font-semibold items-center text-white gap-2 bg-black p-2 my-5"
          >
            <IoAddCircleOutline size={20} />
            Book
          </Link>
          <button
            onClick={() => showModal(true)}
            className="bg-black rounded-lg flex font-semibold items-center gap-2 text-white p-2 my-5"
          >
            <BiExport size={20} />
            Export
          </button>
        </div>
      </div>
      <Table columns={column} data={data} />
      {/* {modal && <ExportBookingModal onclose={() => showModal(false)} />} */}
    </div>
  );
};

export default SeatBooking;
