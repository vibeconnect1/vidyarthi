import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { FaRegFileAlt } from "react-icons/fa";

function Attendance() {
  const columns = [
    {
      name: "Action",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/academic-study-materials-details`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/academic-edit-study-materials`}>
            <BiSolidEdit size={15} />
          </Link>
        </div>
      ),
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
      name: "Roll No",
      selector: (row) => row.rollNo,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
        name: "Status",
        selector: (row) => row.status,
    },
  ];
  const data = [
    {
      title: "The Midnight Visitor",
      class: "9th",
      division: "A",
      attachment: (
        <div>
          <FaRegFileAlt size={20} />
        </div>
      ),
    },
  ];
  return (
    <section>
      <div className="w-full flex flex-col overflow-hidden">
        <div className="flex justify-between gap-5 my-5">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="border bg-white rounded-md pl-10 pr-4 py-2 w-full focus:outline-none"
            />
            <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
          <Link
            to={`/school-management/academic-add-study-materials`}
            className="bg-white rounded-md px-4 p-1 flex gap-2 justify-center items-center"
          >
            <IoAddCircleOutline size={20} /> Add
          </Link>
        </div>
        <div>
          <Table columns={columns} data={data} pagination />
        </div>
      </div>
    </section>
  );
}

export default Attendance;
