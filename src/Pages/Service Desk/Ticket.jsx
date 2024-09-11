import React, { useEffect, useState } from "react";
import InstituteDetails from "../School management/InstituteDetails";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";
import Header from "../Form/Header";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

const Ticket = () => {
  const [status, setStatus] = useState("all");
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/ticket-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/edit-ticket`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Ticket Number",
      selector: (row) => row.ticket_number,
      sortable: true,
    },
    {
      name: "Building Name",
      selector: (row) => row.building_name,
      sortable: true,
    },
    { name: "Floor Name", selector: (row) => row.floor_name, sortable: true },
    { name: "Unit Name", selector: (row) => row.unit, sortable: true },
    {
      name: "Customer Name",
      selector: (row) => row.created_by,
      sortable: true,
    },
    { name: "Category", selector: (row) => row.category_type, sortable: true },
    {
      name: "Sub Category",
      selector: (row) => row.sub_category,
      sortable: true,
    },
    { name: "Title", selector: (row) => row.heading, sortable: true },
    {
      name: "Description",
      selector: (row) => row.text,
      sortable: true,
      // maxWidth: "500px",
    },
    { name: "Status", selector: (row) => row.issue_status, sortable: true },
    { name: "Created By", selector: (row) => row.created_by, sortable: true },
    {
      name: "Created On",
      selector: (row) => row.created_at,
      sortable: true,
    },
    { name: "Priority", selector: (row) => row.priority, sortable: true },
    { name: "Assigned To", selector: (row) => row.assigned_to, sortable: true },
    { name: "Ticket Type", selector: (row) => row.issue_type, sortable: true },
    {
      name: "Total Time",
      selector: (row) => row.created_at,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      ticket_number: "TCK-001",
      building_name: "Building A",
      floor_name: "Floor 3",
      unit: "Unit 305",
      created_by: "John Doe",
      category_type: "Electrical",
      sub_category: "Lighting",
      heading: "Light Flickering",
      text: "The light in the hallway is flickering constantly.",
      issue_status: "Pending",
      created_at: "2024-09-01 10:45 AM",
      priority: "High",
      assigned_to: "Technician A",
      issue_type: "Maintenance",
      total_time: "2 hours",
    },
    {
      id: 2,
      ticket_number: "TCK-002",
      building_name: "Building B",
      floor_name: "Floor 2",
      unit: "Unit 202",
      created_by: "Jane Smith",
      category_type: "Plumbing",
      sub_category: "Leak",
      heading: "Leaky Faucet",
      text: "The faucet in the kitchen is leaking.",
      issue_status: "Approved",
      created_at: "2024-09-02 09:15 AM",
      priority: "Medium",
      assigned_to: "Technician B",
      issue_type: "Repair",
      total_time: "1 hour",
    },
    {
      id: 3,
      ticket_number: "TCK-003",
      building_name: "Building C",
      floor_name: "Floor 1",
      unit: "Unit 101",
      created_by: "Alice Johnson",
      category_type: "HVAC",
      sub_category: "AC Not Working",
      heading: "AC Broken",
      text: "The air conditioning unit is not working.",
      issue_status: "Work In Progress",
      created_at: "2024-09-03 11:30 AM",
      priority: "Low",
      assigned_to: "Technician C",
      issue_type: "Maintenance",
      total_time: "3 hours",
    },
  ];

  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full flex mx-3 mb-10 flex-col overflow-hidden">
          <div className="sm:flex grid grid-cols-2 m-5 justify-start w-fit gap-5 sm:flex-row flex-col flex-shrink flex-wrap ">
            <div className="shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6 px-4 flex flex-col items-center flex-shrink py-1 border-violet-500">
              <span className="font-medium text-base text-black">
                Approval Pending
              </span>
              <span>1</span>
            </div>
            <div className="shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6 px-4 flex flex-col items-center flex-shrink py-1 border-green-500">
              <span className="font-medium text-base text-black">Approved</span>
              <span>1</span>
            </div>
            <div className="shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6 px-4 flex flex-col items-center flex-shrink py-1 border-gray-500">
              <span className="font-medium text-base text-black">Closed</span>
              <span>1</span>
            </div>
            <div className="shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6 px-4 flex flex-col items-center flex-shrink py-1 border-blue-500">
              <span className="font-medium text-base text-black">Complete</span>
              <span>1</span>
            </div>
            <div className="shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6 px-4 flex flex-col items-center flex-shrink py-1 border-yellow-500">
              <span className="font-medium text-base text-black">Pending</span>
              <span>1</span>
            </div>
            <div className="shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6 px-4 flex flex-col items-center flex-shrink py-1 border-red-500">
              <span className="font-medium text-base text-black">Reopened</span>
              <span>1</span>
            </div>
            <div className="shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6 px-4 flex flex-col items-center flex-shrink py-1 border-purple-500">
              <span className="font-medium text-base text-black">
                Work Completed
              </span>
              <span>1</span>
            </div>
            <div className="shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6 px-4 flex flex-col items-center flex-shrink py-1 border-orange-500">
              <span className="font-medium text-base text-black">
                Work In Process
              </span>
              <span>1</span>
            </div>
            <div className="shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6 px-4 flex flex-col items-center flex-shrink py-1 border-violet-500">
              <span className="font-medium text-base text-black">
              Complaint
              </span>
              <span>1</span>
            </div>
            <div className="shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6 px-4 flex flex-col items-center flex-shrink py-1 border-green-500">
              <span className="font-medium text-base text-black">
                Request
              </span>
              <span>1</span>
            </div>
            <div className="shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6 px-4 flex flex-col items-center flex-shrink py-1 border-amber-500">
              <span className="font-medium text-base text-black">
              Suggestion
              </span>
              <span>1</span>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col justify-between gap-2 my-5 mx-5">
            <div className="md:flex justify-between grid grid-cols-2 items-center  gap-2 border border-gray-300 rounded-md px-5 p-2 w-auto bg-white">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="all"
                  name="status"
                  checked={status === "all"}
                  className="mr-2 cursor-pointer"
                  onClick={() => setStatus("all")}
                />
                <label htmlFor="all" className="text-sm">
                  All
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="open"
                  name="status"
                  checked={status === "open"}
                  className="mr-2 cursor-pointer"
                  onClick={() => setStatus("open")}
                />
                <label htmlFor="open" className="text-sm">
                  Open
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="closed"
                  name="status"
                  checked={status === "closed"}
                  className="mr-2 cursor-pointer"
                  onClick={() => setStatus("closed")}
                />
                <label htmlFor="closed" className="text-sm">
                  Closed
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="pending"
                  name="status"
                  checked={status === "pending"}
                  className="mr-2 cursor-pointer"
                  onClick={() => setStatus("pending")}
                />
                <label htmlFor="pending" className="text-sm">
                  Pending
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="completed"
                  name="status"
                  checked={status === "completed"}
                  className="mr-2 cursor-pointer"
                  onClick={() => setStatus("completed")}
                />
                <label htmlFor="completed" className="text-sm">
                  Completed
                </label>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-2">
              <input
                type="text"
                placeholder="Search by Title, Ticket number, Category, Ticket type, Priority or Unit "
                className="border border-gray-400 md:w-96 placeholder:text-xs rounded-lg p-2"
              />

              <Link
                to={"/school-management/create-ticket"}
                className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
              >
                <PiPlusCircle size={20} />
                Add
              </Link>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Export
              </button>
            </div>
          </div>
          <div className="mx-5">
            <Table columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
