import React from "react";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { FaFile } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BiSolidEdit } from "react-icons/bi";

function AssignHomework() {
  const columns = [
    {
      name: "Action",

      cell: (row) => (
        <div className="flex gap-2">
          <Link to={`/school-management/academic/assign-homework-details/${row.id}`}>
            <BsEye />
          </Link>
          <Link
            to={`/school-management/academic/edit-assign-homework/${row.id}`}
          >
            <BiSolidEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Title",
      selector: (row) => row.title,
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
      name: "Subject",
      selector: (row) => row.subject,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "File",
      selector: (row) => <FaFile />,
    },
  ];
  const data = [
    {
      title: "Equation",
      class: "9th",
      division: "A",
      subject: "math",
      date: "12,sep 2024",
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
            to={`/school-management/academic/add-assign-homework`}
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

export default AssignHomework;
