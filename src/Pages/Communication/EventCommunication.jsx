import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
function EventCommunication() {
  const columns = [
    {
      name: "View",

      cell: (row) => (
        <Link to={`/student/event-details/${row.id}`}>
          <BsEye size={15} />
        </Link>
      ),
    },
    {
      name: "Event Title",
      selector: (row) => row.eventTitle,
    },
    {
      name: "Venue",
      selector: (row) => row.venue,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Created By",
      selector: (row) => row.createdBy,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
    },
    {
      name: "End Date",
      selector: (row) => row.endDate,
    },
    {
      name: "Event Type",
      selector: (row) => row.eventType,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Expired",
      selector: (row) => row.expired,
    },
    {
      name: "Created On",
      selector: (row) => row.createdOn,
    },
  ];

  const data = [
    {
      id: 1,
      eventTitle: "TechSpark Summit",
      venue: "Tech Convention Center",
      description: "A summit on the latest in technology and innovation.",
      createdBy: "John Doe",
      startDate: "5 Sep, 2024",
      endDate: "7 Sep, 2024",
      eventType: "Conference",
      status: "Ongoing",
      expired: "No",
      createdOn: "1 Aug, 2024",
    },
    {
      id: 2,
      eventTitle: "AI Expo 2024",
      venue: "AI Innovation Hub",
      description: "Exhibition showcasing the latest advancements in AI.",
      createdBy: "Jane Smith",
      startDate: "10 Sep, 2024",
      endDate: "12 Sep, 2024",
      eventType: "Exhibition",
      status: "Upcoming",
      expired: "No",
      createdOn: "15 Aug, 2024",
    },
    {
      id: 3,
      eventTitle: "Design Thinking Workshop",
      venue: "Creative Studio",
      description: "Hands-on workshop on design thinking techniques.",
      createdBy: "Alice Brown",
      startDate: "1 Oct, 2024",
      endDate: "2 Oct, 2024",
      eventType: "Workshop",
      status: "Upcoming",
      expired: "No",
      createdOn: "1 Sep, 2024",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Event</p>
            <Link
              to={`/student/add-event`}
              className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center text-gray-800 text-base"
            >
              <IoAddCircleOutline size={20} /> Add
            </Link>
          </div>
          <div className="mx-5 bg-white rounded-md px-5">
            <Table columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCommunication;
