import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import Header from "../Form/Header";
import InstituteDetails from "./InstituteDetails";
import { CiSearch } from "react-icons/ci";

const LiveClasses = () => {
  const [status, setStatus] = useState("all");
  const allColumns = [
    {
      name: "View",
      cell: (row) => (
        <Link to={`/school-management/academic/live-classes-details/${row.id}`}>
          <BsEye size={15} />
        </Link>
      ),
    },
    {
      name: "Topic",
      selector: (row) => row.topic,
    },
    {
      name: "Date",
      selector: (row) => row.dateTime,
    },
    {
      name: "Time",
      selector: (row) => row.time,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
    },
    {
      name: "Teacher",
      selector: (row) => row.teacher,
    },
    {
      name: "Class",
      selector: (row) => row.class,
    },
    {
      name: "Division",
      selector: (row) => row.division,
    },
    {
      name: "No Of Attendees",
      selector: (row) => row.attendees,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Join",
      selector: (row) => (
        <div>
          <button className="rounded-md px-5 py-1 bg-green-500 text-white">
            Join
          </button>
        </div>
      ),
    },
  ];
  const allData = [
    {
      id: 1,
      topic: "Mathematics Review",
      dateTime: "2024-09-03",
      time: "10:00 AM",
      subject: "Mathematics",
      teacher: "Rahul Singh",
      class: "Class 10",
      division: "A",
      attendees: 1,
      status: "Upcoming",
    },
    {
      id: 2,
      topic: "Science Experiment",
      dateTime: "2024-09-04",
      time: "11:00 AM",
      subject: "Science",
      teacher: "Vs Pavan",
      class: "Class 8",
      division: "B",
      attendees: 25,
      status: "Completed",
    },
  ];

  const upcomingColumns = [
    {
      name: "View",
      cell: (row) => (
        <Link to={`/school-management/academic/live-classes-details/${row.id}`}>
          <BsEye size={15} />
        </Link>
      ),
    },
    {
      name: "Topic",
      selector: (row) => row.topic,
    },
    {
      name: "Date",
      selector: (row) => row.dateTime,
    },
    {
      name: "Time",
      selector: (row) => row.time,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
    },
    {
      name: "Teacher",
      selector: (row) => row.teacher,
    },
    {
      name: "Class",
      selector: (row) => row.class,
    },
    {
      name: "Division",
      selector: (row) => row.division,
    },
    {
      name: "No Of Attendees",
      selector: (row) => row.attendees,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Join",
      selector: (row) => (
        <div>
          <button className="rounded-md px-5 py-1 bg-green-500 text-white">
            Join
          </button>
        </div>
      ),
    },
  ];
  const upcomingData = [
    {
      id: 1,
      topic: "Mathematics Review",
      dateTime: "2024-09-03",
      time: "10:00 AM",
      subject: "Mathematics",
      teacher: "Rahul Singh",
      class: "Class 10",
      division: "A",
      attendees: 1,
      status: "Upcoming",
    },
  ];

  const completedColumns = [
    {
      name: "View",
      cell: (row) => (
        <Link to={`/school-management/academic/live-classes-details/${row.id}`}>
          <BsEye size={15} />
        </Link>
      ),
    },
    {
      name: "Topic",
      selector: (row) => row.topic,
    },
    {
      name: "Date",
      selector: (row) => row.dateTime,
    },
    {
      name: "Time",
      selector: (row) => row.time,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
    },
    {
      name: "Teacher",
      selector: (row) => row.teacher,
    },
    {
      name: "Class",
      selector: (row) => row.class,
    },
    {
      name: "Division",
      selector: (row) => row.division,
    },
    {
      name: "No Of Attendees",
      selector: (row) => row.attendees,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Join",
      selector: (row) => (
        <div>
          <button className="rounded-md px-5 py-1 bg-green-500 text-white">
            Join
          </button>
        </div>
      ),
    },
  ];
  const completedData = [
    {
      id: 2,
      topic: "Science Experiment",
      dateTime: "2024-09-04",
      time: "11:00 AM",
      subject: "Science",
      teacher: "Vs Pavan",
      class: "Class 8",
      division: "B",
      attendees: 25,
      status: "Completed",
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <p className="text-xl font-bold text-gray-600 mx-5 my-5">
            Live Classes
          </p>
          <div className="flex justify-between mx-5 my-5">
            <div className="flex gap-5 border-2 border-gray-400 rounded-md px-5 py-2 ">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="all"
                  name="status"
                  value="all"
                  checked={status === "all"}
                  className="mr-2 cursor-pointer"
                  onClick={() => setStatus("all")}
                />
                <label htmlFor="instructor" className="text-base">
                  All
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="upcoming"
                  name="status"
                  value="upcoming"
                  className="mr-2 cursor-pointer"
                  onClick={() => setStatus("upcoming")}
                />
                <label htmlFor="admin" className="text-base">
                  UpComing
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="complete"
                  name="status"
                  value="complete"
                  className="mr-2 cursor-pointer"
                  onClick={() => setStatus("complete")}
                />
                <label htmlFor="employee" className="text-base">
                  Completed
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="border bg-white rounded-md pl-10 pr-4 py-2 w-full focus:outline-none"
                />
                <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
              </div>
              <div>
                <Link
                  to={`/school-management/academic/add-live-classes`}
                  className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
                >
                  <IoAddCircleOutline size={20} /> Add
                </Link>
              </div>
            </div>
          </div>
          {status === "all" && (
            <div className="mx-5 bg-white rounded-md px-5">
              <Table columns={allColumns} data={allData} pagination />
            </div>
          )}

          {status === "upcoming" && (
            <div className="mx-5 bg-white rounded-md px-5">
              <Table columns={upcomingColumns} data={upcomingData} pagination />
            </div>
          )}

          {status === "complete" && (
            <div className="mx-5 bg-white rounded-md px-5">
              <Table
                columns={completedColumns}
                data={completedData}
                pagination
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveClasses;
