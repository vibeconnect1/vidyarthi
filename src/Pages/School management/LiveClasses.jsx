import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Header from "../Form/Header";
import InstituteDetails from "./InstituteDetails";

const LiveClasses = () => {
  const columns = [
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
      name: "Duration",
      selector: (row) => row.duration,
    },
    {
      name: "Date & Time",
      selector: (row) => row.dateTime,
    },
    {
      name: "Meeting Id",
      selector: (row) => row.meetingId,
    },
    {
      name: "Password",
      selector: (row) => row.password,
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
      name: "Join Link",
      selector: (row) => row. JoinLink,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/academic/edit-live-classes/${row.id}`}>
            <BiSolidEdit size={15} />
          </Link>
          <button>
            <RiDeleteBin5Line size={15} />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      topic: "Mathematics Review",
      duration: "45 minutes",
      dateTime: "2024-09-03 10:00 AM",
      meetingId: "123-456-789",
      password: "abc123",
      subject: "Mathematics",
      teacher: "Rahul Singh",
      class: "Class 10",
      division: "A",
      JoinLink: "https://example.com/meeting/123-456-789",
    },
    {
      id: 2,
      topic: "Science Experiment",
      duration: "60 minutes",
      dateTime: "2024-09-04 11:00 AM",
      meetingId: "987-654-321",
      password: "def456",
      subject: "Science",
      teacher: "Vs Pavan",
      class: "Class 8",
      division: "B",
      JoinLink: "https://example.com/meeting/987-654-321",
    },
  ];
  
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Live Classes</p>
            <Link
              to={`/school-management/academic/add-live-classes`}
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
};

export default LiveClasses;
