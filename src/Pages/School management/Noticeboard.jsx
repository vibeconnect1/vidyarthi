import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Header from "../Form/Header";
import InstituteDetails from "./InstituteDetails";
import { FaFile } from "react-icons/fa";

const Noticeboard = () => {
  const columns = [
    {
      name: "View",

      cell: (row) => (
        <Link to={`/school-management/academic/noticeboard-details/${row.id}`}>
          <BsEye size={15} />
        </Link>
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
      name: "Student",
      selector: (row) => row.student,
    },
    {
        name: "Date",
        selector: (row) => row.date,
    },
    {
        name: "File",
        selector: (row) => <FaFile />,
      },
    {
      name: "Action",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/academic/edit-noticeboard/${row.id}`}>
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
      title :'Exam',
      class: "9th",
      division: "A",
      student: "All Student",
      date:'3 Sep, 2024'
    },
    {
      id: 2,
      title :'Exam',
      class: "10th",
      division: "C",
      student: "Karan Singh",
      date:'1 Sep, 2024'
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Noticeboard</p>
            <Link
              to={`/school-management/academic/add-noticeboard`}
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

export default Noticeboard;
