import React from "react";
import { CiSearch } from "react-icons/ci";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

function Schedule() {
  const columns = [
    {
      name: "View",

      cell: (row) => (
        <div className="flex gap-3">
          <Link to={`/school-management/schedule-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "CheckList",
      selector: (row) => row.checkList,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Assigned To",
      selector: (row) => row.assignedTo,
    },
  ];

  const data = [
    {
      id: 1,
      checkList: "Canteen Hygiene",
      startDate: "2024-08-01",
      status: "In Progress",
      assignedTo: "John Doe",
    },
    {
      id: 2,
      checkList: "Food Preparation",
      startDate: "2024-08-05",
      status: "Completed",
      assignedTo: "Jane Smith",
    },
  ];
  
  return (
    <div className="p-4">
      <div className="flex gap-5 my-5">
        <div className="relative w-full">
          <input
            type="search"
            placeholder="Search"
            className="border bg-white rounded-md pl-10 pr-4 py-2 w-full focus:outline-none"
          />
          <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        </div>
        <input
          type="date"
          className="border border-gray-500 rounded-md py-1 px-5"
        ></input>
      </div>
      <Table columns={columns} data={data} pagination />
    </div>
  );
}

export default Schedule;
