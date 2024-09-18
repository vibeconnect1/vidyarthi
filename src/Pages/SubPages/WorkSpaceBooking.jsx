import React, { useState } from "react";
import { BiExport } from "react-icons/bi";
import { ImEye } from "react-icons/im";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import ExportBookingModal from "../Modal/ExportBookingModal";
import { BsEye } from "react-icons/bs";
import SeatBooking from "./SeatBooking";

const WorkSpaceBooking = () => {
  const [modal, showModal] = useState(false);
  const [page, setPage] = useState("meetingBooking");
  const column = [
    {
      name: "View",
      cell: (row) => (
        <div>
          <Link
            to={`/school-management/work-space-booking/booking-details/${row.id}`}
          >
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    { name: "ID", selector: (row) => row.id, sortable: true },
    {
      name: "Facility",
      selector: (row) => row.facility,
      sortable: true,
    },
    { name: "Booked By", selector: (row) => row.bookedBy, sortable: true },
    { name: "Booked On", selector: (row) => row.bookedOn, sortable: true },
    {
      name: "Facility Type",
      selector: (row) => row.facilityType,
      sortable: true,
    },
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
      action: <ImEye />,
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
      action: <ImEye />,
      facility: "Test2",
      bookedBy: "B",
      bookedOn: "booked date",
      facilityType: "bookable",
      scheduledOn: "date",
      scheduledTime: "time",
      bookingStatus: "pending",
    },
  ];
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full flex mx-5 flex-col overflow-hidden">
          <div className="flex justify-center my-5">
            <div className="sm:flex grid grid-cols-2 sm:flex-row gap-5 font-medium p-2 sm:rounded-full rounded-md opacity-90 bg-white ">
              <h2
                className={`p-1 ${
                  page === "meetingBooking" && "bg-gray-100 text-blue-500"
                } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
                onClick={() => setPage("meetingBooking")}
              >
                Meeting Room Bookings
              </h2>
              <h2
                className={`p-1 ${
                  page === "seatBooking" && "bg-gray-100 text-blue-500"
                } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
                onClick={() => setPage("seatBooking")}
              >
                Seat Bookings
              </h2>
            </div>
          </div>
          {page === "meetingBooking" && (
            <div>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Search By Facility"
                  className="border-2 p-2 w-96 border-gray-300 rounded-lg"
                />
                <div className="flex gap-4 justify-end w-full">
                  <Link
                    to={
                      "/school-management/work-space-booking/facility-booking"
                    }
                    className="bg-black w-20 rounded-lg flex font-semibold items-center gap-2 text-white p-2 my-5"
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
              {modal && <ExportBookingModal onclose={() => showModal(false)} />}
            </div>
          )}
          {page === "seatBooking" && (
            <div>
              <SeatBooking />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkSpaceBooking;
